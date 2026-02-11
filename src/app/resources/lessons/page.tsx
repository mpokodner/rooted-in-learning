import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

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
              Ready-to-Use Curriculum
            </p>
            <h1 className="hero-heading text-[var(--text-dark)] mb-6">
              Lessons
            </h1>
            <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] leading-[var(--leading-relaxed)]">
              Standards-aligned lesson plans and activities designed by a veteran educator. Just download and teach.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 bg-[var(--white)] border-y border-[var(--border-beige)] sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[var(--text-sm)] text-[var(--text-muted)]">Filter:</span>
            {["All", "ELA", "Math", "Science", "STEM"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-[var(--text-sm)] font-medium transition-all duration-[var(--duration-fast)] ${
                  filter === "All"
                    ? "bg-[var(--earth)] text-[var(--white)]"
                    : "bg-[var(--beige-bg)] text-[var(--text-muted)] hover:bg-[var(--border-beige)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="section-lg bg-[var(--neutral-bg)]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-[var(--white)] rounded-[var(--radius-xl)] overflow-hidden border border-[var(--border-beige)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-[var(--duration-base)] group"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--earth)] to-[var(--earth-light)] relative flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--white)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {lesson.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--terracotta)] text-[var(--white)] text-[10px] font-bold rounded-full uppercase tracking-[var(--tracking-wide)]">
                      {lesson.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[10px] font-bold text-[var(--earth)] uppercase">{lesson.subject}</span>
                    <span className="px-2 py-1 bg-[var(--beige-bg)] rounded text-[10px] font-bold text-[var(--earth)] uppercase">Grade {lesson.grade}</span>
                  </div>
                  <h3 className="text-[var(--text-lg)] font-bold text-[var(--text-dark)] mb-3 group-hover:text-[var(--earth)] transition-colors duration-[var(--duration-fast)]">{lesson.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-xl)] font-bold text-[var(--text-dark)]">${lesson.price}</span>
                    <button className="btn btn-sm btn-primary rounded-full">
                      Add to Cart
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
