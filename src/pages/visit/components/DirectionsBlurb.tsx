import { contactInfo } from '../../../data/siteMetadata';

export function DirectionsBlurb() {
  return (
    <div className="space-y-12">
      <div className="bg-white p-8 rounded-xl border border-ink-black/5 shadow-sm">
        <h3 className="font-serif text-xl text-ink-black mb-4">
          Finding the Annex
        </h3>
        <p className="font-sans text-base text-walnut-brown leading-relaxed">
          {contactInfo.directions}
        </p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-sm border border-ink-black/5 aspect-[1200/630]">
        <img 
          src="/images/og-image.webp" 
          alt="Moonbound Cafe brand card showing name and moon ornament illustration" 
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}



export default DirectionsBlurb;
