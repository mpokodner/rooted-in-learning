import type { Metadata } from "next";
import Link from "next/link";
import "./consulting.css";

export const metadata: Metadata = {
  title: "Consulting | The Rooted Learner",
  description:
    "Literacy & EdTech consulting for schools and educators. Support with science-of-reading implementation, multilingual learner strategies, and digital tool integration.",
  keywords: [
    "education consulting",
    "literacy consulting",
    "science of reading",
    "multilingual learners",
    "edtech integration",
    "teacher training",
    "assessment alignment",
    "school consulting",
  ],
  alternates: {
    canonical: "/consulting",
  },
  openGraph: {
    title: "Consulting | The Rooted Learner",
    description:
      "Literacy & EdTech consulting for schools and educators. Science-of-reading implementation, teacher training, and digital tool integration.",
    type: "website",
  },
};

const frameworkGuides = [
  {
    title: "Structured Literacy Implementation",
    description:
      "A step-by-step guide for schools transitioning to a structured literacy approach, including timelines, training needs, and common pitfalls.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Assessment Alignment Framework",
    description:
      "How to map your diagnostic, formative, and summative assessments to standards — and make sure they actually inform instruction.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "EdTech Evaluation Rubric",
    description:
      "A practical rubric for evaluating educational technology tools — accessibility, pedagogy alignment, data privacy, and teacher workload impact.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Multilingual Learner Support Guide",
    description:
      "Strategies for supporting multilingual learners across content areas, including language scaffolds, cultural responsiveness, and family engagement.",
    icon: "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
  },
];

const helpAreas = [
  {
    title: "Literacy Systems Alignment",
    description:
      "Audit and align your reading programs, intervention frameworks, and curriculum to ensure coherence across your school or district.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Teacher Training & PD",
    description:
      "Hands-on professional development in structured literacy, Science of Reading practices, and multilingual learner strategies that teachers actually use.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
  },
  {
    title: "Assessment Strategy",
    description:
      "Design assessment systems that give you actionable data — from diagnostic screening to progress monitoring to standards alignment.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Instructional Technology Workflows",
    description:
      "Strategic technology adoption that sticks. Tool selection, rollout planning, and sustainable integration for classrooms and schools.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Custom Digital Solutions",
    description:
      "Need something built? From assessment tools to curriculum platforms, I design and develop EdTech solutions tailored to your specific challenges.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
];

export default function ConsultingPage() {
  return (
    <div className="consulting-page">
      {/* SECTION 1 — HEADLINE */}
      <section className="consult-hero" aria-labelledby="consult-heading">
        <div className="consult-hero-bg" aria-hidden="true">
          <div className="consult-hero-circle consult-hero-circle--1" />
          <div className="consult-hero-circle consult-hero-circle--2" />
        </div>
        <div className="container consult-hero-container">
          <p className="consult-hero-eyebrow">Limited Partnerships Available</p>
          <h1 id="consult-heading" className="consult-hero-title">
            Literacy &amp; EdTech Consulting
            <br />
            <span className="consult-hero-accent">
              for Schools and Educators
            </span>
          </h1>
          <p className="consult-hero-desc">
            Support with science-of-reading implementation, multilingual learner
            strategies, and digital tool integration — from a 12+ year
            practitioner who builds the tools she recommends.
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHO IT'S FOR */}
      <section
        className="consult-audience section"
        aria-labelledby="audience-heading"
      >
        <div className="container">
          <div className="consult-section-header">
            <p className="consult-section-label">Who This Is For</p>
            <h2
              id="audience-heading"
              className="consult-section-title consult-section-title--light"
            >
              Built for Educators Ready to Move Forward
            </h2>
          </div>

          <div className="consult-who-grid">
            <div className="consult-who-card">
              <div className="consult-who-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="consult-who-title">Schools Improving Literacy Outcomes</h3>
              <p className="consult-who-desc">
                You know your reading data needs to improve, but aligning
                curriculum, intervention, and instruction feels overwhelming.
              </p>
            </div>

            <div className="consult-who-card">
              <div className="consult-who-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <h3 className="consult-who-title">Districts Aligning Assessments</h3>
              <p className="consult-who-desc">
                Your assessments don&apos;t talk to each other. You need a
                coherent system that gives teachers actionable data — not just
                more testing.
              </p>
            </div>

            <div className="consult-who-card">
              <div className="consult-who-icon">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <h3 className="consult-who-title">
                Teachers Needing PD or Systems
              </h3>
              <p className="consult-who-desc">
                You want practical professional development, better classroom
                workflows, or support integrating technology in ways that
                actually save time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT YOU HELP WITH */}
      <section
        className="consult-domains section"
        aria-labelledby="domains-heading"
      >
        <div className="container">
          <div className="consult-section-header">
            <p className="consult-section-label">What I Help With</p>
            <h2 id="domains-heading" className="consult-section-title">
              Practical Support, Not Packaged Programs
            </h2>
            <p className="consult-section-subtitle">
              Every school and educator is different. I start by listening, then
              build a plan around your specific needs.
            </p>
          </div>

          <div className="consult-domains-grid">
            {helpAreas.map((area) => (
              <div key={area.title} className="consult-domain-card">
                <div className="consult-domain-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={area.icon}
                    />
                  </svg>
                </div>
                <h3 className="consult-domain-title">{area.title}</h3>
                <p className="consult-domain-desc">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK GUIDES */}
      <section
        className="consult-frameworks section"
        aria-labelledby="frameworks-heading"
      >
        <div className="container">
          <div className="consult-section-header">
            <p className="consult-section-label">Framework Guides</p>
            <h2 id="frameworks-heading" className="consult-section-title">
              Big-Picture Thinking for Your School
            </h2>
            <p className="consult-section-subtitle">
              Implementation guides and evaluation frameworks for schools and
              districts working on systemic change.
            </p>
          </div>

          <div className="consult-frameworks-grid">
            {frameworkGuides.map((guide) => (
              <div key={guide.title} className="consult-framework-card">
                <div className="consult-framework-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={guide.icon}
                    />
                  </svg>
                </div>
                <h3 className="consult-framework-title">{guide.title}</h3>
                <p className="consult-framework-desc">{guide.description}</p>
                <span className="consult-framework-link">
                  Read Guide
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
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROOF */}
      <section
        className="consult-proof section"
        aria-labelledby="proof-heading"
      >
        <div className="container">
          <div className="consult-section-header">
            <p className="consult-section-label">Why Work With Me</p>
            <h2 id="proof-heading" className="consult-section-title">
              A Practitioner Who Builds
            </h2>
          </div>

          <div className="consult-proof-content">
            <div className="consult-proof-points">
              <div className="consult-proof-point">
                <div className="consult-proof-point-icon">
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
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="consult-proof-point-title">
                    12+ Years in Education
                  </h3>
                  <p className="consult-proof-point-desc">
                    Classroom teacher, reading interventionist, literacy
                    specialist, and curriculum designer. I&apos;ve been in the
                    roles I consult on.
                  </p>
                </div>
              </div>

              <div className="consult-proof-point">
                <div className="consult-proof-point-icon">
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
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="consult-proof-point-title">
                    Real Projects, Real Tools
                  </h3>
                  <p className="consult-proof-point-desc">
                    I don&apos;t just advise — I build. From lesson libraries and
                    teacher tools to full platforms, my consulting is grounded in
                    real deliverables.
                  </p>
                </div>
              </div>

              <div className="consult-proof-point">
                <div className="consult-proof-point-icon">
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
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="consult-proof-point-title">
                    AssessAlign — Built From Practice
                  </h3>
                  <p className="consult-proof-point-desc">
                    AssessAlign is a real product I designed and developed to
                    solve assessment alignment challenges I saw across schools
                    and districts. It&apos;s an example of how my consulting
                    turns into action.
                  </p>
                </div>
              </div>
            </div>

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
                <span className="consult-trust-number">100+</span>
                <span className="consult-trust-label">Resources Built</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOFT CTA */}
      <section
        id="contact"
        className="consult-cta section-lg"
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <div className="consult-cta-inner">
            <p className="consult-cta-note">Limited partnerships available</p>
            <h2 id="cta-heading" className="consult-cta-title">
              Let&apos;s Talk About What You Need
            </h2>
            <p className="consult-cta-desc">
              No packages, no pressure. Just a conversation about where you are
              and how I might help. If we&apos;re a good fit, we&apos;ll build a
              plan together.
            </p>
            <div className="consult-cta-actions">
              <Link href="/contact" className="consult-cta-primary">
                Discuss Your Needs
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
              <Link href="/about" className="consult-cta-secondary">
                Learn About My Background
              </Link>
            </div>
            <p className="consult-cta-trust">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>
                Free initial conversation &middot; No commitment &middot;
                Confidential
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
