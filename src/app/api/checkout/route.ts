import { NextResponse, type NextRequest } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { createClient, createServerSupabaseClient } from "@/lib/supabase-server";

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

    const productIds = items.map((item: { product_id: string }) => item.product_id);
    if (productIds.some((id: string) => !id)) {
      return NextResponse.json(
        { success: false, error: "Each item must include a product_id." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();
    const { data: products, error: dbError } = await supabase
      .from("products")
      .select("id, stripe_price_id, active")
      .in("id", productIds);

    if (dbError || !products) {
      console.error("Product lookup error:", dbError);
      return NextResponse.json(
        { success: false, error: "Failed to validate products." },
        { status: 500 }
      );
    }

    const productMap = new Map(products.map((p) => [p.id, p]));
    const errors: string[] = [];

    for (const id of productIds) {
      const product = productMap.get(id);
      if (!product) {
        errors.push(`Product not found: ${id}`);
      } else if (!product.active) {
        errors.push(`Product is no longer available: ${id}`);
      } else if (!product.stripe_price_id) {
        errors.push(`Product is not configured for purchase: ${id}`);
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: errors[0] },
        { status: 400 }
      );
    }

    const lineItems = items.map((item: { product_id: string; quantity?: number }) => ({
      priceId: productMap.get(item.product_id)!.stripe_price_id as string,
      quantity: item.quantity || 1,
    }));

    const authClient = await createClient();
    const user = authClient
      ? (await authClient.auth.getUser()).data.user
      : null;

    const session = await createCheckoutSession({
      lineItems,
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
