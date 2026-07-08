import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { Hero } from './components/Hero';

export default function Home() {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <>
      <Hero />
      {/* TODO: BrandIntro, SectionDivider, Doorways */}
    </>
  );
}