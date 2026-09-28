import React from 'react';
import type { Candidate, AllotmentResult } from '../data/mockCandidates';
import { DEFAULT_ALLOTMENT } from '../data/mockCandidates';
import { Printer } from 'lucide-react';

interface ResultDisplayPageProps {
  candidate: Candidate;
  onResetSearch: () => void;
  onNavigate?: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const ResultDisplayPage: React.FC<ResultDisplayPageProps> = ({
  candidate,
  onResetSearch
}) => {
  const allotment: AllotmentResult = candidate.allotment || {
    ...DEFAULT_ALLOTMENT,
    cetNo: candidate.applicationNo || DEFAULT_ALLOTMENT.cetNo,
    name: candidate.name || DEFAULT_ALLOTMENT.name,
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#EDF2F7] min-h-screen select-none pb-16">
      {/* Top Navy Blue Header Bar with Yellow Accent matching user's photo */}
      <div className="w-full bg-[#14395C] border-b-[3px] border-[#F2B632] px-4 sm:px-6 py-2.5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Left: White KEA Logo Box matching screenshot */}
          <div className="bg-white rounded px-2.5 py-1 shadow-xs flex items-center justify-center">
            <span className="text-[#650E5F] font-black text-2xl tracking-tighter flex items-center leading-none">
              <span>K</span>
              <span className="relative inline-block mx-[0.5px]">
                <span>E</span>
                <svg
                  className="absolute -top-1 -left-1 w-3.5 h-2.5 text-[#650E5F]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </span>
              <span>A</span>
            </span>
          </div>

          {/* Quick Print Button (no-print) */}
          <button
            type="button"
            onClick={handlePrint}
            className="no-print text-white/90 hover:text-white text-xs font-semibold flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#F2B632]" />
            <span>Print Allotment</span>
          </button>
        </div>
      </div>

      {/* Main Centered Allotment Card matching user's photo */}
      <div className="max-w-[620px] w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200/80 p-6 sm:p-8">
          {/* Back Button matching screenshot */}
          <div>
            <button
              type="button"
              onClick={onResetSearch}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-gray-300 bg-white text-[#14395C] font-bold text-sm hover:bg-gray-50 cursor-pointer shadow-2xs transition-colors"
            >
              <span>← Back</span>
            </button>
          </div>

          {/* Green Celebration Banner matching screenshot */}
          <div className="mt-4 mb-5 p-3.5 sm:p-4 bg-[#F0FDF4] border border-[#86EFAC] rounded-xl flex items-center gap-2">
            <span className="text-xl shrink-0">🎉</span>
            <span className="font-bold text-[#166534] text-[15px] sm:text-[16px] leading-tight">
              Congratulations — you have been allotted a seat.
            </span>
          </div>

          {/* Allotment Details Box matching screenshot */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 sm:p-6 divide-y divide-[#E2E8F0]">
            {/* 1. CET No */}
            <div className="py-3 flex items-center justify-between gap-4 first:pt-0">
              <span className="text-[#5A6E85] font-semibold text-[15px]">CET No</span>
              <span className="text-[#14395C] font-extrabold text-[15px] tracking-wide text-right">
                {allotment.cetNo}
              </span>
            </div>

            {/* 2. Name */}
            <div className="py-3 flex items-center justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px]">Name</span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right uppercase">
                {allotment.name}
              </span>
            </div>

            {/* 3. Applied Category */}
            <div className="py-3 flex items-center justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px]">Applied Category</span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right">
                {allotment.appliedCategory}
              </span>
            </div>

            {/* 4. Rank */}
            <div className="py-3 flex items-center justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px]">Rank</span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right">
                {allotment.rank}
              </span>
            </div>

            {/* 5. Discipline */}
            <div className="py-3 flex items-center justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px]">Discipline</span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right">
                {allotment.discipline}
              </span>
            </div>

            {/* 6. College Allotted */}
            <div className="py-3 flex items-start justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px] shrink-0 pt-0.5">
                College Allotted
              </span>
              <span className="text-[#14395C] font-extrabold text-[14px] sm:text-[15px] text-right leading-snug max-w-[340px]">
                {allotment.collegeAllotted}
              </span>
            </div>

            {/* 7. Course Allotted */}
            <div className="py-3 flex items-start justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px] shrink-0 pt-0.5">
                Course Allotted
              </span>
              <span className="text-[#14395C] font-extrabold text-[14px] sm:text-[15px] text-right leading-snug max-w-[340px]">
                {allotment.courseAllotted}
              </span>
            </div>

            {/* 8. Category Allotted */}
            <div className="py-3 flex items-center justify-between gap-4">
              <span className="text-[#5A6E85] font-semibold text-[15px]">Category Allotted</span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right">
                {allotment.categoryAllotted}
              </span>
            </div>

            {/* 9. Allotted Option Serial No */}
            <div className="py-3 flex items-center justify-between gap-4 last:pb-0">
              <span className="text-[#5A6E85] font-semibold text-[15px]">
                Allotted Option Serial No
              </span>
              <span className="text-[#14395C] font-extrabold text-[15px] text-right">
                {allotment.allottedOptionSerialNo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
