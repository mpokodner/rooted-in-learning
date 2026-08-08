# The Rooted Learner — Development Guide

## Project Overview

**therootedlearner.com** — EdTech platform for K-8 educators. Sells digital classroom resources (lesson plans, toolkits), publishes a blog and teacher toolkit, and offers district-level software products (AssessAlign, HallPass). Built and operated by Michelle, a 30+ year educator.

Live: https://www.therootedlearner.com

## Development Commands

```bash
npm run add-product    # Onboard product across Stripe + Supabase Storage + products table
npm run verify-chain   # Verify purchase chain for a product slug
npm run save-idea      # Create/update idea in Supabase (Idea Engine)
```

## Architecture & Auth

### Middleware (`middleware.ts`)

Three-tier auth at the edge:

| Route | Requirement | Redirect on fail |
|-------|------------|-----------------|
| `/admin/login`, `/admin/forgot-password`, `/admin/reset-password` | Must be unauthenticated | → `/admin` |
| `/admin/*` | Authenticated + `role = 'admin'` in profiles table | → `/admin/login` (unauthed) or `/` (non-admin) |
| `/account/*` | Authenticated | → `/` |

There is no public-facing user login. The `/login` and `/register` routes have been removed. Only the admin has a login page at `/admin/login`. Sign-ups are disabled in Supabase.

### Supabase Client Patterns

| Client | File | Use case |
|--------|------|----------|
| Cookie-based server | `supabase-server.ts` → `createClient()` | Server components, route handlers, server actions |
| Service role | `supabase-server.ts` → `createServerSupabaseClient()` | Webhooks, admin API routes (bypasses RLS) |
| Browser | `supabase.ts` | Client components |
| Middleware | `supabase-middleware.ts` → `updateSession()` | Session refresh in middleware |

## Database Schema

### RLS

All tables have RLS enabled. General pattern:
- Public read for active/published content (products, blog posts, affiliate links)
- Users read/manage their own data (profiles, orders, cart, saved items, avatars)
- Admin-only access for management tables (newsletter, leads, waitlist, download tokens, ideas)
- Service role bypasses RLS for webhook/API operations

## Key Integrations

### Stripe Checkout Flow

Cart → `POST /api/checkout` → creates Stripe Checkout session → customer pays → Stripe fires `checkout.session.completed` webhook → `POST /api/webhooks/stripe` → creates order + order_items + download_tokens (idempotent on session ID) → sends confirmation email via Resend with download links.

### Newsletter / Lead Capture

- `POST /api/newsletter` — rate-limited, upserts to `newsletter_subscribers`, optionally sends freebie email
- `POST /api/waitlist` — stores product waitlist signups
- `POST /api/contact` — stores leads from contact form
- All email collection is separate from user accounts (no login required)

### Sanity CMS

Blog posts and toolkit resources are managed in Sanity, queried via GROQ in server components. Revalidation webhook at `/api/webhooks/sanity` purges Next.js cache on content changes. Portable Text rendered with `@portabletext/react`.

### Download Delivery

Token-based: after purchase, download tokens are created (7-day expiry, 5 downloads max). Token validated at `/api/download/t/[token]`, generates a signed Supabase Storage URL for the private `product-files` bucket.

### Cron Jobs (Vercel)

- `/api/cron/keep-alive` — pings Supabase every 5 days to prevent hibernation
- `/api/cron/weekly-summary` — sends weekly business summary email every Sunday

## Conventions

- **Prices** stored in cents throughout (Stripe and database)
- **Order numbers** formatted as `RIL-{nanoid(8)}`
- **Service clients** (Stripe, Resend, Ratelimit) are lazy-initialized with proxy-based deprecated export shims
- **CSS** uses custom properties defined in `greenhouse.css` with Tailwind v4
- **Fonts**: Inter (`--font-body`), Newsreader (`--font-serif`)
- **Brand colors**: earth green `#5C6B4A`, terracotta accent `#B05931`, warm cream/beige backgrounds
- **Route groups** isolate layouts: `(main)` has Header/Footer, `(admin)` has sidebar, `(admin-auth)` is standalone, `(protected)` has Header/Footer
- **Auth checks** happen in middleware, not per-page
- **Blog/toolkit content** lives in Sanity CMS (the `blog_posts` table in Supabase is legacy)
