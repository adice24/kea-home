import React from 'react';

interface KeaLogoProps {
  className?: string;
  size?: number;
}

export const KeaLogo: React.FC<KeaLogoProps> = ({ className = '', size = 52 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full shrink-0 shadow-sm ${className}`}
      style={{ width: size, height: size }}
      title="Karnataka Examinations Authority (KEA) Monogram"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full transform transition-transform hover:rotate-6 duration-300"
      >
        <defs>
          <radialGradient id="keaGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#A8285D" />
            <stop offset="60%" stopColor="#8B1E4B" />
            <stop offset="100%" stopColor="#661034" />
          </radialGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#F2B632" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Ring */}
        <circle cx="50" cy="50" r="48" fill="#8B1E4B" stroke="#F2B632" strokeWidth="3.5" />
        
        {/* Inner Ring with Dotted Ornamentation */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="#F2B632" strokeWidth="1" strokeDasharray="2,2" />
        
        {/* Central Badge Background */}
        <circle cx="50" cy="50" r="38" fill="url(#keaGrad)" />

        {/* Decorative Laurel / Sunburst Arc */}
        <path
          d="M 24 50 A 26 26 0 0 0 76 50"
          fill="none"
          stroke="#F2B632"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Small Decorative Crown / Crest Peak */}
        <path
          d="M 44 26 L 50 20 L 56 26 L 50 24 Z"
          fill="#F2B632"
        />
        <circle cx="50" cy="20" r="1.5" fill="#FFFFFF" />

        {/* KEA Acronym */}
        <text
          x="50"
          y="48"
          textAnchor="middle"
          fontSize="17"
          fontWeight="800"
          letterSpacing="1.5"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          KEA
        </text>

        {/* Year / Established */}
        <text
          x="50"
          y="61"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="700"
          letterSpacing="1"
          fill="#F2B632"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ESTD 1996
        </text>

        {/* Bottom bilingual banner */}
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fontSize="6.2"
          fontWeight="600"
          fill="#FCE7F3"
          fontFamily="sans-serif"
        >
          ಕರ್ನಾಟಕ
        </text>
      </svg>
    </div>
  );
};
