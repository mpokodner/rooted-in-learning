import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import "./home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-bg-decor" aria-hidden="true">
          <div className="hero-bg-circle hero-bg-circle--1" />
          <div className="hero-bg-circle hero-bg-circle--2" />
        </div>

        <div className="container hero-container">
          <div className="hero-copy">
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

            <h1 className="hero-heading animate-fade-up animate-delay-1">
              Research-Based Learning Support,{" "}
              <span className="hero-heading-accent">
                Teacher Tools, and Digital Solutions for Schools &amp; Families
              </span>
            </h1>

            <p className="hero-subheadline animate-fade-up animate-delay-2">
              Helping educators and parents support struggling learners using
              science-of-reading practices, multilingual strategies, and modern
              classroom technology.
            </p>

            <div className="hero-primary-cta animate-fade-up animate-delay-3">
              <Link href="/products/" className="hero-cta-btn">
                Explore Tools &amp; Lessons
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

            <div className="hero-secondary-row animate-fade-up animate-delay-3">
              <Link href="/products/assessalign/" className="hero-secondary-btn">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                See AssessAlign
              </Link>
              <Link href="/services/consulting" className="hero-secondary-btn">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="hero-aside animate-fade-up animate-delay-4">
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <span className="hero-trust-number">K–8</span>
                <span className="hero-trust-label">Focused Resources</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-number">5+ hrs</span>
                <span className="hero-trust-label">Saved Weekly</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-number">12+ yrs</span>
                <span className="hero-trust-label">Classroom Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — AUDIENCE SELECTOR
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
              How Can We Help You Today?
            </h2>
            <p className="audience-pathway-desc">
              We serve educators, schools, and families. Select your path to
              find the right resources.
            </p>
          </div>

          <div className="audience-pathway-grid">
            <Link href="/products/lessons/" className="audience-card group">
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
              <h3 className="audience-card-title">I&apos;m a Teacher</h3>
              <p className="audience-card-desc">
                Ready-to-teach lessons, time-saving tools, and strategies that
                actually work in the classroom.
              </p>
              <span className="audience-card-cta">
                Browse Lessons &amp; Tools
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

            <Link href="/products/lessons/" className="audience-card group">
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

            <Link href="/products/assessalign/" className="audience-card group">
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
              <h3 className="audience-card-title">
                I&apos;m a School or District Leader
              </h3>
              <p className="audience-card-desc">
                Strategic consulting for literacy programs, EdTech integration,
                AI implementation, and curriculum design.
              </p>
              <span className="audience-card-cta audience-card-cta--school">
                Explore Solutions
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
          SECTION 3 — FEATURED SOLUTIONS
      ═══════════════════════════════════════════ */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-header">
            <p className="resources-header-label">Featured Solutions</p>
            <h2 className="text-h2 resources-header-title">
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="resources-header-desc">
              Assessment tools, tech training, and ready-to-teach curriculum
              &mdash; all in one place. Built by a 12+ year veteran educator who
              gets it.
            </p>
          </div>

          <div className="resources-grid">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="resource-title">AssessAlign</h3>
              <p className="resource-desc">
                Standards-based assessment tools that align to your curriculum
                and give you actionable data on student progress.
              </p>
              <Link href="/products/assessalign/" className="resource-link">
                Standards-Based Assessment
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
                Step-by-step tech tutorials so you can integrate classroom tools
                with confidence &mdash; no IT degree required.
              </p>
              <Link href="/products/teacher-tools/" className="resource-link">
                Tech Tutorials
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
              <h3 className="resource-title">Lesson Packs</h3>
              <p className="resource-desc">
                Standards-aligned, ready-to-use curriculum and activities for
                K-8 classrooms and homeschool families. Just download and teach.
              </p>
              <Link href="/products/lessons/" className="resource-link">
                Ready-to-Teach Curriculum
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
          SECTION 4 — AUTHORITY / TRUST
      ═══════════════════════════════════════════ */}
      <section className="consulting-section">
        <div className="container">
          <div className="consulting-grid">
            <div className="consulting-content">
              <p className="consulting-label">Built by an Educator Who Codes</p>
              <h2 className="text-h2 consulting-title">
                12+ Years of Classroom Experience
              </h2>
              <p className="consulting-desc">
                As a reading interventionist, curriculum designer, and EdTech
                developer, I&apos;ve spent over a decade bridging the gap
                between research-based literacy instruction and modern
                technology. Every tool, lesson, and resource on this site is
                built from real classroom experience &mdash; not theory.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginTop: "1.5rem",
                }}
              >
                <Link href="/about#projects" className="consulting-cta-btn">
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  View Portfolio
                </Link>
                <Link href="/about/" className="consulting-cta-btn">
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
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  About Me
                </Link>
                <Link href="/services/consulting" className="consulting-cta-btn">
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
                  Work With Me
                </Link>
              </div>
            </div>

            <div className="consulting-cta-area">
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  <div className="testimonial-stars-icons">
                    <svg
                      className="testimonial-star"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <span className="testimonial-rating">Spring 2026</span>
                </div>
                <p className="testimonial-quote">
                  Trusted by educators across Maryland and beyond. Launching
                  Spring 2026.
                </p>
                <p className="testimonial-author">— The Rooted Learner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FREE RESOURCES / BLOG
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
                <span className="featured-article-category">Coming Soon</span>
                <span>&bull;</span>
                <span>Spring 2026</span>
              </div>
              <h3 className="featured-article-title">
                Research-Backed Articles for Modern Educators
              </h3>
              <p className="featured-article-excerpt">
                Practical strategies grounded in research. Science of Reading,
                multilingual learner support, AI in education, and the systems
                that make great teaching sustainable. Articles launching soon.
              </p>
              <Link href="/blog" className="featured-article-link">
                Visit the Blog
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
          SECTION 6 — LEAD MAGNET / NEWSLETTER
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
                Free Literacy Intervention Toolkit
              </h3>
              <p className="newsletter-card-desc">
                Download our free literacy intervention toolkit &mdash; packed
                with strategies, templates, and progress monitoring tools. Plus
                get weekly teaching tips delivered to your inbox.
              </p>
              <NewsletterForm />
              <p className="newsletter-disclaimer">
                Join our community of educators. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="social-section">
        <div className="container">
          <div className="social-section-header">
            <p className="social-section-label">Take the Next Step</p>
            <h2 className="text-h2 social-section-title">
              Ready to Support Your Learners?
            </h2>
            <p className="social-section-desc">
              Whether you&apos;re a teacher, parent, or school leader &mdash; we
              have tools built for you.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Link href="/products/assessalign/" className="hero-cta-btn">
              View AssessAlign
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
            <Link href="/services/consulting" className="consulting-cta-btn">
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
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
