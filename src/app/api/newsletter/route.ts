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
          subject: "Your Free Claude AI Guide for Educators",
          html: `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
              <h1 style="color: #1a1a1a; font-size: 24px;">Your Claude AI Guide Is Here</h1>
              <p>Thanks for joining The Rooted Learner community! Here's the guide you requested:</p>
              <p style="margin: 24px 0;">
                <a href="https://www.therootedlearner.com/freebies/claude-ai-guide.pdf"
                   style="display: inline-block; background-color: #5C6B4A; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                  📥 Download the Claude AI Guide
                </a>
              </p>
              <p>Inside you'll find:</p>
              <ul style="color: #6b6b6b; line-height: 1.8;">
                <li>Ready-to-use prompt templates for lesson planning</li>
                <li>Step-by-step workflows for differentiation</li>
                <li>Real classroom examples from a current 1–8 educator</li>
              </ul>
              <p>If you find it helpful, reply to this email — I read every response.</p>
              <p style="margin-top: 24px;">— Michelle</p>
              <hr style="border: none; border-top: 1px solid #e8ded0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #8a8a8a;">
                You're receiving this because you signed up at therootedlearner.com.
                <a href="https://www.therootedlearner.com" style="color: #5C6B4A;">Visit the site</a>
              </p>
            </div>
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
        ? "Success! Check your inbox for your free guide."
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
