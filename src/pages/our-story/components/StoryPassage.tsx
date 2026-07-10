import { FramedImage } from '../../../components/ui/FramedImage';

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
  return (
    <section className="py-16 md:py-24 px-6 bg-moon-ivory">
      <div 
        className={`max-w-content mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Text column */}
        <div className="flex-1 max-w-reading">
          <h2 className="font-serif text-3xl text-ink-black mb-6">
            {title}
          </h2>
          <div className="space-y-6 font-sans text-base text-walnut-brown leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="flex-1 flex justify-center w-full max-w-sm">
          <FramedImage
            src={imageSrc}
            alt={imageAlt}
            caption={imageCaption}
            rotate={rotate}
          />
        </div>
      </div>
    </section>
  );
}

export default StoryPassage;
