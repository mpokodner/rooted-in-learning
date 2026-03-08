import type { Metadata } from "next";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import "./edtech-tools.css";

export const metadata: Metadata = {
  title: "EdTech Tools | The Rooted Learner",
  description:
    "AI-powered tools for educators — built by a teacher who codes. Standards-based assessment, Science of Reading chatbot, text leveling, and more.",
  alternates: {
    canonical: "/edtech-tools",
  },
};

const assessAlignFeatures = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Standards-Based Assessment",
    desc: "Every question and data point aligns to academic standards, so teachers know exactly what skills students have mastered.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Question Generation",
    desc: "Generate standards-aligned questions from reading passages using AI — saving hours of prep time.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Data Analytics",
    desc: "A live dashboard gives teachers a clear picture of student performance across standards and classrooms.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Automatic Intervention Grouping",
    desc: "The flagship feature. Auto-generates WIN and FLEX groups from assessment data — no more hours sorting spreadsheets.",
    flagship: true,
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Cross-Subject Performance Tracking",
    desc: "Compare student performance across ELA and math in one place — ideal for team structures and cross-curricular collaboration.",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "FERPA-Compliant & Secure",
    desc: "Row-level security, AES-256 encryption, and full access logging. Student data is protected at the infrastructure level.",
  },
];

const techStack = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Supabase", icon: "supabase" },
  { name: "AI / RAG", icon: "ai" },
];

export default function EdTechToolsPage() {
  return (
    <div className="et-page">
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="et-hero">
        <div className="et-hero-bg" aria-hidden="true" />
        <div className="et-container et-hero-inner">
          <div className="et-hero-copy">
            <p className="et-hero-eyebrow">Built by a Teacher Who Codes</p>
            <h1 className="et-hero-title">
              AI-Powered Tools for Modern Educators
            </h1>
            <p className="et-hero-desc">
              Practical, research-backed software designed in the classroom
              &mdash; not a boardroom. Every tool solves a real problem teachers
              face daily.
            </p>
            <div className="et-hero-actions">
              <a href="#assessalign" className="et-btn et-btn--primary">
                Explore AssessAlign
              </a>
              <Link href="/work-with-me" className="et-btn et-btn--outline">
                Work With Me
              </Link>
            </div>
          </div>

          <div className="et-hero-visual" aria-hidden="true">
            <div className="et-mockup-frame">
              <div className="et-mockup-toolbar">
                <span className="et-mockup-dot et-mockup-dot--red" />
                <span className="et-mockup-dot et-mockup-dot--yellow" />
                <span className="et-mockup-dot et-mockup-dot--green" />
              </div>
              <div className="et-mockup-body">
                <div className="et-mockup-sidebar">
                  <div className="et-mockup-nav-item et-mockup-nav-item--active" />
                  <div className="et-mockup-nav-item" />
                  <div className="et-mockup-nav-item" />
                  <div className="et-mockup-nav-item" />
                </div>
                <div className="et-mockup-content">
                  <div className="et-mockup-line et-mockup-line--heading" />
                  <div className="et-mockup-line et-mockup-line--full" />
                  <div className="et-mockup-line et-mockup-line--80" />
                  <div className="et-mockup-chart-row">
                    <div className="et-mockup-bar" style={{ height: "60%" }} />
                    <div className="et-mockup-bar" style={{ height: "85%" }} />
                    <div className="et-mockup-bar" style={{ height: "45%" }} />
                    <div className="et-mockup-bar" style={{ height: "70%" }} />
                    <div className="et-mockup-bar" style={{ height: "90%" }} />
                  </div>
                  <div className="et-mockup-line et-mockup-line--60" />
                  <div className="et-mockup-line et-mockup-line--full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED — ASSESSALIGN
      ═══════════════════════════════════════════ */}
      <section id="assessalign" className="et-featured-section">
        <div className="et-container">
          <div className="et-featured-header">
            <span className="et-badge et-badge--live">
              <span className="et-badge-dot" />
              Live Beta
            </span>
            <h2 className="et-featured-title">AssessAlign</h2>
            <p className="et-featured-tagline">
              Standards-Based Assessment Built for How Schools Actually Work
            </p>
            <p className="et-featured-desc">
              Designed by a classroom teacher and reading interventionist with
              12+ years of experience, AssessAlign reflects real MTSS workflows.
              It connects assessment creation, data analytics, and intervention
              grouping into one platform &mdash; so teachers spend less time on
              logistics and more time teaching.
            </p>
          </div>

          <div className="et-feature-grid">
            {assessAlignFeatures.map((feat, i) => (
              <div
                key={i}
                className={`et-feature-card${feat.flagship ? " et-feature-card--flagship" : ""}`}
              >
                {feat.flagship && (
                  <span className="et-flagship-label">Flagship Feature</span>
                )}
                <div className="et-feature-icon">{feat.icon}</div>
                <h3 className="et-feature-card-title">{feat.title}</h3>
                <p className="et-feature-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="et-featured-callout">
            <p className="et-featured-callout-text">
              Scalable. Personalized. Affordable. Real instructional support.
            </p>
          </div>

          <div className="et-featured-form-wrapper">
            <EarlyAccessForm
              heading="Get Early Access to AssessAlign"
              description="Be the first to try AssessAlign. Join the waitlist and we'll notify you when beta spots open up."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TOOL CARD — SCIENCE OF READING RAG
      ═══════════════════════════════════════════ */}
      <section className="et-tool-card-section">
        <div className="et-container">
          <div className="et-tool-card">
            <div className="et-tool-card-header">
              <span className="et-badge et-badge--soon">Coming Soon</span>
              <h2 className="et-tool-card-title">Science of Reading RAG</h2>
            </div>
            <p className="et-tool-card-desc">
              A chatbot grounded in Science of Reading research. Ask questions,
              get evidence-based answers with source citations.
            </p>
            <ul className="et-tool-features-list">
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Research-grounded responses
              </li>
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Source citations
              </li>
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Teacher-friendly language
              </li>
            </ul>
            <div className="et-tool-card-cta">
              <Link href="/#newsletter" className="et-btn et-btn--primary">
                Get Notified When This Launches
              </Link>
            </div>
            <p className="et-tool-card-callout">
              Need a custom tool for your school or district?{" "}
              <Link href="/work-with-me">Let&apos;s talk.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TOOL CARD — TEXT LEVELER
      ═══════════════════════════════════════════ */}
      <section className="et-tool-card-section et-tool-card-section--alt">
        <div className="et-container">
          <div className="et-tool-card">
            <div className="et-tool-card-header">
              <span className="et-badge et-badge--soon">Coming Soon</span>
              <h2 className="et-tool-card-title">Text Leveler</h2>
            </div>
            <p className="et-tool-card-desc">
              Instant readability analysis for any text. Get Lexile estimates,
              grade-level recommendations, and vocabulary complexity scores.
            </p>
            <ul className="et-tool-features-list">
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Lexile estimation
              </li>
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Grade-level matching
              </li>
              <li>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Vocabulary analysis
              </li>
            </ul>
            <div className="et-tool-card-cta">
              <Link href="/#newsletter" className="et-btn et-btn--primary">
                Get Notified When This Launches
              </Link>
            </div>
            <p className="et-tool-card-callout">
              Need a custom tool for your school or district?{" "}
              <Link href="/work-with-me">Let&apos;s talk.</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW I BUILD
      ═══════════════════════════════════════════ */}
      <section className="et-how-section">
        <div className="et-container">
          <div className="et-how-inner">
            <p className="et-section-label">How I Build</p>
            <h2 className="et-how-title">
              Teacher Expertise Meets Modern Development
            </h2>
            <p className="et-how-desc">
              Every tool starts with a real classroom problem. I prototype
              quickly, test with real educators, and iterate based on feedback
              &mdash; not assumptions. The stack is modern, but the priorities
              are grounded: does it actually save a teacher time? If not, it
              doesn&apos;t ship.
            </p>
            <p className="et-how-desc">
              If you&apos;re a school, district, or EdTech company looking for
              someone who can bridge the gap between pedagogy and production
              code, these tools are my proof of concept.
            </p>
            <div className="et-tech-row">
              {techStack.map((tech, i) => (
                <div key={i} className="et-tech-item">
                  <div className={`et-tech-icon et-tech-icon--${tech.icon}`}>
                    {tech.icon === "vue" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20L2 4h4l6 10 6-10h4L12 20z" />
                      </svg>
                    )}
                    {tech.icon === "react" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx="12" cy="12" r="2.5" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                      </svg>
                    )}
                    {tech.icon === "next" && (
                      <span className="et-tech-letter">N</span>
                    )}
                    {tech.icon === "supabase" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l-1 10h7L11 21l1-10H5L13 3z" />
                      </svg>
                    )}
                    {tech.icon === "ai" && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    )}
                  </div>
                  <span className="et-tech-label">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
