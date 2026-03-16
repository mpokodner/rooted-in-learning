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

export default function BlogCard({ post }: { post: BlogPostCard }) {
  return (
    <Link
      href={`/learn/blog/${post.slug.current}`}
      className="group"
      style={{
        display: 'block',
        borderRadius: '0.75rem',
        border: '1px solid var(--border-beige)',
        backgroundColor: 'var(--white)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)')
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      {post.featuredImage?.asset && (
        <div
          style={{
            aspectRatio: '16 / 9',
            overflow: 'hidden',
          }}
        >
          <Image
            src={urlFor(post.featuredImage).width(600).height(340).quality(80).url()}
            alt={post.featuredImage.alt || post.title}
            width={600}
            height={340}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            className="group-hover:scale-105"
          />
        </div>
      )}

      <div style={{ padding: '1.25rem' }}>
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
              marginBottom: '0.75rem',
            }}
          >
            {post.contentPillar.title}
          </span>
        )}

        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-black)',
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            transition: 'color 0.2s ease',
          }}
          className="group-hover:!text-[var(--earth)]"
        >
          {post.title}
        </h3>

        {post.excerpt && (
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              margin: 0,
            }}
          >
            {post.excerpt}
          </p>
        )}
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border-beige)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {post.author && (
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-light)',
            }}
          >
            {post.author.name}
          </span>
        )}
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-light)',
          }}
        >
          {formatDate(post.publishedAt)}
          {post.readingTime ? ` · ${post.readingTime} min read` : ''}
        </span>
      </div>
    </Link>
  )
}
