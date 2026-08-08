import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { Idea, IdeaChannel, IdeaStatus } from "@/types";

export const metadata: Metadata = {
  title: "Idea Vault | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getIdeas(channel?: string, status?: string) {
  const supabase = createServerSupabaseClient();
  let query = supabase
    .from("ideas")
    .select("id, title, original_idea, status, channel, brand_research, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (channel && channel !== "all") {
    query = query.eq("channel", channel);
  }
  if (status && status !== "all") {
    query = query.eq("status", status);
  }

  const { data } = await query;
  return (data ?? []) as Pick<Idea, "id" | "title" | "original_idea" | "status" | "channel" | "brand_research" | "created_at">[];
}

const channelStyles: Record<string, { bg: string; color: string }> = {
  tpt: { bg: "#fef9c3", color: "#854d0e" },
  "rooted-learner": { bg: "#dcfce7", color: "#166534" },
  both: { bg: "#dbeafe", color: "#1e40af" },
};

const statusStyles: Record<string, { bg: string; color: string }> = {
  draft: { bg: "#f3f4f6", color: "#374151" },
  researched: { bg: "#fef9c3", color: "#854d0e" },
  routed: { bg: "#dbeafe", color: "#1e40af" },
  complete: { bg: "#dcfce7", color: "#166534" },
  archived: { bg: "#f3f4f6", color: "#6b7280" },
};

const channelLabels: Record<string, string> = {
  tpt: "TPT",
  "rooted-learner": "Rooted Learner",
  both: "Both",
};

const CHANNELS: (IdeaChannel | "all")[] = ["all", "tpt", "rooted-learner", "both"];
const STATUSES: (IdeaStatus | "all")[] = ["all", "draft", "researched", "routed", "complete", "archived"];

export default async function VaultPage({
  searchParams,
}: {
  searchParams: Promise<{ channel?: string; status?: string }>;
}) {
  const params = await searchParams;
  const activeChannel = params.channel || "all";
  const activeStatus = params.status || "all";
  const ideas = await getIdeas(activeChannel, activeStatus);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Idea Vault</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{ideas.length} ideas</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500, marginRight: "4px" }}>Channel:</span>
          {CHANNELS.map((ch) => {
            const isActive = activeChannel === ch;
            const href = `?channel=${ch}&status=${activeStatus}`;
            return (
              <Link key={ch} href={href} style={{
                fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "99px", textDecoration: "none",
                background: isActive ? "var(--earth)" : "var(--beige-bg)",
                color: isActive ? "#fff" : "var(--text-muted)",
              }}>
                {ch === "all" ? "All" : channelLabels[ch] || ch}
              </Link>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500, marginRight: "4px" }}>Status:</span>
          {STATUSES.map((st) => {
            const isActive = activeStatus === st;
            const href = `?channel=${activeChannel}&status=${st}`;
            return (
              <Link key={st} href={href} style={{
                fontSize: "11px", fontWeight: 500, padding: "3px 10px", borderRadius: "99px", textDecoration: "none",
                background: isActive ? "var(--earth)" : "var(--beige-bg)",
                color: isActive ? "#fff" : "var(--text-muted)",
                textTransform: "capitalize",
              }}>
                {st === "all" ? "All" : st}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {ideas.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>No ideas yet. Run <code>/run-idea</code> to evaluate your first product idea.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Title</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Channel</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Brand Score</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {ideas.map((idea) => {
                  const chStyle = idea.channel ? channelStyles[idea.channel] || channelStyles.tpt : { bg: "#f3f4f6", color: "#6b7280" };
                  const stStyle = statusStyles[idea.status] || statusStyles.draft;
                  const brandScore = idea.brand_research?.brand_alignment_score;

                  return (
                    <tr key={idea.id} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                      <td style={{ padding: "10px 14px" }}>
                        <Link href={`/admin/vault/${idea.id}`} style={{ color: "var(--earth)", textDecoration: "none", fontWeight: 500 }}>
                          {idea.title || idea.original_idea.slice(0, 50) + (idea.original_idea.length > 50 ? "..." : "")}
                        </Link>
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        {idea.channel ? (
                          <span style={{
                            fontSize: "11px", fontWeight: 500, padding: "2px 8px", borderRadius: "99px",
                            background: chStyle.bg, color: chStyle.color,
                          }}>
                            {channelLabels[idea.channel] || idea.channel}
                          </span>
                        ) : (
                          <span style={{ fontSize: "11px", color: "var(--text-light)" }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        <span style={{
                          fontSize: "11px", fontWeight: 500, padding: "2px 8px", borderRadius: "99px",
                          background: stStyle.bg, color: stStyle.color, textTransform: "capitalize",
                        }}>
                          {idea.status}
                        </span>
                      </td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>
                        {brandScore != null ? `${brandScore}/10` : "—"}
                      </td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                        {new Date(idea.created_at).toLocaleDateString()}
                      </td>
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
