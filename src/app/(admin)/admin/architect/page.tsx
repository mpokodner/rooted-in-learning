import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { ArchitectSession } from "@/types";
import ArchitectForm from "./architect-form";

export const metadata: Metadata = {
  title: "Idea Architect | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

const statusStyles: Record<string, { bg: string; color: string }> = {
  draft: { bg: "#f3f4f6", color: "#374151" },
  generating: { bg: "#fef9c3", color: "#854d0e" },
  complete: { bg: "#dcfce7", color: "#166534" },
  error: { bg: "#fee2e2", color: "#991b1b" },
};

async function getSessions() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("architect_sessions")
    .select("id, title, input_idea, status, selected_skills, idea_id, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (data ?? []) as Pick<ArchitectSession, "id" | "title" | "input_idea" | "status" | "selected_skills" | "idea_id" | "created_at">[];
}

export default async function ArchitectPage() {
  const sessions = await getSessions();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Idea Architect</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
            Turn ideas into architecture plans with AI-powered skills analysis
          </p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <ArchitectForm />

      {/* Sessions table */}
      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {sessions.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
            No architecture plans yet. Describe an idea above to generate your first plan.
          </p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Title</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Skills</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Linked Idea</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => {
                  const stStyle = statusStyles[session.status] || statusStyles.draft;
                  const skillCount = Array.isArray(session.selected_skills) ? session.selected_skills.length : 0;

                  return (
                    <tr key={session.id} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                      <td style={{ padding: "10px 14px" }}>
                        <Link href={`/admin/architect/${session.id}`} style={{ color: "var(--earth)", textDecoration: "none", fontWeight: 500 }}>
                          {session.title || session.input_idea.slice(0, 50) + (session.input_idea.length > 50 ? "..." : "")}
                        </Link>
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        <span style={{
                          fontSize: "11px", fontWeight: 500, padding: "2px 8px", borderRadius: "99px",
                          background: stStyle.bg, color: stStyle.color, textTransform: "capitalize",
                        }}>
                          {session.status}
                        </span>
                      </td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>
                        {skillCount > 0 ? `${skillCount} skills` : "—"}
                      </td>
                      <td style={{ padding: "10px 14px" }}>
                        {session.idea_id ? (
                          <Link href={`/admin/vault/${session.idea_id}`} style={{ fontSize: "11px", color: "var(--earth)", textDecoration: "none" }}>
                            View idea
                          </Link>
                        ) : (
                          <span style={{ fontSize: "11px", color: "var(--text-light)" }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                        {new Date(session.created_at).toLocaleDateString()}
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
