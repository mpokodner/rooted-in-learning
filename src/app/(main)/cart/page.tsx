import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cart | The Rooted Learner",
  description: "Review the items in your shopping cart.",
  robots: "noindex, nofollow",
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-8">Your Cart</h1>

            {/* Empty state */}
            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-12 text-center">
              <div className="w-16 h-16 bg-[var(--beige-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--earth-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <h2 className="text-h3 text-[var(--text-dark)] mb-3">Your cart is empty</h2>
              <p className="text-[var(--text-muted)] mb-6">
                Looks like you haven&apos;t added any resources yet. Start browsing to find what you need!
              </p>
              <Link href="/shop" className="btn btn-md btn-primary rounded-[var(--radius-lg)]">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
