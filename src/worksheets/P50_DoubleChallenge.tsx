import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const MATCH_ITEMS = [
  {
    id: 'm1',
    leftItem: { name: 'Drum', emoji: '🥁' },
    options: [
      { id: 'opt_umbrella', name: 'Umbrella', emoji: '☂️' },
      { id: 'opt_sticks', name: 'Drumsticks', emoji: '🥢' },
      { id: 'opt_spoon', name: 'Spoon', emoji: '🥄' }
    ],
    correctId: 'opt_sticks'
  },
  {
    id: 'm2',
    leftItem: { name: 'Raincoat', emoji: '🧥' },
    options: [
      { id: 'opt_boots', name: 'Boots', emoji: '👢' },
      { id: 'opt_tissue', name: 'Tissue', emoji: '🧻' },
      { id: 'opt_broom', name: 'Broom', emoji: '🧹' }
    ],
    correctId: 'opt_boots'
  },
  {
    id: 'm3',
    leftItem: { name: 'Table', emoji: '🪵' },
    options: [
      { id: 'opt_brush', name: 'Toothbrush', emoji: '🪥' },
      { id: 'opt_pillow', name: 'Pillow', emoji: '🛌' },
      { id: 'opt_chair', name: 'Chair', emoji: '🪑' }
    ],
    correctId: 'opt_chair'
  },
  {
    id: 'm4',
    leftItem: { name: 'Broom', emoji: '🧹' },
    options: [
      { id: 'opt_dustpan', name: 'Dustpan', emoji: '🗑️' },
      { id: 'opt_sofa', name: 'Armchair', emoji: '🛋️' },
      { id: 'opt_flower', name: 'Flower', emoji: '🌸' }
    ],
    correctId: 'opt_dustpan'
  }
];

const MISSING_PART_ITEMS = [
  {
    id: 'mp1',
    name: 'Car',
    emoji: '🚗',
    options: [
      { id: 'leaf', name: 'Leaf', emoji: '🍁' },
      { id: 'wheel', name: 'Wheel', emoji: '⚙️' },
      { id: 'star', name: 'Star', emoji: '⭐' }
    ],
    correctId: 'wheel'
  },
  {
    id: 'mp2',
    name: 'Fish',
    emoji: '🐟',
    options: [
      { id: 'window', name: 'Window', emoji: '🪟' },
      { id: 'ear', name: 'Ear', emoji: '👂' },
      { id: 'fin', name: 'Tail Fin', emoji: '🐠' }
    ],
    correctId: 'fin'
  },
  {
    id: 'mp3',
    name: 'Flower',
    emoji: '🪴',
    options: [
      { id: 'cup', name: 'Cup', emoji: '☕' },
      { id: 'leaf', name: 'Leaf', emoji: '🍃' },
      { id: 'triangle', name: 'Triangle', emoji: '🔺' }
    ],
    correctId: 'leaf'
  },
  {
    id: 'mp4',
    name: 'House',
    emoji: '🏠',
    options: [
      { id: 'window', name: 'Window', emoji: '🪟' },
      { id: 'fish', name: 'Fish', emoji: '🐟' },
      { id: 'sun', name: 'Sun', emoji: '☀️' }
    ],
    correctId: 'window'
  },
  {
    id: 'mp5',
    name: 'Cat',
    emoji: '🐱',
    options: [
      { id: 'wheel', name: 'Wheel', emoji: '🎡' },
      { id: 'ear', name: 'Ear', emoji: '👂' },
      { id: 'bow', name: 'Bow', emoji: '🎀' }
    ],
    correctId: 'ear'
  }
];

export const P50_DoubleChallenge: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const matchSelections: Record<string, string> = data.matchSelections || {};
  const missingSelections: Record<string, string> = data.missingSelections || {};

  const handleMatchSelect = (matchId: string, optionId: string) => {
    if (isCompleted) return;
    onUpdate('matchSelections', {
      ...matchSelections,
      [matchId]: optionId
    });
  };

  const handleMissingSelect = (itemId: string, optionId: string) => {
    if (isCompleted) return;
    onUpdate('missingSelections', {
      ...missingSelections,
      [itemId]: optionId
    });
  };

  const clearAll = () => {
    if (isCompleted) return;
    onUpdate('matchSelections', {});
    onUpdate('missingSelections', {});
  };

  let matchCorrect = 0;
  MATCH_ITEMS.forEach(m => {
    if (matchSelections[m.id] === m.correctId) matchCorrect++;
  });

  let missingCorrect = 0;
  MISSING_PART_ITEMS.forEach(mp => {
    if (missingSelections[mp.id] === mp.correctId) missingCorrect++;
  });

  const audioPrompt = "Match it right and circle the missing part! Look at the picture on the left, then tap the right object to circle it with your crayon!";

  return (
    <WorksheetFrame pageNumber={50} categoryTag="किलबिल" audioPromptText={audioPrompt}>
      <div className="space-y-6 font-friendly text-slate-900">
        {/* Top Activity: Match it right! */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b-2 border-slate-900">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black">彡</span>
              <h2 className="font-black text-xl sm:text-2xl text-slate-900">
                Match it right!
              </h2>
              <span className="text-lg font-black">ミ</span>
            </div>
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              Circle the object that goes with the picture on the left
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MATCH_ITEMS.map((item, idx) => {
              const userPick = matchSelections[item.id];
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl border-2 border-slate-300 flex items-center justify-between gap-3 bg-slate-50/50"
                >
                  {/* Left picture */}
                  <div className="w-16 h-16 rounded-2xl border-2 border-slate-800 bg-white flex flex-col items-center justify-center shadow-xs shrink-0">
                    <span className="text-3xl">{item.leftItem.emoji}</span>
                  </div>

                  <span className="text-slate-400 font-black">➔</span>

                  {/* 3 options with red crayon circle when selected */}
                  <div className="flex items-center gap-2">
                    {item.options.map(opt => {
                      const isSelected = userPick === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleMatchSelect(item.id, opt.id)}
                          className="relative w-12 h-12 rounded-xl border border-slate-300 bg-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                        >
                          <span className="text-2xl">{opt.emoji}</span>

                          {/* Red Crayon Circle Overlay */}
                          {isSelected && (
                            <svg
                              className="absolute inset-0 w-full h-full pointer-events-none -rotate-6 scale-110"
                              viewBox="0 0 50 50"
                            >
                              <circle
                                cx="25"
                                cy="25"
                                r="22"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                              />
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
        </div>

        {/* Bottom Activity: Circle the Missing Part */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b-2 border-slate-900">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black">彡</span>
              <h2 className="font-black text-xl sm:text-2xl text-slate-900">
                Circle the Missing Part
              </h2>
              <span className="text-lg font-black">ミ</span>
            </div>
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">
              Circle the missing part in each row
            </span>
          </div>

          <div className="space-y-2.5">
            {MISSING_PART_ITEMS.map((item, idx) => {
              const userPick = missingSelections[item.id];
              return (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl border-2 border-slate-300 flex items-center justify-between gap-3 bg-slate-50/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-black text-slate-500 text-sm">{idx + 1}.</span>
                    <div className="w-12 h-12 rounded-xl border-2 border-slate-800 bg-white flex items-center justify-center text-2xl shadow-xs">
                      {item.emoji}
                    </div>
                  </div>

                  <span className="text-slate-400 font-black">➔</span>

                  {/* 3 options */}
                  <div className="flex items-center gap-2">
                    {item.options.map(opt => {
                      const isSelected = userPick === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleMissingSelect(item.id, opt.id)}
                          className="relative w-12 h-12 rounded-xl border border-slate-300 bg-white flex items-center justify-center transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                        >
                          <span className="text-2xl">{opt.emoji}</span>

                          {/* Red Crayon Circle Overlay */}
                          {isSelected && (
                            <svg
                              className="absolute inset-0 w-full h-full pointer-events-none -rotate-3 scale-110"
                              viewBox="0 0 50 50"
                            >
                              <circle
                                cx="25"
                                cy="25"
                                r="22"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                              />
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
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-rose-600 font-bold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Erase Circles
          </button>

          {(matchCorrect + missingCorrect) === 9 && (
            <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              All 9 Matches & Missing Parts Found!
            </span>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
