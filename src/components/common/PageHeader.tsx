import { motion } from 'framer-motion';
import { MoonIcon } from '../../assets/icons/MoonIcon';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section className="bg-midnight-navy py-20 md:py-28 px-6 text-center border-b border-moon-ivory/5">
      <div className="max-w-content mx-auto">
        <motion.div {...anim(0.1)} className="flex justify-center mb-6">
          <MoonIcon className="w-8 h-8 text-antique-gold" />
        </motion.div>
        <motion.h1 
          {...anim(0.25)} 
          className="font-serif text-3xl md:text-5xl text-moon-ivory tracking-wide"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            {...anim(0.4)}
            className="font-sans text-sm md:text-base text-moon-ivory/60 mt-4 tracking-widest uppercase max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}


export default PageHeader;
