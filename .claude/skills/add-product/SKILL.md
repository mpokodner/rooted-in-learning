---
name: add-product
description: Onboard a new digital product across Stripe, Supabase Storage, and the products table. Triggers on "launch a new product", "add a product to Stripe", "onboard [product] for sale", "set up checkout for X".
---

## Steps

1. **Gather parameters** — ask the user for each (don't guess):
   - `slug` — lowercase, hyphenated identifier (e.g. `boy-pretest-bundle`)
   - `name` — display name (e.g. "BOY Reading Pretest Bundle — Grade 5")
   - `price` — in dollars (e.g. `24`)
   - `file` — local path to the deliverable PDF/ZIP

2. **Dry run first** — run the script and show the output:
   ```
   npm run add-product -- --slug=<slug> --name="<name>" --price=<price> --file=<path> --dry-run
   ```
   Show the full output and wait for user confirmation before proceeding.

3. **Execute** — only after the user confirms the dry-run output:
   ```
   npm run add-product -- --slug=<slug> --name="<name>" --price=<price> --file=<path>
   ```

4. **Verify** — run the verification script and report results:
   ```
   npm run verify-chain -- --slug=<slug>
   ```

5. **Remind about manual steps** the scripts cannot automate:
   - Make a test purchase using a Stripe coupon ($0.50) to exercise the full chain
   - Confirm the order confirmation email arrives in an inbox (not spam)
