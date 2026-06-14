"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    question: "How does pricing work?",
    answer:
      "Every engagement starts with the Greenhouse Audit so we can scope accurately. Build and Implement are priced in your findings report based on what's actually there — and what isn't.",
  },
  {
    question:
      "We're a brand-new school with almost nothing built. Is that a problem?",
    answer:
      "That's the ideal time. A school in formation has the gap by definition — and no bureaucracy fighting the fix. We design the whole system to hold together from day one.",
  },
  {
    question: "Do you work with edtech companies, not just schools?",
    answer:
      "Yes. We act as the curriculum-integrity layer for personalization platforms — auditing fit, advising implementation, and giving you a credible channel into the networks we serve.",
  },
  {
    question: "What's the typical timeline?",
    answer:
      "The audit is 2–3 weeks. Build and Implement depend on scope — typically 4 weeks to 3 months — and are sequenced so each stage earns the next.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes — remote and on-site. International schools are a core part of the Greenhouse Schools niche, especially those building IB, Cambridge, or American-style systems.",
  },
];

const buildCards = [
  {
    title: "Curriculum & pathway architecture",
    desc: "Standards mapping, scope-and-sequence, and applied career pathways that hold together across grade bands.",
    icon: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M4 9h16" />
        <path d="M9 9v10" />
      </>
    ),
  },
  {
    title: "ELD & multilingual overlays",
    desc: "WIDA-aligned scaffolding and access frameworks so multilingual learners are served by the model, not just present in it.",
    icon: (
      <>
        <path d="M5 8h14M5 12h9M5 16h12" />
        <circle cx="18" cy="14" r="3" />
      </>
    ),
  },
  {
    title: "AI-integrated workflows",
    desc: "Thoughtful AI woven into instruction from day one — assistive, not bolted on — with a clear ethics line.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      </>
    ),
  },
  {
    title: "Assessment systems",
    desc: "Mastery and progress measurement that teachers will actually use — standards-aligned and adaptive.",
    icon: <path d="M20 6 9 17l-5-5" />,
  },
  {
    title: "Custom instructional tools",
    desc: "Purpose-built applications for the specific problem your school faces. AssessAlign is one example.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </>
    ),
    terra: true,
    link: "/tools/assessalign",
  },
  {
    title: "Standards-to-resource maps",
    desc: "A living alignment dashboard built for your network — proof we do the thing we advise.",
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
    terra: true,
  },
];

const priceRows = [
  {
    stage: "Greenhouse Audit",
    note: "Entry point · every engagement",
    desc: "2–3 week fixed-scope diagnostic → findings report + roadmap",
    amt: "$4,000–6,500",
  },
  { stage: "Build · Curriculum", desc: "Curriculum & pathway architecture", amt: "$6,000–15,000" },
  { stage: "Build · Access", desc: "ELD / multilingual-ready system", amt: "$4,000–10,000" },
  { stage: "Build · AI & tech", desc: "AI integration & tech-stack design", amt: "$3,000–8,000" },
  { stage: "Build · Custom tool", desc: "AssessAlign-style purpose-built application", amt: "$5,000–25,000" },
  { stage: "Implement", desc: "Launch + PD + coaching cycles", amt: "$10,000–25,000" },
  {
    stage: "Sustain",
    note: "Year 2+ · data partnership",
    desc: "Retainer + the research flywheel",
    amt: "$1,500–3,000/mo",
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const FaqIcon = () => (
  <svg
    className="faq-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
    subscribeNewsletter: false,
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          subject: "consulting",
          source: "services-page",
          subscribeNewsletter: formData.subscribeNewsletter,
        }),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          message: "",
          subscribeNewsletter: false,
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Hero */}
      <section className="section hero" aria-labelledby="svc-heading">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">Greenhouse Schools · the practice</span>
            <h1 id="svc-heading" className="display mt-3">
              Start with the climate.{" "}
              <span className="serif-accent" style={{ color: "var(--terracotta)" }}>
                Not a menu.
              </span>
            </h1>
            <p className="lead mt-3">
              You&apos;re building a school — or the tool that serves one — which
              means there&apos;s still time to build it right for the students
              you&apos;ll actually have. We diagnose where the system needs to
              hold together, then build the pieces that don&apos;t exist yet.
            </p>
            <div className="btn-row mt-4">
              <Link href="/services#audit" className="btn btn-terra btn-lg">
                Book the Greenhouse Audit
              </Link>
              <Link href="/services#ladder" className="btn btn-outline btn-lg">
                See the offer ladder
              </Link>
            </div>
          </div>
          <div className="reveal">
            <div
              className="ph"
              style={{
                minHeight: "clamp(300px, 38vw, 420px)",
                padding: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/services-hero.png"
                alt="Interconnected technology and data systems network"
                width={800}
                height={600}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="section--beige section" id="model" aria-labelledby="svc-model-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How every engagement works</span>
            <h2 id="svc-model-heading" className="h-xl mt-3">
              The same diagnostic engine — pointed at a school in formation.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              No generic proposals. The audit prescribes the build; the build
              prescribes the implementation. Each stage earns the next.
            </p>
          </div>
          <div className="grid grid-3 mt-6">
            <article className="card reveal">
              <span className="ladder-stage">Stage 01</span>
              <h3>Audit</h3>
              <p>
                We map vision-to-system fit, the real learner model, curriculum
                and assessment architecture, and the tech stack — and deliver a
                findings report with a prioritized roadmap.
              </p>
            </article>
            <article className="card reveal">
              <span className="ladder-stage">Stage 02</span>
              <h3>Build</h3>
              <p>
                Prescribed by the audit. Curriculum and pathway architecture,
                multilingual overlays, AI workflows, and custom tools — built
                for your framework, not a generic one.
              </p>
            </article>
            <article className="card reveal">
              <span className="ladder-stage">Stage 03</span>
              <h3>Implement &amp; sustain</h3>
              <p>
                Launch support, PD for new staff, coaching cycles, and an
                optional data partnership that keeps improving the system — and
                feeds the research.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section" id="segments" aria-labelledby="svc-segments-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Who grows here</span>
            <h2 id="svc-segments-heading" className="h-xl mt-3">
              One engine. Tuned to your crop.
            </h2>
          </div>
          <div className="stack-lg mt-6">
            <div className="feature-band reveal">
              <div>
                <span className="chip-tag">New &amp; alternative schools</span>
                <h3 className="h-md mt-2">
                  Build the system before the bureaucracy arrives.
                </h3>
                <p className="muted mt-3">
                  Competency-based, hybrid, Montessori, Waldorf, and forest
                  models often launch on a mission with no curriculum
                  infrastructure underneath. We translate the founder&apos;s
                  &ldquo;why&rdquo; into curriculum, assessment, and pathways
                  that actually hold together — for the learners you&apos;ll
                  actually enroll.
                </p>
              </div>
              <div className="ph" style={{ minHeight: "240px" }}>
                <span className="ph-label">photo · alternative classroom</span>
              </div>
            </div>
            <div className="feature-band feature-band--reverse reveal">
              <div>
                <span className="chip-tag">International schools</span>
                <h3 className="h-md mt-2">
                  Future-ready, globally minded, coherent.
                </h3>
                <p className="muted mt-3">
                  IB, Cambridge, and American schools abroad were willing to be
                  creative — that&apos;s their edge. We help them align global
                  citizenship, high standards, AI and digital literacy, and
                  sustainability into one system instead of a stack of
                  disconnected initiatives.
                </p>
              </div>
              <div className="ph" style={{ minHeight: "240px" }}>
                <span className="ph-label">photo · international school campus</span>
              </div>
            </div>
            <div className="feature-band reveal">
              <div>
                <span className="chip-tag">Microschools &amp; networks</span>
                <h3 className="h-md mt-2">
                  New public money. New scrutiny. No system yet.
                </h3>
                <p className="muted mt-3">
                  ESA-, voucher-, and tax-credit-funded models got public dollars
                  and public accountability in the same breath. For them the
                  audit isn&apos;t a nice-to-have — it&apos;s how they keep
                  their funding and their reputation. One network audit becomes a
                  repeatable template, not fifty cold emails.
                </p>
              </div>
              <div className="ph" style={{ minHeight: "240px" }}>
                <span className="ph-label">photo · microschool cohort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section--beige section" aria-labelledby="svc-build-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Depending on what the audit reveals</span>
            <h2 id="svc-build-heading" className="h-xl mt-3">
              What we build.
            </h2>
          </div>
          <div className="grid grid-3 mt-6">
            {buildCards.map((card) => (
              <article key={card.title} className="card card--hover reveal">
                <div
                  className={`card-icon${card.terra ? " card-icon--terra" : ""}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>
                  {card.link ? (
                    <>
                      {card.desc.split("AssessAlign")[0]}
                      <Link href={card.link}>AssessAlign</Link>
                      {card.desc.split("AssessAlign")[1]}
                    </>
                  ) : (
                    card.desc
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Audit detail + contact form */}
      <section
        className="section--earth section"
        id="audit"
        aria-labelledby="svc-audit-heading"
      >
        <div className="container glass">
          <div className="feature-band">
            <div className="reveal">
              <span className="eyebrow">Stage 01 · the wedge</span>
              <h2 id="svc-audit-heading" className="h-xl mt-3" style={{ color: "#fff" }}>
                The Greenhouse Audit
              </h2>
              <p className="lead mt-3">
                A 2–3 week, fixed-scope diagnostic of a school still in
                formation. The easiest yes a founder ever gives — and the door to
                everything that follows.
              </p>
              <ul className="tick-list mt-4">
                <li>
                  <CheckIcon />
                  Vision-to-system alignment scan
                </li>
                <li>
                  <CheckIcon />
                  Learner-model &amp; multilingual access review
                </li>
                <li>
                  <CheckIcon />
                  Curriculum, assessment &amp; tech-stack diagnostic
                </li>
                <li>
                  <CheckIcon />
                  Findings report + a roadmap that prices Build &amp; Implement
                </li>
              </ul>
            </div>
            <div className="reveal">
              <div
                className="card"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.16)",
                }}
              >
                <h3 style={{ color: "#fff" }}>Start the audit</h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Tell us what you&apos;re building. We&apos;ll tell you what it
                  takes to make it hold together.
                </p>
                <form className="stack-sm" onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <input
                      className="footer-capture-input"
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="First name"
                      aria-label="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                    <input
                      className="footer-capture-input"
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Last name"
                      aria-label="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <input
                    className="footer-capture-input"
                    style={{ width: "100%" }}
                    type="email"
                    placeholder="you@yourschool.org"
                    aria-label="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <input
                    className="footer-capture-input"
                    style={{ width: "100%" }}
                    type="text"
                    placeholder="School / organization"
                    aria-label="Organization"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                  />
                  <textarea
                    className="footer-capture-input"
                    style={{
                      width: "100%",
                      minHeight: "90px",
                      resize: "vertical",
                    }}
                    placeholder="What are you building?"
                    aria-label="What are you building"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "var(--text-xs)",
                      color: "rgba(255,255,255,0.6)",
                      cursor: "pointer",
                      lineHeight: 1.5,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.subscribeNewsletter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subscribeNewsletter: e.target.checked,
                        })
                      }
                      style={{ marginTop: "0.2rem", accentColor: "var(--terracotta-light)" }}
                    />
                    Also sign me up for educator updates and free resources
                  </label>
                  <button
                    className="btn btn-terra"
                    type="submit"
                    style={{ width: "100%" }}
                    disabled={formStatus === "loading"}
                  >
                    {formStatus === "loading"
                      ? "Sending..."
                      : "Request scope & pricing"}
                  </button>
                  {formStatus === "success" && (
                    <p className="note" style={{ color: "var(--terracotta-light)" }}>
                      Message sent! We&apos;ll be in touch soon.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="note" style={{ color: "#f5a89a" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="note mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Or email{" "}
                  <a
                    href="mailto:admin@therootedlearner.com"
                    style={{ color: "var(--terracotta-light)" }}
                  >
                    admin@therootedlearner.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer ladder / pricing */}
      <section className="section" id="ladder" aria-labelledby="svc-ladder-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Pricing architecture</span>
            <h2 id="svc-ladder-heading" className="h-xl mt-3">
              The report ends where the money starts.
            </h2>
            <p className="lead mt-3" style={{ maxWidth: "54ch" }}>
              Every engagement is scoped from the audit. The last page of your
              findings names and prices the next two phases — so expansion is
              handed to you, not sold to you.
            </p>
          </div>
          <div className="card reveal mt-6" style={{ padding: 0, overflow: "hidden" }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>What it is</th>
                  <th>Investment</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((row) => (
                  <tr key={row.stage}>
                    <td>
                      <span className="price-stage">{row.stage}</span>
                      {row.note && (
                        <>
                          <br />
                          <span className="note">{row.note}</span>
                        </>
                      )}
                    </td>
                    <td>{row.desc}</td>
                    <td className="price-amt">{row.amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note mt-3 reveal">
            Outcome-priced, not hourly. 50% deposit before work begins. Pricing
            is confirmed in your audit findings.
          </p>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section--beige section" id="partners" aria-labelledby="svc-partners-heading">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Partnership plays</span>
            <h2 id="svc-partners-heading" className="h-xl mt-3">
              Borrowed reach, kept honest.
            </h2>
          </div>
          <div className="grid grid-2 mt-6">
            <article className="card reveal">
              <span className="chip-tag">EdTech partners · channel</span>
              <h3 className="mt-2" style={{ fontSize: "var(--text-2xl)" }}>
                The curriculum-integrity layer
              </h3>
              <p className="mt-3 muted">
                Personalization platforms have a product and no curriculum
                credibility. We&apos;re the partner who tells a network whether a
                tool actually fits their crop — and recommends against it when it
                doesn&apos;t. That honesty is the brand. You get a credible,
                warm channel into the networks we audit; the school gets a real
                build-vs-buy decision instead of a sales pitch.
              </p>
              <div className="mt-4">
                <Link href="/about#contact" className="link-arrow">
                  Explore a partnership <ArrowIcon />
                </Link>
              </div>
            </article>
            <article className="card reveal">
              <span className="chip-tag">Ecosystem · halo</span>
              <h3 className="mt-2" style={{ fontSize: "var(--text-2xl)" }}>
                Credibility, not a paycheck
              </h3>
              <p className="mt-3 muted">
                We pursue recognized educator and innovation programs and align
                our Build framework to challenge-based learning — not for
                revenue, but for the rooms they put us in. Being credibly inside
                the ecosystems that innovative schools chase puts us in front of
                them as a peer, not a vendor. The audit is still the product.
              </p>
              <div className="mt-4">
                <Link href="/about" className="link-arrow">
                  How we earn the right to be believed <ArrowIcon />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="svc-faq-heading">
        <div className="container container--narrow">
          <div
            className="section-head text-center reveal"
            style={{ marginInline: "auto" }}
          >
            <span className="eyebrow eyebrow--center">Questions</span>
            <h2 id="svc-faq-heading" className="h-lg mt-3">
              Before you book
            </h2>
          </div>
          <div className="mt-6 reveal">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className={`faq-item${isOpen ? " open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    <FaqIcon />
                  </button>
                  <div
                    className="faq-a"
                    style={{ maxHeight: isOpen ? "12rem" : 0 }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section--earth-deep section">
        <div className="container glass text-center">
          <h2
            className="h-xl mx-auto reveal"
            style={{ color: "#fff", maxWidth: "20ch" }}
          >
            Tell us what you&apos;re building. We&apos;ll read the climate first.
          </h2>
          <div className="btn-row reveal mt-4" style={{ justifyContent: "center" }}>
            <Link href="/services#audit" className="btn btn-terra btn-lg">
              Book the Greenhouse Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
