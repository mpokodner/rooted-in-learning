import Link from "next/link";
import type { Metadata } from "next";
import "./home.css";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import BentoHero from "@/components/BentoHero";
import BentoNewsletter from "@/components/BentoNewsletter";
import RegroupDiagram from "@/components/aligned/RegroupDiagram";
import TrackPage from "@/components/TrackPage";
import { copy } from "@/content/site-copy";
import { PRODUCT_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — grouping from what students can do`,
  description: copy.home.heroLead,
  alternates: { canonical: "/" },
};

export const revalidate = 60;

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
      <TrackPage event="home_view" />
      <BentoHero />
      <BentoNewsletter />

      <section className="section" aria-labelledby="home-problem">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: "60ch" }}>
            <span className="eyebrow">{PRODUCT_NAME}</span>
            <h2 id="home-problem" className="h-lg mt-3">
              {copy.home.problemTitle}
            </h2>
            <p className="lead mt-3">{copy.home.problemBody}</p>
          </div>
          <div className="mt-4 reveal">
            <RegroupDiagram />
          </div>
        </div>
      </section>

      <section className="section section--beige" aria-labelledby="home-how">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2 id="home-how" className="h-lg mt-3">
              {copy.home.howTitle}
            </h2>
          </div>
          <div className="grid grid-3 mt-4">
            <article className="card card--hover reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M4 6h16M4 10h12M4 14h16M4 18h9" />
                </svg>
              </div>
              <h3>See the standard</h3>
              <p>Item-level evidence mapped to the Maryland College and Career Ready codes you already teach.</p>
            </article>
            <article className="card card--hover reveal">
              <div className="card-icon card-icon--terra">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="8" cy="8" r="3" />
                  <circle cx="16" cy="8" r="3" />
                  <circle cx="12" cy="16" r="3" />
                </svg>
              </div>
              <h3>Form the group</h3>
              <p>Students with the same next instructional move sit together — not everyone with the same composite band.</p>
            </article>
            <article className="card card--hover reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3>Teach the next step</h3>
              <p>Teachers stay in charge of the lesson. The software does not score children or replace professional judgment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-software section">
        <div className="container">
          <div className="home-software-inner">
            <div>
              <span className="home-eyebrow">Software</span>
              <h2>{copy.home.heroTitle}</h2>
              <p>{copy.home.heroLead}</p>
            </div>
            <Link href="/aligned" className="btn btn-outline" data-track="cta_aligned">
              See {PRODUCT_NAME}
            </Link>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="home-blog section">
          <div className="container">
            <div className="home-blog-header">
              <span className="home-eyebrow">From the field</span>
              <h2>{copy.insights.title}</h2>
            </div>
            <div className="home-blog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} post={post} hrefPrefix="/insights" />
              ))}
            </div>
            <div className="home-blog-more">
              <Link href="/insights" className="home-link-arrow">
                View all insights
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section section--earth" aria-labelledby="home-close">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 id="home-close">{copy.home.closeTitle}</h2>
          <p className="lead mt-3" style={{ marginInline: "auto" }}>
            {copy.home.closeBody}
          </p>
          <div className="btn-row mt-4" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-terra btn-lg" data-track="cta_close">
              Request a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
