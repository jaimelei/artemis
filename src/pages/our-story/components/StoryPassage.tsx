import { motion } from 'framer-motion';
import { FramedImage } from '../../../components/ui/FramedImage';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface StoryPassageProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  rotate?: 'left' | 'right';
  reverse?: boolean;
}

export function StoryPassage({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageCaption,
  rotate = 'right',
  reverse = false,
}: StoryPassageProps) {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="py-16 md:py-24 px-6 bg-moon-ivory overflow-hidden">
      <div 
        className={`max-w-content mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Text column */}
        <motion.div 
          {...anim(0.1)}
          className="flex-1 max-w-reading"
        >
          <h2 className="font-serif text-3xl text-ink-black mb-6">
            {title}
          </h2>
          <div className="space-y-6 font-sans text-base text-walnut-brown leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div 
          {...anim(0.25)}
          className="flex-1 flex justify-center w-full max-w-sm"
        >
          <FramedImage
            src={imageSrc}
            alt={imageAlt}
            caption={imageCaption}
            rotate={rotate}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default StoryPassage;

