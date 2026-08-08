---
name: ferpa-legal-guidance
description: Use this as a fast SELF-CHECK before Michelle puts anything involving student data, an AI tool, or a teacher-facing AI workflow into the world — a product, prompt, video, template, blog post, or app feature. It screens for FERPA / student-privacy risk and for responsible-AI problems and returns a clear GREEN / YELLOW / RED verdict with concrete fixes. Trigger on "is this FERPA-safe," "can I put this in Claude/Gemini," "check this for privacy," "review my AI workflow," "is this student data okay," "before I publish/ship this," "de-identify this," or any moment student information or an AI step is about to be used, taught, or shipped. This is a screening aid, NOT legal advice. Compose with rooted-learner-legal (authoritative legal analysis), rooted-learner-tpt (where AI/products get built), and rooted-learner-brand (claims/framing).
---

# The Rooted Learner — FERPA & AI Self-Check

A fast, repeatable screen Michelle can run on her own work before it ships. It catches the common student-privacy and responsible-AI mistakes and tells her when to slow down and escalate.

This is not legal advice. It's a structured self-check that produces a decision-ready summary and, when needed, a short list of questions for rooted-learner-legal and a real attorney/DPO. When in doubt, treat it as RED and escalate. rooted-learner-legal is the authoritative internal skill; this one is the quick gate in front of it.

Quick-use instruction: Paste or describe the thing (product, prompt, workflow, video, feature). Run the two screens — Student-Data/FERPA (§2) and Responsible-AI (§3) — then return a GREEN / YELLOW / RED verdict (§4) with specific fixes. Any single RED trigger = RED overall.

## 1. What This Screens (and what it can't)

**Screens for:**
- Student personally identifiable information (PII) exposure — in prompts, products, screenshots, videos, or app features.
- FERPA-style red flags in how student data is handled, shared, or shown.
- Responsible-AI problems: PII into third-party AI tools, fabricated sources/standards, over-claiming, deficit framing, insecure storage.

**Cannot do:** give legal advice, certify compliance, replace a signed DPA/attorney review, or judge a specific district's contract terms. Those go to rooted-learner-legal → attorney/DPO.

Orientation note (verify, don't assume): FERPA governs schools/districts and their "school officials"; a solo vendor's obligations usually flow through the district's contract/DPA, plus COPPA/PPRA and state laws (e.g., Maryland). This skill flags exposure; rooted-learner-legal handles the actual framework and any current-law check.

## 2. Screen A — Student Data / FERPA Red Flags

Ask each; any "yes" without a cleared basis → at least YELLOW, often RED:

1. **Real student PII present?** Names, IDs, DOB, photos, voices, IEP/ELL status, scores tied to a child, or free-text that re-identifies. (Combinations re-identify even without names.)
2. **Is it going somewhere it shouldn't?** Into a prompt, a public product, a screenshot, a demo video, a social post, or a third-party tool?
3. **Is there a lawful, cleared basis?** Signed DPA / district authorization / parent consent on file for THIS use? (No basis + real data = RED.)
4. **Could a viewer re-identify a student?** Small class + demographics + context can identify even "anonymized" work.
5. **Is data stored/transmitted securely?** Access-controlled, minimized, deletable — not sitting in a shared drive or an AI tool's training set.
6. **Sensitive subgroup data?** ELL/ML status, disability, discipline, FRL — extra caution; extra escalation.

Default move: if a product/video/prompt only needs an example, use synthetic or fully de-identified data (see §5). Real student data almost never needs to leave the classroom to build a Rooted Learner product.

## 3. Screen B — Responsible-AI Red Flags

1. **PII into a third-party AI tool** (Claude, Gemini, etc.)? → RED until de-identified. Teach teachers this rule in every AI how-to.
2. **Fabricated or unverified sources/standards/citations?** → fix before publish; never ship invented standard codes or research.
3. **Over-claiming** — outcome, efficacy, "FERPA-compliant," "research-based," endorsement/affiliation not supported by source material? → route claim to rooted-learner-legal.
4. **Deficit framing** of MLs/families/teachers in AI-generated copy? → fix (→ rooted-learner-brand).
5. **AI positioned as replacing educator judgment?** → reframe as AI-supported, educator-reviewed.
6. **Teaching teachers an unsafe workflow?** If a how-to video would have teachers paste rosters/grades/IEPs into an AI tool → RED; rebuild the workflow around de-identified inputs and add an explicit privacy caution in the video.

## 4. Verdict Format (what this skill returns)

```
VERDICT: GREEN / YELLOW / RED

WHY: (the specific triggers found, plain language)

FIX BEFORE SHIPPING:
- (concrete change 1)
- (concrete change 2)

ESCALATE TO rooted-learner-legal / attorney? (yes/no + the exact questions to ask)

SAFE-TO-SHIP CONDITION: (what would make this GREEN)
```

- **GREEN:** no real student PII; AI inputs de-identified; sources verified; no over-claims; no deficit framing. Ship.
- **YELLOW:** fixable issues (some PII that should be synthetic, an unverified standard, a soft over-claim). Fix the listed items, re-run, then ship.
- **RED:** real student PII heading into an AI tool / public asset with no cleared basis, an unsafe workflow being taught, or a compliance/outcome claim. Stop. Escalate to rooted-learner-legal and, where it involves real data or district contracts, a real attorney/DPO.

Any single RED trigger makes the whole thing RED. When genuinely unsure, default RED and escalate — the cost of over-escalating is small.

## 5. De-Identification / Synthetic-Data Helper

To turn a risky example into a shippable one:

1. Replace names with clearly fake placeholders ("Student A," "Maria R. [composite]").
2. Strip IDs, DOB, school, exact scores tied to a child; generalize ("a newcomer reading below grade level"), don't itemize.
3. Break re-identifying combinations (don't stack rare traits + small class + location).
4. Prefer fully synthetic student work for products/videos — write a representative example rather than using a real one.
5. Never paste a real roster, gradebook, IEP, or ACCESS report into any AI tool. Model the de-identified version in every teacher-facing AI how-to.

## 6. Standing Rules to Bake Into Products & Videos

- Every teacher-facing AI how-to includes a short, explicit "don't put student PII into AI tools — here's the de-identified way" caution.
- Every product touching data ships with a plain privacy/terms note (→ rooted-learner-legal).
- AssessAlign / HallPass or any feature handling real student records: out of scope for this quick check — those require full rooted-learner-legal treatment (DPAs, the HallPass/Conroe DPA gap, security review) before anything real-data ships.

## 7. Worked Examples

**Example — YELLOW → fixable.** A blog post draft uses a real newcomer's writing sample as a before/after. Triggers: real student PII in a public asset (§2.1-2.4). Fix: swap for a synthetic sample; generalize the profile. Then: GREEN.

**Example — RED → escalate.** An AI how-to video shows pasting the class ACCESS roster into Gemini to "auto-plan groups." Triggers: PII into third-party AI (§3.1), unsafe workflow taught (§3.6), sensitive subgroup data (§2.6). Fix: rebuild around a de-identified/synthetic roster, add the privacy caution, and route the "is our data handling okay" question to rooted-learner-legal/DPO before publishing.

**Example — GREEN.** An ELD overlay product built entirely from Michelle's original passages + public standards, using synthetic student examples, with an "aligned to, not affiliated with" disclaimer. No PII, verified standards, no over-claim → ship.

## 8. "Do Not" Rules

- Don't treat this as legal advice or a compliance certification.
- Don't let real student PII enter any AI tool or public asset without a cleared basis — default to synthetic.
- Don't ship "FERPA-compliant," efficacy, or endorsement claims from this skill — only rooted-learner-legal frames claims, and real compliance needs an attorney/DPO.
- Don't rely on "anonymized" when small-class re-identification is possible.
- Don't skip escalation when unsure — default RED.
