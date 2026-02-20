import type { Metadata } from "next";
import Link from "next/link";
import "./blog-post.css";

/* ─── Demo data — replace with Sanity CMS fetch ─── */
const demoPost = {
  title: "Why AI Won't Replace Teachers — But Teachers Who Use AI Will Replace Those Who Don't",
  excerpt:
    "The conversation around AI in education is missing the point. Here's what actually matters.",
  category: "AI in Education",
  categorySlug: "ai-in-education",
  author: "Michelle Van Slyke",
  authorRole: "Educator · Curriculum Designer · EdTech Developer",
  date: "February 10, 2026",
  readTime: "8 min read",
  updatedDate: "February 14, 2026",
};

const tableOfContents = [
  { id: "the-real-question", label: "The Real Question" },
  { id: "leverage-not-replacement", label: "Leverage, Not Replacement" },
  { id: "practical-framework", label: "A Practical Framework" },
  { id: "what-to-do-monday", label: "What to Do Monday" },
  { id: "final-thoughts", label: "Final Thoughts" },
];

const relatedPosts = [
  {
    title: "How I Use AI to Differentiate Instruction for 28 Students",
    category: "AI in Education",
    readTime: "9 min",
    slug: "/blog/ai-differentiation-walkthrough",
  },
  {
    title: "Building a Lesson Planning System That Survives Monday Morning",
    category: "Teaching Systems Design",
    readTime: "5 min",
    slug: "/blog/lesson-planning-system",
  },
  {
    title: "The Science of Reading in 2026: What's Changed and What Hasn't",
    category: "Science of Reading",
    readTime: "6 min",
    slug: "/blog/science-of-reading-2026",
  },
];

const relatedLessons = [
  {
    title: "AI-Powered Lesson Planning Template Pack",
    price: "$12",
    slug: "/shop/ai-lesson-planning-templates",
  },
  {
    title: "Differentiated Reading Intervention Kit",
    price: "$18",
    slug: "/shop/reading-intervention-kit",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${demoPost.title} | Rooted in Learning`,
    description: demoPost.excerpt,
    keywords: ["AI in education", "teaching with AI", "edtech", "classroom strategy"],
    openGraph: {
      title: demoPost.title,
      description: demoPost.excerpt,
      type: "article",
      publishedTime: "2026-02-10",
      authors: [demoPost.author],
      url: `https://therootedlearner.com/blog/${slug}`,
    },
    alternates: {
      canonical: `https://therootedlearner.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;

  return (
    <article className="bp-page" itemScope itemType="https://schema.org/Article">
      {/* ─── Post Hero ─── */}
      <header className="bp-hero">
        <div className="bp-hero-bg" aria-hidden="true">
          <div className="bp-hero-orb bp-hero-orb--1" />
          <div className="bp-hero-orb bp-hero-orb--2" />
        </div>
        <div className="bp-container bp-hero-content">
          <Link href="/blog" className="bp-back">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Articles
          </Link>

          <div className="bp-hero-meta">
            <span className="bp-hero-category">{demoPost.category}</span>
            <span className="bp-hero-dot">&middot;</span>
            <span className="bp-hero-time">{demoPost.readTime}</span>
          </div>

          <h1 className="bp-hero-title" itemProp="headline">{demoPost.title}</h1>

          <p className="bp-hero-excerpt" itemProp="description">{demoPost.excerpt}</p>

          <div className="bp-hero-author">
            <div className="bp-hero-avatar">
              <span>MV</span>
            </div>
            <div className="bp-hero-author-info">
              <p className="bp-hero-author-name" itemProp="author">{demoPost.author}</p>
              <p className="bp-hero-author-role">
                <time dateTime="2026-02-10" itemProp="datePublished">{demoPost.date}</time>
                {demoPost.updatedDate && (
                  <> &middot; Updated <time dateTime="2026-02-14">{demoPost.updatedDate}</time></>
                )}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Content + Sidebar Layout ─── */}
      <div className="bp-main">
        <div className="bp-container">
          <div className="bp-layout">
            {/* ─── Sidebar: TOC ─── */}
            <aside className="bp-sidebar" aria-label="Table of contents">
              <nav className="bp-toc">
                <h2 className="bp-toc-title">In This Article</h2>
                <ul className="bp-toc-list">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="bp-toc-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar CTA */}
              <div className="bp-sidebar-cta">
                <p className="bp-sidebar-cta-label">Free Download</p>
                <p className="bp-sidebar-cta-title">Weekly Planner Template</p>
                <Link href="/blog#newsletter" className="bp-sidebar-cta-btn">
                  Get It Free
                </Link>
              </div>
            </aside>

            {/* ─── Article Body ─── */}
            <div className="bp-article" itemProp="articleBody">
              <section id="the-real-question">
                <h2>The Real Question Nobody&apos;s Asking</h2>
                <p>
                  Every week I see another headline: <em>&quot;AI Will Replace Teachers by 2030.&quot;</em>
                  Every week I roll my eyes. Not because AI isn&apos;t powerful — it is. But because
                  the conversation is framed entirely wrong.
                </p>
                <p>
                  The real question isn&apos;t whether AI can teach. It&apos;s whether you&apos;re
                  building systems that give you leverage. Teachers who use AI effectively aren&apos;t
                  being replaced — they&apos;re becoming irreplaceable.
                </p>
                <blockquote>
                  <p>&ldquo;Technology is a tool. The teacher is the architect.&rdquo;</p>
                </blockquote>
              </section>

              <section id="leverage-not-replacement">
                <h2>Leverage, Not Replacement</h2>
                <p>
                  After 12 years in the classroom, I&apos;ve learned that the bottleneck is never
                  knowledge — it&apos;s time. AI doesn&apos;t replace the teacher&apos;s judgment; it gives
                  back the hours needed to exercise that judgment well.
                </p>
                <p>
                  Here&apos;s what I mean in practice: I used to spend 45 minutes per week creating
                  differentiated reading passages for my five guided reading groups. Now I use an AI
                  workflow I built myself — and it takes 8 minutes. Same quality. Same alignment to
                  standards. But I get 37 minutes back.
                </p>
                <p>
                  That&apos;s 37 minutes I now spend in small groups, doing the work only a human can do.
                </p>
              </section>

              <section id="practical-framework">
                <h2>A Practical Framework for AI in Your Classroom</h2>
                <p>Here&apos;s the framework I use when deciding where AI fits:</p>
                <ol>
                  <li><strong>Automate the predictable.</strong> If the task follows a clear pattern (rubric generation, passage leveling, data organization), let AI handle the first draft.</li>
                  <li><strong>Augment the creative.</strong> Use AI to brainstorm, not to decide. It generates 10 discussion questions; you pick the 3 that match your students.</li>
                  <li><strong>Protect the relational.</strong> AI should never touch the feedback that builds student-teacher trust. That conversation is yours.</li>
                </ol>
              </section>

              <section id="what-to-do-monday">
                <h2>What to Do Monday Morning</h2>
                <p>
                  You don&apos;t need a six-week AI training. You need one small win. Here are three
                  things you can try this week:
                </p>
                <ul>
                  <li>Use ChatGPT to generate a pre-assessment for your next unit (10 minutes).</li>
                  <li>Have AI create three different versions of a reading passage at different Lexile levels.</li>
                  <li>Ask it to turn your lesson objective into three different student-friendly &quot;I can&quot; statements.</li>
                </ul>
                <p>
                  Each of these tasks used to take me 20-30 minutes. Now they take under 5.
                  The quality stays the same because I&apos;m still the one reviewing, editing, and
                  making the final call.
                </p>
              </section>

              <section id="final-thoughts">
                <h2>Final Thoughts</h2>
                <p>
                  The future of teaching isn&apos;t about choosing between humans and machines. It&apos;s
                  about building infrastructure that lets great teachers do what only they can do —
                  connect with kids, make in-the-moment decisions, and inspire curiosity.
                </p>
                <p>
                  AI is infrastructure. Use it that way.
                </p>
              </section>

              {/* ─── Share Bar ─── */}
              <div className="bp-share">
                <p className="bp-share-label">Share this article</p>
                <div className="bp-share-buttons">
                  <a
                    href="#"
                    className="bp-share-btn bp-share-btn--linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bp-share-btn bp-share-btn--x"
                    aria-label="Share on X"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <button
                    className="bp-share-btn bp-share-btn--copy"
                    aria-label="Copy link"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ─── Author Bio ─── */}
              <div className="bp-author-bio">
                <div className="bp-author-avatar-lg">
                  <span>MV</span>
                </div>
                <div className="bp-author-bio-content">
                  <h3 className="bp-author-bio-name">Written by {demoPost.author}</h3>
                  <p className="bp-author-bio-role">{demoPost.authorRole}</p>
                  <p className="bp-author-bio-desc">
                    12+ years in the classroom, Science of Reading certified, and building AI-powered
                    education tools. I write about the systems behind sustainable teaching.
                  </p>
                  <div className="bp-author-bio-links">
                    <Link href="/about" className="bp-author-bio-link">About Me</Link>
                    <Link href="/consulting" className="bp-author-bio-link">Work With Me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Related Lessons CTA ─── */}
      <section className="bp-lessons" aria-labelledby="lessons-heading">
        <div className="bp-container">
          <div className="bp-lessons-header">
            <h2 id="lessons-heading" className="bp-lessons-title">
              Put This Into Practice
            </h2>
            <p className="bp-lessons-desc">
              Ready-to-use resources that complement this article.
            </p>
          </div>
          <div className="bp-lessons-grid">
            {relatedLessons.map((lesson) => (
              <Link key={lesson.title} href={lesson.slug} className="bp-lesson-card">
                <div className="bp-lesson-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="bp-lesson-title">{lesson.title}</h3>
                  <span className="bp-lesson-price">{lesson.price}</span>
                </div>
                <svg className="bp-lesson-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Posts ─── */}
      <section className="bp-related section" aria-labelledby="related-heading">
        <div className="bp-container">
          <div className="bp-related-header">
            <h2 id="related-heading" className="bp-related-title">Keep Reading</h2>
            <Link href="/blog" className="bp-related-viewall">
              View All Articles
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="bp-related-grid">
            {relatedPosts.map((post) => (
              <Link key={post.title} href={post.slug} className="bp-related-card">
                <span className="bp-related-category">{post.category}</span>
                <h3 className="bp-related-card-title">{post.title}</h3>
                <div className="bp-related-card-footer">
                  <span className="bp-related-time">{post.readTime}</span>
                  <span className="bp-related-read">Read &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="bp-newsletter" aria-labelledby="bp-newsletter-heading">
        <div className="bp-container">
          <div className="bp-newsletter-card">
            <h2 id="bp-newsletter-heading" className="bp-newsletter-title">
              Get Strategies Like This Every Week
            </h2>
            <p className="bp-newsletter-desc">
              Join 5,000+ educators receiving research-backed teaching strategies,
              AI tips, and free resources every Tuesday.
            </p>
            <form className="bp-newsletter-form">
              <input
                type="email"
                className="bp-newsletter-input"
                placeholder="your@email.com"
                aria-label="Email address"
              />
              <button type="submit" className="bp-newsletter-btn">
                Subscribe
              </button>
            </form>
            <p className="bp-newsletter-note">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </article>
  );
}
