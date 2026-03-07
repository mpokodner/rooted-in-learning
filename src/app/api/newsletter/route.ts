import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { resend, FROM_EMAIL } from "@/lib/resend";
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
    const { email, name, source = "website", sendFreebie = false } = body;

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

    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, freebie_sent")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "You're already subscribed! Check your inbox.",
      });
    }

    const { error: insertError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: email.toLowerCase(),
        name: name || null,
        source,
        freebie_sent: false,
        subscribed: true,
      });

    if (insertError) {
      console.error("Newsletter insert error:", insertError);
      return NextResponse.json(
        { success: false, error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    if (sendFreebie) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email.toLowerCase(),
          subject: "Your Free Resource from The Rooted Learner",
          html: `
            <h1>Welcome to The Rooted Learner!</h1>
            <p>Thank you for joining our community of educators.</p>
            <p>Here's your free resource:</p>
            <p><a href="https://therootedlearner.com/freebies/weekly-planner.pdf">Download Your Weekly Planner Template</a></p>
            <p>Happy teaching!</p>
            <p>— Michelle</p>
          `,
        });

        await supabase
          .from("newsletter_subscribers")
          .update({ freebie_sent: true })
          .eq("email", email.toLowerCase());
      } catch (emailError) {
        console.error("Freebie email error:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: sendFreebie
        ? "Success! Check your inbox for your freebie."
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
