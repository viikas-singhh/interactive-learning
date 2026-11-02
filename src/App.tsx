import { useState } from 'react';
import { useWorksheetProgress } from './hooks/useWorksheetProgress';
import { CertificateModal } from './components/CertificateModal';
import { WorksheetsCatalog } from './pages/WorksheetsCatalog';
import { WorksheetPage } from './pages/WorksheetPage';
import { ProgressDashboard } from './pages/ProgressDashboard';
import { ALL_64_PAGES } from './data/allPagesData';

export function App() {
  const {
    studentName,
    updateStudentName,
    getWorksheetData,
    isWorksheetCompleted,
    saveWorksheetField,
    completeWorksheet,
    resetWorksheet,
    totalWorksheets,
    completedCount,
    progressPercentage
  } = useWorksheetProgress();

  // Navigation: start directly on Page 1 of the workbook
  const [currentTab, setCurrentTab] = useState<'worksheet-detail' | 'worksheets' | 'progress'>('worksheet-detail');
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const handleOpenPage = (pageNum: number) => {
    setCurrentPageNumber(pageNum);
    setCurrentTab('worksheet-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (pageNum: number) => {
    setCurrentPageNumber(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f2e9] selection:bg-amber-200 font-friendly">
      {/* Top Simple Kid-Friendly Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-slate-900 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          {/* Logo / Book Title */}
          <div
            onClick={() => setCurrentTab('worksheet-detail')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="text-3xl">🪔</span>
            <div>
              <div className="font-serif font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                सारथी <span className="font-friendly font-extrabold text-amber-600 text-base sm:text-lg">Workbook</span>
              </div>
              <div className="text-[11px] font-bold text-slate-500">
                Complete 64-Page Interactive Edition
              </div>
            </div>
          </div>

          {/* Simple Tab Switcher */}
          <nav className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setCurrentTab('worksheet-detail')}
              className={`px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all border-2 border-slate-900 ${
                currentTab === 'worksheet-detail'
                  ? 'bg-amber-400 text-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>📖</span>
              <span>Page {currentPageNumber}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('worksheets')}
              className={`px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all border-2 border-slate-900 ${
                currentTab === 'worksheets'
                  ? 'bg-sky-400 text-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>📑</span>
              <span>All 64 Pages</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab('progress')}
              className={`px-3 sm:px-4 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-1.5 transition-all border-2 border-slate-900 ${
                currentTab === 'progress'
                  ? 'bg-emerald-400 text-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>⭐</span>
              <span className="hidden sm:inline">Stars & Trophy</span>
              <span className="sm:hidden">{completedCount} ★</span>
            </button>
          </nav>

          {/* Stars Pill */}
          <button
            type="button"
            onClick={() => setIsCertificateOpen(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-100 border-2 border-slate-900 text-xs font-black text-slate-900 shadow-xs hover:scale-105 transition-transform"
            title="Your Stars & Certificate"
          >
            <span>⭐</span>
            <span>{completedCount}</span>
          </button>
        </div>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-2 sm:px-4 pt-4 sm:pt-6">
        {currentTab === 'worksheet-detail' && (
          <WorksheetPage
            currentPageNumber={currentPageNumber}
            onPageChange={handlePageChange}
            onBackToCatalog={() => setCurrentTab('worksheets')}
            getWorksheetData={getWorksheetData}
            saveWorksheetField={saveWorksheetField}
            completeWorksheet={completeWorksheet}
            resetWorksheet={resetWorksheet}
            isCompleted={isWorksheetCompleted}
          />
        )}

        {currentTab === 'worksheets' && (
          <WorksheetsCatalog
            isCompleted={isWorksheetCompleted}
            onOpenPage={handleOpenPage}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressDashboard
            completedCount={completedCount}
            totalWorksheets={totalWorksheets}
            progressPercentage={progressPercentage}
            studentName={studentName}
            isCompleted={isWorksheetCompleted}
            onOpenWorksheet={(id) => {
              const matched = ALL_64_PAGES.find(p => p.worksheetId === id);
              if (matched) handleOpenPage(matched.pageNumber);
            }}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
      </main>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentName={studentName}
        completedCount={completedCount}
        totalWorksheets={totalWorksheets}
        progressPercentage={progressPercentage}
      />

      {/* Simple Footer */}
      <footer className="bg-white border-t-4 border-slate-900 py-4 text-center text-xs font-bold text-slate-700 mt-auto">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>🪔 सारथी नोव्हेंबर २०२६ — Complete 64-Page Digital Workbook</span>
          <span>Click any question or shape to interact directly on the page!</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
