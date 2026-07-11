import { motion } from 'framer-motion';
import { EventCard } from './EventCard';
import type { EventItem } from '../../../types';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface EventListProps {
  events: EventItem[];
  title?: string;
  isPast?: boolean;
}

export function EventList({ events, title, isPast = false }: EventListProps) {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  if (events.length === 0) return null;

  const titleAnim = {
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, ease: EASE },
  };

  return (
    <div className={`max-w-content mx-auto px-6 py-8 ${isPast ? 'opacity-65' : ''} overflow-hidden`}>
      {title && (
        <motion.h2 
          {...titleAnim}
          className="font-serif text-2xl text-ink-black mb-8 border-b border-antique-gold/20 pb-2"
        >
          {title}
        </motion.h2>
      )}
      <div className="flex flex-col gap-6">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}


export default EventList;
