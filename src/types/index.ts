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
