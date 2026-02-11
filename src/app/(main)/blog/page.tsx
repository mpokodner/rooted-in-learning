import type { Metadata } from "next";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog | Rooted in Learning",
  description:
    "Thoughtful insights for intentional learning at home. Explore evidence-based teaching strategies and educational philosophy.",
  openGraph: {
    title: "The Pedagogy Blog | Rooted in Learning",
    description:
      "Thoughtful insights for intentional learning at home.",
  },
};

const features = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "Pedagogy Articles",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: "Teaching Insights",
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "EdTech Reviews",
  },
];

export default function BlogPage() {
  const progress = 60;

  return (
    <div className="min-h-screen bg-[var(--neutral-bg)] flex flex-col">
      {/* Main Content */}
      <main className="blog-main">
        <div className="blog-container">
          <div className="blog-content">
            {/* Tree Illustration */}
            <div className="blog-tree">
              <div className="blog-tree-bg"></div>
              <div className="blog-tree-svg">
                <svg viewBox="0 0 100 100" fill="none">
                  <rect x="45" y="55" width="10" height="30" fill="var(--earth)" opacity="0.7" rx="2" />
                  <path d="M45 80 Q35 85 25 82" stroke="var(--earth)" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M55 80 Q65 85 75 82" stroke="var(--earth)" strokeWidth="3" opacity="0.5" fill="none" />
                  <path d="M48 85 Q40 92 30 88" stroke="var(--earth)" strokeWidth="2" opacity="0.4" fill="none" />
                  <path d="M52 85 Q60 92 70 88" stroke="var(--earth)" strokeWidth="2" opacity="0.4" fill="none" />
                  <ellipse cx="50" cy="35" rx="32" ry="30" fill="var(--earth-light)" opacity="0.3" />
                  <ellipse cx="38" cy="40" rx="22" ry="20" fill="var(--earth-light)" opacity="0.4" />
                  <ellipse cx="62" cy="40" rx="22" ry="20" fill="var(--earth-light)" opacity="0.4" />
                  <ellipse cx="50" cy="28" rx="24" ry="22" fill="var(--earth)" opacity="0.5" />
                  <ellipse cx="50" cy="22" rx="18" ry="16" fill="var(--earth)" opacity="0.6" />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="blog-progress">
              <div className="blog-progress-header">
                <span className="blog-progress-label">Cultivating</span>
                <span className="blog-progress-value">{progress}%</span>
              </div>
              <div className="blog-progress-track">
                <div className="blog-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="blog-heading-primary">Something impactful is</h1>
            <h2 className="blog-heading-accent">growing</h2>

            <p className="blog-desc">
              We&apos;re cultivating a new space for pedagogy articles, educational insights, and curated resources. Our digital ecosystem is expanding to better serve educators and learners alike.
            </p>

            {/* Email Signup */}
            <div className="blog-signup">
              <form className="blog-signup-form">
                <input type="email" placeholder="Enter your email" className="blog-signup-input" />
                <button type="button" className="blog-signup-btn">
                  Notify me
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </form>
            </div>
            <p className="blog-signup-note">
              Be the first to know when we launch. No spam, just seeds of knowledge.
            </p>

            {/* Feature Badges */}
            <div className="blog-features">
              {features.map((feature, index) => (
                <div key={index} className="blog-feature-badge">
                  <span className="blog-feature-badge-icon">{feature.icon}</span>
                  <span className="blog-feature-badge-label">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
