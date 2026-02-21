import type { Metadata } from "next";
import Link from "next/link";
import "./assessalign.css";

export const metadata: Metadata = {
  title: "AssessAlign | The Rooted Learner",
  description: "AssessAlign — Intelligent Assessment Orchestration for Modern EdTech, featuring AI-driven standardization and instant feedback loops.",
  keywords: ["assessment alignment", "standards mapping", "educational assessment", "AI grading", "rubric generation", "LMS integration"],
};

const techStack = [
  { name: "React + TS", icon: "JS" },
  { name: "Node.js", icon: "node" },
  { name: "OpenAI", icon: "ai" },
  { name: "PostgreSQL", icon: "db" },
  { name: "AWS", icon: "aws" },
];

const challenges = [
  "Inconsistent grading across multiple teaching assistants leads to student confusion.",
  "Feedback loops take 5-7 days, delaying student learning progression.",
  "Manual rubric alignment is tedious and prone to human error.",
];

const solutions = [
  "AI-driven standardization ensures 99% consistency in initial grading passes.",
  "Instant feedback loops allow students to iterate on work immediately.",
  "Automated rubric generation matches learning outcomes to assessment criteria.",
];

const capabilities = [
  {
    title: "Real-time Analytics",
    desc: "Monitor class performance with live dashboards. Identify knowledge gaps before they become critical failures.",
    emoji: "📊",
  },
  {
    title: "Custom Rubrics",
    desc: "Create flexible grading criteria that adapt to various assessment types, from essays to code snippets.",
    emoji: "📝",
  },
  {
    title: "LMS Integration",
    desc: "Seamlessly connects with Canvas, Blackboard, and Moodle using LTI 1.3 standards for easy roster syncing.",
    emoji: "🔗",
  },
  {
    title: "Student Portal",
    desc: "A dedicated interface for students to track their own progress, view feedback history, and request regrades.",
    emoji: "🎓",
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
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero */}
      <section className="aa-hero">
        <div className="aa-container">
          <div className="aa-hero-inner">
            <span className="aa-badge">
              <span className="aa-badge-dot" />
              Development Status: Beta v0.8
            </span>
            <h1 className="aa-hero-title">AssessAlign</h1>
            <p className="aa-hero-subtitle">
              Intelligent Assessment Orchestration for Modern EdTech
            </p>
            <p className="aa-hero-desc">
              A comprehensive platform designed to bridge the gap between technical documentation and pedagogical assessment, featuring AI-driven standardization and instant feedback loops.
            </p>
            <div className="aa-hero-actions">
              <a href="#capabilities" className="aa-btn-features">
                Explore Features
              </a>
              <Link href="/consulting" className="aa-btn-back">
                Back to Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="aa-tech-section">
        <div className="aa-container">
          <p className="aa-tech-heading">POWERED BY MODERN ARCHITECTURE</p>
          <div className="aa-tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="aa-tech-item">
                <div className={`aa-tech-icon aa-tech-icon--${tech.icon}`}>
                  {tech.icon === "JS" && (
                    <span className="aa-tech-icon-text">JS</span>
                  )}
                  {tech.icon === "node" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  )}
                  {tech.icon === "ai" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  )}
                  {tech.icon === "db" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  )}
                  {tech.icon === "aws" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M6.5 17.5c-2.5-1-4.5-3.5-4.5-7C2 6.5 5.5 3 12 3s10 3.5 10 7.5c0 3.5-2 6-4.5 7" />
                      <path d="M8 14l4 4 4-4" />
                    </svg>
                  )}
                </div>
                <span className="aa-tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge vs Solution */}
      <section className="aa-challenge-section">
        <div className="aa-container">
          <div className="aa-challenge-grid">
            {/* The Challenge */}
            <div className="aa-challenge-card aa-challenge-card--problem">
              <div className="aa-challenge-card-header">
                <span className="aa-challenge-icon aa-challenge-icon--red">!</span>
                <h3 className="aa-challenge-card-title">The Challenge</h3>
              </div>
              <ul className="aa-challenge-list">
                {challenges.map((item, i) => (
                  <li key={i} className="aa-challenge-list-item">
                    <span className="aa-x-mark">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow */}
            <div className="aa-challenge-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* The Solution */}
            <div className="aa-challenge-card aa-challenge-card--solution">
              <div className="aa-challenge-card-header">
                <span className="aa-challenge-icon aa-challenge-icon--green">✓</span>
                <h3 className="aa-challenge-card-title">The Solution</h3>
              </div>
              <ul className="aa-challenge-list">
                {solutions.map((item, i) => (
                  <li key={i} className="aa-challenge-list-item">
                    <span className="aa-check-mark">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="aa-capabilities-section">
        <div className="aa-container">
          <h2 className="aa-capabilities-title">Core Capabilities</h2>
          <div className="aa-capabilities-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="aa-capability-card">
                <span className="aa-capability-emoji">{cap.emoji}</span>
                <h3 className="aa-capability-card-title">{cap.title}</h3>
                <p className="aa-capability-card-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="aa-roadmap-section">
        <div className="aa-container">
          <h2 className="aa-roadmap-title">Development Roadmap</h2>
          <div className="aa-roadmap-grid">
            {roadmapPhases.map((phase, i) => (
              <div key={i} className={`aa-roadmap-card ${phase.statusClass}`}>
                <div className="aa-roadmap-card-header">
                  <span className="aa-phase-label">PHASE {phase.phase}</span>
                  <span className={`aa-phase-badge ${phase.statusClass}`}>{phase.status}</span>
                </div>
                <h3 className="aa-roadmap-card-title">{phase.title}</h3>
                <p className="aa-roadmap-card-desc">{phase.desc}</p>
              </div>
            ))}
          </div>

          {/* Velocity Card */}
          <div className="aa-velocity-card">
            <h3 className="aa-velocity-title">Current Project Velocity</h3>
            <p className="aa-velocity-subtitle">Tracking towards Version 1.0 Release</p>

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

      {/* CTA */}
      <section className="aa-status-section">
        <div className="aa-container">
          <div className="aa-status-inner">
            <h2 className="aa-status-title">Interested in AssessAlign?</h2>
            <p className="aa-status-desc">
              AssessAlign is currently in active beta testing. Interested in early access or have feedback? Get in touch!
            </p>
            <Link href="/contact" className="aa-status-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
