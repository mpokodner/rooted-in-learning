import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 bg-new-light"
        id="hero"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gentle-hold/60 rounded-full mb-6 border border-gentle-hold">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span className="text-[10px] font-semibold text-sacred-ember uppercase tracking-widest">
                  Microlearning for Modern Homes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-onyx leading-[1.1] mb-6">
                Empowering
                <br />
                <span className="font-serif italic text-sacred-ember">
                  Learning
                </span>{" "}
                at
                <br />
                Home
              </h1>

              <p className="text-[15px] md:text-base text-onyx-muted mb-8 max-w-md leading-relaxed">
                Transforming screen time into growth time. We provide
                bite-sized, pedagogical tools designed for students to master
                complex concepts through independent exploration.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/microlearning"
                  className="bg-rooted-earth text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-rooted-earth-dark transition-colors inline-flex items-center gap-2"
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
                  className="bg-white text-onyx px-6 py-3.5 rounded-full text-sm font-medium border border-calm-spirit hover:bg-gentle-hold-light transition-colors"
                >
                  View Pedagogy
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-calm-spirit border-2 border-new-light"></div>
                  <div className="w-8 h-8 rounded-full bg-womb-bloom border-2 border-new-light"></div>
                  <div className="w-8 h-8 rounded-full bg-rooted-earth border-2 border-new-light"></div>
                </div>
                <p className="text-sm text-onyx-muted">
                  Joined by{" "}
                  <span className="font-semibold text-onyx">5,000+</span>{" "}
                  curious minds
                </p>
              </div>
            </div>

            {/* Hero Image - Tablet Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#c5c5c5] via-[#d8d8d8] to-[#e0e0e0] rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl">
                {/* Tablet Device */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] pb-4">
                  <div className="bg-[#2a2a2a] rounded-t-2xl pt-3 px-3 shadow-2xl">
                    <div className="bg-[#1a1a1a] rounded-t-xl aspect-[16/10] relative overflow-hidden">
                      {/* Placeholder for screen content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gentle-hold/20 to-calm-spirit/30"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="absolute bottom-4 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-border max-w-[240px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-womb-bloom/30 flex items-center justify-center shrink-0">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-onyx leading-tight mb-1">
                      Engagement Boost
                    </h4>
                    <p className="text-xs text-onyx-muted">
                      Families report a{" "}
                      <span className="text-sacred-ember font-semibold">
                        45% increase
                      </span>{" "}
                      in...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Banner */}
          <div className="mt-12 md:mt-16">
            <div className="bg-white rounded-2xl shadow-lg border border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-sacred-ember uppercase tracking-widest">
                  Weekly Newsletter
                </span>
                <span className="text-sm font-medium text-onyx">
                  Join 5,000+ Educators
                </span>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:w-48 px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:border-rooted-earth focus:ring-1 focus:ring-rooted-earth"
                />
                <button className="bg-rooted-earth text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-rooted-earth-dark transition-colors whitespace-nowrap">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section className="py-20 md:py-28 bg-rooted-earth" id="sponsor">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white mb-4 leading-tight">
                Sponsor a Family
              </h2>
              <p className="text-calm-spirit/90 text-base md:text-lg leading-relaxed">
                Every child deserves access to high-quality educational
                resources. Your donation provides a full year of microlearning
                access to a family in an underserved community.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-6">
              {/* Donation Amount Buttons */}
              <div className="flex gap-4">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-colors">
                  $25
                </button>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sacred-ember text-white font-bold text-base hover:bg-sacred-ember/90 transition-colors shadow-lg">
                  $50
                </button>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 transition-colors">
                  $100
                </button>
              </div>

              {/* Donate Button */}
              <button className="bg-white text-rooted-earth px-7 py-4 rounded-xl font-semibold text-base inline-flex items-center gap-3 hover:bg-gentle-hold transition-colors shadow-xl">
                <svg
                  className="w-5 h-5 text-sacred-ember"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Access Today
              </button>

              <p className="text-[11px] text-white/70 uppercase tracking-widest font-semibold">
                Tax Deductible & Life Changing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Modern Minds Section */}
      <section className="py-20 md:py-28 bg-new-light" id="ecosystem">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-bold text-sacred-ember uppercase tracking-widest mb-4">
              Our Ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-onyx mb-4">
              Built for Modern Minds
            </h2>
            <p className="text-onyx-muted text-base leading-relaxed">
              Explore tools designed to simplify administration and amplify
              student learning through structured, engaging modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Analytics Dashboard Card */}
            <div className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-xl hover:border-border transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gentle-hold/80 flex items-center justify-center mb-5">
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
              <h3 className="text-xl font-semibold text-onyx mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-sm text-onyx-muted mb-5 leading-relaxed">
                Real-time progress tracking for parents and students to
                visualize growth across subjects.
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
            <div className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-xl hover:border-border transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gentle-hold/80 flex items-center justify-center mb-5">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-onyx mb-3">
                Curriculum Planner
              </h3>
              <p className="text-sm text-onyx-muted mb-5 leading-relaxed">
                Automated lesson scheduling that adapts to your family&apos;s
                pace and specific learning needs.
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
            <div className="bg-white rounded-2xl p-8 border border-border/60 hover:shadow-xl hover:border-border transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gentle-hold/80 flex items-center justify-center mb-5">
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
                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-onyx mb-3">
                Gamified Learning
              </h3>
              <p className="text-sm text-onyx-muted mb-5 leading-relaxed">
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
      <section className="py-20 md:py-24 bg-gentle-hold/30" id="journal">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-bold text-onyx-muted uppercase tracking-widest mb-2">
                Journal
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-onyx mb-2">
                The Pedagogy Blog
              </h2>
              <p className="text-sm text-onyx-muted">
                Thoughtful insights for intentional learning at home.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-onyx hover:text-sacred-ember transition-colors"
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
            <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden border border-border/60 shadow-sm flex flex-col">
              <div className="bg-rooted-earth/80 p-16 flex items-center justify-center min-h-[200px]">
                <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-1 bg-rooted-earth rounded-full"></div>
                    <div className="w-6 h-1 bg-calm-spirit rounded-full"></div>
                    <div className="w-4 h-1 bg-gentle-hold-dark rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gentle-hold rounded-full w-full"></div>
                    <div className="h-2 bg-gentle-hold rounded-full w-5/6"></div>
                    <div className="h-2 bg-gentle-hold rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-onyx-muted mb-3">
                  <span className="font-bold text-sacred-ember uppercase tracking-wide">
                    Leadership
                  </span>
                  <span>•</span>
                  <span>Oct 24</span>
                </div>
                <h3 className="text-2xl font-semibold text-onyx mb-3 leading-tight">
                  Why &quot;Tech-First&quot; Fails in Schools
                </h3>
                <p className="text-base text-onyx-muted mb-5 leading-relaxed">
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
            <div className="lg:col-span-2 bg-gradient-to-br from-gentle-hold/60 to-gentle-hold/90 rounded-3xl p-10 flex flex-col justify-center items-center text-center border border-gentle-hold">
              <div className="bg-white rounded-2xl p-4 mb-5 shadow-md">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-rooted-earth text-white text-[10px] font-bold uppercase rounded-md">
                  Bestseller
                </span>
                <span className="text-[11px] text-onyx-muted uppercase tracking-wide font-semibold">
                  Productivity
                </span>
              </div>
              <h4 className="text-lg font-bold text-onyx mb-3">
                The Ultimate Dashboard
              </h4>
              <div className="flex items-center justify-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-sacred-ember text-sacred-ember"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-onyx-muted font-medium">
                  (2.4k reviews)
                </span>
              </div>
              <button className="bg-rooted-earth text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2.5 hover:bg-rooted-earth-dark transition-colors shadow-lg">
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
