"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import "./teacher-shop.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  badge: string | null;
  category: string;
  bgColor: string;
  overlayText: string | null;
  overlayStyle: "light" | "dark" | "script";
}

const products: Product[] = [
  {
    id: 1,
    title: "Comprehensive ELD Unit: Narrative Writing",
    description:
      "A 4-week complete unit with scaffolded lessons, graphic organizers, and formative checks for English learners.",
    price: 24.0,
    badge: "Bestseller",
    category: "ELD Resources",
    bgColor: "#c4a882",
    overlayText: null,
    overlayStyle: "light",
  },
  {
    id: 2,
    title: "Digital Formative Assessment Kit",
    description:
      "15 interactive Google Forms templates for quick student check-ins, exit tickets, and progress monitoring.",
    price: 12.5,
    badge: null,
    category: "Assessment Tools",
    bgColor: "#9aada0",
    overlayText: null,
    overlayStyle: "light",
  },
  {
    id: 3,
    title: "Classroom Management Mega-Bundle",
    description:
      "Everything you need for a smooth school year: posters, logs, and slide templates for routines.",
    price: 45.0,
    badge: null,
    category: "Bundles",
    bgColor: "#9aada0",
    overlayText: "Classroom\nManagement",
    overlayStyle: "script",
  },
  {
    id: 4,
    title: "Weekly STEM Challenges: Volume 1",
    description:
      "10 low-prep STEM activities using common household materials.",
    price: 15.0,
    badge: null,
    category: "Lesson Plans",
    bgColor: "#2d2d2d",
    overlayText: "STEM\nActivities",
    overlayStyle: "dark",
  },
  {
    id: 5,
    title: "Reflective Reading Journal",
    description:
      "Printable student logs designed to increase deep comprehension and reading stamina.",
    price: 8.0,
    badge: null,
    category: "ELD Resources",
    bgColor: "#8b9b7a",
    overlayText: "Literacy\nResource",
    overlayStyle: "script",
  },
  {
    id: 6,
    title: "Fractions Mastery Stations",
    description:
      "8 hands-on math stations focused on simplifying and adding fractions with visual models.",
    price: 18.5,
    badge: null,
    category: "Lesson Plans",
    bgColor: "#5c6b4a",
    overlayText: "Math\nResources",
    overlayStyle: "dark",
  },
];

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

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "name":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

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
          <p className="shop-subtitle">
            WIDA-aligned ELD overlays, formative assessment kits for
            multilingual learners, AI prompt libraries for educators, and
            Science of Reading intervention guides &mdash; designed at the
            district level, usable at the classroom level. Launching soon.
          </p>
          <div className="shop-hero-actions">
            <a href="#early-access" className="shop-hero-cta-primary">
              Get Early Access
            </a>
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

      <section
        className="shop-products section"
        aria-labelledby="shop-products-heading"
      >
        <div className="container">
          <h2 id="shop-products-heading" className="sr-only">
            Products
          </h2>
          <div className="shop-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="shop-card">
                  <div
                    className="shop-card-image"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    {product.overlayText && (
                      <span
                        className={`shop-card-overlay shop-card-overlay--${product.overlayStyle}`}
                      >
                        {product.overlayText}
                      </span>
                    )}
                    {!product.overlayText && (
                      <svg
                        className="shop-card-placeholder"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    )}
                    {product.badge && (
                      <span className="shop-card-badge">{product.badge}</span>
                    )}
                  </div>
                  <div className="shop-card-body">
                    <h3 className="shop-card-title">{product.title}</h3>
                    <p className="shop-card-desc">{product.description}</p>
                    <div className="shop-card-footer">
                      <span className="shop-card-price">
                        ${product.price.toFixed(2)}
                      </span>
                      <button className="shop-card-cta">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="shop-empty">
                No resources match your search. Try a different term or
                category.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Newsletter Email Capture ─── */}
      <section id="early-access" className="shop-early-access section--alt" aria-labelledby="early-access-heading">
        <div className="container" style={{ maxWidth: '36rem', textAlign: 'center', padding: '3rem 1rem' }}>
          <h2
            id="early-access-heading"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-black)', fontSize: 'var(--text-2xl)', fontWeight: 700, marginBottom: '0.75rem' }}
          >
            Stay in the Loop
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 'var(--leading-relaxed)' }}>
            Be the first to know when new WIDA-aligned resources, assessment kits,
            and curriculum tools are available. No spam &mdash; just launch
            announcements and free educator downloads.
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const emailInput = form.elements.namedItem("email") as HTMLInputElement;
              if (!emailInput.value) return;
              try {
                const res = await fetch("/api/newsletter", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: emailInput.value, source: "shop" }),
                });
                if (res.ok) {
                  form.reset();
                  alert("You're subscribed! We'll keep you posted.");
                } else {
                  const data = await res.json();
                  alert(data.error || "Something went wrong. Please try again.");
                }
              } catch {
                alert("Something went wrong. Please try again.");
              }
            }}
            style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@school.edu"
              aria-label="Email address"
              style={{
                flex: '1 1 14rem',
                maxWidth: '20rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border-beige)',
                fontSize: 'var(--text-base)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: 'var(--terracotta)',
                color: 'var(--white)',
                fontWeight: 600,
                fontSize: 'var(--text-base)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
