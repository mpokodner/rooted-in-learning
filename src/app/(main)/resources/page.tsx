import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resources | The Rooted Learner",
  description:
    "Free educator resources including recommended tools, books, gear, and research-backed blog articles on literacy, AI in education, and classroom systems.",
  alternates: {
    canonical: "/resources",
  },
};

const resources = [
  {
    title: "Recommended Tools",
    description:
      "Curated collection of tools, books, and gear personally tested and recommended for educators. Everything I actually use in my own practice.",
    href: "/resources/recommended-tools",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    label: "Browse Tools",
  },
  {
    title: "Blog",
    description:
      "Research-backed articles on literacy instruction, AI in education, classroom systems design, and practical strategies for modern educators.",
    href: "/blog",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    label: "Read the Blog",
  },
];

export default function ResourcesPage() {
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
            Free Resources
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
            Resources for Educators &amp; Families
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
            Free tools, guides, and articles to support your teaching practice
            and professional growth.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="section">
        <div className="container" style={{ maxWidth: "var(--max-width-lg)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
              gap: "var(--gap-cards)",
            }}
          >
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={resource.icon} />
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
                  {resource.title}
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
                  {resource.description}
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
                  {resource.label}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
