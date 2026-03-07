import type { Metadata } from "next";
import Link from "next/link";
import "./favorites.css";

export const metadata: Metadata = {
  title: "Recommended Tools | The Rooted Learner",
  description:
    "Curated list of must-have tools, books, and gear for educators. Personally tested and recommended by a veteran teacher.",
  keywords: ["teacher favorites", "educator tools", "classroom supplies", "teaching books", "educational gear"],
  alternates: {
    canonical: "/resources/recommended-tools",
  },
  openGraph: {
    title: "Recommended Tools | The Rooted Learner",
    description: "Educator-recommended must-haves, personally tested and recommended.",
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

export default function RecommendedToolsPage() {
  return (
    <div className="min-h-screen bg-(--neutral-bg)">
      {/* Hero Section */}
      <section className="favs-hero">
        <div className="favs-container">
          {/* Breadcrumb */}
          <nav className="favs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources" className="favs-breadcrumb-link">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </nav>

          <div className="favs-hero-inner">
            <p className="favs-hero-label">Educator-Recommended</p>
            <h1 className="favs-hero-title">Recommended Tools</h1>
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

                <span className="fav-card-link" style={{ opacity: 0.6, cursor: "default" }}>
                  Links coming soon
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links for Internal Navigation */}
      <section className="favs-crosslinks">
        <div className="favs-container">
          <div className="favs-crosslinks-grid">
            <Link href="/resources" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">Free Resources</h3>
              <p className="favs-crosslink-desc">
                Lesson samples, downloadables, and teacher tools — all free.
              </p>
              <span className="favs-crosslink-cta">
                Browse Resources
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/products/teacher-tools" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">Teacher Tools & Tutorials</h3>
              <p className="favs-crosslink-desc">
                Step-by-step video tutorials and premium tools that save you time.
              </p>
              <span className="favs-crosslink-cta">
                Explore Tools
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/products" className="favs-crosslink-card">
              <div className="favs-crosslink-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="favs-crosslink-title">All Products</h3>
              <p className="favs-crosslink-desc">
                AssessAlign, lessons, and digital tools built for educators.
              </p>
              <span className="favs-crosslink-cta">
                View Products
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
