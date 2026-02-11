import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Rooted in Learning",
  description:
    "Sign in to access your purchased resources, saved favorites, and exclusive member content.",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center section">
      <div className="container">
        <div className="max-w-md mx-auto">
          {/* Login Card */}
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-lg border border-[#E8DED0]">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#5C6B4A] rounded-[0.75rem] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-h2 text-[#2D2D2D] mb-2">Welcome Back</h1>
              <p className="text-sm text-[#666666]">Sign in to access your resources</p>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-[#2D2D2D]">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-xs text-[#C17B5C] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-[#E8DED0] text-[#5C6B4D] focus:ring-[#5C6B4D]"
                />
                <label htmlFor="remember" className="text-sm text-[#666666]">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5C6B4D] text-white py-3.5 rounded-[0.75rem] font-semibold text-sm hover:bg-[#4A5638] transition-all"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#E8DED0] text-center">
              <p className="text-sm text-[#666666]">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#C17B5C] font-semibold hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#5C6B4D] transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
