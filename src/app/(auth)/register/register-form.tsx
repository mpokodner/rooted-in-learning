"use client";

import { AuthForm } from "@/components/AuthForm";
import { signUp } from "@/lib/auth-actions";

export function RegisterForm() {
  return (
    <AuthForm action={signUp} submitLabel="Create Account">
      <div className="auth-field">
        <label htmlFor="name" className="auth-label">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className="auth-input"
          placeholder="Jane Doe"
        />
      </div>
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
      <div className="auth-field">
        <label htmlFor="password" className="auth-label">Password</label>
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
        <label htmlFor="confirm" className="auth-label">Confirm Password</label>
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
