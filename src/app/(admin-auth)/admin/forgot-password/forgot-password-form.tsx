"use client";

import { AuthForm } from "@/components/AuthForm";
import { forgotPassword } from "@/lib/auth-actions";

export function ForgotPasswordForm() {
  return (
    <AuthForm action={forgotPassword} submitLabel="Send Reset Link">
      <div className="auth-field">
        <label htmlFor="email" className="auth-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="auth-input"
          placeholder="your@email.com"
        />
      </div>
    </AuthForm>
  );
}
