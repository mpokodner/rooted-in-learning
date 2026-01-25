import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-16 lg:pb-8 bg-new-light relative" id="hero">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gentle-hold/60 rounded-full mb-5 border border-gentle-hold">
                <svg
                  className="w-3.5 h-3.5 text-rooted-earth"
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
                <span className="text-[10px] font-semibold text-rooted-earth uppercase tracking-widest">
                  Microlearning for Modern Homes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-onyx leading-[1.1] mb-5">
                Empowering
                <br />
                <span className="font-serif italic text-sacred-ember">Learning</span> at
                <br />
                Home
              </h1>

              <p className="text-[15px] md:text-base text-onyx-muted mb-6 max-w-md leading-relaxed">
                Transforming screen time into growth time. We provide bite-sized,
                pedagogical tools designed for students to master complex concepts
                through independent exploration.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  href="/microlearning"
                  className="bg-rooted-earth text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-rooted-earth-dark transition-colors inline-flex items-center gap-2"
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
                  className="bg-white text-onyx px-5 py-3 rounded-full text-sm font-medium border border-calm-spirit hover:bg-gentle-hold-light transition-colors"
                >
                  View Pedagogy
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-rooted-earth border-2 border-new-light"></div>
                  <div className="w-7 h-7 rounded-full bg-sacred-ember border-2 border-new-light"></div>
                  <div className="w-7 h-7 rounded-full bg-moss border-2 border-new-light"></div>
                </div>
                <p className="text-sm text-onyx-muted">
                  Joined by <span className="font-semibold text-onyx">5,000+</span> curious minds
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-calm-spirit/40 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-lg">
                {/* Gray gradient background like the mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a8a8a8] to-[#d0d0d0]"></div>
                {/* Tablet/Device mockup */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className="bg-[#1a1a1a] rounded-t-lg pt-2 px-2">
                    <div className="bg-[#2a2a2a] rounded-t-md aspect-[16/10]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="absolute bottom-8 left-0 md:bottom-12 md:-left-4 bg-white rounded-xl shadow-xl p-4 border border-border max-w-[220px]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-calm-spirit/20 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-moss"
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
                    <h4 className="text-sm font-semibold text-onyx leading-tight">
                      Engagement Boost
                    </h4>
                    <p className="text-xs text-onyx-muted mt-0.5">
                      Families report a <span className="text-moss font-medium">45% increase</span> in...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Banner - Floating Card Style */}
        <div className="container mt-6 md:mt-8">
          <div className="bg-white rounded-xl shadow-lg border border-border p-4 md:p-5 inline-flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-sacred-ember uppercase tracking-widest">
                Weekly Newsletter
              </span>
              <span className="text-sm font-medium text-onyx">
                Join 5,000+ Educators
              </span>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-44 px-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-rooted-earth"
              />
              <button className="bg-rooted-earth text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rooted-earth-dark transition-colors whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section className="py-14 md:py-20 bg-rooted-earth mt-8" id="sponsor">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif italic text-white mb-3 leading-tight">
                Sponsor a Family
              </h2>
              <p className="text-calm-spirit text-[15px] leading-relaxed">
                Every child deserves access to high-quality educational resources.
                Your donation provides a full year of microlearning access to a
                family in an underserved community.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              {/* Donation Amount Buttons */}
              <div className="flex gap-3">
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-calm-spirit/60 text-calm-spirit font-bold text-sm hover:bg-white/10 transition-colors">
                  $25
                </button>
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-sacred-ember text-white font-bold text-sm hover:bg-sacred-ember-dark transition-colors">
                  $50
                </button>
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-calm-spirit/60 text-calm-spirit font-bold text-sm hover:bg-white/10 transition-colors">
                  $100
                </button>
              </div>

              {/* Donate Button */}
              <button className="bg-white text-rooted-earth px-6 py-3.5 rounded-xl font-medium text-sm inline-flex items-center gap-2.5 hover:bg-gentle-hold transition-colors shadow-md">
                <svg
                  className="w-4 h-4 text-sacred-ember"
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

              <p className="text-[10px] text-calm-spirit/80 uppercase tracking-widest font-medium">
                Tax Deductible & Life Changing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Modern Minds Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-new-light" id="ecosystem">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="text-[10px] font-bold text-sacred-ember uppercase tracking-widest mb-3">
              Our Ecosystem
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-moss mb-3">
              Built for Modern Minds
            </h2>
            <p className="text-onyx-muted text-[15px] leading-relaxed">
              Explore tools designed to simplify administration and amplify student
              learning through structured, engaging modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Analytics Dashboard Card */}
            <div className="bg-white rounded-xl p-6 border border-border/60 hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-lg bg-gentle-hold/70 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-rooted-earth"
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
              <h3 className="text-lg font-semibold text-onyx mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Real-time progress tracking for parents and students to visualize
                growth across subjects.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sacred-ember group-hover:gap-2.5 transition-all"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5"
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
            <div className="bg-white rounded-xl p-6 border border-border/60 hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-lg bg-gentle-hold/70 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-rooted-earth"
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
              <h3 className="text-lg font-semibold text-onyx mb-2">
                Curriculum Planner
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Automated lesson scheduling that adapts to your family&apos;s pace
                and specific learning needs.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sacred-ember group-hover:gap-2.5 transition-all"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5"
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
            <div className="bg-white rounded-xl p-6 border border-border/60 hover:shadow-md transition-all group">
              <div className="w-11 h-11 rounded-lg bg-gentle-hold/70 flex items-center justify-center mb-4">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-onyx mb-2">
                Gamified Learning
              </h3>
              <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                Badges and points systems designed by veteran educators to boost
                intrinsic motivation.
              </p>
              <Link
                href="/microlearning"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sacred-ember group-hover:gap-2.5 transition-all"
              >
                Learn more
                <svg
                  className="w-3.5 h-3.5"
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
      <section className="py-12 md:py-16 bg-gentle-hold/40" id="journal">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[10px] font-bold text-onyx-muted uppercase tracking-widest mb-1.5">
                Journal
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-onyx">
                The Pedagogy Blog
              </h2>
              <p className="text-sm text-onyx-muted mt-1">
                Thoughtful insights for intentional learning at home.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-onyx bg-white border border-border px-4 py-2 rounded-lg hover:border-onyx-muted transition-colors"
            >
              View all articles
              <svg
                className="w-3.5 h-3.5"
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Featured Article */}
            <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm flex flex-col md:flex-row">
              <div className="md:w-[38%] bg-gradient-to-br from-womb-bloom/40 to-gentle-hold p-5 flex items-center justify-center min-h-[160px]">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-5 h-0.5 bg-rooted-earth rounded"></div>
                    <div className="w-6 h-0.5 bg-calm-spirit rounded"></div>
                    <div className="w-3 h-0.5 bg-gentle-hold-dark rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 bg-gentle-hold rounded w-full"></div>
                    <div className="h-1.5 bg-gentle-hold rounded w-3/4"></div>
                    <div className="h-1.5 bg-gentle-hold rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-[62%] p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[11px] text-onyx-muted mb-2">
                  <span className="font-semibold text-sacred-ember uppercase tracking-wide">
                    Leadership
                  </span>
                  <span>•</span>
                  <span>Oct 24</span>
                </div>
                <h3 className="text-lg font-semibold text-onyx mb-2 leading-snug">
                  Why &quot;Tech-First&quot; Fails in Schools
                </h3>
                <p className="text-sm text-onyx-muted mb-3 line-clamp-2">
                  Technology should amplify great teaching, not replace it.
                  Here&apos;s how to build a...
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sacred-ember hover:gap-2.5 transition-all"
                >
                  Read Article
                  <svg
                    className="w-3.5 h-3.5"
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
            <div className="lg:col-span-2 bg-gentle-hold/80 rounded-2xl p-5 md:p-6 flex flex-col justify-center items-center text-center">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <svg
                  className="w-6 h-6 text-onyx-muted"
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
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="px-1.5 py-0.5 bg-moss text-white text-[9px] font-bold uppercase rounded">
                  Bestseller
                </span>
                <span className="text-[10px] text-onyx-muted uppercase tracking-wide">
                  Productivity
                </span>
              </div>
              <h4 className="text-base font-semibold text-onyx mb-1.5">
                The Ultimate Dashboard
              </h4>
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 fill-sacred-ember text-sacred-ember"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[11px] text-onyx-muted">(2.4k reviews)</span>
              </div>
              <button className="bg-rooted-earth text-white px-4 py-2.5 rounded-lg font-medium text-sm inline-flex items-center gap-2 hover:bg-rooted-earth-dark transition-colors">
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
