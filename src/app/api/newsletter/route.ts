import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";
import { resend, FROM_EMAIL } from "@/lib/resend";

/**
 * POST /api/newsletter
 * Subscribe to the newsletter + optionally deliver a freebie.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source = "website", sendFreebie = false } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email is required." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    // Check if already subscribed
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

    // Insert new subscriber
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

    // Send freebie email if requested
    if (sendFreebie) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email.toLowerCase(),
          subject: "Your Free Resource from Rooted in Learning 🌱",
          html: `
            <h1>Welcome to Rooted in Learning!</h1>
            <p>Thank you for joining our community of 5,000+ educators.</p>
            <p>Here's your free resource:</p>
            <p><a href="https://rootedinlearning.com/freebies/weekly-planner.pdf">📥 Download Your Weekly Planner Template</a></p>
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
        // Don't fail the subscription if email fails
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
