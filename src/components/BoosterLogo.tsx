import React from 'react';

interface BoosterLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSponsorKicker?: boolean;
}

export const BoosterLogo: React.FC<BoosterLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSponsorKicker = false,
}) => {
  const isLight = variant === 'light'; // Light text on dark bg

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
  };

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Architectural Investment Growth Emblem */}
        <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
            <defs>
              <linearGradient id="boosterGreenGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#24B84A" />
                <stop offset="0.6" stopColor="#087A32" />
                <stop offset="1" stopColor="#063D20" />
              </linearGradient>
              <linearGradient id="boosterGoldGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DFBF7C" />
                <stop offset="1" stopColor="#C5A059" />
              </linearGradient>
            </defs>

            {/* Back wing: British Gold accent chevron */}
            <path
              d="M10 32 L22 8 L29 8 L17 32 Z"
              fill="url(#boosterGoldGrad)"
            />
            {/* Front wing: Emerald green gradient */}
            <path
              d="M18 32 L30 8 L37 8 L25 32 Z"
              fill="url(#boosterGreenGrad)"
            />
            {/* Horizontal precision geometric cuts */}
            <rect x="4" y="27" width="10" height="2.5" rx="1" fill="#24B84A" opacity="0.85" />
            <rect x="7" y="22" width="7" height="2" rx="1" fill="#C5A059" opacity="0.85" />
          </svg>
        </div>

        {/* Clean, Upright Institutional Bank Wordmark */}
        <div className="flex flex-col">
          <div className="flex items-baseline tracking-tight">
            <span
              className={`font-display font-extrabold tracking-tight ${sizeClasses[size]} ${
                isLight ? 'text-white' : 'text-[#063D20]'
              }`}
            >
              BOOSTER
            </span>
            <span
              className={`text-[0.68em] font-bold tracking-wider ml-1 ${
                isLight ? 'text-[#C5A059]' : 'text-[#087A32]'
              }`}
            >
              .NG
            </span>
          </div>
        </div>
      </div>

      {showSponsorKicker && (
        <span
          className={`text-[9px] uppercase tracking-widest font-semibold mt-0.5 ${
            isLight ? 'text-neutral-300' : 'text-neutral-500'
          }`}
        >
          By Beyond Borders Real Estate
        </span>
      )}
    </div>
  );
};
