import { motion } from 'framer-motion';
import { contactInfo } from '../../../data/siteMetadata';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function DirectionsBlurb() {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <div className="space-y-12 overflow-hidden">
      <motion.div 
        {...anim(0.1)}
        className="bg-white p-8 rounded-xl border border-ink-black/5 shadow-sm"
      >
        <h3 className="font-serif text-xl text-ink-black mb-4">
          Finding the Annex
        </h3>
        <p className="font-sans text-base text-walnut-brown leading-relaxed">
          {contactInfo.directions}
        </p>
      </motion.div>

      <motion.div 
        {...anim(0.25)}
        className="rounded-xl overflow-hidden shadow-sm border border-ink-black/5 aspect-[1200/630]"
      >
        <img 
          src="/images/og-image.webp" 
          alt="Moonbound Cafe brand card showing name and moon ornament illustration" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}




export default DirectionsBlurb;
