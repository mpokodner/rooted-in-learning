import type { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import {
  toolkitResourcesQuery,
  toolkitByTypeQuery,
  toolkitByPillarQuery,
  allPillarsQuery,
} from '@/sanity/lib/queries'
import type { ToolkitResourceCard, ContentPillar } from '@/sanity/lib/types'
import ToolkitCard from '@/components/learn/ToolkitCard'
import ToolkitFilters from '@/components/learn/ToolkitFilters'

export const metadata: Metadata = {
  title: 'Teacher Toolkit | The Rooted Learner',
  description:
    'Video tutorials, how-to guides, downloadable resources, and tool reviews built for grades 1–8 educators. Practical, research-backed, and ready to use.',
  alternates: { canonical: '/learn/teacher-toolkit' },
  openGraph: {
    title: 'Teacher Toolkit | The Rooted Learner',
    description:
      'Practical resources for modern educators — videos, guides, downloads, and reviews.',
    type: 'website',
  },
}

export const revalidate = 60

export default async function ToolkitPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; pillar?: string }>
}) {
  const { type, pillar } = await searchParams

  const [pillars, resources] = await Promise.all([
    client.fetch<ContentPillar[]>(allPillarsQuery),
    type
      ? client.fetch<ToolkitResourceCard[]>(toolkitByTypeQuery, {
          resourceType: type,
        })
      : pillar
        ? client.fetch<ToolkitResourceCard[]>(toolkitByPillarQuery, {
            pillarSlug: pillar,
          })
        : client.fetch<ToolkitResourceCard[]>(toolkitResourcesQuery),
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
        Teacher Toolkit
      </h1>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '1.125rem',
          marginTop: '0.75rem',
        }}
      >
        Videos, guides, downloads, and reviews to level up your teaching practice.
      </p>

      <ToolkitFilters pillars={pillars} />

      {resources.length > 0 ? (
        <div
          style={{
            marginTop: '2rem',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(1, 1fr)',
          }}
          className="sm:grid-cols-2! lg:grid-cols-3!"
        >
          {resources.map((resource) => (
            <ToolkitCard key={resource._id} resource={resource} />
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
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Resources Coming Soon
          </p>
          <p
            style={{
              color: 'var(--text-light)',
              fontSize: '0.875rem',
              marginTop: '0.5rem',
            }}
          >
            We&apos;re building practical resources for educators. Check back soon.
          </p>
        </div>
      )}
    </div>
  )
}
