import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

/**
 * Admin Layout
 * Routes inside this group require admin role.
 * Auth + role check handled by middleware.ts at the edge.
 * Provides a minimal admin shell (no public header/footer).
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex">
      <aside className="hidden lg:flex w-56 bg-[var(--earth)] text-white flex-col shrink-0">
        <div className="p-5">
          <h2 className="text-base font-bold font-[var(--font-heading)]">
            RIL Admin
          </h2>
        </div>
        <nav className="flex-1 px-3 space-y-0.5">
          <a href="/admin" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Dashboard
          </a>
          <a href="/admin/products" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Products
          </a>
          <a href="/admin/orders" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Orders
          </a>
          <a href="/admin/subscribers" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Subscribers
          </a>
          <a href="/admin/leads" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Leads
          </a>
          <a href="/admin/waitlist" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Waitlist
          </a>
          <a href="/admin/analytics" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Analytics
          </a>
        </nav>
        <div className="p-3 border-t border-white/10">
          <a href="/" className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            &larr; Back to Site
          </a>
        </div>
      </aside>

      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}
