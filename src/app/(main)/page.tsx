import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery } from "@/sanity/lib/queries";
import type { BlogPostCard } from "@/sanity/lib/types";
import BlogCard from "@/components/blog/BlogCard";
import assessAlignImg from "./about/projects/images/assessalignpng.png";

export const metadata: Metadata = {
  title: "Greenhouse Schools — Curriculum-Integrity Partner",
  description:
    "We help new, alternative, international, and microschools — and the edtech building for them — design coherent, learner-centered systems from seed. Start with the Greenhouse Audit.",
  alternates: { canonical: "/" },
};

export const revalidate = 60;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

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
      <section className="hero section">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">The Greenhouse · Schools in formation</span>
            <h1 className="display mt-3">
              Most edtech drops students into{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                someone else&apos;s climate.
              </span>
            </h1>
            <p className="lead mt-3">
              We build the greenhouse around the learners you actually have. The
              curriculum-integrity partner for new, alternative, international, and
              microschools — and the edtech growing alongside them.
            </p>
            <div className="btn-row mt-4">
              <Link href="/services#audit" className="btn btn-terra btn-lg">
                Start with the Greenhouse Audit
              </Link>
              <a href="#how" className="btn btn-outline btn-lg">
                See how we work
              </a>
            </div>
            <div className="badge-row mt-4">
              <span className="chip">New &amp; alternative schools</span>
              <span className="chip">International schools</span>
              <span className="chip">Microschools &amp; networks</span>
              <span className="chip">EdTech startups</span>
            </div>
          </div>
          <div className="reveal">
            <div className="ph" style={{ minHeight: "clamp(320px, 42vw, 460px)", padding: 0, overflow: "hidden" }}>
              <Image
                src="/images/homepage-hero.png"
                alt="Sunlight filtering through a greenhouse"
                width={800}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight section--beige">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">The bet</span>
              <h2 className="h-lg mt-3">
                A whole generation of schools is being built right now — on mission and
                model, with no system underneath.
              </h2>
            </div>
            <div className="reveal stack">
              <p className="muted">
                Microschools, new charters, international schools, and the edtech serving
                them are growing fast. Most launched on a founder&apos;s &ldquo;why&rdquo; — and a
                learner promise — before anyone built the curriculum, assessment, and access
                systems that make the promise real.
              </p>
              <p className="muted">
                That gap isn&apos;t a flaw. It&apos;s an opening. A new school can say yes in a
                week and has the gap by definition. So we read the climate first, then build
                exactly what the crop needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="who">
        <div className="container">
          <div className="section-head text-center reveal" style={{ marginInline: "auto" }}>
            <span className="eyebrow eyebrow--center">Who grows here</span>
            <h2 className="h-xl mt-3">One niche. Four kinds of greenhouse.</h2>
            <p className="lead mx-auto mt-3" style={{ maxWidth: "54ch" }}>
              They share one trait: they&apos;re still forming. Which means there&apos;s still time
              to build the system right — for the students they&apos;ll actually serve.
            </p>
          </div>
          <div className="grid grid-4 mt-6">
            {[
              { title: "New & alternative", desc: "Founding teams designing competency-based, hybrid, and forest/Montessori models from scratch.", icon: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /> },
              { title: "International", desc: "IB, Cambridge, and American schools abroad building future-ready, globally-minded systems.", icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></> },
              { title: "Microschools & networks", desc: "ESA-, voucher-, and tax-credit-funded models that need a real system under new public scrutiny.", icon: <path d="M4 21V9l5-3 5 3v12M14 21V13l4-2 2 1.2V21M2 21h20" /> },
              { title: "EdTech startups", desc: "Personalization platforms that have a product but no curriculum credibility. We're the integrity layer.", terra: true, icon: <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" /> },
            ].map((card) => (
              <article key={card.title} className="card card--hover reveal">
                <div className={`card-icon${card.terra ? " card-icon--terra" : ""}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{card.icon}</svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section--earth section">
        <div className="container glass" style={{ paddingBlock: "clamp(1rem, 3vw, 2rem)" }}>
          <div className="container--narrow text-center" style={{ paddingInline: 0, marginInline: "auto" }}>
            <span className="eyebrow eyebrow--center reveal">The question only we ask</span>
            <blockquote className="pullquote mt-4 reveal">
              &ldquo;Are your multilingual and diverse learners actually served by your model — or
              just enrolled in it?&rdquo;
            </blockquote>
            <p className="lead mx-auto mt-4 reveal" style={{ maxWidth: "52ch" }}>
              No one else opens with that question. It&apos;s the one that gets us the audit — and
              the one that keeps the child at the end of the chain visible the whole way through.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How every engagement works</span>
            <h2 className="h-xl mt-3">Read the climate. Then build for it.</h2>
            <p className="lead mt-3" style={{ maxWidth: "50ch" }}>
              No menus, no generic proposals. The same diagnostic engine, pointed at a school
              that&apos;s still forming.
            </p>
          </div>
          <div className="steps mt-6">
            {[
              { title: "Audit", desc: "A 2–3 week fixed-scope diagnostic. We map vision-to-system fit, the real learner model, curriculum, assessment, and tech stack — and hand you a findings report plus a prioritized roadmap." },
              { title: "Build", desc: "Prescribed by the audit: curriculum architecture, ELD/multilingual overlays, standards-to-resource maps, AI-integrated workflows, and the custom tools that don't exist yet." },
              { title: "Implement", desc: "Launch support, PD for new staff, and coaching cycles — until the system actually works in classrooms, not just on paper." },
            ].map((step) => (
              <div key={step.title} className="step reveal">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 reveal">
            <Link href="/services" className="link-arrow">
              See the full engagement model <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section--beige section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The offer ladder</span>
            <h2 className="h-xl mt-3">Growth is built into the deliverable.</h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              The audit report ends where the money starts — the last page is the Build +
              Implement roadmap, not a separate sales call.
            </p>
          </div>
          <div className="ladder mt-6">
            <div className="ladder-step ladder-step--feature reveal">
              <span className="ladder-stage">Stage 01 · Clarity</span>
              <h3>The Greenhouse Audit</h3>
              <p className="mt-2">A fixed-scope diagnostic of a school still in formation. Findings report + a roadmap that prices the next two phases.</p>
              <div className="mt-3"><span className="chip">2–3 weeks</span></div>
            </div>
            <div className="ladder-step reveal">
              <span className="ladder-stage">Stage 02 · Build</span>
              <h3>Build what fits</h3>
              <p className="mt-2">Curriculum &amp; pathway architecture, ELD overlays, standards-to-resource maps, AI workflows, AssessAlign.</p>
            </div>
            <div className="ladder-step reveal">
              <span className="ladder-stage">Stage 03 · Implement</span>
              <h3>Make it work</h3>
              <p className="mt-2">PD, coaching, and measurement until the system holds up in real classrooms — and an optional data partnership.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">Proof of work</span>
              <h2 className="h-lg mt-3">We build the tools we recommend.</h2>
              <p className="muted mt-3">
                AssessAlign is a standards-grounded, adaptive assessment and curriculum engine —
                built to solve a problem we were living in the classroom. The same architecture
                now points at any framework: state standards, IB, Cambridge, or competency-based.
              </p>
              <ul className="tick-list mt-4">
                <li><CheckIcon />Shorter passages, standards-aligned questions</li>
                <li><CheckIcon />Actionable analytics teachers will actually use</li>
                <li><CheckIcon />Framework-agnostic — built for schools without a single shared standard</li>
              </ul>
              <div className="btn-row mt-4">
                <Link href="/tools/assessalign" className="btn btn-primary">Explore AssessAlign</Link>
                <Link href="/tools" className="btn btn-ghost">All the tools we build →</Link>
              </div>
            </div>
            <div className="reveal">
              <div className="ph ph--earth" style={{ minHeight: "clamp(300px, 38vw, 420px)", padding: 0, overflow: "hidden" }}>
                <Image
                  src={assessAlignImg}
                  alt="AssessAlign dashboard"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--earth-deep section">
        <div className="container glass">
          <div className="container--narrow text-center" style={{ marginInline: "auto", paddingInline: 0 }}>
            <span className="eyebrow eyebrow--center reveal">The reframe</span>
            <h2 className="h-xl mt-3 reveal" style={{ color: "#fff" }}>
              This was never about the ideal classroom.
            </h2>
            <p className="lead mx-auto mt-3 reveal" style={{ maxWidth: "50ch" }}>
              It&apos;s about the conditions these learners actually need to grow. Roots keep them
              grounded in who they are — language, identity, community. The greenhouse is what we
              build around them. We&apos;re the grower who reads the climate before adjusting it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Two ways in</span>
            <h2 className="h-xl mt-3">Build the system — or stock the shelves.</h2>
          </div>
          <div className="grid grid-2 mt-6">
            <article className="card card--hover reveal" style={{ display: "flex", flexDirection: "column" }}>
              <span className="chip-tag">For founders &amp; operators</span>
              <h3 className="mt-2" style={{ fontSize: "var(--text-2xl)" }}>Greenhouse Schools</h3>
              <p className="mt-2">System-level audits, builds, and implementation for schools in formation and the edtech serving them.</p>
              <div className="mt-4">
                <Link href="/services" className="link-arrow">Explore the work <ArrowIcon /></Link>
              </div>
            </article>
            <article className="card card--hover reveal" style={{ display: "flex", flexDirection: "column" }}>
              <span className="chip-tag">For educators</span>
              <h3 className="mt-2" style={{ fontSize: "var(--text-2xl)" }}>Classroom tools &amp; resources</h3>
              <p className="mt-2">Field-tested downloads, the Teacher Toolkit, and the shop — practical resources built from inside the classroom.</p>
              <div className="mt-4">
                <Link href="/learn" className="link-arrow">Browse resources <ArrowIcon /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section--beige section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">From the field</span>
              <h2 className="h-xl mt-3">Naming the problem out loud.</h2>
            </div>
            <div className="grid grid-3 mt-6">
              {latestPosts.map((post) => (
                <div key={post._id} className="reveal">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
            <div className="mt-6 reveal">
              <Link href="/learn/blog" className="link-arrow">
                View all insights <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container text-center">
          <h2 className="h-xl mx-auto reveal" style={{ maxWidth: "18ch" }}>
            The point was never the ideal classroom. It&apos;s the conditions these learners actually need.
          </h2>
          <div className="btn-row reveal mt-4" style={{ justifyContent: "center" }}>
            <Link href="/services#audit" className="btn btn-terra btn-lg">Book the Greenhouse Audit</Link>
            <Link href="/about" className="btn btn-outline btn-lg">Meet the grower</Link>
          </div>
        </div>
      </section>
    </>
  );
}
