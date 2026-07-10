interface PullQuoteProps {
  quote: string;
  attribution: string;
}

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <div className="max-w-reading mx-auto px-6 py-16 text-center">
      <blockquote className="relative">
        <span 
          aria-hidden="true" 
          className="absolute -top-12 left-1/2 -translate-x-1/2 font-serif text-8xl text-antique-gold/10 select-none"
        >
          &ldquo;
        </span>
        <p className="font-serif italic text-2xl md:text-3xl text-walnut-brown leading-relaxed relative z-10">
          {quote}
        </p>
      </blockquote>
      <p className="font-sans text-sm tracking-wider uppercase text-walnut-brown/70 mt-4">
        — {attribution}
      </p>
    </div>
  );
}

export default PullQuote;
