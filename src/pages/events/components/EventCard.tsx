import { motion } from 'framer-motion';
import { Tag } from '../../../components/ui/Tag';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import type { EventItem } from '../../../types';

interface EventCardProps {
  event: EventItem;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const reduced = useReducedMotion();

  // Helper to format ISO dates to readable string
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC', // Ensure consistent output regardless of local settings
    });
  };

  const EASE = [0.25, 0.1, 0.25, 1] as const;

  // Staggered scroll-fade (Signature Motion Moment 3)
  const cardAnimation = {
    initial: reduced ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, delay: index * 0.1, ease: EASE },
  };

  return (
    <motion.article 
      {...cardAnimation}
      className="bg-white p-8 rounded-xl border border-ink-black/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Tag>{event.tag}</Tag>
          <time 
            dateTime={event.date} 
            className="font-sans text-xs text-antique-gold font-medium"
          >
            {formatDate(event.date)}
          </time>
        </div>

        <h3 className="font-serif text-xl md:text-2xl text-ink-black mb-2">
          {event.title}
        </h3>
        
        <p className="font-sans text-base text-walnut-brown leading-relaxed max-w-2xl">
          {event.description}
        </p>
      </div>

      <div className="flex-shrink-0 w-full md:w-auto pt-2 md:pt-0">
        <span className="inline-block font-sans text-xs tracking-widest uppercase text-walnut-brown/60 border-t border-walnut-brown/20 pt-2 md:border-t-0 md:pt-0">
          Admission Free
        </span>
      </div>
    </motion.article>
  );
}

export default EventCard;
