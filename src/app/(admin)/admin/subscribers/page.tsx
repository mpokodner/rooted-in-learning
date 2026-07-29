import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Subscribers | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getSubscribers() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("newsletter_subscribers")
    .select("email, name, source, freebie_sent, subscribed, created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}

export default async function AdminSubscribersPage() {
  const subscribers = await getSubscribers();
  const active = subscribers.filter((s) => s.subscribed).length;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Subscribers</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{active} active of {subscribers.length} total</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {subscribers.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>No subscribers yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Email</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Source</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Freebie</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr key={sub.email} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                    <td style={{ padding: "10px 14px", color: "var(--text-dark)", maxWidth: "220px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub.email}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{sub.name || "—"}</td>
                    <td style={{ padding: "10px 14px" }}>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "2px 8px",
                        borderRadius: "99px",
                        background: "var(--beige-bg)",
                        color: "var(--text-muted)",
                        display: "inline-block",
                        maxWidth: "140px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>
                        {sub.source}
                      </span>
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      {sub.freebie_sent ? (
                        <span style={{ fontSize: "12px", color: "#16a34a" }}>Sent</span>
                      ) : (
                        <span style={{ fontSize: "12px", color: "#9ca3af" }}>No</span>
                      )}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "2px 8px",
                        borderRadius: "99px",
                        background: sub.subscribed ? "#f0fdf4" : "#fef2f2",
                        color: sub.subscribed ? "#15803d" : "#dc2626",
                      }}>
                        {sub.subscribed ? "Active" : "Unsubscribed"}
                      </span>
                    </td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{new Date(sub.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
