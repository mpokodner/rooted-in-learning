import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-new-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="badge badge-primary">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                  Google Certified Innovator
                </span>
                <span className="badge badge-accent">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  ISTE Certified
                </span>
              </div>

              <h1 className="text-balance mb-6 text-onyx">
                Bridging
                <br />
                Pedagogy
                <br />
                and Technology
              </h1>

              <p className="text-lg text-onyx-muted mb-8 max-w-xl leading-relaxed">
                Empowering educators with veteran classroom experience and
                innovative developer tools. Over 15 years of transforming
                classrooms into modern learning hubs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn btn-primary">View Portfolio</button>
                <button className="btn btn-secondary">Read Philosophy</button>
              </div>

              <div className="flex items-center gap-6 text-sm text-onyx-muted">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>Full Stack Developer</span>
                </div>
                <span className="text-calm-spirit">•</span>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>M.Ed. Curriculum Design</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Dashboard Preview */}
            <div className="relative slide-up stagger-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-rooted-earth">
                  <span className="w-3 h-3 rounded-full bg-womb-bloom"></span>
                  <span className="w-3 h-3 rounded-full bg-sacred-ember"></span>
                  <span className="w-3 h-3 rounded-full bg-moss"></span>
                </div>
                {/* Dashboard Content */}
                <div className="p-6 bg-gradient-to-br from-gentle-hold to-white">
                  <div className="text-xs text-onyx-muted mb-2">Analytics</div>
                  <div className="flex items-end gap-3 h-32">
                    <div className="flex-1 flex items-end gap-2 h-full">
                      <div
                        className="w-full bg-calm-spirit/50 rounded-t-sm"
                        style={{ height: "40%" }}
                      ></div>
                      <div
                        className="w-full bg-calm-spirit/50 rounded-t-sm"
                        style={{ height: "55%" }}
                      ></div>
                      <div
                        className="w-full bg-calm-spirit/50 rounded-t-sm"
                        style={{ height: "45%" }}
                      ></div>
                      <div
                        className="w-full bg-calm-spirit/50 rounded-t-sm"
                        style={{ height: "70%" }}
                      ></div>
                      <div
                        className="w-full bg-rooted-earth rounded-t-sm"
                        style={{ height: "85%" }}
                      ></div>
                      <div
                        className="w-full bg-rooted-earth rounded-t-sm"
                        style={{ height: "90%" }}
                      ></div>
                      <div
                        className="w-full bg-rooted-earth rounded-t-sm"
                        style={{ height: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 md:left-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="text-moss">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-onyx-muted uppercase tracking-wide">
                      Engagement
                    </div>
                    <div className="text-lg font-bold text-moss">+145%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-calm-spirit"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="stat-number">15+ Years</span>
              </div>
              <div className="stat-label">Classroom Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-calm-spirit"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="stat-number">50k+</span>
              </div>
              <div className="stat-label">Resources Downloaded</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-calm-spirit"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="stat-number">100+</span>
              </div>
              <div className="stat-label">Workshops Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Modern Classrooms */}
      <section className="section bg-new-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mb-4 text-onyx">Built for Modern Classrooms</h2>
            <p className="text-onyx-muted text-lg">
              Explore tools designed to simplify administration and amplify
              student learning.
            </p>
          </div>

          <div className="grid grid-3 gap-6 mb-8">
            {/* Analytics Dashboard Card */}
            <div className="product-card hover-lift">
              <div className="product-card-image bg-gradient-to-br from-calm-spirit/20 to-gentle-hold p-6 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-full">
                  <div className="flex items-end gap-2 h-24">
                    <div
                      className="w-8 bg-rooted-earth/30 rounded-t"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-8 bg-rooted-earth/30 rounded-t"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="w-8 bg-rooted-earth rounded-t"
                      style={{ height: "55%" }}
                    ></div>
                    <div
                      className="w-8 bg-rooted-earth rounded-t"
                      style={{ height: "85%" }}
                    ></div>
                    <div
                      className="w-8 bg-rooted-earth rounded-t"
                      style={{ height: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="product-card-content">
                <h4 className="font-semibold text-onyx mb-1">
                  Analytics Dashboard
                </h4>
                <p className="text-sm text-onyx-muted">
                  Real-time progress tracking
                </p>
              </div>
            </div>

            {/* Curriculum Planner Card */}
            <div className="product-card hover-lift">
              <div className="product-card-image bg-gradient-to-br from-womb-bloom/20 to-gentle-hold p-6 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-full flex flex-col gap-2">
                  <div className="h-3 bg-calm-spirit/30 rounded w-3/4"></div>
                  <div className="h-3 bg-calm-spirit/30 rounded w-full"></div>
                  <div className="h-3 bg-calm-spirit/30 rounded w-2/3"></div>
                  <div className="h-3 bg-sacred-ember/30 rounded w-1/2 mt-2"></div>
                </div>
              </div>
              <div className="product-card-content">
                <h4 className="font-semibold text-onyx mb-1">
                  Curriculum Planner
                </h4>
                <p className="text-sm text-onyx-muted">
                  Automated lesson scheduling
                </p>
              </div>
            </div>

            {/* Gamified Gradebook Card */}
            <div className="product-card hover-lift">
              <div className="product-card-image bg-gradient-to-br from-moss/10 to-gentle-hold p-6 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-full">
                  <div className="text-xs font-semibold text-rooted-earth mb-2 uppercase tracking-wide">
                    Gamified
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-moss/20 flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <div className="h-2 bg-calm-spirit/30 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-moss/20 flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      <div className="h-2 bg-calm-spirit/30 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-card-content">
                <h4 className="font-semibold text-onyx mb-1">
                  Gamified Gradebook
                </h4>
                <p className="text-sm text-onyx-muted">
                  Points and badges system
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sacred-ember"></span>
            <span className="w-2 h-2 rounded-full bg-calm-spirit"></span>
            <span className="w-2 h-2 rounded-full bg-calm-spirit"></span>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section-sm bg-gentle-hold/50">
        <div className="container">
          <div className="grid grid-3 gap-6">
            {/* Overwhelmed by Tools */}
            <div className="card bg-white">
              <div className="text-4xl mb-4">🤯</div>
              <h4 className="font-semibold text-onyx mb-2">
                Overwhelmed by Tools?
              </h4>
              <p className="text-sm text-onyx-muted mb-4">
                Stop juggling 50 different apps. I identify the essential stack
                that actually saves you time.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-sacred-ember hover:gap-3 transition-all"
              >
                Explore Tech Stacks
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Low Engagement */}
            <div className="card bg-white">
              <div className="text-4xl mb-4">😮‍💨</div>
              <h4 className="font-semibold text-onyx mb-2">Low Engagement?</h4>
              <p className="text-sm text-onyx-muted mb-4">
                Turn passive listeners into active creators with proven
                gamification strategies.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-sacred-ember hover:gap-3 transition-all"
              >
                See Gamified Plans
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Data Overload */}
            <div className="card bg-white">
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-calm-spirit"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="40"
                    height="40"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 36L20 24L28 32L36 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-onyx mb-2">Data Overload?</h4>
              <p className="text-sm text-onyx-muted mb-4">
                Don&apos;t just collect data, use it. Templates that turn
                numbers into actionable insights.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-sacred-ember hover:gap-3 transition-all"
              >
                Get Data Templates
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="section bg-new-light">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-womb-bloom/30 to-gentle-hold p-8 flex items-center justify-center min-h-[300px]">
                <span className="absolute top-4 left-4 badge badge-featured">
                  #1 Bestseller
                </span>
                <div className="bg-white rounded-xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-48 md:w-64 aspect-[4/3] bg-gentle-hold rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-xs text-onyx-muted">
                        Notion Template
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-onyx-muted uppercase tracking-wide">
                    Productivity
                  </span>
                  <span className="px-2 py-0.5 bg-gentle-hold rounded text-xs font-medium text-onyx">
                    Notion
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-onyx mb-3">
                  The Ultimate Classroom Dashboard
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rating">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 fill-current opacity-30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-onyx-muted">
                    (2.4k reviews)
                  </span>
                  <span className="text-sm text-onyx-muted">|</span>
                  <span className="text-sm text-onyx-muted">
                    15k+ Downloads
                  </span>
                </div>
                <p className="text-onyx-muted mb-6">
                  A comprehensive Notion template designed to streamline
                  administrative tasks, track student behaviors, and boost
                  engagement.
                </p>
                <div className="flex items-center gap-4">
                  <button className="btn btn-accent">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Buy Now $29
                  </button>
                  <button className="btn btn-ghost text-onyx underline underline-offset-4">
                    View Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview + Social Links */}
      <section className="section-sm bg-gentle-hold/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl overflow-hidden border border-border flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-womb-bloom/30 to-gentle-hold p-6 flex items-center justify-center">
                  <div className="text-6xl">👩‍🏫</div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-center gap-2 text-xs text-onyx-muted mb-3">
                    <span className="font-semibold text-sacred-ember uppercase tracking-wide">
                      Thought Leadership
                    </span>
                    <span>•</span>
                    <span>Oct 24, 2023</span>
                  </div>
                  <h3 className="text-xl font-bold text-onyx mb-3">
                    Why &quot;Tech-First&quot; Fails in Schools
                  </h3>
                  <p className="text-sm text-onyx-muted mb-4">
                    Technology should amplify great teaching, not replace it.
                    Here&apos;s how to build a pedagogy-first framework that
                    actually utilizes the expensive devices sitting in your
                    carts.
                  </p>
                  <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sacred-ember hover:gap-3 transition-all"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-white text-center hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gentle-hold mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-onyx-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-onyx">
                  Professional
                </div>
                <div className="text-xs text-sacred-ember">Connect</div>
              </div>
              <div className="card bg-white text-center hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gentle-hold mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-onyx-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-onyx">
                  Daily Tips
                </div>
                <div className="text-xs text-sacred-ember">Follow</div>
              </div>
              <div className="card bg-white text-center hover-lift">
                <div className="w-10 h-10 rounded-lg bg-moss/20 mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-moss"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-onyx">Code</div>
                <div className="text-xs text-onyx-muted">Star</div>
              </div>
              <div className="card bg-white text-center hover-lift">
                <div className="w-10 h-10 rounded-lg bg-gentle-hold mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-onyx-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold text-onyx">Tutorials</div>
                <div className="text-xs text-sacred-ember">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
