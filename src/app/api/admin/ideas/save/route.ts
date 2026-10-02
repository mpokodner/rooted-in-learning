import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { requireAdmin } from "@/lib/require-admin";

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAdmin();
    if (!auth.ok) return auth.response;

    const body = await request.json();
    const { original_idea, title, channel, routing, optimized, status } = body;

    if (!original_idea) {
      return NextResponse.json(
        { error: "Original idea is required", code: "VALIDATION" },
        { status: 400 }
      );
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
      console.error("ideas/save", { error: error.message });
      return NextResponse.json(
        { error: error.message, code: "DB_ERROR" },
        { status: 500 }
      );
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("ideas/save", {
      error: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json(
      { error: "Failed to save idea", code: "SAVE_FAILED" },
      { status: 500 }
    );
  }
}
