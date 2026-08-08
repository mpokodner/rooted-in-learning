import Link from "next/link";
import type { Metadata } from "next";
import { AdminLoginForm } from "./admin-login-form";

export const metadata: Metadata = {
  title: "Admin Login | The Rooted Learner",
  robots: "noindex, nofollow",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; message?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="auth-layout">
      <div className="auth-brand">
        <div className="auth-brand-inner">
          <div className="auth-brand-logo">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <h2 className="auth-brand-title">RIL Admin</h2>
          <p className="auth-brand-desc">
            The Rooted Learner administration dashboard.
          </p>

          <div className="auth-trust">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Authorized access only
          </div>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-form-container">
          <div className="auth-card">
            <div className="auth-card-header">
              <div className="auth-card-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="auth-card-title">Admin Sign In</h1>
              <p className="auth-card-subtitle">Sign in to access the dashboard</p>
            </div>

            {params.message && (
              <div className="auth-alert auth-alert--success">{params.message}</div>
            )}

            {params.error && (
              <div className="auth-alert auth-alert--error">
                {params.error === "auth_failed"
                  ? "Authentication failed. Please try again."
                  : params.error}
              </div>
            )}

            <AdminLoginForm redirectTo={params.redirect || "/admin"} />
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/" className="auth-back">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
