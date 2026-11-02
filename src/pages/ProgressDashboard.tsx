import React from 'react';
import { WORKSHEETS_LIST } from '../data/worksheetsData';
import { Trophy, CheckCircle2, Award, Clock, ArrowRight, Printer, Star, Sparkles } from 'lucide-react';

interface Props {
  completedCount: number;
  totalWorksheets: number;
  progressPercentage: number;
  studentName: string;
  isCompleted: (id: string) => boolean;
  onOpenWorksheet: (id: string) => void;
  onOpenCertificate: () => void;
}

export const ProgressDashboard: React.FC<Props> = ({
  completedCount,
  totalWorksheets,
  progressPercentage,
  studentName,
  isCompleted,
  onOpenWorksheet,
  onOpenCertificate
}) => {
  const pendingCount = totalWorksheets - completedCount;

  // Category breakdown
  const categoryStats = [
    'Art & Creativity',
    'Values & Ethics',
    'Science & Nature',
    'Financial Literacy',
    'Observation & Logic',
    'Language & Stories'
  ].map(cat => {
    const totalInCat = WORKSHEETS_LIST.filter(w => w.category === cat).length;
    const completedInCat = WORKSHEETS_LIST.filter(w => w.category === cat && isCompleted(w.id)).length;
    return {
      category: cat,
      total: totalInCat,
      completed: completedInCat,
      percentage: totalInCat > 0 ? Math.round((completedInCat / totalInCat) * 100) : 0
    };
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-600 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              D. Progress Dashboard & Achievements
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white m-0">
            {studentName}'s Learning Journey
          </h1>

          <p className="text-sm sm:text-base text-purple-100 font-medium">
            Track your accomplishments, admire unlocked badges, and download your personalized official KidQuest Certificate of Achievement!
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenCertificate}
              className="px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm sm:text-base flex items-center gap-2 shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Award className="w-5 h-5 text-amber-900 fill-amber-900" />
              <span>Generate Official Certificate</span>
            </button>
          </div>
        </div>

        <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none text-9xl">
          🏆
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-black">
            📑
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Worksheets</div>
            <div className="text-2xl font-black text-slate-800">{totalWorksheets}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-emerald-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-black">
            ✓
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed</div>
            <div className="text-2xl font-black text-emerald-600">{completedCount}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-amber-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl font-black">
            ⏳
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending</div>
            <div className="text-2xl font-black text-amber-600">{pendingCount}</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border-2 border-purple-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl font-black">
            📈
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Success Rate</div>
            <div className="text-2xl font-black text-purple-600">{progressPercentage}%</div>
          </div>
        </div>
      </div>

      {/* Category Progress Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
          Progress by Learning Subject
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map(stat => (
            <div
              key={stat.category}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>{stat.category}</span>
                <span className="text-indigo-600">{stat.completed} / {stat.total}</span>
              </div>
              <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges & Stars Showcase */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-500" />
              <span>Achievement Badges Showcase</span>
            </h2>
            <p className="text-xs text-slate-500">Every completed worksheet awards an official badge</p>
          </div>

          <span className="text-xs font-black px-3.5 py-1 rounded-full bg-amber-100 text-amber-900">
            {completedCount} / {totalWorksheets} Badges
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {WORKSHEETS_LIST.map(w => {
            const done = isCompleted(w.id);

            return (
              <div
                key={w.id}
                onClick={() => onOpenWorksheet(w.id)}
                className={`p-3.5 rounded-2xl border-2 text-center flex flex-col items-center justify-between min-h-[140px] cursor-pointer transition-all ${
                  done
                    ? 'border-amber-300 bg-amber-50/60 shadow-xs hover:scale-105'
                    : 'border-slate-200 bg-slate-50/50 opacity-60 hover:opacity-100'
                }`}
              >
                <span className={`text-4xl my-1 ${!done ? 'grayscale opacity-50' : ''}`}>
                  {w.badge.icon}
                </span>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {w.badge.title}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Page {w.pageNumber}</div>
                </div>
                {done ? (
                  <span className="text-[10px] text-emerald-600 font-bold mt-1">Unlocked ✓</span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-medium mt-1">Locked 🔒</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Worksheet Inventory Table (Phase 2 & 10 Deliverable) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
              Worksheet Inventory & Verification Report
            </h2>
            <p className="text-xs text-slate-500">
              Complete inventory of all selected workbook pages, interaction types, and auto-evaluation classification
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
              <tr>
                <th className="p-3">Page #</th>
                <th className="p-3">Title & Category</th>
                <th className="p-3">Interactive Components</th>
                <th className="p-3">Evaluation Type</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {WORKSHEETS_LIST.map(w => {
                const done = isCompleted(w.id);
                return (
                  <tr key={w.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3 font-black text-amber-700">
                      Page {w.pageNumber}
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-slate-800">{w.title}</div>
                      {w.marathiTitle && (
                        <div className="text-xs text-amber-600">{w.marathiTitle}</div>
                      )}
                      <span className="text-[10px] text-slate-400 block mt-0.5">{w.category}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1">
                        {w.activityTypes.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3">
                      {w.hasAutoGrading ? (
                        <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                          Auto-Evaluated
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          Subjective / Reflective
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {done ? (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Done
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-slate-400">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        type="button"
                        onClick={() => onOpenWorksheet(w.id)}
                        className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline"
                      >
                        {done ? 'Review' : 'Start'} ➔
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
