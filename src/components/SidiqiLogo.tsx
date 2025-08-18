import React from 'react';

interface SidiqiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

export const SidiqiLogo: React.FC<SidiqiLogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`${sizeMap[size]} ${className} relative`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Neural Network Circle */}
        <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="2" />
        
        {/* Nodes */}
        <circle cx="30" cy="30" r="4" fill="#3b82f6" className="animate-pulse" />
        <circle cx="70" cy="30" r="4" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="50" cy="70" r="4" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Connections */}
        <path d="M30,30 L70,30 L50,70 Z" stroke="url(#connectionsGradient)" strokeWidth="2" opacity="0.6" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="connectionsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
