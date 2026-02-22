import Link from "next/link";
import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login | The Rooted Learner",
  description:
    "Sign in to access your purchased resources, saved favorites, and exclusive member content.",
  robots: "noindex, nofollow",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; message?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="auth-layout">
      {/* Brand Panel */}
      <div className="auth-brand">
        <div className="auth-brand-inner">
          <div className="auth-brand-logo">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <h2 className="auth-brand-title">The Rooted Learner</h2>
          <p className="auth-brand-desc">
            Practical tools and strategies built by a 12+ year educator for classrooms that thrive.
          </p>

          <div className="auth-features">
            <div className="auth-feature">
              <div className="auth-feature-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="auth-feature-text">
                <strong>Ready-to-teach lessons</strong> aligned to standards and built for real classrooms
              </p>
            </div>
            <div className="auth-feature">
              <div className="auth-feature-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="auth-feature-text">
                <strong>Teacher tools &amp; tutorials</strong> so you can integrate tech with confidence
              </p>
            </div>
            <div className="auth-feature">
              <div className="auth-feature-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="auth-feature-text">
                <strong>Curated favorites</strong> &mdash; educator-tested gear, books &amp; resources
              </p>
            </div>
          </div>

          <div className="auth-trust">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Trusted by 5,000+ educators
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="auth-form-panel">
        <div className="auth-form-container">
          <div className="auth-card">
            <div className="auth-card-header">
              <div className="auth-card-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="auth-card-title">Welcome Back</h1>
              <p className="auth-card-subtitle">Sign in to access your resources</p>
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

            <LoginForm redirectTo={params.redirect} />

            <div className="auth-card-footer">
              <p>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create one</Link>
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/" className="auth-back">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
