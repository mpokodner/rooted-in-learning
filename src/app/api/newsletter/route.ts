import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { sendGuideWelcome } from "@/lib/guide-sequence";
import { getRatelimit } from "@/lib/ratelimit";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    try {
      const limiter = getRatelimit();
      const { success, remaining } = await limiter.limit(`newsletter:${ip}`);
      if (!success) {
        return NextResponse.json(
          { success: false, error: "Too many requests. Please try again in a minute." },
          { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
        );
      }
    } catch {
      // Rate limiting unavailable (missing env vars) — continue without it in dev
    }

    const body = await request.json();
    const {
      email,
      name,
      source = "website",
      sendFreebie = false,
      referrer,
      website,
    } = body;

    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({
        success: true,
        message: "You're subscribed! Welcome to the community.",
      });
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (email.length > 320) {
      return NextResponse.json(
        { success: false, error: "Email exceeds maximum length." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    const normalizedEmail = email.toLowerCase();

    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, freebie_sent")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      if (sendFreebie && !existing.freebie_sent) {
        await sendGuideWelcome(normalizedEmail);
        const { error: updateError } = await supabase
          .from("newsletter_subscribers")
          .update({ freebie_sent: true, guide_sequence_step: 1 })
          .eq("email", normalizedEmail);
        if (updateError) {
          console.error("Newsletter sequence update error:", { email: normalizedEmail, error: updateError.message });
          return NextResponse.json(
            { success: false, error: "Failed to save your signup. Please try again.", code: "newsletter_update_failed" },
            { status: 500 },
          );
        }

        return NextResponse.json({
          success: true,
          message: "The guide is on its way to your inbox. The blog is there if you want field notes while you wait.",
        });
      }

      return NextResponse.json({
        success: true,
        message: sendFreebie
          ? "You're already subscribed. The guide is in your inbox, and the blog is there when you want field notes."
          : "You're already subscribed! Check your inbox.",
      });
    }

    const insertData: Record<string, unknown> = {
      email: normalizedEmail,
      name: name || null,
      source: referrer ? `${source}|${referrer}` : source,
      freebie_sent: false,
      subscribed: true,
    };

    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert(insertData);

    if (insertError) {
      console.error("Newsletter insert error:", insertError);
      return NextResponse.json(
        { success: false, error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    if (sendFreebie) {
      await sendGuideWelcome(normalizedEmail);
      const { error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({ freebie_sent: true, guide_sequence_step: 1 })
        .eq("email", normalizedEmail);
      if (updateError) {
        console.error("Newsletter sequence update error:", { email: normalizedEmail, error: updateError.message });
        return NextResponse.json(
          { success: false, error: "Failed to save your signup. Please try again.", code: "newsletter_update_failed" },
          { status: 500 },
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: sendFreebie
        ? "The guide is on its way to your inbox. The blog is there if you want field notes while you wait."
        : "You're subscribed! Welcome to the community.",
    });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

