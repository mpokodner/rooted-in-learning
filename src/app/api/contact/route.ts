import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { getRatelimit } from "@/lib/ratelimit";

function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function fail(error: string, code: string, status: number) {
  return NextResponse.json({ error, code }, { status });
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
          { error: "Too many requests. Please try again in a minute.", code: "RATE_LIMIT" },
          { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
        );
      }
    } catch (error) {
      console.error("POST /api/contact ratelimit", { error });
    }

    const body = await request.json();
    const {
      name,
      email,
      subject,
      message,
      organization,
      audience,
      website,
      source = "contact-page",
      subscribeNewsletter = false,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return fail("Name, email, and message are required.", "VALIDATION", 400);
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return fail("Input exceeds maximum length.", "VALIDATION", 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return fail("Please provide a valid email address.", "VALIDATION", 400);
    }

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const routedSubject = subject || audience || "Not specified";
    const safeSubject = sanitize(routedSubject);
    const safeMessage = sanitize(message);

    const supabase = createServerSupabaseClient();

    const { error: insertError } = await supabase.from("leads").insert({
      email: email.toLowerCase(),
      name,
      subject: routedSubject,
      message,
      organization: organization || null,
      source,
      status: "new",
      subscribe_newsletter: subscribeNewsletter,
      audience: audience || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
    });

    if (insertError) {
      console.error("POST /api/contact insert", { insertError, email: email.toLowerCase() });
      return fail("Failed to save your message. Please try again.", "INSERT_FAILED", 500);
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
      } catch (error) {
        console.error("POST /api/contact newsletter", { error });
      }
    }

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: "admin@therootedlearner.com",
      subject: `[Contact Form] ${safeSubject} from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Audience:</strong> ${sanitize(audience || "not specified")}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Organization:</strong> ${sanitize(organization || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
        <hr />
        <p style="color: #999; font-size: 12px;">Source: ${source} | IP: ${ip}</p>
      `,
      replyTo: email,
    });

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <h1>Thanks for reaching out, ${safeName}!</h1>
        <p>I received your message and will get back to you within 48 hours.</p>
        <p>— Michelle</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST /api/contact", { error });
    return fail("Failed to send message. Please try again.", "SERVER_ERROR", 500);
  }
}
