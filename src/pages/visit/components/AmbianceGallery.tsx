import { FramedImage } from '../../../components/ui/FramedImage';

export function AmbianceGallery() {
  const images = [
    {
      src: '/images/visit-entrance.webp',
      alt: 'Close up of a cafe entrance door with a brass crescent moon ornament above it',
      caption: 'Look for the crescent',
      rotate: 'left' as const,
      loading: 'eager' as const, // Above-the-fold/first element visibility
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

  return (
    <div className="flex flex-col gap-12 md:gap-16 py-6 items-center">
      {images.map((img, i) => (
        <div key={i} className="w-full max-w-[280px] md:max-w-[360px]">
          <FramedImage
            src={img.src}
            alt={img.alt}
            caption={img.caption}
            rotate={img.rotate}
            loading={img.loading}
          />
        </div>
      ))}
    </div>
  );
}

export default AmbianceGallery;
