import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { getRatelimit } from "@/lib/ratelimit";

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    try {
      const limiter = getRatelimit();
      const { success, remaining } = await limiter.limit(`contact:${ip}`);
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
      name,
      email,
      subject,
      message,
      organization,
      source = "contact-page",
      subscribeNewsletter = false,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Input exceeds maximum length." },
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

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeSubject = sanitize(subject || "Not specified");
    const safeMessage = sanitize(message);

    const supabase = createServerSupabaseClient();

    const { error: insertError } = await supabase.from("leads").insert({
      email: email.toLowerCase(),
      name,
      subject: subject || null,
      message,
      organization: organization || null,
      source,
      status: "new",
      subscribe_newsletter: subscribeNewsletter,
    });

    if (insertError) {
      console.error("Lead insert error:", insertError);
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
            source: `contact-${source}`,
            freebie_sent: false,
            subscribed: true,
          });
        }
      } catch {
        // Newsletter opt-in is secondary — don't fail the main request
      }
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: "hello@therootedlearner.com",
      subject: `[Contact Form] ${safeSubject} from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Organization:</strong> ${sanitize(organization || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <p><strong>Newsletter opt-in:</strong> ${subscribeNewsletter ? "Yes" : "No"}</p>
        <hr />
        <p style="color: #999; font-size: 12px;">Source: ${source} | IP: ${ip}</p>
      `,
      replyTo: email,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <h1>Thanks for reaching out, ${safeName}!</h1>
        <p>I received your message and will get back to you within 48 hours.</p>
        <p>In the meantime, check out the latest resources at <a href="https://www.therootedlearner.com">therootedlearner.com</a>.</p>
        <p>— Michelle</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
