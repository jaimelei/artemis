import { useRef, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterToggleProps {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export function FilterToggle({ options, selectedValue, onChange }: FilterToggleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (index + 1) % options.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = options.length - 1;
    }

    if (nextIndex !== null && containerRef.current) {
      e.preventDefault();
      const buttons = containerRef.current.querySelectorAll('button');
      buttons[nextIndex]?.focus();
      onChange(options[nextIndex].value);
    }
  };

  const anim = {
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: reduced ? { duration: 0 } : { duration: 0.6, ease: EASE },
  };

  return (
    <div className="w-full flex justify-center py-6 px-6 overflow-hidden">
      <motion.div
        ref={containerRef}
        role="tablist"
        aria-label="Filter menu items"
        {...anim}
        className="w-full md:w-auto bg-walnut-brown/5 p-1 rounded-lg flex flex-col md:flex-row gap-1"
      >
        {options.map((option, idx) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onChange(option.value)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`w-full md:w-auto px-6 py-2.5 text-sm font-sans font-medium tracking-wider uppercase rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-amber ${
                isSelected
                  ? 'bg-midnight-navy text-moon-ivory shadow-sm'
                  : 'text-walnut-brown/70 hover:text-walnut-brown hover:bg-walnut-brown/5'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}

export default FilterToggle;

