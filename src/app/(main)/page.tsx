import Link from "next/link";
import type { Metadata } from "next";
import "./home.css";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import BentoNewsletter from "@/components/BentoNewsletter";
import AlignedSamplePanel from "@/components/aligned/AlignedSamplePanel";
import { copy } from "@/content/site-copy";
import { PRODUCT_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — grouping from what students can do`,
  description: copy.home.heroLead,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Rooted Learner",
    title: `${PRODUCT_NAME} — grouping from what students can do`,
    description: copy.home.heroLead,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Rooted Learner - EdTech Solutions",
      },
    ],
  },
};

export const revalidate = 60;

const offerings = [
  {
    audience: "Districts",
    title: PRODUCT_NAME,
    body: "Turn assessment evidence into instructional groups teachers can use this week.",
    href: "/aligned",
  },
  {
    audience: "Districts",
    title: "English Language Development overlays",
    body: "ELD overlays for any text, custom-made upon request for your district’s HQIM.",
    href: "/districts",
  },
  {
    audience: "Districts",
    title: "HallPass",
    body: "Student movement management built to sit beside the systems you already run.",
    href: "/for-districts/hallpass",
  },
  {
    audience: "Educators",
    title: "Harness AI without the burnout",
    body: "How to use AI to save time and keep professional judgment in the teacher’s hands.",
    href: "/educators",
  },
];

export default async function Home() {
  let latestPosts: BlogPostCard[] = [];
  try {
    const allPosts = await client.fetch<BlogPostCard[]>(blogPostsQuery);
    latestPosts = allPosts.slice(0, 3);
  } catch (error) {
    console.error("Home", { error });
  }

  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="container home-hero-copy">
          <p className="home-eyebrow">Teacher-facing grouping for grades 3–8 ELA</p>
          <h1 id="home-hero-title">
            See where every student stands,{" "}
            <em>standard by standard.</em>
          </h1>
          <p className="lead">{copy.home.heroLead}</p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-terra btn-lg" data-track="cta_conversation">
              Request a conversation
            </Link>
            <Link href="/aligned" className="btn btn-outline btn-lg" data-track="pilot_cta_click" data-track-location="hero" data-track-category="aligned">
              See {PRODUCT_NAME}
            </Link>
          </div>
        </div>
        <div className="container home-hero-panel">
          <AlignedSamplePanel />
        </div>
      </section>

      <section className="home-gaps" aria-labelledby="home-gaps-title">
        <div className="container">
          <div className="home-gaps-card">
            <div className="home-gaps-head">
              <p className="home-eyebrow">Proof of concept · {PRODUCT_NAME}</p>
              <h2 id="home-gaps-title">See the gaps your current reports hide.</h2>
            </div>
            <div className="home-gaps-grid">
              {[
                { code: "RL.5.1", value: "82%", label: "Quote accurately from a text", tone: "ok" },
                { code: "RL.5.2", value: "64%", label: "Determine a theme", tone: "mid" },
                { code: "RI.5.3", value: "51%", label: "Explain relationships between ideas", tone: "mid" },
                { code: "RI.5.8", value: "38%", label: "Reasons and evidence", tone: "low" },
              ].map((item) => (
                <article key={item.code} className={`home-gap-tile home-gap-tile--${item.tone}`}>
                  <p className="home-gap-code">{item.code}</p>
                  <p className="home-gap-value">{item.value}</p>
                  <p className="home-gap-label">{item.label}</p>
                </article>
              ))}
            </div>
            <p className="home-gaps-note">
              RI.5.8 is below 50% across all three classes. Suggested next step: reteach with evidence sentence frames.
              <span>Sample data</span>
            </p>
          </div>
        </div>
      </section>

      <section className="home-offerings" aria-labelledby="home-offerings-title">
        <div className="container">
          <h2 id="home-offerings-title" className="sr-only">
            What we offer districts and educators
          </h2>
          <div className="home-offerings-grid">
            {offerings.map((item) => (
              <Link key={item.title} href={item.href} className="home-offering">
                <span>{item.audience}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BentoNewsletter />

      {latestPosts.length > 0 && (
        <section className="home-blog section">
          <div className="container">
            <div className="home-blog-header">
              <span className="home-eyebrow">From the field</span>
              <h2>Latest from the blog</h2>
            </div>
            <div className="home-blog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} post={post} hrefPrefix="/blog" />
              ))}
            </div>
            <div className="home-blog-more">
              <Link href="/blog" className="home-link-arrow">
                View all posts
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="home-founder" aria-labelledby="home-founder-title">
        <div className="container home-founder-inner">
          <div>
            <h2 id="home-founder-title">Built by an educator who also writes the code.</h2>
            <p>Michelle Pokodner · 1–8 educator · curricular solutions architect</p>
          </div>
          <Link href="/contact" className="btn btn-lg home-founder-cta" data-track="cta_founder">
            Request a conversation
          </Link>
        </div>
      </section>
      <div className="home-founder-buffer" aria-hidden="true" />
    </>
  );
}
