import { EventCard } from './EventCard';
import type { EventItem } from '../../../types';

interface EventListProps {
  events: EventItem[];
  title?: string;
  isPast?: boolean;
}

export function EventList({ events, title, isPast = false }: EventListProps) {
  if (events.length === 0) return null;

  return (
    <div className={`max-w-content mx-auto px-6 py-8 ${isPast ? 'opacity-65' : ''}`}>
      {title && (
        <h2 className="font-serif text-2xl text-ink-black mb-8 border-b border-antique-gold/20 pb-2">
          {title}
        </h2>
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
