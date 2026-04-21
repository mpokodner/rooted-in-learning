import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import assessAlignImg from "../../about/projects/images/assessalignpng.png";
import "./assessalign.css";

export const metadata: Metadata = {
  title: "AssessAlign — Standards-Based Reading Assessment Platform",
  description:
    "A standards-aligned reading assessment platform for grades 3–8. Real-time analytics, auto-generated skill groups, and teacher-driven assessment creation. Built by educators, for educators.",
  keywords: [
    "reading assessment",
    "standards-based assessment",
    "formative assessment",
    "reading intervention",
    "Common Core ELA",
    "progress monitoring",
    "edtech",
    "teacher tools",
  ],
  alternates: { canonical: "/tools/assessalign" },
  openGraph: {
    title: "AssessAlign — Standards-Based Reading Assessment",
    description:
      "Real-time analytics, auto-generated skill groups, and formative assessments designed for the 15–20 minute instructional window.",
    type: "website",
  },
};

const problems = [
  {
    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    problem: "Passages that are too long",
    detail:
      "Are scores reflecting ability, or are students giving up because the demand is too high?",
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    problem: "Questions disconnected from standards",
    detail:
      "Three snapshots a year isn't a feedback loop — it's a highlight reel.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    problem: "Data without direction",
    detail:
      "Scores confirm something happened but offer no direction for what to do next.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    problem: "Too much analysis overhead",
    detail:
      "Expecting educators to analyze data, form groups, and plan sessions — on top of daily teaching.",
  },
];

const features = [
  {
    emoji: "📖",
    title: "Short, Standards-Aligned Passages",
    desc: "Designed for the 15–20 minute instructional window, not a testing marathon.",
  },
  {
    emoji: "🎯",
    title: "Questions Tied to Assessed Standards",
    desc: "Data maps back to your curriculum. Assessing skills, not just knowledge.",
  },
  {
    emoji: "📊",
    title: "Actionable Analytics",
    desc: "Not just scores — insight into which standards students are struggling with.",
  },
  {
    emoji: "👩‍🏫",
    title: "Teacher-Driven Assessment Creation",
    desc: "Choose the standards you're teaching, build the assessment, and receive timely, targeted insights.",
  },
  {
    emoji: "👥",
    title: "Auto-Generated Skill Groups",
    desc: "Standards-based performance groups ready to inform small-group instruction the same day.",
  },
  {
    emoji: "🔄",
    title: "Formative, Not Summative",
    desc: "Built for the feedback loop inside your instruction, not just the end-of-unit moment.",
  },
];

const techStack = [
  { name: "React 18 + Vite", category: "Frontend" },
  { name: "Node.js + GraphQL", category: "Backend" },
  { name: "Supabase (Auth + RLS)", category: "Database" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "Recharts", category: "Analytics" },
  { name: "Vercel", category: "Deployment" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AssessAlign",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "Standards-aligned reading assessment platform for grades 3–8 with real-time analytics, auto-generated skill groups, and teacher-driven assessment creation.",
  creator: {
    "@type": "Organization",
    name: "The Rooted Learner",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Beta access — currently free for early adopters",
  },
};

export default function AssessAlignPage() {
  return (
    <div className="aa-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero ─── */}
      <section className="aa-hero" aria-labelledby="aa-heading">
        <div className="aa-hero-bg" aria-hidden="true">
          <div className="aa-hero-orb aa-hero-orb--1" />
          <div className="aa-hero-orb aa-hero-orb--2" />
        </div>
        <div className="container aa-hero-inner">
          <div className="aa-hero-content">
            <div className="aa-hero-badges">
              <span className="aa-badge aa-badge--status">
                <span className="aa-badge-dot" />
                Prototype / Pilot Phase
              </span>
              <span className="aa-badge aa-badge--grade">Grades 3–8</span>
            </div>
            <h1 id="aa-heading" className="aa-hero-title">
              AssessAlign
            </h1>
            <p className="aa-hero-subtitle">
              Standards-Based Reading Assessment Platform
            </p>
            <p className="aa-hero-desc">
              A low-maintenance, high-impact progress-monitoring system that
              delivers actionable insights for educators and surfaces student
              groups by standards mastery — without the extra analysis overhead.
            </p>
            <div className="aa-hero-actions">
              <a href="#waitlist" className="aa-cta aa-cta--primary">
                Join the Waitlist
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
              </a>
            </div>
          </div>
          <div className="aa-hero-image">
            <Image
              src={assessAlignImg}
              alt="AssessAlign Dashboard showing standards-based reading assessment with real-time analytics, class management, and house leaderboards"
              className="aa-dashboard-img"
              placeholder="blur"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ─── Problem Statement ─── */}
      <section className="aa-problem section" aria-labelledby="aa-problem-heading">
        <div className="container">
          <div className="aa-section-header">
            <p className="aa-section-label">The Problem</p>
            <h2 id="aa-problem-heading" className="aa-section-title">
              What Teachers Are Really Dealing With
            </h2>
          </div>
          <div className="aa-problem-grid">
            {problems.map((p) => (
              <div key={p.problem} className="aa-problem-card">
                <div className="aa-problem-icon">
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
                      d={p.icon}
                    />
                  </svg>
                </div>
                <h3 className="aa-problem-title">{p.problem}</h3>
                <p className="aa-problem-desc">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section
        className="aa-features section section--alt"
        aria-labelledby="aa-features-heading"
      >
        <div className="container">
          <div className="aa-section-header">
            <p className="aa-section-label">The Solution</p>
            <h2 id="aa-features-heading" className="aa-section-title">
              What AssessAlign Does Differently
            </h2>
            <p className="aa-section-desc">
              Because feedback only works when it&apos;s both actionable and
              timely.
            </p>
          </div>
          <div className="aa-features-grid">
            {features.map((f) => (
              <div key={f.title} className="aa-feature-card">
                <span className="aa-feature-emoji" aria-hidden="true">
                  {f.emoji}
                </span>
                <h3 className="aa-feature-title">{f.title}</h3>
                <p className="aa-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="aa-how section" aria-labelledby="aa-how-heading">
        <div className="container">
          <div className="aa-section-header">
            <p className="aa-section-label">How It Works</p>
            <h2 id="aa-how-heading" className="aa-section-title">
              From Standards to Small Groups in Minutes
            </h2>
          </div>
          <div className="aa-steps">
            {[
              {
                step: 1,
                title: "Choose Your Standards",
                desc: "Select the standards you're teaching that week from the built-in Common Core ELA library.",
              },
              {
                step: 2,
                title: "Build the Assessment",
                desc: "Create a targeted assessment with standards-aligned passages and questions — designed for 15–20 minutes.",
              },
              {
                step: 3,
                title: "Students Take the Assessment",
                desc: "Students complete the assessment in-platform with gamified team houses for motivation.",
              },
              {
                step: 4,
                title: "Get Actionable Insights",
                desc: "View real-time analytics by standard, auto-generated skill groups, and targeted instructional recommendations.",
              },
            ].map((s) => (
              <div key={s.step} className="aa-step">
                <div className="aa-step-number">{s.step}</div>
                <div className="aa-step-content">
                  <h3 className="aa-step-title">{s.title}</h3>
                  <p className="aa-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack + Waitlist ─── */}
      <section
        id="waitlist"
        className="aa-bottom section section--alt"
        aria-labelledby="aa-waitlist-heading"
      >
        <div className="container">
          <div className="aa-bottom-split">
            <div className="aa-bottom-left">
              <p className="aa-section-label">Built With</p>
              <h2 className="aa-section-title" style={{ marginBottom: "1rem" }}>
                Modern Stack, Educator Soul
              </h2>
              <p className="aa-section-desc" style={{ marginBottom: "2rem" }}>
                Every technical decision is grounded in a classroom reality.
                Built for speed, security, and scale.
              </p>
              <div className="aa-tech-grid">
                {techStack.map((t) => (
                  <div key={t.name} className="aa-tech-item">
                    <span className="aa-tech-category">{t.category}</span>
                    <span className="aa-tech-name">{t.name}</span>
                  </div>
                ))}
              </div>
              <div className="aa-built-by">
                <p>
                  Built by{" "}
                  <Link href="/about" className="aa-inline-link">
                    Michelle Pokodner
                  </Link>{" "}
                  and{" "}
                  <a
                    href="https://www.linkedin.com/in/michelle-pokodner-edtech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aa-inline-link"
                  >
                    Chris Carlozzi
                  </a>{" "}
                  — combining 12+ years of classroom expertise with full-stack
                  engineering.
                </p>
              </div>
            </div>
            <div className="aa-bottom-right">
              <EarlyAccessForm
                heading="Get Early Access"
                description="We're looking for educators, curriculum directors, and instructional coaches who want early access and are willing to share feedback that shapes the product."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="aa-cta-banner">
        <div className="container aa-cta-banner-inner">
          <h2 className="aa-cta-banner-title">
            What happens when teachers get tired of waiting for someone else to
            build the right tool?
          </h2>
          <p className="aa-cta-banner-subtitle">We build it ourselves.</p>
          <div className="aa-cta-banner-actions">
            <a href="#waitlist" className="aa-cta aa-cta--primary aa-cta--light">
              Join the Waitlist
            </a>
            <Link href="/learn/blog" className="aa-cta aa-cta--ghost">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
