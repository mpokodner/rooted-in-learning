import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════
          HERO SECTION — Identity-First Positioning
          Unified message: Teaching Leverage
      ═══════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-bg-decor" aria-hidden="true">
          <div className="hero-bg-circle hero-bg-circle--1" />
          <div className="hero-bg-circle hero-bg-circle--2" />
        </div>

        <div className="container hero-container">
          {/* Innovation Signal Badge */}
          <div className="hero-badge animate-fade-up">
            <svg
              className="hero-badge-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="hero-badge-text">
              Teaching is evolving &mdash; we build the tools that evolve with
              it
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="hero-heading animate-fade-up animate-delay-1">
            Reclaim Your Prep Time.
            <br />
            <span className="hero-heading-accent">Elevate Your Teaching.</span>
          </h1>

          {/* SUB-HEADLINE */}
          <p className="hero-subheadline animate-fade-up animate-delay-2">
            Ready-to-teach lessons, AI-powered classroom tools, and
            research-backed strategies designed for educators and families.
          </p>

          {/* PRIMARY CTA */}
          <div className="hero-primary-cta animate-fade-up animate-delay-3">
            <Link href="/resources/lessons" className="hero-cta-btn">
              Browse Lesson Library
              <svg
                className="hero-cta-arrow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* SECONDARY CTA ROW */}
          <div className="hero-secondary-row animate-fade-up animate-delay-3">
            <Link href="/consulting" className="hero-secondary-btn">
              <svg
                className="hero-secondary-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Explore AI Tools
            </Link>
            <Link href="/blog" className="hero-secondary-btn">
              <svg
                className="hero-secondary-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Read Teaching Insights
            </Link>
            <Link href="/resources/lessons" className="hero-secondary-btn">
              <svg
                className="hero-secondary-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              Get Free Resources
            </Link>
          </div>

          {/* TRUST / SOCIAL PROOF BAR */}
          <div className="hero-trust-bar animate-fade-up animate-delay-4">
            <div className="hero-trust-item">
              <span className="hero-trust-number">5,000+</span>
              <span className="hero-trust-label">Educators &amp; Families</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-number">5+ hrs</span>
              <span className="hero-trust-label">Saved Weekly</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <span className="hero-trust-number">15 yrs</span>
              <span className="hero-trust-label">Classroom Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          AUDIENCE PATHWAY SELECTOR
          Educators → Lessons · Schools → Consulting · Families → Lessons
      ═══════════════════════════════════════════ */}
      <section
        className="audience-pathway-section"
        aria-labelledby="audience-heading"
      >
        <div className="container">
          <div className="audience-pathway-header">
            <p className="audience-pathway-label">Find Your Path</p>
            <h2
              id="audience-heading"
              className="text-h2 audience-pathway-title"
            >
              Who Are You?
            </h2>
            <p className="audience-pathway-desc">
              We serve educators, schools, and families. Select your path to
              find the right resources.
            </p>
          </div>

          <div className="audience-pathway-grid">
            {/* Educators */}
            <Link href="/resources/lessons" className="audience-card group">
              <div className="audience-card-icon audience-card-icon--educator">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">I&apos;m an Educator</h3>
              <p className="audience-card-desc">
                Ready-to-teach lessons, time-saving tools, and strategies that
                actually work in the classroom.
              </p>
              <span className="audience-card-cta">
                Browse Lessons
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Schools & Districts */}
            <Link href="/consulting" className="audience-card group">
              <div className="audience-card-icon audience-card-icon--school">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">I&apos;m a School Leader</h3>
              <p className="audience-card-desc">
                Strategic consulting for literacy programs, EdTech integration,
                AI implementation, and curriculum design.
              </p>
              <span className="audience-card-cta audience-card-cta--school">
                Explore Consulting
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Families */}
            <Link href="/resources/lessons" className="audience-card group">
              <div className="audience-card-icon audience-card-icon--family">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">I&apos;m a Parent</h3>
              <p className="audience-card-desc">
                Help your child build confidence, close skill gaps, and get
                extra practice beyond homework.
              </p>
              <span className="audience-card-cta">
                Find Resources
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PATHWAY CARDS — Self-Selection
          Ready Lessons • AI Tools • Insights
      ═══════════════════════════════════════════ */}
      <section className="pathway-section">
        <div className="container">
          <div className="pathway-grid">
            {/* Ready Lessons */}
            <Link href="/resources/lessons" className="pathway-card group">
              <div className="pathway-icon-wrapper">
                <svg
                  className="pathway-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="pathway-title">Ready Lessons</h3>
              <p className="pathway-desc">
                Standards-aligned, ready-to-teach curriculum for K-8 classrooms
                and homeschool families.
              </p>
              <span className="pathway-cta">
                Explore Library
                <svg
                  className="pathway-cta-arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* AI Teaching Tools */}
            <Link href="/consulting" className="pathway-card group">
              <div className="pathway-icon-wrapper pathway-icon-wrapper--ai">
                <svg
                  className="pathway-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="pathway-title">AI Teaching Tools</h3>
              <p className="pathway-desc">
                AI-powered classroom tools designed to give you cognitive
                leverage and teaching superpowers.
              </p>
              <span className="pathway-cta">
                See the Vision
                <svg
                  className="pathway-cta-arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Strategies & Insights */}
            <Link href="/blog" className="pathway-card group">
              <div className="pathway-icon-wrapper pathway-icon-wrapper--blog">
                <svg
                  className="pathway-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h3 className="pathway-title">Strategies &amp; Insights</h3>
              <p className="pathway-desc">
                Research-backed teaching strategies, tech walkthroughs, and
                pedagogy insights for modern educators.
              </p>
              <span className="pathway-cta">
                Visit Blog
                <svg
                  className="pathway-cta-arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RESOURCES SECTION — Teaching Toolkit
          Lessons • Teacher Tools • The Favorites
      ═══════════════════════════════════════════ */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-header">
            <p className="resources-header-label">Your Teaching Toolkit</p>
            <h2 className="text-h2 resources-header-title">
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="resources-header-desc">
              Curriculum, tech training, and curated gear &mdash; all in one
              place. Built by a 15-year veteran educator who gets it.
            </p>
          </div>

          <div className="resources-grid">
            {/* Lessons */}
            <div className="resource-card group">
              <div className="resource-icon-wrapper">
                <svg
                  className="resource-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="resource-title">Lessons</h3>
              <p className="resource-desc">
                Standards-aligned, ready-to-use curriculum and activities for
                K-8 classrooms and homeschool families. Just download and teach.
              </p>
              <Link href="/resources/lessons" className="resource-link">
                Browse Lessons
                <svg
                  className="resource-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Teacher Tools */}
            <div className="resource-card group">
              <div className="resource-icon-wrapper">
                <svg
                  className="resource-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="resource-title">Teacher Tools</h3>
              <p className="resource-desc">
                Step-by-step tech training and tutorials so you can integrate
                tools with confidence &mdash; no IT degree required.
              </p>
              <Link href="/resources/teacher-tools" className="resource-link">
                Explore Tools
                <svg
                  className="resource-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* The Favorites */}
            <div className="resource-card group">
              <div className="resource-icon-wrapper">
                <svg
                  className="resource-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="resource-title">The Favorites</h3>
              <p className="resource-desc">
                My personally curated must-haves &mdash; the tools, books, and
                gear I actually use and recommend to every educator.
              </p>
              <Link href="/resources/favorites" className="resource-link">
                See My Picks
                <svg
                  className="resource-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER CAPTURE — Mid-Page Gated Resource
          Moved from hero for higher conversion
      ═══════════════════════════════════════════ */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-card-content">
              <div className="newsletter-icon-wrap">
                <svg
                  className="newsletter-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <span className="newsletter-free-badge">Free Download</span>
              <h3 className="newsletter-card-title">
                The Weekly Planner Template
              </h3>
              <p className="newsletter-card-desc">
                The exact planning template I used to cut my prep time in half.
                Plus weekly teaching tips, strategies, and free resources
                delivered to your inbox.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                />
                <button className="btn btn-lg btn-secondary newsletter-submit-btn">
                  Get My Free Planner
                  <svg
                    className="newsletter-submit-arrow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
              <p className="newsletter-disclaimer">
                Join 5,000+ educators. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONSULTING SECTION
      ═══════════════════════════════════════════ */}
      <section className="consulting-section">
        <div className="container">
          <div className="consulting-grid">
            <div className="consulting-content">
              <p className="consulting-label">1-on-1 Support</p>
              <h2 className="text-h2 consulting-title">
                Consulting &amp; Coaching
              </h2>
              <p className="consulting-desc">
                Need personalized support? Whether you&apos;re a school rolling
                out new tech, a homeschool family building curriculum, or a
                teacher starting your side hustle &mdash; let&apos;s build a
                plan together.
              </p>
            </div>

            <div className="consulting-cta-area">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <div className="testimonial-stars-icons">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="testimonial-star"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="testimonial-rating">5.0 average</span>
                </div>
                <p className="testimonial-quote">
                  &ldquo;Michelle helped us implement a reading intervention
                  program that moved 80% of our students up a level in one
                  semester.&rdquo;
                </p>
                <p className="testimonial-author">— K-5 Literacy Coach, MD</p>
              </div>

              <Link href="/consulting" className="consulting-cta-btn">
                <svg
                  className="consulting-cta-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOG SECTION
      ═══════════════════════════════════════════ */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <div className="blog-header-content">
              <p className="blog-header-label">From the Blog</p>
              <h2 className="text-h3 blog-header-title">
                Teach Smarter, Not Harder
              </h2>
              <p className="blog-header-desc">
                Practical tips, tech walkthroughs, and pedagogy insights for
                modern educators.
              </p>
            </div>
            <Link href="/blog" className="blog-view-all">
              View all articles
              <svg
                className="blog-view-all-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          {/* Featured Article — Full Width */}
          <div className="featured-article">
            <div className="featured-article-visual">
              <div className="featured-article-mockup">
                <div className="mockup-dots">
                  <div className="mockup-dot mockup-dot--1" />
                  <div className="mockup-dot mockup-dot--2" />
                  <div className="mockup-dot mockup-dot--3" />
                </div>
                <div className="mockup-lines">
                  <div className="mockup-line mockup-line--full" />
                  <div className="mockup-line mockup-line--80" />
                  <div className="mockup-line mockup-line--60" />
                </div>
              </div>
            </div>
            <div className="featured-article-content">
              <div className="featured-article-meta">
                <span className="featured-article-category">Teacher Tools</span>
                <span>&bull;</span>
                <span>Latest</span>
              </div>
              <h3 className="featured-article-title">
                5 Free Tools That Will Transform Your Lesson Planning
              </h3>
              <p className="featured-article-excerpt">
                Stop spending your weekends on prep. These five tools automate
                the busywork so you can focus on what matters &mdash; your
                students.
              </p>
              <Link href="/blog" className="featured-article-link">
                Read Article
                <svg
                  className="featured-article-link-arrow"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOCIAL CONNECTIONS
      ═══════════════════════════════════════════ */}
      <section className="social-section">
        <div className="container">
          <div className="social-section-header">
            <p className="social-section-label">Let&apos;s Connect</p>
            <h2 className="text-h2 social-section-title">
              Follow Along for Daily Inspo
            </h2>
            <p className="social-section-desc">
              Quick tips, behind-the-scenes, and real talk about education
              &mdash; find me wherever you scroll.
            </p>
          </div>

          <div className="social-grid">
            {/* YouTube */}
            <a
              href="https://youtube.com/@therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group"
            >
              <div className="social-icon-wrapper social-icon-wrapper--youtube">
                <svg
                  className="social-brand-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#FF0000" }}
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="social-card-title">YouTube</h3>
              <p className="social-card-desc">Tutorials &amp; deep dives</p>
              <span className="social-card-link social-card-link--youtube">
                Subscribe
                <svg
                  className="social-card-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group"
            >
              <div className="social-icon-wrapper social-icon-wrapper--tiktok">
                <svg
                  className="social-brand-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#010101" }}
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </div>
              <h3 className="social-card-title">TikTok</h3>
              <p className="social-card-desc">Quick tips &amp; real talk</p>
              <span className="social-card-link social-card-link--tiktok">
                Follow
                <svg
                  className="social-card-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group"
            >
              <div className="social-icon-wrapper social-icon-wrapper--instagram">
                <svg
                  className="social-brand-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#E4405F" }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="social-card-title">Instagram</h3>
              <p className="social-card-desc">Behind the scenes</p>
              <span className="social-card-link social-card-link--instagram">
                Follow
                <svg
                  className="social-card-link-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
