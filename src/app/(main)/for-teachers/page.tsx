import type { Metadata } from "next";
import Link from "next/link";
import "./for-teachers.css";

export const metadata: Metadata = {
  title: "For Teachers — The Rooted Learner",
  description:
    "Curriculum, guides, printables, and professional learning for educators who grow their own way.",
  keywords: [
    "teacher resources",
    "classroom tools",
    "lesson plans",
    "ELD resources",
    "educator professional learning",
    "AI for teachers",
  ],
  alternates: { canonical: "/for-teachers" },
  openGraph: {
    title: "For Teachers — The Rooted Learner",
    description:
      "Curriculum, guides, printables, and professional learning for educators who grow their own way.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ForTeachersPage() {
  return (
    <section className="ft-page section">
      <div className="container">
        <div className="ft-header">
          <span className="ft-eyebrow">For Teachers</span>
          <h1 className="ft-heading">
            Everything we make starts in the classroom.
          </h1>
          <p className="ft-lead">Choose your path.</p>
        </div>

        <div className="ft-cards">
          <Link href="/shop" className="ft-card ft-card--shop">
            <svg className="ft-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h2>Shop</h2>
            <p>Books, guides, printables, and standards-aligned resources ready for your classroom.</p>
            <span className="ft-card-cta">
              Browse resources
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </Link>

          <Link href="/learn" className="ft-card ft-card--learn">
            <svg className="ft-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h2>Learn</h2>
            <p>Courses, the Learn Hub, and the teacher toolkit — professional learning built by educators.</p>
            <span className="ft-card-cta">
              Start learning
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
