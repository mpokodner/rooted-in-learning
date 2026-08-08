"use client";

import { AuthForm } from "@/components/AuthForm";
import { resetPassword } from "@/lib/auth-actions";

export function ResetPasswordForm() {
  return (
    <AuthForm action={resetPassword} submitLabel="Update Password">
      <div className="auth-field">
        <label htmlFor="password" className="auth-label">New Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={6}
          autoComplete="new-password"
          className="auth-input"
          placeholder="••••••••"
        />
        <p className="auth-hint">At least 6 characters</p>
      </div>
      <div className="auth-field">
        <label htmlFor="confirm" className="auth-label">Confirm New Password</label>
        <input
          type="password"
          id="confirm"
          name="confirm"
          required
          minLength={6}
          autoComplete="new-password"
          className="auth-input"
          placeholder="••••••••"
        />
      </div>
    </AuthForm>
  );
}
