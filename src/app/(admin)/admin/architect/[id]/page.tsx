import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { ArchitectSession } from "@/types";
import CopyButton from "./copy-button";

export const metadata: Metadata = {
  title: "Architecture Plan | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getSession(id: string): Promise<ArchitectSession | null> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("architect_sessions")
    .select("*")
    .eq("id", id)
    .single();
  return data as ArchitectSession | null;
}

const categoryColors: Record<string, { bg: string; color: string }> = {
  "agent-orchestration": { bg: "#dbeafe", color: "#1e40af" },
  "rag-pipelines": { bg: "#fce7f3", color: "#9d174d" },
  "llm-integration": { bg: "#fef9c3", color: "#854d0e" },
  "llm-foundations": { bg: "#e0e7ff", color: "#3730a3" },
  "infra-security": { bg: "#fee2e2", color: "#991b1b" },
  "systems-thinking": { bg: "#dcfce7", color: "#166534" },
  meta: { bg: "#f3f4f6", color: "#374151" },
};

const sectionStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "12px",
  border: "1px solid var(--border-beige)",
  marginBottom: "12px",
  overflow: "hidden",
};

const headerStyle: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 600,
  color: "var(--text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "8px",
};

export default async function ArchitectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSession(id);
  if (!session) notFound();

  const arch = session.architecture;
  const constraints = session.constraints;
  const hasConstraints = constraints && Object.values(constraints).some((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v)
  );

  return (
    <div style={{ padding: "20px", maxWidth: "900px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Link href="/admin/architect" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Back to Idea Architect</Link>
        {session.idea_id && (
          <Link href={`/admin/vault/${session.idea_id}`} style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>
            View linked idea &rarr;
          </Link>
        )}
      </div>

      {/* Title */}
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>
          {session.title}
        </h1>
        <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
          Created {new Date(session.created_at).toLocaleDateString()} &middot; {Array.isArray(session.selected_skills) ? session.selected_skills.length : 0} skills used
        </p>
      </div>

      {/* Original Idea */}
      <div style={sectionStyle}>
        <div style={{ padding: "14px 16px" }}>
          <div style={headerStyle}>Original Idea</div>
          <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: 0, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
            {session.input_idea}
          </p>
        </div>
      </div>

      {/* Constraints */}
      {hasConstraints && (
        <div style={sectionStyle}>
          <div style={{ padding: "14px 16px" }}>
            <div style={headerStyle}>Constraints</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "13px" }}>
              {constraints.stack && (
                <div><span style={{ color: "var(--text-muted)" }}>Stack:</span> <span style={{ color: "var(--text-dark)" }}>{constraints.stack}</span></div>
              )}
              {constraints.timeline && (
                <div><span style={{ color: "var(--text-muted)" }}>Timeline:</span> <span style={{ color: "var(--text-dark)" }}>{constraints.timeline}</span></div>
              )}
              {constraints.rag_requirements && (
                <div><span style={{ color: "var(--text-muted)" }}>RAG:</span> <span style={{ color: "var(--text-dark)" }}>{constraints.rag_requirements}</span></div>
              )}
              {constraints.scale && (
                <div><span style={{ color: "var(--text-muted)" }}>Scale:</span> <span style={{ color: "var(--text-dark)", textTransform: "capitalize" }}>{constraints.scale}</span></div>
              )}
              {constraints.data_sources && constraints.data_sources.length > 0 && (
                <div style={{ gridColumn: "1 / -1" }}><span style={{ color: "var(--text-muted)" }}>Data Sources:</span> <span style={{ color: "var(--text-dark)" }}>{constraints.data_sources.join(", ")}</span></div>
              )}
            </div>
          </div>
        </div>
      )}

      {arch && (
        <>
          {/* Summary */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Summary</div>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: 0, lineHeight: 1.6 }}>
                {arch.summary}
              </p>
            </div>
          </div>

          {/* Systems Design */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Systems Design</div>
              <div style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                {arch.systems_design}
              </div>
            </div>
          </div>

          {/* Folder Structure */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Folder Structure</div>
              <pre style={{
                fontSize: "12px",
                fontFamily: "monospace",
                background: "var(--beige-bg)",
                padding: "12px",
                borderRadius: "8px",
                overflow: "auto",
                margin: 0,
                color: "var(--text-dark)",
              }}>
                {arch.folder_structure}
              </pre>
            </div>
          </div>

          {/* Frontend & Backend */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <div style={{ ...sectionStyle, marginBottom: 0 }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={headerStyle}>Frontend</div>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                  {arch.frontend_pieces.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ ...sectionStyle, marginBottom: 0 }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={headerStyle}>Backend</div>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                  {arch.backend_pieces.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Relevant Skills */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Relevant Skills</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {arch.relevant_skills.map((s) => {
                  const colors = categoryColors[s.category] || categoryColors.meta;
                  return (
                    <div key={s.slug} style={{
                      padding: "6px 10px",
                      borderRadius: "8px",
                      background: colors.bg,
                      fontSize: "12px",
                    }}>
                      <span style={{ fontWeight: 600, color: colors.color }}>{s.slug}</span>
                      <span style={{ color: "var(--text-muted)", marginLeft: "6px" }}>— {s.how_it_applies}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Decisions */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Key Decisions</div>
              {arch.key_decisions.map((d, i) => (
                <div key={i} style={{
                  padding: "10px",
                  borderRadius: "8px",
                  background: "var(--beige-bg)",
                  marginBottom: "8px",
                }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)", marginBottom: "4px" }}>
                    {d.decision}
                  </div>
                  <div style={{ fontSize: "12px", color: "#166534", marginBottom: "2px" }}>
                    Recommendation: {d.recommendation}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Tradeoff: {d.tradeoff}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Phases */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={headerStyle}>Implementation Phases</div>
              {arch.implementation_phases.map((p) => (
                <div key={p.phase} style={{ marginBottom: "12px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)", marginBottom: "4px" }}>
                    Phase {p.phase}: {p.title}
                  </div>
                  <ol style={{ margin: 0, paddingLeft: "20px", fontSize: "12px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                    {p.tasks.map((t, i) => <li key={i}>{t}</li>)}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Prompt */}
          {session.implementation_prompt && (
            <div style={sectionStyle}>
              <div style={{
                padding: "10px 16px",
                borderBottom: "1px solid var(--border-beige)",
                background: "var(--beige-bg)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <div style={headerStyle}>Claude Code Implementation Prompt</div>
                <CopyButton text={session.implementation_prompt} />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <pre style={{
                  fontSize: "12px",
                  fontFamily: "monospace",
                  background: "#1e1e1e",
                  color: "#d4d4d4",
                  padding: "16px",
                  borderRadius: "8px",
                  overflow: "auto",
                  margin: 0,
                  maxHeight: "400px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {session.implementation_prompt}
                </pre>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";
