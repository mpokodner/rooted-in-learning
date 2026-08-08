---
name: rooted-learner-design
description: Use this skill whenever you are creating, reviewing, generating, or specifying ANY visual output for The Rooted Learner brand — therootedlearner.com. Trigger for website UI/UX updates, React components, Tailwind CSS, hero sections, landing pages, social graphics, poster art, canvas-design outputs, email templates, digital product covers, presentation slides, or any visual deliverable that must align with the brand's design system. Also trigger when another skill (canvas-design, frontend-design, pptx) needs brand visual guidance, or when Michelle says things like "make it look on-brand," "use the brand colors," "update the UI," "design something for the site," or "does this match the brand." Always consult this skill before producing any Rooted Learner visual output — do not rely on memory for color values, typography, spacing, or component patterns.
---
 
# The Rooted Learner — Visual Design System Skill
 
This is the authoritative source for all visual and UI/UX output produced under The Rooted Learner brand. When generating code, art, layouts, or design specs, this skill governs every visual decision.
 
---
 
## 1. Design Philosophy
 
**The Rooted Learner aesthetic** holds three tensions in balance — the same tensions in the brand voice:
 
| Not just this... | ...but also this |
|---|---|
| Warm & organic | Structured & intentional |
| Earthy & grounded | Editorial & refined |
| Bold & clear | Flowing & human |
 
**In visual terms:** Think a beautifully designed independent education press — warm cream paper, forest green ink, terracotta accents. Structured grids with organic breathing room. Typography that feels considered, not corporate. Imagery that feels real, not stock. The visual language should feel like it was designed by someone who both reads bell hooks *and* knows their grid systems.
 
**The three visual modes:**
- **Website/UI** — Clean, accessible, component-driven. Warm neutrals, purposeful use of earth green as the primary action color, terracotta as accent and CTA.
- **Canvas/Art** — Organic, editorial, museum-quality. Design philosophy-led (see `canvas-design` skill). Brand colors anchor the palette but don't constrain it.
- **Documents/Slides** — Structured, professional, warm. Earth green headers, beige backgrounds, terracotta for emphasis.
---
 
## 2. Color Palette — Source of Truth
 
All hex values come directly from the production CSS. Never approximate or substitute.
 
### Brand Colors
| Token | Hex | Use |
|---|---|---|
| `--earth` | `#5c6b4a` | Primary: buttons, links, active nav, focus rings, headings on light |
| `--earth-dark` | `#4a5638` | Hover states for earth, footer background, dark section fill |
| `--earth-light` | `#8b9b7a` | Secondary text accents, muted earth elements |
| `--earth-mist` | `#a8b89a` | Soft dividers, placeholder elements, success states on dark |
| `--terracotta` | `#b05931` | Secondary CTA, accent color, active underlines, link buttons |
| `--terracotta-dark` | `#923c29` | Hover on terracotta elements |
| `--terracotta-light` | `#d5a372` | Warm accent on dark backgrounds, active footer links |
 
### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--white` | `#ffffff` | Card surfaces, form inputs on dark |
| `--neutral-bg` | `#faf7f2` | Page background — warm off-white, never pure white |
| `--beige-bg` | `#f0ede7` | Section backgrounds, hover states, card fills |
| `--border-beige` | `#e8ded0` | Light borders, card outlines, dividers |
| `--border-greige` | `#d9d5ce` | Slightly cooler border option |
| `--text-black` | `#1a1a1a` | Headings on light backgrounds |
| `--text-dark` | `#2d2d2d` | Body text default |
| `--text-muted` | `#6b6b6b` | Secondary text, nav links default, captions |
| `--text-light` | `#8a8a8a` | Placeholder, tertiary labels |
| `--text-on-dark` | `#faf7f2` | Text on earth-green or dark backgrounds |
 
### Color Pairing Rules
- **Primary CTA:** `--earth` background + `--text-on-dark` text
- **Secondary CTA:** `--terracotta` background + white text
- **Outline CTA:** `--earth` border + `--earth` text → hover fills to `--earth`
- **Page backgrounds:** Always `--neutral-bg` (#faf7f2), never pure white
- **Dark sections (footer):** `--earth` or `--earth-dark` background
- **Active/selected states:** `--earth` color + `--terracotta` underline accent (2px)
- **Never pair** terracotta directly against earth as competing elements — one leads, one accents
---
 
## 3. Typography
 
### Font Stack
```css
--font-heading: "Cal Sans", "Inter", system-ui, -apple-system, sans-serif;
--font-body:    "Inter", system-ui, -apple-system, sans-serif;
```
 
**Cal Sans** is the expressive heading font — geometric but warm, with personality. Use for H1–H3, brand moments, hero text, display copy.
 
**Inter** is the workhorse body font — highly legible, neutral, professional. Use for body text, nav, captions, UI labels, everything else.
 
### Suggested Additional Fonts (for canvas/art work)
When Cal Sans isn't expressive enough for editorial or art contexts:
- **Playfair Display** — editorial elegance, serif contrast to Inter
- **DM Serif Display** — warm, organic serif for hero moments
- **Space Grotesk** — structured, slightly quirky geometric sans
- **Libre Baskerville** — body-weight serif for long-form document feel
### Type Scale (fluid, clamp-based)
```
--text-xs:   clamp(0.75rem,  0.7rem + 0.25vw,  0.8125rem)
--text-sm:   clamp(0.8125rem, 0.78rem + 0.2vw,  0.875rem)
--text-base: clamp(0.9375rem, 0.9rem + 0.2vw,   1rem)
--text-lg:   clamp(1.0625rem, 1rem + 0.3vw,     1.125rem)
--text-xl:   clamp(1.1875rem, 1.1rem + 0.5vw,   1.3125rem)
--text-2xl:  clamp(1.375rem,  1.2rem + 0.8vw,   1.625rem)
--text-3xl:  clamp(1.625rem,  1.4rem + 1.2vw,   2.125rem)
--text-4xl:  clamp(2rem,      1.6rem + 2vw,     2.75rem)
--text-5xl:  clamp(2.5rem,    2rem + 2.5vw,     3.5rem)
```
 
### Line Height & Letter Spacing
```
--leading-tight:    1.2    (headings)
--leading-normal:   1.5    (body default)
--leading-relaxed:  1.65   (long-form, descriptions)
 
--tracking-tight:   -0.02em  (large display headings)
--tracking-normal:  0        (body)
--tracking-wide:    0.025em  (subtle labels)
--tracking-widest:  0.08em   (ALL CAPS nav labels, footer headings)
```
 
### Typography Rules
- Headings: always `--text-black` (#1a1a1a) on light, `--white` on dark
- Body max-width: `65ch` — never wider for readability
- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs
- Nav links: `--text-xs`, `font-weight: 600`, `letter-spacing: --tracking-widest`, NOT uppercase (per current site)
- Footer section headings: `--text-xs`, uppercase, `--tracking-widest`, `font-weight: 700`, white
---
 
## 4. Spacing System
 
```
--space-xs:       0.25rem
--space-sm:       0.5rem
--space-md:       clamp(0.75rem, 1.5vw, 1rem)
--space-lg:       clamp(1.25rem, 2.5vw, 1.5rem)
--space-xl:       clamp(1.5rem, 3vw, 2.5rem)
--space-section:  clamp(3rem, 6vw, 5rem)      ← standard section padding
--space-section-lg: clamp(4rem, 8vw, 6rem)    ← large section padding
--space-hero:     clamp(4rem, 10vw, 7rem)      ← hero vertical padding
--gap-cards:      clamp(1.25rem, 2vw, 2rem)   ← card grid gaps
--gap-content:    clamp(1.5rem, 4vw, 4rem)    ← content column gaps
```
 
**Container widths:**
```
--max-width-sm:  40rem   (narrow prose)
--max-width-md:  48rem   (article/form)
--max-width-lg:  64rem   (content sections)
--max-width-xl:  75rem   (standard site max — default container)
--max-width-2xl: 85rem   (wide marketing sections)
```
 
---
 
## 5. Borders, Radii & Shadows
 
### Border Radii
```
--radius-sm:   0.25rem   (small tags, chips)
--radius-md:   0.5rem    (buttons, inputs, cards)
--radius-lg:   1rem      (modal, large cards)
--radius-xl:   1.5rem    (featured cards, callouts)
--radius-2xl:  2rem      (hero elements)
--radius-full: 9999px    (pills, avatar circles, icon buttons)
```
 
### Shadows
```
--shadow-sm:  0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)
```
 
### Focus Ring
```css
box-shadow: 0 0 0 2px var(--neutral-bg), 0 0 0 4px var(--earth);
```
Always use earth green for focus — never default browser blue.
 
---
 
## 6. Component Patterns
 
### Buttons
Five variants — use consistently:
| Class | Fill | Text | Border | Use |
|---|---|---|---|---|
| `.btn-primary` | `--earth` | `--text-on-dark` | `--earth` | Main CTA, form submit |
| `.btn-secondary` | `--terracotta` | white | `--terracotta` | Accent CTA, newsletter |
| `.btn-outline` | transparent | `--earth` | `--earth` | Secondary actions |
| `.btn-ghost` | transparent | `--earth` | none | Tertiary, inline actions |
| `.btn-link` | transparent | `--terracotta` | none | Text links, inline CTAs |
 
Three sizes: `.btn-sm`, `.btn-md`, `.btn-lg`. Icon-only: `.btn-icon` (full radius, square padding).
 
### Navigation
- **Desktop:** Three-column flex (logo | nav centered | actions right)
- **Nav links:** `--text-muted` default → `--earth` + `--beige-bg` hover → `--earth` + `--terracotta` underline active
- **Header CTA (login/primary):** `--earth` fill, `--radius-full`, slides right on hover
- **Newsletter button:** `--terracotta` outline, `--radius-full`, uppercase, fills on hover
- **Mobile:** Hamburger toggle, inline menu
### Footer
- **Background:** `--earth` (main) / `--earth-dark` (capture bar)
- **All text on dark:** `rgba(255,255,255,0.65)` for body, `--white` for headings
- **Links:** `rgba(255,255,255,0.75)` → `--white` on hover, with 0.25rem left indent
- **Section headings:** uppercase, `--tracking-widest`, `--text-xs`
- **Lead capture:** `--terracotta` CTA button against dark earth background
- **Social icons:** Circle, `rgba(255,255,255,0.1)` fill → `rgba(255,255,255,0.22)` + `-2px translateY` on hover
### Cards
- Background: `--white` or `--beige-bg`
- Border: `1px solid var(--border-beige)`
- Radius: `--radius-lg` or `--radius-xl` for featured
- Shadow: `--shadow-sm` default → `--shadow-md` on hover
- Gap: `--gap-cards`
---
 
## 7. Motion & Transitions
 
```
--ease-default: cubic-bezier(0.4, 0, 0.2, 1)
--ease-in:      cubic-bezier(0.4, 0, 1, 1)
--ease-out:     cubic-bezier(0, 0, 0.2, 1)
 
--duration-fast:  150ms   (hover states, color changes)
--duration-base:  250ms   (component transitions)
--duration-slow:  400ms   (page elements, modals)
```
 
Always respect `prefers-reduced-motion` — reduce all animation to 0.01ms when set.
 
Dropdown animation: `opacity 0 → 1` + `translateY(-4px → 0)` at `--duration-fast`.
 
---
 
## 8. Canvas/Art Design Integration
 
When using this skill alongside `canvas-design`:
 
1. **Anchor the palette** to brand colors — earth greens and terracotta as the core, neutrals as ground
2. **Typography:** Cal Sans or Playfair Display for display moments; Inter for minimal text accents
3. **Textures that fit the brand:** organic grain, paper texture, botanical motifs, root/growth systems as subtle visual metaphors
4. **Motifs to draw from:** root systems, tree rings, growth patterns, layered earth strata, hand-drawn botanical line work
5. **What to avoid:** overly digital/tech aesthetics, neon accents, cold blues or grays, corporate sans-serif rigidity, stock photo energy
**Design philosophy keywords for canvas work:**
"Rooted Clarity" — organic form meets editorial precision. Warm earth tones as ground. Structural grid softened by natural rhythm. Typography whispered or declared, never shouted. Every composition feels like it grew from the ground up.
 
---