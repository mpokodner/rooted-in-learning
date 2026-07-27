"use client";

import { createBrowserClient } from "@supabase/ssr";
import { type SupabaseClient } from "@supabase/supabase-js";

/**
 * Creates a Supabase client for use in Client Components (browser).
 * Uses `createBrowserClient` from @supabase/ssr so cookies stay
 * in sync with the server client — no token juggling needed.
 *
 * Returns `null` when the required env vars are missing (e.g. during
 * static pre-rendering at build time).
 *
 * ⚠️  Only import this in files marked "use client".
 */
export function createClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Env vars are unavailable (e.g. during static build).
    // Return null so callers can handle gracefully.
    return null;
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
