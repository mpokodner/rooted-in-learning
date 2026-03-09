import type { Metadata } from "next";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import "./edtech-tools.css";

export const metadata: Metadata = {
  title: "Tools | The Rooted Learner",
  description:
    "AI-powered tools for educators — built by a teacher who codes. Standards-based assessment, curriculum planning, and more.",
  alternates: {
    canonical: "/tools",
  },
};

const assessAlignFeatures = [
  "AI-powered feedback loops",
  "Standards mapping engine",
  "Real-time analytics dashboard",
  "LMS Integration (Canvas, Blackboard, Moodle)",
];

const assessAlignTech = [
  "React + TypeScript",
  "Node.js",
  "OpenAI API",
  "PostgreSQL",
  "AWS",
  "LTI 1.3 Integration",
];

const techStack = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Supabase", icon: "supabase" },
  { name: "AI / RAG", icon: "ai" },
];

export default function ToolsPage() {
  return (
    <div className="tools-page">
      {/* ─── Hero ─── */}
      <section className="tools-hero" aria-labelledby="tools-heading">
        <div className="container">
          <p className="tools-hero-eyebrow">Built by a Teacher Who Codes</p>
          <h1 id="tools-heading" className="tools-hero-title">
            Current Projects
          </h1>
          <p className="tools-hero-desc">
            Practical, research-backed software designed in the classroom — not
            a boardroom. Bridging the gap between pedagogy and production code
            to solve real problems teachers face daily.
          </p>
        </div>
      </section>

      {/* ─── AssessAlign Featured Card ─── */}
      <section
        id="assessalign"
        className="tools-featured section"
        aria-labelledby="assessalign-heading"
      >
        <div className="container">
          <div className="tools-aa-card">
            <div className="tools-aa-top">
              <div className="tools-aa-info">
                <div className="tools-aa-badges">
                  <span className="tools-badge tools-badge--earth">
                    EdTech Development
                  </span>
                  <span className="tools-badge tools-badge--live">
                    <span className="tools-badge-dot" />
                    In Progress
                  </span>
                  <span className="tools-badge tools-badge--terracotta">
                    Featured
                  </span>
                </div>
                <h2 id="assessalign-heading" className="tools-aa-title">
                  AssessAlign — Intelligent Assessment Orchestration
                </h2>
                <p className="tools-aa-desc">
                  A full-stack EdTech platform built to solve inconsistent
                  assessment-to-standards alignment. Uses AI-driven
                  standardization and real-time analytics to help educators make
                  data-driven instructional decisions.
                </p>
                <div className="tools-aa-actions">
                  <a href="#early-access" className="tools-btn tools-btn--primary">
                    Explore AssessAlign
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
                  <Link href="/services" className="tools-aa-link">
                    Learn about my consulting practice
                  </Link>
                </div>
              </div>

              <div className="tools-aa-mockup" aria-hidden="true">
                <div className="tools-mockup-frame">
                  <div className="tools-mockup-toolbar">
                    <span className="tools-mockup-dot tools-mockup-dot--red" />
                    <span className="tools-mockup-dot tools-mockup-dot--yellow" />
                    <span className="tools-mockup-dot tools-mockup-dot--green" />
                    <span className="tools-mockup-url">AssessAlign Dashboard Preview</span>
                  </div>
                  <div className="tools-mockup-body">
                    <div className="tools-mockup-sidebar">
                      <div className="tools-mockup-nav tools-mockup-nav--active" />
                      <div className="tools-mockup-nav" />
                      <div className="tools-mockup-nav" />
                    </div>
                    <div className="tools-mockup-content">
                      <div className="tools-mockup-line tools-mockup-line--heading" />
                      <div className="tools-mockup-line tools-mockup-line--full" />
                      <div className="tools-mockup-line tools-mockup-line--80" />
                      <div className="tools-mockup-chart">
                        <div className="tools-mockup-bar" style={{ height: "55%" }} />
                        <div className="tools-mockup-bar" style={{ height: "80%" }} />
                        <div className="tools-mockup-bar" style={{ height: "40%" }} />
                        <div className="tools-mockup-bar" style={{ height: "65%" }} />
                        <div className="tools-mockup-bar" style={{ height: "90%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tools-aa-bottom">
              <div className="tools-aa-col">
                <h3 className="tools-aa-col-heading">Key Features</h3>
                <ul className="tools-aa-list">
                  {assessAlignFeatures.map((f) => (
                    <li key={f}>
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tools-aa-col">
                <h3 className="tools-aa-col-heading">
                  Technologies &amp; Methods
                </h3>
                <div className="tools-aa-tech-tags">
                  {assessAlignTech.map((t) => (
                    <span key={t} className="tools-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Tools (Under Construction) ─── */}
      <section className="tools-other section" aria-labelledby="other-heading">
        <div className="container">
          <h2 id="other-heading" className="sr-only">
            Other Tools
          </h2>
          <div className="tools-other-grid">
            {/* Microlearning Lesson System */}
            <div className="tools-other-card">
              <div className="tools-other-card-top">
                <div className="tools-other-badges">
                  <span className="tools-badge tools-badge--earth">
                    Instructional Design
                  </span>
                  <span className="tools-badge tools-badge--construction">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Under Construction
                  </span>
                </div>
                <h3 className="tools-other-title">
                  Microlearning Lesson System — Standards-Aligned
                </h3>
                <p className="tools-other-desc">
                  A complete library of ready-to-teach lessons designed using
                  Science of Reading principles and UDL.
                </p>
                <Link href="/shop" className="tools-btn tools-btn--primary tools-btn--sm">
                  Browse Lessons
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
              <div className="tools-other-card-bottom">
                <h4 className="tools-other-col-heading">Core Focus</h4>
                <ul className="tools-other-list">
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Common Core Aligned
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Formative Checkpoints
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Differentiation Tiers
                  </li>
                </ul>
                <div className="tools-other-tags">
                  <span className="tools-method-tag">Science of Reading</span>
                  <span className="tools-method-tag">UDL</span>
                  <span className="tools-method-tag">Curriculum Design</span>
                </div>
              </div>
            </div>

            {/* Dynamic Curriculum Planner */}
            <div className="tools-other-card">
              <div className="tools-other-card-top">
                <div className="tools-other-badges">
                  <span className="tools-badge tools-badge--earth">
                    Teacher Productivity
                  </span>
                  <span className="tools-badge tools-badge--construction">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Under Construction
                  </span>
                </div>
                <h3 className="tools-other-title">
                  Dynamic Curriculum Planner — Smart Scheduling
                </h3>
                <p className="tools-other-desc">
                  Visualizing the school year with drag-and-drop units and
                  automatic pacing adjustments for holidays and testing.
                </p>
                <span className="tools-btn tools-btn--muted tools-btn--sm">
                  Coming Soon
                </span>
              </div>
              <div className="tools-other-card-bottom">
                <h4 className="tools-other-col-heading">Planned Features</h4>
                <ul className="tools-other-list">
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Drag-and-drop pacing
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Collaborative planning
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    State standard auto-tagging
                  </li>
                </ul>
                <div className="tools-other-tags">
                  <span className="tools-method-tag">Next.js</span>
                  <span className="tools-method-tag">Supabase</span>
                  <span className="tools-method-tag">Drag-n-Drop API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How I Build ─── */}
      <section className="tools-how section" aria-labelledby="tools-how-heading">
        <div className="container">
          <div className="tools-how-inner">
            <p className="tools-section-label">How I Build</p>
            <h2 id="tools-how-heading" className="tools-how-title">
              Teacher Expertise Meets Modern Development
            </h2>
            <p className="tools-how-desc">
              Every tool starts with a real classroom problem. I prototype
              quickly, test with real educators, and iterate based on feedback
              — not assumptions. The stack is modern, but the priorities are
              grounded: does it actually save a teacher time? If not, it
              doesn&apos;t ship.
            </p>
            <p className="tools-how-desc">
              If you&apos;re a school, district, or EdTech company looking for
              someone who can bridge the gap between pedagogy and production
              code, these tools are my proof of concept.
            </p>
            <div className="tools-tech-row">
              {techStack.map((tech) => (
                <div key={tech.name} className="tools-tech-item">
                  <div className={`tools-tech-icon tools-tech-icon--${tech.icon}`}>
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
                      <span className="tools-tech-letter">N</span>
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
                  <span className="tools-tech-label">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Early Access ─── */}
      <section id="early-access" className="tools-early section">
        <div className="container">
          <div className="tools-early-inner">
            <EarlyAccessForm
              heading="Get Early Access to AssessAlign"
              description="Be the first to try AssessAlign. Join the waitlist and we'll notify you when beta spots open up."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
