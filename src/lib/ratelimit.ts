import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Rate limiter powered by Upstash Redis.
 * Protects API routes from abuse (newsletter signup, contact form, etc.).
 *
 * Default: 5 requests per 60 seconds per IP.
 * Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in .env.local
 *
 * Lazy-initialized so builds don't fail without env vars.
 */
let _ratelimit: Ratelimit | null = null;

export function getRatelimit(): Ratelimit {
  if (!_ratelimit) {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;
    if (!url || !token) {
      throw new Error(
        "Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN. " +
          "Copy env.example → .env.local and fill in your Upstash credentials."
      );
    }
    const redis = new Redis({ url, token });
    _ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "ril",
    });
  }
  return _ratelimit;
}

/** @deprecated – use getRatelimit() instead; kept for backward compat */
export const ratelimit = new Proxy({} as Ratelimit, {
  get(_target, prop) {
    return (getRatelimit() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
