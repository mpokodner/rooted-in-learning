import { parseArgs } from "node:util";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// ── Env validation ──────────────────────────────────────────

const REQUIRED_ENV = [
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
] as const;

for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`);
    console.error("Ensure .env.local exists and contains this variable.");
    process.exit(1);
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-18.acacia" as Stripe.LatestApiVersion,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ── CLI arg parsing ─────────────────────────────────────────

interface CliArgs {
  slug: string;
  name: string;
  priceCents: number;
  file: string;
  dryRun: boolean;
}

function parseCliArgs(): CliArgs {
  const { values } = parseArgs({
    options: {
      slug: { type: "string" },
      name: { type: "string" },
      price: { type: "string" },
      file: { type: "string" },
      "dry-run": { type: "boolean", default: false },
    },
    strict: true,
  });

  const missing: string[] = [];
  if (!values.slug) missing.push("--slug");
  if (!values.name) missing.push("--name");
  if (!values.price) missing.push("--price");
  if (!values.file) missing.push("--file");

  if (missing.length > 0) {
    console.error(`Missing required flags: ${missing.join(", ")}`);
    console.error(
      "\nUsage: npm run add-product -- --slug=my-product --name=\"My Product\" --price=24 --file=./product.pdf [--dry-run]"
    );
    process.exit(1);
  }

  const priceNum = parseFloat(values.price!);
  if (isNaN(priceNum) || priceNum <= 0) {
    console.error(`--price must be a positive number (in dollars). Got: ${values.price}`);
    process.exit(1);
  }

  const filePath = path.resolve(values.file!);
  if (!existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  return {
    slug: values.slug!,
    name: values.name!,
    priceCents: Math.round(priceNum * 100),
    file: filePath,
    dryRun: values["dry-run"] ?? false,
  };
}

// ── Lookup existing state ───────────────────────────────────

interface ExistingState {
  stripeProduct: Stripe.Product | null;
  stripePrice: Stripe.Price | null;
  supabaseRow: Record<string, unknown> | null;
}

async function lookupExisting(slug: string): Promise<ExistingState> {
  const state: ExistingState = {
    stripeProduct: null,
    stripePrice: null,
    supabaseRow: null,
  };

  // Check Supabase first (instant, avoids Stripe Search eventual consistency)
  const { data: row } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (row) {
    state.supabaseRow = row;

    if (row.stripe_price_id) {
      try {
        const price = await stripe.prices.retrieve(row.stripe_price_id as string, {
          expand: ["product"],
        });
        state.stripePrice = price;
        state.stripeProduct = price.product as Stripe.Product;
      } catch {
        console.warn(`Stripe price ${row.stripe_price_id} not found, will recreate.`);
      }
    }
  }

  // Fall back to Stripe Search if no Supabase row
  if (!state.stripeProduct) {
    try {
      const search = await stripe.products.search({
        query: `metadata['slug']:'${slug}'`,
      });
      if (search.data.length > 0) {
        state.stripeProduct = search.data[0];
        if (state.stripeProduct.default_price) {
          const priceId =
            typeof state.stripeProduct.default_price === "string"
              ? state.stripeProduct.default_price
              : state.stripeProduct.default_price.id;
          state.stripePrice = await stripe.prices.retrieve(priceId);
        }
      }
    } catch {
      // Search may fail in test mode or if no products exist yet
    }
  }

  return state;
}

// ── Main workflow ───────────────────────────────────────────

async function main() {
  const args = parseCliArgs();
  const { slug, name, priceCents, file, dryRun } = args;
  const ext = path.extname(file);
  const storagePath = `products/${slug}-v1${ext}`;

  if (dryRun) {
    console.log("\n=== DRY RUN — no changes will be made ===\n");
  }

  console.log(`Product:  ${name}`);
  console.log(`Slug:     ${slug}`);
  console.log(`Price:    $${(priceCents / 100).toFixed(2)} (${priceCents} cents)`);
  console.log(`File:     ${file}`);
  console.log(`Storage:  product-files/${storagePath}`);
  console.log();

  // 1. Lookup existing state
  const existing = await lookupExisting(slug);

  if (existing.supabaseRow) {
    console.log(`Found existing products row for slug "${slug}"`);
  }
  if (existing.stripeProduct) {
    console.log(`Found existing Stripe product: ${existing.stripeProduct.id}`);
  }
  if (existing.stripePrice) {
    console.log(
      `Found existing Stripe price: ${existing.stripePrice.id} ($${((existing.stripePrice.unit_amount ?? 0) / 100).toFixed(2)})`
    );
  }
  console.log();

  // 2. Ensure Stripe product
  let stripeProduct = existing.stripeProduct;

  if (!stripeProduct) {
    if (dryRun) {
      console.log(`[DRY RUN] Would create Stripe product "${name}" with metadata.slug="${slug}"`);
    } else {
      stripeProduct = await stripe.products.create({
        name,
        metadata: { slug },
      });
      console.log(`Created Stripe product: ${stripeProduct.id}`);
    }
  } else if (stripeProduct.name !== name) {
    if (dryRun) {
      console.log(`[DRY RUN] Would update Stripe product name from "${stripeProduct.name}" to "${name}"`);
    } else {
      stripeProduct = await stripe.products.update(stripeProduct.id, {
        name,
        metadata: { slug },
      });
      console.log(`Updated Stripe product name to "${name}"`);
    }
  }

  // 3. Ensure Stripe price
  let stripePrice = existing.stripePrice;
  const priceMatches =
    stripePrice && stripePrice.active && stripePrice.unit_amount === priceCents;

  if (!priceMatches) {
    if (dryRun) {
      console.log(`[DRY RUN] Would create Stripe price: $${(priceCents / 100).toFixed(2)} USD`);
      if (stripePrice && stripePrice.unit_amount !== priceCents) {
        console.log(
          `[DRY RUN] Would archive old price ${stripePrice.id} ($${((stripePrice.unit_amount ?? 0) / 100).toFixed(2)})`
        );
      }
    } else if (stripeProduct) {
      const newPrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: priceCents,
        currency: "usd",
      });
      console.log(`Created Stripe price: ${newPrice.id}`);

      await stripe.products.update(stripeProduct.id, {
        default_price: newPrice.id,
      });

      if (stripePrice && stripePrice.id !== newPrice.id) {
        await stripe.prices.update(stripePrice.id, { active: false });
        console.log(`Archived old price: ${stripePrice.id}`);
      }

      stripePrice = newPrice;
    }
  } else {
    console.log(`Price unchanged at $${(priceCents / 100).toFixed(2)}, keeping ${stripePrice!.id}`);
  }

  // 4. Check bucket privacy
  const { data: bucket, error: bucketError } = await supabase.storage.getBucket(
    "product-files"
  );

  if (bucketError) {
    console.error(`Failed to check product-files bucket: ${bucketError.message}`);
    console.error(
      "Ensure the 'product-files' storage bucket exists in your Supabase project."
    );
    process.exit(1);
  }

  if (bucket.public) {
    console.error(
      "ABORT: The 'product-files' bucket is PUBLIC. Digital product files must be in a private bucket."
    );
    console.error(
      "Go to Supabase Dashboard → Storage → product-files → Settings and disable public access."
    );
    process.exit(1);
  }

  // 5. Upload file
  if (dryRun) {
    console.log(`[DRY RUN] Would upload ${path.basename(file)} to product-files/${storagePath}`);
  } else {
    const fileBuffer = readFileSync(file);
    const { error: uploadError } = await supabase.storage
      .from("product-files")
      .upload(storagePath, fileBuffer, { upsert: true });

    if (uploadError) {
      console.error(`Upload failed: ${uploadError.message}`);
      process.exit(1);
    }
    console.log(`Uploaded to product-files/${storagePath}`);
  }

  // 6. Upsert products row
  const priceId = stripePrice?.id ?? "PENDING";

  if (dryRun) {
    console.log(`[DRY RUN] Would upsert products row: slug="${slug}", stripe_price_id="${priceId}", file_url="${storagePath}"`);
  } else {
    const { error: upsertError } = await supabase.from("products").upsert(
      {
        slug,
        name,
        price: priceCents,
        stripe_price_id: priceId,
        file_url: storagePath,
        product_type: "digital",
        category: "general",
        active: true,
      },
      { onConflict: "slug" }
    );

    if (upsertError) {
      console.error(`Products upsert failed: ${upsertError.message}`);
      process.exit(1);
    }
    console.log("Upserted products row");
  }

  // 7. Create payment link (or report)
  console.log("\n────────────────────────────────────────");

  if (dryRun) {
    console.log("[DRY RUN] Would create a Stripe payment link for this price");
    console.log("\n=== DRY RUN complete — re-run without --dry-run to execute ===");
  } else if (stripePrice) {
    try {
      const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: stripePrice.id, quantity: 1 }],
      });
      console.log(`\nProduct onboarded successfully!`);
      console.log(`  Stripe Price ID:  ${stripePrice.id}`);
      console.log(`  Storage Path:     product-files/${storagePath}`);
      console.log(`  Payment Link:     ${paymentLink.url}`);
    } catch {
      console.log(`\nProduct onboarded successfully!`);
      console.log(`  Stripe Price ID:  ${stripePrice.id}`);
      console.log(`  Storage Path:     product-files/${storagePath}`);
      console.log("  Payment Link:     (create manually in Stripe Dashboard)");
    }
  }

  console.log();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
