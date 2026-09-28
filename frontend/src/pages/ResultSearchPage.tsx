import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Search, 
  AlertCircle, 
  ShieldCheck, 
  RotateCw,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import type { Candidate } from '../data/mockCandidates';
import { verifyCandidate } from '../services/api';
import { DEFAULT_ALLOTMENT } from '../data/mockCandidates';

interface ResultSearchPageProps {
  onSearchResult: (candidate: Candidate) => void;
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
}

export const ResultSearchPage: React.FC<ResultSearchPageProps> = ({
  onSearchResult,
  onNavigate
}) => {
  const [cetNo, setCetNo] = useState('B877B');
  const [dob, setDob] = useState('24/06/2005');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generate random 5-character captcha code
  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleFillDemo = () => {
    setCetNo('B877B');
    setDob('24/06/2005');
    setCaptchaInput(captchaCode);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanCet = cetNo.trim().toUpperCase();
    const cleanDob = dob.trim();
    const cleanCaptcha = captchaInput.trim().toUpperCase();

    if (!cleanCet) {
      setError('Please enter your CET Number (e.g. B877B).');
      return;
    }

    if (!cleanDob) {
      setError('Please enter your Date of Birth in DD/MM/YYYY format.');
      return;
    }

    if (!cleanCaptcha) {
      setError('Please enter the Captcha code shown in the image.');
      return;
    }

    if (cleanCaptcha !== captchaCode.toUpperCase()) {
      setError('Incorrect Captcha code. Please re-enter the code shown.');
      generateCaptcha();
      return;
    }

    setIsLoading(true);

    try {
      const candidate = await verifyCandidate(cleanCet, cleanDob);
      setIsLoading(false);
      
      // Ensure candidate has allotment details attached
      const candidateWithAllotment: Candidate = {
        ...candidate,
        allotment: candidate.allotment || {
          ...DEFAULT_ALLOTMENT,
          cetNo: cleanCet,
          name: candidate.name || 'SHILPASHREE K',
        }
      };

      onSearchResult(candidateWithAllotment);
    } catch {
      setIsLoading(false);
      // Fallback for demo so user is never blocked
      const fallbackCandidate: Candidate = {
        applicationNo: cleanCet,
        dob: cleanDob,
        name: 'SHILPASHREE K',
        fatherName: 'KEMPEGOWDA',
        gender: 'F',
        category: '2A',
        karnatakaStatus: 'KARNATAKA CANDIDATE',
        testCenter: 'BANGALORE - KEA EXAMINATION CENTRE (MALLESWARAM)',
        claimedQuota: 'GENERAL',
        courses: [
          {
            courseCode: 'MCA',
            courseName: 'Master of Computer Applications',
            iconType: 'mca',
            versionCode: 'C1',
            obtainedMarks: 55.0,
            maxMarks: 100,
            rank: '11558',
            status: 'QUALIFIED'
          }
        ],
        allotment: {
          ...DEFAULT_ALLOTMENT,
          cetNo: cleanCet
        }
      };
      onSearchResult(fallbackCandidate);
    }
  };

  return (
    <div className="min-h-[85vh] bg-[#EDF2F7] py-8 px-4 flex flex-col items-center justify-center">
      {/* Search Box Card */}
      <div className="max-w-[580px] w-full bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden">
        {/* Top Navy Banner with Gold Accent */}
        <div className="bg-[#14395C] text-white p-5 border-b-[3px] border-[#F2B632] text-center relative">
          <button
            type="button"
            onClick={() => onNavigate('notices')}
            className="absolute left-4 top-5 text-xs text-white/80 hover:text-white flex items-center gap-1 cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
          
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white mb-2">
            <GraduationCap className="w-6 h-6 text-[#F2B632]" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
            PGCET - 2026 First Round Seat Allotment
          </h1>
          <p className="text-xs text-blue-100/90 mt-1">
            Provisional & Final Allotment Result Portal • Government of Karnataka
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7 space-y-5">
          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3.5 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm animate-in fade-in duration-150">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. CET Number Input */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#14395C] uppercase tracking-wider">
                CET Number <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                value={cetNo}
                onChange={(e) => setCetNo(e.target.value.toUpperCase())}
                placeholder="Enter CET No (e.g. B877B)"
                className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-300 rounded-lg text-sm text-[#14395C] font-bold focus:outline-none focus:ring-2 focus:ring-[#14395C]/20 focus:border-[#14395C] focus:bg-white transition-all uppercase tracking-wide"
                required
              />
            </div>

            {/* 2. Date of Birth Input */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#14395C] uppercase tracking-wider">
                Date of Birth <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="DD/MM/YYYY (e.g. 24/06/2005)"
                  className="w-full pl-3.5 pr-10 py-2.5 bg-[#F8FAFC] border border-gray-300 rounded-lg text-sm text-[#1F2937] font-medium focus:outline-none focus:ring-2 focus:ring-[#14395C]/20 focus:border-[#14395C] focus:bg-white transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <Calendar className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            {/* 3. Captcha Row */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-[#14395C] uppercase tracking-wider">
                Security Captcha <span className="text-rose-600">*</span>
              </label>

              <div className="flex items-center gap-3">
                {/* Visual Captcha Box */}
                <div 
                  className="h-11 px-4 bg-gradient-to-r from-blue-100/80 via-slate-100 to-purple-100/80 border border-blue-200 rounded-lg flex items-center justify-center tracking-[0.35em] text-lg font-black text-[#14395C] select-none shadow-2xs font-mono"
                  style={{ textDecoration: 'line-through' }}
                  title="Captcha Security Code"
                >
                  {captchaCode}
                </div>

                {/* Refresh Captcha Button */}
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-gray-600 hover:text-[#14395C] transition-colors cursor-pointer"
                  title="Generate new captcha code"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                {/* Captcha Input */}
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                  placeholder="Enter Code"
                  maxLength={6}
                  className="flex-1 px-3.5 py-2.5 bg-[#F8FAFC] border border-gray-300 rounded-lg text-sm text-[#14395C] font-bold focus:outline-none focus:ring-2 focus:ring-[#14395C]/20 focus:border-[#14395C] focus:bg-white uppercase tracking-wider"
                  required
                />
              </div>
            </div>

            {/* Helper Auto-fill Pill */}
            <div className="pt-1 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={handleFillDemo}
                className="inline-flex items-center gap-1 text-[#14395C] hover:underline font-semibold cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F2B632]" />
                <span>Fill sample: B877B (SHILPASHREE K)</span>
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#14395C] hover:bg-[#0F2A45] active:bg-[#0A1D30] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isLoading ? (
                  <>
                    <RotateCw className="w-4 h-4 animate-spin text-[#F2B632]" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-[#F2B632]" />
                    <span>Submit & View Seat Allotment</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security note */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secure Official Portal • Karnataka Examinations Authority (KEA)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

