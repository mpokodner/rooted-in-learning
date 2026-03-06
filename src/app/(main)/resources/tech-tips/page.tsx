import type { Metadata } from "next";
import "./tech-tips.css";

export const metadata: Metadata = {
  title: "Tech Tips | Rooted in Learning",
  description:
    "Step-by-step technology tutorials for educators. Learn to integrate classroom tools with confidence — no IT degree required.",
  keywords: ["educational technology", "tech tutorials", "classroom technology", "edtech", "teacher tech tips"],
  openGraph: {
    title: "Tech Tips | Rooted in Learning",
    description: "Step-by-step technology tutorials for educators.",
    type: "website",
  },
};

const techTips = [
  { id: 1, title: "Getting Started with Google Classroom", category: "Google", duration: "10 min", level: "Beginner" },
  { id: 2, title: "Creating Interactive Slides", category: "Presentations", duration: "15 min", level: "Intermediate" },
  { id: 3, title: "Canva for Educators: Complete Guide", category: "Design", duration: "20 min", level: "Beginner" },
  { id: 4, title: "Using AI Tools Responsibly", category: "AI", duration: "12 min", level: "Intermediate" },
  { id: 5, title: "Video Editing Basics for Teachers", category: "Video", duration: "18 min", level: "Beginner" },
  { id: 6, title: "Organizing Digital Files Like a Pro", category: "Productivity", duration: "8 min", level: "Beginner" },
];

export default function TechTipsPage() {
  return (
    <div className="min-h-screen bg-[var(--neutral-bg)]">
      {/* Hero Section */}
      <section className="tips-hero">
        <div className="tips-container">
          <div className="tips-hero-inner">
            <p className="tips-hero-label">Technology Tutorials</p>
            <h1 className="tips-hero-title">Tech Tips</h1>
            <p className="tips-hero-desc">
              Step-by-step tutorials to help you integrate technology with confidence. No IT degree required.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="tips-grid-section">
        <div className="tips-container">
          <div className="tips-grid">
            {techTips.map((tip) => (
              <div key={tip.id} className="tip-card">
                {/* Icon */}
                <div className="tip-card-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Meta Badges */}
                <div className="tip-card-meta">
                  <span className="tip-card-badge tip-card-badge--category">{tip.category}</span>
                  <span className="tip-card-badge tip-card-badge--level">{tip.level}</span>
                </div>

                <h3 className="tip-card-title">{tip.title}</h3>

                <div className="tip-card-footer">
                  <span className="tip-card-duration">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tip.duration}
                  </span>
                  <span className="tip-card-cta">
                    Watch
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
