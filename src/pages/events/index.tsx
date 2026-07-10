import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { PageHeader } from '../../components/common/PageHeader';
import { EventList } from './components/EventList';
import { EmptyState } from './components/EmptyState';
import { NextPageLink } from '../../components/common/NextPageLink';
import { eventsItems } from '../../data/eventsData';

export default function Events() {
  usePageMeta(pageMeta.events.title, pageMeta.events.description);

  // Group events into upcoming and past relative to current workspace time (mid 2026)
  const todayStr = '2026-07-10'; // Unified anchor matching current metadata context
  
  const upcomingEvents = eventsItems
    .filter((event) => event.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));

  const pastEvents = eventsItems
    .filter((event) => event.date < todayStr)
    .sort((a, b) => b.date.localeCompare(a.date)); // Sort past events descending

  const hasEvents = upcomingEvents.length > 0 || pastEvents.length > 0;

  return (
    <div className="bg-moon-ivory min-h-screen pb-12">
      <PageHeader
        title="Events"
        subtitle="Readings, book clubs, writing circles, and quiet gatherings at Moonbound"
      />

      <div className="py-12 md:py-20">
        {!hasEvents ? (
          <EmptyState />
        ) : (
          <>
            {upcomingEvents.length > 0 ? (
              <EventList events={upcomingEvents} title="Upcoming Gatherings" />
            ) : (
              <div className="max-w-content mx-auto px-6 py-8">
                <p className="font-sans text-base text-walnut-brown/70 italic text-center">
                  No upcoming gatherings scheduled. Check back near the next new moon.
                </p>
              </div>
            )}

            {pastEvents.length > 0 && (
              <div className="mt-12">
                <EventList events={pastEvents} title="Past Gatherings" isPast />
              </div>
            )}
          </>
        )}
      </div>

      <NextPageLink
        to="/visit"
        label="Plan Your Visit"
      />
    </div>
  );
}
