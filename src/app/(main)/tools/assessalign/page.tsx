import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import assessAlignImg from "../../about/projects/images/assessalignpng.png";

export const metadata: Metadata = {
  title: "AssessAlign | The Rooted Learner",
  description:
    "AssessAlign is a standards-grounded, adaptive assessment and curriculum engine — shorter passages, aligned questions, actionable analytics. Framework-agnostic for any school in the world.",
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
    title: "AssessAlign | The Rooted Learner",
    description:
      "Shorter passages, aligned questions, and analytics teachers actually use — built from inside the classroom, for any framework in the world.",
    type: "website",
  },
};

const features = [
  {
    terra: false,
    title: "Shorter passages",
    desc: "Right-sized reading that measures comprehension without exhausting attention.",
    icon: (
      <path d="M4 6h16M4 10h12M4 14h16M4 18h9" />
    ),
  },
  {
    terra: false,
    title: "Standards-aligned questions",
    desc: "Every item mapped to a standard — grounded by a RAG + psychometric architecture.",
    icon: <path d="M20 6 9 17l-5-5" />,
  },
  {
    terra: false,
    title: "Actionable analytics",
    desc: "Reports that point to the next instructional move, not just a number.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  },
  {
    terra: true,
    title: "Framework-agnostic",
    desc: "Point it at any standard set — exactly what new and international schools need.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
      </>
    ),
  },
  {
    terra: true,
    title: "Multilingual-ready",
    desc: "Designed so multilingual learners can access the assessment, not just sit it.",
    icon: (
      <>
        <path d="M5 8h14M5 12h9M5 16h12" />
        <circle cx="18" cy="14" r="3" />
      </>
    ),
  },
  {
    terra: false,
    title: "Adaptive generation",
    desc: "One engine, infinite forms — generated on demand instead of a fixed catalog to maintain.",
    icon: (
      <>
        <path d="M12 2v6M5 9l2 2M19 9l-2 2" />
        <path d="M4 14c0 4 3.5 8 8 8s8-4 8-8c-3 0-5 1-8 4-3-3-5-4-8-4Z" />
      </>
    ),
  },
];

const steps = [
  {
    title: "Choose a framework",
    desc: "Select your standards — state, IB, Cambridge, competency, or career-pathway — and the grade band.",
  },
  {
    title: "Generate aligned assessments",
    desc: "The engine produces right-sized passages and standards-mapped items, ready to assign.",
  },
  {
    title: "Act on the analytics",
    desc: "Results surface the next instructional move per student, per standard — not just a score.",
  },
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
    description: "Beta access, currently free for early adopters",
  },
};

export default function AssessAlignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section hero" aria-labelledby="aa-heading">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">AssessAlign · assessment engine</span>
            <h1 id="aa-heading" className="display mt-3">
              The assessment we{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                wished we had.
              </span>
            </h1>
            <p className="lead mt-3">
              A standards-grounded, adaptive assessment and curriculum generator. Shorter
              passages, aligned questions, and analytics teachers actually use — built from
              inside the classroom, for any framework in the world.
            </p>
            <div className="btn-row mt-4">
              <a href="#waitlist" className="btn btn-terra btn-lg">
                Request access
              </a>
              <a href="#how" className="btn btn-outline btn-lg">
                How it works
              </a>
            </div>
            <p className="mt-3 reveal">
              <Link href="/services" className="link-arrow">
                See How This Applies to Your District
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </p>
            <div className="badge-row mt-4">
              <span className="chip">State standards</span>
              <span className="chip">IB &amp; Cambridge</span>
              <span className="chip">Competency-based</span>
              <span className="chip">Career pathways</span>
            </div>
          </div>
          <div className="reveal">
            <div
              className="ph ph--earth"
              style={{
                minHeight: "clamp(320px, 40vw, 440px)",
                padding: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src={assessAlignImg}
                alt="AssessAlign Dashboard showing standards-based reading assessment with real-time analytics, class management, and house leaderboards"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                placeholder="blur"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section--beige section" aria-labelledby="aa-problem-heading">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">The problem it solves</span>
              <h2 id="aa-problem-heading" className="h-lg mt-3">
                Most assessment tools were built for compliance, not for teaching.
              </h2>
              <p className="muted mt-3">
                Passages too long to finish. Questions loosely tied to standards. Reports that
                tell you a score but not what to do next. After years in the classroom, we knew
                exactly what was missing — so we built it.
              </p>
            </div>
            <div className="reveal">
              <div className="ph" style={{ minHeight: 240 }}>
                <span className="ph-label">diagram · the assessment gap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features" aria-labelledby="aa-features-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What&apos;s inside</span>
            <h2 id="aa-features-heading" className="h-xl mt-3">
              Built for the people using it.
            </h2>
          </div>
          <div className="grid grid-3 mt-6">
            {features.map((feature) => (
              <article key={feature.title} className="card card--hover reveal">
                <div
                  className={`card-icon${feature.terra ? " card-icon--terra" : ""}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section--earth section"
        id="how"
        aria-labelledby="aa-how-heading"
      >
        <div className="container glass">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 id="aa-how-heading" className="h-xl mt-3" style={{ color: "#fff" }}>
              From standard to insight in three moves.
            </h2>
          </div>
          <div className="steps mt-6">
            {steps.map((step) => (
              <div key={step.title} className="step reveal">
                <h3 style={{ color: "#fff" }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.75)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="aa-unlock-heading">
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">The quiet unlock</span>
          <h2 id="aa-unlock-heading" className="h-lg mt-3 reveal">
            If it can reliably generate what anyone wants, it can become anything.
          </h2>
          <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: "50ch" }}>
            The same RAG and psychometric architecture, pointed at any framework, turns a
            regional tool into a standards-grounded, adaptive engine for any school on earth
            — and new and international schools, which have no single shared standard, need it
            most.
          </p>
          <p className="muted mt-4 reveal">
            Built by{" "}
            <Link href="/about">Michelle Pokodner</Link> and{" "}
            <a
              href="https://www.linkedin.com/in/chris-carlozzi-52a569355/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Carlozzi
            </a>
            , combining 12+ years of classroom expertise with full-stack engineering.
          </p>
        </div>
      </section>

      <section
        className="section--beige section"
        id="waitlist"
        aria-label="Early access waitlist"
      >
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">Early access</span>
          <EarlyAccessForm
            className="mt-4 reveal"
            heading="Be a framework-agnostic beta school."
            description="Every new-school engagement is a warm beta. Tell us your framework and we'll be in touch as access opens."
          />
          <div className="btn-row mt-4 reveal" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-terra">
              Discuss Implementation
            </Link>
            <Link href="/services#audit" className="btn btn-outline">
              Start with a System Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
