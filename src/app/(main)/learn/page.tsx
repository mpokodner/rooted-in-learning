import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostCard } from "@/sanity/lib/types";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Learn | The Rooted Learner",
  description:
    "Practical strategies grounded in Science of Reading, WIDA alignment, and AI integration. Written for curriculum designers, district leaders, and the teachers who deliver instruction.",
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

export const revalidate = 60;

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function LearnPage() {
  let featuredPost: BlogPostCard | null = null;
  try {
    const posts = await client.fetch<BlogPostCard[]>(blogPostsQuery);
    featuredPost = posts[0] ?? null;
  } catch {
    // Sanity fetch failed — featured section hidden
  }

  return (
    <>
      <section className="section hero" aria-labelledby="learn-heading">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">Learn · the field notes</span>
            <h1 id="learn-heading" className="display mt-3">
              Everything we know,{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                out loud.
              </span>
            </h1>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Insights from inside the work, free classroom-ready downloads, and the
              research that&apos;s becoming a body of evidence. Sell while we build — and
              share while we grow.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="grid grid-3">
            <Link
              href="/learn/blog"
              className="card card--hover reveal"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
            >
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <h3>Insights &amp; Blog</h3>
              <p>
                Audit teardowns, the wedge question, build-vs-buy, and the greenhouse
                thesis.
              </p>
              <div className="mt-4">
                <span className="link-arrow">
                  Read the blog <ArrowIcon />
                </span>
              </div>
            </Link>

            <Link
              href="/learn/teacher-toolkit"
              className="card card--hover reveal"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
            >
              <div className="card-icon card-icon--terra">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 7l9-4 9 4-9 4-9-4Z" />
                  <path d="M21 10v6M7 9v5c0 1.5 2.2 3 5 3s5-1.5 5-3V9" />
                </svg>
              </div>
              <h3>Teacher Toolkit</h3>
              <p>
                Free, classroom-ready downloads — templates, frameworks, and the Claude
                AI guide.
              </p>
              <div className="mt-4">
                <span className="link-arrow">
                  Get the toolkit <ArrowIcon />
                </span>
              </div>
            </Link>

            <Link
              href="/shop"
              className="card card--hover reveal"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}
            >
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4Z" />
                  <path d="M4 6h16M9 10a3 3 0 0 0 6 0" />
                </svg>
              </div>
              <h3>Shop</h3>
              <p>
                Field-tested digital resources you can put to work in your classroom this
                week.
              </p>
              <div className="mt-4">
                <span className="link-arrow">
                  Browse the shop <ArrowIcon />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="section--beige section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Featured</span>
              <h2 className="h-lg mt-3">Start here</h2>
            </div>
            <Link
              href={`/learn/blog/${featuredPost.slug.current}`}
              className="reveal mt-6"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="card card--hover" style={{ padding: 0, overflow: "hidden" }}>
                <div className="feature-band" style={{ gap: 0 }}>
                  {featuredPost.featuredImage?.asset ? (
                    <div style={{ minHeight: 300, overflow: "hidden" }}>
                      <Image
                        src={urlFor(featuredPost.featuredImage)
                          .width(800)
                          .height(450)
                          .quality(80)
                          .url()}
                        alt={featuredPost.featuredImage.alt || featuredPost.title}
                        width={800}
                        height={450}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div className="ph" style={{ minHeight: 300, borderRadius: 0 }}>
                      <span className="ph-label">cover · roots &amp; light</span>
                    </div>
                  )}
                  <div style={{ padding: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                    {featuredPost.contentPillar && (
                      <span className="chip-tag">{featuredPost.contentPillar.title}</span>
                    )}
                    <h3 className="h-md mt-2" style={{ color: "var(--text-black)" }}>
                      {featuredPost.title}
                    </h3>
                    {featuredPost.excerpt && (
                      <p className="muted mt-3">{featuredPost.excerpt}</p>
                    )}
                    <span className="post-meta mt-4">
                      {featuredPost.author?.name && `${featuredPost.author.name} · `}
                      {formatDate(featuredPost.publishedAt)}
                      {featuredPost.readingTime
                        ? ` · ${featuredPost.readingTime} min read`
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section--tight">
        <div className="container container--narrow text-center">
          <p className="lead mx-auto reveal" style={{ maxWidth: "42ch" }}>
            If you&apos;re a school or district trying to solve this at a systems level…
          </p>
          <div className="btn-row mt-3 reveal" style={{ justifyContent: "center" }}>
            <Link href="/services" className="btn btn-outline">
              Explore District Work
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="newsletter">
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">Free download</span>
          <h2 className="h-lg mt-3 reveal">The Claude AI guide for educators</h2>
          <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: "48ch" }}>
            A practical, step-by-step guide to using Claude in your classroom — prompt
            templates, lesson-planning workflows, and real examples from a current
            educator.
          </p>
          <div className="reveal mt-4" style={{ display: "flex", justifyContent: "center" }}>
            <NewsletterForm
              source="learn-page"
              buttonText="Get my free guide"
              formClassName="footer-form footer-form--light"
              buttonClassName="btn btn-terra"
              inputClassName=""
            />
          </div>
          <p className="note mt-2 reveal">
            Join a growing community of educators. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}
