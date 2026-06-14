import type { Metadata } from 'next'
import Link from 'next/link'
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
import GatedDownload from '@/components/learn/GatedDownload'

export const metadata: Metadata = {
  title: 'Teacher Toolkit | The Rooted Learner',
  description:
    'Free, classroom-ready downloads — templates, frameworks, and the Claude AI guide for educators. Built from inside the classroom.',
  alternates: { canonical: '/learn/teacher-toolkit' },
  openGraph: {
    title: 'Teacher Toolkit | The Rooted Learner',
    description:
      'No fluff. Just the templates, frameworks, and AI workflows we actually use — yours to download and put to work this week.',
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
    <>
      <section
        className="section--tight hero"
        style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}
        aria-labelledby="toolkit-heading"
      >
        <div className="container">
          <nav className="kicker reveal" aria-label="Breadcrumb">
            <Link href="/learn" style={{ color: 'inherit', textDecoration: 'none' }}>
              Learn
            </Link>{' '}
            / Teacher Toolkit
          </nav>
          <div className="section-head reveal mt-3" style={{ maxWidth: '60ch' }}>
            <h1 id="toolkit-heading" className="h-xl">
              Free, classroom-ready, and field-tested.
            </h1>
            <p className="lead mt-3" style={{ maxWidth: '54ch' }}>
              No fluff. Just the templates, frameworks, and AI workflows we actually use
              — yours to download and put to work this week.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight" aria-label="Featured download">
        <div className="container">
          <div className="card reveal" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="feature-band" style={{ gap: 0 }}>
              <div style={{ padding: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
                <span className="chip-tag">Most popular</span>
                <h2 className="h-md mt-2">The Claude AI Guide for Educators</h2>
                <p className="muted mt-3">
                  A practical, step-by-step guide to using Claude in your classroom: prompt
                  templates, lesson-planning workflows, and real examples from a current 1–8
                  educator.
                </p>
                <GatedDownload
                  source="toolkit-featured"
                  fileName="The Claude AI Guide for Educators"
                  fileDescription="PDF · delivered to your inbox"
                />
              </div>
              <div className="ph" style={{ minHeight: 280, borderRadius: 0 }}>
                <span className="ph-label">cover · Claude AI guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Resource library">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The library</span>
            <h2 className="h-xl mt-3">Grab what you need.</h2>
          </div>

          <ToolkitFilters pillars={pillars} />

          {resources.length > 0 ? (
            <div className="grid grid-3 mt-6">
              {resources.map((resource) => (
                <ToolkitCard key={resource._id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center reveal mt-6" style={{ padding: '3rem 1rem' }}>
              <p className="lead">Resources Coming Soon</p>
              <p className="note mt-2">
                We&apos;re building practical resources for educators. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section--earth section" aria-labelledby="toolkit-services-heading">
        <div className="container glass text-center">
          <span className="eyebrow eyebrow--center reveal">
            When a template isn&apos;t enough
          </span>
          <h2
            id="toolkit-services-heading"
            className="h-lg mt-3 mx-auto reveal"
            style={{ color: '#fff', maxWidth: '24ch' }}
          >
            If you&apos;re building a whole school, you need more than a worksheet.
          </h2>
          <div className="btn-row mt-4 reveal" style={{ justifyContent: 'center' }}>
            <Link href="/services" className="btn btn-terra btn-lg">
              Explore Greenhouse Schools
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
