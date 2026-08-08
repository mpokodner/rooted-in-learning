---
name: idea-router
description: Route a product idea to TPT, Rooted Learner website, or both — with rationale, confidence score, and boundary factors. Requires both research reports as input. When confidence is below 0.7, presents both sides and asks Michelle to choose rather than making a confident-sounding wrong call. Trigger on "/idea-router" or when the run-idea orchestrator invokes this step.
---

## Purpose

Make a channel-routing decision for a product idea based on both research reports (TPT market research + brand research), the boundary rule from the business strategy, and existing products already on each channel.

## Boundary Rule

From `.claude/skills/rooted-learner-business/SKILL.md` §4:

**TPT** — repeatable, finished teacher tools:
- Individual printable/digital overlay & passage sets
- Single-topic packs, "try the method" starter kits
- Constructed-response organizers, ELD frames, vocab
- Seasonal/high-interest packs, planning templates

**Rooted Learner website** — depth, system, access:
- Subscription/membership access, generator credits
- Full overlay module library, complete scope & sequence
- Professional learning, coaching, school/district licenses
- Custom work, audits, proof-of-concept, methodology/IP

**Both** — when a standalone teacher-tool version (TPT) AND a deeper implementation version (Rooted Learner) naturally co-exist without cannibalization.

## Steps

1. **Receive inputs:**
   - Original idea text
   - TPT research report (tpt_research object)
   - Brand research report (brand_research object)

2. **Check existing products** — query the `products` table to see if related products already exist on either channel. This context is critical for the "both" decision and for avoiding cannibalization.
   ```
   npm run save-idea -- --status --id=<uuid>
   ```
   Or note: the orchestrator may provide this context directly.

3. **Apply the boundary rule:**
   - Classify the idea by product type against the table above
   - Is it a finished, repeatable teacher tool? → leans TPT
   - Is it a system, subscription, or deep implementation? → leans website
   - Does it naturally split into both? → consider "both" with anti-cannibalization notes

4. **Weight the research:**
   - TPT demand signals: strong demand + low saturation = TPT opportunity
   - Brand alignment score: high alignment (8+) = strong Rooted Learner fit
   - If TPT demand is strong AND brand alignment is high, "both" becomes more likely

5. **Compute confidence (0-1):**
   - 0.9-1.0: Clear match to one channel, strong evidence
   - 0.7-0.89: Good fit, minor uncertainty
   - 0.5-0.69: Ambiguous — could go either way
   - Below 0.5: Genuinely unclear

6. **If confidence < 0.7:** Do NOT make a confident call. Instead:
   - Present "The case for TPT" and "The case for Rooted Learner" side by side
   - List the factors pulling in each direction
   - Ask Michelle to make the call
   - Set the decision to whichever side is slightly stronger, but flag it clearly

7. **Output the structured result** matching the `routing` object in `.claude/shared/idea-schema.json`:
   - `decision`: "tpt", "rooted-learner", or "both"
   - `confidence`: 0-1
   - `rationale`: paragraph explaining the reasoning
   - `boundary_factors`: array of the key factors that drove the decision

## References

- `.claude/skills/rooted-learner-business/SKILL.md` — §4 TPT vs Website table, §5 product rubric
- `.claude/shared/idea-schema.json` — output schema
