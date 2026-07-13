import type { Metadata } from "next";
import Link from "next/link";
import "./approach.css";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How we diagnose, build, and support. Our three-stage methodology turns a curriculum audit into custom technology and professional development inside your district's actual workflow.",
  alternates: { canonical: "/about/approach" },
  openGraph: {
    title: "Our Approach — The Rooted Learner",
    description:
      "Audit, build, implement — a three-stage methodology that produces custom technology and PD inside your district's actual workflow.",
    type: "website",
  },
};

const stages = [
  {
    num: "01",
    title: "Audit",
    desc: "We map vision-to-system fit, the real learner model, curriculum and assessment architecture, and the tech stack. You get a findings report with a prioritized roadmap — not a generic checklist.",
    details: [
      "Standards alignment and scope-and-sequence analysis",
      "Multilingual learner access and ELD program review",
      "Technology stack evaluation and data governance",
      "Instructional workflow observation and teacher interviews",
    ],
  },
  {
    num: "02",
    title: "Build",
    desc: "Prescribed by the audit. We build what your school actually needs — curriculum architecture, AI-integrated workflows, multilingual overlays, or custom tools — scoped to your framework.",
    details: [
      "Curriculum and pathway architecture",
      "ELD and multilingual scaffolding frameworks",
      "AI-integrated instructional workflows",
      "Custom software for district-specific problems",
    ],
  },
  {
    num: "03",
    title: "Implement",
    desc: "Professional development, coaching, and launch support until the system holds in real classrooms. We stay until it works — not until the contract runs out.",
    details: [
      "Teacher and admin professional development",
      "Coaching cycles tied to new workflows",
      "Data review and system adjustment",
      "Launch support and troubleshooting",
    ],
  },
];

export default function ApproachPage() {
  return (
    <div className="ap-page">
      <section className="ap-hero">
        <div className="container">
          <span className="ap-eyebrow">Our Approach</span>
          <h1>How we diagnose, build, and support</h1>
          <p className="ap-hero-sub">
            Every engagement starts with the same diagnostic engine. The audit
            prescribes the build; the build prescribes the implementation. Each
            stage earns the next — no generic proposals, no guesswork.
          </p>
        </div>
      </section>

      <section className="ap-methodology section">
        <div className="container">
          <div className="ap-stages">
            {stages.map((s) => (
              <div key={s.num} className="ap-stage-card">
                <div className="ap-stage-header">
                  <span className="ap-stage-num">Stage {s.num}</span>
                  <h2>{s.title}</h2>
                </div>
                <p className="ap-stage-desc">{s.desc}</p>
                <ul className="ap-stage-details">
                  {s.details.map((d) => (
                    <li key={d}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-proof section">
        <div className="container">
          <div className="ap-section-header">
            <span className="ap-eyebrow">Proof of concept</span>
            <h2>We don&apos;t hand back a clipboard report. We build something alive.</h2>
          </div>
          <div className="ap-proof-content">
            <div className="ap-proof-text">
              <p>
                AssessAlign started as an audit finding — teachers needed
                standards-aligned assessments that actually measured comprehension
                without exhausting attention. Instead of recommending a vendor, we
                built the tool ourselves.
              </p>
              <p>
                That&apos;s the difference. Our deliverables include custom
                technology <em>and</em> professional development inside your
                district&apos;s actual workflow. Not a slide deck that sits in a
                shared drive.
              </p>
              <Link href="/for-districts/assessalign" className="ap-proof-link">
                See how AssessAlign works
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ap-cta section">
        <div className="container">
          <h2>Ready to start with the audit?</h2>
          <p>
            Every engagement begins with a conversation about your school, your
            learners, and what &ldquo;working&rdquo; actually looks like for your
            team.
          </p>
          <Link href="/work-with-me" className="btn btn-terra">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
