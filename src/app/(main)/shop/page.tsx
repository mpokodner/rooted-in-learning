"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All" },
  { id: "Lesson Plans", label: "Lesson Plans" },
  { id: "Assessment Tools", label: "Assessment Tools" },
  { id: "ELD Resources", label: "ELD Resources" },
  { id: "Bundles", label: "Bundles" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A–Z" },
];

const TPT_URL = "https://www.teacherspayteachers.com/store/rootedinlearninged";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <>
      <section
        className="section--tight hero"
        style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}
        aria-labelledby="shop-heading"
      >
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Shop · classroom resources</span>
            <h1 id="shop-heading" className="h-xl mt-3">
              Put it to work this week.
            </h1>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Field-tested digital resources, built from inside the classroom. We sell
              while we build — so the tools that helped us help you too.
            </p>
          </div>

          <div
            className="shop-filters mt-4 reveal"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`chip${activeCategory === cat.id ? " chip--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="shop-toolbar reveal" aria-label="Shop filters and search">
            <div className="shop-search">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search resources..."
                aria-label="Search resources"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="shop-sort">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="card reveal text-center" style={{ padding: "clamp(2rem, 4vw, 3rem)" }}>
            <div className="card-icon card-icon--terra" style={{ marginInline: "auto" }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h2 className="h-md mt-3">We&apos;re Growing Our Shop</h2>
            <p className="muted mt-3 mx-auto" style={{ maxWidth: "48ch" }}>
              New roots are taking hold. Standards-aligned resources, WIDA overlays,
              assessment kits, and AI prompt libraries for educators are on the way.
              Check back soon or browse what&apos;s available now on{" "}
              <a href={TPT_URL} target="_blank" rel="noopener noreferrer">
                Teachers Pay Teachers
              </a>
              .
            </p>
            <div className="btn-row mt-4" style={{ justifyContent: "center" }}>
              <a
                href={TPT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-terra"
              >
                Browse on TPT
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section--beige section--tight">
        <div className="container">
          <div className="grid grid-3 text-center">
            <div className="reveal">
              <div className="stat-num">100+</div>
              <div className="stat-label">Resources created</div>
            </div>
            <div className="reveal">
              <div className="stat-num">12+</div>
              <div className="stat-label">Years in classrooms</div>
            </div>
            <div className="reveal">
              <div className="stat-num">Instant</div>
              <div className="stat-label">Digital download</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">For founders &amp; operators</span>
          <h2 className="h-lg mt-3 reveal">Building something bigger than a classroom?</h2>
          <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: "46ch" }}>
            When you&apos;re designing a whole school or the tool that serves one, start with
            the Greenhouse Audit.
          </p>
          <div className="btn-row mt-4 reveal" style={{ justifyContent: "center" }}>
            <Link href="/services" className="btn btn-primary btn-lg">
              Explore Greenhouse Schools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
