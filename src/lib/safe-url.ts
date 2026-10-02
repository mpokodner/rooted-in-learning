/**
 * Allow only same-origin relative paths for post-login / Stripe return URLs.
 * Rejects protocol-relative ("//evil.com") and open redirects.
 */
export function safeInternalPath(
  path: string | null | undefined,
  fallback: string
): string {
  if (!path || typeof path !== "string") return fallback;
  const trimmed = path.trim();
  if (!trimmed.startsWith("/")) return fallback;
  if (trimmed.startsWith("//") || trimmed.startsWith("/\\")) return fallback;
  if (trimmed.includes("://")) return fallback;
  if (/[\r\n]/.test(trimmed)) return fallback;
  return trimmed;
}

export function isAllowedCheckoutUrl(url: string, siteUrl: string): boolean {
  try {
    if (url.startsWith("/")) {
      return safeInternalPath(url.split("?")[0], "") !== "";
    }
    const parsed = new URL(url);
    const site = new URL(siteUrl);
    return parsed.origin === site.origin;
  } catch (error) {
    console.error("isAllowedCheckoutUrl", {
      url,
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}
