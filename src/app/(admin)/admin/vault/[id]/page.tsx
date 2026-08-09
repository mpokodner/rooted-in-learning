import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import type { Idea, IdeaSource, SourcedClaim } from "@/types";

export const metadata: Metadata = {
  title: "Idea Detail | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getIdea(id: string): Promise<Idea | null> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("ideas")
    .select("*")
    .eq("id", id)
    .single();
  return data as Idea | null;
}

const channelLabels: Record<string, string> = {
  tpt: "TPT",
  "rooted-learner": "Rooted Learner",
  both: "Both",
};

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

const reputabilityStyles: Record<string, { bg: string; color: string }> = {
  official: { bg: "#dcfce7", color: "#166534" },
  industry: { bg: "#dbeafe", color: "#1e40af" },
  "seller-anecdote": { bg: "#fef9c3", color: "#854d0e" },
  inferred: { bg: "#f3f4f6", color: "#6b7280" },
};

function Pill({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <span style={{
      fontSize: "11px", fontWeight: 500, padding: "2px 8px", borderRadius: "99px",
      background: bg, color, display: "inline-block",
    }}>
      {label}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--beige-bg)", borderRadius: "8px", padding: "16px", marginBottom: "12px" }}>
      <h3 style={{ fontSize: "13px", fontWeight: 600, color: "var(--earth)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function SourcedClaimList({ claims }: { claims: SourcedClaim[] }) {
  return (
    <ul style={{ margin: "8px 0", paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)" }}>
      {claims.map((claim, i) => (
        <li key={i} style={{ marginBottom: "6px" }}>
          {claim.claim}
          {claim.sources.length > 0 && (
            <span style={{ fontSize: "11px", color: "var(--text-muted)", marginLeft: "4px" }}>
              [{claim.sources.map((s, j) => (
                <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--earth)", textDecoration: "none" }}>
                  {s.title || "source"}{j < claim.sources.length - 1 ? ", " : ""}
                </a>
              ))}]
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} style={{
          width: "14px", height: "14px", borderRadius: "50%",
          background: i < score ? "var(--earth)" : "var(--border-beige)",
        }} />
      ))}
      <span style={{ fontSize: "13px", fontWeight: 600, marginLeft: "8px", color: "var(--text-dark)" }}>{score}/10</span>
    </div>
  );
}

export default async function VaultDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idea = await getIdea(id);

  if (!idea) {
    notFound();
  }

  const stStyle = statusStyles[idea.status] || statusStyles.draft;
  const chStyle = idea.channel ? channelStyles[idea.channel] || channelStyles.tpt : null;

  const allSources: IdeaSource[] = [
    ...(idea.sources || []),
    ...(idea.tpt_research?.demand_signals?.flatMap(c => c.sources) || []),
    ...(idea.tpt_research?.seasonal_timing?.flatMap(c => c.sources) || []),
    ...(idea.tpt_research?.competitor_saturation?.sources || []),
    ...(idea.tpt_research?.pricing_bands?.sources || []),
  ];
  const uniqueSources = allSources.filter((s, i, arr) =>
    arr.findIndex(o => o.url === s.url) === i
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      {/* Back link */}
      <Link href="/admin/vault" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none", marginBottom: "16px", display: "block" }}>
        &larr; Back to Vault
      </Link>

      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
          {idea.title || "Untitled Idea"}
        </h1>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <Pill label={idea.status} bg={stStyle.bg} color={stStyle.color} />
          {chStyle && <Pill label={channelLabels[idea.channel!] || idea.channel!} bg={chStyle.bg} color={chStyle.color} />}
          <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            {new Date(idea.created_at).toLocaleDateString()}
          </span>
          <Link
            href={`/admin/architect?idea_id=${idea.id}&prefill=${encodeURIComponent(idea.original_idea)}`}
            style={{
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "99px",
              background: "var(--earth)",
              color: "#fff",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Plan Architecture &rarr;
          </Link>
        </div>
      </div>

      {/* Original Idea */}
      <Section title="Original Idea">
        <p style={{ fontSize: "14px", color: "var(--text-dark)", lineHeight: 1.6, margin: 0, whiteSpace: "pre-wrap" }}>
          {idea.original_idea}
        </p>
      </Section>

      {/* TPT Research */}
      {idea.tpt_research && (
        <Section title="TPT Market Research">
          {idea.tpt_research.summary && (
            <p style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.5, marginBottom: "12px" }}>
              {idea.tpt_research.summary}
            </p>
          )}
          {idea.tpt_research.demand_signals && idea.tpt_research.demand_signals.length > 0 && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Demand Signals</h4>
              <SourcedClaimList claims={idea.tpt_research.demand_signals} />
            </>
          )}
          {idea.tpt_research.competitor_saturation && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Competitor Saturation</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.tpt_research.competitor_saturation.claim}</p>
            </>
          )}
          {idea.tpt_research.pricing_bands && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Pricing Bands</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.tpt_research.pricing_bands.claim}</p>
            </>
          )}
          {idea.tpt_research.seasonal_timing && idea.tpt_research.seasonal_timing.length > 0 && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Seasonal Timing</h4>
              <SourcedClaimList claims={idea.tpt_research.seasonal_timing} />
            </>
          )}
          {idea.tpt_research.trending_keywords && idea.tpt_research.trending_keywords.length > 0 && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Trending Keywords</h4>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {idea.tpt_research.trending_keywords.map((kw, i) => (
                  <span key={i} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "99px", background: "var(--border-beige)", color: "var(--text-dark)" }}>
                    {kw}
                  </span>
                ))}
              </div>
            </>
          )}
        </Section>
      )}

      {/* Brand Research */}
      {idea.brand_research && (
        <Section title="Brand Research">
          {idea.brand_research.brand_alignment_score != null && (
            <div style={{ marginBottom: "12px" }}>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>Brand Alignment</h4>
              <ScoreBar score={idea.brand_research.brand_alignment_score} />
            </div>
          )}
          {idea.brand_research.brand_alignment_rationale && (
            <p style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.5, marginBottom: "10px" }}>
              {idea.brand_research.brand_alignment_rationale}
            </p>
          )}
          {idea.brand_research.business_fit && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Business Fit</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.brand_research.business_fit}</p>
            </>
          )}
          {idea.brand_research.audience_match && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Audience Match</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.brand_research.audience_match}</p>
            </>
          )}
          {idea.brand_research.design_considerations && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Design Considerations</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.brand_research.design_considerations}</p>
            </>
          )}
          {idea.brand_research.product_ladder_position && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Product Ladder Position</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 8px" }}>{idea.brand_research.product_ladder_position}</p>
            </>
          )}
        </Section>
      )}

      {/* Routing Decision */}
      {idea.routing && (
        <Section title="Routing Decision">
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
            {idea.routing.decision && (
              <span style={{
                fontSize: "14px", fontWeight: 600, padding: "4px 14px", borderRadius: "99px",
                background: channelStyles[idea.routing.decision]?.bg || "#f3f4f6",
                color: channelStyles[idea.routing.decision]?.color || "#374151",
              }}>
                {channelLabels[idea.routing.decision] || idea.routing.decision}
              </span>
            )}
            {idea.routing.confidence != null && (
              <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>
                {Math.round(idea.routing.confidence * 100)}% confidence
              </span>
            )}
          </div>
          {idea.routing.rationale && (
            <p style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.5, marginBottom: "10px" }}>
              {idea.routing.rationale}
            </p>
          )}
          {idea.routing.boundary_factors && idea.routing.boundary_factors.length > 0 && (
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {idea.routing.boundary_factors.map((factor, i) => (
                <span key={i} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "99px", background: "var(--border-beige)", color: "var(--text-dark)" }}>
                  {factor}
                </span>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Optimized Version */}
      {idea.optimized && (
        <Section title="Optimized Version">
          {idea.optimized.title && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Title</h4>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)", margin: "0 0 10px" }}>{idea.optimized.title}</p>
            </>
          )}
          {idea.optimized.positioning && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Positioning</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.5, margin: "0 0 10px" }}>{idea.optimized.positioning}</p>
            </>
          )}
          {idea.optimized.pricing_recommendation && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Pricing</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 10px" }}>{idea.optimized.pricing_recommendation}</p>
            </>
          )}
          {idea.optimized.differentiation && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Differentiation</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", lineHeight: 1.5, margin: "0 0 10px" }}>{idea.optimized.differentiation}</p>
            </>
          )}
          {idea.optimized.product_ladder_placement && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Product Ladder</h4>
              <p style={{ fontSize: "13px", color: "var(--text-dark)", margin: "0 0 10px" }}>{idea.optimized.product_ladder_placement}</p>
            </>
          )}
          {idea.optimized.next_steps && idea.optimized.next_steps.length > 0 && (
            <>
              <h4 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "4px" }}>Next Steps</h4>
              <ul style={{ margin: "0", paddingLeft: "16px", fontSize: "13px", color: "var(--text-dark)" }}>
                {idea.optimized.next_steps.map((step, i) => (
                  <li key={i} style={{ marginBottom: "4px" }}>{step}</li>
                ))}
              </ul>
            </>
          )}
        </Section>
      )}

      {/* Sources */}
      {uniqueSources.length > 0 && (
        <Section title="Sources">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "12px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)" }}>
                  <th style={{ textAlign: "left", padding: "6px 8px", fontWeight: 500, color: "var(--text-muted)" }}>Title</th>
                  <th style={{ textAlign: "left", padding: "6px 8px", fontWeight: 500, color: "var(--text-muted)" }}>Accessed</th>
                  <th style={{ textAlign: "left", padding: "6px 8px", fontWeight: 500, color: "var(--text-muted)" }}>Reputability</th>
                </tr>
              </thead>
              <tbody>
                {uniqueSources.map((source, i) => {
                  const repStyle = reputabilityStyles[source.reputability] || reputabilityStyles.inferred;
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                      <td style={{ padding: "6px 8px" }}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--earth)", textDecoration: "none" }}>
                          {source.title || source.url}
                        </a>
                      </td>
                      <td style={{ padding: "6px 8px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{source.access_date}</td>
                      <td style={{ padding: "6px 8px" }}>
                        <Pill label={source.reputability} bg={repStyle.bg} color={repStyle.color} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>
      )}
    </div>
  );
}

export const dynamic = "force-dynamic";
