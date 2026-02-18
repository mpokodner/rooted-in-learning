"use client";

import { AuthForm } from "@/components/AuthForm";
import { forgotPassword } from "@/lib/auth-actions";

export function ForgotPasswordForm() {
  return (
    <AuthForm action={forgotPassword} submitLabel="Send Reset Link">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
          placeholder="your@email.com"
        />
      </div>
    </AuthForm>
  );
}
