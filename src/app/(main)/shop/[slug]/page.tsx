import type { Metadata } from "next";
import Link from "next/link";
import "./product.css";

/* ─── Demo data — replace with Supabase/Stripe fetch ─── */
const demoProduct = {
  title: "AI-Powered Lesson Planning Template Pack",
  subtitle: "10 ready-to-customize templates that cut your planning time in half",
  price: 1200,
  originalPrice: 1800,
  category: "Templates",
  format: "Digital Download · PDF + Google Docs",
  gradeRange: "K–8 Adaptable",
  standardsAligned: true,
  description:
    "Stop staring at a blank planning page. This template pack gives you 10 research-backed, AI-enhanced lesson planning frameworks that work across subjects and grade levels. Each template includes built-in differentiation tiers, assessment checkpoints, and AI prompt suggestions so you can plan smarter — not longer.",
  features: [
    { title: "10 Planning Templates", desc: "Unit plans, daily lessons, small groups, intervention, and more." },
    { title: "AI Prompt Library", desc: "50+ tested prompts for ChatGPT and Claude to accelerate each template." },
    { title: "Differentiation Built-In", desc: "Every template includes tiers for intervention, on-level, and enrichment." },
    { title: "Standards Mapping Guide", desc: "Alignment checklists for Common Core and state-specific standards." },
  ],
  includes: [
    "10 editable lesson plan templates (PDF + Google Docs)",
    "50+ AI prompt cards organized by planning phase",
    "Differentiation planning matrix",
    "Standards alignment quick-reference",
    "Video walkthrough (12 min)",
    "Lifetime updates",
  ],
  testimonials: [
    {
      quote: "This template pack literally changed my Sundays. I went from 3 hours of planning to 45 minutes.",
      author: "Sarah K.",
      role: "4th Grade Teacher, Virginia",
    },
    {
      quote: "The AI prompts are genius. I was skeptical, but they actually produce usable first drafts I can refine in minutes.",
      author: "James R.",
      role: "Middle School ELA, Texas",
    },
  ],
  faq: [
    { q: "What format are the templates?", a: "You get both PDF and Google Docs versions. The Google Docs are fully editable — just make a copy and customize." },
    { q: "Do these work for all grade levels?", a: "The templates are designed to be adaptable for K–8. Each includes guidance notes for modifying by grade band." },
    { q: "Are the AI prompts specific to ChatGPT?", a: "The prompts work with any major AI tool — ChatGPT, Claude, Gemini, or Copilot. Each prompt includes tips for getting the best results." },
    { q: "What if I'm not satisfied?", a: "100% money-back guarantee within 30 days, no questions asked." },
  ],
};

const relatedProducts = [
  {
    title: "Differentiated Reading Intervention Kit",
    price: "$18",
    category: "Intervention",
    slug: "/shop/reading-intervention-kit",
  },
  {
    title: "Formative Assessment Quick-Checks Bundle",
    price: "$9",
    category: "Assessment",
    slug: "/shop/formative-assessment-bundle",
  },
  {
    title: "Multilingual Learner Scaffolding Pack",
    price: "$14",
    category: "ML Support",
    slug: "/shop/ml-scaffolding-pack",
  },
];

function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${demoProduct.title} | The Rooted Learner Shop`,
    description: demoProduct.subtitle,
    openGraph: {
      title: demoProduct.title,
      description: demoProduct.subtitle,
      type: "website",
      url: `https://therootedlearner.com/shop/${slug}`,
    },
    alternates: {
      canonical: `https://therootedlearner.com/shop/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  const savings = demoProduct.originalPrice - demoProduct.price;
  const savingsPercent = Math.round((savings / demoProduct.originalPrice) * 100);

  return (
    <div className="pp-page">
      {/* ─── Breadcrumb ─── */}
      <nav className="pp-breadcrumb" aria-label="Breadcrumb">
        <div className="pp-container">
          <ol className="pp-breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li aria-current="page">{demoProduct.title}</li>
          </ol>
        </div>
      </nav>

      {/* ─── Product Hero: Info + Purchase ─── */}
      <section className="pp-hero">
        <div className="pp-container">
          <div className="pp-hero-layout">
            {/* Product Visual */}
            <div className="pp-visual">
              <div className="pp-visual-card">
                <div className="pp-visual-badge">{demoProduct.category}</div>
                <div className="pp-visual-mockup">
                  <div className="pp-mockup-pages">
                    <div className="pp-mockup-page pp-mockup-page--back" />
                    <div className="pp-mockup-page pp-mockup-page--mid" />
                    <div className="pp-mockup-page pp-mockup-page--front">
                      <div className="pp-mockup-dots"><span /><span /><span /></div>
                      <div className="pp-mockup-title-bar" />
                      <div className="pp-mockup-lines">
                        <span style={{ width: "100%" }} />
                        <span style={{ width: "75%" }} />
                        <span style={{ width: "90%" }} />
                        <span style={{ width: "60%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pp-visual-format">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{demoProduct.format}</span>
                </div>
              </div>
            </div>

            {/* Product Info + Purchase */}
            <div className="pp-info">
              <div className="pp-info-badges">
                <span className="pp-badge pp-badge--category">{demoProduct.category}</span>
                <span className="pp-badge pp-badge--grade">{demoProduct.gradeRange}</span>
                {demoProduct.standardsAligned && (
                  <span className="pp-badge pp-badge--standards">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    Standards-Aligned
                  </span>
                )}
              </div>

              <h1 className="pp-title">{demoProduct.title}</h1>
              <p className="pp-subtitle">{demoProduct.subtitle}</p>

              {/* Price */}
              <div className="pp-price-block">
                <span className="pp-price">{formatPrice(demoProduct.price)}</span>
                {demoProduct.originalPrice > demoProduct.price && (
                  <>
                    <span className="pp-price-original">{formatPrice(demoProduct.originalPrice)}</span>
                    <span className="pp-price-save">Save {savingsPercent}%</span>
                  </>
                )}
              </div>

              {/* Purchase CTA */}
              <button className="pp-buy-btn">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                Add to Cart
              </button>

              {/* Trust Signals */}
              <div className="pp-trust-row">
                <div className="pp-trust-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Instant Download</span>
                </div>
                <div className="pp-trust-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="pp-trust-item">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Lifetime Updates</span>
                </div>
              </div>

              {/* Description */}
              <div className="pp-description">
                <p>{demoProduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section className="pp-includes section" aria-labelledby="includes-heading">
        <div className="pp-container">
          <div className="pp-section-header">
            <h2 id="includes-heading" className="pp-section-title">What&apos;s Included</h2>
          </div>
          <div className="pp-includes-grid">
            <div className="pp-features-col">
              {demoProduct.features.map((f) => (
                <div key={f.title} className="pp-feature">
                  <div className="pp-feature-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="pp-feature-title">{f.title}</h3>
                    <p className="pp-feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pp-checklist-col">
              <div className="pp-checklist-card">
                <h3 className="pp-checklist-heading">Everything You Get</h3>
                <ul className="pp-checklist">
                  {demoProduct.includes.map((item) => (
                    <li key={item}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="pp-checklist-btn">
                  Add to Cart — {formatPrice(demoProduct.price)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="pp-testimonials section" aria-labelledby="reviews-heading">
        <div className="pp-container">
          <div className="pp-section-header">
            <h2 id="reviews-heading" className="pp-section-title">What Educators Are Saying</h2>
          </div>
          <div className="pp-testimonials-grid">
            {demoProduct.testimonials.map((t) => (
              <div key={t.author} className="pp-testimonial">
                <div className="pp-testimonial-stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="pp-star" aria-hidden="true">
                      <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="pp-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="pp-testimonial-meta">
                  <p className="pp-testimonial-author">{t.author}</p>
                  <p className="pp-testimonial-role">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="pp-faq section" aria-labelledby="faq-heading">
        <div className="pp-container">
          <div className="pp-section-header">
            <h2 id="faq-heading" className="pp-section-title">Frequently Asked Questions</h2>
          </div>
          <div className="pp-faq-list">
            {demoProduct.faq.map((item) => (
              <details key={item.q} className="pp-faq-item">
                <summary className="pp-faq-question">{item.q}</summary>
                <p className="pp-faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── You Might Also Like ─── */}
      <section className="pp-related section" aria-labelledby="related-heading">
        <div className="pp-container">
          <div className="pp-related-header">
            <h2 id="related-heading" className="pp-section-title">You Might Also Like</h2>
            <Link href="/shop" className="pp-related-viewall">
              View All Products
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="pp-related-grid">
            {relatedProducts.map((p) => (
              <Link key={p.title} href={p.slug} className="pp-related-card">
                <div className="pp-related-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className="pp-related-category">{p.category}</span>
                <h3 className="pp-related-title">{p.title}</h3>
                <div className="pp-related-footer">
                  <span className="pp-related-price">{p.price}</span>
                  <span className="pp-related-cta">View &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="pp-final-cta">
        <div className="pp-container">
          <div className="pp-final-inner">
            <h2 className="pp-final-title">Need something custom?</h2>
            <p className="pp-final-desc">
              I also offer consulting for curriculum design, technology integration, and AI implementation.
            </p>
            <Link href="/consulting" className="pp-final-btn">
              Explore Consulting
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
