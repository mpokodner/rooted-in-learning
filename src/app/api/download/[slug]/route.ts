import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

const SIGNED_URL_TTL_SECONDS = 300;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "You must be signed in to download files." },
      { status: 401 }
    );
  }

  const adminClient = createServerSupabaseClient();

  const { data: product } = await adminClient
    .from("products")
    .select("id, name, file_url")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (!product || !product.file_url) {
    return NextResponse.json(
      { error: "Product not found." },
      { status: 404 }
    );
  }

  const { data: purchasedItems } = await adminClient
    .from("order_items")
    .select("id, order:orders!inner(id, user_id, email, status)")
    .eq("product_id", product.id);

  const hasPurchased = (purchasedItems ?? []).some((item) => {
    const order = Array.isArray(item.order) ? item.order[0] : item.order;
    return (
      order &&
      (order.user_id === user.id || order.email === user.email) &&
      order.status !== "refunded"
    );
  });

  if (!hasPurchased) {
    return NextResponse.json(
      { error: "You have not purchased this product." },
      { status: 403 }
    );
  }

  const { data: signedUrlData, error: signedUrlError } = await adminClient
    .storage
    .from("product-files")
    .createSignedUrl(product.file_url, SIGNED_URL_TTL_SECONDS);

  if (signedUrlError || !signedUrlData?.signedUrl) {
    console.error("Signed URL error:", signedUrlError);
    return NextResponse.json(
      { error: "Unable to generate download link. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.redirect(signedUrlData.signedUrl);
}

export const dynamic = "force-dynamic";
