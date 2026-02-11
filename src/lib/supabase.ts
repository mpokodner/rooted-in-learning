import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// ─── Client-side Supabase client (uses anon key) ───
// Lazy-initialized so the build doesn't crash when env vars aren't set yet.
let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY. " +
          "Copy env.example → .env.local and fill in your Supabase credentials."
      );
    }
    _supabase = createClient(url, key);
  }
  return _supabase;
}

/** @deprecated – use getSupabase() instead; kept for backward compat */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return (getSupabase() as unknown as Record<string | symbol, unknown>)[prop];
  },
});

// ─── Server-side Supabase client (uses service role key for admin ops) ───
// Only use this in server-side code (API routes, server actions, etc.)
export function createServerSupabaseClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
        "Copy env.example → .env.local and fill in your Supabase credentials."
    );
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// ─── Type definitions for database (extended as tables are created) ───
export type Database = {
  public: {
    Tables: {
      // Add table definitions here as you create them in Supabase
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
