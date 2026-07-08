# Moonbound Café — Developer Task Checklist

Organized as feature branches with atomic commits. Build only what the current phase needs.

---

## Branch: `setup/foundation`

- [x] Install Framer Motion — `npm install framer-motion` (Confirmed already installed)
- [x] Delete `src/App.css`
- [x] Delete `src/pages/landing-page/`
- [x] **Commit:** `chore: remove scaffold boilerplate` (Skipped per instruction)

---

- [x] Extend `tailwind.config.js` — colors, fonts, `maxWidth`, `fontSize` tokens (see plan §1.1)
- [x] **Commit:** `chore: add design tokens to tailwind config` (Skipped per instruction)

---

- [x] Update `index.html` — Google Fonts link tags (Fraunces, Inter, Caveat), updated `<title>`, meta description, OG tags, JSON-LD schema, `bg-moon-ivory` on `<body>`
- [x] **Commit:** `chore: add fonts, meta tags, and JSON-LD to index.html` (Skipped per instruction)

---

- [x] Replace `src/index.css` — Tailwind directives, base body/heading/link styles, global `focus-visible` ring, `prefers-reduced-motion` blanket disable
- [x] **Commit:** `style: global base styles and reduced-motion support` (Skipped per instruction)

---

- [x] Create `src/types/index.ts` — `ShelfItem`, `EventItem`, `NavLinkItem`, `PageMeta`
- [x] **Commit:** `feat: add shared TypeScript types` (Skipped per instruction)

---

- [x] Create `src/hooks/useReducedMotion.ts`
- [x] Create `src/hooks/usePageMeta.ts`
- [x] **Commit:** `feat: add useReducedMotion and usePageMeta hooks` (Skipped per instruction)


---

## Branch: `feat/layout-shell`

> Goal: get a working shell with nav, footer, and routing before any page content.

- [x] Create `src/data/navigation.ts` — `navLinks` array
- [x] Create `src/components/layout/Navbar.tsx` — desktop + mobile toggle (no icon library), active link state via `useLocation`
- [x] **Commit:** `feat: navbar with desktop and mobile toggle` (Skipped per instruction)

---

- [x] Create `src/components/common/SkipToContent.tsx` — skip link to `#main-content`
- [x] Create `src/data/siteMetadata.ts` — `pageMeta` per page, `contactInfo` (address, hours, directions, social)
- [x] Create `src/components/layout/Footer.tsx` — nav links, email, Instagram, "est." line
- [x] **Commit:** `feat: footer with nav links and contact info` (Skipped per instruction)

---

- [x] Create `src/components/layout/Layout.tsx` — `SkipToContent` + `Navbar` + `<main id="main-content">` + `Outlet` + `Footer`
- [x] Update `src/App.tsx` — Layout route wrapping all 6 routes (Home, Our Story, Shelves & Cups, Events, Visit, NotFound); stub each page as a one-liner placeholder component inline so routing works
- [x] Update `src/main.tsx` — add `ScrollToTop` using `useLocation`
- [x] **Commit:** `feat: layout shell with routing and scroll-to-top` (Skipped per instruction)

---

- [x] Smoke-test: `npm run dev` — visit all routes, confirm nav and footer render, confirm scroll-to-top works, confirm mobile toggle works
- [x] **Commit:** `chore: layout shell verified` (Skipped per instruction)


---

## Branch: `feat/home-page`

> Builds the three Home components. Icons and UI primitives created only as needed here.

- [ ] Create `src/assets/icons/MoonIcon.tsx` — needed by Hero and later shared
- [ ] Create `src/pages/home/components/Hero.tsx` — full-viewport dark section, title/tagline, Framer Motion moonrise glow + text fade-up (Motion Moment 1), reduced-motion guard
- [ ] **Commit:** `feat: home hero with moonrise animation`

---

- [ ] Create `src/pages/home/components/BrandIntro.tsx` — ivory section, centered prose, decorative MoonIcon, exact copy
- [ ] Create `src/assets/icons/StarIcon.tsx` — needed by SectionDivider
- [ ] Create `src/components/layout/SectionDivider.tsx` — gold line + star motif, `aria-hidden`
- [ ] **Commit:** `feat: brand intro section and section divider`

---

- [ ] Generate images: `doorway-story.jpg`, `doorway-shelves.jpg`, `doorway-events.jpg` — place in `public/images/` (use ChatGPT prompts from plan §Phase 5)
- [ ] Create `src/pages/home/components/Doorways.tsx` — 3-card grid with images, hover scale, links to inner pages
- [ ] **Commit:** `feat: home doorways section with images`

---

- [ ] Assemble `src/pages/home/index.tsx` — `usePageMeta`, compose Hero + BrandIntro + SectionDivider + Doorways
- [ ] **Commit:** `feat: home page complete`

---

## Branch: `feat/our-story-page`

- [ ] Generate images: `story-exterior.jpg`, `story-shelves.jpg`, `story-cups.jpg`, `story-moon.jpg` — place in `public/images/`
- [ ] **Commit:** `assets: our story images`

---

- [ ] Create `src/components/ui/FramedImage.tsx` — polaroid wrapper, `loading="lazy"`, `rotate` via `className`, caption in Caveat font
- [ ] Create `src/components/ui/PullQuote.tsx` — serif italic blockquote, decorative `"` character (`aria-hidden`), attribution in `walnut-brown/70`
- [ ] Create `src/pages/our-story/components/StoryPassage.tsx` — two-column layout, text + `FramedImage`, `reverse` prop
- [ ] **Commit:** `feat: story passage component with framed image and pull quote`

---

- [ ] Create `src/components/common/NextPageLink.tsx` — needs `GhostButton`
- [ ] Create `src/components/ui/GhostButton.tsx` — outline button, renders as `<Link>` if `href` provided
- [ ] **Commit:** `feat: ghost button and next-page link`

---

- [ ] Assemble `src/pages/our-story/index.tsx` — `usePageMeta`, `PageHeader`, 4× `StoryPassage`, `PullQuote`, `NextPageLink`
- [ ] Create `src/components/common/PageHeader.tsx` — dark section with `MoonIcon`, `<h1>`, optional subtitle (needed here and by all remaining pages)
- [ ] **Commit:** `feat: our story page complete`

---

## Branch: `feat/shelves-and-cups-page`

- [ ] Create `src/data/shelvesData.ts` — 14 items + `featuredItem` + `featuredNote`
- [ ] **Commit:** `feat: shelves and cups data`

---

- [ ] Create `src/assets/icons/BookIcon.tsx`
- [ ] Create `src/assets/icons/CupIcon.tsx`
- [ ] Create `src/components/ui/Tag.tsx` — small chip in `dusty-sage/20`, text `walnut-brown`
- [ ] Create `src/components/ui/FilterToggle.tsx` — `role="tablist"`, arrow-key navigation, active/inactive states, responsive (full-width mobile, inline desktop)
- [ ] **Commit:** `feat: filter toggle with full keyboard and ARIA support`

---

- [ ] Generate image: `featured-book.jpg` — place in `public/images/`
- [ ] Create `src/pages/shelves-and-cups/components/FeaturedItem.tsx` — dark bg section, `FramedImage`, label/title/author/description/handwritten note
- [ ] **Commit:** `feat: featured book section`

---

- [ ] Create `src/pages/shelves-and-cups/components/ItemCard.tsx` — card with `Tag`, icon, title, author, description, price; `line-clamp` overflow; Framer Motion constellation hover-line SVG (Motion Moment 2)
- [ ] Add `animate-fadeIn` keyframe to `src/index.css`
- [ ] Create `src/pages/shelves-and-cups/components/ShelvesGrid.tsx` — responsive 1→2→3 grid, `key={activeFilter}` for CSS crossfade
- [ ] **Commit:** `feat: shelves grid with item cards and constellation hover animation`

---

- [ ] Assemble `src/pages/shelves-and-cups/index.tsx` — `usePageMeta`, `PageHeader`, `FeaturedItem`, `FilterToggle` + filter logic, `ShelvesGrid`, `NextPageLink`
- [ ] **Commit:** `feat: shelves and cups page complete`

---

## Branch: `feat/events-page`

- [ ] Create `src/data/eventsData.ts` — 5 events
- [ ] **Commit:** `feat: events data`

---

- [ ] Create `src/pages/events/components/EventCard.tsx` — `<motion.article>` with `whileInView` fade-up (Motion Moment 3), `once: true`, stagger by `index`, `<time datetime>`, date formatter, `Tag`; reduced-motion guard
- [ ] Create `src/pages/events/components/EmptyState.tsx` — `MoonIcon`, in-voice message
- [ ] Create `src/pages/events/components/EventList.tsx` — vertical stack, optional "Past Events" heading + `opacity-60`
- [ ] **Commit:** `feat: event card with scroll animation, event list, empty state`

---

- [ ] Assemble `src/pages/events/index.tsx` — `usePageMeta`, `PageHeader`, upcoming/past split logic, `EventList` or `EmptyState`, `NextPageLink`
- [ ] **Commit:** `feat: events page complete`

---

## Branch: `feat/visit-page`

- [ ] Generate images: `visit-entrance.jpg`, `visit-interior.jpg`, `visit-window.jpg` — place in `public/images/`
- [ ] **Commit:** `assets: visit page images`

---

- [ ] Create `src/pages/visit/components/AddressBlock.tsx` — `MoonIcon`, address lines, email and Instagram links
- [ ] Create `src/pages/visit/components/HoursTable.tsx` — `<dl>` rows, highlight today's day, "Closed" italic styling
- [ ] Create `src/pages/visit/components/AmbianceGallery.tsx` — 3× `FramedImage` with varied rotations and captions; first image `loading="eager"`, others `lazy`
- [ ] Create `src/pages/visit/components/DirectionsBlurb.tsx` — heading + body text from `contactInfo.directions`
- [ ] **Commit:** `feat: visit page components`

---

- [ ] Assemble `src/pages/visit/index.tsx` — `usePageMeta`, `PageHeader`, two-column layout (AddressBlock + HoursTable / AmbianceGallery), `DirectionsBlurb`
- [ ] **Commit:** `feat: visit page complete`

---

## Branch: `feat/not-found-page`

- [ ] Create `src/pages/not-found/index.tsx` — `MoonIcon`, in-voice message, `GhostButton` back to home
- [ ] **Commit:** `feat: 404 not found page`

---

## Branch: `feat/seo-and-static`

- [ ] Generate `og-image.jpg` (1200×630) — place in `public/images/`
- [ ] Replace `public/favicon.svg` — hand-code crescent moon SVG in antique gold, single stroke, no fill
- [ ] Add per-page OG image meta tags (update `usePageMeta` or inline in each page's `<head>` equiv)
- [ ] Create `public/sitemap.xml`
- [ ] Create `public/robots.txt`
- [ ] **Commit:** `feat: OG image, favicon, sitemap, robots.txt`

---

## Branch: `qa/responsive-and-accessibility`

- [ ] **Responsive pass** — check all pages at 320px, 375px, 768px, 1024px, 1440px; fix any horizontal scroll or layout breaks
- [ ] **Keyboard pass** — tab through every interactive element; verify filter toggle arrow key navigation; verify skip-to-content link reaches `#main-content`
- [ ] **Reduced motion** — enable in DevTools OS settings; confirm all 3 Framer Motion moments are inert; confirm CSS `animate-fadeIn` is suppressed
- [ ] **Color contrast spot-check** — verify no decorative color (antique-gold, dusty-sage, warm-amber) is used as text on moon-ivory backgrounds
- [ ] **Commit:** `fix: responsive and accessibility QA`

---

## Branch: `qa/performance`

- [ ] Run `npm run build` — confirm zero TypeScript and build errors
- [ ] Run Lighthouse on Home, Our Story, Shelves & Cups, Events, Visit — target 95+ on all four categories
- [ ] Confirm all images have explicit `width` and `height` attributes (CLS prevention)
- [ ] Confirm `loading="lazy"` on all below-the-fold images, `loading="eager"` on hero/first images
- [ ] Confirm `font-display: swap` is in the Google Fonts URL (it's in the `display=swap` param by default)
- [ ] **Commit:** `perf: image optimization and Lighthouse fixes`

---

## Branch: `qa/cross-browser`

- [ ] Spot-check Chrome, Firefox, Edge — all 5 pages
- [ ] Spot-check iOS Safari (if device available) — nav, filter toggle, images
- [ ] **Commit:** `fix: cross-browser compatibility`

---

## Done

- [ ] Deploy to Vercel / static host
- [ ] Verify all routes resolve (check `vercel.json` rewrites are in place)
- [ ] Confirm HTTPS active
- [ ] Run final Lighthouse on production URL
