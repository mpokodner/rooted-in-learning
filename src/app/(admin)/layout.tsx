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
      {/* Admin sidebar will be added as a component in Phase 7 */}
      <aside className="hidden lg:flex w-64 bg-[var(--earth)] text-white flex-col">
        <div className="p-6">
          <h2 className="text-lg font-bold font-[var(--font-heading)]">
            RIL Admin
          </h2>
        </div>
        <nav className="flex-1 px-4 space-y-1">
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
          <a href="/admin/analytics" className="block px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            Analytics
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/" className="block px-3 py-2 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            ← Back to Site
          </a>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
