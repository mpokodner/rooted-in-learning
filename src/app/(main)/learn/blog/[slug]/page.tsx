import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { blogPostBySlugQuery, blogPostsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { BlogPost } from '@/sanity/lib/types'
import RichText from '@/components/shared/RichText'
import BlogCard from '@/components/blog/BlogCard'

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

  return {
    title: post.seo?.metaTitle || `${post.title} | The Rooted Learner`,
    description: post.seo?.metaDescription || post.excerpt,
    alternates: { canonical: `/learn/blog/${slug}` },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery, { slug })
  if (!post) notFound()

  return (
    <article
      style={{
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '2rem 1rem 4rem',
      }}
    >
      {/* Breadcrumb */}
      <nav
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
        }}
      >
        <Link
          href="/learn/blog"
          className="blog-breadcrumb-link"
        >
          Blog
        </Link>
        <span style={{ margin: '0 0.5rem' }}>›</span>
        <span style={{ color: 'var(--text-light)' }}>{post.title}</span>
      </nav>

      {/* Pillar badge */}
      {post.contentPillar && (
        <span
          style={{
            display: 'inline-block',
            borderRadius: '9999px',
            padding: '0.125rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--white)',
            backgroundColor: post.contentPillar.color || 'var(--earth)',
            marginBottom: '1rem',
          }}
        >
          {post.contentPillar.title}
        </span>
      )}

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-black)',
          fontSize: 'clamp(1.875rem, 4vw, 2.25rem)',
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {post.title}
      </h1>

      {/* Subtitle */}
      {post.subtitle && (
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.25rem',
            marginTop: '0.75rem',
          }}
        >
          {post.subtitle}
        </p>
      )}

      {/* Author row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginTop: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).width(48).height(48).url()}
            alt={post.author.name}
            width={48}
            height={48}
            style={{ borderRadius: '9999px', objectFit: 'cover' }}
          />
        )}
        <div>
          {post.author && (
            <p
              style={{
                color: 'var(--text-black)',
                fontWeight: 500,
                margin: 0,
                fontSize: '0.9375rem',
              }}
            >
              {post.author.name}
            </p>
          )}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            {formatDate(post.publishedAt)}
            {post.readingTime ? ` · ${post.readingTime} min read` : ''}
          </p>
        </div>
      </div>

      {/* Featured image */}
      {post.featuredImage?.asset && (
        <Image
          src={urlFor(post.featuredImage).width(1200).height(630).quality(85).url()}
          alt={post.featuredImage.alt || post.title}
          width={1200}
          height={630}
          priority
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0.75rem',
            marginBottom: '2.5rem',
          }}
        />
      )}

      {/* Body */}
      {post.body && <RichText content={post.body} />}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2.5rem',
          }}
        >
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

      {/* Related posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section
          style={{
            borderTop: '1px solid var(--border-beige)',
            marginTop: '3rem',
            paddingTop: '2.5rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-black)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}
          >
            Related Articles
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(1, 1fr)',
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3"
          >
            {post.relatedPosts.map((related) => (
              <BlogCard key={related._id} post={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
