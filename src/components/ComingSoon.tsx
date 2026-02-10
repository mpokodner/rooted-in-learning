"use client";

import Link from "next/link";

interface ComingSoonProps {
  title: string;
  features: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
  progress?: number;
}

export default function ComingSoon({
  title,
  features,
  progress = 75,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-new-light flex flex-col">
      {/* Header */}
      <header className="py-4 md:py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-rooted-earth rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-base font-bold text-rooted-earth">
                Rooted in Learning
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-onyx-muted hover:text-onyx transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Tree Illustration */}
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-moss/20 to-gentle-hold rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-24 md:w-32 md:h-32 text-moss"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  {/* Tree trunk */}
                  <rect
                    x="45"
                    y="60"
                    width="10"
                    height="25"
                    fill="currentColor"
                    opacity="0.6"
                  />
                  {/* Tree crown */}
                  <ellipse
                    cx="50"
                    cy="40"
                    rx="30"
                    ry="28"
                    fill="currentColor"
                    opacity="0.4"
                  />
                  <ellipse
                    cx="40"
                    cy="45"
                    rx="20"
                    ry="18"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <ellipse
                    cx="60"
                    cy="45"
                    rx="20"
                    ry="18"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <ellipse
                    cx="50"
                    cy="30"
                    rx="22"
                    ry="20"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-xs mx-auto mb-8">
              <div className="flex items-center justify-between text-xs text-onyx-muted mb-2">
                <span className="uppercase tracking-widest font-semibold">
                  Cultivating
                </span>
                <span className="font-bold text-onyx">{progress}%</span>
              </div>
              <div className="h-2 bg-gentle-hold rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sacred-ember to-sacred-ember-light rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="hero-heading font-semibold text-onyx mb-3">
              Something impactful is
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-moss mb-6">
              growing
            </h2>

            <p className="text-onyx-muted text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              We&apos;re cultivating a new space for {title.toLowerCase()},
              educational insights, and curated resources. Our digital ecosystem
              is expanding to better serve educators and learners alike.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input py-3.5 px-5 border-border rounded-full flex-1 bg-white"
                />
                <button className="bg-rooted-earth text-white px-6 py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-rooted-earth-dark transition-colors">
                  Notify me
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-xs text-onyx-muted">
              Be the first to know when we launch. No spam, just seeds of
              knowledge.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-border"
                >
                  <span className="text-rooted-earth">{feature.icon}</span>
                  <span className="text-sm font-medium text-onyx">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-onyx-muted">
              © {new Date().getFullYear()} Rooted in Learning. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/blog"
                className="text-sm text-onyx-muted hover:text-onyx transition-colors"
              >
                Philosophy
              </Link>
              <Link
                href="/microlearning"
                className="text-sm text-onyx-muted hover:text-onyx transition-colors"
              >
                Curriculum
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-onyx-muted hover:text-onyx transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gentle-hold flex items-center justify-center text-onyx-muted hover:bg-calm-spirit hover:text-onyx transition-colors"
                aria-label="Website"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gentle-hold flex items-center justify-center text-onyx-muted hover:bg-calm-spirit hover:text-onyx transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
