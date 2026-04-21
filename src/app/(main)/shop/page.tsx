"use client";

import { useState } from "react";
import Image from "next/image";
import "./teacher-shop.css";

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

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <div className="shop-page">
      <section className="shop-hero" aria-labelledby="shop-heading">
        <Image
          src="/images/shop-hero.png"
          alt="Sunlight filtering through a forest canopy"
          fill
          priority
          className="shop-hero-image"
        />
        <div className="shop-hero-overlay">
          <p className="shop-eyebrow">Resources</p>
          <h1 id="shop-heading" className="shop-title">
            Curriculum Tools Built for the Classrooms That Need Them Most.
          </h1>
          <div className="shop-hero-actions">
            <a
              href="https://www.teacherspayteachers.com/store/rootedinlearninged"
              target="_blank"
              rel="noopener noreferrer"
              className="shop-hero-cta-secondary"
            >
              Browse what&apos;s available now on TPT
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true" style={{ width: '1rem', height: '1rem', display: 'inline-block', marginLeft: '0.25rem', verticalAlign: 'middle' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="shop-toolbar" aria-label="Shop filters and search">
        <div className="container">
          <div className="shop-toolbar-inner">
            <div
              className="shop-categories"
              role="tablist"
              aria-label="Product categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`shop-cat-btn${activeCategory === cat.id ? " shop-cat-btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="shop-toolbar-right">
              <div className="shop-search">
                <svg
                  className="shop-search-icon"
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
                  className="shop-search-input"
                  placeholder="Search resources..."
                  aria-label="Search resources"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="shop-sort">
                <select
                  className="shop-sort-select"
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
                  className="shop-sort-chevron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-coming-soon section">
        <div className="container">
          <div className="shop-coming-soon-card">
            <svg
              className="shop-coming-soon-icon"
              fill="none"
              viewBox="0 0 80 80"
              aria-hidden="true"
            >
              <path
                d="M40 12 C40 12 42 28 40 36 C38 28 40 12 40 12Z"
                fill="var(--earth, #5C6B4A)"
                opacity="0.9"
              />
              <path
                d="M40 36 C40 36 28 24 22 20 C30 26 40 36 40 36Z"
                fill="var(--earth-light, #8B9B7A)"
                opacity="0.7"
              />
              <path
                d="M40 36 C40 36 52 24 58 20 C50 26 40 36 40 36Z"
                fill="var(--earth-light, #8B9B7A)"
                opacity="0.7"
              />
              <path
                d="M40 22 C40 22 32 16 26 14 C34 18 40 22 40 22Z"
                fill="var(--earth-mist, #A8B89A)"
                opacity="0.6"
              />
              <path
                d="M40 22 C40 22 48 16 54 14 C46 18 40 22 40 22Z"
                fill="var(--earth-mist, #A8B89A)"
                opacity="0.6"
              />
              <rect
                x="38"
                y="36"
                width="4"
                height="16"
                rx="2"
                fill="var(--terracotta-light, #D5A372)"
              />
              <ellipse
                cx="40"
                cy="54"
                rx="12"
                ry="4"
                fill="var(--earth-mist, #A8B89A)"
                opacity="0.3"
              />
            </svg>
            <h2 className="shop-coming-soon-title">
              We&apos;re Growing Our Shop
            </h2>
            <p className="shop-coming-soon-desc">
              New roots are taking hold. Standards-aligned resources, WIDA
              overlays, assessment kits, and AI prompt libraries for educators
              are on the way. Check back soon or browse what&apos;s available
              now on{" "}
              <a
                href="https://www.teacherspayteachers.com/store/rootedinlearninged"
                target="_blank"
                rel="noopener noreferrer"
                className="shop-coming-soon-link"
              >
                Teachers Pay Teachers
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
