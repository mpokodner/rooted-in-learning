import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import assessAlignImg from "../about/projects/images/assessalignpng.png";

export const metadata: Metadata = {
  title: "What We Build",
  description:
    "District software and AI-powered tools built by educators who still teach. AssessAlign for standards-based assessment, Hall Pass for student movement management, and more.",
  keywords: [
    "district software",
    "education technology",
    "school assessment tools",
    "student movement management",
    "custom edtech",
  ],
  alternates: {
    canonical: "/for-districts",
  },
  openGraph: {
    title: "What We Build — The Rooted Learner",
    description:
      "District software and AI-powered tools built by educators who still teach.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const assessAlignFeatures = [
  "Standards-based reading assessments (Grades 3–8)",
  "Real-time analytics for teachers & administrators",
  "Framework-agnostic — built for any standard set worldwide",
  "Multi-school support with district-wide deployment",
];

const toolboxCards = [
  {
    title: "Standards-to-resource maps",
    desc: "A living alignment dashboard connecting every standard to the resources that teach and assess it.",
    terra: false,
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  },
  {
    title: "ELD & multilingual overlays",
    desc: "Scaffolding frameworks that make core instruction accessible to multilingual learners by design.",
    terra: false,
    icon: (
      <>
        <path d="M5 8h14M5 12h9M5 16h12" />
        <circle cx="18" cy="14" r="3" />
      </>
    ),
  },
  {
    title: "AI-integrated workflows",
    desc: "Assistive AI built into planning and assessment — with a clear ethics line and human judgment at the center.",
    terra: false,
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </>
    ),
  },
  {
    title: "Curriculum & pathway tools",
    desc: "Applied-learning pathway maps — learn math through how it applies to construction, masonry, or design.",
    terra: true,
    icon: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M4 9h16M9 9v10" />
      </>
    ),
  },
  {
    title: "Custom district applications",
    desc: "Purpose-built apps for the specific problem your school faces — from audit finding to deployed tool.",
    terra: true,
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    title: "Measurement & data partnerships",
    desc: "Outcome dashboards that prove the system is working — built to your district's reporting requirements.",
    terra: false,
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ToolsPage() {
  return (
    <>
      <section className="section hero" aria-labelledby="tools-heading">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Software</span>
            <h1 id="tools-heading" className="display mt-3">
              We build the tools{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                we wished existed.
              </span>
            </h1>
            <p className="lead mt-3" style={{ maxWidth: "56ch" }}>
              Every tool starts as an audit finding or a classroom problem we
              couldn&apos;t solve with what was available. We build for districts,
              not demos.
            </p>
            <div className="btn-row mt-4">
              <Link href="/for-districts/hallpass" className="btn btn-terra btn-lg">
                See Hall Pass
              </Link>
              <Link href="/for-districts/assessalign" className="btn btn-outline btn-lg">
                Explore AssessAlign
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section--beige section"
        aria-labelledby="hallpass-heading"
      >
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="chip-tag">Featured</span>
              <h2 id="hallpass-heading" className="h-xl mt-2">
                Hall Pass
              </h2>
              <p className="lead mt-3" style={{ maxWidth: "44ch" }}>
                A district-owned student movement management platform built
                around security, SIS alignment, campus-level boundaries, and
                local customization.
              </p>
              <ul className="tick-list mt-4">
                <li><CheckIcon />Teacher workflows with one-tap pass creation</li>
                <li><CheckIcon />Kiosk mode with role-based access and instant revocation</li>
                <li><CheckIcon />Campus admin dashboards with live movement data</li>
                <li><CheckIcon />District-wide oversight with tenant-scoped boundaries</li>
              </ul>
              <div className="mt-4">
                <Link href="/for-districts/hallpass" className="btn btn-primary">
                  Learn about Hall Pass
                </Link>
              </div>
            </div>
            <div className="reveal">
              <div
                className="ph ph--earth"
                style={{
                  minHeight: "clamp(300px, 38vw, 400px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "var(--earth-mist)",
                  fontSize: "var(--text-sm)",
                }}
              >
                <p>Hall Pass screenshot coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="assessalign" className="section" aria-labelledby="assessalign-heading">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="chip-tag">Assessment Engine</span>
              <h2 id="assessalign-heading" className="h-xl mt-2">
                AssessAlign
              </h2>
              <p className="lead mt-3" style={{ maxWidth: "44ch" }}>
                A standards-grounded, adaptive assessment and curriculum engine.
                Built to solve a problem we were living in the classroom — now
                framework-agnostic for any school in the world.
              </p>
              <ul className="tick-list mt-4">
                {assessAlignFeatures.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/for-districts/assessalign" className="btn btn-primary">
                  See how it works
                </Link>
              </div>
            </div>
            <div className="reveal">
              <div
                className="ph ph--earth"
                style={{
                  minHeight: "clamp(300px, 38vw, 400px)",
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={assessAlignImg}
                  alt="AssessAlign Dashboard — standards-based reading assessment platform with real-time analytics"
                  placeholder="blur"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--beige section" aria-labelledby="toolbox-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The toolbox</span>
            <h2 id="toolbox-heading" className="h-xl mt-3">
              What else we build.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Each tool is prescribed by an audit and built for a specific school or
              network — not pulled off a shelf.
            </p>
          </div>
          <div className="grid grid-3 mt-6">
            {toolboxCards.map((card) => (
              <article key={card.title} className="card card--hover reveal">
                <div className={`card-icon${card.terra ? " card-icon--terra" : ""}`}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section--earth-deep section">
        <div className="container glass text-center">
          <span className="eyebrow eyebrow--center reveal">Work with us</span>
          <blockquote className="pullquote mt-4 mx-auto reveal" style={{ maxWidth: "28ch" }}>
            We build the tools and provide the guidance. That&apos;s the whole reason
            we understand what your district actually needs.
          </blockquote>
          <div className="btn-row reveal mt-4" style={{ justifyContent: "center" }}>
            <Link href="/work-with-me" className="btn btn-terra btn-lg">
              Start a conversation
            </Link>
            <Link href="/about/approach" className="btn btn-outline btn-lg">
              Read about our approach
            </Link>
          </div>
        </div>
      </section>

      <section id="early-access" className="section" aria-labelledby="tools-how-heading">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">How we build</span>
              <h2 id="tools-how-heading" className="h-lg mt-3">
                Teacher expertise meets modern development
              </h2>
              <p className="muted mt-3">
                Every tool starts with a real classroom problem. We prototype
                quickly, test with real educators, and iterate based on
                feedback — not assumptions. The stack is modern, but the
                priorities are grounded: does it actually save a teacher time? If
                not, it doesn&apos;t ship.
              </p>
              <p className="muted mt-3">
                If you&apos;re a school, district, or EdTech company looking for
                someone who can bridge the gap between pedagogy and production
                code, our tools are the proof of concept.
              </p>
            </div>
            <div className="reveal">
              <EarlyAccessForm
                heading="Get Early Access to AssessAlign"
                description="Be the first to try AssessAlign. Join the waitlist and we'll notify you when beta spots open up."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
