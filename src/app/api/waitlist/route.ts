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
      const { success, remaining } = await limiter.limit(`waitlist:${ip}`);
      if (!success) {
        return NextResponse.json(
          { success: false, error: "Too many requests. Please try again in a minute." },
          { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
        );
      }
    } catch {
      // Rate limiting unavailable — continue without it
    }

    const body = await request.json();
    const {
      email,
      name,
      role,
      organization,
      districtSize,
      product = "assessalign",
      source = "assessalign-page",
      subscribeNewsletter = false,
    } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email is required." },
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
      .from("waitlist")
      .select("id")
      .eq("email", email.toLowerCase())
      .eq("product", product)
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "You're already on the waitlist! We'll be in touch.",
      });
    }

    const { error: insertError } = await supabase.from("waitlist").insert({
      email: email.toLowerCase(),
      name: name || null,
      role: role || null,
      organization: organization || null,
      district_size: districtSize || null,
      product,
      source,
      subscribe_newsletter: subscribeNewsletter,
    });

    if (insertError) {
      console.error("Waitlist insert error:", insertError);
      return NextResponse.json(
        { success: false, error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    if (subscribeNewsletter) {
      try {
        const { data: existingSub } = await supabase
          .from("newsletter_subscribers")
          .select("id")
          .eq("email", email.toLowerCase())
          .single();

        if (!existingSub) {
          await supabase.from("newsletter_subscribers").insert({
            email: email.toLowerCase(),
            name: name || null,
            source: `waitlist-${product}`,
            freebie_sent: false,
            subscribed: true,
          });
        }
      } catch {
        // Newsletter opt-in is secondary — don't fail the main request
      }
    }

    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "hello@therootedlearner.com",
        subject: `[Waitlist] New ${product} signup: ${name || email}`,
        html: `
          <h2>New Waitlist Signup</h2>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role:</strong> ${role || "Not provided"}</p>
          <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
          <p><strong>District Size:</strong> ${districtSize || "Not provided"}</p>
          <p><strong>Newsletter opt-in:</strong> ${subscribeNewsletter ? "Yes" : "No"}</p>
          <p><strong>Source:</strong> ${source}</p>
          <hr />
          <p style="color: #999; font-size: 12px;">IP: ${ip}</p>
        `,
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Waitlist notification email error:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "You're on the list! We'll notify you when early access opens.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
