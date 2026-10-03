# Design token audit (Phase 1, Task 1)

Read-only inventory of current visual tokens. No visual edits in this commit.

## Sources

- `src/app/globals.css` — primary palette, type scale, spacing, radii, shadows, focus ring
- `src/styles/greenhouse.css` — extra brand tokens (`--earth-deep`, `--beige-deep`), `--font-display: Cal Sans`, eyebrows, `.reveal`, `.btn-terra`
- Page CSS under `src/app/(main)/` and `src/app/(admin-auth)/auth.css`

## Color tokens (`:root`)

| Token | Value | Role today |
| --- | --- | --- |
| `--earth` | `#5c6b4a` | Primary brand / buttons / links |
| `--earth-dark` | `#4a5638` | Hover / headings on light |
| `--earth-light` | `#8b9b7a` | Accents |
| `--earth-mist` | `#a8b89a` | Soft earth |
| `--earth-deep` | `#3a4330` | Dark earth sections (greenhouse only) |
| `--terracotta` | `#b05931` | Secondary CTA fill, eyebrows |
| `--terracotta-dark` | `#923c29` | Hover |
| `--terracotta-light` | `#d5a372` | Highlights |
| `--white` | `#ffffff` | Surfaces |
| `--neutral-bg` | `#faf7f2` | Page background |
| `--beige-bg` | `#f0ede7` | Alternate sections |
| `--beige-deep` | `#e7e0d4` | Deeper beige (greenhouse only) |
| `--border-beige` | `#e8ded0` | Borders |
| `--border-greige` | `#d9d5ce` | Borders |
| `--text-black` | `#1a1a1a` | Headings |
| `--text-dark` | `#2d2d2d` | Body |
| `--text-muted` | `#6b6b6b` | Secondary text |
| `--text-light` | `#8a8a8a` | Tertiary |
| `--text-on-dark` | `#faf7f2` | Text on earth |

## Typography

- Body: Inter via `--font-body` (next/font in `src/app/layout.tsx`)
- Serif: Newsreader via `--font-serif` (loaded but **not** used as heading display)
- Display/headings: **Cal Sans** via `--font-display` in `greenhouse.css`; `h1–h6` use it
- Eyebrows / kickers: uppercase, tracked, mono (`--font-mono`)
- Fluid type: `--text-xs` through `--text-5xl` already clamp-based

**Integrity note:** globally switching `--font-display` to Newsreader would restyle every unrebuilt page. Phase 1 new UI uses Newsreader locally; old pages keep Cal Sans.

## Spacing, radius, motion, focus

- Spacing: `--space-xs` … `--space-hero`, `--container-pad`
- Radius: `--radius-sm` … `--radius-full`
- Motion: `--duration-fast/base/slow`, `--ease-default`; greenhouse `--dur` / `--ease`
- Focus: `--focus-ring: 0 0 0 2px var(--neutral-bg), 0 0 0 4px var(--earth)`
- Scroll-triggered `.reveal` in `SiteAnimations.tsx` + greenhouse CSS

## Hardcoded hex still in page CSS

Identical-value fallbacks (`var(--earth, #5C6B4A)`) are common. True extras:

- `#000` brand-mark border (`greenhouse.css`)
- Blog page `#ffffff` backgrounds; LinkedIn `#0A66C2`
- Auth success/error greens/reds (`#ECFDF5`, `#065F46`, `#FEF2F2`, `#991B1B`)
- Contact/legal error reds `#B91C1C`, `#DC2626`
- Mixed `--text-dark` fallback `#2C2C2C` vs token `#2d2d2d` (`about.css`)

Task 2 may replace a hardcoded value **only** when it matches an existing token hex. Do not strip `.eyebrow`, Cal Sans, or `.reveal` globally.

## Buttons (current)

- Primary earth fill (`.btn` / `.btn-earth`)
- Terracotta fill (`.btn-terra`) — keep on old pages; new Phase 1 buttons: earth fill + earth outline, no terracotta fill
