import { motion } from 'framer-motion';
import { Tag } from '../../../components/ui/Tag';
import { BookIcon } from '../../../assets/icons/BookIcon';
import { CupIcon } from '../../../assets/icons/CupIcon';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import type { ShelfItem } from '../../../types';

interface ItemCardProps {
  item: ShelfItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const reduced = useReducedMotion();
  const isBook = item.category === 'book';

  return (
    <div className="group relative bg-white p-6 rounded-xl border border-ink-black/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
      {/* Signature Animation: Constellation Hover Line SVG (Budget item 2) */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-walnut-brown/5 overflow-hidden">
        <motion.div
          className="h-full bg-antique-gold"
          initial={reduced ? { width: '0%' } : { x: '-100%', width: '100%' }}
          whileHover={reduced ? { width: '100%' } : { x: '0%' }}
          transition={reduced ? { duration: 0 } : { duration: 0.4, ease: 'easeInOut' }}
        />
      </div>

      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <Tag>{item.tag}</Tag>
          <div className="text-antique-gold/60 w-5 h-5 flex items-center justify-center">
            {isBook ? (
              <BookIcon className="w-5 h-5" />
            ) : (
              <CupIcon className="w-4 h-4 fill-current" />
            )}
          </div>
        </div>

        <h3 className="font-serif text-lg text-ink-black mb-1 group-hover:text-antique-gold transition-colors duration-200">
          {item.title}
        </h3>
        
        {isBook ? (
          <p className="font-sans text-xs text-antique-gold font-medium mb-3 italic">
            by {item.author}
          </p>
        ) : (
          <p className="font-sans text-sm text-warm-amber font-semibold mb-3">
            {item.price}
          </p>
        )}

        <p className="font-sans text-sm text-walnut-brown/85 leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
