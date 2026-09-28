import React, { useState, useEffect } from 'react';
import { TopHeader } from './components/TopHeader';
import { FlashNews } from './components/FlashNews';
import { Footer } from './components/Footer';
import { KeaBot } from './components/KeaBot';
import { HomePage } from './pages/HomePage';
import { PgcetNoticesPage } from './pages/PgcetNoticesPage';
import { ResultSearchPage } from './pages/ResultSearchPage';
import { ResultDisplayPage } from './pages/ResultDisplayPage';
import type { Candidate } from './data/mockCandidates';

export type ViewType = 'home' | 'notices' | 'search' | 'result';

export const App: React.FC = () => {
  const getInitialView = (): ViewType => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'home' || hash === 'search' || hash === 'result') {
      return hash as ViewType;
    }
    return 'notices';
  };

  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Support browser back button with popstate
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: ViewType) => {
    window.history.pushState({ view }, '', `#${view}`);
    setCurrentView(view);
  };

  const handleSearchResult = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    navigateTo('result');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6FA] text-[#1F2937] antialiased">
      {/* Official KEA Top Header with Navigation & Dropdowns (Hidden on Result View) */}
      {currentView !== 'result' && (
        <TopHeader
          currentView={currentView}
          onNavigate={navigateTo}
        />
      )}

      {/* Pink Flash News Ticker Bar (Shown on Home Page) */}
      {currentView === 'home' && (
        <FlashNews
          onSelectNotice={(type) => {
            if (type === 'results') {
              navigateTo('search');
            } else {
              navigateTo('notices');
            }
          }}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentView === 'notices' && (
          <PgcetNoticesPage
            onSelectResultCta={() => navigateTo('search')}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'search' && (
          <ResultSearchPage
            onSearchResult={handleSearchResult}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'result' && (
          selectedCandidate ? (
            <ResultDisplayPage
              candidate={selectedCandidate}
              onResetSearch={() => navigateTo('search')}
              onNavigate={navigateTo}
            />
          ) : (
            <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
              <p className="text-gray-600 text-sm">
                No candidate has been selected yet. Please enter your application details to view the result.
              </p>
              <button
                type="button"
                onClick={() => navigateTo('search')}
                className="bg-[#14395C] hover:bg-[#0F2A45] text-white font-bold px-6 py-2.5 rounded-full text-sm"
              >
                Go to Result Search Form
              </button>
            </div>
          )
        )}
      </main>

      {/* Floating KEA Bot Assistant (Hidden on Result View) */}
      {currentView !== 'result' && (
        <KeaBot
          onNavigateToResults={() => navigateTo('search')}
        />
      )}

      {/* Official KEA Footer (Hidden on Result View) */}
      {currentView !== 'result' && <Footer />}
    </div>
  );
};

export default App;
