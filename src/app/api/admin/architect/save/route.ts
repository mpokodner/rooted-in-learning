import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdmin();
    if (!auth.ok) return auth.response;

    const body = await request.json();
    const {
      idea_id,
      title,
      input_idea,
      constraints,
      selected_skills,
      architecture,
      implementation_prompt,
    } = body;

    if (!input_idea) {
      return NextResponse.json(
        { error: "Input idea is required", code: "VALIDATION" },
        { status: 400 }
      );
    }

    const admin = createServerSupabaseClient();
    const { data, error } = await admin
      .from("architect_sessions")
      .insert({
        idea_id: idea_id || null,
        title: title || input_idea.slice(0, 60),
        input_idea,
        constraints: constraints || {},
        selected_skills: selected_skills || [],
        architecture: architecture || {},
        implementation_prompt: implementation_prompt || null,
        status: "complete",
      })
      .select("id")
      .single();

    if (error) {
      console.error("architect/save", { error: error.message });
      return NextResponse.json(
        { error: error.message, code: "DB_ERROR" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("architect/save", {
      error: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { error: "Failed to save architecture session", code: "SAVE_FAILED" },
      { status: 500 }
    );
  }
}
