import { motion } from 'framer-motion';
import { StarIcon } from '../../assets/icons/StarIcon';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function SectionDivider() {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = {
    initial: reduced ? false : { opacity: 0, scaleX: 0.3 },
    whileInView: { opacity: 1, scaleX: 1 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, ease: EASE },
  };

  return (
    <motion.div
      aria-hidden="true"
      {...anim}
      className="flex items-center justify-center gap-4 max-w-reading mx-auto py-12 px-6 origin-center"
    >
      <div className="flex-grow h-px bg-antique-gold/30"></div>
      <StarIcon className="w-4 h-4 text-antique-gold/50 flex-shrink-0" />
      <div className="flex-grow h-px bg-antique-gold/30"></div>
    </motion.div>
  );
}


export default SectionDivider;
