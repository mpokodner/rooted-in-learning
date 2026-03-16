'use client'

import {
  PortableText,
  type PortableTextComponents,
} from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
  )
  return match?.[1] ?? null
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = urlFor(value).width(800).quality(85).url()
      return (
        <figure style={{ margin: '2rem 0' }}>
          <Image
            src={src}
            alt={value.alt || ''}
            width={800}
            height={450}
            style={{ borderRadius: '0.5rem', width: '100%', height: 'auto' }}
          />
          {value.caption && (
            <figcaption
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                marginTop: '0.5rem',
                textAlign: 'center',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    callout: ({ value }) => {
      const styles: Record<
        string,
        { emoji: string; border: string; bg: string }
      > = {
        tip: {
          emoji: '💡',
          border: 'var(--earth)',
          bg: 'rgba(91, 124, 90, 0.15)',
        },
        note: {
          emoji: '📝',
          border: 'var(--terracotta-light)',
          bg: 'var(--beige-bg)',
        },
        warning: {
          emoji: '⚠️',
          border: 'var(--terracotta)',
          bg: 'rgba(196, 122, 90, 0.15)',
        },
        spotlight: {
          emoji: '✨',
          border: 'var(--earth-light)',
          bg: 'var(--neutral-bg)',
        },
      }
      const s = styles[value.type] ?? styles.note

      return (
        <aside
          style={{
            borderLeft: `4px solid ${s.border}`,
            borderRadius: '0.5rem',
            padding: '1rem',
            margin: '1.5rem 0',
            backgroundColor: s.bg,
          }}
        >
          <p
            style={{
              fontWeight: 600,
              marginBottom: '0.25rem',
              color: 'var(--text-black)',
            }}
          >
            {s.emoji} {value.type?.charAt(0).toUpperCase() + value.type?.slice(1)}
          </p>
          <p style={{ color: 'var(--text-dark)', margin: 0 }}>{value.text}</p>
        </aside>
      )
    },

    youtubeEmbed: ({ value }) => {
      const videoId = extractYouTubeId(value.url)
      if (!videoId) return null

      return (
        <figure style={{ margin: '2rem 0' }}>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '0.5rem',
            }}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={value.caption || 'YouTube video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
          {value.caption && (
            <figcaption
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                marginTop: '0.5rem',
                textAlign: 'center',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },

    stepBlock: ({ value }) => (
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          margin: '1.5rem 0',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            width: '2rem',
            height: '2rem',
            minWidth: '2rem',
            borderRadius: '9999px',
            backgroundColor: 'var(--earth)',
            color: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          {value.stepNumber}
        </div>
        <div style={{ flex: 1 }}>
          {value.heading && (
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-black)',
                fontWeight: 600,
                fontSize: '1.125rem',
                margin: '0 0 0.25rem',
              }}
            >
              {value.heading}
            </h4>
          )}
          {value.instructions && (
            <p style={{ color: 'var(--text-dark)', margin: '0 0 0.75rem' }}>
              {value.instructions}
            </p>
          )}
          {value.image && (
            <Image
              src={urlFor(value.image).width(600).quality(80).url()}
              alt={value.heading || 'Step screenshot'}
              width={600}
              height={340}
              style={{
                borderRadius: '0.5rem',
                border: '1px solid var(--border-beige)',
                width: '100%',
                height: 'auto',
              }}
            />
          )}
        </div>
      </div>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const target = value?.openInNewTab ? '_blank' : undefined
      const rel = value?.openInNewTab ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          style={{
            color: 'var(--earth)',
            textDecoration: 'underline',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = 'var(--earth-dark)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = 'var(--earth)')
          }
        >
          {children}
        </a>
      )
    },
    highlight: ({ children }) => (
      <span
        style={{
          backgroundColor: 'rgba(196, 122, 90, 0.3)',
          borderRadius: '0.125rem',
          padding: '0 0.25rem',
        }}
      >
        {children}
      </span>
    ),
  },

  block: {
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-black)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          marginTop: '2.5rem',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-black)',
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          marginTop: '2rem',
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-dark)',
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          marginTop: '1.5rem',
        }}
      >
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p
        style={{
          color: 'var(--text-dark)',
          marginBottom: '1rem',
          lineHeight: 1.75,
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: '4px solid var(--terracotta)',
          backgroundColor: 'var(--beige-bg)',
          padding: '0.5rem 0 0.5rem 1rem',
          fontStyle: 'italic',
          color: 'var(--text-muted)',
          margin: '1.5rem 0',
          borderRadius: '0 0.5rem 0.5rem 0',
        }}
      >
        {children}
      </blockquote>
    ),
  },
}

interface RichTextProps {
  content: PortableTextBlock[]
  className?: string
}

export default function RichText({ content, className }: RichTextProps) {
  return (
    <div className={className}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
