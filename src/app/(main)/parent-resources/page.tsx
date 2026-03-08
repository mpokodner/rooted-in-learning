"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import "./parent-resources.css";

const ageGroups = [
  {
    title: "Early Readers (K-2)",
    description:
      "Phonics foundations, reading confidence, and at-home practice that builds skills without pressure.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Growing Learners (3-5)",
    description:
      "Vocabulary building, comprehension strategies, and homework help framing that supports without taking over.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-7.5m0 0l-.5 1.5",
  },
  {
    title: "Independent Learners (6-8)",
    description:
      "Study skills, test preparation, and critical thinking support as your child takes on more responsibility.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 6.75l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
];

const whatFamiliesGet = [
  "Research-based activities aligned with Science of Reading",
  "Progress tips and how to celebrate small wins",
  "Weekly practice ideas that fit busy family life",
];

const featuredResources = [
  {
    id: 1,
    title: "Homework Helper Guide",
    price: 9.99,
    description: "Activities to support learning at home",
    category: "Study Skills",
    age: "3-5",
  },
  {
    id: 2,
    title: "Summer Reading Activity Pack",
    price: 12.99,
    description: "Keep skills sharp over break",
    category: "Reading Support",
    age: "K-2",
  },
  {
    id: 3,
    title: "Family Reading Nights Kit",
    price: 7.99,
    description: "Fun literacy activities for the whole family",
    category: "Family Activities",
    age: "K-2",
  },
  {
    id: 4,
    title: "Phonics Practice at Home",
    price: 8.99,
    description: "Build foundational reading skills together",
    category: "Reading Support",
    age: "Pre-K",
  },
  {
    id: 5,
    title: "Math Facts Family Games",
    price: 10.99,
    description: "Make math practice fun for the whole family",
    category: "Family Activities",
    age: "K-2",
  },
  {
    id: 6,
    title: "Study Skills Starter Pack",
    price: 11.99,
    description: "Help your child build strong study habits",
    category: "Study Skills",
    age: "6-8",
  },
];

const faqs = [
  {
    q: "How do I help without doing homework for them?",
    a: "We provide scaffolding strategies: ask guiding questions instead of giving answers, set up routines so your child knows what to try first, and use prompts that encourage thinking without taking over. Our resources include parent scripts and question stems.",
  },
  {
    q: "What is Science of Reading?",
    a: "Science of Reading is research on how children learn to read. It emphasizes phonics (sounding out words), phonemic awareness, vocabulary, fluency, and comprehension. Our resources are built on these evidence-based practices so you can support your child in ways that actually work.",
  },
  {
    q: "How much time should practice take?",
    a: "Short, consistent practice beats long sessions. For early readers (K-2), 10–15 minutes daily is ideal. For growing learners (3-5), 15–20 minutes. For independent learners (6-8), 20–30 minutes. Quality and consistency matter more than duration.",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "Reading Support", label: "Reading Support" },
  { id: "Study Skills", label: "Study Skills" },
  { id: "Family Activities", label: "Family Activities" },
];

const ageLevels = [
  { id: "all", label: "All Ages" },
  { id: "Pre-K", label: "Pre-K" },
  { id: "K-2", label: "K-2" },
  { id: "3-5", label: "3-5" },
  { id: "6-8", label: "6-8" },
];

function ageOverlaps(resourceAge: string, filterAge: string): boolean {
  if (resourceAge === "Pre-K" && filterAge === "Pre-K") return true;
  if (resourceAge === "Pre-K" || filterAge === "Pre-K") {
    return resourceAge === filterAge;
  }
  const parseBound = (s: string) => (s === "K" ? 0 : parseInt(s, 10));
  const [rLow, rHigh] = resourceAge.split("-").map(parseBound);
  const [fLow, fHigh] = filterAge.split("-").map(parseBound);
  return rLow <= fHigh && fLow <= rHigh;
}

export default function ParentResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeAge, setActiveAge] = useState("all");

  const filteredResources = featuredResources.filter((resource) => {
    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory;
    const matchesAge =
      activeAge === "all" || ageOverlaps(resource.age, activeAge);
    return matchesCategory && matchesAge;
  });

  return (
    <div className="pr-page">
      {/* ─── Hero ─── */}
      <section className="pr-hero" aria-labelledby="pr-heading">
        <div className="pr-hero-bg" aria-hidden="true">
          <div className="pr-hero-circle pr-hero-circle--1" />
          <div className="pr-hero-circle pr-hero-circle--2" />
        </div>
        <div className="container pr-hero-container">
          <h1 id="pr-heading" className="pr-hero-title">
            Support Your Child&apos;s Learning
            <br />
            <span className="pr-hero-accent">at Home.</span>
          </h1>
          <p className="pr-hero-desc">
            Research-based resources and practical tips so you can help your
            child build confidence and close skill gaps — without the overwhelm.
          </p>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="pr-filters" aria-label="Resource filters">
        <div className="container">
          <div className="pr-filters-inner">
            <div
              className="pr-filters-categories"
              role="tablist"
              aria-label="Resource categories"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`pr-filter-btn${activeCategory === cat.id ? " pr-filter-btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div
              className="pr-filters-ages"
              role="group"
              aria-label="Age level filter"
            >
              {ageLevels.map((age) => (
                <button
                  key={age.id}
                  className={`pr-age-btn${activeAge === age.id ? " pr-age-btn--active" : ""}`}
                  onClick={() => setActiveAge(age.id)}
                  aria-pressed={activeAge === age.id}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Grid ─── */}
      <section
        className="pr-grid-section section"
        aria-labelledby="pr-products-heading"
      >
        <div className="container">
          <h2 id="pr-products-heading" className="sr-only">
            Available Resources
          </h2>
          <div className="pr-grid">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div key={resource.id} className="pr-card">
                  <div className="pr-card-image">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="pr-card-content">
                    <div className="pr-card-tags">
                      <span className="pr-card-tag">{resource.category}</span>
                      <span className="pr-card-tag">{resource.age}</span>
                    </div>
                    <h3 className="pr-card-title">{resource.title}</h3>
                    <p className="pr-card-desc">{resource.description}</p>
                    <div className="pr-card-footer">
                      <span className="pr-card-price">
                        ${resource.price.toFixed(2)}
                      </span>
                      <span className="pr-card-cta">Coming Soon</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="pr-empty-state">
                No resources match your filters. Try broadening your selection.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Age-Specific Resources ─── */}
      <section
        className="section pr-age-section"
        aria-labelledby="age-heading"
      >
        <div className="container">
          <div className="pr-section-header">
            <p className="pr-section-label">Find Your Child&apos;s Stage</p>
            <h2 id="age-heading" className="pr-section-title">
              Age-Specific Resources
            </h2>
            <p className="pr-section-desc">
              Every child learns differently. Choose resources that match where
              your child is right now.
            </p>
          </div>
          <div className="pr-age-grid">
            {ageGroups.map((group) => (
              <div key={group.title} className="pr-age-card">
                <div className="pr-age-card-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="var(--terracotta)"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={group.icon}
                    />
                  </svg>
                </div>
                <h3 className="pr-age-card-title">{group.title}</h3>
                <p className="pr-age-card-desc">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What Families Get ─── */}
      <section className="pr-families-section section" aria-labelledby="what-heading">
        <div className="container">
          <div className="pr-section-header">
            <p className="pr-section-label">What&apos;s Included</p>
            <h2 id="what-heading" className="pr-section-title">
              What Families Get
            </h2>
            <p className="pr-section-desc">
              Practical support grounded in research, designed for real family
              life.
            </p>
          </div>
          <ul className="pr-families-list">
            {whatFamiliesGet.map((item) => (
              <li key={item} className="pr-families-item">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="var(--terracotta)"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Cross-sell Callout ─── */}
      <section className="pr-consult-section section">
        <div className="container">
          <div className="pr-consult-card">
            <div className="pr-consult-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--terracotta)"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="pr-consult-title">Need Personalized Support?</h3>
            <p className="pr-consult-desc">
              Every family&apos;s learning journey is different. Book a
              one-on-one family consultation to get tailored strategies,
              personalized recommendations, and a clear action plan for your
              child.
            </p>
            <Link href="/work-with-me" className="pr-consult-cta">
              Book a Consultation
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section pr-faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="pr-section-header">
            <p className="pr-section-label">Common Questions</p>
            <h2 id="faq-heading" className="pr-section-title">
              Family-Friendly FAQ
            </h2>
          </div>
          <div className="pr-faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="pr-faq-item">
                <h3 className="pr-faq-question">{faq.q}</h3>
                <p className="pr-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="pr-newsletter-section section">
        <div className="container">
          <div className="pr-newsletter-card">
            <div className="pr-consult-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--terracotta)"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="pr-consult-title">Tips for Families</h3>
            <p className="pr-consult-desc">
              Get weekly practice ideas, progress tips, and encouragement
              delivered to your inbox. Join our community of families supporting
              young learners.
            </p>
            <NewsletterForm
              source="parent-resources"
              buttonText="Get Family Tips"
            />
            <p className="pr-newsletter-note">
              Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Cross-links ─── */}
      <section className="pr-crosslinks section" aria-label="Related pages">
        <div className="container">
          <div className="pr-crosslinks-grid">
            <Link href="/teacher-shop" className="pr-crosslink-card">
              <h3 className="pr-crosslink-title">Looking for lesson packs?</h3>
              <p className="pr-crosslink-desc">
                Browse classroom-tested resources for educators and families.
              </p>
              <span className="pr-crosslink-cta">
                Teacher Shop
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/work-with-me" className="pr-crosslink-card">
              <h3 className="pr-crosslink-title">
                Need customized support?
              </h3>
              <p className="pr-crosslink-desc">
                Book a family consultation for personalized learning strategies.
              </p>
              <span className="pr-crosslink-cta">
                Work With Me
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
