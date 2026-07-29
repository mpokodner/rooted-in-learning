import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Admin Dashboard | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getStats() {
  const supabase = createServerSupabaseClient();

  const [orders, subscribers, products, revenue, recentOrders, recentSubs] =
    await Promise.all([
      supabase
        .from("orders")
        .select("id", { count: "exact", head: true }),
      supabase
        .from("newsletter_subscribers")
        .select("id", { count: "exact", head: true })
        .eq("subscribed", true),
      supabase
        .from("products")
        .select("id", { count: "exact", head: true })
        .eq("active", true),
      supabase
        .from("orders")
        .select("total")
        .eq("status", "completed"),
      supabase
        .from("orders")
        .select("order_number, email, total, status, created_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("newsletter_subscribers")
        .select("email, source, created_at")
        .eq("subscribed", true)
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

  const totalRevenue = (revenue.data ?? []).reduce(
    (sum, o) => sum + (o.total || 0),
    0
  );

  return {
    orderCount: orders.count ?? 0,
    subscriberCount: subscribers.count ?? 0,
    productCount: products.count ?? 0,
    totalRevenue,
    recentOrders: recentOrders.data ?? [],
    recentSubs: recentSubs.data ?? [],
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const statCards = [
    {
      label: "Total Orders",
      value: String(stats.orderCount),
      href: "/admin/orders",
      color: "var(--earth)",
      bgColor: "#5C6B4A15",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      label: "Subscribers",
      value: String(stats.subscriberCount),
      href: "/admin/subscribers",
      color: "#2563eb",
      bgColor: "#2563eb12",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      label: "Products",
      value: String(stats.productCount),
      href: "/admin/products",
      color: "#9333ea",
      bgColor: "#9333ea12",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      label: "Revenue",
      value: `$${(stats.totalRevenue / 100).toFixed(2)}`,
      href: "/admin/orders",
      color: "#16a34a",
      bgColor: "#16a34a12",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>
          Dashboard
        </h1>
        <p style={{ fontSize: "14px", color: "var(--text-muted)", margin: 0 }}>
          Overview of your store and content.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
        {statCards.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid var(--border-beige)",
              padding: "16px",
              cursor: "pointer",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  backgroundColor: stat.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg
                    width="18"
                    height="18"
                    style={{ color: stat.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid var(--border-beige)" }}>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>Recent Orders</span>
            <Link href="/admin/orders" style={{ fontSize: "12px", color: "var(--earth)", textDecoration: "none" }}>View all</Link>
          </div>
          {stats.recentOrders.length === 0 ? (
            <p style={{ padding: "16px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
              No orders yet. Orders will appear here once your store is live.
            </p>
          ) : (
            <div>
              {stats.recentOrders.map((order) => (
                <div
                  key={order.order_number}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid var(--border-beige)" }}
                >
                  <div style={{ minWidth: 0, overflow: "hidden" }}>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-dark)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {order.order_number}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {order.email}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, marginLeft: "12px" }}>
                    <span style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "2px 8px",
                      borderRadius: "99px",
                      background: order.status === "completed" ? "#f0fdf4" : order.status === "refunded" ? "#fef2f2" : "#fefce8",
                      color: order.status === "completed" ? "#15803d" : order.status === "refunded" ? "#dc2626" : "#a16207",
                    }}>
                      {order.status}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)" }}>
                      ${(order.total / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid var(--border-beige)" }}>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>Recent Subscribers</span>
            <Link href="/admin/subscribers" style={{ fontSize: "12px", color: "var(--earth)", textDecoration: "none" }}>View all</Link>
          </div>
          {stats.recentSubs.length === 0 ? (
            <p style={{ padding: "16px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
              No subscribers yet. They will appear here as people sign up.
            </p>
          ) : (
            <div>
              {stats.recentSubs.map((sub) => (
                <div
                  key={sub.email}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid var(--border-beige)" }}
                >
                  <div style={{ minWidth: 0, overflow: "hidden", flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--text-dark)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {sub.email}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                      {new Date(sub.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    padding: "2px 6px",
                    borderRadius: "99px",
                    background: "var(--beige-bg)",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                    marginLeft: "8px",
                    maxWidth: "120px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {sub.source}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
