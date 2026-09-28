import React, { useState, useRef, useEffect } from 'react';
import { KeaHeaderBrand } from './KeaHeaderBrand';
import { KarnatakaEmblem } from './KarnatakaEmblem';
import { AdmissionsDropdown } from './AdmissionsDropdown';
import { Menu, X, ChevronDown } from 'lucide-react';

interface TopHeaderProps {
  currentView: string;
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ currentView, onNavigate }) => {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'English' | 'ಕನ್ನಡ'>('English');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectPgcet = () => {
    setAdmissionsOpen(false);
    setMobileMenuOpen(false);
    onNavigate('notices');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAdmissionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-40 border-b border-gray-200">
      {/* Top Primary Menu Bar (Row 1) with Red Bottom Accent Line from Image 4 */}
      <div className="border-b-2 border-[#b71c1c]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center lg:justify-between h-10">
            {/* Desktop Navigation Links matching Image 4 */}
            <nav className="hidden lg:flex items-center justify-between w-full text-[13px] font-bold text-[#1F2937] tracking-normal">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className={`py-2 px-3 hover:text-[#650e5f] transition-colors uppercase cursor-pointer ${
                  currentView === 'home' ? 'text-[#650e5f] font-extrabold' : ''
                }`}
              >
                HOME
              </button>

              {/* ADMISSIONS Button with Dropdown matching user instruction */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setAdmissionsOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => setAdmissionsOpen(!admissionsOpen)}
                  className={`py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer font-bold ${
                    admissionsOpen || currentView !== 'home' ? 'text-[#650e5f]' : ''
                  }`}
                  aria-expanded={admissionsOpen}
                  aria-haspopup="true"
                >
                  <span>ADMISSIONS</span>
                  <span className="text-[10px] text-gray-700">▼</span>
                </button>
                <AdmissionsDropdown
                  isOpen={admissionsOpen}
                  onClose={() => setAdmissionsOpen(false)}
                  onSelectPgcet={handleSelectPgcet}
                  onSelectExam={(code) => {
                    if (code === 'PGCET') {
                      onNavigate('search');
                    } else {
                      onNavigate('notices');
                    }
                  }}
                />
              </div>

              {/* PREVIOUS YEAR DETAILS */}
              <button
                type="button"
                onClick={() => onNavigate('notices')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
              >
                <span>PREVIOUS YEAR DETAILS</span>
                <span className="text-[10px] text-gray-700">▼</span>
              </button>

              {/* RECRUITMENTS */}
              <button
                type="button"
                onClick={() => alert('KEA Recruitments Portal')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
              >
                <span>RECRUITMENTS</span>
                <span className="text-[10px] text-gray-700">▼</span>
              </button>

              {/* RTI */}
              <button
                type="button"
                onClick={() => alert('Right to Information (RTI) Portal')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase cursor-pointer"
              >
                RTI
              </button>

              {/* TENDERS */}
              <button
                type="button"
                onClick={() => alert('KEA e-Procurement & Tenders')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
              >
                <span>TENDERS</span>
                <span className="text-[10px] text-gray-700">▼</span>
              </button>

              {/* COLLEGE PORTAL */}
              <button
                type="button"
                onClick={() => alert('College Affiliation & Verification Portal')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
              >
                <span>COLLEGE PORTAL</span>
                <span className="text-[10px] text-gray-700">▼</span>
              </button>

              {/* FEES REFUND ▼ */}
              <button
                type="button"
                onClick={() => alert('Fees Refund & Bank Reconciliation Portal')}
                className="py-2 px-3 hover:text-[#650e5f] transition-colors uppercase inline-flex items-center gap-1 cursor-pointer"
              >
                <span>FEES REFUND</span>
                <span className="text-[10px] text-gray-700">▼</span>
              </button>
            </nav>

            {/* Mobile Header Top Trigger */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <KeaHeaderBrand onClick={() => onNavigate('home')} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#650e5f]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Header Row (Row 2) with Logo, Portals, Language, and Emblem */}
      <div className="hidden lg:block py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 text-[12px] text-[#1F2937]">
            {/* Left: KEA Logo */}
            <KeaHeaderBrand onClick={() => onNavigate('home')} />

            {/* Middle: Secondary Navigation Items */}
            <nav className="flex items-center flex-wrap gap-x-4 gap-y-1">
              <button
                type="button"
                onClick={() => alert('Exam Center Portal for Colleges')}
                className="hover:text-[#650e5f] font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>EXAM CENTER PORTAL(for colleges)</span>
                <span className="text-[9px] text-gray-600">▼</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('notices')}
                className="hover:text-[#650e5f] font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Question Papers</span>
                <span className="text-[9px] text-gray-600">▼</span>
              </button>

              <button
                type="button"
                onClick={() => alert('Admission Overseeing Committee')}
                className="hover:text-[#650e5f] font-medium transition-colors cursor-pointer"
              >
                Admission Overseeing Committee
              </button>

              <button
                type="button"
                onClick={() => alert('Fee Regulatory Committee (FRC)')}
                className="hover:text-[#650e5f] font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>FEE REGULATORY COMMITTEE (FRC)</span>
                <span className="text-[9px] text-gray-600">▼</span>
              </button>

              <button
                type="button"
                onClick={() => alert('KEA New Building Construction Updates')}
                className="hover:text-[#650e5f] font-medium transition-colors cursor-pointer"
              >
                KEA New Building Construction
              </button>

              <button
                type="button"
                onClick={() => onNavigate('search')}
                className="hover:text-[#650e5f] font-medium inline-flex items-center gap-1 transition-colors text-[#650e5f] font-semibold cursor-pointer"
              >
                <span>Centre Wise OMR View Link</span>
                <span className="text-[9px] text-gray-600">▼</span>
              </button>

              <button
                type="button"
                onClick={() => alert('KEA Helpline: 080-23460460\nEmail: keauthority-ka@nic.in\nAddress: 18th Cross, Malleswaram, Bengaluru 560012')}
                className="hover:text-[#650e5f] font-bold uppercase transition-colors cursor-pointer"
              >
                CONTACT US
              </button>
            </nav>

            {/* Right: Language Dropdown + Karnataka Emblem */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative border border-gray-400 rounded bg-white px-2 py-1 shadow-2xs">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'English' | 'ಕನ್ನಡ')}
                  className="text-xs font-semibold text-gray-800 bg-transparent pr-4 focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="English">English</option>
                  <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600 absolute right-1.5 top-2 pointer-events-none" />
              </div>

              {/* Karnataka State Government Round Emblem */}
              <KarnatakaEmblem size={38} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl p-4 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-500 uppercase">KEA Navigation Menu</span>
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'English' | 'ಕನ್ನಡ')}
                className="text-xs border rounded px-2 py-1"
              >
                <option value="English">English</option>
                <option value="ಕನ್ನಡ">ಕನ್ನಡ</option>
              </select>
              <KarnatakaEmblem size={30} />
            </div>
          </div>

          <div className="space-y-1.5 pt-3">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2 font-bold text-[#1F2937] hover:text-[#650e5f] hover:bg-gray-50 uppercase text-sm rounded"
            >
              HOME
            </button>

            {/* Mobile Admissions Section */}
            <div className="border border-purple-200 rounded-lg p-3 bg-purple-50/70 space-y-2">
              <div className="font-bold text-xs text-[#650e5f] uppercase flex items-center justify-between">
                <span>ADMISSIONS 2026-27</span>
                <span className="text-[10px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded">LIVE</span>
              </div>
              <button
                onClick={handleSelectPgcet}
                className="w-full text-left px-3 py-2 font-bold text-xs text-white bg-[#650e5f] rounded flex items-center justify-between shadow-2xs"
              >
                <span>PGCET-2026 (MBA / MCA / M.Tech) Results</span>
                <span>➔</span>
              </button>
              <button
                onClick={() => { onNavigate('notices'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-1.5 font-medium text-xs text-[#650e5f] hover:underline"
              >
                UGCET-2026 (Engineering / B.Sc Nursing)
              </button>
              <button
                onClick={() => { onNavigate('notices'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-1.5 font-medium text-xs text-[#650e5f] hover:underline"
              >
                UGNEET-2026 (Medical / Dental)
              </button>
            </div>

            {[
              'PREVIOUS YEAR DETAILS',
              'RECRUITMENTS',
              'RTI',
              'TENDERS',
              'COLLEGE PORTAL',
              'FEES REFUND',
              'EXAM CENTER PORTAL(for colleges)',
              'Question Papers',
              'Admission Overseeing Committee',
              'FEE REGULATORY COMMITTEE (FRC)',
              'KEA New Building Construction',
              'Centre Wise OMR View Link',
              'CONTACT US',
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.includes('OMR') || item.includes('Question')) {
                    onNavigate('notices');
                  } else {
                    alert(`${item} section`);
                  }
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-[#1F2937] hover:bg-gray-50 rounded"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
