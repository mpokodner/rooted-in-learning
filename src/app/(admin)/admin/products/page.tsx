import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Products | Admin | The Rooted Learner",
  robots: "noindex, nofollow",
};

async function getProducts() {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase
    .from("products")
    .select("name, slug, price, product_type, active, featured, file_url, stripe_price_id, created_at")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>Products</h1>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>{products.length} total products</p>
        </div>
        <Link href="/admin" style={{ fontSize: "13px", color: "var(--earth)", textDecoration: "none" }}>&larr; Dashboard</Link>
      </div>

      <div style={{ background: "#fff", borderRadius: "12px", border: "1px solid var(--border-beige)", overflow: "hidden" }}>
        {products.length === 0 ? (
          <p style={{ padding: "20px", fontSize: "13px", color: "var(--text-muted)", margin: 0 }}>
            No products yet. Use <code style={{ background: "var(--beige-bg)", padding: "1px 4px", borderRadius: "4px" }}>npm run add-product</code> to onboard your first product.
          </p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-beige)", background: "var(--beige-bg)" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Slug</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Price</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Type</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>File</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontWeight: 500, color: "var(--text-muted)", fontSize: "12px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.slug} style={{ borderBottom: "1px solid var(--border-beige)" }}>
                    <td style={{ padding: "10px 14px", fontWeight: 500, color: "var(--text-dark)", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.name}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", fontFamily: "monospace", fontSize: "12px", whiteSpace: "nowrap" }}>{product.slug}</td>
                    <td style={{ padding: "10px 14px", fontWeight: 600, color: "var(--text-dark)", whiteSpace: "nowrap" }}>${(product.price / 100).toFixed(2)}</td>
                    <td style={{ padding: "10px 14px", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{product.product_type}</td>
                    <td style={{ padding: "10px 14px" }}>
                      {product.file_url ? (
                        <span style={{ fontSize: "12px", color: "#16a34a" }}>Uploaded</span>
                      ) : (
                        <span style={{ fontSize: "12px", color: "#ef4444" }}>Missing</span>
                      )}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <span style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: "99px",
                          background: product.active ? "#f0fdf4" : "#f3f4f6",
                          color: product.active ? "#15803d" : "#6b7280",
                        }}>
                          {product.active ? "Active" : "Inactive"}
                        </span>
                        {product.featured && (
                          <span style={{
                            fontSize: "11px",
                            fontWeight: 500,
                            padding: "2px 8px",
                            borderRadius: "99px",
                            background: "#fffbeb",
                            color: "#b45309",
                          }}>
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
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
