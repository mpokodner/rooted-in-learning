import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./learn.css";

export const metadata: Metadata = {
  title: "Learn | The Rooted Learner",
  description:
    "Practical strategies grounded in Science of Reading, WIDA alignment, and AI integration — written for curriculum designers, district leaders, and the teachers who deliver instruction.",
  keywords: [
    "Science of Reading",
    "WIDA alignment",
    "AI for educators",
    "curriculum design",
    "district leadership",
    "professional development",
    "multilingual learner support",
  ],
  alternates: {
    canonical: "/learn",
  },
  openGraph: {
    title: "Learn | The Rooted Learner",
    description:
      "Research that reaches classrooms. Insights that reach systems. Practical strategies for educators and district leaders.",
    type: "website",
  },
};

export default function LearnPage() {
  return (
    <div className="learn-page">
      {/* ─── Hero with banner image ─── */}
      <section className="learn-hero" aria-labelledby="learn-heading">
        <Image
          src="/learn-banner.png"
          alt="Rooted in Learning — tree roots spreading across the ground"
          fill
          className="learn-hero-image"
          priority
          sizes="100vw"
        />
        <div className="learn-hero-overlay">
          <p className="learn-hero-eyebrow">For Educators and District Leaders</p>
          <h1 id="learn-heading" className="learn-hero-title">
            Research That Reaches Classrooms.
            <br />
            Insights That Reach Systems.
          </h1>
          <p className="learn-hero-desc">
            Practical strategies grounded in Science of Reading, WIDA
            alignment, and AI integration &mdash; written for the people who
            design curriculum and the teachers who deliver it.
          </p>
          <div className="learn-hero-actions">
            <Link href="/learn/blog" className="learn-hero-cta-primary">
              Read the Blog
            </Link>
            <Link href="/learn/teacher-toolkit" className="learn-hero-cta-secondary">
              Get the Free Toolkit
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Pathway Cards ─── */}
      <section className="learn-cards-section">
        <div className="container">
          <div className="learn-cards-header">
            <p className="learn-cards-eyebrow">Choose Your Path</p>
            <h2 className="learn-cards-title">
              Resources Built for Educators
            </h2>
            <p className="learn-cards-desc">
              Whether you want hands-on tech training or research-backed
              reading, there&apos;s a path for you.
            </p>
          </div>

          <div className="learn-cards-grid">
            {/* Teacher Toolkit Card */}
            <div className="learn-card learn-card--toolkit">
              <div className="learn-card-top">
                <div className="learn-card-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.384 3.065A1.5 1.5 0 014.5 16.92V7.08a1.5 1.5 0 011.536-1.316L11.42 8.83a1.5 1.5 0 010 6.34zm0 0l5.384 3.065A1.5 1.5 0 0018.316 17V7a1.5 1.5 0 00-1.536-1.316L11.42 8.83"
                    />
                  </svg>
                </div>
                <span className="learn-card-badge">Training Hub</span>
                <h3 className="learn-card-title">Teacher Toolkit</h3>
                <p className="learn-card-desc">
                  Your go-to hub for AI tutorials, tech tips, how-to guides,
                  and training content — built to help educators work smarter,
                  not harder.
                </p>
                <ul className="learn-card-features">
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AI tutorials for the classroom
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Step-by-step tech guides
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Practical PD walkthroughs
                  </li>
                </ul>
              </div>
              <Link href="/learn/teacher-toolkit" className="learn-card-bottom">
                <span className="learn-card-cta">
                  Explore the Toolkit
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Blog Card */}
            <div className="learn-card learn-card--blog">
              <div className="learn-card-top">
                <div className="learn-card-icon">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <span className="learn-card-badge">Articles</span>
                <h3 className="learn-card-title">Blog</h3>
                <p className="learn-card-desc">
                  Research-backed articles on literacy instruction, AI in
                  education, multilingual learner support, and the systems that
                  make great teaching sustainable.
                </p>
                <ul className="learn-card-features">
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Science of Reading insights
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    AI in education deep dives
                  </li>
                  <li>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Multilingual learner strategies
                  </li>
                </ul>
              </div>
              <Link href="/learn/blog" className="learn-card-bottom">
                <span className="learn-card-cta">
                  Read the Blog
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="learn-motivation">
        <div className="container">
          <div className="learn-motivation-inner">
            <h2 className="learn-motivation-title">
              Ready to Teach Smarter?
            </h2>
            <p className="learn-motivation-desc">
              Explore the full library of tools, lessons, and services
              designed to give educators leverage.
            </p>
            <Link href="/shop" className="learn-motivation-cta">
              Explore Lessons
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
