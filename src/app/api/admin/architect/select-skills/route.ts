import { NextResponse, type NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase-server";
import { getSkillsManifest } from "@/lib/ai-skills";

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
  if (!idea) {
    return NextResponse.json({ error: "Idea text is required" }, { status: 400 });
  }

  const constraints = body.constraints || {};
  const manifest = getSkillsManifest();

  if (manifest.length === 0) {
    return NextResponse.json({ error: "Skills library not configured. Run npm run build-skills." }, { status: 500 });
  }

  const manifestSummary = manifest.map((s) => ({
    slug: s.slug,
    category: s.category,
    description: s.description,
  }));

  const systemPrompt = `You are a technical architecture advisor for an EdTech platform (Rooted-in-Learning). You have access to a skills library containing reusable patterns for AI/LLM systems.

Your task: given a project idea and optional constraints, select the 2-5 most relevant skills from the library that would inform the architecture design.

## Available Skills Library

${JSON.stringify(manifestSummary, null, 2)}

## Instructions

Analyze the idea and select skills that would be most useful for designing the architecture. Return raw JSON (no markdown fences) with this structure:

{
  "selected_skills": [
    {
      "slug": "skill-slug-from-library",
      "category": "the-category",
      "rationale": "1-2 sentences on why this skill is relevant to this idea"
    }
  ],
  "selection_summary": "1-2 sentence overview of which aspects of the idea these skills address"
}

Select 2-5 skills. Prefer skills that directly address the core technical challenges of the idea.`;

  const constraintText = Object.entries(constraints)
    .filter(([, v]) => v)
    .map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");

  const userMessage = `## Project Idea

${idea.slice(0, 2000)}

${constraintText ? `## Constraints\n\n${constraintText}` : ""}`;

  const anthropic = new Anthropic({ apiKey });

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 1024,
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
    const msg = err instanceof Error ? err.message : "Skill selection failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
