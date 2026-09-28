import React from 'react';
import { KarnatakaEmblem } from './KarnatakaEmblem';

interface KeaBuildingBannerProps {
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
}

export const KeaBuildingBanner: React.FC<KeaBuildingBannerProps> = ({ onPrevSlide, onNextSlide }) => {
  return (
    <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] overflow-hidden select-none bg-gray-100">
      {/* Background Image: Photo of KEA Building */}
      <img
        src="/kea_building.jpg"
        alt="Karnataka Examinations Authority Malleswaram Headquarters"
        className="w-full h-full object-cover object-center"
      />

      {/* Semi-transparent white / frosted glass banner overlay matching Image 4 */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex flex-col justify-between py-4 px-4 sm:px-8">
        {/* Top Emblems and Titles */}
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-2">
          {/* Left: Karnataka State Emblem */}
          <div className="shrink-0 flex items-center">
            <KarnatakaEmblem size={56} />
          </div>

          {/* Center Branding Header */}
          <div className="text-center flex-1 px-2">
            <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
              <span>ಕರ್ನಾಟಕ ಸರ್ಕಾರ</span>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight">
              <span>Government of Karnataka</span>
            </div>

            {/* Circular KEA Monogram Seal */}
            <div className="my-1 sm:my-2 flex justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#650e5f] bg-white shadow-sm flex flex-col items-center justify-center p-1">
                <span className="text-[9px] text-[#650e5f] font-bold leading-none">KEA</span>
                <span className="text-[6.5px] text-gray-600 font-semibold leading-none mt-0.5">ESTD 1996</span>
              </div>
            </div>

            {/* Main Organization Titles */}
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#650e5f] tracking-tight leading-tight">
              ಕರ್ನಾಟಕ ಪರೀಕ್ಷಾ ಪ್ರಾಧಿಕಾರ
            </h1>
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-[#650e5f] tracking-wide uppercase leading-tight mt-0.5">
              KARNATAKA EXAMINATIONS AUTHORITY
            </h2>

            {/* Address */}
            <div className="mt-2 text-[10px] sm:text-xs font-bold text-gray-900 space-y-0.5">
              <div>18ನೇ ಕ್ರಾಸ್, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು - 560012</div>
              <div>18 TH CROSS, MALLESHWARAM, BENGALURU - 560012</div>
            </div>
          </div>

          {/* Right: Department of Higher Education Emblem */}
          <div className="shrink-0 flex flex-col items-center text-right">
            <div className="text-[10px] sm:text-xs font-bold text-gray-900 leading-tight hidden sm:block">
              ಉನ್ನತ ಶಿಕ್ಷಣ ಇಲಾಖೆ
            </div>
            <div className="text-[9px] sm:text-[11px] font-bold text-gray-800 leading-tight hidden sm:block">
              HIGHER EDUCATION DEPARTMENT
            </div>
            <div className="mt-1">
              <KarnatakaEmblem size={56} />
            </div>
          </div>
        </div>

        {/* Bottom subtle spacer */}
        <div></div>
      </div>

      {/* Left Navigation Chevron */}
      {onPrevSlide && (
        <button
          type="button"
          onClick={onPrevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl font-bold backdrop-blur-xs transition-colors cursor-pointer z-20"
          aria-label="Previous Slide"
        >
          ‹
        </button>
      )}

      {/* Right Navigation Chevron */}
      {onNextSlide && (
        <button
          type="button"
          onClick={onNextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center text-xl font-bold backdrop-blur-xs transition-colors cursor-pointer z-20"
          aria-label="Next Slide"
        >
          ›
        </button>
      )}
    </div>
  );
};
