import Link from "next/link";
import type { Metadata } from "next";
import "./home.css";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import BentoHero from "@/components/BentoHero";

export const metadata: Metadata = {
  title: "The Rooted Learner — Practical AI training & classroom tools for teachers of multilingual learners",
  alternates: { canonical: "/" },
};

export const revalidate = 60;

export default async function Home() {
  let latestPosts: BlogPostCard[] = [];
  try {
    const allPosts = await client.fetch<BlogPostCard[]>(blogPostsQuery);
    latestPosts = allPosts.slice(0, 3);
  } catch {
    // Sanity fetch failed — show fallback
  }

  return (
    <>
      <BentoHero />

      <section className="home-software section">
        <div className="container">
          <div className="home-software-inner">
            <div>
              <span className="home-eyebrow">Software</span>
              <h2>Tools we build for the districts we serve</h2>
              <p>
                We don&apos;t just consult — we build. Our software comes from
                real audit findings and real classroom problems.
              </p>
            </div>
            <Link href="/tools" className="btn btn-outline">
              See our software
            </Link>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="home-blog section">
          <div className="container">
            <div className="home-blog-header">
              <span className="home-eyebrow">From the field</span>
              <h2>Latest from the blog</h2>
            </div>
            <div className="home-blog-grid">
              {latestPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <div className="home-blog-more">
              <Link href="/learn/blog" className="home-link-arrow">
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
    </>
  );
}
