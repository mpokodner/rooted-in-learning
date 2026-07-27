"use client";

import { useState } from "react";

const tabs = [
  {
    num: "01",
    label: "The block we audited",
    eyebrow: "Where we looked",
    heading: "We audited WIN — the one block built for intervention",
    body: (
      <>
        What we found wasn&apos;t a bad tool. It was the{" "}
        <strong className="ap-case-highlight">absence of a system</strong>. The
        block existed; the intervention logic behind it didn&apos;t.
      </>
    ),
    cards: [
      {
        text: (
          <>
            Every class ran the same <strong>Newsela passage</strong> and the
            same fluency protocol.
          </>
        ),
      },
      {
        text: (
          <>
            No tie to the <strong>standards being taught</strong> that week or
            the next.
          </>
        ),
      },
      {
        text: (
          <>
            No way to know whether a student needed{" "}
            <strong>reading at all</strong>, rather than math.
          </>
        ),
      },
      {
        text: (
          <>
            Teachers quietly carried <strong>three unpaid jobs</strong>: build
            the groups, invent the intervention, write the items.
          </>
        ),
      },
    ],
  },
  {
    num: "02",
    label: "The finding",
    eyebrow: "What the audit revealed",
    heading: "The intervention block had no diagnostic engine behind it",
    body: "Teachers were grouping students by gut feel, assigning generic passages, and writing their own assessment items every week. The block existed on every schedule — but the system to make it work didn’t.",
    cards: [
      {
        text: (
          <>
            Groups were built on <strong>last month&apos;s data</strong>, not
            this week&apos;s need.
          </>
        ),
      },
      {
        text: (
          <>
            No item bank existed — teachers{" "}
            <strong>hand-wrote every question</strong>.
          </>
        ),
      },
      {
        text: (
          <>
            Passage difficulty was <strong>never calibrated</strong> to the
            standard being assessed.
          </>
        ),
      },
      {
        text: (
          <>
            Admin had <strong>no visibility</strong> into whether the block was
            producing growth.
          </>
        ),
      },
    ],
  },
  {
    num: "03",
    label: "The audit became the spec",
    eyebrow: "From finding to feature",
    heading: "Every audit finding mapped directly to a product requirement",
    body: "We didn’t recommend a vendor. We translated each gap into a spec line, scoped the build to the district’s framework, and started building what the audit prescribed.",
    cards: [
      {
        text: (
          <>
            &ldquo;No item bank&rdquo; became{" "}
            <strong>adaptive item generation</strong> grounded in RAG.
          </>
        ),
      },
      {
        text: (
          <>
            &ldquo;Wrong passages&rdquo; became{" "}
            <strong>right-sized, standards-aligned reading</strong>.
          </>
        ),
      },
      {
        text: (
          <>
            &ldquo;No visibility&rdquo; became{" "}
            <strong>real-time analytics</strong> per student, per standard.
          </>
        ),
      },
      {
        text: (
          <>
            &ldquo;Gut-feel grouping&rdquo; became{" "}
            <strong>diagnostic skill groups</strong> that update automatically.
          </>
        ),
      },
    ],
  },
  {
    num: "04",
    label: "Without the audit",
    eyebrow: "The alternative",
    heading: "A vendor would have sold a product. We diagnosed a system.",
    body: "Without the audit, the district would have purchased a new assessment platform, layered it on top of the same broken workflow, and wondered why results didn’t change.",
    cards: [
      {
        text: (
          <>
            A new tool on the <strong>same broken workflow</strong> produces the
            same results.
          </>
        ),
      },
      {
        text: (
          <>
            Vendor platforms are built for <strong>compliance reporting</strong>,
            not instructional moves.
          </>
        ),
      },
      {
        text: (
          <>
            Teachers would still carry the{" "}
            <strong>invisible labor</strong> of making it work.
          </>
        ),
      },
      {
        text: (
          <>
            The real problem — <strong>absence of a system</strong> — would
            remain undiagnosed.
          </>
        ),
      },
    ],
  },
  {
    num: "05",
    label: "The audit is the product",
    eyebrow: "The result",
    heading: "AssessAlign exists because the audit prescribed it",
    body: "The audit didn’t end with a report. It ended with working software, scoped to one district’s framework, built from the exact gaps the diagnostic engine surfaced. That’s what we mean by proof over proposals.",
    cards: [
      {
        text: (
          <>
            <strong>Shorter passages</strong> that measure comprehension without
            exhausting attention.
          </>
        ),
      },
      {
        text: (
          <>
            Every item <strong>mapped to a standard</strong> — grounded by RAG +
            psychometric architecture.
          </>
        ),
      },
      {
        text: (
          <>
            Reports that point to the{" "}
            <strong>next instructional move</strong>, not just a number.
          </>
        ),
      },
      {
        text: (
          <>
            Framework-agnostic — point it at{" "}
            <strong>any standard set</strong> in the world.
          </>
        ),
      },
    ],
  },
];

export default function ApproachCaseStudy() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="ap-case">
      <div className="container">
        <span className="ap-case-eyebrow">The Audit, in One Real Case</span>
        <h2 className="ap-case-heading">
          How a WIN block became AssessAlign
        </h2>
        <p className="ap-case-sub">
          <em>
            Walk the actual trail. Every screen below is a step we took — from
            what we observed, to the finding that reframed the problem, to the
            tool the audit prescribed. Click through.
          </em>
        </p>

        <div className="ap-case-tabs" role="tablist">
          {tabs.map((t, i) => (
            <button
              key={t.num}
              role="tab"
              aria-selected={i === active}
              className={`ap-case-tab${i === active ? " ap-case-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="ap-case-tab-num">{t.num}</span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="ap-case-panel" role="tabpanel">
          <div className="ap-case-panel-inner">
            <span className="ap-case-panel-eyebrow">{tab.eyebrow}</span>
            <h3 className="ap-case-panel-heading">{tab.heading}</h3>
            <p className="ap-case-panel-body">{tab.body}</p>
            <div className="ap-case-cards">
              {tab.cards.map((card, i) => (
                <div key={i} className="ap-case-card">
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
