import React, { useState } from 'react';
import { Sparkles, Trophy, BookOpen, Home, Award, Volume2, VolumeX, User } from 'lucide-react';

interface Props {
  currentTab: 'home' | 'worksheets' | 'progress';
  onTabChange: (tab: 'home' | 'worksheets' | 'progress') => void;
  completedCount: number;
  totalWorksheets: number;
  progressPercentage: number;
  studentName: string;
  onUpdateName: (name: string) => void;
  onOpenCertificate: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentTab,
  onTabChange,
  completedCount,
  totalWorksheets,
  progressPercentage,
  studentName,
  onUpdateName,
  onOpenCertificate
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(studentName);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateName(nameInput.trim());
    }
    setIsEditingName(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-amber-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          onClick={() => onTabChange('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md transform group-hover:rotate-6 transition-transform">
            <span className="text-2xl">🌟</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                Kid<span className="text-amber-500">Quest</span>
              </span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                Interactive
              </span>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 hidden sm:block">
              Interactive Educational Workbook
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => onTabChange('home')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              currentTab === 'home'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-amber-50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('worksheets')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              currentTab === 'worksheets'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-amber-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Worksheets</span>
            <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-white/30 text-current">
              {totalWorksheets}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('progress')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all ${
              currentTab === 'progress'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'text-slate-600 hover:bg-amber-50'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="hidden md:inline">Badges & Certificate</span>
          </button>
        </nav>

        {/* Student Profile & Progress Pills */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Stars Pill */}
          <button
            type="button"
            onClick={onOpenCertificate}
            className="flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 px-3 py-1.5 rounded-full text-xs font-bold text-amber-900 shadow-2xs hover:scale-105 transition-transform"
            title="Earned Badges"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>{completedCount}</span>
            <span className="text-amber-700 font-normal">/ {totalWorksheets} ★</span>
          </button>

          {/* Student Name tag */}
          <div className="relative">
            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex items-center gap-1">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="px-2 py-1 text-xs rounded-lg border border-amber-400 focus:outline-none w-28"
                  autoFocus
                  onBlur={() => setIsEditingName(false)}
                />
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingName(true)}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-full text-xs font-bold text-slate-700 transition-colors"
                title="Click to change your explorer name"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span className="max-w-[80px] sm:max-w-[120px] truncate">{studentName}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
