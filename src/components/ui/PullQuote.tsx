import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PullQuoteProps {
  quote: string;
  attribution: string;
}

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <div className="max-w-reading mx-auto px-6 py-16 text-center overflow-hidden">
      <blockquote className="relative">
        <span 
          aria-hidden="true" 
          className="absolute -top-12 left-1/2 -translate-x-1/2 font-serif text-8xl text-antique-gold/10 select-none"
        >
          &ldquo;
        </span>
        <motion.p 
          {...anim(0.1)}
          className="font-serif italic text-2xl md:text-3xl text-walnut-brown leading-relaxed relative z-10"
        >
          {quote}
        </motion.p>
      </blockquote>
      <motion.p 
        {...anim(0.25)}
        className="font-sans text-sm tracking-wider uppercase text-walnut-brown/70 mt-4"
      >
        — {attribution}
      </motion.p>
    </div>
  );
}


export default PullQuote;
