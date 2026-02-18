"use client";

import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";
import { signIn, type AuthResult } from "@/lib/auth-actions";

export function LoginForm({ redirectTo }: { redirectTo?: string }) {
  async function loginAction(prev: AuthResult, formData: FormData) {
    "use server";
    if (redirectTo) {
      formData.set("redirect", redirectTo);
    }
    return signIn(prev, formData);
  }

  return (
    <AuthForm action={loginAction} submitLabel="Sign In">
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
          name="password"
          required
          autoComplete="current-password"
          className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
          placeholder="••••••••"
        />
      </div>
    </AuthForm>
  );
}
