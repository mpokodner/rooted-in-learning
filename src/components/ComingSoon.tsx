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
    <div className="min-h-screen bg-[var(--neutral-bg)] flex flex-col">
      {/* Header */}
      <header className="py-5 md:py-6 border-b border-[var(--border-beige)]">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-[var(--duration-fast)]">
              <div className="w-9 h-9 bg-[var(--earth)] rounded-[var(--radius-md)] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-[var(--text-base)] font-semibold text-[var(--earth)] font-[var(--font-heading)]">
                Rooted in Learning
              </span>
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors duration-[var(--duration-fast)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* Tree Illustration */}
            <div className="w-44 h-44 md:w-52 md:h-52 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--earth-light)]/20 to-[var(--beige-bg)] rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-28 h-28 md:w-36 md:h-36" viewBox="0 0 100 100" fill="none">
                  {/* Tree trunk */}
                  <rect x="45" y="55" width="10" height="30" fill="var(--earth)" opacity="0.7" rx="2" />
                  {/* Roots */}
                  <path d="M45 80 Q35 85 25 82" stroke="var(--earth)" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M55 80 Q65 85 75 82" stroke="var(--earth)" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M48 85 Q40 92 30 88" stroke="var(--earth)" strokeWidth="2" opacity="0.4" fill="none" />
                  <path d="M52 85 Q60 92 70 88" stroke="var(--earth)" strokeWidth="2" opacity="0.4" fill="none" />
                  {/* Tree crown */}
                  <ellipse cx="50" cy="35" rx="32" ry="30" fill="var(--earth-light)" opacity="0.3" />
                  <ellipse cx="38" cy="40" rx="22" ry="20" fill="var(--earth-light)" opacity="0.4" />
                  <ellipse cx="62" cy="40" rx="22" ry="20" fill="var(--earth-light)" opacity="0.4" />
                  <ellipse cx="50" cy="28" rx="24" ry="22" fill="var(--earth)" opacity="0.5" />
                  <ellipse cx="50" cy="22" rx="18" ry="16" fill="var(--earth)" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-xs mx-auto mb-10">
              <div className="flex items-center justify-between text-[var(--text-xs)] text-[var(--text-muted)] mb-2">
                <span className="uppercase tracking-[var(--tracking-widest)] font-semibold">Cultivating</span>
                <span className="font-bold text-[var(--text-dark)]">{progress}%</span>
              </div>
              <div className="h-2 bg-[var(--border-beige)] rounded-[var(--radius-full)] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--terracotta)] to-[var(--terracotta-light)] rounded-[var(--radius-full)] transition-all duration-[var(--duration-slow)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="hero-heading text-[var(--text-dark)] mb-2">
              Something impactful is
            </h1>
            <h2 className="text-h1 md:text-display-md text-[var(--earth-light)] mb-8">
              growing
            </h2>

            <p className="text-[var(--text-muted)] text-[var(--text-base)] md:text-[var(--text-lg)] max-w-lg mx-auto mb-10 leading-[var(--leading-relaxed)]">
              We&apos;re cultivating a new space for {title.toLowerCase()}, educational insights, and curated resources. Our digital ecosystem is expanding to better serve educators and learners alike.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-3.5 px-5 border-2 border-[var(--border-beige)] rounded-[var(--radius-lg)] flex-1 bg-[var(--white)] text-[var(--text-dark)] focus:outline-none focus:border-[var(--earth)] transition-colors duration-[var(--duration-fast)]"
                />
                <button className="bg-[var(--earth)] text-[var(--text-on-dark)] px-6 py-3.5 rounded-[var(--radius-lg)] text-[var(--text-sm)] font-semibold inline-flex items-center justify-center gap-2 hover:bg-[var(--earth-dark)] transition-all duration-[var(--duration-base)] shadow-[var(--shadow-md)]">
                  Notify me
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-[var(--text-xs)] text-[var(--text-light)]">
              Be the first to know when we launch. No spam, just seeds of knowledge.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--white)] rounded-[var(--radius-full)] border border-[var(--border-beige)] shadow-[var(--shadow-sm)]">
                  <span className="text-[var(--earth)]">{feature.icon}</span>
                  <span className="text-[var(--text-sm)] font-medium text-[var(--text-dark)]">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-[var(--border-beige)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-xs)] text-[var(--text-light)]">
              © {new Date().getFullYear()} Rooted in Learning. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="text-[var(--text-sm)] text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors duration-[var(--duration-fast)]">Philosophy</Link>
              <Link href="/microlearning" className="text-[var(--text-sm)] text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors duration-[var(--duration-fast)]">Curriculum</Link>
              <Link href="/#contact" className="text-[var(--text-sm)] text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors duration-[var(--duration-fast)]">Contact</Link>
            </div>
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Website",
                  icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                },
                {
                  label: "Email",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-[var(--radius-full)] bg-[var(--beige-bg)] flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--border-greige)] hover:text-[var(--text-dark)] transition-colors duration-[var(--duration-fast)]"
                  aria-label={label}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
