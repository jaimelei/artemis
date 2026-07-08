import { Link } from 'react-router-dom';

interface Doorway {
  image: string;
  title: string;
  description: string;
  path: string;
}

const doorways: Doorway[] = [
  {
    image: '/images/doorway-story.webp',
    title: 'Our Story',
    description: 'How a brass moon and two oak bookcases became a café.',
    path: '/our-story',
  },
  {
    image: '/images/doorway-shelves.webp',
    title: 'The Shelves & Cups',
    description: 'Books worth losing an afternoon in. Drinks worth staying for.',
    path: '/shelves-and-cups',
  },
  {
    image: '/images/doorway-events.webp',
    title: 'Events',
    description: 'Readings, book clubs, and quiet gatherings under the moon.',
    path: '/events',
  },
];

export function Doorways() {
  return (
    <section className="bg-moon-ivory pb-24 md:pb-40 px-6">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {doorways.map((doorway, i) => (
          <Link
            key={i}
            to={doorway.path}
            className="group flex flex-col focus:outline-none"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5">
              <img
                src={doorway.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="font-serif text-xl text-ink-black mb-2 group-hover:text-antique-gold transition-colors duration-200">
              {doorway.title}
            </h2>
            <p className="font-sans text-base text-walnut-brown">
              {doorway.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Doorways;
