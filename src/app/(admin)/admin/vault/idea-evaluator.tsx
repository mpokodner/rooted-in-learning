"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Evaluation = {
  channel: "tpt" | "rooted-learner" | "both";
  confidence: number;
  rationale: string;
  strengths: string[];
  concerns: string[];
  optimization: {
    title: string;
    positioning: string;
    pricing_suggestion: string;
    next_steps: string[];
  };
  viability: "strong" | "moderate" | "weak";
  viability_rationale: string;
};

const channelLabels: Record<string, string> = {
  tpt: "TPT",
  "rooted-learner": "Rooted Learner",
  both: "Both",
};

const channelColors: Record<string, { bg: string; color: string }> = {
  tpt: { bg: "#fef9c3", color: "#854d0e" },
  "rooted-learner": { bg: "#dcfce7", color: "#166534" },
  both: { bg: "#dbeafe", color: "#1e40af" },
};

const viabilityColors: Record<string, { bg: string; color: string }> = {
  strong: { bg: "#dcfce7", color: "#166534" },
  moderate: { bg: "#fef9c3", color: "#854d0e" },
  weak: { bg: "#fee2e2", color: "#991b1b" },
};

export default function IdeaEvaluator() {
  const [idea, setIdea] = useState("");
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  async function handleEvaluate() {
    if (!idea.trim() || loading) return;
    setLoading(true);
    setError(null);
    setEvaluation(null);
    setSaved(false);

    try {
      const res = await fetch("/api/admin/ideas/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea: idea.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Evaluation failed");
      setEvaluation(data.evaluation);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!evaluation || saving) return;
    setSaving(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/ideas/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          original_idea: idea.trim(),
          title: evaluation.optimization.title,
          channel: evaluation.channel,
          status: "routed",
          routing: {
            decision: evaluation.channel,
            confidence: evaluation.confidence,
            rationale: evaluation.rationale,
            boundary_factors: evaluation.strengths,
          },
          optimized: {
            title: evaluation.optimization.title,
            positioning: evaluation.optimization.positioning,
            pricing_recommendation: evaluation.optimization.pricing_suggestion,
            next_steps: evaluation.optimization.next_steps,
          },
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

  function handleReset() {
    setIdea("");
    setEvaluation(null);
    setError(null);
    setSaved(false);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleEvaluate();
    }
  }

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Input */}
      <div style={{
        background: "#fff",
        borderRadius: "12px",
        border: "1px solid var(--border-beige)",
        padding: "16px",
      }}>
        <label style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)", display: "block", marginBottom: "8px" }}>
          Evaluate a new idea
        </label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your product idea... (Cmd+Enter to evaluate)"
          disabled={loading}
          rows={3}
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
        <div style={{ display: "flex", gap: "8px", marginTop: "10px", alignItems: "center" }}>
          <button
            onClick={handleEvaluate}
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
            {loading ? "Evaluating..." : "Evaluate Idea"}
          </button>
          {evaluation && (
            <button
              onClick={handleReset}
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
              Clear
            </button>
          )}
        </div>
      </div>

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
            Analyzing your idea...
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

      {/* Results */}
      {evaluation && !loading && (
        <div style={{
          marginTop: "12px",
          background: "#fff",
          borderRadius: "12px",
          border: "1px solid var(--border-beige)",
          overflow: "hidden",
        }}>
          {/* Header row */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 16px",
            borderBottom: "1px solid var(--border-beige)",
            background: "var(--beige-bg)",
          }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "99px",
                background: channelColors[evaluation.channel]?.bg,
                color: channelColors[evaluation.channel]?.color,
              }}>
                {channelLabels[evaluation.channel] || evaluation.channel}
              </span>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "99px",
                background: viabilityColors[evaluation.viability]?.bg,
                color: viabilityColors[evaluation.viability]?.color,
                textTransform: "capitalize",
              }}>
                {evaluation.viability} viability
              </span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                {Math.round(evaluation.confidence * 100)}% confidence
              </span>
            </div>
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
                {saving ? "Saving..." : "Save to Vault"}
              </button>
            ) : (
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#166534" }}>
                Saved
              </span>
            )}
          </div>

          {/* Rationale */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-beige)" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
              Rationale
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: 0, lineHeight: 1.5 }}>
              {evaluation.rationale}
            </p>
          </div>

          {/* Strengths & Concerns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--border-beige)" }}>
            <div style={{ padding: "14px 16px", borderRight: "1px solid var(--border-beige)" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#166534", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Strengths
              </div>
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                {evaluation.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#854d0e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                Concerns
              </div>
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
                {evaluation.concerns.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>

          {/* Optimization */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-beige)" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
              Optimization
            </div>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text-dark)", marginBottom: "4px" }}>
              {evaluation.optimization.title}
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "0 0 6px", lineHeight: 1.5 }}>
              {evaluation.optimization.positioning}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: 0 }}>
              <strong>Pricing:</strong> {evaluation.optimization.pricing_suggestion}
            </p>
          </div>

          {/* Viability + Next Steps */}
          <div style={{ padding: "14px 16px" }}>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "0 0 8px", fontStyle: "italic" }}>
              {evaluation.viability_rationale}
            </p>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
              Next Steps
            </div>
            <ol style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.6 }}>
              {evaluation.optimization.next_steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
