import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Rooted in Learning",
  description:
    "Explore our collection of ready-to-use lessons, tech tutorials, and curated educator favorites. Teaching resources designed to save you time.",
  keywords: ["teaching resources", "lesson plans", "tech tutorials", "educator tools", "classroom resources"],
  openGraph: {
    title: "Resources | Rooted in Learning",
    description: "Ready-to-use lessons, tech tutorials, and curated educator favorites.",
    type: "website",
  },
};

const resourceCategories = [
  {
    title: "Lessons",
    description: "Standards-aligned, ready-to-use curriculum and activities for K-8 classrooms and homeschool families. Just download and teach.",
    href: "/resources/lessons",
    icon: (
      <svg className="w-8 h-8 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-[#5C6B4D]",
    stats: "50+ Resources",
  },
  {
    title: "Tech Tips",
    description: "Step-by-step tech training and tutorials so you can integrate tools with confidence — no IT degree required.",
    href: "/resources/tech-tips",
    icon: (
      <svg className="w-8 h-8 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-[#C17B5C]",
    stats: "30+ Tutorials",
  },
  {
    title: "Favorites",
    description: "My personally curated must-haves — the tools, books, and gear I actually use and recommend to every educator.",
    href: "/resources/favorites",
    icon: (
      <svg className="w-8 h-8 text-[#5C6B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "bg-[#8B9B7A]",
    stats: "20+ Picks",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-bold text-[#C17B5C] uppercase tracking-[0.15em] mb-4">
              Your Teaching Toolkit
            </p>
            <h1 className="hero-heading text-[#2D2D2D] mb-6">
              Resources
            </h1>
            <p className="text-[#666666] text-base md:text-lg leading-[1.7]">
              Everything you need to teach smarter, not harder. Curriculum, tech training, and curated gear — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-lg bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {resourceCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group bg-[#FAF7F2] rounded-[1.5rem] p-6 md:p-8 border border-[#E8DED0] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 rounded-[1rem] bg-[#F5EFE7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="inline-block px-3 py-1 bg-[#E8DED0] rounded-full text-[10px] font-bold text-[#5C6B4D] uppercase tracking-wide mb-4">
                  {category.stats}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-[#2D2D2D] mb-3">{category.title}</h2>
                <p className="text-sm text-[#666666] mb-6 leading-relaxed">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] group-hover:gap-3 transition-all">
                  Explore {category.title}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-[#5C6B4D]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 text-white mb-4">
              Get Free Resources Weekly
            </h2>
            <p className="text-[#C5D1B8] mb-8">
              Join 5,000+ educators and get free resources, tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3.5 rounded-[0.75rem] border-2 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-[#5C6B4D] px-6 py-3.5 rounded-[0.75rem] font-semibold text-sm hover:bg-[#F5F3F0] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
