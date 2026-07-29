import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Leads | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getLeads() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("leads")
    .select("id, email, name, subject, message, organization, source, status, created_at")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}

const statusStyles: Record<string, { bg: string; color: string }> = {
  new: { bg: "#fef9c3", color: "#854d0e" },
  contacted: { bg: "#dbeafe", color: "#1e40af" },
  closed: { bg: "#f0fdf4", color: "#15803d" },
};

export default async function AdminLeadsPage() {
  const leads = await getLeads();
  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Leads</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{newCount} new of {leads.length} total</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {leads.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>No leads yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Email</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Subject</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Organization</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => {
                  const style = statusStyles[lead.status] || statusStyles.new;
                  return (
                    <tr key={lead.id} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                      <td style={{ padding: "10px 14px", color: "var(--text-dark)", whiteSpace: "nowrap" }}>{lead.name}</td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.email}</td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.subject || "—"}</td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{lead.organization || "—"}</td>
                      <td style={{ padding: "10px 14px" }}>
                        <span style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "99px",
                          background: style.bg,
                          color: style.color,
                        }}>
                          {lead.status}
                        </span>
                      </td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{new Date(lead.created_at).toLocaleDateString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
