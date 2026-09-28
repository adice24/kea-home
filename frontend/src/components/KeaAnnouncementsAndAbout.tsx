import React from 'react';
import { Megaphone, Landmark, ChevronUp, ArrowRight } from 'lucide-react';

interface KeaAnnouncementsAndAboutProps {
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const KeaAnnouncementsAndAbout: React.FC<KeaAnnouncementsAndAboutProps> = ({ onNavigate }) => {

  const announcements = [
    {
      id: 1,
      title: '06-12 KREIS -2026 SECOND ROUND ALLOTMENT NOTIFICATION (12-06-2026)',
      isNew: true,
      action: () => onNavigate('notices')
    },
    {
      id: 2,
      title: '07-11 Village Administrative Officer Application link - 11.07.2026',
      isNew: true,
      action: () => alert('Village Administrative Officer Portal')
    },
    {
      id: 3,
      title: '07-11 Village Administrative Officer Application link - 11.07.2026',
      isNew: true,
      action: () => alert('Village Administrative Officer Portal')
    },
    {
      id: 4,
      title: '04-11 NWKSRT -2025 Objection Link for Provisional Key Answers. 11-04-2026',
      isNew: true,
      action: () => onNavigate('notices')
    },
    {
      id: 5,
      title: '17-09 M.Sc AHS & MPT EXAM TIMETABLE AND HALL TICKET DOWNLOAD - 17/09/2026',
      isNew: true,
      action: () => onNavigate('notices')
    },
    {
      id: 6,
      title: '17-09 UGNEET 2026 – MEDICAL AND DENTAL SEAT ALLOTMENT NOTE ON SEAT CANCELLATION 17/09/2026',
      isNew: true,
      action: () => onNavigate('notices')
    },
    {
      id: 7,
      title: '19-08 PGCET-2026 PROVISIONAL RESULT & MERIT RANK VERIFICATION (MBA / MCA / M.TECH)',
      isNew: true,
      action: () => onNavigate('search')
    },
    {
      id: 8,
      title: '24-08 PGCET-2026 Document Verification Rank-Wise Schedule & Candidate Instructions',
      isNew: false,
      action: () => onNavigate('notices')
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= LEFT CARD: LATEST ANNOUNCEMENTS ================= */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 pt-10 pb-6 px-6 relative mt-6 flex flex-col">
          {/* Circular Purple Megaphone Badge (Overlapping top center) */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#731c6d] border-4 border-white shadow-md flex items-center justify-center text-white">
            <Megaphone className="w-8 h-8" />
          </div>

          {/* Heading */}
          <h3 className="text-center font-bold text-xl text-[#731c6d] tracking-tight mb-4">
            Latest Announcements
          </h3>

          {/* Scrollable Notices List matching Image 2 */}
          <div className="flex-1 max-h-[300px] overflow-y-auto pr-2 space-y-3 scrollbar-thin text-xs sm:text-[13px] text-gray-800 border-t border-gray-100 pt-3">
            {announcements.map((item) => (
              <div
                key={item.id}
                onClick={item.action}
                className="flex items-start gap-2 hover:text-[#731c6d] hover:bg-purple-50/50 p-1.5 rounded transition-colors cursor-pointer group"
              >
                <span className="leading-relaxed group-hover:underline">
                  {item.title}
                </span>
                {item.isNew && (
                  <span className="shrink-0 bg-red-600 text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded uppercase animate-pulse shadow-2xs">
                    new
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Link to full notices archive */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={() => onNavigate('notices')}
              className="text-xs font-bold text-[#731c6d] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All KEA Notices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('search')}
              className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Check PGCET 2026 Scorecard
            </button>
          </div>
        </div>

        {/* ================= RIGHT CARD: ABOUT KEA ================= */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 pt-10 pb-6 px-6 relative mt-6 flex flex-col">
          {/* Circular Purple Classical Temple Badge (Overlapping top center) */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#731c6d] border-4 border-white shadow-md flex items-center justify-center text-white">
            <Landmark className="w-8 h-8" />
          </div>

          {/* Heading */}
          <h3 className="text-center font-bold text-xl text-[#731c6d] tracking-tight mb-4">
            About KEA
          </h3>

          {/* Content from Image 2 */}
          <div className="flex-1 space-y-4 text-xs sm:text-[13px] text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
            <p className="font-medium text-gray-800">
              Karnataka Examinations Authority is governed by the Governing Council headed by the Honourable Minister of Higher Education, GOK
            </p>

            <ul className="space-y-2.5 pt-2 font-medium text-[#1F2937]">
              <li>
                <button
                  type="button"
                  onClick={() => alert('Governing Council Committee Information')}
                  className="hover:text-[#731c6d] hover:underline transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#731c6d]"></span>
                  <span>Governing Council Committee</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Executive Council Committee Information')}
                  className="hover:text-[#731c6d] hover:underline transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#731c6d]"></span>
                  <span>Executive Council Committee</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Other Committees Information')}
                  className="hover:text-[#731c6d] hover:underline transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#731c6d]"></span>
                  <span>Other Committee</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => alert('Memorandum of Association & Rules')}
                  className="hover:text-[#731c6d] hover:underline transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#731c6d]"></span>
                  <span>Memorandum of Association</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 text-center">
            Malleswaram 18th Cross, Bengaluru 560012 • Helpline: 080-23460460
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Button (as shown in Image 2 next to KEA BOT) */}
      <div className="fixed bottom-6 right-36 z-40">
        <button
          onClick={scrollToTop}
          className="w-9 h-9 rounded bg-[#731c6d] text-white flex items-center justify-center shadow-lg hover:bg-[#581254] transition-colors cursor-pointer"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
