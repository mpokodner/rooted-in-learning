import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Rooted in Learning",
  description: "Complete your purchase securely with Stripe.",
  robots: "noindex, nofollow",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-h2 text-[var(--text-dark)] mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8">
                  <h2 className="text-h3 text-[var(--text-dark)] mb-6">Contact Information</h2>
                  <p className="text-[var(--text-muted)] text-sm">
                    Checkout will redirect to Stripe for secure payment processing. This page will be fully connected in Phase 4.
                  </p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="bg-[var(--beige-bg)] rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 sticky top-24">
                  <h2 className="text-h3 text-[var(--text-dark)] mb-6">Order Summary</h2>
                  <div className="border-t border-[var(--border-beige)] pt-4">
                    <div className="flex justify-between text-sm text-[var(--text-muted)] mb-2">
                      <span>Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-[var(--text-dark)] mt-4 pt-4 border-t border-[var(--border-beige)]">
                      <span>Total</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  <button className="w-full btn btn-lg btn-primary rounded-[var(--radius-lg)] mt-6" disabled>
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
