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
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <Header />

      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-b from-[var(--beige-bg)] to-[var(--neutral-bg)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/resources" className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--text-muted)] hover:text-[var(--earth)] mb-6 transition-colors duration-[var(--duration-fast)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Resources
            </Link>
            <p className="text-[var(--text-xs)] font-bold text-[var(--terracotta)] uppercase tracking-[var(--tracking-widest)] mb-4">
              Curated Must-Haves
            </p>
            <h1 className="hero-heading text-[var(--text-dark)] mb-6">
              Favorites
            </h1>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)]">
              My personally curated collection of tools, books, and gear that I actually use and recommend to every educator.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 bg-[var(--white)] border-y border-[var(--border-beige)] sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-full text-[var(--text-sm)] font-medium transition-all duration-[var(--duration-fast)] ${
                  index === 0
                    ? "bg-[var(--earth)] text-[var(--white)]"
                    : "bg-[var(--beige-bg)] text-[var(--text-muted)] hover:bg-[var(--border-beige)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="section-lg bg-[var(--neutral-bg)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--white)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] group"
              >
                {/* Icon placeholder */}
                <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-[var(--beige-bg)] flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-[var(--terracotta)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>

                <span className="inline-block px-2.5 py-1 bg-[var(--border-beige)] rounded-full text-[10px] font-bold text-[var(--earth)] uppercase mb-3">
                  {item.category}
                </span>

                <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--earth)] transition-colors duration-[var(--duration-fast)]">{item.title}</h3>
                <p className="text-[var(--text-sm)] text-[var(--text-muted)] mb-5 leading-[var(--leading-relaxed)]">{item.description}</p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[var(--text-sm)] font-semibold text-[var(--terracotta)] group-hover:gap-3 transition-all duration-[var(--duration-fast)]"
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
