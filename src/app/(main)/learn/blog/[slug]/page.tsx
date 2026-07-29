import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { blogPostBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { BlogPost } from '@/sanity/lib/types'
import type { PortableTextBlock } from '@portabletext/types'
import RichText from '@/components/shared/RichText'
import { slugify } from '@/lib/slugify'
import BlogCard from '@/components/blog/BlogCard'
import ReadingProgress from '@/components/blog/ReadingProgress'
import BackToTop from '@/components/blog/BackToTop'
import TableOfContents from '@/components/blog/TableOfContents'
import ShareButtons from '@/components/blog/ShareButtons'
import PostNavigation from '@/components/blog/PostNavigation'
import NewsletterForm from '@/components/NewsletterForm'
import './blog-post.css'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "blogPost" && status == "published"]{ slug }`,
  )
  return posts.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery, { slug })
  if (!post) return { title: 'Post Not Found' }

  const ogImage = post.seo?.ogImage?.asset?._ref
    ? urlFor(post.seo.ogImage).width(1200).height(630).url()
    : post.featuredImage?.asset?._ref
      ? urlFor(post.featuredImage).width(1200).height(630).url()
      : undefined

  const title = post.seo?.metaTitle || `${post.title} | The Rooted Learner`
  const description = post.seo?.metaDescription || post.excerpt || ''

  return {
    title,
    description,
    alternates: { canonical: `/learn/blog/${slug}` },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function extractHeadings(body: PortableTextBlock[]) {
  return body
    .filter((b) => b.style === 'h2' || b.style === 'h3')
    .map((b) => {
      const text =
        (b.children as { text?: string }[])
          ?.map((c) => c.text ?? '')
          .join('') || ''
      return {
        id: slugify(text),
        text,
        level: (b.style === 'h2' ? 2 : 3) as 2 | 3,
      }
    })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery, { slug })
  if (!post) notFound()

  const headings = post.body ? extractHeadings(post.body) : []

  const postOgImage = post.seo?.ogImage?.asset?._ref
    ? urlFor(post.seo.ogImage).width(1200).height(630).url()
    : post.featuredImage?.asset?._ref
      ? urlFor(post.featuredImage).width(1200).height(630).url()
      : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    ...(post.subtitle && { alternativeHeadline: post.subtitle }),
    ...(postOgImage && { image: postOgImage }),
    datePublished: post.publishedAt,
    ...(post.author && {
      author: {
        '@type': 'Person',
        name: post.author.name,
        ...(post.author.social?.linkedin && { url: post.author.social.linkedin }),
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: 'The Rooted Learner',
      url: 'https://www.therootedlearner.com',
    },
    url: `https://www.therootedlearner.com/learn/blog/${slug}`,
    ...(post.excerpt && { description: post.excerpt }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <div className="bp-page">
        <div className="bp-container">
          {/* Hero */}
          <section className="bp-hero">
            <div className="bp-hero-bg">
              <div className="bp-hero-orb bp-hero-orb--1" />
              <div className="bp-hero-orb bp-hero-orb--2" />
            </div>
            <div className="bp-hero-content">
              <Link href="/learn/blog" className="bp-back">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 12H5" />
                  <path d="m12 19-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>

              <div className="bp-hero-meta">
                {post.contentPillar && (
                  <span
                    className="bp-hero-category"
                    style={{
                      backgroundColor: post.contentPillar.color || 'var(--earth)',
                    }}
                  >
                    {post.contentPillar.title}
                  </span>
                )}
                <span>{formatDate(post.publishedAt)}</span>
                {post.readingTime && <span>{post.readingTime} min read</span>}
              </div>

              <h1 className="bp-hero-title">{post.title}</h1>

              {post.subtitle && (
                <p className="bp-hero-excerpt">{post.subtitle}</p>
              )}

              <div className="bp-hero-author">
                {post.author?.image?.asset ? (
                  <Image
                    src={urlFor(post.author.image).width(44).height(44).url()}
                    alt={post.author.name}
                    width={44}
                    height={44}
                    className="bp-hero-avatar-img"
                  />
                ) : (
                  <div className="bp-hero-avatar">
                    {post.author?.name?.charAt(0) || '?'}
                  </div>
                )}
                <div>
                  <div className="bp-hero-author-name">
                    {post.author?.name}
                  </div>
                  {post.author?.role && (
                    <div className="bp-hero-author-role">
                      {post.author.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Featured image */}
          {post.featuredImage?.asset && (
            <div className="bp-main-image-wrap">
              <Image
                src={urlFor(post.featuredImage)
                  .width(1200)
                  .height(630)
                  .quality(85)
                  .url()}
                alt={post.featuredImage.alt || post.title}
                width={1200}
                height={630}
                priority
                className="bp-main-image"
              />
            </div>
          )}

          {/* Content + Sidebar */}
          <main className="bp-main">
            <div className="bp-layout">
              {/* Sidebar */}
              <aside className="bp-sidebar">
                <TableOfContents headings={headings} />

                {post.author && (
                  <div className="bp-sidebar-author">
                    {post.author.image?.asset && (
                      <Image
                        src={urlFor(post.author.image).width(48).height(48).url()}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="bp-sidebar-author-img"
                      />
                    )}
                    <span className="bp-sidebar-author-name">
                      {post.author.name}
                    </span>
                    {post.author.role && (
                      <span className="bp-sidebar-author-role">
                        {post.author.role}
                      </span>
                    )}
                    {post.author.social?.linkedin && (
                      <a
                        href={post.author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bp-sidebar-author-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.56V24H.2zM8.34 8.3h4.37v2.15h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.91h-4.56v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V24H8.34z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}

                <div className="bp-sidebar-cta">
                  <p className="bp-sidebar-cta-label">Stay close to the work</p>
                  <p className="bp-sidebar-cta-title">Weekly strategies & free resources</p>
                  <Link href="/learn/blog" className="bp-sidebar-cta-btn">
                    Subscribe
                  </Link>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="The Rooted Learner"
                  className="bp-sidebar-logo"
                  width={80}
                  height={80}
                />
              </aside>

              {/* Article */}
              <article className="bp-article">
                {post.body && <RichText content={post.body} generateIds />}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '2.5rem' }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag.slug.current}
                        style={{
                          borderRadius: '9999px',
                          backgroundColor: 'var(--beige-bg)',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        #{tag.title}
                      </span>
                    ))}
                  </div>
                )}

                {/* Share */}
                <ShareButtons
                  url={`/learn/blog/${slug}`}
                  title={post.title}
                />

                {/* Author Bio */}
                {post.author && (
                  <div className="bp-author-bio">
                    {post.author.image?.asset ? (
                      <Image
                        src={urlFor(post.author.image).width(64).height(64).url()}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="bp-author-avatar-lg-img"
                      />
                    ) : (
                      <div className="bp-author-avatar-lg">
                        {post.author.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="bp-author-bio-name">{post.author.name}</p>
                      {post.author.role && (
                        <p className="bp-author-bio-role">{post.author.role}</p>
                      )}
                      {post.author.bio && (
                        <p className="bp-author-bio-desc">{post.author.bio}</p>
                      )}
                      <div className="bp-author-bio-links">
                        {post.author.social?.linkedin && (
                          <a
                            href={post.author.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bp-author-bio-link"
                          >
                            LinkedIn
                          </a>
                        )}
                        {post.author.social?.website && (
                          <a
                            href={post.author.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bp-author-bio-link"
                          >
                            Website
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Next/Previous */}
                <PostNavigation
                  previousPost={post.previousPost}
                  nextPost={post.nextPost}
                />
              </article>
            </div>
          </main>

          {/* Related posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <section className="bp-related" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
              <div className="bp-related-header">
                <h2 className="bp-related-title">Related Articles</h2>
                <Link href="/learn/blog" className="bp-related-viewall">
                  View all
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bp-related-grid">
                {post.relatedPosts.map((related) => (
                  <BlogCard key={related._id} post={related} />
                ))}
              </div>
            </section>
          )}

          {/* Newsletter */}
          <section className="bp-newsletter">
            <div className="bp-newsletter-card">
              <h2 className="bp-newsletter-title">Stay close to the work</h2>
              <p className="bp-newsletter-desc">
                Research-backed insights from inside the classroom, delivered every Tuesday.
              </p>
              <NewsletterForm
                source="blog-post"
                buttonText="Subscribe"
                formClassName="bp-newsletter-form"
                buttonClassName="bp-newsletter-btn"
                inputClassName="bp-newsletter-input"
              />
              <p className="bp-newsletter-note">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </section>
        </div>
      </div>

      <BackToTop />
    </>
  )
}
