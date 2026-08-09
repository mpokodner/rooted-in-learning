import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { updateSession } from "@/lib/supabase-middleware";

const PROTECTED_PATHS = ["/account"];
const ADMIN_AUTH_PATHS = ["/admin/login", "/admin/forgot-password", "/admin/reset-password"];
const ADMIN_PATHS = ["/admin"];

async function isAdmin(userId: string): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return false;

  const supabase = createClient(url, serviceKey);
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  return data?.role === "admin";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const { user, supabaseResponse } = await updateSession(request);

  const isAdminAuth = ADMIN_AUTH_PATHS.some((p) => pathname.startsWith(p));
  const isAdminPath = ADMIN_PATHS.some((p) => pathname.startsWith(p));
  const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));

  if (isAdminAuth) {
    if (user && !pathname.startsWith("/admin/reset-password")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return supabaseResponse;
  }

  if (isAdminPath) {
    if (!user) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (!(await isAdmin(user.id))) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return supabaseResponse;
  }

  if (isProtected) {
    if (!user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/account/:path*",
    "/admin/:path*",
  ],
};
