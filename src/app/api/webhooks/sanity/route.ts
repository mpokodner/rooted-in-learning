import { NextResponse, type NextRequest } from "next/server";
import { createHmac } from "crypto";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { getResend, FROM_EMAIL } from "@/lib/resend";
import { getUnsubscribeUrl } from "@/lib/unsubscribe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("sanity-webhook-signature");

  const secret = process.env.SANITY_WEBHOOK_SECRET;
  if (secret && signature) {
    const expected = createHmac("sha256", secret).update(body).digest("hex");
    if (signature !== expected) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  } else if (secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 401 });
  }

  let payload: {
    _type?: string;
    _id?: string;
    title?: string;
    slug?: { current?: string };
    excerpt?: string;
    status?: string;
  };

  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload._type !== "blogPost" || payload.status !== "published") {
    return NextResponse.json({ skipped: true, reason: "Not a published blog post" });
  }

  const title = payload.title || "New Blog Post";
  const slug = payload.slug?.current;
  const excerpt = payload.excerpt || "";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.therootedlearner.com";
  const postUrl = slug ? `${siteUrl}/learn/blog/${slug}` : `${siteUrl}/learn/blog`;

  const supabase = createServerSupabaseClient();

  const { data: subscribers, error: subError } = await supabase
    .from("newsletter_subscribers")
    .select("email")
    .eq("subscribed", true);

  if (subError || !subscribers || subscribers.length === 0) {
    console.error("No subscribers found or query error:", subError);
    return NextResponse.json({ sent: 0, error: subError?.message });
  }

  const resend = getResend();
  const BATCH_SIZE = 50;
  let totalSent = 0;

  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const emails = batch.map((sub) => ({
      from: FROM_EMAIL,
      to: sub.email,
      subject: `New Post: ${title}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
          <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 8px;">${title}</h1>
          ${excerpt ? `<p style="color: #555; font-size: 15px; line-height: 1.6;">${excerpt}</p>` : ""}
          <p style="margin: 24px 0;">
            <a href="${postUrl}"
               style="display: inline-block; background-color: #5C6B4A; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              Read the Full Post
            </a>
          </p>
          <p style="margin-top: 24px;">— Michelle</p>
          <hr style="border: none; border-top: 1px solid #e8ded0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #8a8a8a;">
            You're receiving this because you subscribed at therootedlearner.com.<br />
            <a href="${getUnsubscribeUrl(sub.email)}" style="color: #5C6B4A;">Unsubscribe</a>
          </p>
        </div>
      `,
    }));

    try {
      await resend.batch.send(emails);
      totalSent += batch.length;
    } catch (err) {
      console.error(`Batch send error (batch ${i / BATCH_SIZE + 1}):`, err);
    }
  }

  return NextResponse.json({ sent: totalSent });
}

export const dynamic = "force-dynamic";
