---
name: rooted-brand-research
description: Evaluate a product idea against The Rooted Learner brand, business strategy, and design system. Produces a brand alignment score (0-10) with rationale, business fit analysis, and design considerations. Trigger on "/rooted-brand-research" or when the run-idea orchestrator invokes this step. Outputs structured JSON matching the brand_research schema in .claude/shared/idea-schema.json.
---

## Purpose

Evaluate a product idea against The Rooted Learner's brand voice, business strategy, and design system. Produce a structured assessment that feeds into the idea-router and idea-optimizer skills.

## Steps

1. **Receive the idea text** — from the user directly or from the run-idea orchestrator.

2. **Read the three source-of-truth skill files:**
   - `.claude/skills/rooted-learner-brand/SKILL.md` — voice/messaging alignment
   - `.claude/skills/rooted-learner-business/SKILL.md` — business fit (§3 ideal customers, §5 product-selection rubric, §4 TPT vs Website)
   - `.claude/skills/rooted-learner-design/SKILL.md` — design system fit

3. **Evaluate brand alignment** (voice, audience, values):
   - Does the idea fit the brand voice tension (warm/sharp, grounded/visionary)?
   - Does it serve Lane A (teachers) or Lane B (districts) or both?
   - Does it honor the "access, not deficit" framing?
   - Does it align with the central promise: less friction between curriculum, language access, teacher capacity, and student learning?

4. **Evaluate business fit** using the product-selection rubric (business §5):
   - Immediate use — can a teacher use it tomorrow?
   - Low prep — teacher-time test?
   - Rigor + access — keeps grade level, adds access?
   - Reusable IP — becomes a template/family?
   - Search demand — do teachers search for this?
   - Proof value — would it impress a future district buyer?
   - Time to build — fits a constrained founder week?
   - Where does it sit on the offer ladder (§3)?

5. **Evaluate design considerations:**
   - What format does this idea naturally take (printable, digital, both)?
   - Does it fit within the product-family system?
   - Any special visual treatment expectations?

6. **Assign brand_alignment_score (0-10)** with detailed rationale:
   - 9-10: Perfect fit — aligns with brand, business, and design on every dimension
   - 7-8: Strong fit — minor adjustments needed
   - 5-6: Moderate fit — requires repositioning or scoping changes
   - 3-4: Weak fit — significant misalignment with brand or business strategy
   - 1-2: Poor fit — fundamentally misaligned

7. **Output the structured result** matching the `brand_research` object in `.claude/shared/idea-schema.json`.

## References

- `.claude/skills/rooted-learner-brand/SKILL.md` — brand voice, messaging, terminology
- `.claude/skills/rooted-learner-business/SKILL.md` — business strategy, offer ladders, product rubric
- `.claude/skills/rooted-learner-design/SKILL.md` — visual design system
- `.claude/shared/idea-schema.json` — output schema
