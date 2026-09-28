import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { KeaLogo } from './KeaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#14395C] text-white border-t-4 border-t-[#F2B632] mt-auto">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Authority Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <KeaLogo size={46} />
            <div>
              <h3 className="font-bold text-sm tracking-wide text-[#F2B632]">
                ಕರ್ನಾಟಕ ಪರೀಕ್ಷಾ ಪ್ರಾಧಿಕಾರ
              </h3>
              <p className="text-xs font-semibold text-gray-300">
                KARNATAKA EXAMINATIONS AUTHORITY
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            KEA is an autonomous organization established by the Government of Karnataka to conduct entrance examinations, counseling, and seat allocation for professional degree and postgraduate courses.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#F2B632] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#F2B632]" />
            <span>Official Government Portal</span>
          </div>
        </div>

        {/* Col 2: Quick Portals */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2B632] border-b border-gray-700 pb-1.5 inline-block">
            Quick Examination Portals
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>
              <a href="#notices" className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5">
                <span className="text-[#F2B632]">›</span> PGCET 2026 (MBA / MCA / M.Tech)
              </a>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> UGCET 2026 (KCET Engineering)
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> UGNEET 2026 (Medical / Dental)
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> Diploma CET 2026 (Lateral Entry)
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> K-SET 2026 State Eligibility Test
              </span>
            </li>
          </ul>
        </div>

        {/* Col 3: Useful Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2B632] border-b border-gray-700 pb-1.5 inline-block">
            Important Information
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> Fee Regulatory Committee Orders
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> Right to Information (RTI) Officers
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> KEA Citizen's Charter
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> Verification Center Locations
              </span>
            </li>
            <li>
              <span className="hover:text-[#F2B632] transition-colors flex items-center gap-1.5 cursor-pointer">
                <span className="text-[#F2B632]">›</span> Previous Year Cut-off Ranks
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Us */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2B632] border-b border-gray-700 pb-1.5 inline-block">
            KEA Contact Information
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F2B632] shrink-0 mt-0.5" />
              <span>
                18th Cross, Sampige Road, Malleswaram, Bengaluru, Karnataka - 560012
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F2B632] shrink-0" />
              <span>080 - 23460460 / 23460461</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F2B632] shrink-0" />
              <span>keauthority-ka@nic.in</span>
            </li>
            <li className="text-[11px] text-gray-400 pt-1">
              Helpdesk Timings: Mon – Sat (10:00 AM to 5:30 PM, except General Holidays)
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#0F2A45] py-4 px-4 text-xs text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            © 2026 Karnataka Examinations Authority (KEA). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-gray-300 cursor-pointer">Terms of Use</span>
            <span>•</span>
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300 cursor-pointer">Hyperlink Policy</span>
            <span>•</span>
            <span className="hover:text-gray-300 cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
