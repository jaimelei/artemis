import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { contactInfo } from '../../data/siteMetadata';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Footer() {
  const reduced = useReducedMotion();
  const EASE = [0.25, 0.1, 0.25, 1] as const;

  const anim = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: reduced ? { duration: 0 } : { duration: 0.6, delay, ease: EASE },
  });

  return (
    <footer role="contentinfo" className="bg-midnight-navy py-16 md:py-20 px-6 border-t border-moon-ivory/5 overflow-hidden">
      <div className="max-w-content mx-auto text-center">
        {/* Simple decorative moon element */}
        <motion.div {...anim(0.1)} className="flex justify-center mb-6">
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
        </motion.div>

        {/* Brand name */}
        <motion.p {...anim(0.2)} className="font-serif text-lg text-moon-ivory">
          Moonbound Café, Artemis
        </motion.p>

        {/* Navigation Links */}
        <motion.nav {...anim(0.3)} aria-label="Footer navigation" className="mt-8">
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
        </motion.nav>

        {/* Contact info */}
        <motion.p {...anim(0.4)} className="mt-8 font-sans text-sm text-moon-ivory/50 flex flex-wrap justify-center gap-2">
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
        </motion.p>

        {/* est tag */}
        <motion.p {...anim(0.5)} className="font-hand text-base text-antique-gold/70 mt-8">
          est. under a full moon
        </motion.p>
      </div>
    </footer>
  );
}

