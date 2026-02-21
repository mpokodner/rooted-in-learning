import type { Metadata } from "next";
import Link from "next/link";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog | The Rooted Learner",
  description:
    "Research-backed teaching strategies, Science of Reading insights, AI in education, and classroom systems design. Written by a 12+ year practitioner.",
  keywords: [
    "science of reading",
    "teaching strategies",
    "AI in education",
    "multilingual learners",
    "classroom strategy",
    "education blog",
  ],
  openGraph: {
    title: "Blog | The Rooted Learner",
    description:
      "Research-backed insights for modern educators. Science of Reading, AI tools, and classroom systems.",
    type: "website",
  },
};

const contentPillars = [
  { id: "all", label: "All Posts" },
  { id: "science-of-reading", label: "Science of Reading" },
  { id: "multilingual-learners", label: "Multilingual Learners" },
  { id: "ai-in-education", label: "AI in Education" },
  { id: "classroom-strategy", label: "Classroom Strategy" },
  { id: "teaching-systems", label: "Teaching Systems Design" },
];

const featuredPost = {
  title: "Why AI Won't Replace Teachers — But Teachers Who Use AI Will Replace Those Who Don't",
  excerpt:
    "The conversation around AI in education is missing the point. Here's what actually matters: building systems that give teachers leverage, not tools that try to replace their judgment.",
  category: "AI in Education",
  readTime: "8 min read",
  date: "Coming Soon",
  slug: "/blog",
};

const posts = [
  {
    title: "The Science of Reading in 2026: What's Changed and What Hasn't",
    excerpt: "A practitioner's guide to the current evidence base — and what it actually means for your classroom.",
    category: "Science of Reading",
    readTime: "6 min",
    slug: "/blog",
  },
  {
    title: "5 Strategies for Supporting Multilingual Learners Beyond 'Modify the Text'",
    excerpt: "Your ML students deserve more than simplified worksheets. Here are evidence-based approaches that actually build language.",
    category: "Multilingual Learners",
    readTime: "7 min",
    slug: "/blog",
  },
  {
    title: "Building a Lesson Planning System That Survives Monday Morning",
    excerpt: "Stop planning in survival mode. Here's how to build a repeatable system that saves 5+ hours per week.",
    category: "Teaching Systems Design",
    readTime: "5 min",
    slug: "/blog",
  },
  {
    title: "How I Use AI to Differentiate Instruction for 28 Students",
    excerpt: "A real-world walkthrough of the AI tools and prompts I use daily for personalized instruction.",
    category: "AI in Education",
    readTime: "9 min",
    slug: "/blog",
  },
  {
    title: "The Reading Intervention Framework That Actually Works",
    excerpt: "After implementing this in three schools, here are the results — and the exact framework you can replicate.",
    category: "Science of Reading",
    readTime: "10 min",
    slug: "/blog",
  },
  {
    title: "Stop Teaching to the Middle: A Practical Guide to Small Group Strategy",
    excerpt: "Whole-group instruction has its place, but the real magic happens in small groups. Here's how to structure them.",
    category: "Classroom Strategy",
    readTime: "6 min",
    slug: "/blog",
  },
];

const startHere = [
  {
    title: "New to Science of Reading?",
    description: "Start with the evidence base that's changing literacy instruction nationwide.",
    link: "/blog",
    linkText: "Read the SoR Primer",
  },
  {
    title: "Exploring AI for Teaching?",
    description: "A practical, no-hype guide to AI tools that actually help in the classroom.",
    link: "/blog",
    linkText: "Get Started with AI",
  },
  {
    title: "Building Better Systems?",
    description: "Learn how to create teaching infrastructure that scales your impact.",
    link: "/blog",
    linkText: "Read Systems Design",
  },
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* ─── Blog Hero ─── */}
      <section className="bloghero" aria-labelledby="blog-heading">
        <div className="bloghero-bg" aria-hidden="true">
          <div className="bloghero-circle bloghero-circle--1" />
          <div className="bloghero-circle bloghero-circle--2" />
        </div>
        <div className="container bloghero-container">
          <div className="bloghero-badge">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
            </svg>
            <span>Thought Leadership &amp; Strategy</span>
          </div>
          <h1 id="blog-heading" className="bloghero-title">
            Research-Backed Insights
            <br />
            <span className="bloghero-accent">For Modern Educators</span>
          </h1>
          <p className="bloghero-desc">
            Practical strategies grounded in research. Science of Reading,
            multilingual learner support, AI in education, and the systems
            that make great teaching sustainable.
          </p>
        </div>
      </section>

      {/* ─── Content Pillar Filters ─── */}
      <section className="blog-filters" aria-label="Content categories">
        <div className="container">
          <div className="blog-filters-inner">
            {contentPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                className={`blog-filter-btn${index === 0 ? " blog-filter-btn--active" : ""}`}
                aria-pressed={index === 0}
              >
                {pillar.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Post ─── */}
      <section className="blog-featured section" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading" className="sr-only">Featured Article</h2>
          <Link href={featuredPost.slug} className="blog-featured-card">
            <div className="blog-featured-visual">
              <div className="blog-featured-mockup">
                <div className="blog-featured-mockup-dots">
                  <span /><span /><span />
                </div>
                <div className="blog-featured-mockup-lines">
                  <span style={{ width: "100%" }} />
                  <span style={{ width: "80%" }} />
                  <span style={{ width: "60%" }} />
                  <span style={{ width: "90%" }} />
                  <span style={{ width: "70%" }} />
                </div>
              </div>
            </div>
            <div className="blog-featured-content">
              <div className="blog-featured-meta">
                <span className="blog-featured-category">{featuredPost.category}</span>
                <span>&middot;</span>
                <span>{featuredPost.readTime}</span>
                <span>&middot;</span>
                <span>{featuredPost.date}</span>
              </div>
              <h3 className="blog-featured-title">{featuredPost.title}</h3>
              <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
              <span className="blog-featured-link">
                Read Article
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Post Grid ─── */}
      <section className="blog-grid-section section" aria-labelledby="posts-heading">
        <div className="container">
          <div className="blog-grid-header">
            <h2 id="posts-heading" className="blog-grid-title">Latest Articles</h2>
            <p className="blog-grid-desc">
              Deep dives, practical guides, and strategic thinking from the classroom to the system level.
            </p>
          </div>

          <div className="blog-post-grid">
            {posts.map((post, index) => (
              <Link key={index} href={post.slug} className="blog-post-card">
                <div className="blog-post-image">
                  <span className="blog-post-category-badge">{post.category}</span>
                </div>
                <div className="blog-post-body">
                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="blog-post-footer">
                    <span className="blog-post-time">{post.readTime}</span>
                    <span className="blog-post-read">
                      Read
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Email Capture ─── */}
      <section id="newsletter" className="blog-capture section" aria-labelledby="capture-heading">
        <div className="container">
          <div className="blog-capture-card">
            <div className="blog-capture-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="blog-capture-badge">Free Download</span>
            <h2 id="capture-heading" className="blog-capture-title">
              The Weekly Planner Template
            </h2>
            <p className="blog-capture-desc">
              The exact planning template I used to cut my prep time in half.
              Plus weekly teaching tips, strategies, and free resources
              delivered to your inbox every Tuesday.
            </p>
            <form className="blog-capture-form">
              <input
                type="email"
                placeholder="your@email.com"
                className="blog-capture-input"
                aria-label="Email address"
              />
              <button type="submit" className="blog-capture-btn">
                Get My Free Planner
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
            <p className="blog-capture-note">
              Join 5,000+ educators. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Start Here Section ─── */}
      <section className="blog-start section" aria-labelledby="start-heading">
        <div className="container">
          <div className="blog-start-header">
            <p className="blog-section-label">New Here?</p>
            <h2 id="start-heading" className="blog-start-title">
              Start Here
            </h2>
            <p className="blog-start-desc">
              Not sure where to begin? Pick the topic that speaks to your biggest challenge right now.
            </p>
          </div>

          <div className="blog-start-grid">
            {startHere.map((item, index) => (
              <Link key={index} href={item.link} className="blog-start-card">
                <div className="blog-start-number">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="blog-start-card-title">{item.title}</h3>
                <p className="blog-start-card-desc">{item.description}</p>
                <span className="blog-start-card-link">
                  {item.linkText}
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Cross-links */}
          <div className="blog-crosslinks">
            <Link href="/resources/lessons" className="blog-crosslink">
              Browse Lesson Library &rarr;
            </Link>
            <Link href="/consulting" className="blog-crosslink">
              Explore Consulting &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
