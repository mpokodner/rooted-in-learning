# The Rooted Learner

Practical tools and strategies built by a 30+ year educator for classrooms that thrive.

**Live:** [therootedlearner.com](https://www.therootedlearner.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Database & Auth:** Supabase (PostgreSQL, Auth, Storage)
- **Payments:** Stripe (Checkout, webhooks)
- **CMS:** Sanity (blog, toolkit resources)
- **Email:** Resend (transactional), ConvertKit (marketing)
- **Styling:** Tailwind CSS v4, CSS custom properties
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd rooted-in-learning

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase, Stripe, Resend, and other keys

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/app/
├── (main)/          # Public pages (home, shop, blog, toolkit, about, contact)
├── (admin)/         # Admin dashboard (products, orders, subscribers, leads, vault)
├── (admin-auth)/    # Admin login and password reset
├── (protected)/     # User account pages (inactive — no public login yet)
├── api/             # API routes (checkout, newsletter, webhooks, downloads, cron)
├── studio/          # Embedded Sanity Studio
└── links/           # Link-in-bio page
```

## Scripts

```bash
npm run dev            # Dev server
npm run build          # Production build
npm run lint           # ESLint
npm run test           # Run tests
npm run add-product    # Onboard a new product (Stripe + Supabase + storage)
npm run verify-chain   # Verify purchase chain for a product
npm run save-idea      # Save an idea to the Idea Vault
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.

Environment variables must be configured in the Vercel dashboard (see `.env.example` for the full list).
