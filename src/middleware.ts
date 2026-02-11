import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase-middleware";

/**
 * Next.js Middleware — runs at the edge on every matched route.
 *
 * Responsibilities:
 * 1. Refresh the Supabase auth session (keeps cookies alive)
 * 2. Protect /account/* routes — redirect to /login if unauthenticated
 * 3. Protect /admin/* routes — redirect to / if not an admin
 * 4. Redirect /login and /register to /account if already authenticated
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { user, supabaseResponse } = await updateSession(request);

  // ─── Protected Routes: require authentication ───
  if (pathname.startsWith("/account")) {
    if (!user) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ─── Admin Routes: require authentication + admin role ───
  if (pathname.startsWith("/admin")) {
    if (!user) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    // TODO: Check user role from profile table once auth is implemented
    // const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single();
    // if (profile?.role !== 'admin') {
    //   return NextResponse.redirect(new URL('/', request.url));
    // }
  }

  // ─── Auth Routes: redirect away if already logged in ───
  if (pathname === "/login" || pathname === "/register") {
    if (user) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }

  return supabaseResponse;
}

/**
 * Matcher — which routes this middleware runs on.
 * Excludes static files, images, and favicon.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
