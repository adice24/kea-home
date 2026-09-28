import React from 'react';

interface KeaCircularSealProps {
  size?: number;
  className?: string;
}

export const KeaCircularSeal: React.FC<KeaCircularSealProps> = ({ size = 68, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      title="Karnataka Examinations Authority Official Seal"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="w-full h-full"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        
        {/* Inner Dotted Ring */}
        <circle cx="50" cy="50" r="44" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1.5,1.5" />
        
        {/* Curved Path for Text Along Path: KARNATAKA EXAMINATIONS AUTHORITY */}
        <path
          id="keaTopPath"
          d="M 14 50 A 36 36 0 1 1 86 50"
          fill="none"
        />
        <text
          fill="#FFFFFF"
          fontSize="6.2"
          fontWeight="700"
          letterSpacing="0.4"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#keaTopPath" startOffset="50%" textAnchor="middle">
            KARNATAKA EXAMINATIONS AUTHORITY
          </textPath>
        </text>

        {/* Bottom Curved Path for Kannada or Estd */}
        <path
          id="keaBottomPath"
          d="M 86 50 A 36 36 0 0 1 14 50"
          fill="none"
        />
        <text
          fill="#FFFFFF"
          fontSize="5.2"
          fontWeight="600"
          letterSpacing="0.6"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <textPath href="#keaBottomPath" startOffset="50%" textAnchor="middle">
            GOVERNMENT OF KARNATAKA
          </textPath>
        </text>

        {/* Center Inner Circle */}
        <circle cx="50" cy="50" r="26" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />

        {/* Center KEA Monogram */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          letterSpacing="1"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          KEA
        </text>

        {/* Little ornamental stars */}
        <circle cx="15" cy="50" r="1.5" fill="#FFFFFF" />
        <circle cx="85" cy="50" r="1.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
