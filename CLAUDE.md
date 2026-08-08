# The Rooted Learner — Development Guide

## Project Overview

**therootedlearner.com** — EdTech platform for K-8 educators. Sells digital classroom resources (lesson plans, toolkits), publishes a blog and teacher toolkit, and offers district-level software products (AssessAlign, HallPass). Built and operated by Michelle, a 30+ year educator.

Live: https://www.therootedlearner.com

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`), CSS custom properties (`greenhouse.css`) |
| Database & Auth | Supabase (PostgreSQL, Auth with `@supabase/ssr`, Storage, RLS) |
| Payments | Stripe (Checkout, webhooks) |
| CMS | Sanity v5 (blog posts, toolkit resources), embedded Studio at `/studio` |
| Email | Resend (transactional), ConvertKit (marketing/newsletters) |
| Rate Limiting | Upstash Redis (`@upstash/ratelimit`) |
| Monitoring | Sentry (`@sentry/nextjs`) |
| Analytics | Google Analytics (GA4), Google Tag Manager |
| Deployment | Vercel (Speed Insights, Cron Jobs) |
| Testing | Vitest |
| Icons | Lucide React |

## Development Commands

```bash
npm run dev            # Start dev server (Next.js)
npm run build          # Production build
npm run lint           # ESLint
npm run test           # Vitest (single run)
npm run test:watch     # Vitest (watch mode)
npm run add-product    # Onboard product across Stripe + Supabase Storage + products table
npm run verify-chain   # Verify purchase chain for a product slug
npm run save-idea      # Create/update idea in Supabase (Idea Engine)
```

## Project Structure

```
src/
├── app/
│   ├── (main)/          # Public pages: home, about, shop, blog, toolkit, for-districts,
│   │                    #   for-teachers, work-with-me, contact, cart, checkout, etc.
│   ├── (admin)/         # Admin dashboard: products, orders, subscribers, leads,
│   │                    #   waitlist, analytics, vault (has sidebar layout)
│   ├── (admin-auth)/    # Admin auth: /admin/login, /admin/forgot-password,
│   │                    #   /admin/reset-password (standalone layout, no sidebar)
│   ├── (protected)/     # Authenticated user pages: account, orders, downloads,
│   │                    #   saved, settings (inactive for now — no public login)
│   ├── api/
│   │   ├── auth/callback/       # Supabase auth code exchange
│   │   ├── checkout/            # Stripe Checkout session creation
│   │   ├── contact/             # Contact form submission
│   │   ├── newsletter/          # Newsletter signup + unsubscribe
│   │   ├── waitlist/            # Product waitlist signup
│   │   ├── download/[slug]/     # Legacy download route
│   │   ├── download/t/[token]/  # Token-based download (no account required)
│   │   ├── cron/keep-alive/     # Supabase keep-alive (every 5 days)
│   │   ├── cron/weekly-summary/ # Weekly business summary email (Sundays)
│   │   └── webhooks/            # Stripe + Sanity webhooks
│   ├── studio/[[...tool]]/      # Embedded Sanity Studio
│   └── links/                   # Instagram link-in-bio page
├── components/        # Shared UI: Header, Footer, AuthForm, ProductCard,
│                      #   NewsletterForm, blog components, learn components
├── lib/               # Service clients and utilities
│   ├── supabase-server.ts       # Server-side Supabase (cookie-based + service role)
│   ├── supabase-middleware.ts   # Middleware Supabase client (session refresh)
│   ├── supabase.ts              # Browser-side Supabase client
│   ├── stripe.ts                # Stripe client (lazy-initialized)
│   ├── resend.ts                # Resend client (lazy-initialized)
│   ├── ratelimit.ts             # Upstash rate limiter
│   ├── auth-actions.ts          # Server actions: signIn, signUp, forgotPassword, resetPassword
│   ├── slugify.ts               # URL slug generation
│   └── unsubscribe.ts           # Newsletter unsubscribe token handling
├── sanity/            # Sanity CMS config
│   ├── schemas/       # Document types: blogPost, toolkitResource, author,
│   │                  #   contentPillar, category, tag
│   └── lib/           # Client, image URL builder, GROQ queries, types
├── hooks/             # React hooks (useAuth, useCart)
├── types/             # TypeScript types (Profile, Product, Order, CartItem, etc.)
└── styles/            # Global styles (greenhouse.css — design system custom properties)

scripts/               # CLI tools (add-product.ts, verify-purchase-chain.ts, save-idea.ts)
supabase/migrations/   # SQL migrations (001–005)
.claude/skills/        # 13 Claude Code skills (see below)
.claude/shared/        # Shared data (idea-schema.json)
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

### Tables

| Table | Purpose | Key columns |
|-------|---------|------------|
| `profiles` | User profiles (auto-created on signup) | id, email, full_name, role, stripe_customer_id |
| `products` | Digital products for sale | slug, price, product_type, stripe_price_id, file_url, series, focus_area, grade_min/max |
| `orders` | Purchase orders | order_number, user_id, email, status, total, stripe_checkout_session_id |
| `order_items` | Line items per order | order_id, product_id, product_name, quantity, price |
| `cart_items` | Shopping cart (per user) | user_id, product_id, quantity |
| `newsletter_subscribers` | Email list | email, name, source, freebie_sent, subscribed |
| `blog_posts` | Blog content (legacy — now in Sanity) | slug, content, category, tags, published |
| `saved_items` | User bookmarks/favorites | user_id, item_type, item_id |
| `affiliate_links` | Curated affiliate links | title, url, platform, category, active |
| `leads` | Contact form submissions | email, name, subject, message, organization, status |
| `waitlist` | Product early access signups | email, name, role, organization, district_size, product |
| `download_tokens` | Accountless file downloads | token, order_id, product_id, downloads, max_downloads, expires_at |
| `ideas` | Idea Engine / Vault | title, original_idea, status, tpt_research, brand_research, routing, optimized, channel |

### Storage Buckets

| Bucket | Visibility | Size limit | Purpose |
|--------|-----------|-----------|---------|
| `product-images` | Public | 5 MB | Product listing images |
| `product-files` | Private | 100 MB | Digital download files |
| `avatars` | Public | 2 MB | User profile photos |

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

## Environment Variables

See `.env.example` for the full list. Groups:

- **Supabase**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- **Stripe**: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`
- **Resend**: `RESEND_API_KEY`
- **ConvertKit**: `CONVERTKIT_API_KEY`, `CONVERTKIT_FORM_ID`
- **Upstash**: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- **Sentry**: `SENTRY_DSN`, `SENTRY_AUTH_TOKEN`
- **Analytics**: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`
- **Cron**: `CRON_SECRET`
- **Site**: `NEXT_PUBLIC_SITE_URL` (localhost for dev, production URL for deploy)

## Claude Code Skills

| Skill | Purpose |
|-------|---------|
| `add-product` | Onboard digital product across Stripe, Supabase Storage, and products table |
| `run-idea` | Orchestrate full Idea Engine pipeline (research → route → optimize) |
| `idea-router` | Route idea to TPT vs. Rooted Learner channel |
| `idea-optimizer` | Optimize idea for its assigned channel |
| `tpt-market-research` | TPT market research for product ideas |
| `rooted-brand-research` | Brand alignment research for product ideas |
| `rooted-learner-brand` | Brand voice, messaging, and copy guidance |
| `rooted-learner-business` | Business strategy and priorities |
| `rooted-learner-design` | Visual design system and UI guidance |
| `rooted-learner-direction-brief` | Direction brief template |
| `rooted-learner-legal` | Legal compliance (IP, contracts, DPIA) |
| `rooted-learner-tpt` | TPT listing-specific guidance |
| `ferpa-legal-guidance` | FERPA / student-privacy screening |
| `update-docs` | Update README.md and CLAUDE.md based on git changes |

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
