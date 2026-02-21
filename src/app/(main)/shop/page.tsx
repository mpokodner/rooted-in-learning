import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop | The Rooted Learner",
  description: "Browse educator-curated lessons, templates, courses, and classroom gear.",
  keywords: ["teacher resources", "lesson plans", "educational materials", "classroom supplies"],
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero */}
      <section className="section bg-[var(--earth)]">
        <div className="container text-center">
          <p className="text-[var(--text-xs)] font-bold text-[var(--earth-light)] uppercase tracking-[var(--tracking-widest)] mb-4">
            Educator-Curated
          </p>
          <h1 className="text-h1 text-white mb-4">Shop Resources</h1>
          <p className="text-[var(--earth-light)] max-w-lg mx-auto">
            Lesson plans, templates, courses, and gear — all designed to save you time and elevate your teaching.
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="section">
        <div className="container text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <h2 className="text-h3 text-[var(--text-dark)] mb-3">Products Coming Soon</h2>
            <p className="text-[var(--text-muted)] mb-6">
              We&apos;re stocking the shelves with amazing resources. Check back soon or browse our lessons in the meantime.
            </p>
            <Link href="/resources/lessons" className="btn btn-md btn-primary rounded-[var(--radius-lg)]">
              Browse Lessons
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
