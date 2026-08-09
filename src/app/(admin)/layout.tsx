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
  const linkStyle: React.CSSProperties = {
    display: "block",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "14px",
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "var(--neutral-bg)" }}>
      <aside style={{
        width: "220px",
        background: "#3d4a2f",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}>
        <div style={{ padding: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#fff", margin: 0 }}>
            RIL Admin
          </h2>
        </div>
        <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="/admin" style={linkStyle}>Dashboard</a>
          <a href="/admin/products" style={linkStyle}>Products</a>
          <a href="/admin/orders" style={linkStyle}>Orders</a>
          <a href="/admin/subscribers" style={linkStyle}>Subscribers</a>
          <a href="/admin/leads" style={linkStyle}>Leads</a>
          <a href="/admin/waitlist" style={linkStyle}>Waitlist</a>
          <a href="/admin/analytics" style={linkStyle}>Analytics</a>
          <a href="/admin/vault" style={linkStyle}>Idea Vault</a>
        </nav>
        <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/" style={{ ...linkStyle, color: "rgba(255,255,255,0.6)" }}>
            &larr; Back to Site
          </a>
        </div>
      </aside>

      <main style={{ flex: 1, minWidth: 0, overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
}
