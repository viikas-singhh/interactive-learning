import React from 'react';
import { Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  pageNumber: number;
  categoryTag?: string;
  categoryMarathi?: string;
  audioPromptText?: string;
  children: React.ReactNode;
}

export const WorksheetFrame: React.FC<Props> = ({
  pageNumber,
  categoryTag = 'उमलताना',
  audioPromptText,
  children
}) => {
  const handleSpeak = () => {
    if ('speechSynthesis' in window && audioPromptText) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(audioPromptText);
      utterance.rate = 0.85; // slightly slower and clear for kids
      utterance.pitch = 1.1; // friendly tone
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="relative mx-auto max-w-4xl bg-white rounded-3xl shadow-2xl border-4 border-slate-800 p-4 sm:p-8 my-4 overflow-hidden select-none">
      {/* Decorative Floral Bead Border (SVG Garland on all 4 sides) */}
      <div className="absolute inset-2 sm:inset-3 border-2 border-slate-800 rounded-2xl pointer-events-none z-10" />

      {/* Repeating Garland Border Pattern on sides */}
      <div className="absolute top-3 bottom-3 left-1 w-4 flex flex-col justify-around items-center opacity-70 pointer-events-none select-none text-[10px]">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`l-${i}`}>🌸</span>
        ))}
      </div>
      <div className="absolute top-3 bottom-3 right-1 w-4 flex flex-col justify-around items-center opacity-70 pointer-events-none select-none text-[10px]">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`r-${i}`}>🌸</span>
        ))}
      </div>

      {/* Top Page Header (Happy Diwali 🪔 & Category Pill) */}
      <div className="relative z-20 flex items-center justify-between border-b-2 border-slate-800 pb-3 mb-5 px-3 sm:px-6">
        <div className="flex items-center gap-2 text-slate-800">
          <span className="text-xl">🪔</span>
          <span className="font-serif font-black text-lg sm:text-2xl tracking-wide">Happy Diwali</span>
          <span className="text-xl">🪔</span>
        </div>

        {/* Read to Me Button for LKG/UKG */}
        {audioPromptText && (
          <button
            type="button"
            onClick={handleSpeak}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs shadow-md transition-transform hover:scale-105 active:scale-95 border-2 border-slate-900"
            title="Listen to instructions"
          >
            <Volume2 className="w-4 h-4 text-slate-900 animate-pulse" />
            <span className="hidden sm:inline">🔊 Read to Me!</span>
          </button>
        )}

        {/* Category Badge Pill (उमलताना / बालविकास / किलबिल) */}
        <div className="px-4 py-1 rounded-full border-2 border-slate-900 bg-white font-black text-slate-900 text-sm sm:text-base shadow-xs">
          {categoryTag}
        </div>
      </div>

      {/* Inner Worksheet Page Content */}
      <div className="relative z-20 px-2 sm:px-6 py-2">
        {children}
      </div>

      {/* Bottom Page Footer matching the physical workbook */}
      <div className="relative z-20 flex items-center justify-between border-t-2 border-slate-800 pt-3 mt-6 px-3 sm:px-6 text-xs text-slate-700 font-bold">
        <div className="flex items-center gap-1.5">
          <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
            {pageNumber}
          </span>
          <span className="text-slate-500 hidden sm:inline">PDF Page {pageNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🪔</span>
          <span className="font-extrabold text-slate-900 text-sm tracking-wider">सारथी</span>
          <span className="text-slate-500 font-semibold">नोव्हेंबर २०२६</span>
          <span>🪔</span>
        </div>

        <div className="text-right text-slate-500">
          Workbook Quest
        </div>
      </div>
    </div>
  );
};
