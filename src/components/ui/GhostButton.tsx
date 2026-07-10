import { Link } from 'react-router-dom';

interface GhostButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
}

export function GhostButton({ children, to, onClick, className = '' }: GhostButtonProps) {
  const baseClass = "inline-block border border-walnut-brown px-6 py-3 font-sans text-sm tracking-wider uppercase text-walnut-brown hover:bg-walnut-brown hover:text-moon-ivory transition-all duration-300 rounded-md focus:outline-none";

  if (to) {
    return (
      <Link to={to} className={`${baseClass} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}

export default GhostButton;
