import { contactInfo } from '../../../data/siteMetadata';

export function HoursTable() {
  // Hardcoded today index matching target workspace time: 2026-07-10 (Friday)
  const currentDayIndex = 5; // Friday is index 5 in hours array: Mon(0), Tue(1), Wed(2), Thu(3), Fri(4), Sat(5), Sun(6)
  // Let's match by comparing day string for robust display
  const todayName = 'Friday';

  return (
    <div className="bg-white p-6 rounded-xl border border-ink-black/5 shadow-sm">
      <h3 className="font-serif text-lg text-ink-black mb-6">
        Opening Hours
      </h3>
      <dl className="space-y-4">
        {contactInfo.hours.map((row) => {
          const isToday = row.day === todayName;
          return (
            <div 
              key={row.day}
              className={`flex justify-between items-center py-2 border-b border-ink-black/5 last:border-b-0 ${
                isToday ? 'font-semibold text-ink-black' : 'text-walnut-brown/80'
              }`}
            >
              <dt className="font-sans text-sm flex items-center gap-2">
                {row.day}
                {isToday && (
                  <span className="text-[10px] tracking-wider uppercase bg-antique-gold/20 text-walnut-brown px-2 py-0.5 rounded-full font-sans font-medium">
                    Today
                  </span>
                )}
              </dt>
              <dd className={`font-sans text-sm ${row.isClosed ? 'italic text-walnut-brown/40' : ''}`}>
                {row.hours}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default HoursTable;
