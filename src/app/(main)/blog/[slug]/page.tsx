import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterForm from "@/components/NewsletterForm";
import "./blog-post.css";

export const metadata: Metadata = {
  title: "Blog Post | The Rooted Learner",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // TODO: Replace with CMS data fetching once Sanity is re-integrated
  void slug;
  notFound();

  return (
    <article className="bp-page">
      <header className="bp-hero">
        <div className="bp-hero-bg" aria-hidden="true">
          <div className="bp-hero-orb bp-hero-orb--1" />
          <div className="bp-hero-orb bp-hero-orb--2" />
        </div>
        <div className="bp-container bp-hero-content">
          <Link href="/blog" className="bp-back">
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All Articles
          </Link>
        </div>
      </header>

      {/* ─── Newsletter CTA ─── */}
      <section
        className="bp-newsletter"
        aria-labelledby="bp-newsletter-heading"
      >
        <div className="bp-container">
          <div className="bp-newsletter-card">
            <h2 id="bp-newsletter-heading" className="bp-newsletter-title">
              Get Strategies Like This Every Week
            </h2>
            <p className="bp-newsletter-desc">
              Join our community of educators receiving research-backed teaching
              strategies, AI tips, and free resources every Tuesday.
            </p>
            <NewsletterForm
              source="blog-post"
              buttonText="Subscribe"
              inputClassName="bp-newsletter-input"
              buttonClassName="bp-newsletter-btn"
              formClassName="bp-newsletter-form"
              errorClassName="newsletter-error"
            />
            <p className="bp-newsletter-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
