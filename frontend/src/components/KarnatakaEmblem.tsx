import React from 'react';

interface KarnatakaEmblemProps {
  size?: number;
  className?: string;
}

export const KarnatakaEmblem: React.FC<KarnatakaEmblemProps> = ({ size = 42, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      title="Government of Karnataka Official Emblem - ಕರ್ನಾಟಕ ಸರ್ಕಾರ"
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <radialGradient id="gokGoldGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="45%" stopColor="#F5B700" />
            <stop offset="90%" stopColor="#D48800" />
            <stop offset="100%" stopColor="#B36B00" />
          </radialGradient>
          <radialGradient id="gokRedGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#D32F2F" />
            <stop offset="100%" stopColor="#8A0B0B" />
          </radialGradient>
        </defs>

        {/* Outer Red Ring with beaded border */}
        <circle cx="60" cy="60" r="58" fill="url(#gokRedGrad)" stroke="#B36B00" strokeWidth="2" />
        <circle cx="60" cy="60" r="54" fill="none" stroke="#FFF275" strokeWidth="1" strokeDasharray="2,2" />

        {/* Inner Gold Disc */}
        <circle cx="60" cy="60" r="49" fill="url(#gokGoldGrad)" stroke="#8A0B0B" strokeWidth="1.5" />

        {/* Ashoka Lion Capital (Crest top) */}
        <g transform="translate(48, 14) scale(0.24)">
          {/* Central Lion & Side Lions simplified silhouette */}
          <path
            d="M 50 5 C 40 5 35 15 35 25 C 35 35 40 45 45 55 L 55 55 C 60 45 65 35 65 25 C 65 15 60 5 50 5 Z"
            fill="#8A0B0B"
          />
          <path
            d="M 20 20 C 15 20 10 30 15 42 C 20 50 30 55 35 55 L 40 45 C 32 40 28 32 30 25 Z"
            fill="#8A0B0B"
          />
          <path
            d="M 80 20 C 85 20 90 30 85 42 C 80 50 70 55 65 55 L 60 45 C 68 40 72 32 70 25 Z"
            fill="#8A0B0B"
          />
          <rect x="25" y="55" width="50" height="8" rx="2" fill="#8A0B0B" />
        </g>

        {/* Mythical Gandaberunda (Two-headed eagle) in Center */}
        <g transform="translate(60, 58) scale(0.65)">
          {/* Body & Breast Shield */}
          <path
            d="M 0 -10 C -12 -10 -18 8 0 25 C 18 8 12 -10 0 -10 Z"
            fill="#8A0B0B"
          />
          {/* Left Head */}
          <path
            d="M -5 -8 C -10 -15 -22 -14 -24 -6 C -25 -2 -20 2 -10 0 Z"
            fill="#8A0B0B"
          />
          {/* Left Beak with Pearl/Drop */}
          <path
            d="M -24 -6 L -30 -3 L -22 -1 Z"
            fill="#8A0B0B"
          />
          <circle cx="-18" cy="-8" r="1.5" fill="#FFF" />

          {/* Right Head */}
          <path
            d="M 5 -8 C 10 -15 22 -14 24 -6 C 25 -2 20 2 10 0 Z"
            fill="#8A0B0B"
          />
          {/* Right Beak with Pearl/Drop */}
          <path
            d="M 24 -6 L 30 -3 L 22 -1 Z"
            fill="#8A0B0B"
          />
          <circle cx="18" cy="-8" r="1.5" fill="#FFF" />

          {/* Left Wing Spanning Out */}
          <path
            d="M -10 -2 C -25 -10 -38 5 -32 20 C -25 22 -15 15 -8 10 Z"
            fill="#8A0B0B"
          />
          {/* Right Wing Spanning Out */}
          <path
            d="M 10 -2 C 25 -10 38 5 32 20 C 25 22 15 15 8 10 Z"
            fill="#8A0B0B"
          />

          {/* Left Sharabha / Lion flank */}
          <path
            d="M -28 15 C -35 22 -32 35 -24 38 C -20 30 -22 22 -28 15 Z"
            fill="#8A0B0B"
          />
          {/* Right Sharabha / Lion flank */}
          <path
            d="M 28 15 C 35 22 32 35 24 38 C 20 30 22 22 28 15 Z"
            fill="#8A0B0B"
          />

          {/* Tail Plumes */}
          <path
            d="M -6 22 L 0 32 L 6 22 Z"
            fill="#8A0B0B"
          />
        </g>

        {/* Bottom Curved Banner Ribbon */}
        <path
          d="M 22 92 Q 60 106 98 92 L 95 102 Q 60 114 25 102 Z"
          fill="#8A0B0B"
          stroke="#F5B700"
          strokeWidth="1"
        />

        {/* Banner Text in Kannada: ಕರ್ನಾಟಕ ಸರ್ಕಾರ */}
        <text
          x="60"
          y="101"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="bold"
          fill="#FFF275"
          fontFamily="'Noto Sans Kannada', sans-serif"
        >
          ಕರ್ನಾಟಕ ಸರ್ಕಾರ
        </text>
      </svg>
    </div>
  );
};
