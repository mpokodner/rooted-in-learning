import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import {
  blogPostsQuery,
  blogPostsByPillarQuery,
  allPillarsQuery,
} from '@/sanity/lib/queries'
import type { BlogPostCard, ContentPillar } from '@/sanity/lib/types'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilters from '@/components/blog/BlogFilters'

export const metadata: Metadata = {
  title: 'Blog | The Rooted Learner',
  description:
    'Research-backed teaching strategies, Science of Reading insights, AI in education, and classroom systems design. Written by a 12+ year practitioner.',
  alternates: { canonical: '/learn/blog' },
  openGraph: {
    title: 'Blog | The Rooted Learner',
    description:
      'Research-backed insights for modern educators. Science of Reading, AI tools, and classroom systems.',
    type: 'website',
  },
}

export const revalidate = 60

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ pillar?: string }>
}) {
  const { pillar } = await searchParams

  const [pillars, posts] = await Promise.all([
    client.fetch<ContentPillar[]>(allPillarsQuery),
    pillar
      ? client.fetch<BlogPostCard[]>(blogPostsByPillarQuery, {
          pillarSlug: pillar,
        })
      : client.fetch<BlogPostCard[]>(blogPostsQuery),
  ])

  return (
    <div
      style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '3rem 1rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-black)',
          fontSize: '2.25rem',
          fontWeight: 700,
        }}
      >
        Research-Backed Insights
      </h1>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '1.125rem',
          marginTop: '0.75rem',
        }}
      >
        Practical strategies grounded in research for modern educators.
      </p>

      <BlogFilters pillars={pillars} />

      {posts.length > 0 ? (
        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
          className="sm:grid-cols-2! lg:grid-cols-3!"
        >
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '3rem 1rem',
          }}
        >
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.125rem',
            }}
          >
            Articles Coming Soon
          </p>
          <p
            style={{
              color: 'var(--text-light)',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
            }}
          >
            We&apos;re working on research-backed content for educators.
          </p>
        </div>
      )}
    </div>
  )
}
