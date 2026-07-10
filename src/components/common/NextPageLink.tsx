import { GhostButton } from '../ui/GhostButton';

interface NextPageLinkProps {
  to: string;
  label: string;
}

export function NextPageLink({ to, label }: NextPageLinkProps) {
  return (
    <section aria-label="Continue reading" className="py-16 md:py-24 text-center bg-moon-ivory border-t border-antique-gold/10">
      <p className="font-hand text-xl text-walnut-brown/60 mb-4">
        Continue your visit
      </p>
      <GhostButton to={to}>
        {label}
      </GhostButton>
    </section>
  );
}

export default NextPageLink;
