import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Rooted in Learning",
  robots: "noindex, nofollow",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex-1 flex items-center justify-center section">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-lg border border-[#E8DED0]">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[var(--beige-bg)] rounded-[0.75rem] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[var(--earth)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h1 className="text-h2 text-[#2D2D2D] mb-2">Reset Password</h1>
              <p className="text-sm text-[#666666]">Enter your email and we&apos;ll send you a reset link.</p>
            </div>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]" placeholder="your@email.com" />
              </div>
              <button type="submit" className="w-full bg-[#5C6B4D] text-white py-3.5 rounded-[0.75rem] font-semibold text-sm hover:bg-[#4A5638] transition-all">
                Send Reset Link
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-[#E8DED0] text-center">
              <Link href="/login" className="text-sm text-[#C17B5C] font-semibold hover:underline">
                ← Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
