import { FramedImage } from '../../../components/ui/FramedImage';
import { featuredItem, featuredNote } from '../../../data/shelvesData';

export function FeaturedItem() {
  return (
    <section className="bg-midnight-navy py-16 md:py-24 px-6 text-moon-ivory border-b border-moon-ivory/5">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Image Column */}
        <div className="flex-1 flex justify-center w-full max-w-sm">
          <FramedImage
            src={featuredItem.imageSrc}
            alt={featuredItem.imageAlt}
            caption="Recommendation of the Moon"
            rotate="right"
          />
        </div>

        {/* Info Column */}
        <div className="flex-1 max-w-reading">
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
        </div>
      </div>
    </section>
  );
}

export default FeaturedItem;
