import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { getStripe, constructWebhookEvent } from "@/lib/stripe";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { nanoid } from "nanoid";

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

      // Idempotency: skip if this checkout session was already processed
      const { data: existingOrder } = await supabase
        .from("orders")
        .select("id")
        .eq("stripe_checkout_session_id", session.id)
        .maybeSingle();

      if (existingOrder) {
        console.log(`Order already exists for session ${session.id}, skipping`);
        break;
      }

      const orderNumber = `RIL-${nanoid(8).toUpperCase()}`;
      const userId = session.metadata?.user_id;

      const { data: orderData, error: orderError } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          user_id: userId || null,
          email: session.customer_details.email,
          status: "completed",
          total: session.amount_total || 0,
          stripe_checkout_session_id: session.id,
          stripe_payment_intent_id: session.payment_intent,
        })
        .select("id")
        .single();

      if (orderError) {
        console.error("Order creation error:", orderError);
        break;
      }

      // Clear user's cart if authenticated
      if (userId) {
        await supabase.from("cart_items").delete().eq("user_id", userId);
      }

      // Retrieve line items from Stripe and insert into order_items
      const orderItems: { order_id: string; product_id: string | null; product_name: string; quantity: number; price: number }[] = [];
      try {
        const lineItems = await getStripe().checkout.sessions.listLineItems(
          session.id,
          { expand: ["data.price.product"] }
        );
        for (const item of lineItems.data) {
          const price = item.price;
          const product = price?.product as Stripe.Product | undefined;
          const slug = product?.metadata?.slug;

          let productId: string | null = null;
          if (slug) {
            const { data: prod } = await supabase
              .from("products")
              .select("id")
              .eq("slug", slug)
              .maybeSingle();
            if (prod) productId = prod.id;
          }

          orderItems.push({
            order_id: orderData.id,
            product_id: productId,
            product_name: item.description || product?.name || "Unknown",
            quantity: item.quantity || 1,
            price: item.amount_total || 0,
          });
        }

        if (orderItems.length > 0) {
          const { error: itemsError } = await supabase
            .from("order_items")
            .insert(orderItems);
          if (itemsError) console.error("Order items insert error:", itemsError);
        }
      } catch (lineItemsError) {
        console.error("Failed to retrieve line items:", lineItemsError);
      }

      // Generate download tokens for digital products
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";
      const downloadLinks: { name: string; url: string }[] = [];
      for (const item of orderItems) {
        if (item.product_id) {
          const { data: prod } = await supabase
            .from("products")
            .select("id, file_url")
            .eq("id", item.product_id)
            .maybeSingle();
          if (prod?.file_url) {
            const token = nanoid(32);
            const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
            await supabase.from("download_tokens").insert({
              token,
              order_id: orderData.id,
              product_id: prod.id,
              email: session.customer_details.email,
              max_downloads: 5,
              expires_at: expiresAt.toISOString(),
            });
            downloadLinks.push({
              name: item.product_name,
              url: `${siteUrl}/api/download/t/${token}`,
            });
          }
        }
      }

      const downloadLinksHtml = downloadLinks.length > 0
        ? `
          <div style="background: #f8f6f3; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="font-weight: 600; margin: 0 0 12px 0;">Your Downloads</p>
            <p style="font-size: 14px; color: #555; margin: 0 0 12px 0;">Click below to download your resources (links expire in 7 days, up to 5 downloads each):</p>
            ${downloadLinks.map((d) => `<p style="margin: 8px 0;"><a href="${d.url}" style="display: inline-block; background: #5C6B4A; color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;">Download: ${d.name}</a></p>`).join("")}
          </div>
        `
        : "";

      // Send order confirmation email via Resend
      try {
        await getResend().emails.send({
          from: FROM_EMAIL,
          to: session.customer_details.email,
          subject: `Order Confirmed — ${orderNumber}`,
          html: `
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
              <h1 style="color: #1a1a1a; font-size: 24px;">Thank you for your order!</h1>
              <p>Your order <strong>${orderNumber}</strong> has been confirmed.</p>
              ${downloadLinksHtml}
              <p>Questions? Reply to this email or contact admin@therootedlearner.com.</p>
              <p style="margin-top: 24px;">— Michelle</p>
              <hr style="border: none; border-top: 1px solid #e8ded0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #8a8a8a;">
                The Rooted Learner · <a href="https://www.therootedlearner.com" style="color: #5C6B4A;">therootedlearner.com</a>
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Order confirmation email failed:", emailError);
      }

      break;
    }

    case "payment_intent.payment_failed": {
      console.log("Payment failed:", event.data.object);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

export const dynamic = "force-dynamic";
