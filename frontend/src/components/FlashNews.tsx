import React, { useState, useEffect } from 'react';
import { getFlashNews } from '../services/api';

interface FlashNewsProps {
  onSelectNotice?: (type: 'results' | 'notices') => void;
}

const DEFAULT_NEWS = [
  { text: '•KEA Upcoming Recruitments 2026 - Notification & Online Application forms will be enabled shortly.', type: 'notices' as const },
  { text: '•PGCET-2026 Provisional Results for MBA, MCA, M.Tech/M.Arch declared - Download candidate rank cards.', type: 'results' as const },
  { text: '•Document Verification Schedule for PGCET & DCET rank holders will be published on official portal.', type: 'notices' as const },
  { text: '•DRAFT SEAT MATRIX for Post Graduate Degree Courses 2026-27 released for verification.', type: 'notices' as const },
];

export const FlashNews: React.FC<FlashNewsProps> = ({ onSelectNotice }) => {
  const [items, setItems] = useState(DEFAULT_NEWS);

  useEffect(() => {
    let isMounted = true;
    getFlashNews().then((liveItems) => {
      if (isMounted && liveItems && liveItems.length > 0) {
        const formatted = liveItems.map((text) => ({
          text: text.startsWith('•') ? text : `•${text}`,
          type: text.toLowerCase().includes('result') || text.toLowerCase().includes('scorecard') ? ('results' as const) : ('notices' as const)
        }));
        setItems(formatted);
      }
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="w-full bg-[#f3e4f6] border-y border-[#edd0f3] overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-10 flex items-center justify-between gap-4">
        {/* Left balance spacer */}
        <div className="w-1/4 hidden lg:block"></div>

        {/* Center: Flash News Title */}
        <div className="shrink-0 px-2 sm:px-6">
          <h2 className="text-[#731c6d] font-bold text-lg sm:text-[21px] tracking-tight">
            Flash News
          </h2>
        </div>

        {/* Right side marquee ticker */}
        <div className="flex-1 lg:w-1/2 overflow-hidden h-full flex items-center group">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onSelectNotice?.(item.type)}
                className="text-xs sm:text-[13px] font-semibold text-[#731c6d] hover:text-[#52094c] hover:underline transition-colors cursor-pointer text-left shrink-0"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
