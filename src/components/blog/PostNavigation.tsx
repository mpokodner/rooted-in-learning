import Link from 'next/link'

interface NavPost {
  title: string
  slug: { current: string }
}

interface PostNavigationProps {
  previousPost?: NavPost | null
  nextPost?: NavPost | null
}

export default function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  if (!previousPost && !nextPost) return null

  return (
    <nav className="bp-nav-posts" aria-label="Post navigation">
      {previousPost ? (
        <Link href={`/learn/blog/${previousPost.slug.current}`} className="bp-nav-post bp-nav-post--prev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <div>
            <span className="bp-nav-label">Previous</span>
            <span className="bp-nav-title">{previousPost.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextPost ? (
        <Link href={`/learn/blog/${nextPost.slug.current}`} className="bp-nav-post bp-nav-post--next">
          <div>
            <span className="bp-nav-label">Next</span>
            <span className="bp-nav-title">{nextPost.title}</span>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
