import { createHmac } from "crypto";

const SECRET =
  process.env.UNSUBSCRIBE_SECRET || process.env.CRON_SECRET || "rooted-learner-unsub";

export function generateUnsubscribeToken(email: string): string {
  return createHmac("sha256", SECRET).update(email.toLowerCase()).digest("hex");
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = generateUnsubscribeToken(email);
  return token === expected;
}

export function getUnsubscribeUrl(email: string): string {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";
  const token = generateUnsubscribeToken(email);
  return `${siteUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}&token=${token}`;
}
