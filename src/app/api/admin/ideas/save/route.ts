import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

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
  const { original_idea, title, channel, routing, optimized, status } = body;

  if (!original_idea) {
    return NextResponse.json({ error: "Original idea is required" }, { status: 400 });
  }

  const admin = createServerSupabaseClient();
  const { data, error } = await admin
    .from("ideas")
    .insert({
      original_idea,
      title: title || original_idea.slice(0, 60),
      channel: channel || null,
      routing: routing || null,
      optimized: optimized || null,
      status: status || "draft",
      sources: [],
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id });
}
