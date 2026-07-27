import { NextResponse, type NextRequest } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { createClient } from "@/lib/supabase-server";

/**
 * POST /api/checkout
 * Creates a Stripe Checkout session for the user's cart.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, successUrl, cancelUrl } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Cart is empty." },
        { status: 400 }
      );
    }

    // Get the current user (if authenticated)
    const supabase = await createClient();
    const user = supabase
      ? (await supabase.auth.getUser()).data.user
      : null;

    // TODO: Validate items against database products and get stripe_price_ids
    // For now, use the first item's priceId as a placeholder
    const session = await createCheckoutSession({
      priceId: items[0].stripePriceId,
      successUrl: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
      metadata: {
        user_id: user?.id || "",
      },
    });

    return NextResponse.json({
      success: true,
      data: { sessionId: session.id, url: session.url },
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
