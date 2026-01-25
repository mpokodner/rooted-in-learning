import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microlearning Shop",
  description:
    "Empower your child's education with bite-sized, pedagogical tools designed for deep mastery through independent exploration.",
  openGraph: {
    title: "Microlearning Shop | Rooted in Learning",
    description:
      "Bite-sized, pedagogical tools designed for deep mastery through independent exploration.",
  },
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
  description:
    "A comprehensive weekly module covering leaf science, local ecosystem tracking, and creative storytelling projects. Perfect for families seeking nature-based learning experiences.",
  price: 34.0,
  originalPrice: 48.0,
  badge: "BESTSELLER",
  tags: ["Bundle", "Nature Science", "Creative Writing"],
};

const sideProducts = [
  {
    id: 1,
    title: "Math Mini-Spark Kit",
    price: 12.0,
    category: "DIGITAL RESOURCE",
  },
  {
    id: 2,
    title: "Yoga for Tiny Explorers",
    price: 15.0,
    category: "VIDEO COURSE",
  },
];

const morningStarters = [
  {
    id: 3,
    title: "Gratitude Journaling Cards",
    price: 8.5,
    category: "PRINTABLE",
    bgColor: "from-[#8B6F47] to-[#A0826D]",
  },
  {
    id: 4,
    title: "Story-Time Meditation",
    price: 12.0,
    category: "AUDIO COURSE",
    bgColor: "from-[#C4A57B] to-[#D4B896]",
  },
  {
    id: 5,
    title: "Sun Salute Posters",
    price: 18.0,
    category: "VISUAL GUIDE",
    bgColor: "from-[#8B9B7A] to-[#A4B88E]",
  },
];

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Certified Pedagogy",
    description: "Teacher-designed curriculum for exponential student growth.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Flexible Learning",
    description:
      "Bite-sized lessons that fit perfectly into your family's schedule.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "At-Home Mastery",
    description: "Designed for independent exploration in your own safe space.",
  },
];

export default function MicrolearningPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-[#E8DED0]">
              <svg
                className="w-4 h-4 text-[#C17B5C]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
              </svg>
              <span className="text-xs font-semibold text-[#6B6253] uppercase tracking-wider">
                Microlearning for Modern Homes
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F2F2F] mb-2 leading-tight">
              Rooted in Learning
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-[#C17B5C] mb-6">
              Microlearning Shop
            </h2>

            <p className="text-[#5C5C5C] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Empower your child&apos;s education with bite-sized, pedagogical
              tools designed for deep mastery through independent exploration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-[#5C6B4A] text-white px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#4A5638] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Weekly Bundles
              </button>
              <button className="bg-white text-[#2F2F2F] px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-[#E8DED0] inline-flex items-center justify-center gap-2 hover:bg-[#F5EFE7] hover:border-[#C17B5C] transition-all duration-300 w-full sm:w-auto">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Individual Skill Lessons
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white border-y border-[#E8DED0]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C17B5C]/10 to-[#C17B5C]/5 flex items-center justify-center mx-auto mb-4 text-[#C17B5C]">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[#2F2F2F] mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-[#FAF7F2] sticky top-0 z-40 border-b border-[#E8DED0]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    cat.active
                      ? "bg-[#5C6B4A] text-white shadow-md"
                      : "bg-white text-[#5C5C5C] border border-[#E8DED0] hover:border-[#C17B5C] hover:text-[#C17B5C]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 w-full lg:w-auto">
              <span className="text-sm text-[#5C5C5C] whitespace-nowrap">
                Sort by:
              </span>
              <select className="bg-white border border-[#E8DED0] rounded-lg px-4 py-2 text-sm text-[#2F2F2F] focus:outline-none focus:border-[#C17B5C] transition-colors flex-1 lg:flex-initial">
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
      <section className="py-12 md:py-16 bg-[#FAF7F2]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold text-[#C17B5C] uppercase tracking-wider mb-1">
                Curated Favorites
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F]">
                Weekly Learning Bundles
              </h2>
            </div>
            <Link
              href="/microlearning"
              className="text-sm font-semibold text-[#C17B5C] hover:text-[#A0624A] transition-colors hidden md:flex items-center gap-1"
            >
              View All
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Bundle Card */}
            <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border border-[#E8DED0] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-[#F5E6D3] to-[#E8D4B8] p-8 flex items-center justify-center min-h-[280px] relative">
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-[#C17B5C] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {featuredBundle.badge}
                  </span>
                  {/* Autumn themed illustration placeholder */}
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574] to-[#B88C5C] rounded-full opacity-20 animate-pulse"></div>
                    <svg
                      className="w-32 h-32 text-[#C17B5C]"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                    >
                      <path d="M50 10 Q35 25 35 45 Q35 60 50 70 Q40 75 35 85 L50 90 L65 85 Q60 75 50 70 Q65 60 65 45 Q65 25 50 10 Z" />
                      <path
                        d="M30 30 Q20 35 15 45 Q12 55 20 65 L30 55 Q25 50 27 42 Q29 35 35 32 Z"
                        opacity="0.7"
                      />
                      <path
                        d="M70 30 Q80 35 85 45 Q88 55 80 65 L70 55 Q75 50 73 42 Q71 35 65 32 Z"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredBundle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-[#C17B5C] uppercase tracking-wider px-2 py-1 bg-[#C17B5C]/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2F2F2F] mb-3 leading-tight">
                    {featuredBundle.title}
                  </h3>
                  <p className="text-sm text-[#5C5C5C] mb-5 leading-relaxed">
                    {featuredBundle.description}
                  </p>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-bold text-[#2F2F2F]">
                      ${featuredBundle.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-[#999999] line-through">
                      ${featuredBundle.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-[#C17B5C]">
                      Save{" "}
                      {Math.round(
                        ((featuredBundle.originalPrice - featuredBundle.price) /
                          featuredBundle.originalPrice) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                  <button className="bg-[#5C6B4A] text-white px-6 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-[#4A5638] transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto">
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
                    Add to Bundle
                  </button>
                </div>
              </div>
            </div>

            {/* Side Products */}
            <div className="flex flex-col gap-5">
              {sideProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-[#E8DED0] p-5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F5EFE7] to-[#E8DED0] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {/* Icon placeholder for digital products */}
                      <svg
                        className="w-10 h-10 text-[#C17B5C]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        {product.id === 1 ? (
                          <path
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <path
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-[#C17B5C] uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h4 className="font-bold text-[#2F2F2F] text-base mb-2 leading-snug">
                        {product.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#2F2F2F]">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button className="w-9 h-9 rounded-full border-2 border-[#E8DED0] flex items-center justify-center text-[#5C5C5C] hover:bg-[#5C6B4A] hover:text-white hover:border-[#5C6B4A] transition-all duration-300 shrink-0">
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
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link for Mobile */}
          <Link
            href="/microlearning"
            className="text-sm font-semibold text-[#C17B5C] hover:text-[#A0624A] transition-colors flex md:hidden items-center justify-center gap-1 mt-6"
          >
            View All
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Mindful Morning Starters Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-xs font-bold text-[#C17B5C] uppercase tracking-wider mb-1">
              Start the Day Right
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F]">
              Mindful Morning Starters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {morningStarters.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#E8DED0] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${product.bgColor} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Digital product icon */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-lg rotate-12"></div>
                    <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
                  </div>
                  <svg
                    className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    {product.id === 3 && (
                      <path
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {product.id === 4 && (
                      <path
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {product.id === 5 && (
                      <path
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold text-[#C17B5C] uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h4 className="font-bold text-[#2F2F2F] text-base mb-3 leading-snug min-h-[48px]">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#2F2F2F]">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="text-xs font-semibold text-[#C17B5C] hover:text-[#A0624A] hover:underline transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Membership Card */}
            <div className="bg-gradient-to-br from-[#5C6B4A] to-[#4A5638] rounded-2xl p-6 flex flex-col justify-center text-center border border-[#4A5638] hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                Unlimited Membership
              </h4>
              <p className="text-sm text-[#D4E5C9] mb-5 leading-relaxed">
                Access our entire modular learning library for one monthly fee.
              </p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
                Coming Early 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-[#F5EFE7]">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#E8DED0]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-bold text-[#C17B5C] uppercase tracking-wider mb-2">
                  Weekly Newsletter
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-3">
                  Join 5,000+ Educators
                </h2>
                <p className="text-[#5C5C5C] leading-relaxed">
                  Get weekly microteaching tips, pedagogical insights, and
                  exclusive free product drops delivered straight to your inbox.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="py-3.5 px-5 border-2 border-[#E8DED0] rounded-xl flex-1 bg-white focus:outline-none focus:border-[#C17B5C] transition-colors text-[#2F2F2F]"
                  />
                  <button className="bg-[#5C6B4A] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#4A5638] transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                    Join Now
                  </button>
                </div>
                <p className="text-xs text-[#999999]">
                  We respect your inbox. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section
        className="py-16 md:py-20 bg-gradient-to-br from-[#5C6B4A] to-[#4A5638]"
        id="sponsor"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Sponsor a Family
              </h2>
              <p className="text-[#D4E5C9] text-lg leading-relaxed max-w-lg">
                Every child deserves access to high-quality educational
                resources. Your donation provides a full year of microlearning
                access to a family in an underserved community.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-6">
              {/* Donation Amount Buttons */}
              <div className="flex gap-4">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D4E5C9] text-[#D4E5C9] font-bold hover:bg-white/10 transition-all duration-300 text-lg">
                  $25
                </button>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C17B5C] text-white font-bold hover:bg-[#A0624A] transition-all duration-300 shadow-lg text-lg">
                  $50
                </button>
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D4E5C9] text-[#D4E5C9] font-bold hover:bg-white/10 transition-all duration-300 text-lg">
                  $100
                </button>
              </div>

              {/* Donate Button */}
              <button className="bg-white text-[#5C6B4A] px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-[#F5EFE7] transition-all duration-300 shadow-xl hover:shadow-2xl text-base">
                <svg
                  className="w-6 h-6 text-[#C17B5C]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>Donate Access Today</span>
              </button>

              <p className="text-xs text-[#D4E5C9] uppercase tracking-widest font-semibold">
                Tax Deductible & Life Changing
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
