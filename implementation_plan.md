# Moonbound Café, Artemis — Implementation Plan

A five-page static marketing site for a fictional reading café. React + TypeScript + Vite + Tailwind CSS + Framer Motion.

---

## Existing State

| Item | Status |
|---|---|
| React 19 + Vite 8 | ✅ Installed |
| React Router DOM 7 | ✅ Installed |
| Tailwind CSS 3 | ✅ Installed (empty config) |
| Framer Motion | ❌ Not installed |
| [App.css](file:///d:/Lei/Websites/2026/luna/src/App.css) | Vite boilerplate — **delete** |
| [landing-page/](file:///d:/Lei/Websites/2026/luna/src/pages/landing-page/index.tsx) | Placeholder — **delete** |
| [favicon.svg](file:///d:/Lei/Websites/2026/luna/public/favicon.svg) | Vite default — **replace** |
| [icons.svg](file:///d:/Lei/Websites/2026/luna/public/icons.svg) | Social icons from scaffold — **replace** |

---

## Install

```bash
npm install framer-motion
```

No other dependencies required.

---

## File Operations Summary

### Delete
| File | Reason |
|---|---|
| `src/App.css` | Boilerplate, not used |
| `src/pages/landing-page/` | Replaced by `src/pages/home/` |

### Modify
| File | Change |
|---|---|
| `tailwind.config.js` | Add all design tokens |
| `index.html` | Google Fonts, meta tags, JSON-LD, OG tags |
| `src/index.css` | Base styles, font fallbacks, focus rings, reduced-motion |
| `src/App.tsx` | Layout route + all 6 routes |
| `src/main.tsx` | Add `ScrollToTop` component |

### Create — 48 new files

**Types & Data (5 files)**
| File |
|---|
| `src/types/index.ts` |
| `src/data/navigation.ts` |
| `src/data/shelvesData.ts` |
| `src/data/eventsData.ts` |
| `src/data/siteMetadata.ts` |

**Hooks (2 files)**
| File |
|---|
| `src/hooks/useReducedMotion.ts` |
| `src/hooks/usePageMeta.ts` |

**SVG Icons (6 files)**
| File |
|---|
| `src/assets/icons/MoonIcon.tsx` |
| `src/assets/icons/BookIcon.tsx` |
| `src/assets/icons/CupIcon.tsx` |
| `src/assets/icons/QuillIcon.tsx` |
| `src/assets/icons/LeafIcon.tsx` |
| `src/assets/icons/StarIcon.tsx` |

**UI Components (6 files)**
| File |
|---|
| `src/components/ui/Button.tsx` |
| `src/components/ui/GhostButton.tsx` |
| `src/components/ui/Tag.tsx` |
| `src/components/ui/PullQuote.tsx` |
| `src/components/ui/FramedImage.tsx` |
| `src/components/ui/FilterToggle.tsx` |

**Layout Components (4 files)**
| File |
|---|
| `src/components/layout/Layout.tsx` |
| `src/components/layout/Navbar.tsx` |
| `src/components/layout/Footer.tsx` |
| `src/components/layout/SectionDivider.tsx` |

**Common Components (3 files)**
| File |
|---|
| `src/components/common/SkipToContent.tsx` |
| `src/components/common/PageHeader.tsx` |
| `src/components/common/NextPageLink.tsx` |

**Pages (22 files)**
| File |
|---|
| `src/pages/home/index.tsx` |
| `src/pages/home/components/Hero.tsx` |
| `src/pages/home/components/BrandIntro.tsx` |
| `src/pages/home/components/Doorways.tsx` |
| `src/pages/our-story/index.tsx` |
| `src/pages/our-story/components/StoryPassage.tsx` |
| `src/pages/shelves-and-cups/index.tsx` |
| `src/pages/shelves-and-cups/components/FeaturedItem.tsx` |
| `src/pages/shelves-and-cups/components/ShelvesGrid.tsx` |
| `src/pages/shelves-and-cups/components/ItemCard.tsx` |
| `src/pages/events/index.tsx` |
| `src/pages/events/components/EventCard.tsx` |
| `src/pages/events/components/EventList.tsx` |
| `src/pages/events/components/EmptyState.tsx` |
| `src/pages/visit/index.tsx` |
| `src/pages/visit/components/AddressBlock.tsx` |
| `src/pages/visit/components/HoursTable.tsx` |
| `src/pages/visit/components/DirectionsBlurb.tsx` |
| `src/pages/visit/components/AmbianceGallery.tsx` |
| `src/pages/not-found/index.tsx` |

**Static Files (2 files)**
| File |
|---|
| `public/sitemap.xml` |
| `public/robots.txt` |

**Images (~12 files, AI-generated during execution)**
All placed in `public/images/`.

---

## Phase 1: Foundation

---

### 1.1 Tailwind Configuration

[MODIFY] [tailwind.config.js](file:///d:/Lei/Websites/2026/luna/tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moon-ivory':     '#F5F1E8',
        'midnight-navy':  '#1B2436',
        'ink-black':      '#14120F',
        'walnut-brown':   '#4A3728',
        'antique-gold':   '#B8935A',
        'dusty-sage':     '#8A9A82',
        'warm-amber':     '#C97C3D',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        hand:  ['Caveat', 'cursive'],
      },
      maxWidth: {
        'reading': '42.5rem',   // 680px — prose column
        'content': '72rem',     // 1152px — full content area
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
}
```

**Token usage rules (never violate):**
| Pairing | Ratio | Usage |
|---|---|---|
| `ink-black` on `moon-ivory` | ~16.6:1 AAA | Primary body text |
| `walnut-brown` on `moon-ivory` | ~10:1 AAA | Secondary text, subheadings |
| `moon-ivory` on `midnight-navy` | ~13.8:1 AAA | Text on dark sections |
| `antique-gold` on `midnight-navy` | ~5.4:1 AA | Accent text on dark backgrounds only |
| `antique-gold` on `moon-ivory` | ❌ 2.5:1 FAIL | **Never as text.** Decorative borders/icons only. |
| `dusty-sage` on `moon-ivory` | ❌ 2.7:1 FAIL | **Never as text.** Tags bg fill, borders only. |
| `warm-amber` on `moon-ivory` | ❌ 2.9:1 FAIL | **Never as text.** Button fills only (with dark text on top). |

---

### 1.2 Font Loading

[MODIFY] [index.html](file:///d:/Lei/Websites/2026/luna/index.html)

Add to `<head>`, before `</head>`:

```html
<!-- Google Fonts: Fraunces (headings), Inter (body), Caveat (handwritten accent) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

Update `<title>`:
```html
<title>Moonbound Café, Artemis — A Hidden Library Café</title>
```

Add meta description:
```html
<meta name="description" content="A hidden library café where books, coffee, and moonlight meet. Come lose track of time beneath the moon." />
```

Add Open Graph tags:
```html
<meta property="og:title" content="Moonbound Café, Artemis" />
<meta property="og:description" content="A hidden library café where books, coffee, and moonlight meet." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/images/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

Add JSON-LD structured data (before `</head>`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Moonbound Café, Artemis",
  "description": "A hidden library café where visitors lose track of time beneath the moon.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "23 Crescent Lane",
    "addressLocality": "Moonhaven",
    "addressRegion": "OR",
    "postalCode": "97401",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "00:00", "closes": "00:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "21:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday","Saturday"], "opens": "08:00", "closes": "23:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "19:00" }
  ],
  "email": "hello@moonboundcafe.com",
  "url": "https://moonboundcafe.com"
}
</script>
```

Set `<html>` background color for dark flash prevention:
```html
<body class="bg-moon-ivory">
```

---

### 1.3 Global Styles

[MODIFY] [src/index.css](file:///d:/Lei/Websites/2026/luna/src/index.css)

Replace entire contents:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Smooth scrolling — disabled for reduced motion */
  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Base body */
  body {
    @apply bg-moon-ivory text-ink-black font-sans antialiased;
    line-height: 1.75;
  }

  /* Typography defaults */
  h1, h2, h3, h4 {
    @apply font-serif text-ink-black;
    line-height: 1.2;
  }

  /* Custom focus ring — brand-colored, visible on all interactive elements */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-warm-amber;
    outline-style: solid;
  }

  /* Remove default link underlines — controlled per component */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Image defaults */
  img {
    @apply max-w-full h-auto block;
  }
}
```

---

### 1.4 Type Definitions

[NEW] `src/types/index.ts`

```ts
export interface ShelfItem {
  id: string;
  title: string;
  category: 'book' | 'drink' | 'dessert';
  description: string;
  /** Author name — books only */
  author?: string;
  /** Price string — drinks/desserts only */
  price?: string;
  /** Display tag, e.g. "Fiction", "Seasonal", "House Favorite" */
  tag: string;
}

export interface EventItem {
  id: string;
  /** ISO date string, e.g. "2026-07-12" */
  date: string;
  title: string;
  description: string;
  /** e.g. "Book Club", "Reading Night", "Writing Circle" */
  tag: string;
}

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface PageMeta {
  title: string;
  description: string;
}
```

---

### 1.5 Data Files

#### [NEW] `src/data/navigation.ts`

```ts
import type { NavLinkItem } from '../types';

export const navLinks: NavLinkItem[] = [
  { label: 'Our Story', to: '/our-story' },
  { label: 'The Shelves & Cups', to: '/shelves-and-cups' },
  { label: 'Events', to: '/events' },
  { label: 'Visit', to: '/visit' },
];
```

---

#### [NEW] `src/data/shelvesData.ts`

```ts
import type { ShelfItem } from '../types';

export const shelvesData: ShelfItem[] = [
  {
    id: 'night-circus',
    title: 'The Night Circus',
    category: 'book',
    author: 'Erin Morgenstern',
    description: 'A competition between two young magicians unfolds within a mysterious circus that only appears at night.',
    tag: 'Fiction',
  },
  {
    id: 'piranesi',
    title: 'Piranesi',
    category: 'book',
    author: 'Susanna Clarke',
    description: 'A man navigates an infinite house filled with tides and statues, slowly uncovering the nature of his world.',
    tag: 'Fiction',
  },
  {
    id: 'house-cerulean-sea',
    title: 'The House in the Cerulean Sea',
    category: 'book',
    author: 'TJ Klune',
    description: 'A caseworker discovers magic and family in the most unexpected place at the edge of the world.',
    tag: 'Fiction',
  },
  {
    id: 'circe',
    title: 'Circe',
    category: 'book',
    author: 'Madeline Miller',
    description: 'The story of mythology\'s most famous witch, told from her own perspective on a remote island.',
    tag: 'Mythology',
  },
  {
    id: 'starless-sea',
    title: 'The Starless Sea',
    category: 'book',
    author: 'Erin Morgenstern',
    description: 'A graduate student follows a trail of clues into an underground world of stories and lost libraries.',
    tag: 'Fiction',
  },
  {
    id: 'klara-and-the-sun',
    title: 'Klara and the Sun',
    category: 'book',
    author: 'Kazuo Ishiguro',
    description: 'An artificial friend observes the world from a store window, learning what it means to love.',
    tag: 'Literary',
  },
  {
    id: 'moonrise-latte',
    title: 'Moonrise Latte',
    category: 'drink',
    description: 'Oat milk, honey, lavender — served warm with a dusting of cinnamon.',
    price: '$6',
    tag: 'House Favorite',
  },
  {
    id: 'the-artemis',
    title: 'The Artemis',
    category: 'drink',
    description: 'Double espresso, dark chocolate, a whisper of orange peel.',
    price: '$5.50',
    tag: 'Espresso',
  },
  {
    id: 'crescent-tea',
    title: 'Crescent Tea',
    category: 'drink',
    description: 'White peony tea with dried jasmine and a sliver of lemon.',
    price: '$4.50',
    tag: 'Tea',
  },
  {
    id: 'stargazers-cocoa',
    title: "Stargazer's Cocoa",
    category: 'drink',
    description: 'Rich dark cocoa with toasted marshmallow and sea salt.',
    price: '$6',
    tag: 'Seasonal',
  },
  {
    id: 'pressed-flower-cake',
    title: 'Pressed Flower Cake',
    category: 'dessert',
    description: 'Lemon sponge with edible flowers and honey glaze.',
    price: '$7',
    tag: 'Dessert',
  },
  {
    id: 'midnight-brownie',
    title: 'Midnight Brownie',
    category: 'dessert',
    description: 'Dense dark chocolate brownie with walnut and espresso.',
    price: '$5',
    tag: 'Dessert',
  },
  {
    id: 'new-moon-cold-brew',
    title: 'New Moon Cold Brew',
    category: 'drink',
    description: '24-hour cold brew, black as a new moon, with a touch of vanilla.',
    price: '$5',
    tag: 'Cold',
  },
  {
    id: 'bookkeepers-chai',
    title: "Bookkeeper's Chai",
    category: 'drink',
    description: 'Masala chai with cardamom, ginger, and a cinnamon stick.',
    price: '$5',
    tag: 'Tea',
  },
];

/** The featured item displayed above the grid */
export const featuredItem: ShelfItem = {
  id: 'starless-sea',
  title: 'The Starless Sea',
  category: 'book',
  author: 'Erin Morgenstern',
  description: 'A graduate student follows a trail of clues into an underground world of stories and lost libraries. This is a book about books, about stories within stories, about finding the door that was always meant for you.',
  tag: 'Book of the Moon',
};

/** Handwritten note displayed alongside the featured item (in Caveat font) */
export const featuredNote = 'Found between the cushions of the green armchair, third shelf from the window.';
```

---

#### [NEW] `src/data/eventsData.ts`

```ts
import type { EventItem } from '../types';

export const eventsData: EventItem[] = [
  {
    id: 'full-moon-reading',
    date: '2026-07-12',
    title: 'Full Moon Reading Night',
    description: 'Bring a book, find a corner, read by candlelight until closing. No agenda, no discussion — just quiet company.',
    tag: 'Reading Night',
  },
  {
    id: 'book-club-july',
    date: '2026-07-19',
    title: 'Moonbound Book Club',
    description: "This month we're reading Piranesi by Susanna Clarke. Tea provided, opinions welcome.",
    tag: 'Book Club',
  },
  {
    id: 'new-moon-writing',
    date: '2026-08-02',
    title: 'New Moon Writing Circle',
    description: "A two-hour window to write, sketch, or journal. Prompts on the table if you want them, silence if you don't.",
    tag: 'Writing Circle',
  },
  {
    id: 'poetry-espresso',
    date: '2026-08-15',
    title: 'Poetry & Espresso',
    description: 'An evening of short readings — yours or borrowed. Five minutes each, no microphone, just voices.',
    tag: 'Open Mic',
  },
  {
    id: 'autumn-equinox',
    date: '2026-09-06',
    title: 'Autumn Equinox Gathering',
    description: 'Seasonal menu launch, warm cider, and a reading from a local author. Doors open at dusk.',
    tag: 'Seasonal',
  },
];
```

---

#### [NEW] `src/data/siteMetadata.ts`

Per-page SEO metadata.

```ts
import type { PageMeta } from '../types';

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: 'Moonbound Café, Artemis — A Hidden Library Café',
    description: 'A hidden library café where books, coffee, and moonlight meet. Come lose track of time beneath the moon.',
  },
  'our-story': {
    title: 'Our Story — Moonbound Café, Artemis',
    description: 'How a brass moon and two oak bookcases became a café. The story of Moonbound Café, Artemis.',
  },
  'shelves-and-cups': {
    title: 'The Shelves & Cups — Moonbound Café, Artemis',
    description: 'Browse our curated bookshelves and handcrafted drinks menu. Books worth losing an afternoon in, drinks worth staying for.',
  },
  events: {
    title: 'Events — Moonbound Café, Artemis',
    description: 'Readings, book clubs, writing circles, and quiet gatherings at Moonbound Café, Artemis.',
  },
  visit: {
    title: 'Visit — Moonbound Café, Artemis',
    description: 'Find us at 23 Crescent Lane, Moonhaven. Hours, directions, and everything you need to visit Moonbound Café.',
  },
  'not-found': {
    title: 'Page Not Found — Moonbound Café, Artemis',
    description: 'This page wandered off somewhere.',
  },
};

/** Contact & social info — used in Footer and Visit page */
export const contactInfo = {
  email: 'hello@moonboundcafe.com',
  instagram: '@moonboundcafe',
  instagramUrl: 'https://instagram.com/moonboundcafe',
  address: {
    street: '23 Crescent Lane',
    city: 'Moonhaven',
    state: 'Oregon',
    stateAbbr: 'OR',
    zip: '97401',
  },
  hours: [
    { day: 'Monday', hours: 'Closed', isClosed: true },
    { day: 'Tuesday', hours: '8:00 AM – 9:00 PM', isClosed: false },
    { day: 'Wednesday', hours: '8:00 AM – 9:00 PM', isClosed: false },
    { day: 'Thursday', hours: '8:00 AM – 9:00 PM', isClosed: false },
    { day: 'Friday', hours: '8:00 AM – 11:00 PM', isClosed: false },
    { day: 'Saturday', hours: '8:00 AM – 11:00 PM', isClosed: false },
    { day: 'Sunday', hours: '9:00 AM – 7:00 PM', isClosed: false },
  ],
  directions: "We're tucked behind the old Moonhaven Library on Crescent Lane, between the used bookshop and the letterpress studio. Look for the brass moon above the door. Street parking on Crescent and Elm; the Moonhaven Library lot is free after 6 PM.",
};
```

---

### 1.6 Hooks

#### [NEW] `src/hooks/useReducedMotion.ts`

```ts
import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return reduced;
}
```

#### [NEW] `src/hooks/usePageMeta.ts`

Sets `document.title` and meta description on mount. Does not depend on any third-party library.

```ts
import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', description);
      document.head.appendChild(meta);
    }
  }, [title, description]);
}
```

---

## Phase 2: Icons & UI Components

---

### 2.1 SVG Icon Components

All icons in `src/assets/icons/`. Each is a React component accepting `className` prop. All icons:
- Use `currentColor` for stroke/fill (controlled via Tailwind `text-*` classes)
- `strokeWidth="1.5"` — single stroke weight per PRD §21
- No gradients, no shading — flat line work
- Default size: `24×24` viewBox, rendered at whatever size the parent dictates via `className`
- Accept `aria-hidden="true"` by default (decorative)

| Component | Motif | Style |
|---|---|---|
| `MoonIcon` | Crescent moon (waxing) | Stroke only, no fill |
| `BookIcon` | Open book, pages splayed | Stroke only |
| `CupIcon` | Coffee/tea cup with steam wisp | Stroke only |
| `QuillIcon` | Writing quill/feather pen | Stroke only |
| `LeafIcon` | Single botanical leaf | Stroke only |
| `StarIcon` | Small 4-point star | Stroke only |

---

### 2.2 UI Components

#### [NEW] `src/components/ui/Button.tsx`

Primary call-to-action button.

```
Props: { children, onClick?, href?, className? }
```

| Property | Value |
|---|---|
| Background | `bg-warm-amber` |
| Text | `text-ink-black font-sans font-medium` |
| Padding | `px-6 py-3` |
| Border radius | `rounded-lg` |
| Hover | `hover:bg-warm-amber/90` — slight darken |
| Transition | `transition-colors duration-200` |
| Focus | Inherits global `focus-visible` ring (`warm-amber`) |

If `href` provided, render as `<Link>`. Otherwise render as `<button>`.

---

#### [NEW] `src/components/ui/GhostButton.tsx`

Secondary/outline button.

```
Props: { children, onClick?, href?, className? }
```

| Property | Value |
|---|---|
| Background | `transparent` |
| Border | `border border-walnut-brown` |
| Text | `text-walnut-brown font-sans font-medium` |
| Padding | `px-6 py-3` |
| Border radius | `rounded-lg` |
| Hover | `hover:bg-walnut-brown/10` |
| Transition | `transition-colors duration-200` |

---

#### [NEW] `src/components/ui/Tag.tsx`

Small category/label chip.

```
Props: { children, className? }
```

| Property | Value |
|---|---|
| Background | `bg-dusty-sage/20` |
| Text | `text-walnut-brown text-xs font-medium` |
| Padding | `px-3 py-1` |
| Border radius | `rounded-full` |
| Element | `<span>` |

---

#### [NEW] `src/components/ui/PullQuote.tsx`

Decorative blockquote for feature quotations.

```
Props: { quote: string, attribution?: string }
```

**Layout:**
- Container: `max-w-reading mx-auto py-16 md:py-24 px-6 text-center relative`
- Large `"` character: Fraunces, `text-7xl text-antique-gold/30 absolute -top-4 left-1/2 -translate-x-1/2` — decorative only
- Quote text: `font-serif italic text-2xl md:text-3xl text-walnut-brown leading-snug`
- Attribution (optional): `font-hand text-lg text-dusty-sage mt-4` — **wait, dusty sage on ivory fails contrast**. Use `text-walnut-brown/70` instead.

The large `"` has `aria-hidden="true"`. The quote is wrapped in a `<blockquote>`.

---

#### [NEW] `src/components/ui/FramedImage.tsx`

Polaroid / pressed-flower styled image container.

```
Props: { src: string, alt: string, caption?: string, className? }
```

**Layout:**
- Outer wrapper: `bg-moon-ivory p-3 rounded-sm shadow-md rotate-[-1deg]` (or `rotate-[1deg]` — vary per instance via className)
- `<img>`: full width, `rounded-sm`
- Caption (optional): `font-hand text-sm text-walnut-brown mt-2 text-center`
- Explicit `width` and `height` attributes on `<img>` for CLS prevention
- `loading="lazy"` on all instances except first above-the-fold image

---

#### [NEW] `src/components/ui/FilterToggle.tsx`

Three-way tab control for Shelves & Cups grid filtering.

```
Props: {
  options: string[];         // ["All", "Books", "Drinks & Desserts"]
  activeOption: string;
  onChange: (option: string) => void;
}
```

**Accessibility:**
- Container: `role="tablist"`, `aria-label="Filter by category"`
- Each button: `role="tab"`, `aria-selected="true|false"`, `tabIndex={isActive ? 0 : -1}`
- Keyboard: Left/Right arrows move between tabs, wrapping at edges. Home/End jump to first/last.

**Styling:**

| State | Style |
|---|---|
| Active tab | `bg-midnight-navy text-moon-ivory` |
| Inactive tab | `bg-transparent text-walnut-brown border border-dusty-sage/40` |
| Inactive hover | `bg-dusty-sage/10` |
| All tabs | `px-5 py-2.5 text-sm font-sans font-medium rounded-lg transition-colors duration-200` |

**Responsive:**
- Mobile: full-width, each tab `flex-1` in a `flex` row (segmented control appearance)
- Desktop (≥768px): `inline-flex gap-2`, tabs are auto-width

---

## Phase 3: Layout Shell

---

### 3.1 Common Components

#### [NEW] `src/components/common/SkipToContent.tsx`

```tsx
// Visually hidden until focused, then appears at top of page
// Links to #main-content
// Style: bg-warm-amber text-ink-black px-4 py-2 font-medium
// Position: fixed top-0 left-0 z-50
// When not focused: sr-only (Tailwind's screen-reader-only class)
// When focused: not-sr-only
```

Text: "Skip to content"

---

#### [NEW] `src/components/common/PageHeader.tsx`

Reusable dark header section for inner pages (Our Story, Shelves & Cups, Events, Visit).

```
Props: { title: string, subtitle?: string }
```

**Layout:**
- Section: `bg-midnight-navy py-20 md:py-28 px-6`
- Content centered: `max-w-content mx-auto text-center`
- Small `MoonIcon` above title: `w-8 h-8 text-antique-gold mx-auto mb-6`
- `<h1>`: `font-serif text-4xl md:text-5xl text-moon-ivory`
- Subtitle (optional): `font-sans text-lg text-moon-ivory/70 mt-4 max-w-reading mx-auto`

---

#### [NEW] `src/components/common/NextPageLink.tsx`

Soft forward path at the bottom of inner pages.

```
Props: { question: string, label: string, to: string }
```

**Layout:**
- Section: `bg-moon-ivory py-16 md:py-24 px-6 text-center`
- `SectionDivider` at the top of this section
- Question text: `font-serif text-xl md:text-2xl text-walnut-brown mb-6`
- Link: rendered as `GhostButton` with `href={to}`, text = `{label}`

---

### 3.2 Layout Components

#### [NEW] `src/components/layout/SectionDivider.tsx`

Decorative horizontal rule with a centered moon/star motif.

**Implementation:**
- Container: `max-w-xs mx-auto py-4 flex items-center gap-4`
- Left line: `flex-1 h-px bg-antique-gold/30`
- Center icon: `StarIcon` at `w-4 h-4 text-antique-gold/50`
- Right line: `flex-1 h-px bg-antique-gold/30`

No props needed (purely decorative). `aria-hidden="true"` on the entire element.

---

#### [NEW] `src/components/layout/Navbar.tsx`

```
Props: none (reads navLinks from data, uses useLocation for active state)
```

**Desktop layout (≥768px):**
```
┌──────────────────────────────────────────────────────────┐
│  Moonbound        Our Story · Shelves & Cups · Events · Visit │
└──────────────────────────────────────────────────────────┘
```

- Container: `bg-midnight-navy`
- Inner: `max-w-content mx-auto px-6 py-4 flex items-center justify-between`
- Wordmark "Moonbound": `<Link to="/">`, `font-serif text-xl text-moon-ivory hover:text-antique-gold transition-colors duration-200`
- Nav links: `<nav>` with `<ul className="hidden md:flex items-center gap-8">`
- Each link: `font-sans text-sm text-moon-ivory/80 hover:text-antique-gold transition-colors duration-200`
- Active link (matches current route): `text-antique-gold`

**Mobile layout (<768px):**
- Same container
- Wordmark on left
- "Menu" text button on right: `md:hidden font-sans text-sm text-moon-ivory/80`, no icon
- On click, toggles `isOpen` state
- Expanded state: `<ul>` renders below the nav bar — `flex flex-col gap-4 px-6 py-6 bg-midnight-navy border-t border-moon-ivory/10`
- Transition: CSS `transition-all duration-300` on the menu container height + opacity
- Clicking a link closes the menu

**Semantic HTML:**
- `<header>` wrapping element
- `<nav aria-label="Main navigation">`
- Mobile toggle: `<button aria-expanded="true|false" aria-controls="mobile-menu">`
- Mobile menu: `<div id="mobile-menu">`

---

#### [NEW] `src/components/layout/Footer.tsx`

```
Props: none (reads navLinks, contactInfo from data)
```

**Layout:**
- `<footer>`: `bg-midnight-navy py-16 md:py-20 px-6`
- Content: `max-w-content mx-auto text-center`
- Row 1: `MoonIcon` at `w-6 h-6 text-antique-gold mx-auto mb-4`
- Row 2: "Moonbound Café, Artemis" — `font-serif text-lg text-moon-ivory`
- Row 3: Nav links repeated — `flex flex-wrap justify-center gap-6 md:gap-8 mt-8`
  - Each: `font-sans text-sm text-moon-ivory/70 hover:text-antique-gold transition-colors duration-200`
- Row 4: Contact — `mt-8 font-sans text-sm text-moon-ivory/50`
  - `hello@moonboundcafe.com` as `<a href="mailto:...">` with `hover:text-antique-gold`
  - ` · ` separator
  - `@moonboundcafe` as `<a href="https://instagram.com/moonboundcafe" target="_blank" rel="noopener noreferrer">` with `hover:text-antique-gold`
- Row 5: `font-hand text-base text-antique-gold/70 mt-8` — "est. under a full moon"

**Semantic:** `<footer role="contentinfo">`

---

#### [NEW] `src/components/layout/Layout.tsx`

Shell component wrapping all pages via React Router's `<Outlet>`.

```tsx
import { Outlet } from 'react-router-dom';
import { SkipToContent } from '../common/SkipToContent';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout() {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

---

### 3.3 Routing

[MODIFY] [src/App.tsx](file:///d:/Lei/Websites/2026/luna/src/App.tsx)

```tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home';
import OurStory from './pages/our-story';
import ShelvesAndCups from './pages/shelves-and-cups';
import Events from './pages/events';
import Visit from './pages/visit';
import NotFound from './pages/not-found';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shelves-and-cups" element={<ShelvesAndCups />} />
        <Route path="/events" element={<Events />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```

[MODIFY] [src/main.tsx](file:///d:/Lei/Websites/2026/luna/src/main.tsx) — add ScrollToTop:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

(Import `useLocation` from `react-router-dom`.)

---

## Phase 4: Pages

---

### 4.1 Home Page

**Route:** `/`
**File:** `src/pages/home/index.tsx`

**Page structure (top to bottom):**
1. `Hero` — full viewport height, moonrise animation
2. `BrandIntro` — 2-3 line intro text
3. `SectionDivider`
4. `Doorways` — 3-card grid linking to inner pages

Calls `usePageMeta(pageMeta.home.title, pageMeta.home.description)`.

---

#### [NEW] `src/pages/home/components/Hero.tsx`

**Purpose:** Deliver tonal clarity in the first 3 seconds. This is **Motion Moment 1**.

**Layout:**
- Section: `relative min-h-screen flex items-center justify-center bg-midnight-navy overflow-hidden px-6`
- Content wrapper: `relative z-10 text-center`

**Moonrise glow (background layer):**
- A `<div>` behind the text, absolutely positioned, full size
- CSS: `absolute inset-0`
- Uses Framer Motion to animate a radial gradient:
  - `background: radial-gradient(ellipse at 50% 100%, rgba(184,147,90,0.12) 0%, transparent 60%)`
  - Initial state: gradient center at `50% 120%` (below viewport), opacity 0
  - Animate to: gradient center at `50% 70%`, opacity 1
  - This is achieved by animating `backgroundPosition` and `opacity` via Framer Motion's `motion.div`
  - Duration: `2s`
  - Easing: `[0.25, 0.1, 0.25, 1.0]` (ease-out quad)

**Text elements (each a `motion.div`):**
| Element | Content | Styles | Delay |
|---|---|---|---|
| Line 1 | "Moonbound" | `font-serif text-5xl md:text-display text-moon-ivory` | 0.4s |
| Line 2 | "Café, Artemis" | `font-serif text-2xl md:text-display-sm text-antique-gold` | 0.6s |
| Line 3 | "A hidden library café where visitors lose track of time beneath the moon." | `font-sans text-base md:text-lg text-moon-ivory/70 max-w-md mx-auto mt-6` | 0.8s |

**Animation per text element:**
- Initial: `{ opacity: 0, y: 20 }`
- Animate: `{ opacity: 1, y: 0 }`
- Duration: `0.8s`
- Easing: `[0.25, 0.1, 0.25, 1.0]`

**Reduced motion:** All elements visible immediately, no animation. Check `useReducedMotion()` — if true, skip Framer Motion `initial` and set `animate` to final state instantly.

**Scroll hint (optional but recommended):**
A small downward chevron at the bottom of the hero, `text-moon-ivory/30`, `absolute bottom-8 left-1/2 -translate-x-1/2`, gently pulsing opacity via CSS animation (not counted as a Framer Motion use). Hidden when `prefers-reduced-motion: reduce`.

---

#### [NEW] `src/pages/home/components/BrandIntro.tsx`

**Layout:**
- Section: `bg-moon-ivory py-24 md:py-40 px-6`
- Content: `max-w-reading mx-auto text-center`
- Small `MoonIcon`: `w-8 h-8 text-antique-gold/40 mx-auto mb-8` — decorative, `aria-hidden`
  - **Note:** Gold icon on ivory background is fine because it's decorative, never text
- Body text: `font-sans text-lg md:text-xl text-ink-black leading-[1.75]`

**Copy (exact):**
> Books, coffee, and moonlight — gathered under one roof. A quiet corner for readers, thinkers, and anyone who needs a place to slow down.

---

#### [NEW] `src/pages/home/components/Doorways.tsx`

Three visual "doorways" linking to inner pages.

**Layout:**
- Section: `bg-moon-ivory pb-24 md:pb-40 px-6`
- Grid: `max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-8`

**Each doorway card:**
- Element: `<Link to={path}>` wrapping the card
- Image container: `aspect-[4/5] rounded-xl overflow-hidden mb-5`
  - `<img>`: `w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`
  - Add `group` class to the Link for hover
- Title: `font-serif text-xl text-ink-black mb-2`
- Description: `font-sans text-base text-walnut-brown`

**Card data (hardcoded in this component, not a separate data file — only used here):**

| # | Image | Title | Description | Link |
|---|---|---|---|---|
| 1 | `doorway-story.jpg` | Our Story | "How a brass moon and two oak bookcases became a café." | `/our-story` |
| 2 | `doorway-shelves.jpg` | The Shelves & Cups | "Books worth losing an afternoon in. Drinks worth staying for." | `/shelves-and-cups` |
| 3 | `doorway-events.jpg` | Events | "Readings, book clubs, and quiet gatherings under the moon." | `/events` |

**Images:** generated during execution, placed in `public/images/`.

---

### 4.2 Our Story Page

**Route:** `/our-story`
**File:** `src/pages/our-story/index.tsx`

**Page structure:**
1. `PageHeader` — title: "Our Story"
2. `StoryPassage` × 4 — alternating layout
3. `PullQuote` — between passages 3 and 4
4. `NextPageLink` — to Shelves & Cups

Calls `usePageMeta(pageMeta['our-story'].title, pageMeta['our-story'].description)`.

---

#### [NEW] `src/pages/our-story/components/StoryPassage.tsx`

```
Props: {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;   // swap text/image column order on desktop
}
```

**Layout:**
- Section: `py-16 md:py-24 px-6`
- Content: `max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center`
- Text column: `max-w-reading`
  - Title: `font-serif text-2xl md:text-3xl text-ink-black mb-6`
  - Body: `font-sans text-base md:text-lg text-ink-black leading-[1.75]`
- Image column: `FramedImage` component
- When `reverse` is true: image column gets `md:order-first` (image on left, text on right)

**Passage content (rendered in page index.tsx, passed as props):**

**Passage 1 — "The Beginning"**
- Text: "There's a café on the corner of a street you almost missed. It doesn't announce itself — no neon, no chalkboard specials on the sidewalk. Just a brass crescent moon above the door and the faint smell of old paper and fresh coffee drifting through a propped-open window."
- Image: `story-exterior.jpg` — café exterior at night, warm light from windows
- Alt: "A quiet café exterior at night with warm light glowing from tall windows"
- `reverse: false` (text left, image right)

**Passage 2 — "The Shelves"**
- Text: "The bookshelves came first. Before the espresso machine, before the tables, before the name. Someone dragged in two oak bookcases, filled them with dog-eared novels and forgotten poetry collections, and said: people will come if there's something to read. They were right."
- Image: `story-shelves.jpg` — oak bookshelves filled with books, close-up
- Alt: "Weathered oak bookshelves filled with well-loved books"
- `reverse: true` (image left, text right)

**Passage 3 — "The Cups"**
- Text: "The menu was never meant to be complicated. A few coffees done well. Tea that tastes like someone cared. A brownie dense enough to anchor you to your seat for another chapter. Everything served in mismatched ceramic mugs — because matching mugs felt like trying too hard."
- Image: `story-cups.jpg` — mismatched ceramic mugs and a brownie on a wooden table
- Alt: "Mismatched ceramic mugs and a dark brownie on a worn wooden table"
- `reverse: false`

**Passage 4 — "The Moon"**
- Text: "Some nights, when the moon is right and the café is quiet, the light through the tall windows lays itself across the reading tables like a second tablecloth. Nobody planned it. It just happens. And the people who notice tend to come back."
- Image: `story-moon.jpg` — moonlight through tall café windows on reading tables
- Alt: "Moonlight streaming through tall café windows onto reading tables"
- `reverse: true`

**Between passages 3 and 4**, render:
```tsx
<PullQuote quote="The people who notice tend to come back." />
```

**After passage 4:**
```tsx
<NextPageLink
  question="Curious what's on the shelves?"
  label="Browse books & drinks →"
  to="/shelves-and-cups"
/>
```

---

### 4.3 The Shelves & Cups Page

**Route:** `/shelves-and-cups`
**File:** `src/pages/shelves-and-cups/index.tsx`

**Page structure:**
1. `PageHeader` — title: "The Shelves & Cups", subtitle: "Books worth losing an afternoon in. Drinks worth staying for."
2. `FeaturedItem` — Book of the Moon (dark bg section)
3. `FilterToggle` + `ShelvesGrid` — filter + card grid (ivory bg section)
4. `NextPageLink` — to Events

**State:** `activeFilter: 'All' | 'Books' | 'Drinks & Desserts'` — default `'All'`

**Filtering logic:**
```ts
const filtered = activeFilter === 'All'
  ? shelvesData
  : activeFilter === 'Books'
    ? shelvesData.filter(item => item.category === 'book')
    : shelvesData.filter(item => item.category === 'drink' || item.category === 'dessert');
```

Calls `usePageMeta(pageMeta['shelves-and-cups'].title, pageMeta['shelves-and-cups'].description)`.

---

#### [NEW] `src/pages/shelves-and-cups/components/FeaturedItem.tsx`

Highlighted "Book of the Moon" section above the grid.

**Layout:**
- Section: `bg-midnight-navy py-16 md:py-24 px-6`
- Content: `max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center`
- Image column: `FramedImage` with `featured-book.jpg`, `rotate-[2deg]`
  - Alt: "A leather-bound book beside a flickering candle"
- Text column:
  - Label: `font-hand text-lg text-antique-gold mb-2` — "Book of the Moon"
  - Title: `font-serif text-3xl md:text-4xl text-moon-ivory mb-4` — "The Starless Sea"
  - Author: `font-sans text-base text-moon-ivory/70 mb-4` — "by Erin Morgenstern"
  - Description: `font-sans text-base text-moon-ivory/80 leading-[1.75]`
  - Handwritten note: `font-hand text-base text-antique-gold/70 mt-6 italic` — "Found between the cushions of the green armchair, third shelf from the window."

---

#### [NEW] `src/pages/shelves-and-cups/components/ShelvesGrid.tsx`

```
Props: { items: ShelfItem[] }
```

**Layout:**
- Section: `py-12 md:py-16 px-6`
- Grid: `max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Each item rendered via `ItemCard`

**Crossfade on filter change (CSS only, NOT Framer Motion):**
- The grid container has a `key={activeFilter}` so React remounts it on filter change
- Apply a CSS animation on mount: `animate-fadeIn`
- Add to `index.css`:
  ```css
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 180ms ease;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-fadeIn { animation: none; }
  }
  ```

---

#### [NEW] `src/pages/shelves-and-cups/components/ItemCard.tsx`

```
Props: { item: ShelfItem }
```

This component implements **Motion Moment 2: Constellation hover-line**.

**Card Layout:**
- Container: `relative bg-moon-ivory border border-dusty-sage/30 rounded-xl p-6 group transition-shadow duration-300 hover:shadow-lg`
- Top row: `Tag` component with `item.tag`, plus a small `BookIcon` or `CupIcon` (book → `BookIcon`, drink/dessert → `CupIcon`) at `w-5 h-5 text-antique-gold` — decorative only
- Title: `font-serif text-lg text-ink-black mt-4` — `line-clamp-1` for overflow with `title={item.title}` for full text on hover/focus
- Author (books): `font-sans text-sm text-walnut-brown mt-1`
- Description: `font-sans text-sm text-walnut-brown/80 mt-3 leading-relaxed line-clamp-3`
- Price (drinks/desserts): `font-sans text-sm font-medium text-ink-black mt-3`

**Constellation hover-line (Motion Moment 2 — Framer Motion):**
- SVG overlay: `absolute inset-0 pointer-events-none` with same dimensions as card
- 4 small circles (dots): radius `2px`, fill `antique-gold`, positioned at:
  - Top-left area: `(12%, 15%)`
  - Top-right area: `(88%, 20%)`
  - Bottom-right area: `(82%, 78%)`
  - Left-center area: `(15%, 65%)`
- 3 SVG `<path>` elements connecting dots in order (1→2, 2→3, 3→4) with slight curves
- Stroke: `antique-gold`, `strokeWidth="1"`, `fill="none"`
- Each path has `strokeDasharray={pathLength}` and `strokeDashoffset` animated:
  - On hover: `strokeDashoffset` animates from `pathLength` to `0`
  - Duration: `0.6s`, easeOut
  - Stagger: each path delays by `0.1s`
- On mouse leave: paths animate back (dashoffset from 0 to pathLength), duration `0.3s`
- `prefers-reduced-motion`: dots visible, lines visible statically (full paths drawn, no animation)

**Framer Motion implementation approach:**
- Use `motion.path` with `pathLength` prop
- `initial={{ pathLength: 0 }}`
- On `group-hover` via parent state or `onHoverStart`/`onHoverEnd` on the card `motion.div`
- When hovered: `animate={{ pathLength: 1 }}`, transition `{ duration: 0.6, ease: "easeOut" }`
- When not hovered: `animate={{ pathLength: 0 }}`, transition `{ duration: 0.3 }`

---

### 4.4 Events Page

**Route:** `/events`
**File:** `src/pages/events/index.tsx`

**Page structure:**
1. `PageHeader` — title: "Events", subtitle: "Readings, book clubs, and quiet gatherings."
2. `EventList` — upcoming events (or `EmptyState` if none)
3. Past events section (if any) with visual de-emphasis
4. `NextPageLink` — to Visit

**Logic:**
```ts
const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const upcoming = eventsData.filter(e => e.date >= today);
const past = eventsData.filter(e => e.date < today);
```

Display upcoming events in chronological order. If no upcoming events, show `EmptyState`. If past events exist, show them below a "Past Events" divider, visually muted (`opacity-60`).

Calls `usePageMeta(pageMeta.events.title, pageMeta.events.description)`.

---

#### [NEW] `src/pages/events/components/EventList.tsx`

```
Props: { events: EventItem[], isPast?: boolean }
```

**Layout:**
- Container: `max-w-reading mx-auto px-6 py-12 md:py-16`
- If `isPast`: wrapper has `opacity-60` and a heading "Past Events" in `font-serif text-lg text-walnut-brown mb-8`
- Events rendered as a vertical stack with no gap (spacing handled by `EventCard` padding)
- If `isPast` is not set and heading is needed: "Upcoming" in `font-serif text-lg text-walnut-brown mb-8`

---

#### [NEW] `src/pages/events/components/EventCard.tsx`

```
Props: { event: EventItem, index: number }
```

This component implements **Motion Moment 3: Event card fade-up on scroll**.

**Layout:**
- Element: `<article>` — `py-8 border-b border-dusty-sage/20 last:border-b-0`
- Date: `<time datetime={event.date}>` — formatted as "July 12, 2026"
  - Style: `font-serif text-base text-antique-gold` — **only on dark bg or... wait.** The event cards are on ivory background. Antique gold on ivory fails contrast. 
  - **Correction:** Use `text-walnut-brown font-medium` for the date. The `Tag` component provides the accent color safely.
- Title: `font-serif text-xl md:text-2xl text-ink-black mt-2`
- Description: `font-sans text-base text-walnut-brown mt-3 leading-[1.75]`
- Tag: `Tag` component, `mt-4`

**Date formatting helper (inline or in a utils file):**
```ts
function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}
```

**Fade-up animation (Motion Moment 3 — Framer Motion):**
- Wrap the `<article>` in `motion.article`
- Use Framer Motion's `useInView` or `whileInView`:
  ```tsx
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
  >
  ```
- `once: true` — no re-trigger on scroll back
- Stagger: `delay: index * 0.05` (~50ms per card)
- `prefers-reduced-motion`: skip animation — set `initial` and `whileInView` both to `{ opacity: 1, y: 0 }`

---

#### [NEW] `src/pages/events/components/EmptyState.tsx`

**Layout:**
- Container: `max-w-reading mx-auto px-6 py-24 md:py-32 text-center`
- `MoonIcon`: `w-12 h-12 text-antique-gold/40 mx-auto mb-6` — decorative
- Message: `font-serif italic text-xl md:text-2xl text-walnut-brown`
- Text: "No events on the calendar right now — check back under a new moon."

---

### 4.5 Visit Page

**Route:** `/visit`
**File:** `src/pages/visit/index.tsx`

**Page structure:**
1. `PageHeader` — title: "Visit", subtitle: "Where and when to find us."
2. Main content section — two columns on desktop
3. `DirectionsBlurb` — full width below
4. Footer (no `NextPageLink` — this IS the bottom of funnel)

**Layout for main content:**
- Section: `bg-moon-ivory py-16 md:py-24 px-6`
- Content: `max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`
- Left column: `AddressBlock` + `HoursTable`
- Right column: `AmbianceGallery`

Calls `usePageMeta(pageMeta.visit.title, pageMeta.visit.description)`.

---

#### [NEW] `src/pages/visit/components/AddressBlock.tsx`

Reads from `contactInfo` in `siteMetadata.ts`.

**Layout:**
- Container: `mb-12`
- Small `MoonIcon`: `w-6 h-6 text-antique-gold mb-4` — decorative
- Heading: `font-serif text-2xl text-ink-black mb-4` — "Find Us"
- Address lines: `font-sans text-lg text-ink-black leading-relaxed`
  - "23 Crescent Lane"
  - "Moonhaven, Oregon 97401"
- Email: `font-sans text-base text-walnut-brown mt-4` — `<a href="mailto:hello@moonboundcafe.com">hello@moonboundcafe.com</a>` with `hover:text-warm-amber transition-colors`
- Instagram: `font-sans text-base text-walnut-brown mt-1` — `<a href="..." target="_blank" rel="noopener noreferrer">@moonboundcafe</a>` with `hover:text-warm-amber`

---

#### [NEW] `src/pages/visit/components/HoursTable.tsx`

Reads from `contactInfo.hours` in `siteMetadata.ts`.

**Layout:**
- Container: `mb-12`
- Heading: `font-serif text-2xl text-ink-black mb-6` — "Hours"
- Table: `<dl>` (description list) or simple `<div>` rows
- Each row: `flex justify-between py-2 border-b border-dusty-sage/15 last:border-b-0`
  - Day: `font-sans text-base text-walnut-brown font-medium`
  - Hours: `font-sans text-base text-ink-black`
  - If `isClosed`: hours text in `italic text-walnut-brown/60` — "Closed"
- Highlight today's day: left border `border-l-2 border-warm-amber pl-3` — **but warm-amber as a border on ivory is fine (not text).** Determine today using `new Date().getDay()` (0=Sun, 1=Mon, ...) mapped to the hours array.

---

#### [NEW] `src/pages/visit/components/AmbianceGallery.tsx`

2-3 atmospheric photos in `FramedImage` components.

**Layout:**
- Container: `space-y-8`
- Three `FramedImage` instances with varied rotations:

| # | Image file | Alt text | Rotation | Caption |
|---|---|---|---|---|
| 1 | `visit-entrance.jpg` | "The entrance to Moonbound Café with a brass crescent moon above the door" | `rotate-[1deg]` | "The brass moon above the door" |
| 2 | `visit-interior.jpg` | "A cozy reading nook with leather armchair and bookshelves" | `rotate-[-1.5deg]` | "The green armchair, third shelf from the window" |
| 3 | `visit-window.jpg` | "Rain on the café window with warm light inside" | `rotate-[0.5deg]` | None |

First image: `loading="eager"`. Others: `loading="lazy"`.

---

#### [NEW] `src/pages/visit/components/DirectionsBlurb.tsx`

**Layout:**
- Section: `bg-moon-ivory px-6 pb-16 md:pb-24`
- Content: `max-w-reading mx-auto`
- Heading: `font-serif text-2xl text-ink-black mb-4` — "Getting Here"
- Body: `font-sans text-base text-walnut-brown leading-[1.75]`
- Text (from `contactInfo.directions`): "We're tucked behind the old Moonhaven Library on Crescent Lane, between the used bookshop and the letterpress studio. Look for the brass moon above the door. Street parking on Crescent and Elm; the Moonhaven Library lot is free after 6 PM."

---

### 4.6 404 Page

**Route:** `*` (catch-all)
**File:** `src/pages/not-found/index.tsx`

**Layout:**
- Section: `min-h-[60vh] flex items-center justify-center px-6`
- Content: `text-center`
- `MoonIcon`: `w-16 h-16 text-antique-gold/30 mx-auto mb-8` — decorative
- Heading: `font-serif text-3xl md:text-4xl text-ink-black mb-4` — "This page wandered off somewhere"
- Subtext: `font-sans text-lg text-walnut-brown mb-8` — "It might be lost between the shelves."
- Link: `GhostButton` with `href="/"` — "Return to Moonbound"

Calls `usePageMeta(pageMeta['not-found'].title, pageMeta['not-found'].description)`.

---

## Phase 5: Images

All images saved to `public/images/`. Generate each via ChatGPT using the exact prompt below. All images should be consistent in style across the set — warm, nocturnal, literary, photorealistic.

---

### Image 1 · `doorway-story.jpg`
**Used by:** Home page — Doorways section, "Our Story" card
**Aspect ratio:** 4:5 (portrait)

**Prompt:**
```
Photorealistic image of a close-up scene on a dark wooden café table. An old leather-bound journal lies open, its pages slightly yellowed and handwritten. Beside it, a ceramic mug of black coffee with a thin curl of steam. A single beeswax candle in a brass holder provides the only light source, casting warm golden light and soft shadows. The background is intentionally dark and out of focus — just the suggestion of bookshelves. Color palette: deep walnut browns, warm amber candlelight, ivory page tones against near-black shadows. Mood: intimate, quiet, literary. Shallow depth of field with the journal and candle in sharp focus. No people, no text, no logos, no modern electronics visible.
```

---

### Image 2 · `doorway-shelves.jpg`
**Used by:** Home page — Doorways section, "The Shelves & Cups" card
**Aspect ratio:** 4:5 (portrait)

**Prompt:**
```
Photorealistic image of floor-to-ceiling dark oak bookshelves inside a cozy café, densely packed with old paperback and hardcover books in warm earth-toned spines — burgundy, forest green, faded gold, cream. A small brass reading lamp with a warm amber glow sits on a shelf ledge, casting golden light across the book spines. One or two books are pulled slightly out as if someone was browsing. The scene is shot straight-on at eye level with a shallow depth of field — books in the center are sharp, edges fall off into a warm blur. Color palette: walnut brown wood, antique gold lamp light, muted earth-tone book spines. Mood: warm, inviting, lived-in. No people, no text overlays, no modern elements.
```

---

### Image 3 · `doorway-events.jpg`
**Used by:** Home page — Doorways section, "Events" card
**Aspect ratio:** 4:5 (portrait)

**Prompt:**
```
Photorealistic image of a single small round wooden table in a dark café at night. On the table: two lit taper candles in simple brass holders, a short stack of three books, and an empty ceramic cup on a saucer. A tall window behind the table shows a deep midnight navy sky with faint moonlight filtering in, casting a cool silver-blue light that mixes with the warm amber candlelight. The rest of the café is dark and barely visible. Color palette: midnight navy background, warm amber candle glow, cool moonlight blue on the table edges. Mood: quiet anticipation, nocturnal, intimate. Shot from slightly above at a 30-degree angle. No people, no text, no modern elements.
```

---

### Image 4 · `story-exterior.jpg`
**Used by:** Our Story page — Passage 1 ("The Beginning")
**Aspect ratio:** 3:2 (landscape)

**Prompt:**
```
Photorealistic image of the exterior of a small, charming neighborhood café at dusk on a quiet cobblestone street. The building has a dark painted wooden facade with two tall windows that glow with warm golden-amber light from inside. Above the dark wooden door hangs a small brass crescent moon sign (about 8 inches wide, simple silhouette shape, no text). A single warm-toned outdoor lantern is mounted beside the door. The sky is deep twilight blue transitioning to midnight navy at the top. The street is empty and peaceful — maybe a bench and a small potted plant near the entrance. Color palette: midnight navy sky, warm amber window glow, dark walnut brown facade, brass gold accents. Mood: discovered, welcoming, slightly hidden, like a place you'd walk past if you weren't looking. No people, no cars, no modern signage.
```

---

### Image 5 · `story-shelves.jpg`
**Used by:** Our Story page — Passage 2 ("The Shelves")
**Aspect ratio:** 3:2 (landscape)

**Prompt:**
```
Photorealistic close-up image of weathered oak bookshelves in a café interior, shot from a slight angle to show depth. The shelves are densely packed with well-loved books — spines cracked, pages dog-eared, a few colorful cloth bookmarks peeking out between volumes. One shelf has a small potted succulent and a tiny brass moon ornament tucked between books. The wood grain of the shelves is visible and warm. Lighting is soft and ambient — warm overhead light creating gentle shadows between books. Color palette: warm oak wood tones, earth-colored book spines (cream, sage green, dusty rose, walnut brown), touches of brass gold. Mood: lived-in, curated but not precious, like someone's personal collection that grew over years. No people, no text overlays.
```

---

### Image 6 · `story-cups.jpg`
**Used by:** Our Story page — Passage 3 ("The Cups")
**Aspect ratio:** 3:2 (landscape)

**Prompt:**
```
Photorealistic overhead (flat-lay) image of a worn wooden café table surface. On the table: three mismatched ceramic mugs — one speckled blue-gray with coffee, one cream-colored with tea (visible amber liquid), one small forest-green one empty. A small round ceramic plate holds a dense, dark chocolate brownie with a visible crackly top. A single dessert fork rests on the plate's edge. The table surface shows natural wood grain with minor scratches and coffee ring stains, giving it character. Warm directional light from the upper left creates soft shadows. Color palette: warm walnut wood, cream and earth-toned ceramics, dark chocolate brown, muted sage and blue-gray. Mood: unpretentious, handmade, comforting — like someone ordered for a quiet afternoon. No people, no napkins with logos, no text.
```

---

### Image 7 · `story-moon.jpg`
**Used by:** Our Story page — Passage 4 ("The Moon")
**Aspect ratio:** 3:2 (landscape)

**Prompt:**
```
Photorealistic interior image of a quiet café at night. The scene is shot from inside looking toward two tall arched windows. Cool silver-white moonlight streams through the windows, casting long rectangular light patches across dark wooden reading tables below. On the tables: a few open books, an unlit candle, a reading glasses case — suggesting someone was just here but the space is now empty. The rest of the café interior fades into warm, dim amber shadow. The contrast between the cool blue-white moonlight and the warm amber ambient interior creates a dramatic, serene atmosphere. Color palette: cool moonlight silver-blue in the window light, warm amber-brown in the shadows, midnight navy darkness at edges. Mood: serene, almost magical, still — the moment you'd notice if you were the last person in the room. No people, no harsh artificial light.
```

---

### Image 8 · `featured-book.jpg`
**Used by:** Shelves & Cups page — Featured "Book of the Moon" section
**Aspect ratio:** 3:2 (landscape)

**Prompt:**
```
Photorealistic image of a single hardcover book resting on a dark walnut wooden surface. The book has a deep navy blue cloth cover with subtle gold foil details suggesting constellation patterns (small dots and thin connecting lines, like a star map). Beside the book, a lit beeswax candle in a low brass holder casts warm golden light across the scene, creating a soft glow on the book's cover. A dried pressed flower (small, botanical, cream-colored) lies on top of the book as a bookmark. The background is very dark, almost black, with just a hint of out-of-focus bookshelves. Color palette: midnight navy book cover, antique gold foil and candlelight, walnut brown wood, near-black background. Mood: treasured, literary, intimate — like a personal recommendation left for you to find. No readable text on the book cover, no people.
```

---

### Image 9 · `visit-entrance.jpg`
**Used by:** Visit page — Ambiance Gallery image 1
**Aspect ratio:** 3:4 (portrait, tall)

**Prompt:**
```
Photorealistic close-up image of a café entrance at evening time. Focus on the dark-painted wooden door frame and the area just above it where a small handcrafted brass crescent moon ornament (about 6 inches, simple silhouette, no text) hangs from a small iron bracket. The door has a frosted glass panel through which warm amber light glows from inside. The door handle is aged brass. A small wall-mounted lantern beside the door provides additional warm light. Visible texture on the painted wood — slightly weathered. Color palette: dark walnut brown door frame, brass gold moon and hardware, warm amber glow through glass, cool blue-gray evening ambient light. Mood: arrival, discovery, the moment before you step inside. Shot from slightly below looking up at the moon sign. No people, no text, no modern elements.
```

---

### Image 10 · `visit-interior.jpg`
**Used by:** Visit page — Ambiance Gallery image 2
**Aspect ratio:** 3:4 (portrait, tall)

**Prompt:**
```
Photorealistic interior image of a cozy reading nook inside a café. A well-worn dark leather armchair (deep brown, slightly cracked with age and use) sits in a corner surrounded on two sides by built-in dark oak bookshelves packed with books. A brass floor lamp with a warm amber-toned fabric shade stands behind the chair, casting a warm pool of light. A small round side table next to the chair holds a ceramic mug and an open book placed face-down. A folded wool throw blanket (muted sage green) drapes over one arm of the chair. Color palette: rich brown leather, warm oak wood, amber lamplight, sage green textile, cream and earth book spines. Mood: the exact spot you'd want to spend three hours — comfortable, personal, slightly worn-in. No people, no modern electronics.
```

---

### Image 11 · `visit-window.jpg`
**Used by:** Visit page — Ambiance Gallery image 3
**Aspect ratio:** 3:4 (portrait, tall)

**Prompt:**
```
Photorealistic close-up image of rain droplets on a café window pane at night. The window glass is covered in small, clearly defined water droplets. Through the rain-blurred glass, the warm amber interior of the café is visible as a soft, defocused glow — suggesting bookshelves and warm lighting but nothing sharp. The exterior side of the window frame is dark painted wood, slightly wet. A few droplets are caught mid-streak, running down the glass. Color palette: cool gray-blue rain tones in the foreground, warm amber-gold blurred glow through the glass, dark frame edges. Mood: contemplative, rainy evening, the kind of night you're glad to be inside. Macro-style focus on the water droplets with everything beyond the glass beautifully bokeh-blurred. No people, no reflections of people, no text.
```

---

### Image 12 · `og-image.jpg`
**Used by:** Open Graph / social media share card (all pages)
**Aspect ratio:** Exactly 1200×630px (landscape, social card format)

**Prompt:**
```
Minimal, elegant graphic design for a social media share card at exactly 1200x630 pixels. Deep midnight navy background (#1B2436). Centered composition: a thin golden crescent moon illustration (simple, single line weight, not filled — just an elegant outline) positioned above the text. Below the moon, the text "Moonbound Café" in an elegant serif typeface (similar to Fraunces or Playfair Display), large, in warm ivory white (#F5F1E8). Below that in smaller size, "Artemis" in the same serif font, spaced with generous letter-spacing, in antique gold (#B8935A). Very subtle texture or grain overlay on the navy background for depth. No photos, no complex illustrations — purely typographic with the single moon accent. Mood: refined, literary, premium. The overall impression should be like a gilt-embossed book cover or a high-end stationery brand.
```

---

### Favicon · `public/favicon.svg`
**Used by:** Browser tab icon
**Format:** SVG, hand-coded (not AI-generated)

This is not an image to generate — it's a simple SVG to code directly:
- A crescent moon silhouette
- Stroke: `#B8935A` (antique gold), `stroke-width="1.5"`, no fill
- ViewBox: `0 0 32 32`
- The crescent faces right (waxing crescent orientation)
- Path: a circle with a smaller overlapping circle subtracted to create the crescent shape
- Clean, minimal — matches the line-art icon style of the rest of the site

---

### Style Consistency Notes

To keep all 12 images visually cohesive when generating them:

| Property | Guideline |
|---|---|
| **Photography style** | Photorealistic, editorial quality, natural lighting |
| **Color temperature** | Warm (2700K–3200K amber) for interior lighting, cool (5500K–7000K blue) for moonlight/exterior night |
| **Brand colors present** | Every image should naturally feature at least 2 of: midnight navy, warm amber/gold, walnut brown, moon ivory |
| **Mood** | Quiet, intimate, nocturnal, unhurried — never busy, never brightly lit, never corporate |
| **Avoid in all images** | People/faces, readable text/logos, modern electronics (phones, laptops), bright/harsh lighting, cluttered compositions, fantasy elements |
| **Lighting direction** | Consistent warm light from the left or upper-left in interior shots |
| **Depth of field** | Shallow — subject sharp, background softly blurred — creates intimacy |

---

## Phase 6: Static Files

#### [NEW] `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://moonboundcafe.com/</loc></url>
  <url><loc>https://moonboundcafe.com/our-story</loc></url>
  <url><loc>https://moonboundcafe.com/shelves-and-cups</loc></url>
  <url><loc>https://moonboundcafe.com/events</loc></url>
  <url><loc>https://moonboundcafe.com/visit</loc></url>
</urlset>
```

#### [NEW] `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://moonboundcafe.com/sitemap.xml
```

#### Favicon

Replace `public/favicon.svg` with a new SVG: a simple crescent moon in `#B8935A` (antique gold) on transparent background, single stroke, matching the icon set style.

---

## Phase 7: Polish & Accessibility Checklist

| Requirement | Implementation |
|---|---|
| Skip-to-content link | `SkipToContent` component, first element in DOM |
| One `<h1>` per page | Each page has exactly one `<h1>` (via `PageHeader` or Hero) |
| Semantic landmarks | `<header>`, `<nav>`, `<main id="main-content">`, `<footer>` |
| Heading hierarchy | h1 → h2 → h3 per page, never skipping levels |
| `alt` on meaningful images | All gallery/story images have descriptive alt text |
| `alt=""` on decorative images | All icon SVGs have `aria-hidden="true"` |
| Focus ring | Global `focus-visible` style: 2px solid `warm-amber`, 2px offset |
| Keyboard nav | Tab through all links/buttons; Filter toggle: arrow keys |
| `prefers-reduced-motion` | CSS blanket disable + `useReducedMotion` hook for Framer Motion |
| Color contrast | Verified pairings per §16 — no decorative color as text on ivory |
| `<time datetime>` | Event dates use `<time>` with ISO date |
| `role="tablist"` / `role="tab"` | Filter toggle has proper ARIA roles |
| Line length | `max-w-reading` (680px) on all prose content |
| Responsive ≥320px | No horizontal scroll at 320px viewport |

---

## Verification Plan

### Automated
```bash
npm run build            # Confirm zero TypeScript/build errors
npm run lint             # Confirm zero ESLint errors
```

### Manual
1. **Visual check** — run `npm run dev`, visit all 5 pages + 404 on desktop and mobile viewport
2. **Responsive** — test at 320px, 375px, 768px, 1024px, 1440px widths
3. **Keyboard** — tab through every page; verify filter toggle arrow key support; verify skip-to-content link
4. **Reduced motion** — enable `prefers-reduced-motion: reduce` in browser DevTools, verify all 3 animations are disabled
5. **Lighthouse** — run on each page, target 95+ across Performance, Accessibility, Best Practices, SEO
6. **Cross-browser** — spot-check on Chrome, Firefox, Safari (if available), Edge

---

## Open Questions

> [!IMPORTANT]
> **Domain URL**: The sitemap, OG tags, and JSON-LD use `moonboundcafe.com` as a placeholder. Should a different domain be used, or is this fine for now?

> [!NOTE]
> **Analytics**: The PRD mentions cookie-free analytics (Plausible/Fathom/Vercel Analytics). Should this be set up now, or deferred? It requires a third-party account/script.
