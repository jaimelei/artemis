import { motion } from 'framer-motion';
import { contactInfo } from '../../../data/siteMetadata';
import { MoonIcon } from '../../../assets/icons/MoonIcon';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function AddressBlock() {
  const { street, city, state, zip } = contactInfo.address;
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <motion.div {...anim(0.1)} className="flex items-center gap-3">
        <MoonIcon className="w-5 h-5 text-antique-gold flex-shrink-0" />
        <h3 className="font-serif text-lg text-ink-black">
          The Crescent Annex
        </h3>
      </motion.div>
      
      <motion.address {...anim(0.2)} className="not-italic font-sans text-base text-walnut-brown leading-relaxed">
        <p>{street}</p>
        <p>{city}, {state} {zip}</p>
      </motion.address>

      <motion.div {...anim(0.3)} className="font-sans text-sm text-walnut-brown/80 space-y-2 border-t border-antique-gold/20 pt-6">
        <p>
          <span className="font-medium">Letters:</span>{' '}
          <a 
            href={`mailto:${contactInfo.email}`}
            className="text-antique-gold hover:underline focus:outline-none focus:underline"
          >
            {contactInfo.email}
          </a>
        </p>
        <p>
          <span className="font-medium">Social:</span>{' '}
          <a 
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-antique-gold hover:underline focus:outline-none focus:underline"
          >
            {contactInfo.instagram}
          </a>
        </p>
      </motion.div>
    </div>
  );
}


export default AddressBlock;
