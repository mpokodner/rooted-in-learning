---
name: run-idea
description: Orchestrate the full Idea Engine pipeline — research, route, and optimize a product idea with mandatory checkpoints. Default mode is stepwise (pause at each stage); use --mode chained to auto-advance after mandatory checkpoints. Trigger on "/run-idea" or "run the idea engine" or "evaluate this product idea."
---

## Parameters

- `--mode stepwise|chained` (default: stepwise)
  - **stepwise:** pause and show results at every stage, wait for approval before proceeding
  - **chained:** auto-advance between stages, but STILL pause at both mandatory checkpoints

## Flow

### 1. Collect the idea

If no idea text is provided, ask Michelle: "What's the product idea you want to evaluate?"

### 2. Save draft to Supabase

Create the idea row immediately so partial runs are recoverable:

```bash
echo '{"original_idea": "<idea text>"}' | npm run save-idea -- --create
```

Record the returned UUID — it's needed for all subsequent updates.

### 3. Run TPT Market Research

Invoke the `tpt-market-research` skill with the idea text.

In stepwise mode: show the TPT research results and ask if Michelle wants to proceed.

### 4. Run Rooted Brand Research

Invoke the `rooted-brand-research` skill with the idea text.

In stepwise mode: show the brand research results and ask if Michelle wants to proceed.

### 5. MANDATORY CHECKPOINT 1 — Research Review

**This checkpoint is mandatory in BOTH modes.**

Display both research reports with all sources:
- TPT research: demand signals, competitor saturation, pricing bands, seasonal timing, trending keywords, summary
- Brand research: alignment score, rationale, business fit, design considerations, audience match, product ladder position, summary
- All sources with: URL (linked), access date, reputability tag

Ask Michelle: "Research complete. Review the findings above. Do you want to proceed to routing?"

**Do not proceed without explicit approval.**

### 6. Save research to Supabase

Update the idea row with research data:

```bash
echo '{"status": "researched", "tpt_research": {...}, "brand_research": {...}, "sources": [...]}' | npm run save-idea -- --update --id=<uuid>
```

### 7. Run Idea Router

Invoke the `idea-router` skill with:
- Original idea text
- TPT research report
- Brand research report

### 8. MANDATORY CHECKPOINT 2 — Routing Review

**This checkpoint is mandatory in BOTH modes.**

Display the routing decision:
- Channel decision (TPT / Rooted Learner / Both)
- Confidence score (as percentage)
- Rationale
- Boundary factors

If confidence < 0.7: the router has already presented both sides. Ask Michelle to make the call.

If confidence >= 0.7: ask Michelle: "The router recommends [channel] with [X]% confidence. Do you agree?"

**Do not proceed without explicit approval.**

### 9. Save routing to Supabase

```bash
echo '{"status": "routed", "routing": {...}, "channel": "<channel>"}' | npm run save-idea -- --update --id=<uuid>
```

### 10. Run Idea Optimizer

Invoke the `idea-optimizer` skill with:
- Original idea text
- TPT research report
- Brand research report
- Routing decision (including the confirmed channel)

### 11. Review optimized output

- **Stepwise mode:** Show the optimized output and wait for approval before saving.
- **Chained mode:** Proceed automatically to save.

### 12. Save complete idea to Supabase

```bash
echo '{"status": "complete", "optimized": {...}, "title": "<optimized title>"}' | npm run save-idea -- --update --id=<uuid>
```

### 13. Display final summary

Show:
- Idea title (from optimizer)
- Channel decision
- Brand alignment score
- Key next steps
- Idea ID (UUID)
- "View in Vault: /admin/vault/<uuid>"

## Recovery

If a run fails at any point, the idea is already in Supabase at the last successful checkpoint. Michelle can:
1. Check the status: `npm run save-idea -- --status --id=<uuid>`
2. View partial results in the Vault at `/admin/vault/<uuid>`
3. Resume by re-running `/run-idea` and providing the existing idea text + context

## Summary of Checkpoints

| Checkpoint | When | Mandatory in chained? | What's shown |
|---|---|---|---|
| Research review | After both research skills complete | YES | Both reports + all sources |
| Routing review | After idea-router completes | YES | Channel, confidence, rationale, boundary factors |
| Optimizer review | After idea-optimizer completes | Stepwise only | Optimized title, positioning, pricing, next steps |
