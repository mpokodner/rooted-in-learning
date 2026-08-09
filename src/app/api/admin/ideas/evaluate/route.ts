import { NextResponse, type NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase-server";

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
    return NextResponse.json({ error: "AI evaluation is not configured. Add ANTHROPIC_API_KEY to environment variables." }, { status: 500 });
  }

  const body = await request.json();
  const idea = body.idea?.trim();
  if (!idea) {
    return NextResponse.json({ error: "Idea text is required" }, { status: 400 });
  }

  const anthropic = new Anthropic({ apiKey });

  const systemPrompt = `You are the Idea Engine for The Rooted Learner, an EdTech brand serving K-8 educators. You evaluate product ideas and route them to the right sales channel.

## Channel Boundary Rule

**TPT (Teachers Pay Teachers)** — repeatable, finished teacher tools:
- Individual printable/digital overlay & passage sets
- Single-topic packs, "try the method" starter kits
- Constructed-response organizers, ELD frames, vocab
- Seasonal/high-interest packs, planning templates

**Rooted Learner website** — depth, system, access:
- Subscription/membership access, generator credits
- Full overlay module library, complete scope & sequence
- Professional learning, coaching, school/district licenses
- Custom work, audits, proof-of-concept, methodology/IP

**Both** — when a standalone teacher-tool version (TPT) AND a deeper implementation version (website) naturally co-exist without cannibalization.

## Your Task

Evaluate the idea and return a JSON object with EXACTLY this structure (no markdown, no code fences, just raw JSON):

{
  "channel": "tpt" | "rooted-learner" | "both",
  "confidence": 0.0-1.0,
  "rationale": "2-3 sentence explanation of why this channel fits",
  "strengths": ["strength 1", "strength 2"],
  "concerns": ["concern 1", "concern 2"],
  "optimization": {
    "title": "Suggested product title",
    "positioning": "1-2 sentence positioning statement",
    "pricing_suggestion": "Suggested price range with rationale",
    "next_steps": ["step 1", "step 2", "step 3"]
  },
  "viability": "strong" | "moderate" | "weak",
  "viability_rationale": "1 sentence on overall viability"
}`;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: `Evaluate this product idea:\n\n${idea}` }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const evaluation = JSON.parse(text);

    return NextResponse.json({ evaluation });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Evaluation failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
