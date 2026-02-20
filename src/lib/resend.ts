import { Resend } from "resend";

/**
 * Resend client for transactional emails.
 * Used for:
 *  - Lead magnet / freebie delivery
 *  - Order confirmation emails
 *  - Password reset emails
 *  - Welcome emails after registration
 *
 * Lazy-initialized so builds don't fail without env vars.
 */
let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error(
        "Missing RESEND_API_KEY. Copy env.example → .env.local and fill in your Resend API key."
      );
    }
    _resend = new Resend(key);
  }
  return _resend;
}

/** @deprecated – use getResend() instead; kept for backward compat */
export const resend = new Proxy({} as Resend, {
  get(_target, prop) {
    return (getResend() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/** Default "from" address — update with your verified Resend domain */
export const FROM_EMAIL = "Rooted in Learning <hello@therootedlearner.com>";
