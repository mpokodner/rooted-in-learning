import { NextResponse, type NextRequest } from "next/server";
import { stripe, constructWebhookEvent } from "@/lib/stripe";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { nanoid } from "nanoid";

/**
 * POST /api/webhooks/stripe
 * Handles Stripe webhook events.
 * Must be configured in Stripe Dashboard → Webhooks.
 */
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event;

  try {
    event = constructWebhookEvent(body, signature);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createServerSupabaseClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as unknown as {
        id: string;
        payment_intent: string;
        customer_details: { email: string };
        metadata: { user_id?: string };
        amount_total: number;
      };

      const orderNumber = `RIL-${nanoid(8).toUpperCase()}`;
      const userId = session.metadata?.user_id;

      // Create order record
      const { error: orderError } = await supabase.from("orders").insert({
        order_number: orderNumber,
        user_id: userId || null,
        email: session.customer_details.email,
        status: "completed",
        total: session.amount_total || 0,
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
      });

      if (orderError) {
        console.error("Order creation error:", orderError);
      }

      // Clear user's cart if authenticated
      if (userId) {
        await supabase.from("cart_items").delete().eq("user_id", userId);
      }

      // TODO: Retrieve line items from Stripe and insert into order_items table
      // TODO: Send order confirmation email via Resend

      break;
    }

    case "payment_intent.payment_failed": {
      // TODO: Handle failed payment (send notification, log)
      console.log("Payment failed:", event.data.object);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

// Stripe webhooks need the raw body, so we disable Next.js body parsing
export const dynamic = "force-dynamic";
