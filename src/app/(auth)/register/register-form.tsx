"use client";

import { AuthForm } from "@/components/AuthForm";
import { signUp } from "@/lib/auth-actions";

export function RegisterForm() {
  return (
    <AuthForm action={signUp} submitLabel="Create Account">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full px-4 py-3 border border-[#E8DED0] rounded-[0.75rem] focus:outline-none focus:border-[#5C6B4D] text-[#2D2D2D]"
          placeholder="Jane Doe"
        />
      </div>
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
        <label htmlFor="password" className="block text-sm font-medium text-[#2D2D2D] mb-2">
          Password
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
          Confirm Password
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
