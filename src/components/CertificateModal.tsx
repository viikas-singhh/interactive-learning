import React from 'react';
import { Award, Sparkles, Printer, X, Download } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  completedCount: number;
  totalWorksheets: number;
  progressPercentage: number;
}

export const CertificateModal: React.FC<Props> = ({
  isOpen,
  onClose,
  studentName,
  completedCount,
  totalWorksheets,
  progressPercentage
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const todayStr = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border-4 border-amber-300 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Printable Canvas */}
        <div className="p-6 sm:p-10 rounded-2xl border-8 border-double border-amber-500 bg-radial from-amber-50 via-white to-orange-50 text-center relative overflow-hidden shadow-inner">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 text-2xl text-amber-500">⚜️</div>
          <div className="absolute top-2 right-2 text-2xl text-amber-500">⚜️</div>
          <div className="absolute bottom-2 left-2 text-2xl text-amber-500">⚜️</div>
          <div className="absolute bottom-2 right-2 text-2xl text-amber-500">⚜️</div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-widest">
              ⭐ Official Award of Excellence ⭐
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              KidQuest Master Certificate
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 italic">
              This certifies that the extraordinary young scholar
            </p>

            <div className="py-2 border-b-2 border-amber-400 max-w-md mx-auto">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 tracking-wide font-serif">
                {studentName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
              has demonstrated outstanding curiosity, analytical wisdom, artistic creativity, and exemplary dedication by actively completing <strong>{completedCount} of {totalWorksheets} interactive learning worksheets</strong> across Science, Math, Ethics, Art, and Stories!
            </p>

            {/* Seal & Badges */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-around gap-4 border-t border-amber-200">
              <div className="text-left text-xs text-slate-500">
                <div className="font-bold text-slate-700">Date Awarded:</div>
                <div>{todayStr}</div>
              </div>

              {/* Golden Seal */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-lg border-4 border-amber-200 flex flex-col items-center justify-center text-white">
                <Award className="w-8 h-8 text-white fill-white" />
                <span className="text-[9px] font-black tracking-widest uppercase">Certified</span>
              </div>

              <div className="text-right text-xs text-slate-500">
                <div className="font-bold text-slate-700">Achievement Level:</div>
                <div className="text-emerald-700 font-extrabold">
                  {progressPercentage >= 100 ? '🌟 Grand Master' : progressPercentage >= 50 ? '🥈 Bright Explorer' : '🥉 Curious Learner'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <p className="text-xs text-slate-500">
            Keep completing worksheets to level up your certificate badge!
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
