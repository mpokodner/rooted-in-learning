import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved Items | Rooted in Learning",
  robots: "noindex, nofollow",
};

export default function SavedItemsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-2">Saved Items</h1>
            <p className="text-[var(--text-muted)] mb-8">Blog posts, products, and videos you&apos;ve bookmarked.</p>

            {/* Tabs placeholder */}
            <div className="flex gap-2 mb-8">
              {["All", "Blog Posts", "Products", "Videos"].map((tab, i) => (
                <button key={tab} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-[var(--earth)] text-white" : "bg-[var(--beige-bg)] text-[var(--text-muted)] hover:bg-[var(--border-beige)]"}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Empty state */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-h3 text-[var(--text-dark)] mb-3">No saved items yet</h2>
              <p className="text-[var(--text-muted)]">
                Start exploring and save your favorite blog posts, products, and videos here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
