import { parseArgs } from "node:util";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";
import dotenv from "dotenv";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// ── Env validation ──────────────────────────────────────────

const REQUIRED_ENV = [
  "STRIPE_SECRET_KEY",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
] as const;

for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`);
    process.exit(1);
  }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-18.acacia" as Stripe.LatestApiVersion,
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const supabaseAnon = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const resend = new Resend(process.env.RESEND_API_KEY!);

// ── Types ───────────────────────────────────────────────────

type CheckResult = {
  status: "PASS" | "FAIL" | "WARN" | "INFO";
  label: string;
  detail: string;
};

// ── Arg parsing ─────────────────────────────────────────────

function parseSlugArg(): string {
  const { values } = parseArgs({
    options: { slug: { type: "string" } },
    strict: true,
  });

  if (!values.slug) {
    console.error("Missing required flag: --slug");
    console.error("\nUsage: npm run verify-chain -- --slug=my-product");
    process.exit(1);
  }

  return values.slug;
}

// ── Checks ──────────────────────────────────────────────────

async function checkProductAndPrice(
  slug: string
): Promise<{ result: CheckResult; row: Record<string, unknown> | null }> {
  const { data: row, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !row) {
    return {
      result: {
        status: "FAIL",
        label: "Products row",
        detail: `No products row found for slug "${slug}"`,
      },
      row: null,
    };
  }

  if (!row.stripe_price_id) {
    return {
      result: {
        status: "FAIL",
        label: "Products row",
        detail: "Products row exists but stripe_price_id is null",
      },
      row,
    };
  }

  try {
    const price = await stripe.prices.retrieve(row.stripe_price_id as string);

    if (!price.active) {
      return {
        result: {
          status: "FAIL",
          label: "Stripe price",
          detail: `Price ${price.id} exists but is inactive`,
        },
        row,
      };
    }

    if (price.unit_amount !== row.price) {
      return {
        result: {
          status: "FAIL",
          label: "Price mismatch",
          detail: `Stripe price is $${((price.unit_amount ?? 0) / 100).toFixed(2)} but products row has $${((row.price as number) / 100).toFixed(2)}`,
        },
        row,
      };
    }

    return {
      result: {
        status: "PASS",
        label: "Products row exists, Stripe price active",
        detail: `$${((price.unit_amount ?? 0) / 100).toFixed(2)}, ${price.id}`,
      },
      row,
    };
  } catch {
    return {
      result: {
        status: "FAIL",
        label: "Stripe price lookup",
        detail: `Could not retrieve Stripe price ${row.stripe_price_id}`,
      },
      row,
    };
  }
}

async function checkStorageObject(fileUrl: string): Promise<CheckResult> {
  const { data: bucket, error: bucketError } = await supabaseAdmin.storage.getBucket(
    "product-files"
  );

  if (bucketError) {
    return {
      status: "FAIL",
      label: "Storage bucket",
      detail: `Could not check product-files bucket: ${bucketError.message}`,
    };
  }

  if (bucket.public) {
    return {
      status: "FAIL",
      label: "Bucket privacy",
      detail: "product-files bucket is PUBLIC — must be private for digital products",
    };
  }

  // Check if file exists by attempting to create a signed URL
  const { data: signedData, error: signedError } =
    await supabaseAdmin.storage
      .from("product-files")
      .createSignedUrl(fileUrl, 10);

  if (signedError || !signedData?.signedUrl) {
    return {
      status: "FAIL",
      label: "Storage object",
      detail: `Object not found at ${fileUrl}: ${signedError?.message ?? "no signed URL returned"}`,
    };
  }

  return {
    status: "PASS",
    label: "Storage object exists, bucket is private",
    detail: fileUrl,
  };
}

async function checkSignedUrlExpiry(fileUrl: string): Promise<CheckResult> {
  const { data, error } = await supabaseAdmin.storage
    .from("product-files")
    .createSignedUrl(fileUrl, 2);

  if (error || !data?.signedUrl) {
    return {
      status: "FAIL",
      label: "Signed URL",
      detail: `Could not create signed URL: ${error?.message ?? "unknown"}`,
    };
  }

  // Verify URL works immediately
  const immediateRes = await fetch(data.signedUrl);
  if (!immediateRes.ok) {
    return {
      status: "FAIL",
      label: "Signed URL",
      detail: `Fresh signed URL returned ${immediateRes.status} (expected 200)`,
    };
  }

  // Wait for expiry
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Verify URL is expired
  const expiredRes = await fetch(data.signedUrl);
  if (expiredRes.ok) {
    return {
      status: "FAIL",
      label: "Signed URL expiry",
      detail: "URL still valid after TTL — signed URLs are not expiring correctly",
    };
  }

  return {
    status: "PASS",
    label: "Signed URL expired correctly after 2s TTL",
    detail: `Expired with status ${expiredRes.status}`,
  };
}

async function checkResendDomain(): Promise<CheckResult> {
  try {
    const { data: domains } = await resend.domains.list();

    if (!domains || !Array.isArray(domains.data)) {
      return {
        status: "FAIL",
        label: "Resend domains",
        detail: "Could not list Resend domains",
      };
    }

    const domain = domains.data.find(
      (d: { name: string }) =>
        d.name === "therootedlearner.com"
    );

    if (!domain) {
      return {
        status: "FAIL",
        label: "Resend domain",
        detail: "Domain therootedlearner.com not found in Resend",
      };
    }

    if ((domain as { status: string }).status !== "verified") {
      return {
        status: "FAIL",
        label: "Resend domain",
        detail: `Domain therootedlearner.com status: ${(domain as { status: string }).status} (expected verified)`,
      };
    }

    return {
      status: "PASS",
      label: "Resend domain therootedlearner.com is verified",
      detail: "",
    };
  } catch (err) {
    return {
      status: "FAIL",
      label: "Resend domain check",
      detail: `API error: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}

async function checkOrdersRls(): Promise<CheckResult> {
  const { data, error } = await supabaseAnon
    .from("orders")
    .select("id")
    .limit(1);

  if (error) {
    // RLS may return an error or empty results depending on config
    return {
      status: "PASS",
      label: "Orders table not readable by anon key",
      detail: `Query returned error: ${error.message}`,
    };
  }

  if (data && data.length > 0) {
    return {
      status: "FAIL",
      label: "Orders RLS",
      detail: "Anon key was able to read orders — RLS is not blocking unauthenticated access",
    };
  }

  return {
    status: "PASS",
    label: "Orders table not readable by anon key",
    detail: "",
  };
}

function checkBuildSecrets(): CheckResult {
  const nextDir = path.resolve(process.cwd(), ".next");

  if (!existsSync(nextDir)) {
    return {
      status: "WARN",
      label: "Build output (.next/) not found",
      detail: "Run 'npm run build' first to check for leaked secrets",
    };
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  const checks = [
    { pattern: serviceKey.substring(0, 20), label: "SUPABASE_SERVICE_ROLE_KEY" },
    { pattern: "sk_live", label: "sk_live prefix" },
  ];

  for (const check of checks) {
    try {
      const result = execSync(
        `grep -rl "${check.pattern}" "${nextDir}" 2>/dev/null || true`,
        { encoding: "utf-8" }
      ).trim();

      if (result) {
        return {
          status: "FAIL",
          label: `Secret leaked in build output`,
          detail: `${check.label} found in: ${result.split("\n").slice(0, 3).join(", ")}`,
        };
      }
    } catch {
      // grep returned no matches
    }
  }

  return {
    status: "PASS",
    label: "No secrets in build output",
    detail: "",
  };
}

// ── Runner ──────────────────────────────────────────────────

async function main() {
  const slug = parseSlugArg();
  console.log(`\nVerifying purchase chain for: ${slug}\n`);

  const results: CheckResult[] = [];

  // Check 1: Product + Stripe price
  const { result: productResult, row } = await checkProductAndPrice(slug);
  results.push(productResult);

  // Check 2: Storage object + bucket privacy
  if (row?.file_url) {
    results.push(await checkStorageObject(row.file_url as string));
  } else {
    results.push({
      status: "FAIL",
      label: "Storage object",
      detail: "No file_url in products row — cannot check storage",
    });
  }

  // Check 3: Signed URL lifecycle
  if (row?.file_url) {
    results.push(await checkSignedUrlExpiry(row.file_url as string));
  } else {
    results.push({
      status: "FAIL",
      label: "Signed URL expiry",
      detail: "No file_url — skipped",
    });
  }

  // Check 4: Resend domain
  results.push(await checkResendDomain());

  // Check 5: Orders RLS
  results.push(await checkOrdersRls());

  // Check 6: Build secrets
  results.push(checkBuildSecrets());

  // Info: Products RLS is intentionally public
  results.push({
    status: "INFO",
    label: "Products table is publicly readable",
    detail: "Expected for storefront — active products are visible to all",
  });

  // Print results
  console.log("────────────────────────────────────────");
  for (const r of results) {
    const icon =
      r.status === "PASS" ? "PASS" :
      r.status === "FAIL" ? "FAIL" :
      r.status === "WARN" ? "WARN" : "INFO";
    const detail = r.detail ? ` (${r.detail})` : "";
    console.log(`[${icon}] ${r.label}${detail}`);
  }
  console.log("────────────────────────────────────────");

  const passed = results.filter((r) => r.status === "PASS").length;
  const failed = results.filter((r) => r.status === "FAIL").length;
  const warned = results.filter((r) => r.status === "WARN").length;

  console.log(`\nResult: ${passed} passed, ${failed} failed, ${warned} warning(s)\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
