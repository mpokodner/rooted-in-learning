import Link from "next/link";
import type { Metadata } from "next";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Create Account | Rooted in Learning",
  description:
    "Join Rooted in Learning to access exclusive resources, save your favorites, and shop educator-curated products.",
  robots: "noindex, nofollow",
};

export default function RegisterPage() {
  return (
    <main className="flex-1 flex items-center justify-center section">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-lg border border-[#E8DED0]">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#5C6B4A] rounded-[0.75rem] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h1 className="text-h2 text-[#2D2D2D] mb-2">Create Your Account</h1>
              <p className="text-sm text-[#666666]">Join 5,000+ educators growing with us</p>
            </div>

            <RegisterForm />

            <div className="mt-6 pt-6 border-t border-[#E8DED0] text-center">
              <p className="text-sm text-[#666666]">
                Already have an account?{" "}
                <Link href="/login" className="text-[#C17B5C] font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

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
