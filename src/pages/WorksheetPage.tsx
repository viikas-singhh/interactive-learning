import React, { useState } from 'react';
import { ALL_64_PAGES, PageEntry } from '../data/allPagesData';
import { 
  ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, 
  Sparkles, BookOpen, X, Volume2, Star, Grid, Filter
} from 'lucide-react';

// Import all interactive worksheets
import { P20_MyDiwali } from '../worksheets/P20_MyDiwali';
import { P21_NatureToran } from '../worksheets/P21_NatureToran';
import { P22_Rangoli } from '../worksheets/P22_Rangoli';
import { P27_EthicalDilemmas } from '../worksheets/P27_EthicalDilemmas';
import { P28_MindTraps } from '../worksheets/P28_MindTraps';
import { P29_PiggyBank } from '../worksheets/P29_PiggyBank';
import { P30_FebruaryJourney } from '../worksheets/P30_FebruaryJourney';
import { P31_TeenSkills16 } from '../worksheets/P31_TeenSkills16';
import { P36_JungleSafari } from '../worksheets/P36_JungleSafari';
import { P37_HouseScienceHunt } from '../worksheets/P37_HouseScienceHunt';
import { P38_ObserveHome } from '../worksheets/P38_ObserveHome';
import { P39_ValuesPicker } from '../worksheets/P39_ValuesPicker';
import { P40_ProblemSolution } from '../worksheets/P40_ProblemSolution';
import { P41_EnergyLeakDetector } from '../worksheets/P41_EnergyLeakDetector';
import { P42_DecisionScenarios } from '../worksheets/P42_DecisionScenarios';
import { P43_FireSafetySorting } from '../worksheets/P43_FireSafetySorting';
import { P44_WeirdButTrue } from '../worksheets/P44_WeirdButTrue';
import { P45_MindfulYoga } from '../worksheets/P45_MindfulYoga';
import { P46_DiwaliFaral } from '../worksheets/P46_DiwaliFaral';
import { P47_LightDarknessDiya } from '../worksheets/P47_LightDarknessDiya';
import { P48_CopyPicture } from '../worksheets/P48_CopyPicture';
import { P49_CompleteDiwaliPicture } from '../worksheets/P49_CompleteDiwaliPicture';
import { P50_DoubleChallenge } from '../worksheets/P50_DoubleChallenge';
import { P51_SensesMaze } from '../worksheets/P51_SensesMaze';
import { P52_SpotMistakes } from '../worksheets/P52_SpotMistakes';
import { P53_MagicStickStory } from '../worksheets/P53_MagicStickStory';
import { P54_WordSearch12 } from '../worksheets/P54_WordSearch12';
import { P55_AlphabetMatch } from '../worksheets/P55_AlphabetMatch';
import { P56_ColorDiwali } from '../worksheets/P56_ColorDiwali';
import { ArticlePageViewer } from '../components/ArticlePageViewer';

interface Props {
  currentPageNumber: number;
  onPageChange: (pageNum: number) => void;
  onBackToCatalog: () => void;
  getWorksheetData: (id: string) => Record<string, any>;
  saveWorksheetField: (id: string, field: string, val: any) => void;
  completeWorksheet: (id: string) => void;
  resetWorksheet: (id: string) => void;
  isCompleted: (id: string) => boolean;
}

export const WorksheetPage: React.FC<Props> = ({
  currentPageNumber,
  onPageChange,
  onBackToCatalog,
  getWorksheetData,
  saveWorksheetField,
  completeWorksheet,
  resetWorksheet,
  isCompleted
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [filterOnlyWorksheets, setFilterOnlyWorksheets] = useState(false);
  const [resetCounts, setResetCounts] = useState<Record<string, number>>({});
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetToastMessage, setResetToastMessage] = useState<string | null>(null);

  const pageEntry: PageEntry = ALL_64_PAGES.find(p => p.pageNumber === currentPageNumber) || ALL_64_PAGES[0]; // default Page 1

  const prevPage = currentPageNumber > 1 ? currentPageNumber - 1 : null;
  const nextPage = currentPageNumber < 64 ? currentPageNumber + 1 : null;

  const pageKey = pageEntry.worksheetId || `page-${pageEntry.pageNumber}`;
  const currentData = getWorksheetData(pageKey);
  const completed = isCompleted(pageKey);

  const handleFieldUpdate = (field: string, val: any) => {
    saveWorksheetField(pageKey, field, val);
  };

  const handleComplete = () => {
    completeWorksheet(pageKey);
  };

  const handleResetCurrentPage = () => {
    resetWorksheet(pageKey);
    setResetCounts(prev => ({
      ...prev,
      [pageKey]: (prev[pageKey] || 0) + 1
    }));
    setShowResetConfirm(false);
    setResetToastMessage(`Page ${pageEntry.pageNumber} answers reset! Ready for the next student. ✨`);
    setTimeout(() => {
      setResetToastMessage(null);
    }, 3500);
  };

  // Render the appropriate component for this page number
  const renderPageContent = () => {
    const props = {
      data: currentData,
      onUpdate: handleFieldUpdate,
      isCompleted: completed
    };

    switch (pageEntry.pageNumber) {
      case 20:
        return <P20_MyDiwali {...props} />;
      case 21:
        return <P21_NatureToran {...props} />;
      case 22:
        return <P22_Rangoli {...props} />;
      case 27:
        return <P27_EthicalDilemmas {...props} />;
      case 28:
        return <P28_MindTraps {...props} />;
      case 29:
        return <P29_PiggyBank {...props} />;
      case 30:
        return <P30_FebruaryJourney {...props} />;
      case 31:
        return <P31_TeenSkills16 {...props} />;
      case 36:
        return <P36_JungleSafari {...props} />;
      case 37:
        return <P37_HouseScienceHunt {...props} />;
      case 38:
        return <P38_ObserveHome {...props} />;
      case 39:
        return <P39_ValuesPicker {...props} />;
      case 40:
        return <P40_ProblemSolution {...props} />;
      case 41:
        return <P41_EnergyLeakDetector {...props} />;
      case 42:
        return <P42_DecisionScenarios {...props} />;
      case 43:
        return <P43_FireSafetySorting {...props} />;
      case 44:
        return <P44_WeirdButTrue {...props} />;
      case 45:
        return <P45_MindfulYoga {...props} />;
      case 46:
        return <P46_DiwaliFaral {...props} />;
      case 47:
        return <P47_LightDarknessDiya {...props} />;
      case 48:
        return <P48_CopyPicture {...props} />;
      case 49:
        return <P49_CompleteDiwaliPicture {...props} />;
      case 50:
        return <P50_DoubleChallenge {...props} />;
      case 51:
        return <P51_SensesMaze {...props} />;
      case 52:
        return <P52_SpotMistakes {...props} />;
      case 53:
        return <P53_MagicStickStory {...props} />;
      case 54:
        return <P54_WordSearch12 {...props} />;
      case 55:
        return <P55_AlphabetMatch {...props} />;
      case 56:
        return <P56_ColorDiwali {...props} />;
      default:
        // Universal Article / Story Reader with authentic WorksheetFrame
        return (
          <ArticlePageViewer
            pageEntry={pageEntry}
            data={currentData}
            onUpdate={handleFieldUpdate}
            isCompleted={completed}
            onComplete={handleComplete}
            onReset={() => setShowResetConfirm(true)}
          />
        );
    }
  };

  const displayedPagesInDrawer = filterOnlyWorksheets
    ? ALL_64_PAGES.filter(p => p.isMainWorksheet)
    : ALL_64_PAGES;

  return (
    <div className="space-y-4 pb-16">
      {/* Top Chunky Kid-Friendly Navigation Bar */}
      <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-4 border-4 border-slate-900 shadow-xl flex items-center justify-between gap-1.5 sm:gap-2 max-w-4xl mx-auto">
        {/* Left: Previous Button */}
        <button
          type="button"
          disabled={!prevPage}
          onClick={() => prevPage && onPageChange(prevPage)}
          className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-base flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
            prevPage
              ? 'bg-sky-400 hover:bg-sky-300 text-slate-900 border-2 border-slate-900'
              : 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500 border-2 border-slate-300'
          }`}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 h-5" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Center: Big Page Indicator / Drawer Trigger */}
        <button
          type="button"
          onClick={() => setShowDrawer(true)}
          className="px-3 sm:px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-slate-900 border-2 border-slate-900 font-black text-xs sm:text-base flex items-center gap-1.5 sm:gap-2 shadow-xs transition-transform active:scale-95 cursor-pointer"
          title="Click to jump to any page in the 64-page book"
        >
          <span>📖</span>
          <span>Page {pageEntry.pageNumber}</span>
          <span className="text-xs text-amber-800 font-bold hidden md:inline">/ 64</span>
        </button>

        {/* Right: Next Button */}
        <button
          type="button"
          disabled={!nextPage}
          onClick={() => nextPage && onPageChange(nextPage)}
          className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-base flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer ${
            nextPage
              ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-900 border-2 border-slate-900'
              : 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500 border-2 border-slate-300'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
        </button>

        {/* Action Group: Reset Answers & Done */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Universal Reset Answers Button */}
          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95 border-2 border-slate-900 bg-rose-100 hover:bg-rose-200 text-rose-950 cursor-pointer"
            title="Reset answers on this page for the next student"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-700" />
            <span className="hidden md:inline">Reset Answers</span>
            <span className="md:hidden">Reset</span>
          </button>

          {/* Finish & Earn Star Button */}
          <button
            type="button"
            onClick={handleComplete}
            className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-all active:scale-95 border-2 border-slate-900 cursor-pointer ${
              completed
                ? 'bg-emerald-500 text-white animate-pulse'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-900'
            }`}
          >
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            <span className="hidden sm:inline">{completed ? 'Finished! ⭐' : 'Done! ⭐'}</span>
          </button>
        </div>
      </div>

      {/* Main Authentic Worksheet Sheet (with dynamic remount key on reset) */}
      <div key={`${pageKey}-${resetCounts[pageKey] || 0}`} className="w-full flex justify-center">
        {renderPageContent()}
      </div>

      {/* Bottom Page Actions Bar */}
      <div className="max-w-4xl mx-auto mt-6 p-4 rounded-3xl border-3 border-slate-900 bg-white shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2.5 rounded-2xl border-2 border-slate-900 bg-rose-50 hover:bg-rose-100 text-rose-950 font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-2xs active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-rose-700" />
            <span>नवीन विद्यार्थ्यासाठी उत्तरे रीसेट करा (Reset Answers for Next Student)</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleComplete}
            className={`px-4 py-2.5 rounded-2xl border-2 border-slate-900 font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-2xs active:scale-95 cursor-pointer ${
              completed
                ? 'bg-emerald-500 text-white'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-900'
            }`}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>{completed ? 'पूर्ण झाले! (Finished! ⭐)' : 'पूर्ण करा (Mark Done! ⭐)'}</span>
          </button>
          {nextPage && (
            <button
              type="button"
              onClick={() => onPageChange(nextPage)}
              className="px-4 py-2.5 rounded-2xl border-2 border-slate-900 bg-sky-400 hover:bg-sky-300 text-slate-900 font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-2xs active:scale-95 cursor-pointer"
            >
              <span>पुढील पान (Next Page)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Reset Confirmation Dialog Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-4 border-slate-900 space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-3xl shadow-xs">
              🔄
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-black text-slate-900 font-serif">
                उत्तरे रीसेट करायची आहेत का?
              </h3>
              <p className="text-sm font-bold text-slate-600">
                Reset Page {pageEntry.pageNumber} Answers?
              </p>
              <p className="text-xs text-slate-500 font-medium px-2 leading-relaxed">
                या पानावरील सर्व उत्तरे, चित्रे किंवा चाचणी नवीन विद्यार्थ्यासाठी सुरुवातीपासून उपलब्ध होईल.
                <br />
                <span className="italic text-[11px] text-slate-400">
                  (All answers on this page will be cleanly cleared for the next learner.)
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2.5 rounded-2xl border-2 border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm cursor-pointer"
              >
                रद्द करा (Cancel)
              </button>
              <button
                type="button"
                onClick={handleResetCurrentPage}
                className="px-5 py-2.5 rounded-2xl border-2 border-slate-900 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>होय, रीसेट करा (Yes, Reset)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification on Reset */}
      {resetToastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl border-2 border-amber-400 shadow-2xl font-bold text-xs sm:text-sm flex items-center gap-2.5 animate-in slide-in-from-bottom-4">
          <span className="text-lg">✨</span>
          <span>{resetToastMessage}</span>
        </div>
      )}

      {/* All 64 Pages Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl border-4 border-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b-2 border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <h3 className="font-black text-slate-900 text-xl">
                  Workbook Page Index (64 Pages)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDrawer(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-800 flex items-center justify-center text-slate-800 font-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFilterOnlyWorksheets(false)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 ${
                  !filterOnlyWorksheets ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-700'
                }`}
              >
                📖 Show All 64 Pages
              </button>
              <button
                type="button"
                onClick={() => setFilterOnlyWorksheets(true)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 ${
                  filterOnlyWorksheets ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-700'
                }`}
              >
                ⭐ Main Interactive Worksheets (20+ Pages)
              </button>
            </div>

            {/* Grid of Pages */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {displayedPagesInDrawer.map((p) => {
                const isCurrent = p.pageNumber === currentPageNumber;
                return (
                  <button
                    key={p.pageNumber}
                    type="button"
                    onClick={() => {
                      onPageChange(p.pageNumber);
                      setShowDrawer(false);
                    }}
                    className={`p-2.5 rounded-2xl border-2 text-center transition-all flex flex-col justify-between min-h-[75px] ${
                      isCurrent
                        ? 'bg-amber-400 border-slate-900 font-black shadow-md scale-105'
                        : p.isMainWorksheet
                        ? 'bg-amber-50 border-amber-300 hover:border-slate-900'
                        : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-black text-slate-900">p.{p.pageNumber}</span>
                      {p.isMainWorksheet && <span className="text-xs">⭐</span>}
                    </div>
                    <div className="text-[11px] font-bold text-slate-800 line-clamp-2 text-left mt-1">
                      {p.marathiTitle ? p.marathiTitle.split(' ')[0] : p.title.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
