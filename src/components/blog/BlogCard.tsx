'use client'

import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { BlogPostCard } from '@/sanity/lib/types'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatPostMeta(post: BlogPostCard) {
  const parts: string[] = []
  if (post.author?.name) parts.push(post.author.name)
  parts.push(formatDate(post.publishedAt))
  if (post.readingTime) parts.push(`${post.readingTime} min read`)
  return parts.join(' · ')
}

export function BlogFeaturedCard({ post }: { post: BlogPostCard }) {
  const pillarLabel = post.contentPillar?.title
    ? `${post.contentPillar.title} · Featured`
    : 'Featured'

  return (
    <Link
      href={`/learn/blog/${post.slug.current}`}
      className="post-card reveal"
      style={{ flexDirection: 'row', alignItems: 'stretch' }}
    >
      {post.featuredImage?.asset ? (
        <div
          className="ph"
          style={{
            minHeight: 'auto',
            flex: '0 0 42%',
            borderRight: '1px solid var(--border-beige)',
            borderBottom: 'none',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <Image
            src={urlFor(post.featuredImage).width(800).height(500).quality(80).url()}
            alt={post.featuredImage.alt || post.title}
            width={800}
            height={500}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : (
        <div
          className="ph"
          style={{
            minHeight: 'auto',
            flex: '0 0 42%',
            borderRight: '1px solid var(--border-beige)',
            borderBottom: 'none',
          }}
        >
          <span className="ph-label">cover · featured</span>
        </div>
      )}
      <div
        className="post-card-body"
        style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
      >
        <span className="chip-tag">{pillarLabel}</span>
        <h2 className="h-md" style={{ color: 'var(--text-black)' }}>
          {post.title}
        </h2>
        {post.excerpt && <p>{post.excerpt}</p>}
        <span className="post-meta">{formatPostMeta(post)}</span>
      </div>
    </Link>
  )
}

export default function BlogCard({ post }: { post: BlogPostCard }) {
  return (
    <Link
      href={`/learn/blog/${post.slug.current}`}
      className="post-card reveal"
    >
      {post.featuredImage?.asset ? (
        <div style={{ minHeight: 180, overflow: "hidden" }}>
          <Image
            src={urlFor(post.featuredImage).width(600).height(340).quality(80).url()}
            alt={post.featuredImage.alt || post.title}
            width={600}
            height={340}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <div className="ph" style={{ minHeight: 180 }}>
          <span className="ph-label">blog cover</span>
        </div>
      )}

      <div className="post-card-body">
        {post.contentPillar && (
          <span className="chip-tag">{post.contentPillar.title}</span>
        )}
        <h3>{post.title}</h3>
        {post.excerpt && <p>{post.excerpt}</p>}
        <span className="post-meta">{formatPostMeta(post)}</span>
      </div>
    </Link>
  )
}
