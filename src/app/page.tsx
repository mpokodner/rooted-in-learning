import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--white)]">
      <Header />

      {/* ═══════════════════════════════════════════
          HERO SECTION — Triple-Threat Layout
          Problem/Solution • Dual CTA • Social Proof
      ═══════════════════════════════════════════ */}
      <section className="bg-[var(--earth)] px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Badge — Awareness Trigger */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--white)] rounded-full mb-8">
                <svg className="w-4 h-4 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[var(--text-xs)] font-semibold text-[var(--text-black)] uppercase tracking-[var(--tracking-widest)]">
                  For Educators Who Refuse to Settle
                </span>
              </div>

              {/* 1. THE HEADLINE — Awareness (Result-Driven) */}
              <h1 className="hero-heading text-[var(--text-dark)] mb-6">
                Master Your
                <br />
                <span className="text-[var(--white)]">Classroom Tech</span>
                <br />
                &amp; Reclaim Your
                <br />
                <span className="text-[var(--earth-dark)]">Prep Time</span>
              </h1>

              {/* 2. THE SUB-HEADLINE — Consideration (Bridges audiences) */}
              <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)] mb-8">
                Ready-to-use curriculum, tech-driven training, and curated gear to help you teach smarter, not harder &mdash; whether you&apos;re in a classroom or at the kitchen table.
              </p>

              {/* 3. DUAL CALL-TO-ACTION — Sales + Traffic */}
              <div className="flex flex-wrap gap-3 mb-8">
                {/* Primary CTA — Direct Sales */}
                <Link
                  href="/resources/lessons"
                  className="btn btn-lg btn-primary rounded-full"
                >
                  Shop the Lesson Library
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                {/* Secondary CTA — Blog / Traffic */}
                <Link
                  href="/blog"
                  className="bg-[var(--white)] text-[var(--text-dark)] px-6 py-3.5 md:px-8 md:py-4 rounded-full text-[var(--text-sm)] font-semibold border border-[var(--border-greige)] hover:border-[var(--earth)] transition-all duration-[var(--duration-base)]"
                >
                  Read the Latest Tips
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--earth-light)] border-2 border-[var(--neutral-bg)]"></div>
                  <div className="w-8 h-8 rounded-full bg-[var(--terracotta)] border-2 border-[var(--neutral-bg)]"></div>
                  <div className="w-8 h-8 rounded-full bg-[var(--earth)] border-2 border-[var(--neutral-bg)]"></div>
                </div>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)]">
                  Trusted by <span className="font-semibold text-[var(--text-dark)]">5,000+</span> educators &amp; families
                </p>
              </div>
            </div>

            {/* Right — Hero Visual */}
            <div className="relative">
              {/* Main visual block */}
              <div className="bg-gradient-to-br from-[var(--earth)] via-[var(--earth-light)] to-[var(--earth-light)] rounded-[var(--radius-xl)] aspect-[4/3] relative overflow-hidden shadow-[var(--shadow-xl)]">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-16 h-16 border-2 border-[var(--white)] rounded-full"></div>
                  <div className="absolute top-14 left-14 w-24 h-24 border border-[var(--white)] rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-[var(--white)] rounded-lg rotate-12"></div>
                </div>

                {/* Central content card mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[var(--white)]/95 backdrop-blur rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-xl)] max-w-[240px] w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--earth)] flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--white)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[var(--text-xs)] font-bold text-[var(--earth)] uppercase tracking-[var(--tracking-wide)]">Lesson Ready</p>
                        <p className="text-[10px] text-[var(--text-muted)]">Standards-aligned</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[var(--border-beige)] rounded-full w-full"></div>
                      <div className="h-2 bg-[var(--border-beige)] rounded-full w-4/5"></div>
                      <div className="h-2 bg-[var(--terracotta)]/30 rounded-full w-3/5"></div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">ELA</span>
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">K-8</span>
                      <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[9px] font-bold text-[var(--earth)] uppercase">Digital</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="absolute bottom-6 -left-4 md:bottom-10 md:-left-8 bg-[var(--white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-xl)] p-4 md:p-5 border border-[var(--border-beige)] max-w-[220px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-sm)] font-semibold text-[var(--text-dark)] mb-0.5">Save 5+ Hours</h4>
                    <p className="text-[var(--text-xs)] text-[var(--text-muted)] leading-[var(--leading-relaxed)]">
                      Per week on lesson prep with our <span className="text-[var(--earth-light)] font-semibold">ready-to-go</span> resources
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating top-right badge */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-[var(--terracotta)] text-[var(--white)] rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-[var(--shadow-lg)]">
                <span className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-bold leading-none">Free</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[var(--tracking-wide)] font-semibold opacity-90">Resources</span>
              </div>
            </div>
          </div>

          {/* Newsletter Banner */}
          <div className="mt-10 md:mt-14">
            <div className="bg-[var(--white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-[var(--border-beige)] p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)]">
                  Weekly Newsletter
                </span>
                <span className="text-[var(--text-sm)] font-medium text-[var(--text-dark)]">
                  Join 5,000+ Educators
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:w-44 px-4 py-2.5 text-[var(--text-sm)] border border-[var(--border-beige)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--earth)] bg-[var(--white)]"
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
          RESOURCES SECTION — Matches new menu structure
          Lessons • Tech Tips • The Favorites
      ═══════════════════════════════════════════ */}
      <section className="section-lg bg-[var(--neutral-bg)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              Your Teaching Toolkit
            </p>
            <h2 className="text-h2 text-[var(--earth-light)] mb-4">
              Everything You Need, Nothing You Don&apos;t
            </h2>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] leading-[var(--leading-relaxed)]">
              Curriculum, tech training, and curated gear &mdash; all in one place. Built by a 15-year veteran educator who gets it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {/* Lessons */}
            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] group">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-bold text-[var(--text-dark)] mb-3">Lessons</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">
                Standards-aligned, ready-to-use curriculum and activities for K-8 classrooms and homeschool families. Just download and teach.
              </p>
              <Link href="/resources/lessons" className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--terracotta)] group-hover:gap-3 transition-all duration-[var(--duration-fast)]">
                Browse Lessons
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Tech Tips */}
            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] group">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-bold text-[var(--text-dark)] mb-3">Tech Tips</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">
                Step-by-step tech training and tutorials so you can integrate tools with confidence &mdash; no IT degree required.
              </p>
              <Link href="/resources/tech-tips" className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--terracotta)] group-hover:gap-3 transition-all duration-[var(--duration-fast)]">
                Explore Tips
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* The Favorites */}
            <div className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 md:p-8 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] group">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-lg)] md:text-[var(--text-xl)] font-bold text-[var(--text-dark)] mb-3">The Favorites</h3>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">
                My personally curated must-haves &mdash; the tools, books, and gear I actually use and recommend to every educator.
              </p>
              <Link href="/resources/favorites" className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--terracotta)] group-hover:gap-3 transition-all duration-[var(--duration-fast)]">
                See My Picks
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONSULTING SECTION
      ═══════════════════════════════════════════ */}
      <section className="section-lg bg-[var(--earth)]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-lg">
              <p className="text-[var(--text-xs)] font-bold text-[var(--earth-light)] uppercase tracking-[var(--tracking-widest)] mb-4">
                1-on-1 Support
              </p>
              <h2 className="text-h2 text-[var(--white)] mb-4">
                Consulting &amp; Coaching
              </h2>
              <p className="text-[var(--earth-light)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)]">
                Need personalized support? Whether you&apos;re a school rolling out new tech, a homeschool family building curriculum, or a teacher starting your side hustle &mdash; let&apos;s build a plan together.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              <div className="bg-[var(--white)]/10 backdrop-blur-sm rounded-[var(--radius-lg)] p-6 border border-[var(--white)]/20 max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[var(--terracotta)] text-[var(--terracotta)]" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[var(--text-xs)] text-[var(--earth-light)]">5.0 average</span>
                </div>
                <p className="text-[var(--white)]/90 text-[var(--text-sm)] leading-[var(--leading-relaxed)] italic">
                  &ldquo;Michelle helped us implement a reading intervention program that moved 80% of our students up a level in one semester.&rdquo;
                </p>
                <p className="text-[var(--earth-light)] text-[var(--text-xs)] mt-3 font-semibold">— K-5 Literacy Coach, MD</p>
              </div>

              <Link
                href="/consulting"
                className="bg-[var(--white)] text-[var(--earth)] px-6 py-3.5 rounded-[var(--radius-md)] font-semibold text-[var(--text-sm)] inline-flex items-center gap-2.5 hover:bg-[var(--neutral-bg)] transition-all duration-[var(--duration-base)] shadow-[var(--shadow-lg)]"
              >
                <svg className="w-5 h-5 text-[var(--terracotta)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
      <section className="section bg-[var(--beige-bg)]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="text-[var(--text-xs)] font-bold text-[var(--text-muted)] uppercase tracking-[var(--tracking-widest)] mb-2">
                From the Blog
              </p>
              <h2 className="text-h3 md:text-h2 text-[var(--text-dark)]">
                Teach Smarter, Not Harder
              </h2>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] mt-2">
                Practical tips, tech walkthroughs, and pedagogy insights for modern educators.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-sm)] font-medium text-[var(--text-dark)] border border-[var(--border-greige)] bg-[var(--white)] px-4 py-2.5 rounded-[var(--radius-md)] hover:border-[var(--earth)] transition-all duration-[var(--duration-fast)]">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-3 bg-[var(--white)] rounded-[var(--radius-xl)] overflow-hidden border border-[var(--border-beige)] shadow-[var(--shadow-sm)]">
              <div className="bg-[var(--earth)] p-10 md:p-12 flex items-center justify-center min-h-[180px] md:min-h-[200px]">
                <div className="bg-[var(--white)] rounded-[var(--radius-md)] p-5 shadow-[var(--shadow-lg)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-1 bg-[var(--earth)] rounded-full"></div>
                    <div className="w-4 h-1 bg-[var(--earth-light)] rounded-full"></div>
                    <div className="w-3 h-1 bg-[var(--border-beige)] rounded-full"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-full"></div>
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-4/5"></div>
                    <div className="h-2 bg-[var(--border-beige)] rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-[var(--text-xs)] text-[var(--text-muted)] mb-3">
                  <span className="font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-wide)]">Tech Tips</span>
                  <span>&bull;</span>
                  <span>Latest</span>
                </div>
                <h3 className="text-[var(--text-xl)] md:text-[var(--text-2xl)] font-bold text-[var(--text-dark)] mb-3 leading-[var(--leading-tight)]">
                  5 Free Tools That Will Transform Your Lesson Planning
                </h3>
                <p className="text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">
                  Stop spending your weekends on prep. These five tools automate the busywork so you can focus on what matters &mdash; your students.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--terracotta)] hover:gap-3 transition-all duration-[var(--duration-fast)]">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Freebie / Lead Magnet Card */}
            <div className="lg:col-span-2 bg-[var(--beige-bg)] rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col justify-center items-center text-center border border-[var(--border-beige)]">
              <div className="bg-[var(--white)] rounded-[var(--radius-md)] p-4 mb-5 shadow-[var(--shadow-sm)]">
                <svg className="w-8 h-8 text-[var(--terracotta)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="px-3 py-1 bg-[var(--terracotta)] text-[var(--white)] text-[10px] font-bold uppercase rounded-full tracking-[var(--tracking-wide)] mb-3">
                Free Download
              </span>
              <h4 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-2">
                The Weekly Planner Template
              </h4>
              <p className="text-[var(--text-sm)] text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">
                The exact planning template I used to cut my prep time in half. Yours free &mdash; just enter your email.
              </p>
              <div className="flex flex-col gap-2 w-full max-w-[220px]">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 text-[var(--text-sm)] border border-[var(--border-beige)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--earth)] bg-[var(--white)] text-center"
                />
                <button className="btn btn-md btn-primary w-full rounded-[var(--radius-md)]">
                  Grab My Freebie
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOCIAL CONNECTIONS — YouTube, TikTok, Instagram
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--neutral-bg)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              Let&apos;s Connect
            </p>
            <h2 className="text-h2 text-[var(--text-dark)] mb-4">
              Follow Along for Daily Inspo
            </h2>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] leading-[var(--leading-relaxed)]">
              Quick tips, behind-the-scenes, and real talk about education &mdash; find me wherever you scroll.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto">
            {/* YouTube */}
            <a
              href="https://youtube.com/@therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--white)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#FF0000]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF0000]/20 transition-all duration-[var(--duration-fast)]">
                <svg className="w-7 h-7 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-base)] font-bold text-[var(--text-dark)] mb-1">YouTube</h3>
              <p className="text-[var(--text-xs)] text-[var(--text-muted)] mb-3">Tutorials &amp; deep dives</p>
              <span className="inline-flex items-center gap-1.5 text-[var(--text-xs)] font-semibold text-[#FF0000] group-hover:gap-2 transition-all duration-[var(--duration-fast)]">
                Subscribe
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--white)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#010101]/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#010101]/10 transition-all duration-[var(--duration-fast)]">
                <svg className="w-6 h-6 text-[#010101]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-base)] font-bold text-[var(--text-dark)] mb-1">TikTok</h3>
              <p className="text-[var(--text-xs)] text-[var(--text-muted)] mb-3">Quick tips &amp; real talk</p>
              <span className="inline-flex items-center gap-1.5 text-[var(--text-xs)] font-semibold text-[var(--text-dark)] group-hover:gap-2 transition-all duration-[var(--duration-fast)]">
                Follow
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/therootedlearner"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--white)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#E4405F]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E4405F]/20 transition-all duration-[var(--duration-fast)]">
                <svg className="w-6 h-6 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <h3 className="text-[var(--text-base)] font-bold text-[var(--text-dark)] mb-1">Instagram</h3>
              <p className="text-[var(--text-xs)] text-[var(--text-muted)] mb-3">Behind the scenes</p>
              <span className="inline-flex items-center gap-1.5 text-[var(--text-xs)] font-semibold text-[#E4405F] group-hover:gap-2 transition-all duration-[var(--duration-fast)]">
                Follow
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
