import { NextResponse, type NextRequest } from "next/server";
import { createClient, createServerSupabaseClient } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { idea_id, title, input_idea, constraints, selected_skills, architecture, implementation_prompt } = body;

  if (!input_idea) {
    return NextResponse.json({ error: "Input idea is required" }, { status: 400 });
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
