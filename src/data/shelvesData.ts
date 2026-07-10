import type { ShelfItem } from '../types';

export const shelvesItems: ShelfItem[] = [
  // Books (6 items)
  {
    id: 'night-thoughts',
    title: 'Night Thoughts',
    category: 'book',
    author: 'Edward Young',
    description: 'A collection of reflective poems on life, death, and immortality, written during the quiet hours of midnight.',
    tag: 'Poetry',
  },
  {
    id: 'invisible-cities',
    title: 'Invisible Cities',
    category: 'book',
    author: 'Italo Calvino',
    description: 'Lyrical prose poems exploring imaginary cities narrated by Marco Polo to Kublai Khan. A book to wander through.',
    tag: 'Fiction',
  },
  {
    id: 'labyrinths',
    title: 'Labyrinths',
    category: 'book',
    author: 'Jorge Luis Borges',
    description: 'A collection of brief, intricate stories and essays exploring themes of infinity, libraries, and labyrinths.',
    tag: 'Fiction',
  },
  {
    id: 'in-praise-of-shadows',
    title: 'In Praise of Shadows',
    category: 'book',
    author: 'Jun\'ichirō Tanizaki',
    description: 'An essay on Japanese aesthetics, detailing the beauty found in dim lighting, aged wood, and subtle shadows.',
    tag: 'Essay',
  },
  {
    id: 'solitude-guide',
    title: 'A Guide to Quiet Solitude',
    category: 'book',
    author: 'May Sarton',
    description: 'Reflections on the restorative nature of living alone, the rhythm of creative work, and the changing seasons.',
    tag: 'Memoir',
  },
  {
    id: 'nocturnal-journals',
    title: 'The Nocturnal Journals',
    category: 'book',
    author: 'Sylvia Townsend',
    description: 'Observations of the night landscape, animals, and silence, collected from diaries spanning three decades.',
    tag: 'Non-Fiction',
  },

  // Drinks (5 items)
  {
    id: 'midnight-pour-over',
    title: 'Midnight Pour-Over',
    category: 'drink',
    price: '$5.50',
    description: 'Single-origin Ethiopian Yirgacheffe, slow-brewed to draw out notes of dark berry and floral jasmine.',
    tag: 'House Blend',
  },
  {
    id: 'crescent-latte',
    title: 'Crescent Latte',
    category: 'drink',
    price: '$6.00',
    description: 'Espresso combined with oat milk, infused with a hint of warm honey and a touch of lavender extract.',
    tag: 'Signature',
  },
  {
    id: 'fog-and-steam',
    title: 'Fog & Steam',
    category: 'drink',
    price: '$5.75',
    description: 'Strong Earl Grey tea brewed with warm steamed whole milk, sweet vanilla syrup, and a sprinkle of nutmeg.',
    tag: 'Classic',
  },
  {
    id: 'chamomile-dusk',
    title: 'Chamomile Dusk',
    category: 'drink',
    price: '$5.00',
    description: 'Whole chamomile blossoms steeped with dried apple slices, orange peel, and fresh mint sprigs. Caffeine-free.',
    tag: 'Herbal Tea',
  },
  {
    id: 'amber-espresso',
    title: 'Amber Espresso',
    category: 'drink',
    price: '$4.50',
    description: 'Double shot of espresso pulled over a small block of dark brown sugar, served with a twist of orange peel.',
    tag: 'Signature',
  },

  // Desserts (3 items)
  {
    id: 'midnight-brownie',
    title: 'Midnight Brownie',
    category: 'dessert',
    price: '$4.75',
    description: 'A dense, rich fudge brownie made with 70% dark chocolate and a pinch of flaky sea salt on top.',
    tag: 'House Favorite',
  },
  {
    id: 'sage-lemon-cake',
    title: 'Sage & Lemon Tea Cake',
    category: 'dessert',
    price: '$5.25',
    description: 'A light cornmeal tea cake infused with fresh garden sage, glazed with a tart lemon juice syrup.',
    tag: 'Seasonal',
  },
  {
    id: 'cardamom-shortbread',
    title: 'Cardamom Shortbread',
    category: 'dessert',
    price: '$3.50',
    description: 'Two thick, buttery shortbread cookies heavily spiced with ground green cardamom. Perfect with coffee.',
    tag: 'Classic',
  },
];

export const featuredItem = {
  id: 'featured-book-of-the-month',
  title: 'The Book of the Moon',
  category: 'book',
  author: 'Abigail G. Bell',
  imageSrc: '/images/featured-book.webp',
  imageAlt: 'Constellation star map patterned book next to a beeswax candle',
  description: 'An architectural history and poetic exploration of libraries, reading corners, and bookshops built to be visited only at night. Includes blueprints and hand-drawn maps of secret spaces across thirteen cities.',
  tag: 'Featured',
};

export const featuredNote = {
  text: 'This is the book that inspired the name and space of our Crescent Lane Annex. It sits on the top shelf of the East Bookcase. We keep one copy to read in the corner, and three copies wrapped in paper for those who want to take it home.',
  sign: '— The Bookshelf Curator',
};
export default shelvesItems;
