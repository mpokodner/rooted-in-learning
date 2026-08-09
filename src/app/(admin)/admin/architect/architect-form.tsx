"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ArchitectureOutput } from "@/types";

interface SelectedSkill {
  slug: string;
  category: string;
  rationale: string;
}

type Step = "input" | "skills" | "results";

const categoryColors: Record<string, { bg: string; color: string }> = {
  "agent-orchestration": { bg: "#dbeafe", color: "#1e40af" },
  "rag-pipelines": { bg: "#fce7f3", color: "#9d174d" },
  "llm-integration": { bg: "#fef9c3", color: "#854d0e" },
  "llm-foundations": { bg: "#e0e7ff", color: "#3730a3" },
  "infra-security": { bg: "#fee2e2", color: "#991b1b" },
  "systems-thinking": { bg: "#dcfce7", color: "#166534" },
  meta: { bg: "#f3f4f6", color: "#374151" },
};

export default function ArchitectForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<Step>("input");
  const [idea, setIdea] = useState("");
  const [showConstraints, setShowConstraints] = useState(false);
  const [stack, setStack] = useState("");
  const [timeline, setTimeline] = useState("");
  const [ragRequirements, setRagRequirements] = useState("");
  const [dataSources, setDataSources] = useState("");
  const [scale, setScale] = useState("");

  const [selectedSkills, setSelectedSkills] = useState<SelectedSkill[]>([]);
  const [selectionSummary, setSelectionSummary] = useState("");
  const [deselected, setDeselected] = useState<Set<string>>(new Set());

  const [architecture, setArchitecture] = useState<ArchitectureOutput | null>(null);
  const [implementationPrompt, setImplementationPrompt] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const prefill = searchParams.get("prefill");
    if (prefill) setIdea(decodeURIComponent(prefill));
  }, [searchParams]);

  const ideaId = searchParams.get("idea_id") || undefined;

  function buildConstraints() {
    const c: Record<string, unknown> = {};
    if (stack.trim()) c.stack = stack.trim();
    if (timeline.trim()) c.timeline = timeline.trim();
    if (ragRequirements.trim()) c.rag_requirements = ragRequirements.trim();
    if (dataSources.trim()) c.data_sources = dataSources.split(",").map((s) => s.trim()).filter(Boolean);
    if (scale) c.scale = scale;
    return Object.keys(c).length > 0 ? c : undefined;
  }

  async function handleAnalyze() {
    if (!idea.trim() || loading) return;
    setLoading(true);
    setError(null);
    setSelectedSkills([]);
    setDeselected(new Set());

    try {
      const res = await fetch("/api/admin/architect/select-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea: idea.trim(), constraints: buildConstraints() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed");
      setSelectedSkills(data.selected_skills || []);
      setSelectionSummary(data.selection_summary || "");
      setStep("skills");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleGenerate() {
    const activeSlugs = selectedSkills
      .filter((s) => !deselected.has(s.slug))
      .map((s) => s.slug);

    if (activeSlugs.length === 0 || loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/architect/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: idea.trim(),
          constraints: buildConstraints(),
          selected_skills: activeSlugs,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setArchitecture(data.architecture || null);
      setImplementationPrompt(data.implementation_prompt || "");
      setStep("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!architecture || saving) return;
    setSaving(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/architect/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea_id: ideaId,
          title: architecture.title || idea.trim().slice(0, 60),
          input_idea: idea.trim(),
          constraints: buildConstraints() || {},
          selected_skills: selectedSkills.filter((s) => !deselected.has(s.slug)).map((s) => s.slug),
          architecture,
          implementation_prompt: implementationPrompt,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      setSaved(true);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(implementationPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setStep("input");
    setIdea("");
    setStack("");
    setTimeline("");
    setRagRequirements("");
    setDataSources("");
    setScale("");
    setSelectedSkills([]);
    setDeselected(new Set());
    setArchitecture(null);
    setImplementationPrompt("");
    setError(null);
    setSaved(false);
    setCopied(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleAnalyze();
    }
  }

  function toggleSkill(slug: string) {
    setDeselected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  const sectionStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid var(--border-beige)",
    marginBottom: "12px",
    overflow: "hidden",
  };

  const sectionHeaderStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 600,
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: "8px",
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Step 1: Input */}
      {step === "input" && (
        <div style={sectionStyle}>
          <div style={{ padding: "16px" }}>
            <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)", display: "block", marginBottom: "8px" }}>
              Describe your project idea
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe the feature, product, or system you want to build... (Cmd+Enter to analyze)"
              disabled={loading}
              rows={4}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "14px",
                borderRadius: "8px",
                border: "1px solid var(--border-beige)",
                background: "var(--beige-bg)",
                color: "var(--text-dark)",
                resize: "vertical",
                fontFamily: "inherit",
                outline: "none",
                boxSizing: "border-box",
              }}
            />

            <button
              onClick={() => setShowConstraints(!showConstraints)}
              style={{
                marginTop: "8px",
                padding: "4px 0",
                fontSize: "13px",
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {showConstraints ? "Hide constraints" : "Add constraints (optional)"}
            </button>

            {showConstraints && (
              <div style={{ marginTop: "8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <div>
                  <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Stack</label>
                  <input
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                    placeholder="e.g. Next.js, Supabase, Python"
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-beige)",
                      background: "var(--beige-bg)",
                      color: "var(--text-dark)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Timeline</label>
                  <input
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g. 2 weeks"
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-beige)",
                      background: "var(--beige-bg)",
                      color: "var(--text-dark)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>RAG Requirements</label>
                  <input
                    value={ragRequirements}
                    onChange={(e) => setRagRequirements(e.target.value)}
                    placeholder="e.g. curriculum docs, standards PDFs"
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-beige)",
                      background: "var(--beige-bg)",
                      color: "var(--text-dark)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Data Sources</label>
                  <input
                    value={dataSources}
                    onChange={(e) => setDataSources(e.target.value)}
                    placeholder="comma-separated, e.g. Supabase, S3"
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-beige)",
                      background: "var(--beige-bg)",
                      color: "var(--text-dark)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Scale</label>
                  <select
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid var(--border-beige)",
                      background: "var(--beige-bg)",
                      color: "var(--text-dark)",
                      outline: "none",
                    }}
                  >
                    <option value="">Select scale...</option>
                    <option value="prototype">Prototype</option>
                    <option value="production">Production</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <button
                onClick={handleAnalyze}
                disabled={!idea.trim() || loading}
                style={{
                  padding: "8px 20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  borderRadius: "8px",
                  border: "none",
                  background: loading || !idea.trim() ? "#ccc" : "var(--earth)",
                  color: "#fff",
                  cursor: loading || !idea.trim() ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Analyzing..." : "Analyze Idea"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{
          marginTop: "12px",
          padding: "20px",
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid var(--border-beige)",
          textAlign: "center",
        }}>
          <div style={{
            width: "32px",
            height: "32px",
            border: "3px solid var(--border-beige)",
            borderTopColor: "var(--earth)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 12px",
          }} />
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
            {step === "input" ? "Selecting relevant skills..." : "Generating architecture plan..."}
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          marginTop: "12px",
          padding: "12px 16px",
          background: "#fef2f2",
          borderRadius: "8px",
          border: "1px solid #fecaca",
          fontSize: "13px",
          color: "#991b1b",
        }}>
          {error}
        </div>
      )}

      {/* Step 2: Skill Review */}
      {step === "skills" && !loading && (
        <div style={sectionStyle}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
            <div style={sectionHeaderStyle}>Selected Skills</div>
            <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: 0, lineHeight: 1.5 }}>
              {selectionSummary}
            </p>
          </div>
          <div style={{ padding: "14px 16px" }}>
            {selectedSkills.map((skill) => {
              const isActive = !deselected.has(skill.slug);
              const colors = categoryColors[skill.category] || categoryColors.meta;
              return (
                <div
                  key={skill.slug}
                  onClick={() => toggleSkill(skill.slug)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "6px",
                    cursor: "pointer",
                    opacity: isActive ? 1 : 0.5,
                    background: isActive ? "var(--beige-bg)" : "transparent",
                    border: `1px solid ${isActive ? "var(--border-beige)" : "transparent"}`,
                    transition: "all 0.15s",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isActive}
                    readOnly
                    style={{ marginTop: "2px", accentColor: "var(--earth)" }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)" }}>
                        {skill.slug}
                      </span>
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "99px",
                        background: colors.bg,
                        color: colors.color,
                      }}>
                        {skill.category}
                      </span>
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0, lineHeight: 1.4 }}>
                      {skill.rationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ padding: "0 16px 14px", display: "flex", gap: "8px" }}>
            <button
              onClick={handleGenerate}
              disabled={selectedSkills.every((s) => deselected.has(s.slug)) || loading}
              style={{
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "8px",
                border: "none",
                background: "var(--earth)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Generate Architecture Plan
            </button>
            <button
              onClick={() => { setStep("input"); setError(null); }}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: 500,
                borderRadius: "8px",
                border: "1px solid var(--border-beige)",
                background: "transparent",
                color: "var(--text-muted)",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Results */}
      {step === "results" && architecture && !loading && (
        <div>
          {/* Title + actions bar */}
          <div style={{
            ...sectionStyle,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 16px",
          }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-dark)", margin: 0 }}>
                {architecture.title}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "4px 0 0" }}>
                {architecture.summary}
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
              {!saved ? (
                <button
                  onClick={handleSave}
                  disabled={saving}
                  style={{
                    padding: "6px 16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    borderRadius: "6px",
                    border: "none",
                    background: saving ? "#ccc" : "var(--earth)",
                    color: "#fff",
                    cursor: saving ? "not-allowed" : "pointer",
                  }}
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              ) : (
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#166534" }}>Saved</span>
              )}
              <button
                onClick={handleReset}
                style={{
                  padding: "6px 16px",
                  fontSize: "12px",
                  fontWeight: 500,
                  borderRadius: "6px",
                  border: "1px solid var(--border-beige)",
                  background: "transparent",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                }}
              >
                New
              </button>
            </div>
          </div>

          {/* Systems Design */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={sectionHeaderStyle}>Systems Design</div>
              <div
                style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{ __html: simpleMarkdown(architecture.systems_design) }}
              />
            </div>
          </div>

          {/* Folder Structure */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={sectionHeaderStyle}>Folder Structure</div>
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
                {architecture.folder_structure}
              </pre>
            </div>
          </div>

          {/* Frontend & Backend */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <div style={{ ...sectionStyle, marginBottom: 0 }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={sectionHeaderStyle}>Frontend</div>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                  {architecture.frontend_pieces.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ ...sectionStyle, marginBottom: 0 }}>
              <div style={{ padding: "14px 16px" }}>
                <div style={sectionHeaderStyle}>Backend</div>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                  {architecture.backend_pieces.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Relevant Skills */}
          <div style={sectionStyle}>
            <div style={{ padding: "14px 16px" }}>
              <div style={sectionHeaderStyle}>Relevant Skills</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {architecture.relevant_skills.map((s) => {
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
              <div style={sectionHeaderStyle}>Key Decisions</div>
              {architecture.key_decisions.map((d, i) => (
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
              <div style={sectionHeaderStyle}>Implementation Phases</div>
              {architecture.implementation_phases.map((p) => (
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
          <div style={sectionStyle}>
            <div style={{
              padding: "10px 16px",
              borderBottom: "1px solid var(--border-beige)",
              background: "var(--beige-bg)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div style={sectionHeaderStyle}>Claude Code Implementation Prompt</div>
              <button
                onClick={handleCopy}
                style={{
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  borderRadius: "6px",
                  border: "1px solid var(--border-beige)",
                  background: copied ? "#dcfce7" : "#fff",
                  color: copied ? "#166534" : "var(--text-dark)",
                  cursor: "pointer",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
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
                {implementationPrompt}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function simpleMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/^### (.+)$/gm, '<strong style="font-size:14px;display:block;margin:12px 0 4px">$1</strong>')
    .replace(/^## (.+)$/gm, '<strong style="font-size:15px;display:block;margin:16px 0 6px">$1</strong>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, '<code style="background:var(--beige-bg);padding:1px 4px;border-radius:3px;font-size:12px">$1</code>')
    .replace(/\n/g, "<br/>");
}
