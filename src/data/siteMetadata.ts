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
