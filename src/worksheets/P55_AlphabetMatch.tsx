import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const ALPHABET_ITEMS = [
  { id: 1, name: 'Lion', emoji: '🦁', correct: 'L', letters: ['F', 'L', 'P', 'R', 'M'] },
  { id: 2, name: 'Umbrella', emoji: '☂️', correct: 'U', letters: ['U', 'B', 'Q', 'V', 'A'] },
  { id: 3, name: 'Apple', emoji: '🍎', correct: 'A', letters: ['E', 'Y', 'A', 'G', 'D'] },
  { id: 4, name: 'Elephant', emoji: '🐘', correct: 'E', letters: ['E', 'S', 'I', 'H', 'X'] },
  { id: 5, name: 'Kite', emoji: '🪁', correct: 'K', letters: ['K', 'T', 'R', 'N', 'J'] },
  { id: 6, name: 'Box', emoji: '📦', correct: 'B', letters: ['D', 'O', 'B', 'M', 'F'] },
  { id: 7, name: 'Bag', emoji: '🎒', correct: 'B', letters: ['G', 'P', 'B', 'W', 'Z'] },
  { id: 8, name: 'Duck', emoji: '🦆', correct: 'D', letters: ['D', 'U', 'Y', 'C', 'Q'] }
];

export const P55_AlphabetMatch: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const chosenLetters: Record<number, string> = data.chosenLetters || {};

  const handlePick = (itemId: number, letter: string) => {
    if (isCompleted) return;
    onUpdate('chosenLetters', {
      ...chosenLetters,
      [itemId]: letter
    });
  };

  const handleClear = () => {
    if (isCompleted) return;
    onUpdate('chosenLetters', {});
  };

  const correctCount = ALPHABET_ITEMS.filter(it => chosenLetters[it.id] === it.correct).length;
  const audioPrompt = "Alphabet fun! Look at each picture, and tap the letter it begins with to circle it with your red crayon!";

  return (
    <WorksheetFrame pageNumber={55} categoryTag="किलबिल" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Header Banner */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🔤</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              Alphabet – Circle the Correct Letter
            </h2>
            <span className="text-xl">🔤</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-500">
            Look at the picture. Tap the correct beginning letter to circle it!
          </p>
        </div>

        {/* 8 Items Grid matching Page 55 */}
        <div className="space-y-2">
          {ALPHABET_ITEMS.map((item) => {
            const userPick = chosenLetters[item.id];
            return (
              <div
                key={item.id}
                className="p-2.5 rounded-2xl border-2 border-slate-900 bg-white shadow-xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-black text-slate-700 text-sm w-4">{item.id}.</span>
                  <div className="w-12 h-12 rounded-xl border-2 border-slate-800 bg-amber-50 flex items-center justify-center text-2xl shadow-xs">
                    {item.emoji}
                  </div>
                  <span className="font-bold text-slate-700 text-xs sm:text-sm hidden sm:inline">{item.name}</span>
                </div>

                {/* 5 Letters with Crayon Circle */}
                <div className="flex items-center gap-1.5 sm:gap-3">
                  {item.letters.map((char, cIdx) => {
                    const isSelected = userPick === char;
                    return (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => handlePick(item.id, char)}
                        className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl border border-slate-300 bg-slate-50 flex items-center justify-center font-black text-base sm:text-xl text-slate-900 transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                      >
                        <span>{char}</span>

                        {/* Red Crayon Hand-Drawn Ring */}
                        {isSelected && (
                          <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-6 scale-110" viewBox="0 0 50 50">
                            <circle cx="25" cy="25" r="22" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-rose-600 font-bold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Erase Circles
          </button>

          {correctCount === 8 && (
            <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Perfect! All 8 Letters Identified!
            </span>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
