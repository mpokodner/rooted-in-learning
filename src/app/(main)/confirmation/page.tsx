import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed | The Rooted Learner",
  description: "Your order has been successfully placed!",
  robots: "noindex, nofollow",
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      <section className="section">
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-[var(--earth)] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-h1 text-[var(--text-dark)] mb-3">Order Confirmed!</h1>
            <p className="text-[var(--text-muted)] text-lg mb-2">Thank you for your purchase.</p>
            <p className="text-[var(--text-muted)] text-sm mb-8">
              Your order number is <strong className="text-[var(--text-dark)]">#RIL-000000</strong>
            </p>

            <div className="bg-white rounded-[var(--radius-xl)] border border-[var(--border-beige)] p-8 mb-8">
              <h2 className="text-h3 text-[var(--text-dark)] mb-4">What&apos;s Next?</h2>
              <ul className="text-left space-y-3 text-sm text-[var(--text-muted)]">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--earth)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>A confirmation email has been sent to your inbox.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--earth)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Digital downloads are available in your account under &quot;Downloads&quot;.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--earth)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Questions? Contact us at hello@therootedlearner.com</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/account/orders" className="btn btn-md btn-secondary rounded-[var(--radius-lg)]">
                View My Orders
              </Link>
              <Link href="/shop" className="btn btn-md btn-primary rounded-[var(--radius-lg)]">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
