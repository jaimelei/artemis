import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { PageHeader } from '../../components/common/PageHeader';
import { StoryPassage } from './components/StoryPassage';
import { PullQuote } from '../../components/ui/PullQuote';
import { NextPageLink } from '../../components/common/NextPageLink';
import { SectionDivider } from '../../components/layout/SectionDivider';

interface PassageData {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  rotate: 'left' | 'right';
}

const passages: PassageData[] = [
  {
    title: 'I. The Beginning',
    paragraphs: [
      'Moonbound Café began with a simple question: where do we go when we want to escape the daylight? In the spring of 2021, we found a small brick annex behind the Moonhaven Library. It had tall arched windows, concrete floors, and nothing else.',
      'We spent three months cleaning the brickwork, painting the walls a deep midnight blue, and building two floor-to-ceiling oak bookcases. We wanted to create a room that felt like the quiet hours between midnight and dawn — a place where the clock ticks slower and the rush of the street outside fades away.'
    ],
    imageSrc: '/images/story-exterior.webp',
    imageAlt: 'Exterior of a small cafe at dusk with warm light showing inside',
    imageCaption: 'Crescent Lane Annex, 2021',
    rotate: 'right'
  },
  {
    title: 'II. The Shelves',
    paragraphs: [
      'The bookcases were built to hold books that demand your full attention. We do not stock the bestsellers of the week; we collect the titles that make you want to sit in a corner for three hours. Our shelves are filled with poetry, philosophy, translation, and rare editions of classics.',
      'Each volume has been hand-selected. We invite you to pull a book from the shelf, carry it to your table, and leave it behind when you leave. There are no barcodes here — only pages that have been read by dozens of strangers before you.'
    ],
    imageSrc: '/images/story-shelves.webp',
    imageAlt: 'Books stacked on old oak shelves in warm light',
    imageCaption: 'The North Library bookcase',
    rotate: 'left'
  },
  {
    title: 'III. The Cups',
    paragraphs: [
      'Our drinks are prepared with the same quiet attention. We do not serve drinks in paper cups, and we do not rush the process. Coffee is roasted locally in small batches and brewed slow — pour-overs, siphons, and traditional espresso.',
      'Our teas are sourced directly from gardens we know. We serve them in heavy, textured clay mugs that warm your hands. Each cup is meant to be held, tasted, and sat with. There are no quick coffees to go here — only drinks worth staying for.'
    ],
    imageSrc: '/images/story-cups.webp',
    imageAlt: 'Mismatched ceramic mugs on a rustic wooden table with a brownie',
    imageCaption: 'Brewed with care, served in clay',
    rotate: 'right'
  },
  {
    title: 'IV. The Moon',
    paragraphs: [
      'When night falls, the café changes. The overhead lights are turned down, and we light candles on every table. The moonlight streams through the tall arched windows, casting long shapes across the floor.',
      'This is the time Moonbound was built for. In the nocturnal quiet, the café becomes a sanctuary. Whether you are writing a letter, reading a book, or sitting in silence, you are sharing the night with others who seek the same quiet space.'
    ],
    imageSrc: '/images/story-moon.webp',
    imageAlt: 'Moonlight shining onto wooden tables inside a dark cafe',
    imageCaption: 'Midnight at the Crescent Annex',
    rotate: 'left'
  }
];

export default function OurStory() {
  usePageMeta(pageMeta['our-story'].title, pageMeta['our-story'].description);

  return (
    <div className="bg-moon-ivory">
      <PageHeader
        title="Our Story"
        subtitle="How a brass moon and two oak bookcases became a café"
      />

      <div className="py-8">
        <StoryPassage
          title={passages[0].title}
          paragraphs={passages[0].paragraphs}
          imageSrc={passages[0].imageSrc}
          imageAlt={passages[0].imageAlt}
          imageCaption={passages[0].imageCaption}
          rotate={passages[0].rotate}
        />

        <SectionDivider />

        <StoryPassage
          title={passages[1].title}
          paragraphs={passages[1].paragraphs}
          imageSrc={passages[1].imageSrc}
          imageAlt={passages[1].imageAlt}
          imageCaption={passages[1].imageCaption}
          rotate={passages[1].rotate}
          reverse
        />

        <PullQuote
          quote="We wanted to create a room that felt like the quiet hours between midnight and dawn — a place where the clock ticks slower."
          attribution="A. Bell, Founder"
        />

        <StoryPassage
          title={passages[2].title}
          paragraphs={passages[2].paragraphs}
          imageSrc={passages[2].imageSrc}
          imageAlt={passages[2].imageAlt}
          imageCaption={passages[2].imageCaption}
          rotate={passages[2].rotate}
        />

        <SectionDivider />

        <StoryPassage
          title={passages[3].title}
          paragraphs={passages[3].paragraphs}
          imageSrc={passages[3].imageSrc}
          imageAlt={passages[3].imageAlt}
          imageCaption={passages[3].imageCaption}
          rotate={passages[3].rotate}
          reverse
        />
      </div>

      <NextPageLink
        to="/shelves-and-cups"
        label="View the Shelves & Cups"
      />
    </div>
  );
}
