import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microlearning Shop | Rooted in Learning",
  description:
    "Empower your child's education with bite-sized, pedagogical tools designed for deep mastery through independent exploration.",
};

const categories = [
  { id: "all", label: "All Resources", active: true },
  { id: "bundles", label: "Bundles", active: false },
  { id: "literacy", label: "Literacy", active: false },
  { id: "stem", label: "STEM", active: false },
  { id: "art", label: "Art & Mindfulness", active: false },
];

const featuredBundle = {
  title: "The Autumn Nature Bundle",
  description: "A comprehensive weekly module covering leaf science, local ecosystem tracking, and creative storytelling projects. Perfect for families seeking nature-based learning experiences.",
  price: 34.0,
  originalPrice: 48.0,
  badge: "BESTSELLER",
  tags: ["Bundle", "Nature Science", "Creative Writing"],
};

const sideProducts = [
  { id: 1, title: "Math Mini-Spark Kit", price: 12.0, category: "DIGITAL RESOURCE" },
  { id: 2, title: "Yoga for Tiny Explorers", price: 15.0, category: "VIDEO COURSE" },
];

const morningStarters = [
  { id: 3, title: "Gratitude Journaling Cards", price: 8.5, category: "PRINTABLE" },
  { id: 4, title: "Story-Time Meditation", price: 12.0, category: "AUDIO COURSE" },
  { id: 5, title: "Sun Salute Posters", price: 18.0, category: "VISUAL GUIDE" },
];

export default function MicrolearningPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full mb-8 shadow-sm border border-[#E8E4DD]">
            <svg className="w-4 h-4 text-[#C17F5E]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
            </svg>
            <span className="text-[11px] font-semibold text-[#5C5C5C] uppercase tracking-[0.12em]">
              Microlearning for Modern Homes
            </span>
          </div>

          {/* Headlines - Display sizes */}
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-[#2F2F2F] leading-[1.1] tracking-[-0.02em] mb-2">
            Rooted in Learning
          </h1>
          <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-serif italic text-[#C17F5E] mb-8">
            Microlearning Shop
          </h2>

          {/* Description */}
          <p className="text-[#666666] text-base md:text-lg leading-[1.7] max-w-2xl mx-auto mb-10">
            Empower your child&apos;s education with bite-sized, pedagogical tools designed for deep mastery through independent exploration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5C6B4A] text-white px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2.5 hover:bg-[#4A5638] transition-all shadow-md">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Weekly Bundles
            </button>
            <button className="bg-white text-[#2F2F2F] px-8 py-4 rounded-full text-sm font-semibold border-2 border-[#E8E4DD] inline-flex items-center justify-center gap-2.5 hover:border-[#C17F5E] transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Individual Skill Lessons
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white border-y border-[#E8E4DD]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="text-center">
              <div className="w-14 h-14 rounded-[1rem] bg-[#C17F5E]/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#C17F5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2 text-lg">Certified Pedagogy</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Teacher-designed curriculum for exponential student growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-[1rem] bg-[#C17F5E]/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#C17F5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2 text-lg">Flexible Learning</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Bite-sized lessons that fit perfectly into your family&apos;s schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-[1rem] bg-[#C17F5E]/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#C17F5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2F2F2F] mb-2 text-lg">At-Home Mastery</h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Designed for independent exploration in your own safe space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-sm bg-[#FAF7F2] sticky top-[72px] z-40 border-b border-[#E8E4DD]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    cat.active
                      ? "bg-[#5C6B4A] text-white shadow-md"
                      : "bg-white text-[#666666] border border-[#E8E4DD] hover:border-[#C17F5E] hover:text-[#C17F5E]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#666666]">Sort by:</span>
              <select className="bg-white border border-[#E8E4DD] rounded-[0.75rem] px-4 py-2.5 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#C17F5E] min-w-[140px]">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bundle Section */}
      <section className="section bg-[#FAF7F2]">
        <div className="container">
          <div className="flex items-center justify-between mb-10 md:mb-12">
            <div>
              <p className="text-[11px] font-bold text-[#C17F5E] uppercase tracking-[0.12em] mb-2">
                Curated Favorites
              </p>
              <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-[#2F2F2F] leading-[1.2]">
                Weekly Learning Bundles
              </h2>
            </div>
            <Link href="/microlearning" className="text-sm font-semibold text-[#C17F5E] hover:text-[#A96B4D] hidden md:flex items-center gap-1.5">
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
            {/* Featured Bundle Card */}
            <div className="lg:col-span-2 bg-white rounded-[1.5rem] overflow-hidden border border-[#E8E4DD] shadow-lg hover:shadow-xl transition-all">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-[#F5EFE7] to-[#D9D5CE] p-8 md:p-10 flex items-center justify-center min-h-[240px] md:min-h-[280px] relative">
                  <span className="absolute top-5 left-5 px-3 py-1.5 bg-[#C17F5E] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {featuredBundle.badge}
                  </span>
                  <svg className="w-24 h-24 md:w-28 md:h-28 text-[#C17F5E]" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 Q35 25 35 45 Q35 60 50 70 Q40 75 35 85 L50 90 L65 85 Q60 75 50 70 Q65 60 65 45 Q65 25 50 10 Z" />
                    <path d="M30 30 Q20 35 15 45 Q12 55 20 65 L30 55 Q25 50 27 42 Q29 35 35 32 Z" opacity="0.7" />
                    <path d="M70 30 Q80 35 85 45 Q88 55 80 65 L70 55 Q75 50 73 42 Q71 35 65 32 Z" opacity="0.7" />
                  </svg>
                </div>
                <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredBundle.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold text-[#C17F5E] uppercase tracking-[0.08em] px-2.5 py-1 bg-[#C17F5E]/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2F2F2F] mb-4 leading-tight">{featuredBundle.title}</h3>
                  <p className="text-sm text-[#666666] mb-6 leading-relaxed">{featuredBundle.description}</p>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-2xl md:text-3xl font-bold text-[#2F2F2F]">${featuredBundle.price.toFixed(2)}</span>
                    <span className="text-base md:text-lg text-[#999999] line-through">${featuredBundle.originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-semibold text-[#6B7B5E]">Save {Math.round(((featuredBundle.originalPrice - featuredBundle.price) / featuredBundle.originalPrice) * 100)}%</span>
                  </div>
                  <button className="bg-[#5C6B4A] text-white px-6 py-3.5 md:py-4 rounded-[0.75rem] font-semibold text-sm inline-flex items-center justify-center gap-2.5 hover:bg-[#4A5638] transition-all shadow-md w-full md:w-auto">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Bundle
                  </button>
                </div>
              </div>
            </div>

            {/* Side Products */}
            <div className="flex flex-col gap-5">
              {sideProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-[1rem] border border-[#E8E4DD] p-5 md:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#F5EFE7] to-[#D9D5CE] rounded-[0.75rem] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#C17F5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                        {product.id === 1 ? (
                          <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-[#C17F5E] uppercase tracking-[0.08em] mb-1.5">{product.category}</p>
                      <h4 className="font-bold text-[#2F2F2F] text-base mb-2">{product.title}</h4>
                      <span className="text-lg md:text-xl font-bold text-[#2F2F2F]">${product.price.toFixed(2)}</span>
                    </div>
                    <button className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-[#E8E4DD] flex items-center justify-center text-[#666666] hover:bg-[#5C6B4A] hover:text-white hover:border-[#5C6B4A] transition-all shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mindful Morning Starters */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-10 md:mb-12">
            <p className="text-[11px] font-bold text-[#C17F5E] uppercase tracking-[0.12em] mb-2">Start the Day Right</p>
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-[#2F2F2F] leading-[1.2]">Mindful Morning Starters</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {morningStarters.map((product, index) => (
              <div key={product.id} className="bg-white rounded-[1rem] border border-[#E8E4DD] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className={`aspect-[4/3] flex items-center justify-center ${
                  index === 0 ? "bg-gradient-to-br from-[#C17F5E]/20 to-[#D4A57B]/30" :
                  index === 1 ? "bg-gradient-to-br from-[#F5EFE7] to-[#D9D5CE]" :
                  "bg-gradient-to-br from-[#8B9B7A]/20 to-[#6B7B5E]/20"
                }`}>
                  <svg className={`w-12 h-12 md:w-14 md:h-14 group-hover:scale-110 transition-transform ${
                    index === 0 ? "text-[#C17F5E]" : index === 1 ? "text-[#5C6B4A]" : "text-[#6B7B5E]"
                  }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    {product.id === 3 && <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />}
                    {product.id === 4 && <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeLinecap="round" strokeLinejoin="round" />}
                    {product.id === 5 && <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />}
                  </svg>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[10px] font-bold text-[#C17F5E] uppercase tracking-[0.08em] mb-2">{product.category}</p>
                  <h4 className="font-bold text-[#2F2F2F] text-base mb-3 min-h-[44px] leading-snug">{product.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-xl font-bold text-[#2F2F2F]">${product.price.toFixed(2)}</span>
                    <button className="text-xs font-semibold text-[#C17F5E] hover:underline">Quick Add</button>
                  </div>
                </div>
              </div>
            ))}

            {/* Membership Card */}
            <div className="bg-gradient-to-br from-[#5C6B4A] to-[#4A5638] rounded-[1rem] p-6 md:p-7 flex flex-col justify-center text-center">
              <div className="w-12 h-12 rounded-[0.75rem] bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Unlimited Membership</h4>
              <p className="text-sm text-[#C5D1B8] mb-5 leading-relaxed">
                Access our entire modular learning library for one monthly fee.
              </p>
              <button className="bg-white/20 text-white px-5 py-2.5 rounded-[0.75rem] text-sm font-semibold hover:bg-white/30 transition-all border border-white/30">
                Coming Early 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-[#F5EFE7]">
        <div className="container">
          <div className="bg-white rounded-[1.5rem] shadow-xl p-8 md:p-12 lg:p-14 border border-[#E8E4DD]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <p className="text-[11px] font-bold text-[#C17F5E] uppercase tracking-[0.12em] mb-3">Weekly Newsletter</p>
                <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-[#2F2F2F] mb-4 leading-[1.2]">Join 5,000+ Educators</h2>
                <p className="text-[#666666] leading-[1.7]">
                  Get weekly microteaching tips, pedagogical insights, and exclusive free product drops delivered straight to your inbox.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <input type="email" placeholder="your@email.com" className="py-3.5 md:py-4 px-5 border-2 border-[#E8E4DD] rounded-[0.75rem] flex-1 focus:outline-none focus:border-[#C17F5E]" />
                  <button className="bg-[#5C6B4A] text-white px-8 py-3.5 md:py-4 rounded-[0.75rem] text-sm font-semibold hover:bg-[#4A5638] transition-all shadow-md whitespace-nowrap">
                    Join Now
                  </button>
                </div>
                <p className="text-xs text-[#999999]">We respect your inbox. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="section-lg bg-[#5C6B4A]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-lg">
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-serif italic text-white leading-[1.15] mb-4">
                Sponsor a Family
              </h2>
              <p className="text-[#C5D1B8] text-base md:text-lg leading-[1.7]">
                Every child deserves access to high-quality educational resources. Your donation provides a full year of microlearning access to a family in an underserved community.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-5">
              <div className="flex gap-3">
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-[#8B9B7A] text-[#C5D1B8] font-bold hover:bg-white/10 transition-all">$25</button>
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[#C17F5E] text-white font-bold hover:bg-[#A96B4D] transition-all shadow-lg">$50</button>
                <button className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-2 border-[#8B9B7A] text-[#C5D1B8] font-bold hover:bg-white/10 transition-all">$100</button>
              </div>
              <button className="bg-white text-[#5C6B4A] px-6 py-3.5 rounded-[0.75rem] font-semibold text-sm inline-flex items-center gap-2.5 hover:bg-[#F5F3F0] transition-all shadow-lg">
                <svg className="w-5 h-5 text-[#C17F5E]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Donate Access Today
              </button>
              <p className="text-[10px] text-[#8B9B7A] uppercase tracking-[0.15em] font-semibold">Tax Deductible & Life Changing</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
