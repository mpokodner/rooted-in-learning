import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog | The Rooted Learner",
  description:
    "Research-backed teaching strategies, Science of Reading insights, AI in education, and classroom systems design. Written by a 12+ year practitioner.",
  keywords: [
    "science of reading",
    "teaching strategies",
    "AI in education",
    "multilingual learners",
    "classroom strategy",
    "education blog",
  ],
  alternates: {
    canonical: "/learn/blog",
  },
  openGraph: {
    title: "Blog | The Rooted Learner",
    description:
      "Research-backed insights for modern educators. Science of Reading, AI tools, and classroom systems.",
    type: "website",
  },
};

const contentPillars = [
  { id: "all", label: "All Posts" },
  { id: "science-of-reading", label: "Science of Reading" },
  { id: "multilingual-learners", label: "Multilingual Learners" },
  { id: "ai-in-education", label: "AI in Education" },
  { id: "classroom-strategy", label: "Classroom Strategy" },
  { id: "teaching-systems", label: "Teaching Systems Design" },
];


export default async function BlogPage() {
  return (
    <div className="blog-page">
      {/* ─── Blog Hero ─── */}
      <section className="bloghero" aria-labelledby="blog-heading">
        <div className="bloghero-bg" aria-hidden="true">
          <div className="bloghero-circle bloghero-circle--1" />
          <div className="bloghero-circle bloghero-circle--2" />
        </div>
        <div className="container bloghero-container">
          <div className="bloghero-badge">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
              />
            </svg>
            <span>Thought Leadership &amp; Strategy</span>
          </div>
          <h1 id="blog-heading" className="bloghero-title">
            Research-Backed Insights
            <br />
            <span className="bloghero-accent">For Modern Educators</span>
          </h1>
          <p className="bloghero-desc">
            Practical strategies grounded in research. Science of Reading,
            multilingual learner support, AI in education, and the systems that
            make great teaching sustainable.
          </p>
        </div>
      </section>

      {/* ─── Content Pillar Filters ─── */}
      <section className="blog-filters" aria-label="Content categories">
        <div className="container">
          <div className="blog-filters-inner">
            {contentPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                className={`blog-filter-btn${index === 0 ? " blog-filter-btn--active" : ""}`}
                aria-pressed={index === 0}
              >
                {pillar.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Empty State (posts will come from CMS) ─── */}
      <section
        className="blog-grid-section section"
        aria-labelledby="posts-heading"
      >
        <div className="container">
          <div className="blog-grid-header">
            <h2 id="posts-heading" className="blog-grid-title">
              Latest Articles
            </h2>
            <p className="blog-grid-desc">
              Deep dives, practical guides, and strategic thinking from the
              classroom to the system level.
            </p>
          </div>

          <div className="blog-empty-state">
            <div className="blog-empty-icon">
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </div>
            <h3 className="blog-empty-title">Articles Coming Soon</h3>
            <p className="blog-empty-desc">
              We&apos;re working on research-backed content for educators.
              Subscribe below to be the first to know when new articles drop.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Email Capture ─── */}
      <section
        id="newsletter"
        className="blog-capture section"
        aria-labelledby="capture-heading"
      >
        <div className="container">
          <div className="blog-capture-card">
            <div className="blog-capture-icon">
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="blog-capture-badge">Free Download</span>
            <h2 id="capture-heading" className="blog-capture-title">
              The Weekly Planner Template
            </h2>
            <p className="blog-capture-desc">
              The exact planning template I used to cut my prep time in half.
              Plus weekly teaching tips, strategies, and free resources
              delivered to your inbox every Tuesday.
            </p>
            <NewsletterForm
              source="blog"
              buttonText="Get My Free Planner"
              inputClassName="blog-capture-input"
              buttonClassName="blog-capture-btn"
              formClassName="blog-capture-form"
              errorClassName="newsletter-error"
            />
            <p className="blog-capture-note">
              Join our community of educators. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
