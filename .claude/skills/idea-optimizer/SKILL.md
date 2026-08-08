---
name: idea-optimizer
description: Reframe and optimize a product idea for its assigned channel — title, positioning, pricing recommendation, differentiation, product-ladder placement, and concrete next steps. Requires routing decision and both research reports as input. Trigger on "/idea-optimizer" or when the run-idea orchestrator invokes this step.
---

## Purpose

Take a routed product idea and optimize it for its assigned channel. Generate a polished title, positioning copy, pricing recommendation, differentiation narrative, product-ladder placement, and actionable next steps.

## Steps

1. **Receive inputs:**
   - Original idea text
   - TPT research report (tpt_research object)
   - Brand research report (brand_research object)
   - Routing decision (routing object — includes channel, confidence, rationale)

2. **Optimize based on channel:**

### For TPT channel:
- **Title:** Generate a keyword-rich title following the formula in `.claude/skills/rooted-learner-tpt/SKILL.md` §2: `[Grade band] [Subject/Skill] [Format] for [Learner/Context] | [Distinctive method]`
- **Positioning:** One-paragraph hook in brand voice (rooted-learner-brand §9 TPT example style)
- **Pricing:** Recommend within the observed pricing band from TPT research, anchored to the offer ladder (business §3): $6-9 entry, $18-28 core, bundle below sum
- **Differentiation:** What makes this different from competitors found in research — be specific
- **Product ladder placement:** Entry "try the method," core pack, or bundle component?
- **Next steps:** Concrete actions — formatted per the 8-part listing structure (tpt §4)

### For Rooted Learner website channel:
- **Title:** Brand-aligned title following rooted-learner-brand voice principles
- **Positioning:** Copy that leads with the teacher/school problem, not the product (brand §4 anchor post style)
- **Pricing:** Per the product ladder (business §3): $19-49 toolkit, $15-29/mo recurring, $149-499+ premium
- **Differentiation:** Brand narrative — why this belongs on the website, not TPT
- **Product ladder placement:** Where on the website depth ladder?
- **Next steps:** Build plan, launch sequence

### For "both" channels:
- Generate **both versions** with notes on how they complement without cannibalization
- TPT version = the standalone finished tool
- Website version = the deeper system/access/membership angle
- Per business §4 guardrails: keep price consistency, don't put off-TPT purchase links inside TPT products, keep the engine website-only and sell outputs on TPT

3. **Output the structured result** matching the `optimized` object in `.claude/shared/idea-schema.json`:
   - `title`: optimized product title
   - `positioning`: positioning paragraph
   - `pricing_recommendation`: specific pricing recommendation with rationale
   - `differentiation`: what makes this stand out
   - `product_ladder_placement`: where it sits on the offer ladder
   - `channel`: the assigned channel
   - `next_steps`: array of concrete next actions

## References

- `.claude/skills/rooted-learner-tpt/SKILL.md` — title formula (§2), keywords (§3), listing structure (§4)
- `.claude/skills/rooted-learner-brand/SKILL.md` — voice, positioning examples (§9)
- `.claude/skills/rooted-learner-business/SKILL.md` — offer ladders (§3), pricing (§6), TPT vs Website (§4)
- `.claude/shared/idea-schema.json` — output schema
