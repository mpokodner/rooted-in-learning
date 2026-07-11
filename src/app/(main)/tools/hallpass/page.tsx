import type { Metadata } from "next";
import Link from "next/link";
import "./hallpass.css";

export const metadata: Metadata = {
  title: "Hall Pass",
  description:
    "A district-owned student movement management platform built around security, SIS alignment, campus-level boundaries, and local customization.",
  keywords: [
    "student movement management",
    "hall pass system",
    "school safety",
    "campus security",
    "SIS integration",
    "district software",
  ],
  alternates: { canonical: "/tools/hallpass" },
  openGraph: {
    title: "Hall Pass — The Rooted Learner",
    description:
      "District-owned student movement management built around security, SIS alignment, and local customization.",
    type: "website",
  },
};

const problems = [
  {
    title: "Paper passes don't scale",
    desc: "Handwritten logs disappear. No one knows who is in the hallway, when, or for how long.",
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />,
  },
  {
    title: "Admins lack real-time visibility",
    desc: "Without centralized data, security teams are reactive instead of proactive.",
    icon: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
  },
  {
    title: "Teachers lose instructional time",
    desc: "Managing passes manually pulls attention from the students who need it most.",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  },
];

const features = [
  {
    title: "Teacher workflows",
    desc: "One-tap pass creation. Automatic return tracking. No clipboard required.",
    icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>,
  },
  {
    title: "Kiosk mode",
    desc: "Hallway-mounted check-in stations with role-based access and instant revocation.",
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></>,
  },
  {
    title: "Campus admin dashboards",
    desc: "Live movement maps, historical reports, and configurable alerts for each campus.",
    icon: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
  },
  {
    title: "District oversight",
    desc: "Multi-campus reporting with tenant-scoped data boundaries. Every campus sees only its own students.",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></>,
  },
  {
    title: "SIS sync",
    desc: "Roster data flows directly from your student information system. No manual entry.",
    icon: <><path d="M4 12h8M4 18h8M20 6v12M12 6l8-4v12l-8 4V6Z" /></>,
  },
  {
    title: "Configurable pass rules",
    desc: "Set limits per period, block concurrent passes, and define campus-specific boundaries.",
    icon: <><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></>,
  },
];

const rollout = [
  { stage: "Pre-pilot", desc: "Infrastructure review, SIS mapping, role and boundary configuration" },
  { stage: "Pilot", desc: "Single campus deployment with teacher training and feedback loops" },
  { stage: "Limited rollout", desc: "Multi-campus expansion with campus admin onboarding" },
  { stage: "District-wide", desc: "Full deployment with district oversight dashboards and reporting" },
];

export default function HallPassPage() {
  return (
    <div className="hp-page">
      <section className="hp-hero">
        <div className="container">
          <span className="hp-eyebrow">Software</span>
          <h1>Student movement management built for real districts</h1>
          <p className="hp-hero-sub">
            We built Hall Pass because the tools available weren&apos;t designed
            with district operations in mind. Ours is — from SIS-aligned rosters
            to campus-scoped data boundaries.
          </p>
          <Link href="/work-with-me" className="btn btn-terra">
            Schedule a conversation about district fit
          </Link>
        </div>
      </section>

      <section className="hp-problems section">
        <div className="container">
          <div className="hp-section-header">
            <span className="hp-label">The Problem</span>
            <h2>Most pass systems weren&apos;t built by people who run schools</h2>
          </div>
          <div className="hp-problem-grid">
            {problems.map((p) => (
              <div key={p.title} className="hp-problem-card">
                <div className="hp-problem-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {p.icon}
                  </svg>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-features section">
        <div className="container">
          <div className="hp-section-header">
            <span className="hp-label">What We Built</span>
            <h2>Every feature designed around how districts actually operate</h2>
          </div>
          <div className="hp-feature-grid">
            {features.map((f) => (
              <div key={f.title} className="hp-feature-card">
                <div className="hp-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {f.icon}
                  </svg>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-security section">
        <div className="container">
          <div className="hp-section-header">
            <span className="hp-label">Security &amp; Data Boundaries</span>
            <h2>Designed with student-data boundaries from day one</h2>
          </div>
          <div className="hp-security-grid">
            <div className="hp-security-item">
              <h3>Role-based access</h3>
              <p>Teachers, campus admins, and district leaders see only what their role requires.</p>
            </div>
            <div className="hp-security-item">
              <h3>Campus scoping</h3>
              <p>Every data query is tenant-scoped. One campus cannot access another&apos;s student data.</p>
            </div>
            <div className="hp-security-item">
              <h3>Kiosk revocation</h3>
              <p>Admins can instantly deactivate any kiosk session from the dashboard.</p>
            </div>
            <div className="hp-security-item">
              <h3>Audit trails</h3>
              <p>Every pass creation, approval, and check-in is logged with timestamps and actor IDs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-rollout section">
        <div className="container">
          <div className="hp-section-header">
            <span className="hp-label">Implementation</span>
            <h2>A phased rollout built around your district&apos;s pace</h2>
          </div>
          <div className="hp-rollout-steps">
            {rollout.map((r, i) => (
              <div key={r.stage} className="hp-rollout-step">
                <div className="hp-step-num">{i + 1}</div>
                <div>
                  <h3>{r.stage}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-cta section">
        <div className="container">
          <h2>Ready to see if Hall Pass fits your district?</h2>
          <p>
            We start every conversation by understanding your campus structure,
            SIS environment, and operational priorities — not with a demo deck.
          </p>
          <Link href="/work-with-me" className="btn btn-terra">
            Schedule a conversation about district fit
          </Link>
        </div>
      </section>
    </div>
  );
}
