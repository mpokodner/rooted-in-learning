"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/subscribers", label: "Subscribers" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/waitlist", label: "Waitlist" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/vault", label: "Idea Vault" },
  { href: "/admin/architect", label: "Idea Architect" },
];

const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "14px",
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  transition: "background 0.15s",
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  background: "rgba(255,255,255,0.12)",
  color: "#fff",
  fontWeight: 600,
};

export default function AdminSidebar() {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
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
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={isActive(item.href, item.exact) ? activeLinkStyle : linkStyle}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <Link href="/" style={{ ...linkStyle, color: "rgba(255,255,255,0.6)" }}>
          &larr; Back to Site
        </Link>
      </div>
    </aside>
  );
}
