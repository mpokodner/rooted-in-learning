# Phase 1 report

Branch: `phase1-ux-ui-rebuild`. Not pushed. Not merged.

## What shipped locally

Additive IA: `/aligned`, `/partner`, `/educators`, `/educators/toolkit/[slug]`, `/insights`, `/insights/[slug]`. Old URLs stay live. `NEXT_PUBLIC_IA_REDIRECTS`, `NEXT_PUBLIC_ALIGNED_REDIRECTS`, and `NEXT_PUBLIC_HALLPASS_PUBLIC` default false.

## Integrity

- Sanity, Studio, GROQ unchanged.
- Stripe webhook, download tokens, checkout API, admin, legal pages remain.
- Cart/checkout/account stay out of public nav.
- Token layer is additive. Cal Sans, `.eyebrow`, and `.reveal` were not globally rewritten.
- New UI uses Newsreader inside `.phase1`.
- Grouping kit UI is hidden until `NEXT_PUBLIC_GROUPING_KIT_URL` is set.
- Custom `track()` events no-op without `ril_analytics_consent`. Page-view gtag remains always-on when `NEXT_PUBLIC_GA_ID` is set. `TODO(phase1-decision): should page-view gtag wait on consent too?`

## Migration

`supabase/migrations/012_leads_routing.sql` adds nullable `audience` and UTM columns. Apply when you are ready; it is not auto-applied here.

## Quality gates

- Claims test scoped to `site-copy.ts` and new routes.
- Contrast test on token pairings.
- Playwright added as a devDependency for baselines.
- Pre-existing `eslint` and `tsc` failures (duplicate `.next/dev/types * 2.ts`, Header setState-in-effect, etc.) were not used as a reason to rewrite unrebuilt files.

## Owner TODOs

- Founder photo (botanical placeholder now)
- Product screenshots (wireframe SVGs)
- Copy and counsel review of `site-copy.ts`
- Grouping kit PDF URL
- Flip env flags after Search Console review
- Decide whether gtag page views should wait on consent
