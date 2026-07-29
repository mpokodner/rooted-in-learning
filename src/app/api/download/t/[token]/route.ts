import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

const SIGNED_URL_TTL_SECONDS = 300;

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const supabase = createServerSupabaseClient();

  const { data: tokenRow, error: tokenError } = await supabase
    .from("download_tokens")
    .select("id, order_id, product_id, downloads, max_downloads, expires_at")
    .eq("token", token)
    .maybeSingle();

  if (tokenError || !tokenRow) {
    return NextResponse.json(
      { error: "Invalid download link." },
      { status: 404 }
    );
  }

  if (new Date(tokenRow.expires_at) < new Date()) {
    return NextResponse.json(
      { error: "This download link has expired. Please contact admin@therootedlearner.com for help." },
      { status: 410 }
    );
  }

  if (tokenRow.downloads >= tokenRow.max_downloads) {
    return NextResponse.json(
      { error: "This download link has reached its maximum number of downloads. Please contact admin@therootedlearner.com for help." },
      { status: 410 }
    );
  }

  const { data: order } = await supabase
    .from("orders")
    .select("status")
    .eq("id", tokenRow.order_id)
    .maybeSingle();

  if (!order || order.status === "refunded") {
    return NextResponse.json(
      { error: "This order has been refunded." },
      { status: 403 }
    );
  }

  const { data: product } = await supabase
    .from("products")
    .select("file_url")
    .eq("id", tokenRow.product_id)
    .maybeSingle();

  if (!product?.file_url) {
    return NextResponse.json(
      { error: "Product file not found." },
      { status: 404 }
    );
  }

  const { data: signedUrlData, error: signedUrlError } = await supabase
    .storage
    .from("product-files")
    .createSignedUrl(product.file_url, SIGNED_URL_TTL_SECONDS);

  if (signedUrlError || !signedUrlData?.signedUrl) {
    console.error("Signed URL error:", signedUrlError);
    return NextResponse.json(
      { error: "Unable to generate download. Please try again." },
      { status: 500 }
    );
  }

  await supabase
    .from("download_tokens")
    .update({ downloads: tokenRow.downloads + 1 })
    .eq("id", tokenRow.id);

  return NextResponse.redirect(signedUrlData.signedUrl);
}

export const dynamic = "force-dynamic";
