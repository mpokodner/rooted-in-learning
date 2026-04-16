import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

/**
 * GET /api/cron/keep-alive
 * Pings the Supabase database to prevent the free-tier project from going dormant.
 * Triggered by a Vercel Cron Job every 5 days.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServerSupabaseClient();

    const { count, error } = await supabase
      .from("profiles")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Keep-alive ping failed:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Supabase is alive",
      profiles: count,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Keep-alive error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to ping Supabase" },
      { status: 500 }
    );
  }
}
