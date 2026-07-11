import { motion } from 'framer-motion';
import { FramedImage } from '../../../components/ui/FramedImage';
import { featuredItem, featuredNote } from '../../../data/shelvesData';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function FeaturedItem() {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="bg-midnight-navy py-16 md:py-24 px-6 text-moon-ivory border-b border-moon-ivory/5 overflow-hidden">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Image Column */}
        <motion.div 
          {...anim(0.15)}
          className="flex-1 flex justify-center w-full max-w-sm"
        >
          <FramedImage
            src={featuredItem.imageSrc}
            alt={featuredItem.imageAlt}
            caption="Recommendation of the Moon"
            rotate="right"
          />
        </motion.div>

        {/* Info Column */}
        <motion.div 
          {...anim(0.3)}
          className="flex-1 max-w-reading"
        >
          <span className="inline-block border border-antique-gold/40 text-antique-gold px-3 py-1 text-xs tracking-wider uppercase font-sans font-medium rounded-full mb-4">
            {featuredItem.tag}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-moon-ivory mb-2">
            {featuredItem.title}
          </h2>
          <p className="font-sans text-sm text-antique-gold/80 mb-6 italic">
            by {featuredItem.author}
          </p>
          <p className="font-sans text-base text-moon-ivory/80 leading-relaxed mb-8">
            {featuredItem.description}
          </p>
          
          {/* Note Card */}
          <div className="bg-moon-ivory/[0.03] border border-moon-ivory/10 rounded-lg p-6 relative">
            <p className="font-hand text-lg text-antique-gold/90 leading-relaxed">
              {featuredNote.text}
            </p>
            <p className="font-hand text-base text-antique-gold/70 text-right mt-4">
              {featuredNote.sign}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedItem;

