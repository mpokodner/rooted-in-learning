# Contracts, DPAs & District Agreements

**Contents**
1. The document set The Rooted Learner needs
2. What a DPA must contain
3. Red-flag clause library — reviewing a district's paper
4. Red-flag clause library — reviewing her own drafts
5. Comparing a district's agreement to her template
6. Scope-of-work agreements for consulting engagements
7. NDAs
8. Review workflow

---

## 1. The document set

| Document | Purpose | Priority |
|---|---|---|
| **Privacy policy** (public) | Required by COPPA; first thing a district reviewer opens | Before any district conversation |
| **Terms of service** (public) | Governs the SaaS relationship, limits liability | Before any paid user |
| **COPPA direct notice to schools** | Supports the school-consent pathway; must reflect the 2025 amendments | Before any under-13 user |
| **Data Protection Agreement / student data privacy addendum** | The document that makes her a FERPA school official | Before any student record |
| **Master services agreement** | Umbrella commercial terms for district clients | Before first district contract |
| **Scope-of-work agreement** | Per-engagement consulting terms | Before any consulting work begins |
| **Mutual NDA** | For discovery conversations and collaborators | Keep one ready |
| **Written information security program (WISP)** | Required by amended COPPA Rule; requested in security reviews | Before first district contract |
| **Sub-processor register** | Names every service touching student data | Before first district contract |
| **Independent contractor agreement** | If anyone is ever paid to build or write | Before hiring anyone |

**Start from the SDPC National Data Privacy Agreement (NDPA)** rather than a bespoke DPA. Many districts already use it, state-specific exhibits handle local variation, and arriving with NDPA-aligned paper removes weeks from procurement. For a one-person business with 8–10 hours a week, this is the highest-leverage document decision available.

---

## 2. What a DPA must contain

Whether reviewing a district's version or drafting her own, these are the load-bearing provisions:

1. **Definitions** — student data, education records, de-identified data, aggregate data, personally identifiable information. Defined terms drive every other clause; a broad "student data" definition can sweep in analytics she needs.
2. **Purpose limitation** — data used solely to provide the contracted services for that district's educational purposes. Narrow and specific.
3. **School official designation** — express statement that the vendor is a school official with a legitimate educational interest under §99.31(a)(1)(i)(B), performing a function the district would otherwise use employees for, under the district's direct control.
4. **Ownership** — the district (or parent/student) owns student data. The vendor holds it, never owns it. This should be unambiguous.
5. **No secondary use** — no advertising, no targeted marketing, no profiling outside the educational purpose, no sale, no model training on student data. State the model-training prohibition explicitly; a generic "no secondary use" clause invites argument later.
6. **Sub-processors** — named list, flow-down of the same obligations, notice before adding new ones.
7. **Security** — specific controls (encryption in transit and at rest, RBAC, MFA, logging), not just "reasonable security."
8. **Breach notification** — timing, content, recipient, and cooperation duties. Read the number carefully; 24 hours is a real operational commitment.
9. **Data return and deletion** — on termination and on district request, with a deletion certificate. Specify the timeline.
10. **Audit and inspection rights** — what the district may inspect and on what notice. Reasonable scope matters here; unlimited on-site audit rights are burdensome for a solo operator.
11. **Parent/student rights support** — how the vendor supports inspection, amendment, and access requests routed through the district.
12. **Disclosure logging** — commitment to log disclosures in §99.32-shaped fields and make them available to the district.
13. **Term, termination, survival** — which obligations survive (confidentiality, deletion, indemnity).
14. **Insurance** — often specified by the district; check whether the required limits are affordable before signing.
15. **Indemnification and liability cap** — see §3.

---

## 3. Red-flag clause library — reviewing a district's paper

District agreements are drafted to protect the district. Some terms are standard and fine; others are genuinely dangerous for a solo LLC. Flag with severity:

🔴 **Do not sign as written**

- **Uncapped liability, or a cap disconnected from contract value.** A $4,000 engagement should not carry unlimited exposure. Ask for a cap at fees paid, or a defined multiple. This is the single most important commercial term for a small vendor.
- **Uncapped indemnification**, especially indemnifying the district for its own negligence or for third-party claims outside her control.
- **Full IP assignment of deliverables.** A district that wants to own the ELA passages and item bank outright would take the reusable core of the business. Grant a **broad, perpetual, non-exclusive license** to use, modify, and distribute internally instead — that gives the district everything it actually needs. This is negotiable far more often than vendors assume.
- **Unlimited audit rights** with no notice, no scope limit, and vendor-borne cost.
- **Obligations that are technically impossible** as built — e.g., a 4-hour breach notification, or data residency in a state where her hosting isn't.
- **Personal guarantees** or terms that pierce the LLC.

🟡 **Negotiate**

- **Breach notification under 24 hours.** Push to 24–72 hours from *confirmed* discovery, and define "discovery."
- **Named-insurance requirements** exceeding what she carries — check the cost before agreeing.
- **Most-favored-nation pricing** clauses, which constrain future pricing across all clients.
- **Automatic renewal with unfavorable terms** or no price adjustment mechanism.
- **Assignment restrictions** that would block a future sale of the business.
- **Governing law and venue** in a distant state — usually conceded to districts, but know you're conceding it.
- **Acceptance criteria that are subjective** — "to the district's satisfaction" with no defined standard.
- **Unlimited revisions** in a consulting SOW. Cap them; this is the most common way fixed-fee engagements go underwater.

🟢 **Standard, generally acceptable**

- District ownership of student data.
- Prohibitions on advertising, sale, and profiling.
- Deletion on termination with certificate.
- Confidentiality obligations.
- Compliance-with-law representations.
- Named sub-processor disclosure.

---

## 4. Red-flag clause library — reviewing her own drafts

Auditors and district reviewers flag these in *vendor* paper:

- **"We may use data to improve our services"** or **"for any lawful purpose."** These are the classic findings. They break the FERPA school-official framing and the COPPA educational-purpose limitation. Replace with narrow, enumerated purposes tied to the specific service.
- **Silence on model training.** If the ToS doesn't say student data is never used to train models, a reviewer will assume it might be.
- **Undefined retention.** "As long as necessary" is not a retention policy; the amended COPPA Rule requires a written policy with stated timeframes.
- **Missing sub-processor list.** Reviewers ask. Not having one reads as not knowing.
- **Consent burden pushed to teachers.** Making the classroom teacher click through parental consent is precisely the pattern the FTC pursued in the Edmodo matter.
- **Boilerplate borrowed from a general SaaS template.** Non-education ToS language ("we may share with partners," "we may transfer data in a merger") is disqualifying in a K-12 context without carve-outs.

---

## 5. Comparing a district's agreement to her template

Output format — difference table, most consequential first:

| # | Topic | District's version | My template | Gap significance | Position |
|---|---|---|---|---|---|
| 1 | Liability cap | Uncapped | Fees paid in prior 12 months | 🔴 Material | Hold — propose cap at 1× annual fees |
| 2 | Deliverable IP | Full assignment to district | License to district, TRL retains ownership | 🔴 Material | Hold — offer perpetual non-exclusive license |
| 3 | Breach notice | 24 hours | 72 hours | 🟡 Operational | Concede if incident process supports it |

End with three buckets: **hold** (walk away rather than sign), **trade** (concede in exchange for something), **concede** (not worth the negotiating capital). District procurement moves slowly; spending capital on 🟢 items delays revenue.

---

## 6. Scope-of-work agreements for consulting

Per `rooted-learner-business`, every engagement needs signed paper before work begins. Essential terms:

- **Scope, stated as deliverables**, not hours. List what is included and — separately and explicitly — what is not.
- **Revision limit.** Two rounds is standard. Additional rounds at a stated hourly rate.
- **Payment terms.** 50% deposit before work begins (already the business rule), balance on delivery. Net 30 for district POs, with late fees stated.
- **IP ownership.** The core question: does the district own the custom deliverable, or license it? Default position — TRL retains ownership of underlying frameworks, templates, item banks, and methodology; district receives a perpetual, non-exclusive, internal-use license to the specific deliverable. Without this, each engagement gives away the reusable asset.
- **Confidentiality**, mutual.
- **No student data clause** for engagements that don't need it — the cleanest position is often "no student PII will be shared under this SOW." If none is needed, say so; it removes the DPA requirement entirely and shortens procurement.
- **Termination and kill fee** — what's owed if the district cancels mid-engagement.
- **Liability cap** at fees paid.
- **Independent contractor status** — she is not a district employee for this work.

---

## 7. NDAs

Keep a **mutual** NDA ready. Districts sometimes send one-way NDAs binding only the vendor; make it mutual when a discovery conversation involves her methodology.

Watch for, in NDAs sent to her:
- **Embedded non-competes or non-solicits.** These belong in employment agreements, not NDAs, and can quietly block her from working with other districts in a region. 🔴
- **Missing standard carveouts** — information already known, independently developed, publicly available, or received from a third party without restriction. Without these, an NDA can arguably capture her own pre-existing frameworks. 🔴
- **Perpetual terms.** 3–5 years is normal; perpetual confidentiality for non-trade-secret information is overreach. 🟡
- **Residuals clauses** — sometimes helpful, sometimes a giveaway depending on direction. Read carefully.
- **Ownership language sneaking in.** An NDA should govern confidentiality, not assign IP.

---

## 8. Review workflow

When Michelle brings a contract:

1. **Read the actual document.** Ask for the file if it wasn't provided. Never analyze from a description.
2. **Identify the document type and who drafted it** — that predicts where the asymmetries are.
3. **Plain-English summary first** — what this obligates her to do, in a paragraph, before any clause analysis. She should be able to stop reading there and understand the deal.
4. **Clause-by-clause flag table** with severity and suggested redline language.
5. **Commercial terms sanity check** — is the liability cap proportionate to the fee? Is the payment schedule survivable? Are the insurance requirements affordable?
6. **Take to counsel** — the 2–5 questions that genuinely need a lawyer.

Never conclude that a contract is acceptable overall. State what was reviewed, what was found, and what remains open. The output is input to a decision Michelle and her attorney make, not the decision itself.

### Take to counsel
- Review of the DPA template, MSA, and SOW template before first use.
- Whether the liability caps and indemnity structure are appropriate for the LLC's asset position and insurance.
- Whether the IP license grant in the SOW adequately preserves ownership of reusable frameworks and item banks.
- Whether any state where she has clients requires contract terms beyond the NDPA baseline.