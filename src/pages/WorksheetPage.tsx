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
      <div className="sticky top-2 z-40 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border-4 border-slate-900 shadow-xl flex items-center justify-between gap-2 max-w-4xl mx-auto">
        {/* Left: Previous Button */}
        <button
          type="button"
          disabled={!prevPage}
          onClick={() => prevPage && onPageChange(prevPage)}
          className={`px-3 sm:px-5 py-2.5 rounded-2xl font-black text-sm sm:text-base flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
            prevPage
              ? 'bg-sky-400 hover:bg-sky-300 text-slate-900 border-2 border-slate-900'
              : 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500 border-2 border-slate-300'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Prev Page</span>
        </button>

        {/* Center: Big Page Indicator / Drawer Trigger */}
        <button
          type="button"
          onClick={() => setShowDrawer(true)}
          className="px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-slate-900 border-2 border-slate-900 font-black text-sm sm:text-base flex items-center gap-2 shadow-sm transition-transform active:scale-95"
          title="Click to jump to any page in the 64-page book"
        >
          <span>📖</span>
          <span>Page {pageEntry.pageNumber}</span>
          <span className="text-xs text-amber-800 font-bold hidden md:inline">of 64</span>
          {pageEntry.isMainWorksheet && (
            <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full font-black hidden sm:inline">
              ⭐ Interactive
            </span>
          )}
        </button>

        {/* Right: Next Button */}
        <button
          type="button"
          disabled={!nextPage}
          onClick={() => nextPage && onPageChange(nextPage)}
          className={`px-3 sm:px-5 py-2.5 rounded-2xl font-black text-sm sm:text-base flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
            nextPage
              ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-900 border-2 border-slate-900'
              : 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500 border-2 border-slate-300'
          }`}
        >
          <span className="hidden sm:inline">Next Page</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Finish & Earn Star Button */}
        <button
          type="button"
          onClick={handleComplete}
          className={`px-4 sm:px-5 py-2.5 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2 shadow-lg transition-all active:scale-95 border-2 border-slate-900 ${
            completed
              ? 'bg-emerald-500 text-white animate-pulse'
              : 'bg-amber-400 hover:bg-amber-300 text-slate-900'
          }`}
        >
          <Star className="w-5 h-5 fill-current" />
          <span className="hidden md:inline">{completed ? 'Finished! ⭐' : 'Done! ⭐'}</span>
        </button>
      </div>

      {/* Main Authentic Worksheet Sheet (looks like the real page) */}
      <div className="w-full flex justify-center">
        {renderPageContent()}
      </div>

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
