import { motion } from 'framer-motion';
import { contactInfo } from '../../../data/siteMetadata';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function HoursTable() {
  const todayName = 'Friday';
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const getAnim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.5, delay, ease: EASE },
  });

  return (
    <div className="bg-white p-6 rounded-xl border border-ink-black/5 shadow-sm overflow-hidden">
      <motion.h3 
        {...getAnim(0.05)}
        className="font-serif text-lg text-ink-black mb-6"
      >
        Opening Hours
      </motion.h3>
      <dl className="space-y-4">
        {contactInfo.hours.map((row, idx) => {
          const isToday = row.day === todayName;
          return (
            <motion.div 
              key={row.day}
              {...getAnim(0.1 + idx * 0.05)}
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
            </motion.div>
          );
        })}
      </dl>
    </div>
  );
}

export default HoursTable;

