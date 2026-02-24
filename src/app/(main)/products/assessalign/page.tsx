import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dashboardImg from "../../about/projects/images/assessalignpng.png";
import "./assessalign.css";

export const metadata: Metadata = {
  title: "AssessAlign | The Rooted Learner",
  description:
    "AssessAlign — Standards-based assessment, AI-powered question generation, real-time analytics, and automatic intervention grouping built for how schools actually work.",
  keywords: [
    "assessment alignment",
    "standards mapping",
    "educational assessment",
    "AI question generation",
    "intervention grouping",
    "MTSS",
    "FLEX groups",
    "WIN groups",
    "data-driven instruction",
  ],
  alternates: {
    canonical: "/products/assessalign",
  },
};

const techStack = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Supabase", icon: "supabase" },
  { name: "OpenAI", icon: "ai" },
];

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Standards-Based Assessment at Its Core",
    desc: "Every assessment, question, and data point aligns to academic standards — so teachers always know exactly what skills students have and haven't mastered, not just how they scored.",
    accent: "earth",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-Powered Question Generation",
    desc: "Generate assessment questions directly from reading passages using OpenAI. Questions align automatically to standards, support multiple choice and constructed response formats, and include difficulty level control — saving hours of prep time.",
    accent: "blue",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Data Analytics",
    desc: "A live dashboard gives teachers and administrators a clear picture of student performance across standards, subjects, and classrooms. Data is triangulated across multiple sources so educators can spot discrepancies and make smarter decisions.",
    accent: "earth",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Automatic Intervention Grouping",
    desc: "The flagship differentiator. AssessAlign auto-generates WIN and FLEX groups based on assessment results — no more spending hours manually sorting spreadsheets. Teachers get ready-to-use groupings backed by real data.",
    accent: "blue",
    flagship: true,
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Cross-Subject Performance Tracking",
    desc: "View and compare student performance across ELA and math in one place, including house and grade-level views — ideal for middle school team structures and cross-curricular collaboration.",
    accent: "earth",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "FERPA-Compliant & Secure",
    desc: "Built with row-level security, AES-256 encryption, and full access logging. Student data is protected at the infrastructure level, giving districts and families peace of mind.",
    accent: "blue",
  },
];

const roadmapPhases = [
  {
    phase: "01",
    title: "MVP Core",
    desc: "Core assessment engine, basic user auth, and initial database schema design.",
    status: "Complete",
    statusClass: "aa-phase-complete",
  },
  {
    phase: "02",
    title: "Beta Testing",
    desc: "Onboarding first 50 pilot users, refining UI/UX, and optimizing AI latency.",
    status: "In Progress",
    statusClass: "aa-phase-inprogress",
  },
  {
    phase: "03",
    title: "Scale & API",
    desc: "Public API release, multi-tenant architecture support, and payment integration.",
    status: "Upcoming",
    statusClass: "aa-phase-upcoming",
  },
  {
    phase: "04",
    title: "Mobile Native",
    desc: "Dedicated iOS and Android applications for on-the-go grading and review.",
    status: "Planned",
    statusClass: "aa-phase-planned",
  },
];

export default function AssessAlignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AssessAlign",
    "applicationCategory": "EducationalApplication",
    "description": "Standards-based assessment platform with AI-powered question generation, real-time analytics, and automatic intervention grouping.",
    "url": "https://www.therootedlearner.com/products/assessalign",
    "author": {
      "@type": "Organization",
      "name": "The Rooted Learner"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="aa-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="aa-hero">
        <div className="aa-container">
          <div className="aa-hero-inner">
            <span className="aa-badge">
              <span className="aa-badge-dot" />
              In Development &mdash; Early Access Coming Soon
            </span>
            <h1 className="aa-hero-title">AssessAlign</h1>
            <p className="aa-hero-subtitle">
              Standards-Based Assessment Built for How Schools Actually Work
            </p>
            <p className="aa-hero-desc">
              Designed by a classroom teacher and reading interventionist with
              12+ years of experience, AssessAlign reflects real MTSS workflows
              &mdash; not a tech company&apos;s idea of what schools need.
            </p>
            <div className="aa-hero-actions">
              <a href="#features" className="aa-btn-features">
                Explore Features
              </a>
              <Link href="/contact" className="aa-btn-back">
                Request Early Access
              </Link>
            </div>
          </div>

          <div className="aa-hero-mockup">
            <div className="aa-mockup-frame">
              <div className="aa-mockup-toolbar">
                <span className="aa-mockup-dot aa-mockup-dot--red" />
                <span className="aa-mockup-dot aa-mockup-dot--yellow" />
                <span className="aa-mockup-dot aa-mockup-dot--green" />
              </div>
              <Image
                src={dashboardImg}
                alt="AssessAlign teacher dashboard showing assessment creation, class management, and student performance views"
                className="aa-mockup-img"
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TECH STACK
      ═══════════════════════════════════════════ */}
      <section className="aa-tech-section">
        <div className="aa-container">
          <p className="aa-tech-heading">BUILT WITH A MODERN STACK</p>
          <div className="aa-tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="aa-tech-item">
                <div className={`aa-tech-icon aa-tech-icon--${tech.icon}`}>
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
                    <span className="aa-tech-icon-text aa-tech-icon-text--next">N</span>
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
                <span className="aa-tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM
      ═══════════════════════════════════════════ */}
      <section className="aa-problem-section">
        <div className="aa-container">
          <div className="aa-problem-inner">
            <p className="aa-section-label">The Problem</p>
            <h2 className="aa-section-title">
              Assessments Shouldn&apos;t Create More Work
            </h2>
            <div className="aa-problem-grid">
              <div className="aa-problem-item">
                <span className="aa-problem-x">&#10005;</span>
                <p>Hours spent manually aligning questions to standards and building rubrics from scratch.</p>
              </div>
              <div className="aa-problem-item">
                <span className="aa-problem-x">&#10005;</span>
                <p>Spreadsheet-based intervention grouping that takes an entire planning period to sort.</p>
              </div>
              <div className="aa-problem-item">
                <span className="aa-problem-x">&#10005;</span>
                <p>Data scattered across platforms with no unified view of student mastery by standard.</p>
              </div>
              <div className="aa-problem-item">
                <span className="aa-problem-x">&#10005;</span>
                <p>Generic EdTech tools built by people who have never managed a classroom or MTSS cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES
      ═══════════════════════════════════════════ */}
      <section id="features" className="aa-features-section">
        <div className="aa-container">
          <p className="aa-section-label">What AssessAlign Does</p>
          <h2 className="aa-section-title">
            Every Feature Built Around Standards Mastery
          </h2>
          <p className="aa-section-subtitle">
            Not another dashboard full of numbers. AssessAlign connects
            assessment to action &mdash; from question creation to intervention
            grouping, every feature is designed to move the needle on student
            learning.
          </p>

          <div className="aa-features-grid">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`aa-feature-card${feat.flagship ? " aa-feature-card--flagship" : ""}`}
              >
                {feat.flagship && (
                  <span className="aa-flagship-badge">Flagship Feature</span>
                )}
                <div className={`aa-feature-icon aa-feature-icon--${feat.accent}`}>
                  {feat.icon}
                </div>
                <h3 className="aa-feature-title">{feat.title}</h3>
                <p className="aa-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DEVELOPMENT ROADMAP
      ═══════════════════════════════════════════ */}
      <section className="aa-roadmap-section">
        <div className="aa-container">
          <p className="aa-section-label">Where We Are</p>
          <h2 className="aa-section-title">Development Roadmap</h2>
          <div className="aa-roadmap-grid">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`aa-roadmap-card ${phase.statusClass}`}>
                <div className="aa-roadmap-card-header">
                  <span className="aa-phase-label">PHASE {phase.phase}</span>
                  <span className={`aa-phase-badge ${phase.statusClass}`}>
                    {phase.status}
                  </span>
                </div>
                <h3 className="aa-roadmap-card-title">{phase.title}</h3>
                <p className="aa-roadmap-card-desc">{phase.desc}</p>
              </div>
            ))}
          </div>

          <div className="aa-velocity-card">
            <h3 className="aa-velocity-title">Current Project Velocity</h3>
            <p className="aa-velocity-subtitle">
              Tracking towards Version 1.0 Release
            </p>

            <div className="aa-progress-wrapper">
              <div className="aa-progress-header">
                <span className="aa-progress-label">OVERALL COMPLETION</span>
                <span className="aa-progress-percent">85%</span>
              </div>
              <div className="aa-progress-bar">
                <div className="aa-progress-fill" style={{ width: "85%" }} />
              </div>
            </div>

            <div className="aa-stats-grid">
              <div className="aa-stat">
                <span className="aa-stat-number">4</span>
                <span className="aa-stat-label">MODULES BUILT</span>
              </div>
              <div className="aa-stat">
                <span className="aa-stat-number">124</span>
                <span className="aa-stat-label">COMMITS</span>
              </div>
              <div className="aa-stat">
                <span className="aa-stat-number">99%</span>
                <span className="aa-stat-label">UPTIME</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section className="aa-status-section">
        <div className="aa-container">
          <div className="aa-status-inner">
            <h2 className="aa-status-title">
              Interested in Early Access?
            </h2>
            <p className="aa-status-desc">
              AssessAlign is currently in active development with beta testing
              underway. If you&apos;re a school leader, coach, or
              district administrator looking for a smarter approach to
              standards-based assessment, get in touch.
            </p>
            <Link href="/contact" className="aa-status-btn">
              Request Early Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
