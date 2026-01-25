import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#F5EFE7] rounded-full mb-8">
                <svg className="w-4 h-4 text-[#6B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-[11px] font-semibold text-[#5C5C5C] uppercase tracking-[0.12em]">
                  Microlearning for Modern Homes
                </span>
              </div>

              {/* Headline - Display XL */}
              <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#2D2D2D] leading-[1.1] tracking-[-0.02em] mb-6">
                Empowering
                <br />
                <span className="font-serif italic text-[#C17B5C] font-normal">Learning</span> at
                <br />
                Home
              </h1>

              {/* Description - Body LG */}
              <p className="text-[#666666] text-base md:text-lg leading-[1.7] mb-8">
                Transforming screen time into growth time. We provide bite-sized, pedagogical tools designed for students to master complex concepts through independent exploration.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/microlearning"
                  className="bg-[#5C6B4D] text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full text-sm font-semibold inline-flex items-center gap-2.5 hover:bg-[#4A5638] transition-all shadow-sm"
                >
                  Explore Microlearning
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/blog"
                  className="bg-white text-[#2D2D2D] px-6 py-3.5 md:px-8 md:py-4 rounded-full text-sm font-semibold border border-[#D9D5CE] hover:border-[#5C6B4D] transition-all"
                >
                  View Pedagogy
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#8B9B7A] border-2 border-[#FAF7F2]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#C17B5C] border-2 border-[#FAF7F2]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#5C6B4D] border-2 border-[#FAF7F2]"></div>
                </div>
                <p className="text-sm text-[#666666]">
                  Joined by <span className="font-semibold text-[#2D2D2D]">5,000+</span> curious minds
                </p>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              {/* Gray gradient background */}
              <div className="bg-gradient-to-br from-[#B8B8B8] via-[#CACACA] to-[#D8D8D8] rounded-[1.5rem] aspect-[4/3] relative overflow-hidden shadow-xl">
                {/* Tablet device */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%]">
                  <div className="bg-[#1C1C1C] rounded-t-xl pt-2 px-2">
                    <div className="bg-[#2A2A2A] rounded-t-lg aspect-[16/10]"></div>
                  </div>
                </div>
              </div>

              {/* Floating Engagement Card */}
              <div className="absolute bottom-6 -left-4 md:bottom-10 md:-left-8 bg-white rounded-[1rem] shadow-xl p-4 md:p-5 border border-[#E8DED0] max-w-[220px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-[0.75rem] bg-[#F5EFE7] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#6B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2D2D2D] mb-0.5">Engagement Boost</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Families report a <span className="text-[#6B7B5E] font-semibold">45% increase</span> in...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Banner - Floating Card */}
          <div className="mt-10 md:mt-14">
            <div className="bg-white rounded-[1rem] shadow-lg border border-[#E8DED0] p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-[#C17B5C] uppercase tracking-[0.15em]">
                  Weekly Newsletter
                </span>
                <span className="text-sm font-medium text-[#2D2D2D]">
                  Join 5,000+ Educators
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:w-44 px-4 py-2.5 text-sm border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] bg-white"
                />
                <button className="bg-[#5C6B4D] text-white px-5 py-2.5 rounded-[0.75rem] text-sm font-semibold hover:bg-[#4A5638] transition-all whitespace-nowrap">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section className="section-lg bg-[#5C6B4D]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-lg">
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-serif italic text-white leading-[1.15] tracking-[-0.01em] mb-4">
                Sponsor a Family
              </h2>
              <p className="text-[#C5D1B8] text-base md:text-lg leading-[1.7]">
                Every child deserves access to high-quality educational resources. Your donation provides a full year of microlearning access to a family in an underserved community.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-5">
              {/* Donation Buttons */}
              <div className="flex gap-3">
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-[#8B9B7A] text-[#C5D1B8] font-bold text-base hover:bg-white/10 transition-all">
                  $25
                </button>
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C17B5C] text-white font-bold text-base hover:bg-[#A96B4D] transition-all shadow-lg">
                  $50
                </button>
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-[#8B9B7A] text-[#C5D1B8] font-bold text-base hover:bg-white/10 transition-all">
                  $100
                </button>
              </div>

              {/* Donate Button */}
              <button className="bg-white text-[#5C6B4D] px-6 py-3.5 rounded-[0.75rem] font-semibold text-sm inline-flex items-center gap-2.5 hover:bg-[#F5F3F0] transition-all shadow-lg">
                <svg className="w-5 h-5 text-[#C17B5C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Access Today
              </button>

              <p className="text-[10px] text-[#8B9B7A] uppercase tracking-[0.15em] font-semibold">
                Tax Deductible & Life Changing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Modern Minds Section */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-[11px] font-bold text-[#C17B5C] uppercase tracking-[0.15em] mb-4">
              Our Ecosystem
            </p>
            <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-serif text-[#6B7B5E] leading-[1.2] tracking-[-0.01em] mb-4">
              Built for Modern Minds
            </h2>
            <p className="text-[#666666] text-base leading-[1.7]">
              Explore tools designed to simplify administration and amplify student learning through structured, engaging modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {/* Analytics Dashboard */}
            <div className="bg-white rounded-[1.25rem] p-6 md:p-8 border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-[0.75rem] bg-[#F5EFE7] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-3">Analytics Dashboard</h3>
              <p className="text-sm text-[#666666] mb-5 leading-relaxed">
                Real-time progress tracking for parents and students to visualize growth across subjects.
              </p>
              <Link href="/microlearning" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Curriculum Planner */}
            <div className="bg-white rounded-[1.25rem] p-6 md:p-8 border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-[0.75rem] bg-[#F5EFE7] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-3">Curriculum Planner</h3>
              <p className="text-sm text-[#666666] mb-5 leading-relaxed">
                Automated lesson scheduling that adapts to your family&apos;s pace and specific learning needs.
              </p>
              <Link href="/microlearning" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Gamified Learning */}
            <div className="bg-white rounded-[1.25rem] p-6 md:p-8 border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-[0.75rem] bg-[#F5EFE7] flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-[#6B7B5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2D2D2D] mb-3">Gamified Learning</h3>
              <p className="text-sm text-[#666666] mb-5 leading-relaxed">
                Badges and points systems designed by veteran educators to boost intrinsic motivation.
              </p>
              <Link href="/microlearning" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section bg-[#F0EDE7]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
            <div>
              <p className="text-[11px] font-bold text-[#666666] uppercase tracking-[0.15em] mb-2">
                Journal
              </p>
              <h2 className="text-[1.5rem] md:text-[2rem] font-serif text-[#2D2D2D] leading-[1.2]">
                The Pedagogy Blog
              </h2>
              <p className="text-sm text-[#666666] mt-2">
                Thoughtful insights for intentional learning at home.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#2D2D2D] border border-[#D9D5CE] bg-white px-4 py-2.5 rounded-[0.5rem] hover:border-[#5C6B4D] transition-all">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">
            {/* Featured Article */}
            <div className="lg:col-span-3 bg-white rounded-[1.5rem] overflow-hidden border border-[#E8DED0] shadow-sm">
              <div className="bg-[#5C6B4D] p-10 md:p-12 flex items-center justify-center min-h-[180px] md:min-h-[200px]">
                <div className="bg-white rounded-[0.75rem] p-5 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-1 bg-[#5C6B4D] rounded-full"></div>
                    <div className="w-4 h-1 bg-[#C5D1B8] rounded-full"></div>
                    <div className="w-3 h-1 bg-[#E8DED0] rounded-full"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-[#E8DED0] rounded-full w-full"></div>
                    <div className="h-2 bg-[#E8DED0] rounded-full w-4/5"></div>
                    <div className="h-2 bg-[#E8DED0] rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs text-[#666666] mb-3">
                  <span className="font-bold text-[#C17B5C] uppercase tracking-[0.08em]">Leadership</span>
                  <span>•</span>
                  <span>Oct 24</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-3 leading-tight">
                  Why &quot;Tech-First&quot; Fails in Schools
                </h3>
                <p className="text-[#666666] mb-5 leading-relaxed">
                  Technology should amplify great teaching, not replace it. Here&apos;s how to build a...
                </p>
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Product Card */}
            <div className="lg:col-span-2 bg-[#F5EFE7] rounded-[1.5rem] p-6 md:p-8 flex flex-col justify-center items-center text-center">
              <div className="bg-white rounded-[0.75rem] p-4 mb-5 shadow-sm">
                <svg className="w-8 h-8 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-[#5C6B4D] text-white text-[10px] font-bold uppercase rounded tracking-wide">
                  Bestseller
                </span>
                <span className="text-[11px] text-[#666666] uppercase tracking-[0.08em] font-semibold">
                  Productivity
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#2D2D2D] mb-3">
                The Ultimate Dashboard
              </h4>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-[#C17B5C] text-[#C17B5C]" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#666666]">(2.4k reviews)</span>
              </div>
              <button className="bg-[#5C6B4D] text-white px-6 py-3 rounded-[0.75rem] font-semibold text-sm inline-flex items-center gap-2 hover:bg-[#4A5638] transition-all shadow-md">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Buy Now $29
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
