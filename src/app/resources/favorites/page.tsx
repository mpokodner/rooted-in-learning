import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./favorites.css";

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
      <section className="favs-hero">
        <div className="favs-container">
          <div className="favs-hero-inner">
            <p className="favs-hero-label">Curated Must-Haves</p>
            <h1 className="favs-hero-title">Favorites</h1>
            <p className="favs-hero-desc">
              My personally curated collection of tools, books, and gear that I actually use and recommend to every educator.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="favs-filter">
        <div className="favs-container">
          <div className="favs-filter-inner">
            {categories.map((cat, index) => (
              <button
                key={cat.id}
                className={`favs-filter-btn${index === 0 ? " favs-filter-btn--active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="favs-grid-section">
        <div className="favs-container">
          <div className="favs-grid">
            {favorites.map((item) => (
              <div key={item.id} className="fav-card">
                {/* Icon */}
                <div className="fav-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>

                <span className="fav-card-badge">{item.category}</span>
                <h3 className="fav-card-title">{item.title}</h3>
                <p className="fav-card-desc">{item.description}</p>

                <a href={item.link} className="fav-card-link">
                  Check it out
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
