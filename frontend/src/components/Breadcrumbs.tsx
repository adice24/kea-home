import React from 'react';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  view?: 'home' | 'notices' | 'search' | 'result';
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (view: 'home' | 'notices' | 'search' | 'result') => void;
  showBackButton?: boolean;
  backTarget?: 'home' | 'notices' | 'search';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  onNavigate,
  showBackButton = false,
  backTarget
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-2.5 px-4 shadow-2xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Breadcrumb Path */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-gray-600">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 text-[#14395C] hover:text-[#8B1E4B] font-semibold transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#F2B632]" />
            <span>Home</span>
          </button>

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {item.view && !item.active ? (
                <button
                  onClick={() => onNavigate(item.view!)}
                  className="text-[#14395C] hover:text-[#8B1E4B] hover:underline font-medium transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-bold max-w-[200px] sm:max-w-none truncate">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Optional Back Button */}
        {showBackButton && backTarget && (
          <button
            type="button"
            onClick={() => onNavigate(backTarget)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#14395C] hover:text-[#8B1E4B] bg-gray-50 hover:bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-3 h-3 text-[#F2B632]" />
            <span>Go Back</span>
          </button>
        )}
      </div>
    </div>
  );
};
