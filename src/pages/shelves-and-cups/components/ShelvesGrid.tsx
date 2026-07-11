import { ItemCard } from './ItemCard';
import type { ShelfItem } from '../../../types';

interface ShelvesGridProps {
  items: ShelfItem[];
  activeFilter: string;
}

export function ShelvesGrid({ items, activeFilter }: ShelvesGridProps) {
  return (
    <section className="bg-moon-ivory py-12 px-6">
      <div 
        key={activeFilter}
        className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
      >
        {items.map((item, index) => (
          <ItemCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}


export default ShelvesGrid;
