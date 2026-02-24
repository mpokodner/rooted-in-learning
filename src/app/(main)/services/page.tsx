import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | The Rooted Learner",
  description:
    "Strategic consulting services for schools, districts, and educators. Literacy systems, EdTech integration, AI implementation, and curriculum design.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--neutral-bg)" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--earth) 0%, var(--earth-dark) 100%)",
          color: "var(--text-on-dark)",
          paddingBlock: "var(--space-hero)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "var(--max-width-md)" }}>
          <p
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-widest)",
              color: "var(--terracotta-light)",
              marginBottom: "var(--space-md)",
            }}
          >
            Services
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-4xl)",
              lineHeight: "var(--leading-tight)",
              color: "var(--white)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Expert Consulting for Educators &amp; Schools
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "36rem",
              marginInline: "auto",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Strategic support from a 12+ year practitioner who builds real solutions
            — not just recommendations.
          </p>
        </div>
      </section>

      {/* CTA Card */}
      <section className="section">
        <div className="container" style={{ maxWidth: "var(--max-width-lg)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
              gap: "var(--gap-cards)",
            }}
          >
            <Link
              href="/services/consulting"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--white)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-beige)",
                padding: "clamp(2rem, 4vw, 3rem)",
                textDecoration: "none",
                boxShadow: "var(--shadow-sm)",
                transition: "all var(--duration-base) var(--ease-default)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--beige-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-lg)",
                  color: "var(--earth)",
                }}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-2xl)",
                  color: "var(--text-black)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Strategic Consulting
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-muted)",
                  lineHeight: "var(--leading-relaxed)",
                  flex: 1,
                  marginBottom: "var(--space-lg)",
                }}
              >
                Literacy systems, EdTech integration, AI-powered instruction,
                and curriculum design — tailored for schools, districts, and
                individual educators.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--earth)",
                }}
              >
                View Consulting Services
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/contact"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--white)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-beige)",
                padding: "clamp(2rem, 4vw, 3rem)",
                textDecoration: "none",
                boxShadow: "var(--shadow-sm)",
                transition: "all var(--duration-base) var(--ease-default)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "var(--beige-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "var(--space-lg)",
                  color: "var(--terracotta)",
                }}
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ width: "1.5rem", height: "1.5rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-2xl)",
                  color: "var(--text-black)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Get in Touch
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--text-muted)",
                  lineHeight: "var(--leading-relaxed)",
                  flex: 1,
                  marginBottom: "var(--space-lg)",
                }}
              >
                Start with a free 30-minute discovery call. No pressure, no
                pitch — just a conversation about your goals and challenges.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--terracotta)",
                }}
              >
                Book a Discovery Call
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
