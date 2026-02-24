import type { Metadata } from "next";
import Link from "next/link";
import "./products.css";

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
    color: "terracotta" as const,
  },
  {
    title: "Lessons",
    description:
      "Standards-aligned, classroom-tested lessons and curriculum materials for K-8 educators and homeschool families. Just download and teach.",
    href: "/products/lessons",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    badge: null,
    color: "earth" as const,
  },
  {
    title: "Teacher Tools",
    description:
      "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
    href: "/products/teacher-tools",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    badge: null,
    color: "mist" as const,
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      {/* Hero */}
      <section className="products-hero" aria-labelledby="products-heading">
        <div className="products-hero-bg" aria-hidden="true">
          <div className="products-hero-circle products-hero-circle--1" />
          <div className="products-hero-circle products-hero-circle--2" />
        </div>
        <div className="container products-hero-container">
          <div className="products-hero-badge">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Built by a 12+ year classroom educator</span>
          </div>

          <h1 id="products-heading" className="products-hero-title">
            Research-Based Tools
            <br />
            <span className="products-hero-accent">
              for Educators, Schools &amp; Families
            </span>
          </h1>

          <p className="products-hero-desc">
            Digital solutions designed for how modern classrooms actually work —
            built by a reading interventionist, curriculum designer, and EdTech
            developer.
          </p>

          <div className="products-hero-trust">
            <div className="products-hero-trust-item">
              <span className="products-hero-trust-number">100+</span>
              <span className="products-hero-trust-label">Resources Built</span>
            </div>
            <div className="products-hero-trust-divider" />
            <div className="products-hero-trust-item">
              <span className="products-hero-trust-number">K–8</span>
              <span className="products-hero-trust-label">Grade Coverage</span>
            </div>
            <div className="products-hero-trust-divider" />
            <div className="products-hero-trust-item">
              <span className="products-hero-trust-number">SoR</span>
              <span className="products-hero-trust-label">Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section
        className="products-grid-section"
        aria-labelledby="products-grid-heading"
      >
        <div className="container">
          <div className="products-grid-header">
            <p className="products-grid-label">Our Products</p>
            <h2 id="products-grid-heading" className="products-grid-title">
              Everything You Need, Nothing You Don&apos;t
            </h2>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="products-card"
              >
                <div
                  className={`products-card-icon products-card-icon--${product.color}`}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={product.icon}
                    />
                  </svg>
                </div>
                <div className="products-card-header">
                  <h3 className="products-card-title">{product.title}</h3>
                  {product.badge && (
                    <span className="products-card-badge">{product.badge}</span>
                  )}
                </div>
                <p className="products-card-desc">{product.description}</p>
                <span className="products-card-link">
                  Learn More
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta-section" aria-labelledby="products-cta-heading">
        <div className="container">
          <div className="products-cta-inner">
            <h2 id="products-cta-heading" className="products-cta-title">
              Need Customized Support?
            </h2>
            <p className="products-cta-desc">
              Beyond products, I offer strategic consulting for schools,
              districts, and educators — from literacy systems to assessment
              alignment.
            </p>
            <Link href="/consulting" className="products-cta-btn">
              Explore Consulting
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
