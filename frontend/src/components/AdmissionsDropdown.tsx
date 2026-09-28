import React from 'react';
import { ChevronRight, GraduationCap, FileCheck } from 'lucide-react';

interface AdmissionsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPgcet: () => void;
  onSelectExam?: (code: string) => void;
}

export const AdmissionsDropdown: React.FC<AdmissionsDropdownProps> = ({
  isOpen,
  onClose,
  onSelectPgcet,
  onSelectExam
}) => {
  if (!isOpen) return null;

  const admissionCategories = [
    {
      title: 'Post Graduate Admissions (PGCET / PGET)',
      items: [
        {
          name: 'PGCET-2026 (M.Tech/MBA/MCA/M.Arch)',
          code: 'PGCET',
          isPgcet: true,
          active: true,
          badge: 'Latest Updates',
          desc: 'Notifications, provisional seat allotment result links & cut-off ranks'
        },
        {
          name: 'PGET-2026 (PG Medical / PG Dental / DNB)',
          code: 'PGET',
          desc: 'Seat allotment, verified list & college options entry'
        },
        {
          name: 'PG-AYUSH 2026 (Ayurveda / Homeopathy / Unani)',
          code: 'PGAYUSH',
          desc: 'Post Graduate AYUSH counselling portal'
        },
      ]
    },
    {
      title: 'Under Graduate Admissions (UGCET / UGNEET)',
      items: [
        {
          name: 'UGCET-2026 (Engineering / Architecture / Farm Science / Veterinary)',
          code: 'UGCET',
          desc: 'Centralized counselling, seat matrix & document verification'
        },
        {
          name: 'UGNEET-2026 (Medical / Dental / AYUSH)',
          code: 'UGNEET',
          desc: 'MBBS & BDS State Quota seat allocation'
        },
        {
          name: 'Diploma CET-2026 (DCET - Lateral Entry)',
          code: 'DCET',
          desc: '2nd year B.E / B.Tech lateral entry seat selection'
        },
        {
          name: 'Paramedical & B.Sc Nursing 2026 (BPT / B.Sc AHS / MLT)',
          code: 'PARAMEDICAL',
          desc: 'Allied Health Sciences and Nursing degree counselling'
        }
      ]
    }
  ];

  return (
    <div 
      className="absolute top-full left-0 mt-0.5 w-[380px] sm:w-[500px] md:w-[580px] bg-white rounded-b-xl shadow-2xl border border-gray-200 border-t-2 border-t-[#650e5f] z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150"
      onMouseLeave={onClose}
    >
      {/* Header */}
      <div className="px-4 py-2.5 bg-gradient-to-r from-purple-50 to-white border-b border-purple-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#650e5f] font-bold text-xs uppercase tracking-wider">
          <GraduationCap className="w-4 h-4 text-[#650e5f]" />
          <span>KEA Admissions Portal - Academic Year 2026-27</span>
        </div>
        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
          Live Session
        </span>
      </div>

      {/* Main List */}
      <div className="max-h-[480px] overflow-y-auto p-3 space-y-4">
        {admissionCategories.map((cat, idx) => (
          <div key={idx} className="space-y-1.5">
            <h4 className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider px-2">
              {cat.title}
            </h4>

            <div className="space-y-1">
              {cat.items.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (item.isPgcet) {
                      onSelectPgcet();
                      onClose();
                    } else if (onSelectExam) {
                      onSelectExam(item.code);
                      onClose();
                    } else {
                      alert(`Opening ${item.name} Admissions Details`);
                      onClose();
                    }
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                    item.active
                      ? 'bg-purple-50 hover:bg-purple-100 border border-purple-200 text-[#650e5f]'
                      : 'hover:bg-gray-50 text-[#1F2937] border border-transparent'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${item.active ? 'text-[#650e5f]' : 'text-[#1F2937]'}`}>
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="bg-[#e53935] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase animate-pulse">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                    item.active ? 'text-[#650e5f]' : 'text-gray-400 group-hover:text-[#650e5f]'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer quick button */}
      <div className="p-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="text-gray-500 text-[11px]">
          Government of Karnataka • Centralized Counselling
        </span>
        <button
          type="button"
          onClick={() => {
            onSelectPgcet();
            onClose();
          }}
          className="text-[#650e5f] font-bold hover:underline flex items-center gap-1 cursor-pointer"
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>PGCET 2026 Results</span>
        </button>
      </div>
    </div>
  );
};
