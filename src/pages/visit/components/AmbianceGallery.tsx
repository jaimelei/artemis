import { motion } from 'framer-motion';
import { FramedImage } from '../../../components/ui/FramedImage';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function AmbianceGallery() {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const images = [
    {
      src: '/images/visit-entrance.webp',
      alt: 'Close up of a cafe entrance door with a brass crescent moon ornament above it',
      caption: 'Look for the crescent',
      rotate: 'left' as const,
      loading: 'eager' as const,
    },
    {
      src: '/images/visit-interior.webp',
      alt: 'Cozy reading corner inside a cafe with a leather armchair, bookshelves, and lamp',
      caption: 'A corner to stay in',
      rotate: 'right' as const,
      loading: 'lazy' as const,
    },
    {
      src: '/images/visit-window.webp',
      alt: 'Rain droplets on a window glass reflecting warm cafe ambient lights',
      caption: 'A quiet rainy evening',
      rotate: 'left' as const,
      loading: 'lazy' as const,
    },
  ];

  const anim = (index: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, delay: index * 0.15, ease: EASE },
  });

  return (
    <div className="flex flex-col gap-12 md:gap-16 py-6 items-center w-full">
      {images.map((img, i) => (
        <motion.div 
          key={i} 
          {...anim(i)}
          className="w-full max-w-[280px] md:max-w-[360px]"
        >
          <FramedImage
            src={img.src}
            alt={img.alt}
            caption={img.caption}
            rotate={img.rotate}
            loading={img.loading}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default AmbianceGallery;

