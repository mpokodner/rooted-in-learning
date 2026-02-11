import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./lessons.css";

export const metadata: Metadata = {
  title: "Lessons | Rooted in Learning",
  description:
    "Standards-aligned, ready-to-use lesson plans and curriculum for K-8 classrooms and homeschool families. Download and teach today.",
  keywords: ["lesson plans", "curriculum", "K-8 education", "teaching resources", "homeschool curriculum"],
  openGraph: {
    title: "Lessons | Rooted in Learning",
    description: "Standards-aligned, ready-to-use lesson plans for K-8 educators.",
    type: "website",
  },
};

const lessons = [
  { id: 1, title: "Reading Comprehension Bundle", subject: "ELA", grade: "3-5", price: 12.99, badge: "Bestseller" },
  { id: 2, title: "Math Problem Solving Strategies", subject: "Math", grade: "K-2", price: 9.99, badge: null },
  { id: 3, title: "Science Inquiry Lab Pack", subject: "Science", grade: "4-6", price: 14.99, badge: "New" },
  { id: 4, title: "Writing Workshop Essentials", subject: "ELA", grade: "2-4", price: 11.99, badge: null },
  { id: 5, title: "Social Studies Explorer Kit", subject: "Social Studies", grade: "3-5", price: 10.99, badge: null },
  { id: 6, title: "STEM Challenge Cards", subject: "STEM", grade: "K-5", price: 8.99, badge: "Popular" },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <Header />

      {/* Hero Section */}
      <section className="lessons-hero">
        <div className="lessons-container">
          <div className="lessons-hero-inner">
            <p className="lessons-hero-label">Ready-to-Use Curriculum</p>
            <h1 className="lessons-hero-title">Lessons</h1>
            <p className="lessons-hero-desc">
              Standards-aligned lesson plans and activities designed by a veteran educator. Just download and teach.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="lessons-filter">
        <div className="lessons-container">
          <div className="lessons-filter-inner">
            <span className="lessons-filter-label">Filter:</span>
            {["All", "ELA", "Math", "Science", "STEM"].map((filter, index) => (
              <button
                key={filter}
                className={`lessons-filter-btn${index === 0 ? " lessons-filter-btn--active" : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="lessons-grid-section">
        <div className="lessons-container">
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="lesson-card">
                {/* Image placeholder */}
                <div className="lesson-card-image">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {lesson.badge && (
                    <span className="lesson-card-badge">{lesson.badge}</span>
                  )}
                </div>

                <div className="lesson-card-content">
                  <div className="lesson-card-tags">
                    <span className="lesson-card-tag">{lesson.subject}</span>
                    <span className="lesson-card-tag">Grade {lesson.grade}</span>
                  </div>
                  <h3 className="lesson-card-title">{lesson.title}</h3>
                  <div className="lesson-card-footer">
                    <span className="lesson-card-price">${lesson.price}</span>
                    <button className="lesson-card-cta">
                      Add to Cart
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

      <Footer />
    </div>
  );
}
