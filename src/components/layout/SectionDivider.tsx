import { StarIcon } from '../../assets/icons/StarIcon';

export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-4 max-w-reading mx-auto py-12 px-6"
    >
      <div className="flex-grow h-px bg-antique-gold/30"></div>
      <StarIcon className="w-4 h-4 text-antique-gold/50 flex-shrink-0" />
      <div className="flex-grow h-px bg-antique-gold/30"></div>
    </div>
  );
}

export default SectionDivider;
