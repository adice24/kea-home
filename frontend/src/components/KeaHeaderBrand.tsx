import React from 'react';

interface KeaHeaderBrandProps {
  onClick?: () => void;
  className?: string;
}

export const KeaHeaderBrand: React.FC<KeaHeaderBrandProps> = ({ onClick, className = '' }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 cursor-pointer select-none group ${className}`}
      title="Karnataka Examinations Authority (KEA)"
    >
      {/* KEA Monogram with Grad Cap */}
      <div className="flex items-center">
        <span className="text-[#650e5f] font-black text-2xl tracking-tighter flex items-center">
          <span className="text-[26px]">K</span>
          <span className="relative inline-block mx-[-1px]">
            {/* Tiny mortarboard icon on the E */}
            <span className="text-[26px]">E</span>
            <svg
              className="absolute -top-1.5 -left-1 w-4 h-3 text-[#650e5f]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </span>
          <span className="text-[26px]">A</span>
        </span>
      </div>

      {/* Kannada Stacked Text */}
      <div className="flex flex-col text-[11px] font-bold text-[#1F2937] leading-[1.15] border-l-0 pl-1">
        <span>ಕರ್ನಾಟಕ ಪರೀಕ್ಷಾ</span>
        <span>ಪ್ರಾಧಿಕಾರ</span>
      </div>
    </div>
  );
};
