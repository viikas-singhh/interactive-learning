import React, { useState } from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const GRID_LETTERS = [
  ['T', 'W', 'O', 'Q', 'S', 'E', 'V', 'E', 'N', 'X', 'B'],
  ['F', 'K', 'N', 'I', 'N', 'E', 'L', 'P', 'M', 'T', 'Z'],
  ['S', 'I', 'X', 'D', 'T', 'W', 'E', 'L', 'V', 'E', 'O'],
  ['T', 'H', 'R', 'E', 'E', 'G', 'F', 'O', 'U', 'R', 'J'],
  ['Z', 'N', 'E', 'H', 'T', 'E', 'N', 'H', 'B', 'K', 'L'],
  ['E', 'I', 'G', 'H', 'T', 'Q', 'M', 'S', 'D', 'X', 'V'],
  ['L', 'F', 'I', 'V', 'E', 'P', 'T', 'W', 'O', 'N', 'A'],
  ['A', 'T', 'E', 'N', 'B', 'G', 'X', 'C', 'Z', 'Y', 'Q'],
  ['S', 'E', 'V', 'E', 'N', 'K', 'T', 'E', 'N', 'W', 'R'],
  ['J', 'F', 'O', 'U', 'R', 'V', 'L', 'D', 'M', 'N', 'T'],
  ['N', 'I', 'N', 'E', 'Q', 'Z', 'S', 'I', 'X', 'B', 'G'],
  ['P', 'T', 'W', 'E', 'L', 'V', 'E', 'U', 'X', 'Y', 'F']
];

const TARGET_WORDS = [
  { num: 1, word: 'ONE', label: 'one' },
  { num: 2, word: 'TWO', label: 'two' },
  { num: 3, word: 'THREE', label: 'three' },
  { num: 4, word: 'FOUR', label: 'four' },
  { num: 5, word: 'FIVE', label: 'five' },
  { num: 6, word: 'SIX', label: 'six' },
  { num: 7, word: 'SEVEN', label: 'seven' },
  { num: 8, word: 'EIGHT', label: 'eight' },
  { num: 9, word: 'NINE', label: 'nine' },
  { num: 10, word: 'TEN', label: 'ten' },
  { num: 11, word: 'ELEVEN', label: 'eleven' },
  { num: 12, word: 'TWELVE', label: 'twelve' }
];

export const P54_WordSearch12: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const foundWords: string[] = data.foundWords || [];
  const [selectedCells, setSelectedCells] = useState<{ r: number; c: number }[]>([]);

  const handleCellClick = (r: number, c: number) => {
    if (isCompleted) return;
    const existsIndex = selectedCells.findIndex(cell => cell.r === r && cell.c === c);
    let next: { r: number; c: number }[];

    if (existsIndex >= 0) {
      next = selectedCells.filter((_, i) => i !== existsIndex);
    } else {
      next = [...selectedCells, { r, c }];
    }

    setSelectedCells(next);

    const wordFormed = next.map(cell => GRID_LETTERS[cell.r][cell.c]).join('');
    const matched = TARGET_WORDS.find(tw => tw.word === wordFormed);

    if (matched && !foundWords.includes(matched.word)) {
      onUpdate('foundWords', [...foundWords, matched.word]);
      setSelectedCells([]);
    }
  };

  const handleWordBubbleClick = (word: string) => {
    if (isCompleted) return;
    if (!foundWords.includes(word)) {
      onUpdate('foundWords', [...foundWords, word]);
    }
  };

  const clearAll = () => {
    if (isCompleted) return;
    onUpdate('foundWords', []);
    setSelectedCells([]);
  };

  const currentSelectionWord = selectedCells.map(c => GRID_LETTERS[c.r][c.c]).join('');
  const audioPrompt = "Numbers 1 to 12! Find the number words hidden inside the letter grid, or tap on the bubbles below to tick them off!";

  return (
    <WorksheetFrame pageNumber={54} categoryTag="किलबिल" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Top Header matching Page 54 */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">⭐</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-wide font-serif">
              Numbers 1-12
            </h2>
            <span className="text-2xl">⭐</span>
          </div>

          <p className="text-sm sm:text-base font-extrabold text-slate-700">
            Find the numbers 1-12 in the words hidden in the puzzle.
          </p>
        </div>

        {/* Current Spell indicator */}
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-800 text-sm font-black text-slate-900 shadow-xs">
            {currentSelectionWord ? (
              <span>Spelling: <span className="text-amber-600 font-black">{currentSelectionWord}</span></span>
            ) : (
              <span className="text-slate-400">Tap letters in grid to spell word...</span>
            )}
          </span>
        </div>

        {/* 11x12 Grid */}
        <div className="max-w-md mx-auto rounded-3xl border-4 border-slate-900 bg-white p-3 sm:p-4 shadow-md">
          <div className="grid grid-cols-11 gap-1 select-none">
            {GRID_LETTERS.map((row, r) =>
              row.map((letter, c) => {
                const isSelected = selectedCells.some(cell => cell.r === r && cell.c === c);

                return (
                  <button
                    key={`${r}-${c}`}
                    type="button"
                    onClick={() => handleCellClick(r, c)}
                    className={`aspect-square rounded-lg font-black text-xs sm:text-base flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-900 border-2 border-slate-900 shadow-xs scale-105'
                        : 'bg-white hover:bg-slate-100 text-slate-900 border border-slate-300'
                    }`}
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* 12 Number Bubbles at Bottom matching Page 54 */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TARGET_WORDS.map(tw => {
              const isFound = foundWords.includes(tw.word);
              return (
                <button
                  key={tw.word}
                  type="button"
                  onClick={() => handleWordBubbleClick(tw.word)}
                  className={`p-2 rounded-xl border-2 text-left text-xs font-black flex items-center justify-between transition-all cursor-pointer ${
                    isFound
                      ? 'bg-emerald-100 border-slate-900 text-emerald-950 line-through scale-102 shadow-xs'
                      : 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-amber-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">
                      {tw.num}
                    </span>
                    <span>{tw.label}</span>
                  </div>
                  {isFound && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-rose-600 font-bold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Word Search
          </button>

          {foundWords.length === 12 && (
            <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Awesome! All 12 Numbers (1-12) Found!
            </span>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
