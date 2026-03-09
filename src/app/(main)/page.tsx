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
              Making Teaching Easier,{" "}
              <span className="hero-heading-accent">Not Harder</span>
            </h1>

            <p className="hero-subheadline animate-fade-up animate-delay-2">
              Discover AI-powered tools and curriculum solutions designed
              specifically for the K-8 classroom. Empower your students and
              reclaim your time.
            </p>

            <div className="hero-cta-row animate-fade-up animate-delay-3">
              <Link href="/shop" className="hero-cta-btn hero-cta-btn--earth">
                Explore the Shop
              </Link>
              <Link href="/services" className="hero-cta-btn hero-cta-btn--dark">
                Work With Me
              </Link>
            </div>
          </div>

          <div className="hero-aside animate-fade-up animate-delay-4">
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <span className="hero-trust-number">12+</span>
                <span className="hero-trust-label">Years K-8 Experience</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-number">MA</span>
                <span className="hero-trust-label">Curriculum &amp; Instruction</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <span className="hero-trust-number">SoR</span>
                <span className="hero-trust-label">Certified Practitioner</span>
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
            <Link href="/shop" className="audience-card group">
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">Shop</h3>
              <p className="audience-card-desc">
                Digital Curriculum &amp; Toolkits designed to simplify your
                lesson planning and engage every learner.
              </p>
              <span className="audience-card-cta">
                Browse Resources
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

            <Link href="/learn" className="audience-card group">
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
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">Learn</h3>
              <p className="audience-card-desc">
                AI for Educators. Master the latest technology to automate
                administrative tasks and enhance creativity.
              </p>
              <span className="audience-card-cta">
                Start Learning
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

            <Link href="/services" className="audience-card group">
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
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-6.274-.243c-2.17 0-4.318.119-6.274.243-1.131.094-1.976 1.057-1.976 2.192V16.5A2.25 2.25 0 006 18.75h.75m6-12h3.75m-3.75 3h3.75m-3.75 3h3.75M6.75 6.75h.008v.008H6.75V6.75zm0 3h.008v.008H6.75V9.75zm0 3h.008v.008H6.75v-.008zm0 3h.008v.008H6.75v-.008z"
                  />
                </svg>
              </div>
              <h3 className="audience-card-title">Services</h3>
              <p className="audience-card-desc">
                Professional Development tailored for schools and districts
                seeking modern pedagogical strategies.
              </p>
              <span className="audience-card-cta audience-card-cta--school">
                View Services
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
              <Link href="/tools" className="resource-link">
                AI-Powered Assessment
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
              <h3 className="resource-title">Shop</h3>
              <p className="resource-desc">
                Standards-aligned, ready-to-use curriculum, lesson packs, and
                classroom tools. Just download and teach.
              </p>
              <Link href="/shop" className="resource-link">
                Browse Lessons &amp; Tools
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
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h3 className="resource-title">Services</h3>
              <p className="resource-desc">
                Strategic consulting for schools, districts, and educators.
                Literacy systems, EdTech integration, and AI implementation.
              </p>
              <Link href="/services" className="resource-link">
                Book a Discovery Call
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
                <Link href="/about" className="consulting-cta-btn">
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
                <Link href="/services" className="consulting-cta-btn">
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
                  Services
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
            <Link href="/learn/blog" className="blog-view-all">
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
              <Link href="/learn/blog" className="featured-article-link">
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
      <section id="newsletter" className="newsletter-section">
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
            <Link href="/tools" className="hero-cta-btn">
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
            <Link href="/services#discovery" className="consulting-cta-btn">
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
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
