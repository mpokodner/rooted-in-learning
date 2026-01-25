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
    "A comprehensive weekly module covering leaf science, local ecosystem tracking, and creative storytelling projects. Perfect for...",
  price: 34.0,
  originalPrice: 48.0,
  image: "🍂",
  badge: "Bestseller",
};

const products = [
  {
    id: 1,
    title: "Math Mini-Spark Kit",
    price: 12.0,
    image: "🧮",
    category: "STEM",
  },
  {
    id: 2,
    title: "Yoga for Tiny Explorers",
    price: 15.0,
    image: "🧘",
    category: "Mindfulness",
  },
  {
    id: 3,
    title: "Gratitude Journaling Cards",
    price: 8.5,
    image: "📝",
    category: "Printable",
  },
  {
    id: 4,
    title: "Story-Time Meditation",
    price: 12.0,
    image: "🎧",
    category: "Audio Course",
  },
  {
    id: 5,
    title: "Sun Salute Posters",
    price: 18.0,
    image: "☀️",
    category: "Visual Guide",
  },
];

const features = [
  {
    icon: "🏆",
    title: "Certified Pedagogy",
    description: "Teacher-designed curriculum for exponential student growth.",
  },
  {
    icon: "🎯",
    title: "Flexible Learning",
    description: "Bite-sized lessons that fit perfectly into your family's schedule.",
  },
  {
    icon: "🏠",
    title: "At-Home Mastery",
    description: "Designed for independent exploration in your own safe space.",
  },
];

export default function MicrolearningPage() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gentle-hold/50 to-new-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <svg
                className="w-4 h-4 text-sacred-ember"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
              </svg>
              <span className="text-xs font-semibold text-rooted-earth uppercase tracking-wider">
                Microlearning for Modern Homes
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-onyx mb-2">
              Rooted in Learning
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-sacred-ember mb-6">
              Microlearning Shop
            </h2>

            <p className="text-onyx-muted text-base md:text-lg max-w-2xl mx-auto mb-8">
              Empower your child&apos;s education with bite-sized, pedagogical tools
              designed for deep mastery through independent exploration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-rooted-earth text-white px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-rooted-earth-dark transition-colors">
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Weekly Bundles
              </button>
              <button className="bg-white text-onyx px-6 py-3.5 rounded-full text-sm font-semibold border border-border inline-flex items-center justify-center gap-2 hover:bg-gentle-hold transition-colors">
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
      <section className="py-10 md:py-14 bg-white border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sacred-ember/10 flex items-center justify-center mx-auto mb-4 text-xl">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-onyx mb-2">{feature.title}</h3>
                <p className="text-sm text-onyx-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 bg-new-light border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat.active
                      ? "bg-rooted-earth text-white"
                      : "bg-white text-onyx-light border border-border hover:border-rooted-earth"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-onyx-muted">Sort by:</span>
              <select className="bg-white border border-border rounded-lg px-3 py-2 text-sm">
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
      <section className="py-10 md:py-14 bg-new-light">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-semibold text-sacred-ember uppercase tracking-widest mb-1">
                Curated Favorites
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-onyx font-serif">
                Weekly Learning Bundles
              </h2>
            </div>
            <Link
              href="/microlearning"
              className="text-sm font-medium text-sacred-ember hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Bundle Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-border flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-sacred-ember/20 to-womb-bloom/30 p-6 flex items-center justify-center min-h-[250px] relative">
                <span className="absolute top-4 left-4 px-3 py-1 bg-sacred-ember text-white text-xs font-semibold rounded-full uppercase">
                  {featuredBundle.badge}
                </span>
                <div className="text-7xl">{featuredBundle.image}</div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-onyx mb-3">
                  {featuredBundle.title}
                </h3>
                <p className="text-sm text-onyx-muted mb-4 leading-relaxed">
                  {featuredBundle.description}
                </p>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-bold text-onyx">
                    ${featuredBundle.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-onyx-muted line-through">
                    ${featuredBundle.originalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="bg-rooted-earth text-white px-6 py-3 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:bg-rooted-earth-dark transition-colors w-fit">
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
                  Add to Bundle
                </button>
              </div>
            </div>

            {/* Side Products */}
            <div className="flex flex-col gap-4">
              {products.slice(0, 2).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-border p-4 flex items-center gap-4"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gentle-hold to-calm-spirit/20 rounded-lg flex items-center justify-center text-3xl shrink-0">
                    {product.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-onyx mb-1 text-sm">
                      {product.title}
                    </h4>
                    <p className="text-lg font-bold text-onyx">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-onyx-muted hover:bg-gentle-hold hover:text-onyx transition-colors">
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mindful Morning Starters Section */}
      <section className="py-10 md:py-14 bg-new-light">
        <div className="container">
          <div className="mb-6">
            <p className="text-xs font-semibold text-sacred-ember uppercase tracking-widest mb-1">
              Start the Day Right
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-onyx font-serif">
              Mindful Morning Starters
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.slice(2).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square bg-gradient-to-br from-gentle-hold to-calm-spirit/30 flex items-center justify-center text-4xl md:text-5xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold text-sacred-ember uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h4 className="font-semibold text-onyx text-sm mb-2 leading-snug">
                    {product.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-onyx">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="text-xs font-medium text-sacred-ember hover:underline">
                      Quick Add
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Membership Card */}
            <div className="bg-rooted-earth rounded-xl p-6 flex flex-col justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Unlimited Membership
              </h4>
              <p className="text-sm text-calm-spirit mb-4 leading-relaxed">
                Access our entire modular learning library for one monthly fee.
              </p>
              <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
                Coming Early 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-gentle-hold">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold text-sacred-ember uppercase tracking-widest mb-2">
                Weekly Newsletter
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-onyx mb-3">
                Join 5,000+ Educators
              </h2>
              <p className="text-sm text-onyx-muted leading-relaxed">
                Get weekly microteaching tips, pedagogical insights, and exclusive
                free product drops delivered straight to your inbox.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input py-3 px-4 border-border rounded-lg flex-1 bg-white"
                />
                <button className="bg-rooted-earth text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-rooted-earth-dark transition-colors whitespace-nowrap">
                  Join Now
                </button>
              </div>
              <p className="text-xs text-onyx-muted">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor a Family Section */}
      <section className="py-16 md:py-20 bg-rooted-earth" id="sponsor">
        <div className="container">
          <div className="bg-rooted-earth-light/30 rounded-2xl md:rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif italic">
                  Sponsor a Family
                </h2>
                <p className="text-calm-spirit text-base leading-relaxed max-w-lg">
                  Every child deserves access to high-quality educational resources.
                  Your donation provides a full year of microlearning access to a
                  family in an underserved community.
                </p>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-6">
                {/* Donation Amount Buttons */}
                <div className="flex gap-3">
                  <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-calm-spirit text-calm-spirit font-bold hover:bg-white/10 transition-colors">
                    $25
                  </button>
                  <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-sacred-ember text-white font-bold hover:bg-sacred-ember-dark transition-colors">
                    $50
                  </button>
                  <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-calm-spirit text-calm-spirit font-bold hover:bg-white/10 transition-colors">
                    $100
                  </button>
                </div>

                {/* Donate Button */}
                <button className="bg-white text-rooted-earth px-6 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-gentle-hold transition-colors">
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
                  <span>Donate Access Today</span>
                </button>

                <p className="text-xs text-calm-spirit uppercase tracking-widest">
                  Tax Deductible & Life Changing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
