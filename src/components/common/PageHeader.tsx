import { MoonIcon } from '../../assets/icons/MoonIcon';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-midnight-navy py-20 md:py-28 px-6 text-center border-b border-moon-ivory/5">
      <div className="max-w-content mx-auto">
        <div className="flex justify-center mb-6">
          <MoonIcon className="w-8 h-8 text-antique-gold" />
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-moon-ivory tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-sm md:text-base text-moon-ivory/60 mt-4 tracking-widest uppercase max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
