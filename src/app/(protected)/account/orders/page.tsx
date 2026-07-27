import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders | The Rooted Learner",
  robots: "noindex, nofollow",
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-2">Order History</h1>
            <p className="text-[var(--text-muted)] mb-8">View and manage your past purchases.</p>

            {/* Empty state */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-h3 text-[var(--text-dark)] mb-3">No orders yet</h2>
              <p className="text-[var(--text-muted)]">
                When you make a purchase, your order history will appear here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
