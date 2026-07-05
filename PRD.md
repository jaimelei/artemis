# Moonbound Café, Artemis
### Product Requirements Document
*A fictional premium reading café, built as a realistic, frontend-only client deliverable.*

---

## 1. Executive Summary

Moonbound Café, Artemis is a five-page marketing and storytelling site for a fictional reading café inspired by the quiet symbolism of Artemis — moonlight, solitude, curiosity, ritual. It is built as if a real café hired a solo developer for a complete, static, no-maintenance website: no CMS, no auth, no payments, no reservations. React + TypeScript + Vite + Tailwind, with Framer Motion used for exactly three signature moments. MVP is the full site — there is no phased rollout, because there is nothing to phase.

---

## 2. Brand Identity

- **Name:** Moonbound Café, Artemis
- **One-line positioning:** A hidden library café where visitors lose track of time beneath the moon.
- **Tone:** quiet, warm, unhurried, literary, nocturnal, handwritten — never mystical-fantasy, never twee.
- **Anti-goal:** must never read as a Greek mythology museum. Artemis is a mood, not a subject.

---

## 3. Brand Story

Moonbound Café, Artemis is a handcrafted reading café where books, coffee, and moonlight meet. The site should feel like opening an old journal — handwritten notes, pressed flowers, coffee rings, bookmarks, stories collected over time. Magic is communicated through atmosphere and restraint, not through elaborate fantasy staging.

---

## 4. Product Vision

A site people remember for how it made them feel, not for what it told them. Warmth and nostalgia land before information does. A visitor should close the tab wanting to go sit in this café in person.

---

## 5. Emotional Experience Goals

| Moment | Feeling target |
|---|---|
| First 3 seconds (Home load) | "Oh — this is calm." Immediate tonal clarity. |
| First 30 seconds | Curiosity to keep scrolling; sense of a considered, personal space. |
| By end of session | Understands the café's personality, has browsed books/drinks, knows events exist, knows where to find it. |
| After leaving | Wants to visit in person; remembers one specific image or line, not a feature list. |

---

## 6. Design Philosophy

Recurring motifs: reading beneath moonlight, worn leather books, candlelight, wooden bookshelves, rain on windows, pressed flowers in books, astronomical sketches, ink illustrations, slow living.

**Governing principle: atmosphere over ornamentation.** Every decorative element must justify itself emotionally or it gets cut — this is what keeps a 5-page site from feeling thin or a heavily-decorated one from feeling cluttered.

---

## 7. Target Audience & Personas

This is built for real café visitors, as if the café actually exists.

**The Regular Reader** — comes for the quiet, wants to know: is there a good corner to read in, what's the vibe, what's on the menu. Needs: Our Story, The Shelves & Cups.

**The Remote Worker** — evaluating it as a place to sit for two hours. Needs: ambiance cues (Home, Our Story), hours/location (Visit).

**The Quiet Date Night** — looking for somewhere unusual and calm for a second or third date. Needs: atmosphere (Home), whether there's something happening that night (Events), how to get there (Visit).

All three personas are low-urgency browsers, not conversion-driven shoppers — this justifies "storytelling over conversion" as a real UX decision, not just a slogan.

---

## 8. User Journeys

**Journey A — Discovery via search/social:** lands on Home → immediately gets tone → scrolls into Our Story for the "why" → browses The Shelves & Cups → checks Visit for hours/address.

**Journey B — Existing fan checking for something happening:** lands directly on Events (bookmarked or linked from social) → checks date/details → jumps to Visit for logistics.

**Journey C — Date-night scout:** Home → Our Story (checking it's actually calm, not gimmicky) → Events (anything on tonight?) → Visit.

Every journey terminates at **Visit** — this confirms Visit is the true "bottom of funnel" page even without booking, and should always be one click away via footer/nav from anywhere.

---

## 9. Information Architecture

```
Home
├── Our Story
├── The Shelves & Cups   (books + drinks/desserts, combined)
├── Events
└── Visit

Footer (persistent, all pages)
└── Contact — email + social links only, no form
```

Five pages, no dedicated Contact page — contact is static info living in the footer, since a form would require an external service and there's nothing to submit to (no reservations, no orders).

---

## 10. Navigation Structure

- **Desktop:** simple horizontal nav, 4 links (Home / Our Story / The Shelves & Cups / Events / Visit — 5 links total including Home, or Home as logo + 4 links). Recommend: wordmark/logo = Home, plus 4 nav links.
- **Mobile:** given only 4 links, a full hamburger-drawer pattern is unnecessary complexity. Use a simple text toggle ("Menu") that expands a vertical list in place — no icon library, no overlay/drawer animation library needed.
- **Footer:** repeats the 4 links + contact/social + a small "est." line for flavor.

---

## 11. Page Specifications

### 11.1 Home
**Purpose:** deliver tonal clarity in the first 3 seconds.
**Key sections:** full-height hero (title, one-line tagline, subtle moonrise motion — see Motion Moment 1), a short 2–3 line brand intro, 3 visual "doorways" into Our Story / Shelves & Cups / Events, footer.
**Complexity:** Medium (hero motion is the only bespoke build here).

### 11.2 Our Story
**Purpose:** deliver the brand story/why, in restrained second-person-adjacent prose (not first-person "we" corporate copy — keep it closer to a journal entry).
**Key sections:** long-form narrative broken into 3–4 short passages, each paired with one illustration or photo, pull-quote treatment for one key line.
**Complexity:** Low — mostly static content + one illustration component reused.

### 11.3 The Shelves & Cups
**Purpose:** let visitors browse books and drinks/desserts as one unified ritual, not two separate errands.
**Key sections:** filter toggle (Books / Drinks & Desserts / All), card grid, one featured "Book of the Moon" or seasonal drink pull-out above the grid.
**Complexity:** High — this is the one page with real interactive state. See Feature Spec 11.6 below.

### 11.4 Events
**Purpose:** show what's coming up (readings, book clubs, moon-phase gatherings) without needing a booking system.
**Key sections:** chronological list of event cards (date, title, one-line description), empty state for no upcoming events.
**Complexity:** Low–Medium. See Feature Spec 11.7 below.

### 11.5 Visit
**Purpose:** answer "where and when" clearly and fast — this is the true bottom-of-funnel page.
**Key sections:** fictional address block, hours table, 2–3 ambiance photos, directions blurb (text only, no embedded map).
**Complexity:** Low.

---

### 11.6 Feature Spec — Shelves & Cups Filter Toggle

| Field | Detail |
|---|---|
| Purpose | Let visitors narrow the combined grid to Books, Drinks & Desserts, or All |
| Description | Three-way toggle/tab control above the card grid; filtering happens client-side against a static local data array |
| User story | As a visitor, I want to see just the books (or just the drinks) if that's what I'm curious about, without leaving the page |
| Acceptance criteria | Selecting a filter updates the grid instantly with no page reload; selected state is visually and programmatically indicated; keyboard-operable |
| Loading state | None needed — data is bundled at build time, not fetched |
| Empty state | Not applicable if both categories are always populated; if a category is ever empty, show "Nothing here yet — check back soon" |
| Error state | Not applicable (no network call, no failure mode) |
| Validation rules | None (no user input, only selection) |
| Accessibility | Implement as a `role="tablist"`/`role="tab"` pattern or a `<fieldset>` of radio-styled buttons; visible focus ring; announce selected filter via `aria-selected` or `aria-checked` |
| Responsive behavior | Full-width segmented control on mobile, inline on desktop; grid reflows 1 → 2 → 3 columns |
| Motion guidelines | Simple crossfade of the grid (150–200ms) on filter change — no card-flip or stagger; must respect `prefers-reduced-motion` |
| Technical notes | Pure client-side array filter over a local TS data file (`shelvesData.ts`); no backend, no API |
| Implementation complexity | **Medium** (state + filtering only, no data fetching) |

---

### 11.7 Feature Spec — Event Cards

| Field | Detail |
|---|---|
| Purpose | Communicate upcoming events clearly and warmly |
| Description | Vertically stacked cards, each with date, title, short description, optional tag (e.g. "Book Club") |
| User story | As a visitor, I want to quickly see if anything's happening soon that I'd want to attend |
| Acceptance criteria | Events display in chronological order; past events either hidden or visually de-emphasized under a "past" divider |
| Loading state | None — static data, bundled at build |
| Empty state | Friendly, in-voice message, e.g. "No events on the calendar right now — check back under a new moon." |
| Error state | Not applicable (no network dependency) |
| Validation rules | None |
| Accessibility | Each card is a semantic `<article>` with a proper heading level; date formatted in both machine-readable (`<time datetime>`) and human-readable form |
| Responsive behavior | Single column at all breakpoints — this content doesn't benefit from a grid |
| Motion guidelines | Gentle fade-up on scroll into view, staggered by ~50ms per card, one-time only (no re-trigger on scroll back) |
| Technical notes | Local TS/JSON data file (`eventsData.ts`); manually edited by the site owner when events change |
| Implementation complexity | **Low** |

---

## 12. Functional Requirements

- All 5 pages render fully with JavaScript disabled (content, nav, images) — motion/filter are enhancements, not requirements for reading the content.
- Shelves & Cups filter works via keyboard alone.
- All internal links resolve; footer links present on every page.
- Site is fully static — buildable and deployable with zero server/runtime dependencies.
- `prefers-reduced-motion` disables all non-essential animation sitewide.

---

## 13. Non-Functional Requirements

- **Stack:** React, TypeScript, Vite, Tailwind CSS, Framer Motion (3 uses only).
- **Hosting:** any static host (Vercel/Netlify/GitHub Pages) — no server runtime required.
- **Browser support:** last 2 versions of Chrome, Firefox, Safari, Edge; iOS Safari.
- **Maintenance model:** zero ongoing maintenance required; content changes are direct code edits to local data files.

---

## 14. UX Requirements

- Generous whitespace; no dense information sections.
- Body copy line length capped around 65–75 characters for readability.
- No aggressive CTAs, no urgency language, no popups — consistent with storytelling-over-conversion.
- Every page ends with a soft path forward (a link to the next logical page), never a hard sell.

---

## 15. UI Design System

Token-based system defined in `tailwind.config.ts` (colors, spacing, type scale, radii) so every component pulls from the same source rather than one-off values.

---

## 16. Color Palette

Hex values below are a starting proposal with contrast ratios calculated against the WCAG relative-luminance formula. Treat these as verified-by-math, but spot-check with a contrast tool (e.g. WebAIM) once real content/images are in place, since text-over-image overlays change the math.

| Token | Hex | Role |
|---|---|---|
| Moon Ivory | `#F5F1E8` | Primary light background |
| Midnight Navy | `#1B2436` | Primary dark background (hero, footer) |
| Ink Black | `#14120F` | Primary body text on light bg |
| Walnut Brown | `#4A3728` | Secondary text/subheadings on light bg |
| Antique Gold | `#B8935A` | Decorative accent only |
| Dusty Sage | `#8A9A82` | Muted UI accents (tags, borders) |
| Warm Amber | `#C97C3D` | CTA/hover accent |

**Verified pairings (calculated, not guessed):**
- Ink Black on Moon Ivory → **~16.6:1** — passes AAA. Use for primary body text.
- Walnut Brown on Moon Ivory → **~10:1** — passes AAA. Use for secondary text/subheads.
- Moon Ivory on Midnight Navy → **~13.8:1** — passes AAA. Use for text on dark sections.
- Antique Gold on Midnight Navy → **~5.4:1** — passes AA normal text. Fine for accent text *only on dark backgrounds*.

**Failing pairings — do not use as text:**
- Antique Gold on Moon Ivory → **~2.5:1** — fails AA even at large text size. Gold on light bg is decorative-only (icon strokes, dividers, borders), never text.
- Dusty Sage on Moon Ivory → **~2.7:1** — fails AA. Same restriction as Gold.
- Warm Amber on Moon Ivory → **~2.9:1** — fails AA. Use only as a background fill, button fill (with dark text on top), or border — never as text color on the ivory base.

This is the single most important accessibility finding in this document: three of the seven brand colors are contrast-safe as text on light backgrounds; the "warm midtone" trio (Gold/Sage/Amber) works beautifully as accents and fills, but never as text on the light base.

---

## 17. Typography System

- **Headings (editorial serif):** Fraunces — literary, slightly idiosyncratic, strong at display sizes.
- **Body (readable):** Inter or Karla — humanist sans, excellent screen legibility at small sizes; pairs cleanly against a serif heading without fighting it.
- **Handwritten accent (sparingly):** Caveat — used only for marginalia-style annotations (a pull-quote signature, a small "note in the margin" callout), never for body or navigation text.

All three are free, self-hostable Google Fonts — load with `font-display: swap` and subset to Latin to keep performance impact low.

---

## 18. Spacing & Layout System

- 8px base spacing scale (Tailwind default extended if needed).
- Max content width for reading-heavy sections (Our Story, event descriptions): ~680px.
- Body line-height: 1.6–1.75.
- Section vertical padding scale: generous (96–160px desktop, 56–80px mobile) to reinforce "slow" pacing.

---

## 19. Component Inventory

Nav bar · Footer · Hero block · Section divider (illustrated) · Book/Drink card · Filter toggle · Event card · Address/hours block · Pull-quote block · Framed image (polaroid/pressed-flower styling) · Primary button · Ghost button · Tag/chip · SVG icon set (moon phases, quill, cup, leaf, constellation dot)

---

## 20. Motion Guidelines

**Three signature moments — the entire motion budget for the site:**

1. **Home hero moonrise fade-in** — on load, a soft radial glow rises behind the title while title/subtitle fade up with a slight stagger. One-time entrance only.
2. **Constellation hover-line on Shelves & Cups cards** — hovering a card draws a thin animated SVG line between small dot accents (stroke-dashoffset animation), evoking connecting stars. Used only on this one component.
3. **Event card fade-up on scroll** — gentle staggered fade-up as event cards enter viewport, one-time per card, no re-trigger.

**Global rules:** everything above respects `prefers-reduced-motion: reduce` by disabling itself entirely (not just shortening). No looping ambient animation, no parallax beyond what's listed, no page-transition effects beyond a simple crossfade if one is added later.

---

## 21. Illustration & Iconography Guidelines

- Line-art SVG only, single stroke weight (~1.5px), monochrome (Ink Black or Walnut Brown).
- Motifs: moon phases, quills, leaves, tea cups, constellation dots.
- No gradients or shading inside icons — flat line work keeps file size trivial and rendering cheap.

---

## 22. Responsive Behavior

- Mobile-first Tailwind breakpoints.
- Nav collapses to expandable text list under `md`.
- Shelves & Cups grid: 1 column (mobile) → 2 (tablet) → 3 (desktop).
- All images use responsive `srcset`/`sizes` to avoid oversized mobile downloads.

---

## 23. Accessibility Requirements (WCAG AA)

- Color contrast per Section 16 pairings — no exceptions for decorative-only colors used as text.
- Full keyboard operability, including the filter toggle and nav.
- Visible custom focus ring (brand-colored, not suppressed) on every interactive element.
- Alt text on every meaningful image; empty `alt=""` on purely decorative images.
- Semantic landmarks (`<nav>`, `<main>`, `<footer>`), one `<h1>` per page, logical heading order.
- Skip-to-content link.
- `prefers-reduced-motion` support sitewide (Section 20).

---

## 24. Performance Requirements

- Lighthouse target: 95+ across Performance, Accessibility, Best Practices, SEO.
- Images served as WebP/AVIF with responsive sizes; lazy-load below-the-fold images.
- Explicit width/height on all images to prevent layout shift.
- Fonts subset + `font-display: swap`.
- No animation library loaded beyond Framer Motion, used for exactly 3 components.
- Tailwind's purge/JIT keeps shipped CSS minimal.

---

## 25. SEO Strategy

- Unique `<title>` and meta description per page.
- Open Graph + Twitter Card images per page.
- `LocalBusiness`/`CafeOrCoffeeShop` JSON-LD schema — note internally that the address is fictional/portfolio data (see Risks).
- `sitemap.xml` and `robots.txt`.
- Descriptive, keyword-natural alt text doing double duty for image SEO.

---

## 26. Analytics Events

Lightweight, privacy-friendly, cookie-free analytics (Plausible, Fathom, or Vercel Analytics) — pageviews by default. Optional custom events, no PII:
- `visit_page_viewed`
- `events_page_viewed`
- `outbound_social_click`

---

## 27. Technical Architecture

Fully static React/TypeScript/Vite/Tailwind build. No backend, no database, no auth, no payment processing, no CMS. All editable content (books, drinks, events) lives in local TypeScript data files the developer edits directly and redeploys — appropriate for a single-owner site with no update cadence requiring non-technical editing. This also means there is no data model, no API surface, and no security surface beyond standard static-hosting practices (HTTPS via host, no user input accepted anywhere on the site).

---

## 28. Content & Interaction Edge Cases

- **No upcoming events:** friendly in-voice empty state (Section 11.7).
- **Very long book/drink titles:** truncate with ellipsis; full title available on hover/focus.
- **JavaScript disabled:** all text, images, and nav links remain fully accessible; only the filter and motion enhancements are unavailable.
- **Font fails to load:** fallback stack (system serif/sans) preserves the same general proportions and readability.
- **Slow connection:** text renders before images/fonts fully load; no invisible-text-until-font-loads (FOIT).
- **Extremely narrow viewport (<320px):** nav and cards remain usable with no horizontal scroll.
- **404:** in-voice styled message ("This page wandered off somewhere") with a link home.

---

## 29. Risks

- **Over-decoration risk:** the brand's visual language is rich; without the caps set in Sections 16 and 20, it's easy to drift into more color-as-text and more motion than either performance or accessibility can absorb. The caps in this document are the guardrail.
- **Handwritten accent overuse:** Caveat is illegible at body-text sizes and in long runs — restrict strictly to short marginalia.
- **Fictional business data:** the address and `LocalBusiness` schema are invented for portfolio purposes. Keep the live site fully immersive as intended, but document the fictional nature clearly wherever this project is presented as portfolio work (README, case study, portfolio index) so it's never mistaken for an undisclosed real business.

---

## 30. MVP Scope & Future Enhancements

**MVP = the entire site as specified.** This is a one-and-done static build with no planned phased rollout or update cadence — there's no reservation system, ordering, or CMS to phase in later.

**Optional future enhancements (not required, not currently scoped):** seasonal moon-phase visual refresh; a lightweight email capture (would introduce a third-party form service dependency, currently out of scope by design).

---

## 31. Development Milestones

1. Tailwind config: color tokens, type scale, spacing scale
2. Layout shell: nav, footer, page routing
3. Home: static content + hero moonrise motion
4. Our Story: static content + illustrations
5. The Shelves & Cups: static grid + filter toggle + hover-line motion
6. Events: card list + empty state + scroll-fade motion
7. Visit: address/hours block + ambiance images
8. Responsive QA pass across all breakpoints
9. Accessibility audit (contrast tool spot-check, keyboard pass, screen reader pass)
10. Performance/Lighthouse pass + image optimization
11. SEO metadata, schema, sitemap
12. Final motion/polish review against Section 20 caps

---

## 32. Acceptance Criteria (Global)

- [ ] All 5 pages built, responsive across mobile/tablet/desktop
- [ ] Lighthouse 95+ across all four categories
- [ ] All text/background pairings verified against Section 16 (no decorative color used as text on light bg)
- [ ] All images have appropriate alt text
- [ ] Filter toggle and nav fully keyboard-operable
- [ ] `prefers-reduced-motion` respected sitewide
- [ ] Deployed to a static host with HTTPS
- [ ] Favicon, OG images, and meta tags set per page
- [ ] Cross-browser check: Chrome, Firefox, Safari, iOS Safari