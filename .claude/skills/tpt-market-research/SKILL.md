---
name: tpt-market-research
description: Research TPT market fit for a product idea — demand signals, competitor saturation, pricing bands, seasonal timing, trending keywords. Trigger on "/tpt-market-research" or when the run-idea orchestrator invokes this step. Outputs structured JSON matching the tpt_research schema in .claude/shared/idea-schema.json.
---

## Purpose

Research Teachers Pay Teachers market fit for a given product idea. Produce a structured research report with sourced claims that can feed into the idea-router and idea-optimizer skills.

## Steps

1. **Receive the idea text** — from the user directly or from the run-idea orchestrator.

2. **Extract search keywords** — identify the core subject, grade band, format, and learner context from the idea. Reference `.claude/skills/rooted-learner-tpt/SKILL.md` §2-3 for keyword strategy and teacher search language.

3. **Run targeted web searches** using WebSearch:
   - `site:teacherspayteachers.com [idea keywords]`
   - `[idea keywords] TPT best sellers`
   - `[idea keywords] teacher demand education marketplace`
   - `[idea keywords] seasonal education trends`

4. **For each result, record source metadata:**
   - `url` — the actual page URL
   - `title` — page/listing title
   - `access_date` — today's date
   - `reputability` — one of: `official` (TPT itself, standards bodies), `industry` (education publications, research orgs), `seller-anecdote` (individual seller blogs/forums), `inferred` (derived from patterns, not directly stated)
   - `snippet` — relevant excerpt

5. **Analyze findings across four dimensions:**
   - **Demand signals** — search volume indicators, review counts, "best seller" badges, teacher forum mentions. Each signal is a sourced claim.
   - **Competitor saturation** — how many similar products exist, quality range, whether the space is crowded or underserved. One sourced claim.
   - **Pricing bands** — observed price range for comparable products. One sourced claim.
   - **Seasonal timing** — when demand peaks (back-to-school, test season, etc.). Each timing signal is a sourced claim.
   - **Trending keywords** — terms that appear frequently in successful listings.

6. **Write a summary** — 2-3 sentences synthesizing the market opportunity.

7. **Output the structured result** matching the `tpt_research` object in `.claude/shared/idea-schema.json`. Include all sources inline with their claims.

## WebSearch Fallback

- If `site:teacherspayteachers.com` returns thin results, broaden to general education marketplace searches.
- If WebSearch returns nothing useful, tell Michelle plainly: "WebSearch returned no useful results for this idea."
- Ask if she wants to paste Perplexity results manually or proceed with brand research only.
- **Never fabricate market data from general knowledge.** If a claim isn't sourced, don't make it.

## References

- `.claude/skills/rooted-learner-tpt/SKILL.md` — search term strategy (§2-3), listing structure (§4)
- `.claude/skills/rooted-learner-business/SKILL.md` — §4 (TPT vs Website table) for channel-fit context
- `.claude/shared/idea-schema.json` — output schema
