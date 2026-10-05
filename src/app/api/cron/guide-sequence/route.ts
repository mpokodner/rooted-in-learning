import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { sendGuideAiNote, sendGuideHqimNote } from "@/lib/guide-sequence";

const DAY = 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json(
        { error: "Unauthorized", code: "unauthorized" },
        { status: 401 },
      );
    }

    const supabase = createServerSupabaseClient();
    const now = Date.now();
    const threeDaysAgo = new Date(now - 3 * DAY).toISOString();
    const sevenDaysAgo = new Date(now - 7 * DAY).toISOString();

    const { data: aiDue, error: aiQueryError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("subscribed", true)
      .eq("freebie_sent", true)
      .eq("guide_sequence_step", 1)
      .lte("created_at", threeDaysAgo);

    if (aiQueryError) {
      console.error("guideSequenceCron.aiQuery", { error: aiQueryError.message });
      return NextResponse.json(
        { error: "Could not load the guide sequence", code: "guide_sequence_query_failed" },
        { status: 500 },
      );
    }

    let aiSent = 0;
    for (const row of aiDue ?? []) {
      try {
        await sendGuideAiNote(row.email);
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ guide_sequence_step: 2 })
          .eq("email", row.email)
          .eq("guide_sequence_step", 1);
        if (updateError) {
          console.error("guideSequenceCron.aiUpdate", { email: row.email, error: updateError.message });
          continue;
        }
        aiSent += 1;
      } catch (error) {
        console.error("guideSequenceCron.aiSend", { email: row.email, error });
      }
    }

    const { data: hqimDue, error: hqimQueryError } = await supabase
      .from("newsletter_subscribers")
      .select("email")
      .eq("subscribed", true)
      .eq("freebie_sent", true)
      .eq("guide_sequence_step", 2)
      .lte("created_at", sevenDaysAgo);

    if (hqimQueryError) {
      console.error("guideSequenceCron.hqimQuery", { error: hqimQueryError.message });
      return NextResponse.json(
        { error: "Could not load the HQIM note", code: "guide_sequence_query_failed" },
        { status: 500 },
      );
    }

    let hqimSent = 0;
    for (const row of hqimDue ?? []) {
      try {
        await sendGuideHqimNote(row.email);
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ guide_sequence_step: 3 })
          .eq("email", row.email)
          .eq("guide_sequence_step", 2);
        if (updateError) {
          console.error("guideSequenceCron.hqimUpdate", { email: row.email, error: updateError.message });
          continue;
        }
        hqimSent += 1;
      } catch (error) {
        console.error("guideSequenceCron.hqimSend", { email: row.email, error });
      }
    }

    return NextResponse.json({ ok: true, aiSent, hqimSent });
  } catch (error) {
    console.error("guideSequenceCron", { error });
    return NextResponse.json(
      { error: "Guide sequence failed", code: "guide_sequence_failed" },
      { status: 500 },
    );
  }
}
