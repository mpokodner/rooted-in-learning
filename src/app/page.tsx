import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-new-light" id="hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gentle-hold rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-rooted-earth"
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
                <span className="text-xs font-semibold text-rooted-earth uppercase tracking-wider">
                  Microlearning for Modern Homes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-onyx mb-6 leading-tight">
                Empowering{" "}
                <em className="text-sacred-ember font-serif not-italic">
                  Learning
                </em>{" "}
                at Home
              </h1>

              <p className="text-base md:text-lg text-onyx-muted mb-8 max-w-xl leading-relaxed">
                Transforming screen time into growth time. We provide bite-sized,
                pedagogical tools designed for students to master complex concepts
                through independent exploration.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/microlearning"
                  className="bg-rooted-earth text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-rooted-earth-dark transition-colors inline-flex items-center justify-center gap-2"
                >
                  Explore Microlearning
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
                <Link
                  href="/blog"
                  className="bg-white text-onyx px-6 py-3.5 rounded-full text-sm font-semibold border border-border hover:bg-gentle-hold transition-colors inline-flex items-center justify-center"
                >
                  View Pedagogy
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-rooted-earth border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-sacred-ember border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-moss border-2 border-white"></div>
                </div>
                <p className="text-sm text-onyx-muted">
                  Joined by <span className="font-semibold text-onyx">5,000+</span>{" "}
                  curious minds
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative slide-up stagger-2">
              <div className="bg-gradient-to-br from-calm-spirit/30 to-gentle-hold rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/3] relative">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 bg-gradient-to-br from-calm-spirit/40 to-gentle-hold flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/50 rounded-xl shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-rooted-earth/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-rooted-earth"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-onyx-muted">Learning Platform</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white rounded-xl shadow-lg p-4 border border-border max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-moss/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-moss"
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
                    <h4 className="text-sm font-semibold text-onyx">
                      Engagement Boost
                    </h4>
                    <p className="text-xs text-onyx-muted">
                      Families report a{" "}
                      <span className="text-moss font-semibold">45% increase</span>{" "}
                      in...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-4 md:py-6 bg-white border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-sacred-ember uppercase tracking-widest">
                Weekly Newsletter
              </span>
              <span className="text-sm font-medium text-onyx">
                Join 5,000+ Educators
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input py-2.5 px-4 border-border rounded-lg flex-1 md:w-64"
              />
              <button className="bg-rooted-earth text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-rooted-earth-dark transition-colors whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section className="py-16 md:py-20 bg-rooted-earth" id="sponsor">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif italic">
                Sponsor a Family
              </h2>
              <p className="text-calm-spirit text-base md:text-lg leading-relaxed max-w-lg">
                Every child deserves access to high-quality educational resources.
                Your donation provides a full year of microlearning access to a
                family in an underserved community.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-6">
              {/* Donation Amount Buttons */}
              <div className="flex gap-3">
                <button className="w-16 h-16 rounded-full border-2 border-calm-spirit text-calm-spirit font-bold hover:bg-white/10 transition-colors">
                  $25
                </button>
                <button className="w-16 h-16 rounded-full bg-sacred-ember text-white font-bold hover:bg-sacred-ember-dark transition-colors">
                  $50
                </button>
                <button className="w-16 h-16 rounded-full border-2 border-calm-spirit text-calm-spirit font-bold hover:bg-white/10 transition-colors">
                  $100
                </button>
              </div>

              {/* Donate Button */}
              <button className="bg-white text-rooted-earth px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-gentle-hold transition-colors">
                <svg
                  className="w-5 h-5 text-sacred-ember"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Donate Access Today
              </button>

              <p className="text-xs text-calm-spirit uppercase tracking-widest">
                Tax Deductible & Life Changing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Modern Minds Section */}
      <section className="section bg-new-light" id="ecosystem">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-xs font-semibold text-sacred-ember uppercase tracking-widest mb-3">
              Our Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-moss mb-4 font-serif">
              Built for Modern Minds
            </h2>
            <p className="text-onyx-muted text-base md:text-lg">
              Explore tools designed to simplify administration and amplify student
              learning through structured, engaging modules.
            </p>
          </div>

          <div className="grid grid-3 gap-6 md:gap-8">
            {/* Analytics Dashboard Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gentle-hold flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-rooted-earth"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-onyx mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Real-time progress tracking for parents and students to visualize
                growth across subjects.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sacred-ember group-hover:gap-3 transition-all"
              >
                Learn more
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

            {/* Curriculum Planner Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gentle-hold flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-rooted-earth"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-onyx mb-2">
                Curriculum Planner
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Automated lesson scheduling that adapts to your family&apos;s pace
                and specific learning needs.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sacred-ember group-hover:gap-3 transition-all"
              >
                Learn more
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

            {/* Gamified Learning Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gentle-hold flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-rooted-earth"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-onyx mb-2">
                Gamified Learning
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Badges and points systems designed by veteran educators to boost
                intrinsic motivation.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sacred-ember group-hover:gap-3 transition-all"
              >
                Learn more
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

      {/* Blog Section */}
      <section className="section-sm bg-gentle-hold/30" id="journal">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-10">
            <div>
              <p className="text-xs font-semibold text-onyx-muted uppercase tracking-widest mb-2">
                Journal
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-onyx font-serif">
                The Pedagogy Blog
              </h2>
              <p className="text-sm text-onyx-muted mt-1">
                Thoughtful insights for intentional learning at home.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-onyx border border-border bg-white px-4 py-2.5 rounded-lg hover:border-rooted-earth transition-colors"
            >
              View all articles
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-border flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-womb-bloom/30 to-gentle-hold p-6 flex items-center justify-center min-h-[180px]">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-1 bg-rooted-earth rounded"></div>
                    <div className="w-8 h-1 bg-calm-spirit rounded"></div>
                    <div className="w-4 h-1 bg-gentle-hold rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gentle-hold rounded w-full"></div>
                    <div className="h-2 bg-gentle-hold rounded w-3/4"></div>
                    <div className="h-2 bg-gentle-hold rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-xs text-onyx-muted mb-3">
                  <span className="font-semibold text-sacred-ember uppercase tracking-wide">
                    Leadership
                  </span>
                  <span>•</span>
                  <span>Oct 24</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-onyx mb-3 leading-snug">
                  Why &quot;Tech-First&quot; Fails in Schools
                </h3>
                <p className="text-sm text-onyx-muted mb-4 line-clamp-2">
                  Technology should amplify great teaching, not replace it.
                  Here&apos;s how to build a...
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sacred-ember hover:gap-3 transition-all"
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

            {/* Product Card */}
            <div className="lg:col-span-2 bg-gentle-hold rounded-2xl p-6 md:p-8 flex flex-col justify-center">
              <div className="bg-white rounded-xl p-4 mb-4 w-fit mx-auto">
                <svg
                  className="w-8 h-8 text-onyx-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-moss text-white text-[10px] font-semibold uppercase rounded">
                  Bestseller
                </span>
                <span className="text-xs text-onyx-muted uppercase tracking-wide">
                  Productivity
                </span>
              </div>
              <h4 className="text-lg font-bold text-onyx mb-2">
                The Ultimate Dashboard
              </h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-sacred-ember text-sacred-ember"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-onyx-muted">(2.4k reviews)</span>
              </div>
              <button className="bg-rooted-earth text-white px-5 py-3 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-rooted-earth-dark transition-colors">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Anchor */}
      <section id="contact" className="sr-only">
        {/* Anchor for contact - footer newsletter serves as contact */}
      </section>

      <Footer />
    </div>
  );
}
