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
  openGraph: {
    title: "Products & Tools | The Rooted Learner",
    description:
      "Research-based literacy tools, standards-aligned lessons, and assessment solutions built by a 12+ year veteran educator.",
    type: "website",
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
    price: "Free during beta",
    featured: true,
    includes: [
      "AI-powered question generation",
      "Standards alignment mapping",
      "Real-time student analytics",
    ],
    bestFor: "Schools & districts",
    whatYouGet: "AI assessment, analytics & intervention grouping",
    status: "In Development",
  },
  {
    title: "Lessons",
    description:
      "Standards-aligned, classroom-tested lessons and curriculum materials for K-8 educators and homeschool families. Just download and teach.",
    href: "/products/lessons",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    badge: null,
    color: "earth" as const,
    price: "Starting at $4.99",
    featured: false,
    includes: [
      "Standards-aligned K-8 curriculum",
      "Differentiation tiers included",
      "Printable & digital formats",
    ],
    bestFor: "Classroom educators & homeschool",
    whatYouGet: "K-8 lessons & curriculum materials",
    status: "Available",
  },
  {
    title: "Teacher Tools",
    description:
      "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
    href: "/products/teacher-tools",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    badge: null,
    color: "mist" as const,
    price: "Free tutorials",
    featured: false,
    includes: [
      "Step-by-step video walkthroughs",
      "Tool comparison guides",
      "Implementation checklists",
    ],
    bestFor: "Educators learning tech",
    whatYouGet: "Video tutorials & implementation guides",
    status: "Available",
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page">
      {/* Hero with embedded product cards */}
      <section className="products-hero" aria-labelledby="products-heading">
        <div className="products-hero-bg" aria-hidden="true">
          <div className="products-hero-circle products-hero-circle--1" />
          <div className="products-hero-circle products-hero-circle--2" />
        </div>

        <div className="container products-hero-container">
          <p className="products-hero-label">Products &amp; Tools</p>
          <h1 id="products-heading" className="products-hero-title">
            Choose Your Path
          </h1>
          <p className="products-hero-desc">
            Research-based tools built by a 12+ year classroom educator.
            Pick the one that fits your needs.
          </p>
        </div>

        {/* Product cards inside the hero */}
        <div className="container products-hero-cards-wrap">
          <div className="products-hero-cards">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="products-card"
                style={
                  product.featured
                    ? {
                        gridColumn: "1 / -1",
                        background:
                          "linear-gradient(135deg, rgba(92, 107, 77, 0.08), rgba(92, 107, 77, 0.02))",
                      }
                    : undefined
                }
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
                  <h2 className="products-card-title">{product.title}</h2>
                  {product.featured && (
                    <span className="products-card-badge products-card-badge--featured">
                      Our Differentiator
                    </span>
                  )}
                  {product.badge && (
                    <span className="products-card-badge">{product.badge}</span>
                  )}
                  <span className="products-card-price">{product.price}</span>
                </div>
                <p className="products-card-desc">{product.description}</p>
                <ul className="products-card-includes">
                  {product.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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

      {/* Comparison section */}
      <section
        className="products-comparison-section"
        aria-labelledby="products-comparison-heading"
      >
        <div className="container">
          <h2
            id="products-comparison-heading"
            className="products-comparison-title"
          >
            Not Sure Which Is Right for You?
          </h2>
          <div className="products-comparison-cards">
            {products.map((p) => (
              <div key={p.title} className="products-comparison-card">
                <h3 className="products-comparison-card-title">{p.title}</h3>
                <dl className="products-comparison-card-list">
                  <div>
                    <dt>Best for</dt>
                    <dd>{p.bestFor}</dd>
                  </div>
                  <div>
                    <dt>What you get</dt>
                    <dd>{p.whatYouGet}</dd>
                  </div>
                  <div>
                    <dt>Pricing</dt>
                    <dd>{p.price}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{p.status}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <div className="products-comparison-table-wrap">
            <table className="products-comparison-table">
              <thead>
                <tr>
                  <th scope="col" className="products-comparison-th products-comparison-th--row-header">
                    &nbsp;
                  </th>
                  {products.map((p) => (
                    <th
                      key={p.title}
                      scope="col"
                      className="products-comparison-th"
                    >
                      {p.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="products-comparison-th products-comparison-th--row-header">
                    Best for
                  </th>
                  {products.map((p) => (
                    <td key={p.title} className="products-comparison-td" data-label={p.title}>
                      {p.bestFor}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="products-comparison-th products-comparison-th--row-header">
                    What you get
                  </th>
                  {products.map((p) => (
                    <td key={p.title} className="products-comparison-td" data-label={p.title}>
                      {p.whatYouGet}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="products-comparison-th products-comparison-th--row-header">
                    Pricing
                  </th>
                  {products.map((p) => (
                    <td key={p.title} className="products-comparison-td" data-label={p.title}>
                      {p.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className="products-comparison-th products-comparison-th--row-header">
                    Status
                  </th>
                  {products.map((p) => (
                    <td key={p.title} className="products-comparison-td" data-label={p.title}>
                      {p.status}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
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
            <Link href="/services/consulting" className="products-cta-btn">
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
