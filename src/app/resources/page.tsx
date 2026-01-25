import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated digital tools, lesson plans, and classroom materials designed for modern educators. Find resources for Math, ELA, Science, and more.",
  openGraph: {
    title: "Teaching Resources | Rooted in Learning",
    description:
      "Curated digital tools, lesson plans, and classroom materials designed for modern educators.",
  },
};

const resources = [
  {
    id: 1,
    title: "Algebra Interactive Bundle",
    image: "📐",
    price: 12.0,
    rating: 4.5,
    reviews: 45,
    tags: ["Math", "Grades 6-8"],
    featured: true,
    bgColor: "from-moss/20 to-gentle-hold",
  },
  {
    id: 2,
    title: "Editable Classroom Labels",
    image: "🏷️",
    price: 5.5,
    rating: 4,
    reviews: 12,
    tags: ["Decor", "All Grades"],
    featured: false,
    bgColor: "from-womb-bloom/20 to-gentle-hold",
  },
  {
    id: 3,
    title: "Novel Study: The Wild Robot",
    image: "🤖",
    price: 8.0,
    rating: 5,
    reviews: 89,
    tags: ["Reading", "Grades 3-5"],
    featured: false,
    bgColor: "from-sacred-ember/10 to-gentle-hold",
  },
  {
    id: 4,
    title: "Science Lab Stations Kit",
    image: "🔬",
    price: 15.0,
    rating: 4.5,
    reviews: 67,
    tags: ["Science", "Grades 4-6"],
    featured: false,
    bgColor: "from-calm-spirit/30 to-gentle-hold",
  },
  {
    id: 5,
    title: "Morning Meeting Slides",
    image: "☀️",
    price: 6.0,
    rating: 5,
    reviews: 124,
    tags: ["Digital", "K-3"],
    featured: true,
    bgColor: "from-womb-bloom/30 to-gentle-hold",
  },
  {
    id: 6,
    title: "Vocabulary Word Wall Set",
    image: "📝",
    price: 4.5,
    rating: 4,
    reviews: 38,
    tags: ["ELA", "All Grades"],
    featured: false,
    bgColor: "from-moss/10 to-gentle-hold",
  },
];

const categories = [
  { icon: "📋", label: "Lesson Plans" },
  { icon: "📄", label: "Worksheets" },
  { icon: "🎨", label: "Decor" },
  { icon: "💻", label: "Digital" },
];

const topics = ["Math", "Reading & ELA", "Science", "Social Studies"];
const grades = ["K-5 Elementary", "6-8 Middle School"];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-new-light">
      <Header />

      {/* Hero Section */}
      <section className="bg-rooted-earth py-10 md:py-14 lg:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Resources
          </h1>
          <p className="text-calm-spirit text-base md:text-lg max-w-2xl">
            Curated digital tools, lesson plans, and materials to power your
            modern classroom with a grounded, intentional approach.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-new-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar Filters - Mobile: Horizontal scroll, Desktop: Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              {/* Mobile Filter Toggle would go here in a real app */}

              {/* Search */}
              <div className="mb-6 md:mb-8">
                <label className="text-[10px] md:text-xs font-semibold text-onyx-muted uppercase tracking-wide mb-2 block">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    className="input pr-10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-onyx-muted hover:text-onyx">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Filters - Collapsible on mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
                {/* By Topic */}
                <div>
                  <label className="text-[10px] md:text-xs font-semibold text-onyx-muted uppercase tracking-wide mb-2 md:mb-3 block">
                    By Topic
                  </label>
                  <div className="flex flex-col gap-2 md:gap-3">
                    {topics.map((topic, index) => (
                      <label
                        key={topic}
                        className="flex items-center gap-2 md:gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          defaultChecked={index === 0}
                        />
                        <span className="text-sm text-onyx-light group-hover:text-onyx transition-colors">
                          {topic}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* By Grade */}
                <div>
                  <label className="text-[10px] md:text-xs font-semibold text-onyx-muted uppercase tracking-wide mb-2 md:mb-3 block">
                    By Grade
                  </label>
                  <div className="flex flex-col gap-2 md:gap-3">
                    {grades.map((grade, index) => (
                      <label
                        key={grade}
                        className="flex items-center gap-2 md:gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          defaultChecked={index === 1}
                        />
                        <span className="text-sm text-onyx-light group-hover:text-onyx transition-colors">
                          {grade}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Freebie Vault CTA */}
              <div className="bg-sacred-ember rounded-xl p-5 md:p-6 text-white mt-6 md:mt-8">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm md:text-base">
                    Freebie Vault
                  </span>
                </div>
                <p className="text-sm text-white/80 mb-3 md:mb-4">
                  Unlock access to exclusive free resources updated weekly.
                </p>
                <button className="w-full bg-white text-sacred-ember py-2 px-4 rounded-lg font-medium text-sm hover:bg-gentle-hold transition-colors">
                  Access Now
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Category Icons */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    className="flex flex-col items-center gap-1.5 md:gap-2 group"
                  >
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-white border border-border flex items-center justify-center text-xl md:text-2xl group-hover:border-sacred-ember group-hover:shadow-md transition-all">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-onyx-muted uppercase tracking-wide group-hover:text-onyx transition-colors">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Results Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                <p className="text-sm text-onyx-muted">
                  <span className="font-semibold text-onyx">124</span> resources
                  found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-onyx-muted hidden sm:inline">
                    Sort by:
                  </span>
                  <select className="input py-1.5 md:py-2 px-2 md:px-3 pr-6 md:pr-8 text-sm w-auto">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Resource Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                {resources.map((resource) => (
                  <div key={resource.id} className="product-card hover-lift">
                    <div
                      className={`product-card-image bg-gradient-to-br ${resource.bgColor} relative`}
                    >
                      {resource.featured && (
                        <span className="absolute top-2 left-2 md:top-3 md:left-3 badge badge-featured">
                          Featured
                        </span>
                      )}
                      <div className="h-full flex items-center justify-center text-4xl md:text-5xl">
                        {resource.image}
                      </div>
                    </div>
                    <div className="product-card-content">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2">
                        {resource.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 md:px-2 py-0.5 bg-gentle-hold rounded text-[9px] md:text-[10px] font-medium text-onyx uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h4 className="font-semibold text-onyx mb-1.5 md:mb-2 leading-snug text-sm md:text-base">
                        {resource.title}
                      </h4>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2 md:mb-3">
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
                                i < Math.floor(resource.rating)
                                  ? "fill-sacred-ember text-sacred-ember"
                                  : "fill-calm-spirit text-calm-spirit"
                              }`}
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[10px] md:text-xs text-onyx-muted">
                          ({resource.reviews})
                        </span>
                      </div>

                      {/* Price & Add to Cart */}
                      <div className="flex items-center justify-between">
                        <span className="text-base md:text-lg font-bold text-onyx">
                          ${resource.price.toFixed(2)}
                        </span>
                        <button className="btn btn-sm btn-secondary gap-1 md:gap-1.5">
                          <svg
                            className="w-3.5 h-3.5 md:w-4 md:h-4"
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
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1.5 md:gap-2">
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-border flex items-center justify-center text-onyx-muted hover:border-sacred-ember hover:text-sacred-ember transition-colors">
                  <svg
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-rooted-earth text-white font-medium text-sm">
                  1
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-border text-onyx-muted hover:border-sacred-ember hover:text-sacred-ember transition-colors font-medium text-sm">
                  2
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-border text-onyx-muted hover:border-sacred-ember hover:text-sacred-ember transition-colors font-medium text-sm">
                  3
                </button>
                <span className="px-1 md:px-2 text-onyx-muted text-sm">
                  ...
                </span>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-border text-onyx-muted hover:border-sacred-ember hover:text-sacred-ember transition-colors font-medium text-sm">
                  12
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-border flex items-center justify-center text-onyx-muted hover:border-sacred-ember hover:text-sacred-ember transition-colors">
                  <svg
                    className="w-3.5 h-3.5 md:w-4 md:h-4"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-4 md:py-6 bg-gentle-hold/50 border-t border-border">
        <div className="container">
          <div className="flex items-start gap-2 md:gap-3">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-calm-spirit flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] md:text-xs text-white">i</span>
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-semibold text-sacred-ember uppercase tracking-wide mb-0.5 md:mb-1">
                Transparency Note:
              </p>
              <p className="text-xs md:text-sm text-onyx-muted">
                Some of the links on this page are affiliate links. This means
                that at no additional cost to you, we may earn a small
                commission if you click through and make a purchase. We only
                recommend products we use and love for the modern classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
