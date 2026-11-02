import React from 'react';
import { WORKSHEETS_LIST } from '../data/worksheetsData';
import { Sparkles, Trophy, BookOpen, ArrowRight, CheckCircle2, Clock, Award, Star, Compass } from 'lucide-react';
import { WorksheetMetadata } from '../types';

interface Props {
  completedCount: number;
  totalWorksheets: number;
  progressPercentage: number;
  studentName: string;
  isCompleted: (id: string) => boolean;
  onOpenWorksheet: (id: string) => void;
  onViewAllWorksheets: () => void;
  onOpenCertificate: () => void;
}

export const HomeDashboard: React.FC<Props> = ({
  completedCount,
  totalWorksheets,
  progressPercentage,
  studentName,
  isCompleted,
  onOpenWorksheet,
  onViewAllWorksheets,
  onOpenCertificate
}) => {
  // Find first pending worksheet for quick continue
  const nextPending = WORKSHEETS_LIST.find(w => !isCompleted(w.id)) || WORKSHEETS_LIST[0];

  const earnedBadges = WORKSHEETS_LIST.filter(w => isCompleted(w.id));

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-100">
            <span>✨ Welcome back, {studentName}!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white m-0">
            Learn, Create & Discover Every Day!
          </h1>

          <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
            Convert your favorite workbook pages into interactive quests. Complete all 21 worksheets across science, ethics, math, art, and storytelling to earn your official certificate!
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenWorksheet(nextPending.id)}
              className="px-6 py-3 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <span>Continue Quest: Page {nextPending.pageNumber}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={onViewAllWorksheets}
              className="px-5 py-3 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold text-sm sm:text-base transition-colors"
            >
              Explore All 21 Worksheets
            </button>
          </div>
        </div>

        {/* Playful Floating Emojis */}
        <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none text-9xl">
          🌟
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border-2 border-amber-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-black shrink-0">
            📑
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Worksheets</div>
            <div className="text-2xl font-black text-slate-800">{totalWorksheets}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-emerald-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-black shrink-0">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed</div>
            <div className="text-2xl font-black text-emerald-600">{completedCount}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-indigo-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-black shrink-0">
            ⭐
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stars Earned</div>
            <div className="text-2xl font-black text-indigo-600">{completedCount}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-rose-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-black shrink-0">
            🎯
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</div>
            <div className="text-2xl font-black text-rose-600">{progressPercentage}%</div>
          </div>
        </div>
      </div>

      {/* Progress Bar & Certificate Callout */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
              Overall Journey Progress
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Complete worksheets to unlock your official Master Learner Certificate!
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenCertificate}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-sm transition-transform hover:scale-105 self-start sm:self-center"
          >
            <Award className="w-4 h-4" />
            <span>View Certificate</span>
          </button>
        </div>

        {/* Visual Progress Track */}
        <div className="space-y-1.5">
          <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-500">
            <span>{completedCount} Completed</span>
            <span>{totalWorksheets - completedCount} Remaining</span>
          </div>
        </div>
      </div>

      {/* Featured Worksheets Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
              Featured Interactive Worksheets
            </h2>
            <p className="text-xs text-slate-500">Selected learning activities ready for you</p>
          </div>

          <button
            type="button"
            onClick={onViewAllWorksheets}
            className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 hover:underline"
          >
            <span>View all ({totalWorksheets})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHEETS_LIST.slice(0, 6).map(w => {
            const done = isCompleted(w.id);

            return (
              <div
                key={w.id}
                onClick={() => onOpenWorksheet(w.id)}
                className="bg-white rounded-2xl border-2 border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                      Page {w.pageNumber}
                    </span>

                    {done ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {w.estimatedTime}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-800 text-base group-hover:text-amber-600 transition-colors">
                    {w.title}
                  </h3>
                  {w.marathiTitle && (
                    <p className="text-xs text-amber-700 font-semibold mb-2">{w.marathiTitle}</p>
                  )}

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {w.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                    {w.category}
                  </span>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {done ? 'Review' : 'Open'} ➔
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trophy Case Preview */}
      {earnedBadges.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-slate-800 text-lg">Your Badges Collection</h3>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-3 py-1 rounded-full">
              {earnedBadges.length} Badges Unlocked
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {earnedBadges.map(b => (
              <div
                key={b.id}
                className="bg-white p-3 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-2.5"
              >
                <span className="text-2xl">{b.badge.icon}</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">{b.badge.title}</div>
                  <div className="text-[10px] text-slate-400">Page {b.pageNumber}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
