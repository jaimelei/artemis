import { MoonIcon } from '../../../assets/icons/MoonIcon';

export function EmptyState() {
  return (
    <div className="py-16 md:py-24 text-center px-6">
      <div className="flex justify-center mb-6 opacity-30">
        <MoonIcon className="w-12 h-12 text-walnut-brown" />
      </div>
      <h3 className="font-serif text-xl text-ink-black mb-2">
        A Quiet Spell
      </h3>
      <p className="font-sans text-sm md:text-base text-walnut-brown/70 max-w-sm mx-auto leading-relaxed">
        There are no scheduled events on the horizon. The books remain open, and the kettle is warm.
      </p>
    </div>
  );
}

export default EmptyState;
