import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { getResend, FROM_EMAIL } from "@/lib/resend";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerSupabaseClient();
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const [orders, allOrders, newSubs, allActiveSubs, newLeads, staleleads, newWaitlist] =
    await Promise.all([
      supabase
        .from("orders")
        .select("total")
        .eq("status", "completed")
        .gte("created_at", weekAgo),
      supabase
        .from("orders")
        .select("total")
        .eq("status", "completed"),
      supabase
        .from("newsletter_subscribers")
        .select("id", { count: "exact", head: true })
        .gte("created_at", weekAgo),
      supabase
        .from("newsletter_subscribers")
        .select("id", { count: "exact", head: true })
        .eq("subscribed", true),
      supabase
        .from("leads")
        .select("id", { count: "exact", head: true })
        .gte("created_at", weekAgo),
      supabase
        .from("leads")
        .select("id", { count: "exact", head: true })
        .eq("status", "new"),
      supabase
        .from("waitlist")
        .select("id", { count: "exact", head: true })
        .gte("created_at", weekAgo),
    ]);

  const weeklyOrders = orders.data ?? [];
  const weeklyRevenue = weeklyOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalRevenue = (allOrders.data ?? []).reduce((sum, o) => sum + (o.total || 0), 0);

  const stats = {
    weeklyOrderCount: weeklyOrders.length,
    weeklyRevenue: (weeklyRevenue / 100).toFixed(2),
    totalOrderCount: (allOrders.data ?? []).length,
    totalRevenue: (totalRevenue / 100).toFixed(2),
    newSubscribers: newSubs.count ?? 0,
    totalActiveSubscribers: allActiveSubs.count ?? 0,
    newLeads: newLeads.count ?? 0,
    staleLeads: staleleads.count ?? 0,
    newWaitlist: newWaitlist.count ?? 0,
  };

  const weekStart = new Date(weekAgo).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const weekEnd = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const staleLeadAlert =
    stats.staleLeads > 0
      ? `<div style="background: #fef9c3; border: 1px solid #facc15; border-radius: 8px; padding: 14px; margin: 16px 0;">
           <strong style="color: #854d0e;">Heads up:</strong>
           <span style="color: #854d0e;"> ${stats.staleLeads} lead${stats.staleLeads > 1 ? "s" : ""} still waiting for a response.</span>
         </div>`
      : "";

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: "admin@therootedlearner.com",
      subject: `Weekly Summary — ${weekStart} – ${weekEnd}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2d2d2d;">
          <h1 style="color: #1a1a1a; font-size: 22px; margin-bottom: 4px;">Your Weekly Summary</h1>
          <p style="color: #8a8a8a; font-size: 14px; margin-top: 0;">${weekStart} – ${weekEnd}</p>

          ${staleLeadAlert}

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 12px 0; font-size: 14px; color: #555;">Orders this week</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.weeklyOrderCount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 12px 0; font-size: 14px; color: #555;">Revenue this week</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 600; text-align: right;">$${stats.weeklyRevenue}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 12px 0; font-size: 14px; color: #555;">New subscribers</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.newSubscribers}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 12px 0; font-size: 14px; color: #555;">New leads</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.newLeads}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 12px 0; font-size: 14px; color: #555;">New waitlist signups</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.newWaitlist}</td>
            </tr>
          </table>

          <h2 style="font-size: 16px; color: #1a1a1a; margin-top: 28px;">All Time</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 12px 0;">
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 10px 0; font-size: 14px; color: #555;">Total orders</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.totalOrderCount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 10px 0; font-size: 14px; color: #555;">Total revenue</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right;">$${stats.totalRevenue}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8ded0;">
              <td style="padding: 10px 0; font-size: 14px; color: #555;">Active subscribers</td>
              <td style="padding: 10px 0; font-size: 14px; font-weight: 600; text-align: right;">${stats.totalActiveSubscribers}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 14px;">
            <a href="https://www.therootedlearner.com/admin" style="color: #5C6B4A; font-weight: 500;">Open Admin Dashboard →</a>
          </p>

          <hr style="border: none; border-top: 1px solid #e8ded0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #8a8a8a;">
            The Rooted Learner · Automated weekly summary
          </p>
        </div>
      `,
    });
  } catch (emailError) {
    console.error("Weekly summary email failed:", emailError);
    return NextResponse.json({ success: false, error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true, stats });
}
