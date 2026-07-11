import { motion } from 'framer-motion';
import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { PageHeader } from '../../components/common/PageHeader';
import { AddressBlock } from './components/AddressBlock';
import { HoursTable } from './components/HoursTable';
import { AmbianceGallery } from './components/AmbianceGallery';
import { DirectionsBlurb } from './components/DirectionsBlurb';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Visit() {
  usePageMeta(pageMeta.visit.title, pageMeta.visit.description);
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease: EASE },
  });

  return (
    <div className="bg-moon-ivory min-h-screen pb-20 overflow-hidden">
      <PageHeader
        title="Visit"
        subtitle="Hours, directions, and details to plan your visit"
      />

      <div className="max-w-content mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Information Column */}
          <div className="flex-1 w-full space-y-12 lg:space-y-16">
            <AddressBlock />
            <HoursTable />
            <DirectionsBlurb />
          </div>

          {/* Visual Column */}
          <div className="flex-1 w-full flex justify-center">
            <AmbianceGallery />
          </div>
        </div>
      </div>
    </div>
  );
}



