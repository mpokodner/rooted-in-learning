import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import {
  toolkitResourceBySlugQuery,
  toolkitResourcesQuery,
} from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { ToolkitResource } from '@/sanity/lib/types'
import RichText from '@/components/shared/RichText'
import ToolkitCard from '@/components/learn/ToolkitCard'

export const revalidate = 60

const typeLabels: Record<string, { emoji: string; label: string }> = {
  video: { emoji: '🎬', label: 'Video Tutorial' },
  howto: { emoji: '📋', label: 'How-To Guide' },
  download: { emoji: '📥', label: 'Downloadable Resource' },
  review: { emoji: '⭐', label: 'Tool Review' },
}

const difficultyStyles: Record<string, { bg: string; color: string }> = {
  beginner: { bg: 'rgba(168, 184, 154, 0.2)', color: 'var(--earth-dark)' },
  intermediate: {
    bg: 'rgba(213, 163, 114, 0.2)',
    color: 'var(--terracotta-dark)',
  },
  advanced: { bg: 'rgba(176, 89, 49, 0.2)', color: 'var(--terracotta-dark)' },
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/,
  )
  return match?.[1] ?? null
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatFileSize(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function StarRating({ rating, size }: { rating: number; size?: string }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px', fontSize: size || '1.5rem' }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ color: i <= rating ? '#facc15' : 'var(--border-greige)' }}
        >
          ★
        </span>
      ))}
    </span>
  )
}

export async function generateStaticParams() {
  const resources = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "toolkitResource" && status == "published"]{ slug }`,
  )
  return resources.map((r) => ({ slug: r.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const resource = await client.fetch<ToolkitResource>(
    toolkitResourceBySlugQuery,
    { slug },
  )
  if (!resource) return { title: 'Resource Not Found' }

  const ogImage = resource.featuredImage?.asset?._ref
    ? urlFor(resource.featuredImage).width(1200).height(630).url()
    : undefined

  return {
    title:
      resource.seo?.metaTitle || `${resource.title} | The Rooted Learner`,
    description: resource.seo?.metaDescription || resource.excerpt,
    alternates: { canonical: `/learn/toolkit/${slug}` },
    openGraph: {
      title: resource.seo?.metaTitle || resource.title,
      description: resource.seo?.metaDescription || resource.excerpt || '',
      type: 'article',
      publishedTime: resource.publishedAt,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
  }
}

export default async function ToolkitResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = await client.fetch<ToolkitResource>(
    toolkitResourceBySlugQuery,
    { slug },
  )
  if (!resource) notFound()

  const typeInfo = typeLabels[resource.resourceType] ?? typeLabels.howto

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
          href="/learn/toolkit"
          className="blog-breadcrumb-link"
        >
          Teacher Toolkit
        </Link>
        <span style={{ margin: '0 0.5rem' }}>›</span>
        <span style={{ color: 'var(--text-light)' }}>{resource.title}</span>
      </nav>

      {/* Badges row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <span
          style={{
            borderRadius: '9999px',
            padding: '0.125rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 500,
            backgroundColor: 'var(--beige-bg)',
            color: 'var(--text-dark)',
          }}
        >
          {typeInfo.emoji} {typeInfo.label}
        </span>
        {resource.contentPillar && (
          <span
            style={{
              borderRadius: '9999px',
              padding: '0.125rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--white)',
              backgroundColor:
                resource.contentPillar.color || 'var(--earth)',
            }}
          >
            {resource.contentPillar.title}
          </span>
        )}
        {resource.difficultyLevel && (
          <span
            style={{
              borderRadius: '9999px',
              padding: '0.125rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 500,
              backgroundColor:
                difficultyStyles[resource.difficultyLevel]?.bg ||
                'var(--beige-bg)',
              color:
                difficultyStyles[resource.difficultyLevel]?.color ||
                'var(--text-muted)',
            }}
          >
            {resource.difficultyLevel.charAt(0).toUpperCase() +
              resource.difficultyLevel.slice(1)}
          </span>
        )}
      </div>

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
        {resource.title}
      </h1>

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
        {resource.author?.image && (
          <Image
            src={urlFor(resource.author.image).width(48).height(48).url()}
            alt={resource.author.name}
            width={48}
            height={48}
            style={{ borderRadius: '9999px', objectFit: 'cover' }}
          />
        )}
        <div>
          {resource.author && (
            <p
              style={{
                color: 'var(--text-black)',
                fontWeight: 500,
                margin: 0,
                fontSize: '0.9375rem',
              }}
            >
              {resource.author.name}
            </p>
          )}
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              margin: 0,
            }}
          >
            {formatDate(resource.publishedAt)}
          </p>
        </div>
      </div>

      {/* Video embed */}
      {resource.resourceType === 'video' && resource.videoUrl && (() => {
        const videoId = extractYouTubeId(resource.videoUrl)
        if (!videoId) return null
        return (
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '0.75rem',
              }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={resource.title}
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
            {resource.videoDuration && (
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.875rem',
                  marginTop: '0.5rem',
                }}
              >
                Duration: {resource.videoDuration}
              </p>
            )}
          </div>
        )
      })()}

      {/* Download card */}
      {resource.resourceType === 'download' &&
        resource.downloadableFile?.asset && (
          <div
            style={{
              border: '2px dashed rgba(92, 107, 74, 0.3)',
              backgroundColor: 'rgba(92, 107, 74, 0.05)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <a
              href={resource.downloadableFile.asset.url}
              download
              className="toolkit-download-btn"
            >
              📥 Download Resource
            </a>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                marginTop: '0.75rem',
                marginBottom: 0,
              }}
            >
              {resource.downloadableFile.asset.originalFilename}
              {resource.downloadableFile.asset.size &&
                ` · ${formatFileSize(resource.downloadableFile.asset.size)}`}
            </p>
            {resource.fileDescription && (
              <p
                style={{
                  color: 'var(--text-light)',
                  fontSize: '0.8125rem',
                  marginTop: '0.25rem',
                  marginBottom: 0,
                }}
              >
                {resource.fileDescription}
              </p>
            )}
          </div>
        )}

      {/* Review info card */}
      {resource.resourceType === 'review' && resource.toolName && (
        <div
          style={{
            border: '1px solid var(--border-beige)',
            backgroundColor: 'var(--neutral-bg)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-black)',
                fontSize: '1.25rem',
                fontWeight: 700,
                margin: 0,
              }}
            >
              {resource.toolName}
            </h2>
            {resource.toolUrl && (
              <a
                href={resource.toolUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--earth)',
                  textDecoration: 'underline',
                  fontSize: '0.875rem',
                }}
              >
                Visit Website →
              </a>
            )}
          </div>
          {resource.toolRating && (
            <StarRating rating={resource.toolRating} size="1.5rem" />
          )}
        </div>
      )}

      {/* Featured image (non-video types) */}
      {resource.resourceType !== 'video' &&
        resource.featuredImage?.asset && (
          <Image
            src={urlFor(resource.featuredImage)
              .width(1200)
              .height(630)
              .quality(85)
              .url()}
            alt={resource.featuredImage.alt || resource.title}
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
      {resource.body && <RichText content={resource.body} />}

      {/* Tags */}
      {resource.tags && resource.tags.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2.5rem',
          }}
        >
          {resource.tags.map((tag) => (
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

      {/* Related resources */}
      {resource.relatedResources && resource.relatedResources.length > 0 && (
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
            Related Resources
          </h2>
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(1, 1fr)',
            }}
            className="sm:grid-cols-2! lg:grid-cols-3!"
          >
            {resource.relatedResources.map((related) => (
              <ToolkitCard key={related._id} resource={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
