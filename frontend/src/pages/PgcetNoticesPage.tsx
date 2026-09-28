import React from 'react';

interface PgcetNoticesPageProps {
  onSelectResultCta: () => void;
  onNavigate?: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const PgcetNoticesPage: React.FC<PgcetNoticesPageProps> = ({
  onSelectResultCta,
  onNavigate
}) => {
  // Left Column Links matching Image 1 & 2 without dates
  const leftColumnLinks = [
    {
      id: 'notification',
      title: 'PGCET - 2026 NOTIFICATION',
      isResult: false,
    },
    {
      id: 'final-allotment-result-link',
      title: 'PGCET-2026 FIRST ROUND FINAL SEAT ALLOTMENT RESULT LINK',
      isResult: true, // Opens Result Search
    },
    {
      id: 'first-round-cutoff',
      title: 'PGCET-2026 – FIRST ROUND ALLOTMENT CUT-OFF RANKS',
      isResult: false,
    },
    {
      id: 'provisional-allotment-result-link',
      title: 'PGCET-2026 FIST ROUND PROVISIONAL SEAT ALLOTMENT RESULT LINK',
      isResult: true, // Opens Result Search
    },
    {
      id: 'provisional-result-note',
      title: 'PGCET - 2026 FIRST ROUND PROVISIONAL RESULT - NOTE.',
      isResult: false,
    },
    {
      id: 'mock-allotment-cutoff',
      title: 'PGCET-2026 – Mock Allotment Cut-Off Ranks',
      isResult: false,
    },
    {
      id: 'mock-allotment-result-link',
      title: 'PGCET-2026 FIRST ROUND MOCK SEAT ALLOTMENT RESULT LINK',
      isResult: true, // Opens Result Search
    },
  ];

  // Right Column Links matching Image 1 & 2 without dates
  const rightColumnLinks = [
    {
      id: 'key-answer-mba',
      title: 'PGCET - 2026 Key Answer- MBA',
      isResult: false,
    },
    {
      id: 'key-answer-mca',
      title: 'PGCET - 2026 Key Answer - MCA',
      isResult: false,
    },
    {
      id: 'key-answer-note',
      title: 'PGCET - 2026 KEY ANSWER Note',
      isResult: false,
    },
    {
      id: 'omr-view-link',
      title: 'PGCET - 2026(MBA & MCA) Exam - Centre Wise OMR View Link.',
      isResult: false,
    },
    {
      id: 'ph-list-candidates',
      title: 'PH List of the candidates appearing for MBA&MCA PGCET-2026 Examination',
      isResult: false,
    },
    {
      id: 'bell-timings',
      title: 'PGCET-2026 (MBA & MCA) Bell timings for the candidates appearing for the examination',
      isResult: false,
    },
    {
      id: 'admission-ticket',
      title: 'PGCET-2026 (MBA & MCA) Admission ticket',
      isResult: false,
    },
  ];

  const handleLinkClick = (item: { title: string; isResult: boolean }) => {
    if (item.isResult) {
      onSelectResultCta();
    } else {
      alert(`Opening circular: "${item.title}". In production, this opens the official PDF document.`);
    }
  };

  return (
    <div className="w-full bg-[#f9fafb] min-h-[85vh] pb-20">
      {/* Deep Purple Title & Breadcrumb Bar matching Image 1 */}
      <div className="bg-[#6b1257] text-white py-4 px-4 sm:px-8 shadow-xs border-t border-[#540943]">
        <div className="max-w-[1380px] mx-auto space-y-1">
          <h1 className="text-lg sm:text-xl md:text-[22px] font-bold text-white tracking-normal leading-snug">
            PGCET-2026 (M.Tech/MBA/MCA/M.Arch)
          </h1>
          <div className="flex items-center gap-1.5 text-[12.5px] sm:text-[13px] text-white font-medium select-none">
            <button
              type="button"
              onClick={() => onNavigate?.('home')}
              className="hover:underline text-white cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/80">&gt;</span>
            <span
              onClick={() => onNavigate?.('notices')}
              className="hover:underline cursor-pointer uppercase"
            >
              ADMISSIONS
            </span>
            <span className="text-white/80">&gt;</span>
            <span className="text-white font-semibold">PGCET-2026 (M.Tech/MBA/MCA/M.Arch)</span>
          </div>
        </div>
      </div>

      {/* Main Content Area matching Image 1 */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 pt-7">
        {/* Two-Column Grid with Gap matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column Box */}
          <div className="bg-white border border-gray-200/90 shadow-2xs rounded-none overflow-hidden h-fit">
            {leftColumnLinks.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/70 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => handleLinkClick(item)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 text-[13.5px] sm:text-[14px] text-gray-900 hover:text-[#6b1257] hover:underline cursor-pointer leading-normal block font-normal"
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>

          {/* Right Column Box */}
          <div className="bg-white border border-gray-200/90 shadow-2xs rounded-none overflow-hidden h-fit">
            {rightColumnLinks.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/70 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => handleLinkClick(item)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 text-[13.5px] sm:text-[14px] text-gray-900 hover:text-[#6b1257] hover:underline cursor-pointer leading-normal block font-normal"
                >
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

