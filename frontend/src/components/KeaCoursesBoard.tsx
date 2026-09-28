import React from 'react';
import { KarnatakaEmblem } from './KarnatakaEmblem';
import { KeaCircularSeal } from './KeaCircularSeal';

interface KeaCoursesBoardProps {
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
}

export const KeaCoursesBoard: React.FC<KeaCoursesBoardProps> = ({
  onNavigate,
  onPrevSlide,
  onNextSlide,
}) => {
  return (
    <div className="w-full bg-[#650e5f] text-white shadow-md relative overflow-hidden border-t border-b border-[#52094c] select-none">
      {/* Top Banner Header Block */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Karnataka State Emblem */}
        <div className="shrink-0">
          <KarnatakaEmblem size={56} />
        </div>

        {/* Center: Bilingual Heading in White Bold Caps */}
        <div className="text-center flex-1 px-2">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-[18.5px] font-bold tracking-tight text-white leading-tight">
            ಕರ್ನಾಟಕ ಪರೀಕ್ಷಾ ಪ್ರಾಧಿಕಾರದ ಮೂಲಕ ಸೀಟು ಹಂಚಿಕೆಯಾಗುವ ಕೋರ್ಸ್‌ಗಳ ವಿವರ / LIST OF COURSES FOR SEAT ALLOCATION THROUGH
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-[18px] font-bold tracking-tight text-white leading-tight mt-0.5">
            KARNATAKA EXAMINATIONS AUTHORITY
          </h2>
        </div>

        {/* Right: Circular KEA Seal */}
        <div className="shrink-0">
          <KeaCircularSeal size={62} />
        </div>
      </div>

      {/* Thin White Horizontal Divider */}
      <div className="w-full h-[1.5px] bg-white opacity-90"></div>

      {/* Main Two-Column Course Grid */}
      <div className="max-w-[1440px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          {/* Center Vertical Divider with Diamond Ornament (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-white -translate-x-1/2 opacity-90 pointer-events-none">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>

          {/* ================= LEFT COLUMN: U.G. COURSES ================= */}
          <div className="p-4 sm:p-6 lg:pr-8">
            {/* Column Heading */}
            <div className="text-center pb-3 mb-4 border-b border-white/20">
              <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-white tracking-wide">
                ಯು.ಜಿ. ಕೋರ್ಸ್‌ಗಳು / U.G. COURSES
              </h3>
            </div>

            {/* Sub-grid of UG courses: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 text-xs sm:text-[13px]">
              {/* UG Left Sub-column */}
              <div className="space-y-6">
                {/* UGCET */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಯು.ಜಿ.ಸಿ.ಇ.ಟಿ / UGCET</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಇಂಜಿನಿಯರಿಂಗ್ / ENGINEERING</li>
                    <li>• ಆರ್ಕಿಟೆಕ್ಚರ್ / ARCHITECTURE (NATA)</li>
                    <li>• ಕೃಷಿ ವಿಜ್ಞಾನ / FARM SCIENCE</li>
                    <li>• ಬಿ - ಫಾರ್ಮಾ , ಫಾರ್ಮ್ - ಡಿ / B - PHARMA , PHARM - D</li>
                    <li>• ಬಿ.ಎಸ್ಸಿ, ನರ್ಸಿಂಗ್ / B.SC NURSING</li>
                    <li>• ಯೋಗ ಮತ್ತು ಪ್ರಕೃತಿ ಚಿಕಿತ್ಸೆ / YOGA AND NATUROPATHY</li>
                  </ul>
                </div>

                {/* UGNEET */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಯು.ಜಿ.ನೀಟ್ / UGNEET</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ವೈದ್ಯಕೀಯ / MEDICAL</li>
                    <li>• ದಂತ ವೈದ್ಯಕೀಯ / DENTAL</li>
                  </ul>
                </div>

                {/* UGAYUSH */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಯು.ಜಿ.ಆಯುಷ್ / UGAYUSH</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಆಯುರ್ವೇದ / AYURVEDA</li>
                    <li>• ಯುನಾನಿ / UNANI</li>
                    <li>• ಹೋಮಿಯೋಪತಿ / HOMEOPATHY</li>
                  </ul>
                </div>
              </div>

              {/* UG Right Sub-column */}
              <div className="space-y-6">
                {/* PARAMEDICAL COURSES */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಪ್ಯಾರಾಮೆಡಿಕಲ್ ಕೋರ್ಸ್‌ಗಳು / PARAMEDICAL COURSES</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಬಿ.ಪಿ.ಟಿ. / B.P.T</li>
                    <li>• ಅಲೈಡ್ ಹೆಲ್ತ್ ಸೈನ್ಸ್ / ALLIED HEALTH SCIENCE</li>
                  </ul>
                </div>

                {/* LATERAL ENTRY COURSES */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಲ್ಯಾಟರಲ್ ಎಂಟ್ರಿ ಕೋರ್ಸ್‌ಗಳು / LATERAL ENTRY COURSES</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಪಿ.ಬಿ.ಬಿ. ಎಸ್ಸಿ / P.B.B. SC</li>
                    <li>• ಅಲೈಡ್ ಹೆಲ್ತ್ ಸೈನ್ಸ್ / ALLIED HEALTH SCIENCE</li>
                    <li>• ಬಿ - ಫಾರ್ಮಾ / B - PHARMA</li>
                  </ul>
                </div>

                {/* DCET */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಡಿ.ಸಿ.ಇ.ಟಿ / DCET</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಇಂಜಿನಿಯರಿಂಗ್ / ENGINEERING</li>
                    <li>• ಆರ್ಕಿಟೆಕ್ಚರ್ / ARCHITECTURE (NATA)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: P.G. COURSES ================= */}
          <div className="p-4 sm:p-6 lg:pl-8 border-t lg:border-t-0 border-white/20">
            {/* Column Heading */}
            <div className="text-center pb-3 mb-4 border-b border-white/20">
              <h3 className="text-base sm:text-lg md:text-[19px] font-bold text-white tracking-wide">
                ಪಿ.ಜಿ. ಕೋರ್ಸ್‌ಗಳು / P.G. COURSES
              </h3>
            </div>

            {/* Sub-grid of PG courses: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 text-xs sm:text-[13px]">
              {/* PG Left Sub-column */}
              <div className="space-y-6">
                {/* PGCET - Interactive Link to PGCET Portal */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <div className="flex items-start gap-1.5">
                      <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="4,2 20,12 4,22 8,12" />
                      </svg>
                      <span>ಪಿ.ಜಿ.ಸಿ.ಇ.ಟಿ / PGCET</span>
                    </div>
                  </div>
                  <ul className="pl-5 space-y-1.5 text-white/95 leading-relaxed font-normal">
                    <li>
                      <button
                        type="button"
                        onClick={() => onNavigate('search')}
                        className="hover:underline hover:text-yellow-300 font-semibold flex items-center gap-1 text-left cursor-pointer"
                        title="Click to check PGCET MBA Result"
                      >
                        • ಎಂ.ಬಿ.ಎ. / MBA
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => onNavigate('search')}
                        className="hover:underline hover:text-yellow-300 font-semibold flex items-center gap-1 text-left cursor-pointer"
                        title="Click to check PGCET MCA Result"
                      >
                        • ಎಂ.ಸಿ.ಎ. / MCA
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => onNavigate('search')}
                        className="hover:underline hover:text-yellow-300 font-semibold flex items-center gap-1 text-left cursor-pointer"
                        title="Click to check PGCET M.Tech Result"
                      >
                        • ಎಂ.ಇ, ಎಂ.ಟೆಕ್, ಎಂ.ಆರ್ಕ್ / M.E, M.TECH, M.ARCH
                      </button>
                    </li>
                  </ul>
                </div>

                {/* PGET */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಪಿ.ಜಿ.ಇ.ಟಿ / PGET</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ವೈದ್ಯಕೀಯ / MEDICAL</li>
                    <li>• ದಂತ ವೈದ್ಯಕೀಯ / DENTAL</li>
                    <li>• ಡಿ.ಎನ್.ಬಿ / DNB</li>
                  </ul>
                </div>

                {/* PGAYUSH */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಪಿ.ಜಿ.ಆಯುಷ್ / PGAYUSH</span>
                  </div>
                  <ul className="pl-5 space-y-1 text-white/95 leading-relaxed font-normal">
                    <li>• ಆಯುರ್ವೇದ / AYURVED</li>
                  </ul>
                </div>
              </div>

              {/* PG Right Sub-column */}
              <div className="space-y-6">
                {/* OTHER PG COURSES */}
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-white font-bold text-xs sm:text-[13.5px] leading-tight">
                    <svg className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="4,2 20,12 4,22 8,12" />
                    </svg>
                    <span>ಇತರೆ ಪಿಜಿ ಕೋರ್ಸ್‌ಗಳು / OTHER PG COURSES</span>
                  </div>
                  <ul className="pl-5 space-y-2 text-white/95 leading-relaxed font-normal">
                    <li>
                      • ಎಂ.ಫಾರ್ಮ್ ಮತ್ತು ಫಾರ್ಮ್ -ಡಿ (ಪೋಸ್ಟ್ ಬ್ಯಾಕಲೋರಿಯೇಟ್) / M.PHARM AND PHARM - D (POST BACCALAUREATE)
                    </li>
                    <li>• ಎಂ.ಎಸ್ಸಿ, ನರ್ಸಿಂಗ್ / M.SC NURSING</li>
                    <li>• ಎಂ.ಪಿ.ಟಿ. / M.P.T</li>
                    <li>
                      • ಎಂ.ಎಸ್‌.ಸಿ. ಅಲೈಡ್ ಹೆಲ್ತ್ ಸೈನ್ಸ್ / M.SC ALLIED HEALTH SCIENCE(M.SC AHS)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle bar inside board */}
        <div className="px-6 py-2 bg-black/15 border-t border-white/20 text-center text-[11px] text-white/80">
          Karnataka Examinations Authority • Malleswaram, 18th Cross, Sampige Road, Bengaluru - 560012
        </div>
      </div>

      {/* Carousel Navigation Chevrons */}
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
