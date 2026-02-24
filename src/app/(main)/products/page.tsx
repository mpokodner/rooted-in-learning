import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Tools | The Rooted Learner",
  description:
    "Research-based literacy tools, standards-aligned lessons, and assessment solutions built by a veteran educator. Digital products for modern classrooms.",
  alternates: {
    canonical: "/products",
  },
};

const products = [
  {
    title: "AssessAlign",
    description:
      "Standards-based assessment with AI-powered question generation, real-time analytics, and automatic intervention grouping — built for how schools actually work.",
    href: "/products/assessalign",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    badge: "In Development",
  },
  {
    title: "Lessons",
    description:
      "Standards-aligned, classroom-tested lessons and curriculum materials for K-8 educators and homeschool families. Just download and teach.",
    href: "/products/lessons",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    badge: null,
  },
  {
    title: "Teacher Tools",
    description:
      "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
    href: "/products/teacher-tools",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    badge: null,
  },
];

export default function ProductsPage() {
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
            Products &amp; Tools
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
            Research-Based Tools for Educators, Schools &amp; Families
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "38rem",
              marginInline: "auto",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            Digital solutions built by a 12+ year classroom teacher and reading
            interventionist — designed for how modern classrooms actually work.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
              gap: "var(--gap-cards)",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "var(--white)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-beige)",
                  padding: "clamp(1.5rem, 3vw, 2.5rem)",
                  textDecoration: "none",
                  transition: "all var(--duration-base) var(--ease-default)",
                  boxShadow: "var(--shadow-sm)",
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
                    <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
                  </svg>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-sm)" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-2xl)",
                      color: "var(--text-black)",
                    }}
                  >
                    {product.title}
                  </h2>
                  {product.badge && (
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--terracotta)",
                        backgroundColor: "rgba(176,89,49,0.1)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--text-muted)",
                    lineHeight: "var(--leading-relaxed)",
                    flex: 1,
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  {product.description}
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
                  Learn More
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

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--beige-bg)",
          paddingBlock: "var(--space-section-lg)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "var(--max-width-md)" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-3xl)",
              color: "var(--text-black)",
              marginBottom: "var(--space-md)",
            }}
          >
            Need Customized Support?
          </h2>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--text-muted)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "var(--space-xl)",
              maxWidth: "32rem",
              marginInline: "auto",
            }}
          >
            Beyond products, I offer strategic consulting for schools, districts,
            and educators — from literacy systems to AI implementation.
          </p>
          <Link
            href="/services/consulting"
            className="btn btn-primary btn-lg"
          >
            Explore Consulting Services
          </Link>
        </div>
      </section>
    </div>
  );
}
