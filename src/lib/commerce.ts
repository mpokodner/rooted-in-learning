/**
 * On-site checkout is intentionally retired from the public UX.
 * Digital products are sold on Teachers Pay Teachers until this flag is enabled.
 * Stripe webhook + download-token APIs stay in place either way.
 */
export function isOnSiteCheckoutEnabled(): boolean {
  return process.env.NEXT_PUBLIC_COMMERCE_ENABLED === "true";
}
