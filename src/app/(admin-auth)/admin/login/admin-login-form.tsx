"use client";

import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";
import { signIn } from "@/lib/auth-actions";

export function AdminLoginForm({ redirectTo }: { redirectTo?: string }) {
  return (
    <AuthForm action={signIn} submitLabel="Sign In">
      <input type="hidden" name="redirect" value={redirectTo || "/admin"} />

      <div className="auth-field">
        <label htmlFor="email" className="auth-label">
          Email
        </label>
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

      <div className="auth-field">
        <div className="auth-label-row">
          <label htmlFor="password" className="auth-label" style={{ marginBottom: 0 }}>
            Password
          </label>
          <Link href="/admin/forgot-password" className="auth-forgot-link">
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-password"
          className="auth-input"
          placeholder="••••••••"
        />
      </div>
    </AuthForm>
  );
}
