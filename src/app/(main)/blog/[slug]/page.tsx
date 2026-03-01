import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextReactComponents } from "@portabletext/react";
import NewsletterForm from "@/components/NewsletterForm";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import "./blog-post.css";

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  publishedAt: string;
  updatedAt?: string;
  readTime?: string;
  category?: { title: string; slug?: { current: string } };
  author?: {
    name: string;
    role?: string;
    bio?: string;
    image?: { asset: { _ref: string } };
  };
  body?: Array<Record<string, unknown>>;
  seoTitle?: string;
  seoDescription?: string;
}

interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  readTime?: string;
  category?: string;
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  updatedAt,
  readTime,
  category->{ title, slug },
  author->{ name, role, bio, image },
  body,
  seoTitle,
  seoDescription
}`;

const RELATED_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  readTime,
  "category": category->title
}`;

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset?: { _ref: string }; alt?: string; caption?: string } }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="bp-body-figure">
          <Image
            src={urlFor(value).width(800).auto("format").url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="bp-body-image"
          />
          {value.caption && (
            <figcaption className="bp-body-caption">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function toISODate(dateString: string) {
  return new Date(dateString).toISOString().split("T")[0];
}

function getAuthorInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post: SanityPost | null = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return { title: "Post Not Found | The Rooted Learner" };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || "";

  return {
    title: `${title} | The Rooted Learner`,
    description,
    keywords: post.category ? [post.category.title] : [],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : [],
      url: `https://therootedlearner.com/blog/${slug}`,
      ...(post.mainImage?.asset && {
        images: [{ url: urlFor(post.mainImage).width(1200).height(630).url() }],
      }),
    },
    alternates: {
      canonical: `https://therootedlearner.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [post, relatedPosts]: [SanityPost | null, RelatedPost[]] =
    await Promise.all([
      client.fetch(POST_QUERY, { slug }),
      client.fetch(RELATED_QUERY, { slug }),
    ]);

  if (!post) notFound();

  const authorName = post.author?.name ?? "The Rooted Learner";
  const authorRole = post.author?.role ?? "";

  return (
    <article
      className="bp-page"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* ─── Post Hero ─── */}
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

          <div className="bp-hero-meta">
            {post.category && (
              <span className="bp-hero-category">{post.category.title}</span>
            )}
            {post.readTime && (
              <>
                <span className="bp-hero-dot">&middot;</span>
                <span className="bp-hero-time">{post.readTime}</span>
              </>
            )}
          </div>

          <h1 className="bp-hero-title" itemProp="headline">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="bp-hero-excerpt" itemProp="description">
              {post.excerpt}
            </p>
          )}

          <div className="bp-hero-author">
            {post.author?.image?.asset ? (
              <Image
                src={urlFor(post.author.image).width(88).height(88).url()}
                alt={authorName}
                width={44}
                height={44}
                className="bp-hero-avatar-img"
              />
            ) : (
              <div className="bp-hero-avatar">
                <span>{getAuthorInitials(authorName)}</span>
              </div>
            )}
            <div className="bp-hero-author-info">
              <p className="bp-hero-author-name" itemProp="author">
                {authorName}
              </p>
              <p className="bp-hero-author-role">
                <time
                  dateTime={toISODate(post.publishedAt)}
                  itemProp="datePublished"
                >
                  {formatDate(post.publishedAt)}
                </time>
                {post.updatedAt && (
                  <>
                    {" "}
                    &middot; Updated{" "}
                    <time dateTime={toISODate(post.updatedAt)}>
                      {formatDate(post.updatedAt)}
                    </time>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Main Image (if present) ─── */}
      {post.mainImage?.asset && (
        <div className="bp-main-image-wrap">
          <div className="bp-container">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.mainImage.alt ?? post.title}
              width={1200}
              height={600}
              priority
              className="bp-main-image"
            />
          </div>
        </div>
      )}

      {/* ─── Article Body ─── */}
      <div className="bp-main">
        <div className="bp-container">
          <div className="bp-layout">
            <aside className="bp-sidebar" aria-label="Sidebar">
              <div className="bp-sidebar-cta">
                <p className="bp-sidebar-cta-label">Free Download</p>
                <p className="bp-sidebar-cta-title">Weekly Planner Template</p>
                <Link href="/blog#newsletter" className="bp-sidebar-cta-btn">
                  Get It Free
                </Link>
              </div>
            </aside>

            <div className="bp-article" itemProp="articleBody">
              {post.body ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p>This post has no content yet.</p>
              )}

              {/* ─── Share Bar ─── */}
              <div className="bp-share">
                <p className="bp-share-label">Share this article</p>
                <div className="bp-share-buttons">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://therootedlearner.com/blog/${slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bp-share-btn bp-share-btn--linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://therootedlearner.com/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bp-share-btn bp-share-btn--x"
                    aria-label="Share on X"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ─── Author Bio ─── */}
              <div className="bp-author-bio">
                {post.author?.image?.asset ? (
                  <Image
                    src={urlFor(post.author.image).width(128).height(128).url()}
                    alt={authorName}
                    width={64}
                    height={64}
                    className="bp-author-avatar-lg-img"
                  />
                ) : (
                  <div className="bp-author-avatar-lg">
                    <span>{getAuthorInitials(authorName)}</span>
                  </div>
                )}
                <div className="bp-author-bio-content">
                  <h3 className="bp-author-bio-name">
                    Written by {authorName}
                  </h3>
                  {authorRole && (
                    <p className="bp-author-bio-role">{authorRole}</p>
                  )}
                  {post.author?.bio && (
                    <p className="bp-author-bio-desc">{post.author.bio}</p>
                  )}
                  <div className="bp-author-bio-links">
                    <Link href="/about" className="bp-author-bio-link">
                      About Me
                    </Link>
                    <Link
                      href="/services/consulting"
                      className="bp-author-bio-link"
                    >
                      Work With Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Related Posts ─── */}
      {relatedPosts.length > 0 && (
        <section
          className="bp-related section"
          aria-labelledby="related-heading"
        >
          <div className="bp-container">
            <div className="bp-related-header">
              <h2 id="related-heading" className="bp-related-title">
                Keep Reading
              </h2>
              <Link href="/blog" className="bp-related-viewall">
                View All Articles
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="bp-related-grid">
              {relatedPosts.map((related) => (
                <Link
                  key={related._id}
                  href={`/blog/${related.slug.current}`}
                  className="bp-related-card"
                >
                  {related.category && (
                    <span className="bp-related-category">
                      {related.category}
                    </span>
                  )}
                  <h3 className="bp-related-card-title">{related.title}</h3>
                  <div className="bp-related-card-footer">
                    {related.readTime && (
                      <span className="bp-related-time">
                        {related.readTime}
                      </span>
                    )}
                    <span className="bp-related-read">Read &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Join 5,000+ educators receiving research-backed teaching
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
