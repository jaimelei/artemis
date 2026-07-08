import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SectionDivider } from '../../components/layout/SectionDivider';
import { Doorways } from './components/Doorways';

export default function Home() {
  usePageMeta(pageMeta.home.title, pageMeta.home.description);

  return (
    <>
      <Hero />
      <BrandIntro />
      <SectionDivider />
      <Doorways />
    </>
  );
}