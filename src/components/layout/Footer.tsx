import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { contactInfo } from '../../data/siteMetadata';

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-midnight-navy py-16 md:py-20 px-6 border-t border-moon-ivory/5">
      <div className="max-w-content mx-auto text-center">
        {/* Simple decorative moon element */}
        <div className="flex justify-center mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="w-6 h-6 text-antique-gold"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </div>

        {/* Brand name */}
        <p className="font-serif text-lg text-moon-ivory">
          Moonbound Café, Artemis
        </p>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-sans text-sm text-moon-ivory/70 hover:text-antique-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <p className="mt-8 font-sans text-sm text-moon-ivory/50 flex flex-wrap justify-center gap-2">
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-antique-gold transition-colors duration-200"
          >
            {contactInfo.email}
          </a>
          <span>·</span>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-antique-gold transition-colors duration-200"
          >
            {contactInfo.instagram}
          </a>
        </p>

        {/* est tag */}
        <p className="font-hand text-base text-antique-gold/70 mt-8">
          est. under a full moon
        </p>
      </div>
    </footer>
  );
}
