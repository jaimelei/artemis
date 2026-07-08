import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-midnight-navy sticky top-0 z-40">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark logo */}
        <Link 
          to="/" 
          className="font-serif text-xl text-moon-ivory hover:text-antique-gold transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          Moonbound
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`font-sans text-sm transition-colors duration-200 ${
                      isActive 
                        ? 'text-antique-gold font-medium' 
                        : 'text-moon-ivory/80 hover:text-antique-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden font-sans text-sm text-moon-ivory/80 hover:text-antique-gold transition-colors duration-200 focus:outline-none"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 bg-midnight-navy border-t border-moon-ivory/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm block transition-colors duration-200 ${
                    isActive 
                      ? 'text-antique-gold font-medium' 
                      : 'text-moon-ivory/80 hover:text-antique-gold'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
