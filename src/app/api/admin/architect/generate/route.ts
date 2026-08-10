import { NextResponse, type NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase-server";
import { getSkillContent, getSkillsManifest } from "@/lib/ai-skills";

export const maxDuration = 60;

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

  const skillsContext = Object.entries(skillContent)
    .map(([path, content]) => `### ${path}\n\n${content}`)
    .join("\n\n---\n\n");

  const systemPrompt = `You are the Idea Architect for Rooted-in-Learning, an AI-first EdTech platform serving K-8 educators. Built on Next.js, Supabase, Stripe, and Vercel.

Your job: turn a project idea into a complete architecture plan and a reusable Claude Code implementation prompt.

## Relevant Skills & Patterns (from the ai-skills knowledge base)

${skillsContext}

## Instructions

Produce an architecture plan for the given idea. Return raw JSON (no markdown fences) with this structure:

{
  "architecture": {
    "title": "Short descriptive title for this architecture",
    "summary": "2-3 sentence overview of the proposed system",
    "systems_design": "Detailed markdown description of the systems design: components, data flow, RAG layer (if applicable), agent orchestration, infra/security considerations. Use markdown headings, bullet points, and code blocks where helpful.",
    "folder_structure": "Tree-format string showing the proposed folder/file structure within the Rooted-in-Learning repo",
    "frontend_pieces": ["Component or page name — brief description"],
    "backend_pieces": ["API route or service — brief description"],
    "relevant_skills": [
      {
        "slug": "skill-slug",
        "category": "category-name",
        "how_it_applies": "1-2 sentences on how to use this skill's patterns"
      }
    ],
    "key_decisions": [
      {
        "decision": "What needs to be decided",
        "recommendation": "What I recommend",
        "tradeoff": "What you give up with this choice"
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
  "implementation_prompt": "A complete, self-contained Claude Code prompt that can be pasted into a new session to scaffold and build this feature. Include: the folder structure, implementation steps in order, references to specific ai-skills patterns to consult (by file name), and testing/verification suggestions."
}

## Design Principles

- Fit within the existing Next.js App Router / Supabase / Stripe stack
- Admin features go under src/app/(admin)/admin/
- API routes go under src/app/api/admin/
- Follow existing patterns: cookie-based Supabase auth, service role for admin writes, inline styles in admin UI
- Prices in cents, RLS on all tables, admin-only policies
- Reference ai-skills patterns by name, do not import code directly
- Be specific about file paths, component names, database columns`;

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
      max_tokens: 8192,
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
