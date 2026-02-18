import type { Metadata } from "next";
import { ResetPasswordForm } from "./reset-password-form";

export const metadata: Metadata = {
  title: "Set New Password | Rooted in Learning",
  robots: "noindex, nofollow",
};

export default function ResetPasswordPage() {
  return (
    <main className="flex-1 flex items-center justify-center section">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-lg border border-[#E8DED0]">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-[#5C6B4A] rounded-[0.75rem] flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-h2 text-[#2D2D2D] mb-2">Set New Password</h1>
              <p className="text-sm text-[#666666]">
                Choose a new password for your account.
              </p>
            </div>

            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </main>
  );
}
