import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Waitlist | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getWaitlistEntries() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("waitlist")
    .select("id, email, name, role, organization, district_size, product, source, created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}

const productLabels: Record<string, string> = {
  assessalign: "AssessAlign",
  hallpass: "Hall Pass",
};

export default async function AdminWaitlistPage() {
  const entries = await getWaitlistEntries();

  const byCounts: Record<string, number> = {};
  for (const e of entries) {
    byCounts[e.product] = (byCounts[e.product] || 0) + 1;
  }
  const summary = Object.entries(byCounts)
    .map(([p, c]) => `${productLabels[p] || p}: ${c}`)
    .join(" · ");

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Waitlist</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{entries.length} total{summary ? ` · ${summary}` : ""}</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {entries.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>No waitlist signups yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Product</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Email</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Role</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Organization</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>District Size</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                    <td style={{ padding: "10px 14px" }}>
                      <span style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "2px 8px",
                        borderRadius: "99px",
                        background: entry.product === "assessalign" ? "#ede9fe" : "#fce7f3",
                        color: entry.product === "assessalign" ? "#6d28d9" : "#be185d",
                      }}>
                        {productLabels[entry.product] || entry.product}
                      </span>
                    </td>
                    <td style={{ padding: "10px 14px", color: "var(--text-dark)", whiteSpace: "nowrap" }}>{entry.name || "—"}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{entry.email}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{entry.role || "—"}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{entry.organization || "—"}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{entry.district_size || "—"}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{new Date(entry.created_at).toLocaleDateString()}</td>
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
