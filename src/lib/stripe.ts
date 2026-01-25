import Stripe from 'stripe';

// Initialize Stripe with the secret key
// This should only be used in server-side code (API routes, server actions, etc.)
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Helper function to format price for display
export function formatPrice(amount: number, currency: string = 'usd'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

// Helper function to create a checkout session
export async function createCheckoutSession({
  priceId,
  successUrl,
  cancelUrl,
  customerId,
  metadata,
}: {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerId?: string;
  metadata?: Record<string, string>;
}) {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer: customerId,
    metadata,
  });

  return session;
}

// Helper function to create a subscription checkout session
export async function createSubscriptionCheckoutSession({
  priceId,
  successUrl,
  cancelUrl,
  customerId,
  metadata,
}: {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  customerId?: string;
  metadata?: Record<string, string>;
}) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer: customerId,
    metadata,
  });

  return session;
}

// Webhook event verification
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
}
