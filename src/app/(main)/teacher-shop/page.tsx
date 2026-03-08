"use client";

import { useState } from "react";
import Link from "next/link";
import "./teacher-shop.css";

const lessons = [
  { id: 1, title: "Reading Comprehension Bundle", subject: "ELA", grade: "3-5", price: 12.99, badge: "Bestseller", audience: "both", category: "Lesson Packs" },
  { id: 2, title: "Math Problem Solving Strategies", subject: "Math", grade: "K-2", price: 9.99, badge: null, audience: "both", category: "Lesson Packs" },
  { id: 3, title: "Science Inquiry Lab Pack", subject: "Science", grade: "4-6", price: 14.99, badge: "New", audience: "educator", category: "Lesson Packs" },
  { id: 4, title: "Writing Workshop Essentials", subject: "ELA", grade: "2-4", price: 11.99, badge: null, audience: "both", category: "Lesson Packs" },
  { id: 5, title: "Social Studies Explorer Kit", subject: "Social Studies", grade: "3-5", price: 10.99, badge: null, audience: "educator", category: "Lesson Packs" },
  { id: 6, title: "STEM Challenge Cards", subject: "STEM", grade: "K-5", price: 8.99, badge: "Popular", audience: "both", category: "Lesson Packs" },
  { id: 7, title: "Phonics Foundations Pack", subject: "ELA", grade: "K-2", price: 13.99, badge: "Bestseller", audience: "both", category: "Lesson Packs" },
  { id: 8, title: "Reading Intervention Toolkit", subject: "ELA", grade: "1-3", price: 16.99, badge: "New", audience: "both", category: "Lesson Packs" },
];

const premiumTools = [
  {
    title: "Small Group Planner Pro",
    description: "Plan rotations, track progress, and manage targeted instruction across all your groups — with built-in data tracking and printable schedules.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    tag: "Planning",
  },
  {
    title: "Data Dashboard Kit",
    description: "A full spreadsheet-based system for progress monitoring, running records, and assessment data — with auto-generated charts and intervention flags.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    tag: "Data & Assessment",
  },
  {
    title: "Observation Notes System",
    description: "A structured anecdotal notes toolkit with printable templates, digital tracking sheets, and a video walkthrough for building a sustainable note-taking habit.",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    tag: "Classroom Systems",
  },
  {
    title: "Assessment Calendar Builder",
    description: "Map out your full year of assessments, progress monitoring windows, and data review cycles — with editable templates and a setup tutorial.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    tag: "Planning",
  },
  {
    title: "Parent Communication Pack",
    description: "Professional letter templates, progress report formats, and conference prep sheets — everything you need for clear, confident family communication.",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    tag: "Communication",
  },
  {
    title: "Classroom Library Organizer",
    description: "A complete system for cataloging, leveling, and organizing your classroom library — includes labels, checkout trackers, and a video setup guide.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    tag: "Literacy",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "Lesson Packs", label: "Lesson Packs" },
  { id: "Data Tools", label: "Data Tools" },
  { id: "Templates", label: "Templates" },
  { id: "Planning Resources", label: "Planning Resources" },
];

const gradeLevels = [
  { id: "all", label: "All Grades" },
  { id: "K-2", label: "K-2" },
  { id: "3-5", label: "3-5" },
  { id: "6-8", label: "6-8" },
];

function gradeOverlaps(lessonGrade: string, filterGrade: string): boolean {
  const parseBound = (s: string) => (s === "K" ? 0 : parseInt(s, 10));
  const [lLow, lHigh] = lessonGrade.split("-").map(parseBound);
  const [fLow, fHigh] = filterGrade.split("-").map(parseBound);
  return lLow <= fHigh && fLow <= lHigh;
}

export default function TeacherShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGrade, setActiveGrade] = useState("all");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesCategory = activeCategory === "all" || lesson.category === activeCategory;
    const matchesGrade = activeGrade === "all" || gradeOverlaps(lesson.grade, activeGrade);
    return matchesCategory && matchesGrade;
  });

  return (
    <div className="teacher-shop-page">
      {/* ─── Hero ─── */}
      <section className="ts-hero" aria-labelledby="ts-heading">
        <div className="ts-hero-bg" aria-hidden="true">
          <div className="ts-hero-circle ts-hero-circle--1" />
          <div className="ts-hero-circle ts-hero-circle--2" />
        </div>
        <div className="container ts-hero-container">
          <h1 id="ts-heading" className="ts-hero-title">
            Resources Built by a Teacher,
            <br />
            <span className="ts-hero-accent">for Teachers.</span>
          </h1>
          <p className="ts-hero-desc">
            Classroom-tested lesson packs, data systems, and planning tools
            designed to save you hours every week — created by a 12+ year
            educator and reading interventionist.
          </p>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="ts-filters" aria-label="Shop filters">
        <div className="container">
          <div className="ts-filters-inner">
            <div className="ts-filters-categories" role="tablist" aria-label="Product categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`ts-filter-btn${activeCategory === cat.id ? " ts-filter-btn--active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="ts-filters-grades" role="group" aria-label="Grade level filter">
              {gradeLevels.map((grade) => (
                <button
                  key={grade.id}
                  className={`ts-grade-btn${activeGrade === grade.id ? " ts-grade-btn--active" : ""}`}
                  onClick={() => setActiveGrade(grade.id)}
                  aria-pressed={activeGrade === grade.id}
                >
                  {grade.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Grid ─── */}
      <section className="ts-grid-section section" aria-labelledby="ts-products-heading">
        <div className="container">
          <h2 id="ts-products-heading" className="sr-only">Available Resources</h2>
          <div className="ts-grid">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <div key={lesson.id} className="ts-card">
                  <div className="ts-card-image">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {lesson.badge && (
                      <span className="ts-card-badge">{lesson.badge}</span>
                    )}
                  </div>
                  <div className="ts-card-content">
                    <div className="ts-card-tags">
                      <span className="ts-card-tag">{lesson.subject}</span>
                      <span className="ts-card-tag">Grade {lesson.grade}</span>
                    </div>
                    <h3 className="ts-card-title">{lesson.title}</h3>
                    <div className="ts-card-footer">
                      <span className="ts-card-price">${lesson.price.toFixed(2)}</span>
                      <button className="ts-card-cta">
                        Add to Cart
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="ts-empty-state">No resources match your filters. Try broadening your selection.</p>
            )}
          </div>
        </div>
      </section>

      {/* ─── Teacher Tools ─── */}
      <section className="ts-tools-section section" aria-labelledby="ts-tools-heading">
        <div className="container">
          <div className="ts-tools-header">
            <p className="ts-section-label">Teacher Tools That Save You Time</p>
            <h2 id="ts-tools-heading" className="ts-tools-title">
              Systems That Work as Hard as You Do
            </h2>
            <p className="ts-tools-desc">
              Designed by a teacher who actually uses them. Each tool includes
              templates, setup instructions, and video walkthroughs so you can
              start using it today.
            </p>
          </div>

          <div className="ts-tools-grid">
            {premiumTools.map((tool) => (
              <div key={tool.title} className="ts-tool-card">
                <div className="ts-tool-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                  </svg>
                </div>
                <span className="ts-tool-card-tag">{tool.tag}</span>
                <h3 className="ts-tool-card-title">{tool.title}</h3>
                <p className="ts-tool-card-desc">{tool.description}</p>
                <span className="ts-tool-card-cta">
                  Coming Soon
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bundle Callout ─── */}
      <section className="ts-bundle-section section" aria-labelledby="ts-bundle-heading">
        <div className="container">
          <div className="ts-bundle-card">
            <div className="ts-bundle-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>
            </div>
            <h2 id="ts-bundle-heading" className="ts-bundle-title">Save with Bundles</h2>
            <p className="ts-bundle-desc">
              Grab multiple packs at a discount. Our founding bundles include
              curated sets of lessons and tools at 20% off — limited time only.
            </p>
            <span className="ts-bundle-badge">Use code: FOUNDING20</span>
          </div>
        </div>
      </section>

      {/* ─── Free Samples CTA ─── */}
      <section className="ts-samples-section section" aria-labelledby="ts-samples-heading">
        <div className="container">
          <div className="ts-samples-inner">
            <h2 id="ts-samples-heading" className="ts-samples-title">Try Before You Buy</h2>
            <p className="ts-samples-desc">
              Sign up for our newsletter and get free sample resources delivered
              straight to your inbox — no commitment, just great materials.
            </p>
            <form className="ts-samples-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="ts-samples-input"
                placeholder="Your email address"
                aria-label="Email address for free samples"
              />
              <button type="submit" className="ts-samples-btn">
                Get Samples
              </button>
            </form>
            <p className="ts-samples-note">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ─── Trust Signals ─── */}
      <section className="ts-trust section" aria-labelledby="ts-trust-heading">
        <div className="container">
          <h2 id="ts-trust-heading" className="sr-only">Why teachers trust our resources</h2>
          <div className="ts-trust-grid">
            <div className="ts-trust-item">
              <div className="ts-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="ts-trust-title">Classroom-Tested</h3>
              <p className="ts-trust-desc">Every resource has been used with real students in real classrooms.</p>
            </div>
            <div className="ts-trust-item">
              <div className="ts-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="ts-trust-title">Standards-Aligned</h3>
              <p className="ts-trust-desc">Mapped to state and national standards for confidence in quality.</p>
            </div>
            <div className="ts-trust-item">
              <div className="ts-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="ts-trust-title">Instant Download</h3>
              <p className="ts-trust-desc">Purchase, download, and start using immediately — no waiting.</p>
            </div>
            <div className="ts-trust-item">
              <div className="ts-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="ts-trust-title">Made With Care</h3>
              <p className="ts-trust-desc">Designed by a veteran educator who cares deeply about student outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cross-links ─── */}
      <section className="ts-crosslinks section" aria-label="Related pages">
        <div className="container">
          <div className="ts-crosslinks-grid">
            <Link href="/work-with-me" className="ts-crosslink-card">
              <h3 className="ts-crosslink-title">Need customized support?</h3>
              <p className="ts-crosslink-desc">Explore consulting for personalized curriculum design and coaching.</p>
              <span className="ts-crosslink-cta">
                Work With Me
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/blog" className="ts-crosslink-card">
              <h3 className="ts-crosslink-title">Want teaching strategies?</h3>
              <p className="ts-crosslink-desc">Read research-backed articles on reading, AI, and classroom systems.</p>
              <span className="ts-crosslink-cta">
                Read the Blog
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
