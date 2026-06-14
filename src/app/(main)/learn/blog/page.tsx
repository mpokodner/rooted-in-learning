import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import {
  blogPostsQuery,
  blogPostsByPillarQuery,
  allPillarsQuery,
} from '@/sanity/lib/queries'
import type { BlogPostCard, ContentPillar } from '@/sanity/lib/types'
import BlogCard, { BlogFeaturedCard } from '@/components/blog/BlogCard'
import BlogFilters from '@/components/blog/BlogFilters'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Insights & Blog | The Rooted Learner',
  description:
    'Field notes from inside the work — audit teardowns, the wedge question, build-vs-buy, and the greenhouse thesis for new and alternative schools.',
  alternates: { canonical: '/learn/blog' },
  openGraph: {
    title: 'Insights & Blog | The Rooted Learner',
    description:
      'Diagnosis, strategy, and what actually works — at the classroom, school, and network level.',
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

  const featuredPost = posts[0]
  const gridPosts = posts.length > 1 ? posts.slice(1) : []

  return (
    <>
      <section
        className="section--tight hero"
        style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}
        aria-labelledby="blog-heading"
      >
        <div className="container">
          <nav className="kicker reveal" aria-label="Breadcrumb">
            <Link href="/learn" style={{ color: 'inherit', textDecoration: 'none' }}>
              Learn
            </Link>{' '}
            / Insights &amp; Blog
          </nav>
          <div className="section-head reveal mt-3" style={{ maxWidth: '60ch' }}>
            <h1 id="blog-heading" className="h-xl">
              Field notes from inside the work.
            </h1>
            <p className="lead mt-3" style={{ maxWidth: '54ch' }}>
              Diagnosis, strategy, and what actually works — at the classroom, school,
              and network level. Proof travels further than any pitch.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <BlogFilters pillars={pillars} />
        </div>
      </section>

      {featuredPost && (
        <section className="section--tight" aria-label="Featured article">
          <div className="container">
            <BlogFeaturedCard post={featuredPost} />
          </div>
        </section>
      )}

      <section className="section" aria-label="All articles">
        <div className="container">
          {gridPosts.length > 0 ? (
            <div className="grid grid-3">
              {gridPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : !featuredPost ? (
            <div className="text-center reveal" style={{ padding: '3rem 1rem' }}>
              <p className="lead">Articles Coming Soon</p>
              <p className="note mt-2">
                We&apos;re working on research-backed content for educators.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section--beige section" aria-labelledby="blog-newsletter-heading">
        <div className="container container--narrow text-center">
          <span className="eyebrow eyebrow--center reveal">Stay close to the work</span>
          <h2 id="blog-newsletter-heading" className="h-lg mt-3 reveal">
            Weekly teaching strategies &amp; free resources
          </h2>
          <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: '46ch' }}>
            Research-backed insights from inside the classroom, delivered every Tuesday.
          </p>
          <NewsletterForm
            source="blog-page"
            buttonText="Subscribe"
            formClassName="capture-form mt-4 reveal"
            buttonClassName="btn btn-terra"
            inputClassName="capture-form-input"
          />
          <p className="note mt-2 reveal">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  )
}
