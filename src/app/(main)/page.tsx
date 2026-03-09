import Image from "next/image";
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
              <span className="hero-heading-accent">
                Through Rooted Innovation
              </span>
            </h1>

            <p className="hero-subheadline animate-fade-up animate-delay-2">
              Discover AI-powered tools and curriculum solutions designed
              specifically for the K-8 classroom. Empower your instruction and
              reclaim your time.
            </p>

            <div className="hero-cta-row animate-fade-up animate-delay-3">
              <Link
                href="/services"
                className="hero-cta-btn hero-cta-btn--terracotta"
              >
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
            <Image
              src="/hero-side.png"
              alt="Education meets technology — classroom scenes, EdTech icons, and a laptop displaying The Rooted Learner"
              width={600}
              height={700}
              className="hero-side-image"
              priority
            />
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
          SECTION 3A — THE PROBLEM (Stats)
      ═══════════════════════════════════════════ */}
      <section className="problem-section" aria-labelledby="problem-heading">
        <div className="container">
          <h2 id="problem-heading" className="problem-heading">
            Teachers Are Overwhelmed.
            <br />
            Students Are Underserved.
          </h2>

          <div className="problem-stats-grid">
            <div className="problem-stat-card">
              <span className="problem-stat-number">44%</span>
              <span className="problem-stat-label">
                Teacher Turnover Within 5 Years
              </span>
            </div>
            <div className="problem-stat-card">
              <span className="problem-stat-number">65%</span>
              <span className="problem-stat-label">
                Students Below Reading Proficiency
              </span>
            </div>
            <div className="problem-stat-card">
              <span className="problem-stat-number">11hr</span>
              <span className="problem-stat-label">
                Avg. Weekly Unpaid Teacher Overtime
              </span>
            </div>
            <div className="problem-stat-card">
              <span className="problem-stat-number">$479</span>
              <span className="problem-stat-label">
                Spent Out-of-Pocket Per Teacher/Yr
              </span>
            </div>
          </div>

          <p className="problem-paragraph">
            Current EdTech solutions are built by technologists who&apos;ve
            never stood in front of a classroom. They add complexity instead of
            reducing it. Teachers need{" "}
            <Link href="/tools" className="problem-inline-link">
              tools
            </Link>{" "}
            designed <em>by</em> educators, <em>for</em> educators &mdash;
            grounded in the{" "}
            <Link href="/shop" className="problem-inline-link">
              Science of Reading
            </Link>{" "}
            and proven pedagogy.
          </p>

          <div className="problem-cta-row">
            <Link href="/services" className="trust-btn trust-btn--primary">
              See How We Help
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
            <Link href="/shop" className="trust-btn trust-btn--outline">
              Browse Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3C — WHY US / CREDENTIALS
      ═══════════════════════════════════════════ */}
      <section className="whyus-section" aria-labelledby="whyus-heading">
        <div className="container">
          <p className="whyus-eyebrow">Why Us</p>
          <h2 id="whyus-heading" className="whyus-heading">
            Built by a Teacher Who Codes
          </h2>

          <div className="whyus-grid">
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                🏫
              </span>
              <p className="whyus-credential-text">
                12+ Years K&ndash;8 Classroom Experience
              </p>
            </div>
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                📖
              </span>
              <p className="whyus-credential-text">
                Science of Reading &amp; SIPPS Certified
              </p>
            </div>
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                🌍
              </span>
              <p className="whyus-credential-text">
                WIDA &amp; Multilingual Learner Expert
              </p>
            </div>
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                💻
              </span>
              <p className="whyus-credential-text">
                Full-Stack Developer (React, Next.js, Supabase)
              </p>
            </div>
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                🤖
              </span>
              <p className="whyus-credential-text">
                AI/ML &mdash; RAG Pipelines, LangChain, Vector DBs
              </p>
            </div>
            <div className="whyus-credential">
              <span className="whyus-credential-icon" aria-hidden="true">
                🎓
              </span>
              <p className="whyus-credential-text">
                MA Curriculum &amp; Instruction + Digital Marketing Certificate
              </p>
            </div>
          </div>

          <blockquote className="whyus-quote">
            &ldquo;Most EdTech is built for teachers. We build from inside the
            profession &mdash; because the best tools come from those
            who&apos;ve lived the work.&rdquo;
          </blockquote>

          <div className="whyus-cta-row">
            <Link href="/about" className="trust-btn trust-btn--primary">
              Meet the Founder
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
            <Link href="/tools" className="trust-btn trust-btn--outline-light">
              Try AssessAlign
            </Link>
            <Link
              href="/services"
              className="trust-btn trust-btn--outline-light"
            >
              View Services
            </Link>
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
    </div>
  );
}
