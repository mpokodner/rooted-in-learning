import type { Metadata } from "next";
import Link from "next/link";
import "./consulting.css";

export const metadata: Metadata = {
  title: "Consulting | Rooted in Learning",
  description:
    "Strategic consulting for schools, districts, and educators. Literacy systems, EdTech integration, AI implementation, and curriculum design from a 12+ year practitioner.",
  keywords: [
    "education consulting",
    "literacy consulting",
    "edtech integration",
    "AI in education",
    "curriculum consulting",
    "reading intervention",
    "school consulting",
  ],
  openGraph: {
    title: "Consulting | Rooted in Learning",
    description:
      "Strategic consulting for schools, districts, and educators from a practitioner who builds.",
    type: "website",
  },
};

const domains = [
  {
    title: "Literacy & Reading Systems",
    description:
      "Design and implement structured literacy programs, reading intervention frameworks, and Science of Reading-aligned curriculum.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    results: "80% of students moved up a reading level in one semester",
  },
  {
    title: "EdTech Integration",
    description:
      "Strategic technology adoption for classrooms and schools. Tool selection, training, and sustainable integration that sticks.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    results: "Schools report 40% faster teacher technology adoption",
  },
  {
    title: "AI-Powered Instruction",
    description:
      "Help your team understand and implement AI tools for lesson planning, assessment, differentiation, and administrative workflows.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    results: "Educators save 5+ hours per week with AI workflows",
  },
  {
    title: "Curriculum & Assessment Design",
    description:
      "Custom curriculum development, assessment alignment, and instructional system design for schools, districts, and homeschool families.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    results: "100+ standards-aligned resources designed and delivered",
  },
];

const audiences = [
  {
    title: "Schools & Districts",
    description: "System-level consulting for literacy programs, tech rollouts, and AI implementation.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    cta: "Request a Proposal",
  },
  {
    title: "Individual Educators",
    description: "1-on-1 coaching for classroom strategy, tech integration, and professional growth.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    cta: "Book a Call",
  },
  {
    title: "Families & Homeschoolers",
    description: "Personalized curriculum planning, learning assessments, and skill-gap support for your child.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    cta: "Schedule a Session",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "Free 30-minute call to understand your challenges, goals, and timeline.",
  },
  {
    step: "02",
    title: "Needs Assessment",
    description: "A structured audit of your current systems, tools, and instructional approach.",
  },
  {
    step: "03",
    title: "Strategy & Plan",
    description: "Custom action plan with clear milestones, deliverables, and implementation steps.",
  },
  {
    step: "04",
    title: "Implementation & Support",
    description: "Hands-on guidance through execution, with ongoing coaching and progress checks.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="consulting-page">
      {/* ─── Problem-Aware Hero ─── */}
      <section className="consult-hero" aria-labelledby="consult-heading">
        <div className="consult-hero-bg" aria-hidden="true">
          <div className="consult-hero-circle consult-hero-circle--1" />
          <div className="consult-hero-circle consult-hero-circle--2" />
        </div>
        <div className="container consult-hero-container">
          <div className="consult-hero-badge">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            <span>Strategic Consulting</span>
          </div>
          <h1 id="consult-heading" className="consult-hero-title">
            Great Teaching Needs
            <br />
            <span className="consult-hero-accent">Great Systems Behind It</span>
          </h1>
          <p className="consult-hero-desc">
            You don&apos;t have a talent problem. You have an infrastructure problem.
            I help schools, districts, and educators build the systems, tools, and
            strategies that make exceptional teaching sustainable.
          </p>
          <div className="consult-hero-actions">
            <a href="#booking" className="consult-hero-cta-primary">
              Book a Free Discovery Call
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
            <Link href="/about" className="consult-hero-cta-secondary">
              Learn About My Background
            </Link>
          </div>

          {/* Trust bar */}
          <div className="consult-trust-bar">
            <div className="consult-trust-item">
              <span className="consult-trust-number">12+</span>
              <span className="consult-trust-label">Years Experience</span>
            </div>
            <div className="consult-trust-divider" />
            <div className="consult-trust-item">
              <span className="consult-trust-number">SoR</span>
              <span className="consult-trust-label">Certified</span>
            </div>
            <div className="consult-trust-divider" />
            <div className="consult-trust-item">
              <span className="consult-trust-number">5K+</span>
              <span className="consult-trust-label">Educators Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Domain Cards ─── */}
      <section className="consult-domains section" aria-labelledby="domains-heading">
        <div className="container">
          <div className="consult-domains-header">
            <p className="consult-section-label">What I Consult On</p>
            <h2 id="domains-heading" className="consult-section-title">
              Deep Expertise, Delivered Practically
            </h2>
          </div>

          <div className="consult-domains-grid">
            {domains.map((domain) => (
              <div key={domain.title} className="consult-domain-card">
                <div className="consult-domain-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={domain.icon} />
                  </svg>
                </div>
                <h3 className="consult-domain-title">{domain.title}</h3>
                <p className="consult-domain-desc">{domain.description}</p>
                <div className="consult-domain-result">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>{domain.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Audience Qualifier ─── */}
      <section className="consult-audience section" aria-labelledby="audience-heading">
        <div className="container">
          <div className="consult-audience-header">
            <p className="consult-section-label">Who I Work With</p>
            <h2 id="audience-heading" className="consult-section-title consult-section-title--light">
              Find Your Path
            </h2>
            <p className="consult-audience-desc">
              Every engagement starts with understanding your specific context and goals.
            </p>
          </div>

          <div className="consult-audience-grid">
            {audiences.map((audience) => (
              <div key={audience.title} className="consult-audience-card">
                <div className="consult-audience-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={audience.icon} />
                  </svg>
                </div>
                <h3 className="consult-audience-card-title">{audience.title}</h3>
                <p className="consult-audience-card-desc">{audience.description}</p>
                <a href="#booking" className="consult-audience-cta">
                  {audience.cta}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Timeline ─── */}
      <section className="consult-process section" aria-labelledby="process-heading">
        <div className="container">
          <div className="consult-process-header">
            <p className="consult-section-label">How It Works</p>
            <h2 id="process-heading" className="consult-section-title">
              A Clear Path From Challenge to Solution
            </h2>
          </div>

          <div className="consult-process-grid">
            {processSteps.map((step) => (
              <div key={step.step} className="consult-process-step">
                <div className="consult-process-number">{step.step}</div>
                <div className="consult-process-connector" aria-hidden="true" />
                <h3 className="consult-process-step-title">{step.title}</h3>
                <p className="consult-process-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Snapshots / Social Proof ─── */}
      <section className="consult-proof section" aria-labelledby="proof-heading">
        <div className="container">
          <div className="consult-proof-header">
            <p className="consult-section-label">Real Results</p>
            <h2 id="proof-heading" className="consult-section-title">
              What Clients Are Saying
            </h2>
          </div>

          <div className="consult-proof-grid">
            <div className="consult-proof-card">
              <div className="consult-proof-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="consult-proof-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="consult-proof-quote">
                &ldquo;Michelle didn&apos;t just give us a plan — she gave us a system
                we could sustain. Our reading intervention program transformed
                outcomes for 80% of our struggling readers in one semester.&rdquo;
              </p>
              <div className="consult-proof-meta">
                <p className="consult-proof-author">K-5 Literacy Coach</p>
                <p className="consult-proof-org">Maryland School District</p>
              </div>
            </div>

            <div className="consult-proof-card">
              <div className="consult-proof-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="consult-proof-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="consult-proof-quote">
                &ldquo;The AI integration training was exactly what our staff needed.
                Practical, no jargon, and immediately applicable. Teachers left
                feeling confident instead of overwhelmed.&rdquo;
              </p>
              <div className="consult-proof-meta">
                <p className="consult-proof-author">Assistant Superintendent</p>
                <p className="consult-proof-org">Texas ISD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AssessAlign Showcase ─── */}
      <section className="consult-showcase section" aria-labelledby="showcase-heading">
        <div className="container">
          <div className="consult-showcase-header">
            <p className="consult-section-label">See It In Action</p>
            <h2 id="showcase-heading" className="consult-section-title">
              From Strategy to Product: AssessAlign
            </h2>
            <p className="consult-showcase-desc">
              AssessAlign is a real example of what my consulting practice produces — a tool
              I designed and built to solve an assessment alignment problem I saw repeatedly
              across schools and districts.
            </p>
          </div>

          <div className="consult-showcase-card">
            <div className="consult-showcase-banner">
              <div className="consult-showcase-badge">
                <div className="consult-showcase-badge-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Live Project</span>
              </div>
              <h3 className="consult-showcase-name">AssessAlign</h3>
              <p className="consult-showcase-tagline">
                Intelligent assessment orchestration that helps educators and administrators
                map assessments to standards for truly data-driven instruction.
              </p>
            </div>
            <div className="consult-showcase-body">
              <div className="consult-showcase-features">
                {[
                  { label: "Standards Mapping", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                  { label: "Gap Analysis", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                  { label: "Report Generation", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                  { label: "AI-Powered Feedback", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                ].map((feature, i) => (
                  <div key={i} className="consult-showcase-feature">
                    <div className="consult-showcase-feature-icon">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                    <p>{feature.label}</p>
                  </div>
                ))}
              </div>
              <div className="consult-showcase-actions">
                <Link href="/consulting/assessalign" className="consult-showcase-btn-primary">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Explore AssessAlign
                </Link>
                <Link href="/contact" className="consult-showcase-btn-secondary">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Booking CTA ─── */}
      <section id="booking" className="consult-booking section-lg" aria-labelledby="booking-heading">
        <div className="container">
          <div className="consult-booking-inner">
            <h2 id="booking-heading" className="consult-booking-title">
              Ready to Build Something Better?
            </h2>
            <p className="consult-booking-desc">
              Start with a free 30-minute discovery call. No pressure, no pitch —
              just a conversation about where you are and where you want to go.
            </p>
            <div className="consult-booking-actions">
              <Link href="/contact" className="consult-booking-btn">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Free Discovery Call
              </Link>
              <Link href="/about" className="consult-booking-link">
                Or learn more about my background
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="consult-booking-trust">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Free 30-min call &middot; No commitment &middot; Confidential</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
