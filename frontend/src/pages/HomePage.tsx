import React, { useState, useEffect } from 'react';
import { KeaBuildingBanner } from '../components/KeaBuildingBanner';
import { KeaCoursesBoard } from '../components/KeaCoursesBoard';
import { KeaAnnouncementsAndAbout } from '../components/KeaAnnouncementsAndAbout';

interface HomePageProps {
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Current active slide in hero banner: 0 = Building Banner (Image 4), 1 = Purple Courses Board (Image 3)
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : 0));
  };

  // Optional subtle auto-rotation between official slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#f4f6fa] pb-12">
      {/* ================= HERO CAROUSEL SECTION ================= */}
      {/* Displays Slide 1 (Image 4 Building Banner) and Slide 2 (Image 3 Purple Course Board) */}
      <div className="relative w-full shadow-md">
        {activeSlide === 0 ? (
          <KeaBuildingBanner
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
          />
        ) : (
          <KeaCoursesBoard
            onNavigate={onNavigate}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
          />
        )}

        {/* Slide Selector Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => setActiveSlide(0)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === 0 ? 'w-8 bg-[#650e5f]' : 'w-2.5 bg-black/30 hover:bg-black/50'
            }`}
            aria-label="Slide 1: KEA Headquarters Building"
            title="KEA Headquarters Building"
          />
          <button
            type="button"
            onClick={() => setActiveSlide(1)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === 1 ? 'w-8 bg-[#650e5f]' : 'w-2.5 bg-black/30 hover:bg-black/50'
            }`}
            aria-label="Slide 2: List of Courses for Seat Allocation"
            title="List of Courses for Seat Allocation"
          />
        </div>
      </div>

      {/* Quick Slide Switcher Pill for User Convenience */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-3 flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-500 uppercase tracking-wider text-[11px]">
            Official Views:
          </span>
          <button
            onClick={() => setActiveSlide(0)}
            className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
              activeSlide === 0
                ? 'bg-[#650e5f] text-white shadow-2xs'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            🏛️ KEA Building Banner (Image 4)
          </button>
          <button
            onClick={() => setActiveSlide(1)}
            className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
              activeSlide === 1
                ? 'bg-[#650e5f] text-white shadow-2xs'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            📋 Course Allocation Directory (Image 3)
          </button>
        </div>

        <button
          onClick={() => onNavigate('search')}
          className="text-[#650e5f] font-bold hover:underline hidden md:inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Check PGCET 2026 Scorecard</span>
          <span>➔</span>
        </button>
      </div>

      {/* When activeSlide is 0 (Building Banner), we can also show the Courses Board directly below so the user sees everything at a glance */}
      {activeSlide === 0 && (
        <div className="mt-4">
          <KeaCoursesBoard
            onNavigate={onNavigate}
            onPrevSlide={handlePrevSlide}
            onNextSlide={handleNextSlide}
          />
        </div>
      )}

      {/* ================= LOWER SECTION: LATEST ANNOUNCEMENTS & ABOUT KEA (Image 2) ================= */}
      <KeaAnnouncementsAndAbout onNavigate={onNavigate} />
    </div>
  );
};
