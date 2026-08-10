import { NextResponse, type NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase-server";
import { getSkillContent, getSkillsManifest } from "@/lib/ai-skills";

export const maxDuration = 120;

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "AI is not configured. Add ANTHROPIC_API_KEY to environment variables." }, { status: 500 });
  }

  const body = await request.json();
  const idea = body.idea?.trim();
  const selectedSlugs: string[] = body.selected_skills || [];

  if (!idea) {
    return NextResponse.json({ error: "Idea text is required" }, { status: 400 });
  }
  if (selectedSlugs.length === 0) {
    return NextResponse.json({ error: "At least one skill must be selected" }, { status: 400 });
  }

  const constraints = body.constraints || {};
  const manifest = getSkillsManifest();
  const validSlugs = selectedSlugs.filter((s) =>
    manifest.some((m) => m.slug === s)
  );

  if (validSlugs.length === 0) {
    return NextResponse.json({ error: "No valid skills selected" }, { status: 400 });
  }

  const skillContent = getSkillContent(validSlugs);

  const MAX_SKILL_CHARS = 3000;
  const skillsContext = Object.entries(skillContent)
    .map(([path, content]) => {
      const trimmed = content.length > MAX_SKILL_CHARS
        ? content.slice(0, MAX_SKILL_CHARS) + "\n\n[...truncated]"
        : content;
      return `### ${path}\n\n${trimmed}`;
    })
    .join("\n\n---\n\n");

  const systemPrompt = `You are acting as an AI product engineer and full-stack web architect for Rooted-in-Learning, an EdTech platform for K-8 educators. The platform is built on Next.js (App Router), Supabase (Postgres + Auth + Storage), Stripe, Vercel, and Sanity CMS.

You have been given:
1. An **idea** to architect,
2. A set of **selected skills** from the ai-skills knowledge base,
3. Optional **constraints** from the user.

Your job: produce the **best possible architecture plan** and a **reusable Claude Code implementation prompt**.

## Rooted-in-Learning Context

- **Stack**: Next.js 15 App Router, React 19, Supabase (Postgres + RLS + Auth + Storage), Stripe Checkout, Vercel, Sanity CMS, Resend email, Tailwind v4
- **Architecture**: Monolith (Next.js full-stack), route groups: (main), (admin), (admin-auth), (protected)
- **Admin features**: src/app/(admin)/admin/ for pages, src/app/api/admin/ for API routes
- **Auth**: Cookie-based Supabase auth, middleware checks, service role for admin writes
- **Conventions**: Prices in cents, RLS on all tables, admin-only policies, inline styles in admin UI
- **Brand**: earth green #5C6B4A, terracotta #B05931, warm cream/beige backgrounds

## Selected Skills & Patterns

${skillsContext}

## Your Task

Using the idea and selected skills as guidance, produce a **single, coherent architecture plan** covering:

1. **High-level architecture overview** — What the system does, how data flows, how the main components interact (frontend, backend, RAG/LLM layer if applicable, databases, external APIs). Name the main services/modules and their responsibilities.

2. **Component & folder structure** — Concrete folder/file tree for this feature within the existing Rooted-in-Learning repo. Include frontend components/pages, backend routes/services, RAG/agent layer (if applicable), and test locations.

3. **Data & RAG design** (if applicable) — How data is stored, indexed, and retrieved. RAG wiring: data sources, index types, query flow, evaluation hooks. Call out which rag-pipelines skills inform these choices.

4. **Agent / orchestration design** (if applicable) — Agents, workflows, or DSPy-style programs: roles, inputs/outputs, how they interact with RAG and APIs. Call out which agent-orchestration skills inform this.

5. **API & integration design** — Key API endpoints: routes, payloads, auth. How frontend interacts with backend + AI/RAG services. Call out relevant llm-integration skills.

6. **Infra & security considerations** — Auth, data privacy, rate limiting, logging, CI/CD, API hardening. Map to infra-security skills.

7. **Assumptions, risks, and alternatives** — Key assumptions, 3-5 main risks/tradeoffs (complexity, cost, latency, maintainability), and 1 alternative architecture when relevant.

8. **Step-by-step implementation plan** — Ordered phases a Claude Code session can follow: folder/file creation order, which modules first, where to integrate RAG/agents, which tests to write early.

## Output Format

Return **raw JSON only** (no markdown fences, no commentary outside the JSON). Structure:

{
  "architecture": {
    "title": "Short descriptive title",
    "summary": "2-3 sentence overview",
    "systems_design": "Detailed markdown covering sections 1, 3, 4, 5, 6, and 7 above. Use ## headings for each section, bullet points, and code blocks where helpful. Be specific about file paths, component names, database columns, and API shapes.",
    "folder_structure": "Text tree showing the proposed folder/file structure",
    "frontend_pieces": ["Component or page — brief description"],
    "backend_pieces": ["API route or service — brief description"],
    "relevant_skills": [
      {
        "slug": "skill-slug",
        "category": "category-name",
        "how_it_applies": "1-2 sentences on how to apply this skill's patterns"
      }
    ],
    "key_decisions": [
      {
        "decision": "What needs to be decided",
        "recommendation": "What I recommend",
        "tradeoff": "What you give up"
      }
    ],
    "implementation_phases": [
      {
        "phase": 1,
        "title": "Phase name",
        "tasks": ["Concrete task description"]
      }
    ]
  },
  "implementation_prompt": "A complete, self-contained Claude Code prompt that can be pasted into a new session to scaffold and build this feature. Include: the Rooted-in-Learning stack context, folder structure, implementation steps in order, references to specific ai-skills patterns to consult (by file name), database schema (tables, columns, RLS policies), API endpoint specs, and testing/verification steps. Format it so Claude Code can execute it top-to-bottom."
}

Be specific and concrete. Name real file paths, database columns, API shapes, and component props. Keep the plan realistic for a small-to-medium feature but detailed enough to hand off and start building.`;

  const constraintText = Object.entries(constraints)
    .filter(([, v]) => v)
    .map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");

  const userMessage = `## Project Idea

${idea.slice(0, 2000)}

${constraintText ? `## Constraints\n\n${constraintText}` : ""}

## Selected Skills

${validSlugs.map((s) => `- ${s}`).join("\n")}

Generate the full architecture plan and implementation prompt.`;

  const anthropic = new Anthropic({ apiKey });

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 12000,
      thinking: { type: "disabled" },
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    let text = textBlock?.type === "text" ? textBlock.text : "";
    if (!text.trim()) {
      return NextResponse.json({ error: "AI returned an empty response. Please try again." }, { status: 502 });
    }

    text = text.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: "AI returned an invalid response. Please try again." }, { status: 502 });
    }

    return NextResponse.json(result);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Architecture generation failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
