interface FramedImageProps {
  src: string;
  alt: string;
  caption: string;
  rotate?: 'left' | 'right';
  loading?: 'lazy' | 'eager';
}

export function FramedImage({
  src,
  alt,
  caption,
  rotate = 'right',
  loading = 'lazy'
}: FramedImageProps) {
  const rotationClass = rotate === 'left' ? '-rotate-1 md:-rotate-2' : 'rotate-1 md:rotate-2';

  return (
    <figure
      className={`bg-white p-4 pb-6 shadow-md border border-ink-black/5 max-w-sm mx-auto transition-transform duration-300 hover:rotate-0 ${rotationClass}`}
    >
      <div className="overflow-hidden bg-moon-ivory aspect-square">
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
        />
      </div>
      <figcaption className="font-hand text-xl text-walnut-brown text-center mt-4">
        {caption}
      </figcaption>
    </figure>
  );
}

export default FramedImage;
