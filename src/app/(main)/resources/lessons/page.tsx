"use client";

import { useState } from "react";
import Link from "next/link";
import "./lessons.css";

const lessons = [
  { id: 1, title: "Reading Comprehension Bundle", subject: "ELA", grade: "3-5", price: 12.99, badge: "Bestseller", audience: "both" },
  { id: 2, title: "Math Problem Solving Strategies", subject: "Math", grade: "K-2", price: 9.99, badge: null, audience: "both" },
  { id: 3, title: "Science Inquiry Lab Pack", subject: "Science", grade: "4-6", price: 14.99, badge: "New", audience: "educator" },
  { id: 4, title: "Writing Workshop Essentials", subject: "ELA", grade: "2-4", price: 11.99, badge: null, audience: "both" },
  { id: 5, title: "Social Studies Explorer Kit", subject: "Social Studies", grade: "3-5", price: 10.99, badge: null, audience: "educator" },
  { id: 6, title: "STEM Challenge Cards", subject: "STEM", grade: "K-5", price: 8.99, badge: "Popular", audience: "both" },
  { id: 7, title: "Phonics Foundations Pack", subject: "ELA", grade: "K-2", price: 13.99, badge: "Bestseller", audience: "both" },
  { id: 8, title: "Reading Intervention Toolkit", subject: "ELA", grade: "1-3", price: 16.99, badge: "New", audience: "both" },
];

const categories = [
  { id: "all", label: "All Lessons" },
  { id: "ELA", label: "ELA / Reading" },
  { id: "Math", label: "Math" },
  { id: "Science", label: "Science" },
  { id: "STEM", label: "STEM" },
  { id: "Social Studies", label: "Social Studies" },
];

export default function LessonsPage() {
  const [activeAudience, setActiveAudience] = useState<"educator" | "parent">("educator");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLessons = lessons.filter((lesson) => {
    const matchesFilter = activeFilter === "all" || lesson.subject === activeFilter;
    return matchesFilter;
  });

  return (
    <div className="lessons-page">
      {/* ─── Dual-Audience Hero ─── */}
      <section className="lp-hero" aria-labelledby="lessons-heading">
        <div className="lp-hero-bg" aria-hidden="true">
          <div className="lp-hero-circle lp-hero-circle--1" />
          <div className="lp-hero-circle lp-hero-circle--2" />
        </div>
        <div className="container lp-hero-container">
          {/* Audience Selector */}
          <div className="lp-audience-selector" role="tablist" aria-label="Select your audience">
            <button
              role="tab"
              aria-selected={activeAudience === "educator"}
              className={`lp-audience-tab${activeAudience === "educator" ? " lp-audience-tab--active" : ""}`}
              onClick={() => setActiveAudience("educator")}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
              I&apos;m an Educator
            </button>
            <button
              role="tab"
              aria-selected={activeAudience === "parent"}
              className={`lp-audience-tab${activeAudience === "parent" ? " lp-audience-tab--active" : ""}`}
              onClick={() => setActiveAudience("parent")}
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              I&apos;m a Parent
            </button>
          </div>

          {/* Educator Messaging */}
          {activeAudience === "educator" && (
            <div className="lp-hero-content" role="tabpanel">
              <h1 id="lessons-heading" className="lp-hero-title">
                Reclaim Your Prep Time.
                <br />
                <span className="lp-hero-accent">Teach With Confidence.</span>
              </h1>
              <p className="lp-hero-desc">
                Standards-aligned, classroom-tested lessons designed to save you
                hours every week. Built by a 12+ year educator and reading
                interventionist who understands the real demands of teaching.
              </p>
              <div className="lp-hero-benefits">
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Save 5+ hours/week on prep</span>
                </div>
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Standards-aligned &amp; rigorous</span>
                </div>
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Intervention-ready materials</span>
                </div>
              </div>
            </div>
          )}

          {/* Parent Messaging */}
          {activeAudience === "parent" && (
            <div className="lp-hero-content" role="tabpanel">
              <h1 className="lp-hero-title">
                Help Your Child Catch Up,
                <br />
                <span className="lp-hero-accent">Stay Ahead, and Feel Confident.</span>
              </h1>
              <p className="lp-hero-desc">
                Teacher-designed practice materials that build real skills — not just
                busy work. Perfect for extra practice beyond homework, filling skill
                gaps, and supporting your child&apos;s learning at home.
              </p>
              <div className="lp-hero-benefits">
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Build confidence at home</span>
                </div>
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>Close skill gaps with targeted practice</span>
                </div>
                <div className="lp-benefit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>No jargon — just clear, ready-to-use materials</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="lp-filters" aria-label="Lesson categories">
        <div className="container">
          <div className="lp-filters-inner">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`lp-filter-btn${activeFilter === cat.id ? " lp-filter-btn--active" : ""}`}
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={activeFilter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lessons Grid ─── */}
      <section className="lp-grid-section section" aria-labelledby="lessons-grid-heading">
        <div className="container">
          <h2 id="lessons-grid-heading" className="sr-only">Available Lessons</h2>
          <div className="lp-grid">
            {filteredLessons.map((lesson) => (
              <div key={lesson.id} className="lp-card">
                <div className="lp-card-image">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {lesson.badge && (
                    <span className="lp-card-badge">{lesson.badge}</span>
                  )}
                </div>
                <div className="lp-card-content">
                  <div className="lp-card-tags">
                    <span className="lp-card-tag">{lesson.subject}</span>
                    <span className="lp-card-tag">Grade {lesson.grade}</span>
                  </div>
                  <h3 className="lp-card-title">{lesson.title}</h3>
                  <div className="lp-card-footer">
                    <span className="lp-card-price">${lesson.price.toFixed(2)}</span>
                    <button className="lp-card-cta">
                      Add to Cart
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Signals ─── */}
      <section className="lp-trust section" aria-labelledby="trust-heading">
        <div className="container">
          <h2 id="trust-heading" className="sr-only">Why choose our lessons</h2>
          <div className="lp-trust-grid">
            <div className="lp-trust-item">
              <div className="lp-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="lp-trust-title">Classroom-Tested</h3>
              <p className="lp-trust-desc">Every resource has been used with real students in real classrooms.</p>
            </div>
            <div className="lp-trust-item">
              <div className="lp-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="lp-trust-title">Standards-Aligned</h3>
              <p className="lp-trust-desc">Mapped to state and national standards for confidence in quality.</p>
            </div>
            <div className="lp-trust-item">
              <div className="lp-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="lp-trust-title">Instant Download</h3>
              <p className="lp-trust-desc">Purchase, download, and start using immediately — no waiting.</p>
            </div>
            <div className="lp-trust-item">
              <div className="lp-trust-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="lp-trust-title">Made With Care</h3>
              <p className="lp-trust-desc">Designed by a veteran educator who cares deeply about student outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="lp-testimonials section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="lp-testimonials-header">
            <p className="lp-section-label">What People Are Saying</p>
            <h2 id="testimonials-heading" className="lp-testimonials-title">
              Loved by Educators &amp; Families
            </h2>
          </div>
          <div className="lp-testimonials-grid">
            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="lp-testimonial-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="lp-testimonial-quote">
                &ldquo;These lessons saved me hours every single week. They&apos;re
                rigorous, engaging, and my students actually enjoy them.&rdquo;
              </p>
              <p className="lp-testimonial-author">— 3rd Grade Teacher, Texas</p>
            </div>
            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="lp-testimonial-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="lp-testimonial-quote">
                &ldquo;As a homeschool parent, I finally found resources that help my
                daughter practice reading skills without frustrating either of us.
                The materials are clear and easy to use.&rdquo;
              </p>
              <p className="lp-testimonial-author">— Homeschool Mom, California</p>
            </div>
            <div className="lp-testimonial-card">
              <div className="lp-testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="lp-testimonial-star" aria-hidden="true">
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
              <p className="lp-testimonial-quote">
                &ldquo;I use these as intervention materials and they&apos;re perfect.
                Structured, scaffolded, and aligned to exactly what my students
                need.&rdquo;
              </p>
              <p className="lp-testimonial-author">— Reading Specialist, Maryland</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cross-links ─── */}
      <section className="lp-crosslinks section" aria-label="Related pages">
        <div className="container">
          <div className="lp-crosslinks-grid">
            <Link href="/consulting" className="lp-crosslink-card">
              <h3 className="lp-crosslink-title">Need customized support?</h3>
              <p className="lp-crosslink-desc">Explore consulting for personalized curriculum design and coaching.</p>
              <span className="lp-crosslink-cta">
                View Consulting
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link href="/blog" className="lp-crosslink-card">
              <h3 className="lp-crosslink-title">Want teaching strategies?</h3>
              <p className="lp-crosslink-desc">Read research-backed articles on reading, AI, and classroom systems.</p>
              <span className="lp-crosslink-cta">
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
