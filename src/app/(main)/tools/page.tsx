import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import assessAlignImg from "../about/projects/images/assessalignpng.png";

export const metadata: Metadata = {
  title: "Tools | The Rooted Learner",
  description:
    "AI-powered tools for educators, built by a teacher who codes. Standards-based assessment, curriculum planning, and more.",
  alternates: {
    canonical: "/tools",
  },
};

const assessAlignFeatures = [
  "Standards-based reading assessments (Grades 3–8)",
  "Real-time analytics for teachers & administrators",
  "Team-based houses & gamification leaderboards",
  "Multi-school support with district-wide deployment",
];

const assessAlignTech = [
  "React 18 + Vite",
  "Node.js + GraphQL",
  "Supabase (Auth + RLS)",
  "TailwindCSS",
  "Recharts",
  "Vercel",
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
    title: "Custom applications",
    desc: "Purpose-built apps for the specific problem your school faces, generated adaptively rather than hand-maintained.",
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
    desc: "Outcome dashboards that prove the system is working — and feed the Learning Zones research.",
    terra: false,
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </>
    ),
  },
];

const techStack = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Supabase", icon: "supabase" },
  { name: "AI / RAG", icon: "ai" },
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
            <span className="eyebrow">Tools · the builder edge</span>
            <h1 id="tools-heading" className="display mt-3">
              We don&apos;t hand back a{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                clipboard report.
              </span>
            </h1>
            <p className="lead mt-3" style={{ maxWidth: "56ch" }}>
              We deliver something alive — a tool built for your network. It previews the
              Build value, proves we do the thing we advise, and makes us impossible to
              replace with a cheaper auditor.
            </p>
            <div className="btn-row mt-4">
              <Link href="/tools/assessalign" className="btn btn-terra btn-lg">
                Explore AssessAlign
              </Link>
              <Link href="/services#audit" className="btn btn-outline btn-lg">
                Start with an audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="assessalign"
        className="section--beige section"
        aria-labelledby="assessalign-heading"
      >
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="chip-tag">Flagship</span>
              <h2 id="assessalign-heading" className="h-xl mt-2">
                AssessAlign
              </h2>
              <p className="lead mt-3" style={{ maxWidth: "44ch" }}>
                A standards-grounded, adaptive assessment and curriculum engine. Built to
                solve a problem we were living in the classroom — now framework-agnostic
                for any school in the world.
              </p>
              <ul className="tick-list mt-4">
                {assessAlignFeatures.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="badge-row mt-4">
                {assessAlignTech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/tools/assessalign" className="btn btn-primary">
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

      <section className="section" aria-labelledby="toolbox-heading">
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
          <span className="eyebrow eyebrow--center reveal">The moat</span>
          <blockquote className="pullquote mt-4 mx-auto reveal" style={{ maxWidth: "24ch" }}>
            We build the tools and provide the guidance. That synthesis is the whole
            reason you can&apos;t replace us with a cheaper auditor.
          </blockquote>
          <div className="btn-row reveal mt-4" style={{ justifyContent: "center" }}>
            <Link href="/services#audit" className="btn btn-terra btn-lg">
              Start with the Greenhouse Audit
            </Link>
          </div>
        </div>
      </section>

      <section id="early-access" className="section" aria-labelledby="tools-how-heading">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">How I Build</span>
              <h2 id="tools-how-heading" className="h-lg mt-3">
                Teacher Expertise Meets Modern Development
              </h2>
              <p className="muted mt-3">
                Every tool starts with a real classroom problem. I prototype quickly, test
                with real educators, and iterate based on feedback — not assumptions. The
                stack is modern, but the priorities are grounded: does it actually save a
                teacher time? If not, it doesn&apos;t ship.
              </p>
              <p className="muted mt-3">
                If you&apos;re a school, district, or EdTech company looking for someone who
                can bridge the gap between pedagogy and production code, these tools are my
                proof of concept.
              </p>
              <div className="badge-row mt-4">
                {techStack.map((tech) => (
                  <span key={tech.name} className="chip">
                    {tech.name}
                  </span>
                ))}
              </div>
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
