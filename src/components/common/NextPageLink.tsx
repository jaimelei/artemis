import { motion } from 'framer-motion';
import { GhostButton } from '../ui/GhostButton';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NextPageLinkProps {
  to: string;
  label: string;
}

export function NextPageLink({ to, label }: NextPageLinkProps) {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section aria-label="Continue reading" className="py-16 md:py-24 text-center bg-moon-ivory border-t border-antique-gold/10 overflow-hidden">
      <motion.p 
        {...anim(0.1)}
        className="font-hand text-xl text-walnut-brown/60 mb-4"
      >
        Continue your visit
      </motion.p>
      <motion.div {...anim(0.25)}>
        <GhostButton to={to}>
          {label}
        </GhostButton>
      </motion.div>
    </section>
  );
}


export default NextPageLink;
