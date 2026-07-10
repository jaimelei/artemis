import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span 
      className={`inline-block bg-dusty-sage/20 text-walnut-brown px-2.5 py-1 text-xs tracking-wider uppercase font-sans font-medium rounded-full ${className}`}
    >
      {children}
    </span>
  );
}

export default Tag;
