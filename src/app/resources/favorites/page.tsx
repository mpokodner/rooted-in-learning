import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Rooted in Learning",
  description:
    "Curated list of must-have tools, books, and gear for educators. Personally tested and recommended by a veteran teacher.",
  keywords: ["teacher favorites", "educator tools", "classroom supplies", "teaching books", "educational gear"],
  openGraph: {
    title: "Favorites | Rooted in Learning",
    description: "Curated must-haves for educators, personally tested and recommended.",
    type: "website",
  },
};

const categories = [
  { id: "all", label: "All Favorites" },
  { id: "tools", label: "Digital Tools" },
  { id: "books", label: "Books" },
  { id: "gear", label: "Classroom Gear" },
];

const favorites = [
  { id: 1, title: "Rocketbook Smart Notebook", category: "Gear", description: "Reusable notebook that syncs to cloud. Perfect for quick notes and lesson ideas.", link: "#" },
  { id: 2, title: "Notion for Teachers", category: "Tools", description: "The all-in-one workspace I use to plan lessons, track students, and organize my life.", link: "#" },
  { id: 3, title: "The First Days of School", category: "Books", description: "A classic that every educator should read. Practical classroom management strategies.", link: "#" },
  { id: 4, title: "Blue Light Glasses", category: "Gear", description: "Essential for screen-heavy days. These have saved my eyes during virtual teaching.", link: "#" },
  { id: 5, title: "Canva Pro for Education", category: "Tools", description: "Free for educators! Create stunning worksheets, presentations, and classroom decor.", link: "#" },
  { id: 6, title: "Atomic Habits", category: "Books", description: "Game-changer for building routines — for yourself and your students.", link: "#" },
];

export default function FavoritesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[#F5EFE7] to-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#5C6B4D] mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
            <p className="text-[11px] font-bold text-[#C17B5C] uppercase tracking-[0.15em] mb-4">
              Curated Must-Haves
            </p>
            <h1 className="hero-heading text-[#2D2D2D] mb-6">
              Favorites
            </h1>
            <p className="text-[#666666] text-base md:text-lg leading-[1.7]">
              My personally curated collection of tools, books, and gear that I actually use and recommend to every educator.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 bg-white border-y border-[#E8DED0] sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-[#5C6B4D] text-white"
                    : "bg-[#F5EFE7] text-[#666666] hover:bg-[#E8DED0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="section-lg bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[1.25rem] p-6 border border-[#E8DED0] hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                {/* Icon placeholder */}
                <div className="w-14 h-14 rounded-[1rem] bg-[#F5EFE7] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[#C17B5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>

                <span className="inline-block px-2.5 py-1 bg-[#E8DED0] rounded-full text-[10px] font-bold text-[#5C6B4D] uppercase mb-3">
                  {item.category}
                </span>

                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#5C6B4D] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#666666] mb-5 leading-relaxed">{item.description}</p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C17B5C] group-hover:gap-3 transition-all"
                >
                  Check it out
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
