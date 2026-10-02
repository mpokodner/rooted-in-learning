import { NextResponse } from "next/server";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase-server";

export type AdminAuthResult =
  | { ok: true; user: User }
  | { ok: false; response: NextResponse };

/**
 * Cookie session + profiles.role === "admin".
 * Does not use the service role key for the role check.
 */
export async function requireAdmin(): Promise<AdminAuthResult> {
  try {
    const supabase = await createClient();
    if (!supabase) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Server configuration error", code: "CONFIG" },
          { status: 500 }
        ),
      };
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Unauthorized", code: "UNAUTHORIZED" },
          { status: 401 }
        ),
      };
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("requireAdmin", {
        userId: user.id,
        error: profileError.message,
      });
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Authorization check failed", code: "AUTHZ_LOOKUP_FAILED" },
          { status: 500 }
        ),
      };
    }

    if (profile?.role !== "admin") {
      return {
        ok: false,
        response: NextResponse.json(
          { error: "Forbidden", code: "FORBIDDEN" },
          { status: 403 }
        ),
      };
    }

    return { ok: true, user };
  } catch (error) {
    console.error("requireAdmin", {
      error: error instanceof Error ? error.message : String(error),
    });
    return {
      ok: false,
      response: NextResponse.json(
        { error: "Authorization check failed", code: "AUTHZ_ERROR" },
        { status: 500 }
      ),
    };
  }
}
