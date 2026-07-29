import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Orders | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getOrders() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("orders")
    .select("order_number, email, total, status, created_at, order_items(product_name, quantity, price)")
    .order("created_at", { ascending: false })
    .limit(50);
  return data ?? [];
}

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Orders</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{orders.length} total orders</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {orders.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>No orders yet.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Order</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Email</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Items</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Total</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.order_number} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 500, color: "var(--text-dark)", whiteSpace: "nowrap" }}>{order.order_number}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{order.email}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)" }}>
                      {(order.order_items as { product_name: string; quantity: number; price: number }[]).map((item, i) => (
                        <div key={i} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>{item.product_name} x{item.quantity}</div>
                      ))}
                    </td>
                    <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--text-dark)", whiteSpace: "nowrap" }}>${(order.total / 100).toFixed(2)}</td>
                    <td style={{ padding: "10px 14px" }}>
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
                    </td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{new Date(order.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
