import type { Metadata } from "next";
import Link from "next/link";
import "./about.css";

export const metadata: Metadata = {
  title: "About Michelle | Rooted in Learning",
  description:
    "12+ year educator, reading interventionist, curriculum designer, and EdTech developer. Building the infrastructure that makes great teaching sustainable.",
  keywords: [
    "education consultant",
    "reading interventionist",
    "curriculum designer",
    "science of reading",
    "EdTech developer",
    "multilingual learner specialist",
  ],
  openGraph: {
    title: "About Michelle | Rooted in Learning",
    description:
      "From classroom practitioner to education infrastructure builder. 12+ years shaping how teaching works.",
    type: "website",
  },
};

const expertise = [
  {
    title: "Reading Interventionist",
    description: "Specialized in diagnosing and closing literacy gaps using structured, research-backed methods.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Science of Reading Certified",
    description: "Trained in the evidence base behind how children learn to read — phonics, fluency, comprehension, and beyond.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Curriculum Designer",
    description: "Creates standards-aligned, classroom-tested lessons that educators and families can use immediately.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Multilingual Learner Specialist",
    description: "Deep expertise supporting English learners with culturally responsive, linguistically informed instruction.",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
  },
  {
    title: "EdTech Developer",
    description: "Building AI-supported instructional tools that give educators cognitive leverage in their daily work.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Digital Marketing Trained",
    description: "Understands content strategy, SEO, and conversion — bridging education expertise with reach.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const philosophy = [
  {
    statement: "Teaching is infrastructure, not performance.",
    detail: "The best teaching systems run whether you had coffee or not. I design tools that create leverage, not dependency.",
  },
  {
    statement: "Research should be usable, not just publishable.",
    detail: "Evidence-based practice only matters if it reaches classrooms. I translate research into ready-to-use resources.",
  },
  {
    statement: "Every learner deserves access — regardless of language or starting point.",
    detail: "Multilingual learners and students with skill gaps deserve tools designed for their reality, not adapted as an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ─── Identity Hero ─── */}
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero-bg" aria-hidden="true">
          <div className="about-hero-circle about-hero-circle--1" />
          <div className="about-hero-circle about-hero-circle--2" />
        </div>
        <div className="container about-hero-container">
          <div className="about-hero-badge">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Practitioner &rarr; Builder &rarr; Strategist</span>
          </div>
          <h1 id="about-heading" className="about-hero-title">
            I Build the Infrastructure
            <br />
            <span className="about-hero-title-accent">That Makes Teaching Sustainable</span>
          </h1>
          <p className="about-hero-desc">
            12+ years as an educator, reading interventionist, and curriculum designer.
            Now building AI-powered tools and research-backed resources that give
            teachers leverage and give families confidence.
          </p>
          <div className="about-hero-actions">
            <Link href="/consulting" className="about-hero-cta-primary">
              Work With Me
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/resources/lessons" className="about-hero-cta-secondary">
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Narrative Arc ─── */}
      <section className="about-narrative section" aria-labelledby="narrative-heading">
        <div className="container">
          <div className="about-narrative-grid">
            {/* Image / Visual */}
            <div className="about-narrative-visual">
              <div className="about-narrative-image">
                <div className="about-narrative-placeholder">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p>Photo Coming Soon</p>
                </div>
              </div>
              <div className="about-narrative-accent" aria-hidden="true" />
            </div>

            {/* Story Content */}
            <div className="about-narrative-content">
              <p className="about-section-label">My Story</p>
              <h2 id="narrative-heading" className="about-section-title">
                From Classroom Teacher to Education Architect
              </h2>
              <div className="about-narrative-text">
                <p>
                  I started where most educators start — overwhelmed, under-resourced,
                  and running on passion. Over 12 years in the classroom, I became a
                  reading interventionist, a curriculum designer, and the person
                  colleagues called when something needed to actually work.
                </p>
                <p>
                  Along the way, I earned Science of Reading certification, developed
                  expertise supporting multilingual learners, and realized that the
                  biggest problem in education isn&apos;t a lack of talent — it&apos;s
                  a lack of infrastructure.
                </p>
                <p>
                  So I started building. First came ready-to-teach lessons. Then came
                  consulting. Now I&apos;m developing AI-powered instructional tools
                  that give educators the leverage they&apos;ve always deserved.
                </p>
                <p>
                  <strong>Rooted in Learning</strong> is the ecosystem I wish I&apos;d
                  had: lessons that save time, strategies backed by research, tools
                  that actually work, and a community that understands the job.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-number">12+</span>
                  <span className="about-stat-label">Years in Education</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">5K+</span>
                  <span className="about-stat-label">Educators Reached</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">Resources Built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Expertise Grid ─── */}
      <section className="about-expertise section" aria-labelledby="expertise-heading">
        <div className="container">
          <div className="about-expertise-header">
            <p className="about-section-label">Areas of Expertise</p>
            <h2 id="expertise-heading" className="about-section-title">
              What I Bring to the Table
            </h2>
            <p className="about-expertise-desc">
              A rare combination of deep classroom experience, research training,
              technical skill, and strategic thinking.
            </p>
          </div>

          <div className="about-expertise-grid">
            {expertise.map((item) => (
              <div key={item.title} className="about-expertise-card">
                <div className="about-expertise-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="about-expertise-card-title">{item.title}</h3>
                <p className="about-expertise-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section className="about-philosophy section-lg" aria-labelledby="philosophy-heading">
        <div className="container">
          <div className="about-philosophy-header">
            <p className="about-section-label">What I Believe</p>
            <h2 id="philosophy-heading" className="about-section-title about-section-title--light">
              Guiding Principles
            </h2>
          </div>
          <div className="about-philosophy-grid">
            {philosophy.map((item, index) => (
              <div key={index} className="about-philosophy-card">
                <span className="about-philosophy-number">{String(index + 1).padStart(2, "0")}</span>
                <blockquote className="about-philosophy-statement">
                  &ldquo;{item.statement}&rdquo;
                </blockquote>
                <p className="about-philosophy-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social Proof ─── */}
      <section className="about-proof section" aria-labelledby="proof-heading">
        <div className="container">
          <div className="about-proof-header">
            <p className="about-section-label">What Others Say</p>
            <h2 id="proof-heading" className="about-section-title">
              Results That Speak
            </h2>
          </div>
          <div className="about-proof-grid">
            <div className="about-proof-card">
              <div className="about-proof-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="about-proof-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="about-proof-quote">
                &ldquo;Michelle helped us implement a reading intervention program that
                moved 80% of our students up a level in one semester.&rdquo;
              </p>
              <p className="about-proof-author">— K-5 Literacy Coach, Maryland</p>
            </div>
            <div className="about-proof-card">
              <div className="about-proof-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="about-proof-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="about-proof-quote">
                &ldquo;Her lessons saved me 5+ hours per week. The materials are
                thoughtful, rigorous, and my students love them.&rdquo;
              </p>
              <p className="about-proof-author">— 3rd Grade Teacher, Texas</p>
            </div>
            <div className="about-proof-card">
              <div className="about-proof-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="about-proof-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="about-proof-quote">
                &ldquo;As a parent, I finally found resources that actually help my
                child practice skills without frustrating either of us.&rdquo;
              </p>
              <p className="about-proof-author">— Homeschool Parent, California</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Conversion Fork ─── */}
      <section className="about-fork section" aria-labelledby="fork-heading">
        <div className="container">
          <h2 id="fork-heading" className="sr-only">Next Steps</h2>
          <div className="about-fork-grid">
            {/* Consulting Path */}
            <div className="about-fork-card about-fork-card--consulting">
              <div className="about-fork-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="about-fork-title">Need Personalized Support?</h3>
              <p className="about-fork-desc">
                Whether you&apos;re a school implementing new systems, or an educator
                building a plan — let&apos;s talk strategy.
              </p>
              <Link href="/consulting" className="about-fork-btn about-fork-btn--primary">
                Explore Consulting
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Lessons Path */}
            <div className="about-fork-card about-fork-card--lessons">
              <div className="about-fork-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="about-fork-title">Ready-to-Use Lessons</h3>
              <p className="about-fork-desc">
                Standards-aligned curriculum for educators and families. Download,
                teach, and reclaim your time.
              </p>
              <Link href="/resources/lessons" className="about-fork-btn about-fork-btn--secondary">
                Browse Lesson Library
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
