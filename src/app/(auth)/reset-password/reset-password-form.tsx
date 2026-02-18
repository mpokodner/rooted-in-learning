"use client";

import { AuthForm } from "@/components/AuthForm";
import { resetPassword } from "@/lib/auth-actions";

export function ResetPasswordForm() {
  return (
    <AuthForm action={resetPassword} submitLabel="Update Password">
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#2D2D2D] mb-2">
          New Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={6}
          autoComplete="new-password"
          className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
          placeholder="••••••••"
        />
        <p className="text-xs text-[#999] mt-1">At least 6 characters</p>
      </div>
      <div>
        <label htmlFor="confirm" className="block text-sm font-medium text-[#2D2D2D] mb-2">
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          required
          minLength={6}
          autoComplete="new-password"
          className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
          placeholder="••••••••"
        />
      </div>
    </AuthForm>
  );
}
