import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client (uses service role key for admin operations)
// Only use this in server-side code (API routes, server components, etc.)
export function createServerSupabaseClient() {
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Type definitions for database (to be extended as tables are created)
export type Database = {
  public: {
    Tables: {
      // Add table definitions here as you create them in Supabase
      // Example:
      // products: {
      //   Row: {
      //     id: string;
      //     name: string;
      //     price: number;
      //     created_at: string;
      //   };
      //   Insert: {
      //     id?: string;
      //     name: string;
      //     price: number;
      //     created_at?: string;
      //   };
      //   Update: {
      //     id?: string;
      //     name?: string;
      //     price?: number;
      //     created_at?: string;
      //   };
      // };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
