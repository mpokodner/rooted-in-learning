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
              <Link href="/services" className="hero-cta-btn hero-cta-btn--terracotta">
                Work With Me
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
              <Link href="/shop" className="hero-cta-btn hero-cta-btn--outline">
                Browse Lessons
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
          SECTION 3 — AUTHORITY / TRUST
      ═══════════════════════════════════════════ */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-inner">
            <p className="trust-eyebrow">Built by an Educator Who Codes</p>
            <h2 className="text-h2 trust-title">
              12+ Years of Classroom Experience
            </h2>
            <p className="trust-desc">
              As a reading interventionist, curriculum designer, and EdTech
              developer, I&apos;ve spent over a decade bridging the gap between
              research-based literacy instruction and modern technology. Every
              tool, lesson, and resource on this site is built from real
              classroom experience &mdash; not theory.
            </p>

            <div className="trust-credentials">
              <div className="trust-credential">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <div>
                  <span className="trust-credential-value">MA</span>
                  <span className="trust-credential-label">Curriculum &amp; Instruction</span>
                </div>
              </div>
              <div className="trust-credential">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <div>
                  <span className="trust-credential-value">SoR</span>
                  <span className="trust-credential-label">Certified Practitioner</span>
                </div>
              </div>
              <div className="trust-credential">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <div>
                  <span className="trust-credential-value">Full-Stack</span>
                  <span className="trust-credential-label">EdTech Developer</span>
                </div>
              </div>
            </div>

            <div className="trust-actions">
              <Link href="/about" className="trust-btn trust-btn--primary">
                About Me
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about#projects" className="trust-btn trust-btn--outline">
                View Portfolio
              </Link>
              <Link href="/services" className="trust-btn trust-btn--outline">
                Services
              </Link>
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

          <Link href="/learn/blog" className="featured-article">
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
              <span className="featured-article-link">
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
              </span>
            </div>
          </Link>
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
