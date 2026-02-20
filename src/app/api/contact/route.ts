import { NextResponse, type NextRequest } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";

/**
 * POST /api/contact
 * Handles contact form submissions.
 * Sends an email notification to the site owner.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send notification to site owner
    await resend.emails.send({
      from: FROM_EMAIL,
      to: "hello@therootedlearner.com",
      subject: `[Contact Form] ${subject || "New Message"} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    // Send confirmation to the user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your message! 🌱",
      html: `
        <h1>Thanks for reaching out, ${name}!</h1>
        <p>I received your message and will get back to you within 48 hours.</p>
        <p>In the meantime, check out our latest resources at <a href="https://therootedlearner.com">therootedlearner.com</a>.</p>
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
