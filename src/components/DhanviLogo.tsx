import React, { useState } from 'react';
import officialLogoImg from '../assets/images/dhanvi_official_logo_1792134765686.jpg';

interface DhanviLogoProps {
  variant?: 'badge' | 'header' | 'icon' | 'transparent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const DhanviLogo: React.FC<DhanviLogoProps> = ({
  variant = 'badge',
  size = 'md',
  className = '',
  showText = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Dimension presets
  const sizeMap = {
    sm: {
      badge: 'w-12 h-12',
      header: 'h-10 sm:h-12',
      title: 'text-sm sm:text-base',
      sub: 'text-[9px] sm:text-[10px]',
      tag: 'text-[7px] sm:text-[8px]',
    },
    md: {
      badge: 'w-24 h-24 sm:w-28 sm:h-28',
      header: 'h-14',
      title: 'text-lg',
      sub: 'text-[11px]',
      tag: 'text-[9px]',
    },
    lg: {
      badge: 'w-36 h-36 sm:w-44 sm:h-44',
      header: 'h-20',
      title: 'text-2xl',
      sub: 'text-xs',
      tag: 'text-[10px]',
    },
    xl: {
      badge: 'w-48 h-48 sm:w-56 sm:h-56',
      header: 'h-28',
      title: 'text-3xl',
      sub: 'text-sm',
      tag: 'text-xs',
    },
  }[size];

  // Header lockup: Official Logo mark + responsive gold wordmark
  if (variant === 'header') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Official Logo Badge Container */}
        <div className="relative shrink-0 overflow-hidden rounded-lg border border-[#D4AF37]/40 bg-black p-0.5 shadow-md">
          <img
            src={officialLogoImg}
            alt="DHANVI Enterprises Official Brand Logo"
            className={`${sizeMap.header} aspect-square object-cover object-center`}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        </div>

        {showText && (
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-serif-luxury font-bold tracking-[0.12em] text-gold-gradient ${sizeMap.title}`}
              >
                DHANVI
              </span>
              <span
                className={`font-sans font-semibold tracking-[0.22em] text-[#E5C378] uppercase ${sizeMap.sub}`}
              >
                ENTERPRISES
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2.5 h-[1px] bg-[#10B981]/70" />
              <span
                className={`font-sans font-medium tracking-[0.16em] uppercase text-[#10B981] ${sizeMap.tag}`}
              >
                Real Estate Consultant
              </span>
              <span className="w-2.5 h-[1px] bg-[#10B981]/70" />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Icon only
  if (variant === 'icon') {
    return (
      <div
        className={`relative inline-block overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-black shadow-lg ${className}`}
      >
        <img
          src={officialLogoImg}
          alt="DHANVI Enterprises Official Logo"
          className={`${sizeMap.badge} object-cover object-center`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Full Badge Presentation (Default): Authentic black background with gold border glow
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center rounded-2xl bg-black border border-[#D4AF37]/40 p-3 sm:p-4 shadow-2xl transition-transform hover:scale-[1.01] ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={officialLogoImg}
          alt="DHANVI Enterprises Official Logo - Bangalore Real Estate Consultant"
          className={`${sizeMap.badge} object-cover object-center`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
