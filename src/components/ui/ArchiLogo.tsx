import React from 'react';
import archilogoPng from '../../assets/images/archilogo.png';

interface ArchiLogoProps {
  className?: string;
  isDark?: boolean;
}

export function ArchiLogo({ className = "w-8 h-8", isDark = false }: ArchiLogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img 
        src={archilogoPng} 
        alt="Archi Logo" 
        className="w-full h-full object-contain"
        style={{ filter: isDark ? 'invert(1)' : 'none' }}
      />
    </div>
  );
}
