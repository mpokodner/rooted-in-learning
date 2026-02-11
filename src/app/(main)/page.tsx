import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <div className="bg-[var(--white)]">
      {/* ═══════════════════════════════════════════
          HERO SECTION — Triple-Threat Layout
          Problem/Solution • Dual CTA • Social Proof
      ═══════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              {/* Badge — Awareness Trigger */}
              <div className="hero-badge">
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
                  For Educators Who Refuse to Settle
                </span>
              </div>

              {/* HEADLINE */}
              <h1 className="hero-heading text-[var(--text-dark)] mb-6">
                Master Your
                <br />
                <span className="text-[var(--white)]">Classroom Tech</span>
                <br />
                &amp; Reclaim Your
                <br />
                <span className="text-[var(--earth-dark)]">Prep Time</span>
              </h1>

              {/* SUB-HEADLINE */}
              <p className="hero-subheadline">
                Ready-to-use curriculum, tech-driven training, and curated gear
                to help you teach smarter, not harder &mdash; whether you&apos;re
                in a classroom or at the kitchen table.
              </p>

              {/* DUAL CTA */}
              <div className="hero-cta-group">
                <Link
                  href="/resources/lessons"
                  className="btn btn-lg btn-primary rounded-full"
                >
                  Shop the Lesson Library
                  <svg
                    className="w-4 h-4"
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

                <Link
                  href="/blog"
                  className="btn btn-lg btn-secondary rounded-full"
                >
                  Read the Latest Tips
                </Link>
              </div>

              {/* Social Proof */}
              <div className="hero-social-proof">
                <div className="hero-avatars">
                  <div className="hero-avatar bg-[var(--earth-light)]" />
                  <div className="hero-avatar bg-[var(--terracotta)]" />
                  <div className="hero-avatar bg-[var(--earth)]" />
                </div>
                <p className="hero-social-text">
                  Trusted by <strong>5,000+</strong> educators &amp; families
                </p>
              </div>
            </div>

            {/* Right — Hero Visual */}
            <div className="hero-visual">
              {/* Main visual block */}
              <div className="hero-visual-main">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-[var(--white)] rounded-full" />
                  <div className="absolute top-14 left-14 w-24 h-24 border border-[var(--white)] rounded-full" />
                  <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-[var(--white)] rounded-lg rotate-12" />
                </div>

                {/* Central content card mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-white-95 rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-xl)] max-w-[240px] w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--earth)] flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-[var(--white)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[var(--text-xs)] font-bold text-[var(--earth)] uppercase tracking-[var(--tracking-wide)]">
                          Lesson Ready
                        </p>
                        <p className="text-[10px] text-[var(--text-muted)]">
                          Standards-aligned
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[var(--border-beige)] rounded-full w-full" />
                      <div className="h-2 bg-[var(--border-beige)] rounded-full w-4/5" />
                      <div className="h-2 bg-terracotta-30 rounded-full w-3/5" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">
                        ELA
                      </span>
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">
                        K-8
                      </span>
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">
                        Digital
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="hero-floating-card">
                <div className="hero-floating-card-inner">
                  <div className="hero-floating-icon">
                    <svg
                      className="w-5 h-5 text-[var(--earth-light)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="hero-floating-title">Save 5+ Hours</h4>
                    <p className="hero-floating-desc">
                      Per week on lesson prep with our{" "}
                      <span className="text-[var(--earth-light)] font-semibold">
                        ready-to-go
                      </span>{" "}
                      resources
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating top-right badge */}
              <div className="hero-badge-free absolute -top-3 -right-3 md:-top-4 md:-right-4">
                <span className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-bold leading-none">
                  Free
                </span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[var(--tracking-wide)] font-semibold opacity-90">
                  Resources
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter Banner */}
          <div className="hero-newsletter">
            <div className="hero-newsletter-inner">
              <div className="hero-newsletter-info">
                <span className="hero-newsletter-label">Weekly Newsletter</span>
                <span className="hero-newsletter-text">Join 5,000+ Educators</span>
              </div>
              <div className="hero-newsletter-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input flex-1 sm:w-44"
                />
                <button className="btn btn-md btn-primary rounded-[var(--radius-md)]">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RESOURCES SECTION
          Lessons • Tech Tips • The Favorites
      ═══════════════════════════════════════════ */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-header">
            <p className="resources-header-label">Your Teaching Toolkit</p>
            <h2 className="text-h2 text-[var(--earth-light)] resources-header-title">
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
                Standards-aligned, ready-to-use curriculum and activities for K-8
                classrooms and homeschool families. Just download and teach.
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

            {/* Tech Tips */}
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
              <h3 className="resource-title">Tech Tips</h3>
              <p className="resource-desc">
                Step-by-step tech training and tutorials so you can integrate
                tools with confidence &mdash; no IT degree required.
              </p>
              <Link href="/resources/tech-tips" className="resource-link">
                Explore Tips
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
                teacher starting your side hustle &mdash; let&apos;s build a plan
                together.
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
              <h2 className="text-h3 md:text-h2 text-[var(--text-dark)]">
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
                className="w-4 h-4"
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

          <div className="blog-grid">
            {/* Featured Article */}
            <div className="featured-article">
              <div className="featured-article-visual">
                <div className="featured-article-mockup">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-1 bg-[var(--earth)] rounded-full" />
                    <div className="w-4 h-1 bg-[var(--earth-light)] rounded-full" />
                    <div className="w-3 h-1 bg-[var(--border-beige)] rounded-full" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-full" />
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-4/5" />
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-3/5" />
                  </div>
                </div>
              </div>
              <div className="featured-article-content">
                <div className="featured-article-meta">
                  <span className="featured-article-category">Tech Tips</span>
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
                    className="w-4 h-4"
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

            {/* Freebie / Lead Magnet Card */}
            <div className="freebie-card">
              <div className="freebie-icon-wrapper">
                <svg
                  className="freebie-icon"
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
              <span className="freebie-badge">Free Download</span>
              <h4 className="freebie-title">The Weekly Planner Template</h4>
              <p className="freebie-desc">
                The exact planning template I used to cut my prep time in half.
                Yours free &mdash; just enter your email.
              </p>
              <div className="freebie-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input text-center"
                />
                <button className="btn btn-md btn-primary w-full rounded-[var(--radius-md)]">
                  Grab My Freebie
                  <svg
                    className="w-4 h-4"
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
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              Let&apos;s Connect
            </p>
            <h2 className="text-h2 text-[var(--text-dark)] mb-4">
              Follow Along for Daily Inspo
            </h2>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] leading-[var(--leading-relaxed)]">
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
                  className="w-7 h-7 text-[#FF0000]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="social-card-title">YouTube</h3>
              <p className="social-card-desc">Tutorials &amp; deep dives</p>
              <span className="social-card-link social-card-link--youtube">
                Subscribe
                <svg
                  className="w-4 h-4"
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
                  className="w-6 h-6 text-[#010101]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </div>
              <h3 className="social-card-title">TikTok</h3>
              <p className="social-card-desc">Quick tips &amp; real talk</p>
              <span className="social-card-link social-card-link--tiktok">
                Follow
                <svg
                  className="w-4 h-4"
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
                  className="w-6 h-6 text-[#E4405F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="social-card-title">Instagram</h3>
              <p className="social-card-desc">Behind the scenes</p>
              <span className="social-card-link social-card-link--instagram">
                Follow
                <svg
                  className="w-4 h-4"
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
