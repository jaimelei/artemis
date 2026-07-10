import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { PageHeader } from '../../components/common/PageHeader';
import { AddressBlock } from './components/AddressBlock';
import { HoursTable } from './components/HoursTable';
import { AmbianceGallery } from './components/AmbianceGallery';
import { DirectionsBlurb } from './components/DirectionsBlurb';

export default function Visit() {
  usePageMeta(pageMeta.visit.title, pageMeta.visit.description);

  return (
    <div className="bg-moon-ivory min-h-screen pb-20">
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

