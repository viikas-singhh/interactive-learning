import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { Flame, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface FireCard {
  id: number;
  text: string;
  type: 'hazard' | 'safe';
  emoji: string;
}

const FIRE_CARDS: FireCard[] = [
  { id: 1, text: 'Playing with a lighter', type: 'hazard', emoji: '🔥' },
  { id: 2, text: 'Giving found matches to an adult', type: 'safe', emoji: '🤝' },
  { id: 3, text: 'Leaving crayons on a table away from heat', type: 'safe', emoji: '🖍️' },
  { id: 4, text: 'Putting a blanket over a heater', type: 'hazard', emoji: '⚠️' },
  { id: 5, text: 'Keeping books away from a candle', type: 'safe', emoji: '🕯️' },
  { id: 6, text: 'Leaving a candle near a stack of paper', type: 'hazard', emoji: '📄' },
  { id: 7, text: 'Telling an adult about a damaged cord', type: 'safe', emoji: '🗣️' },
  { id: 8, text: 'Using a cord with broken covering', type: 'hazard', emoji: '⚡' }
];

export const P43_FireSafetySorting: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const placements: Record<number, 'hazard' | 'safe'> = data.placements || {};

  const handleCardClick = (card: FireCard) => {
    if (isCompleted) return;
    // Toggle: if unassigned, assign to its natural or alternate slot
    const current = placements[card.id];
    let next: 'hazard' | 'safe';
    if (!current) {
      next = 'hazard'; // initial tap places in hazard or toggles
    } else if (current === 'hazard') {
      next = 'safe';
    } else {
      const copy = { ...placements };
      delete copy[card.id];
      onUpdate('placements', copy);
      return;
    }

    onUpdate('placements', {
      ...placements,
      [card.id]: next
    });
  };

  const handleAssignDirect = (cardId: number, target: 'hazard' | 'safe') => {
    if (isCompleted) return;
    onUpdate('placements', {
      ...placements,
      [cardId]: target
    });
  };

  const clearAll = () => {
    if (isCompleted) return;
    onUpdate('placements', {});
  };

  const hazardCards = FIRE_CARDS.filter(c => placements[c.id] === 'hazard');
  const safeCards = FIRE_CARDS.filter(c => placements[c.id] === 'safe');
  const unassignedCount = FIRE_CARDS.length - Object.keys(placements).length;
  const correctCount = FIRE_CARDS.filter(c => placements[c.id] === c.type).length;

  const audioPrompt = "Sort the Fire Safety Cards! Read each of the 8 cards. Tap on Hazard if it causes a fire, or Safe Choice if it keeps us safe!";

  return (
    <WorksheetFrame pageNumber={43} categoryTag="बालविकास" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Header Banner */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🧯</span>
            <div className="px-6 py-1.5 rounded-full border-2 border-slate-900 bg-slate-100 font-extrabold text-xl sm:text-3xl tracking-wide shadow-xs">
              Sort the Fire Safety Cards
            </div>
            <span className="text-xl">🧯</span>
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-slate-700">
            Read or listen to each card. Write or stamp each card number in the correct box.
          </p>
        </div>

        {/* 8 Numbered Illustrated Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {FIRE_CARDS.map(card => {
            const placedIn = placements[card.id];
            return (
              <div
                key={card.id}
                className={`rounded-2xl border-2 p-3 flex flex-col justify-between transition-all bg-white shadow-xs ${
                  placedIn === 'hazard'
                    ? 'border-red-500 bg-red-50/50 ring-2 ring-red-300'
                    : placedIn === 'safe'
                    ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-300'
                    : 'border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">
                      {card.id}.
                    </span>
                    <span className="text-xl">{card.emoji}</span>
                  </div>
                  <p className="font-extrabold text-xs sm:text-sm text-slate-800 leading-tight">
                    {card.text}
                  </p>
                </div>

                {/* Direct Chunky Sorter Buttons */}
                <div className="grid grid-cols-2 gap-1 pt-2 mt-2 border-t border-slate-100 text-[10px]">
                  <button
                    type="button"
                    onClick={() => handleAssignDirect(card.id, 'hazard')}
                    className={`py-1 px-1 rounded-lg font-black border transition-all cursor-pointer ${
                      placedIn === 'hazard'
                        ? 'bg-red-500 text-white border-red-600 shadow-xs'
                        : 'bg-red-50 hover:bg-red-100 text-red-800 border-red-200'
                    }`}
                  >
                    🔥 Hazard
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAssignDirect(card.id, 'safe')}
                    className={`py-1 px-1 rounded-lg font-black border transition-all cursor-pointer ${
                      placedIn === 'safe'
                        ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    🛡️ Safe
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Target Boxes matching Page 43 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Fire Hazard Box */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-center gap-1.5 pb-2 border-b-2 border-slate-900 text-red-600">
              <Flame className="w-5 h-5 fill-red-500" />
              <h3 className="font-black text-lg text-slate-900 uppercase tracking-wide">
                Fire Hazard
              </h3>
            </div>

            <div className="space-y-2">
              {[1, 2, 3, 4].map(slotNum => {
                const card = hazardCards[slotNum - 1];
                return (
                  <div key={slotNum} className="flex items-center gap-2 border-b-2 border-slate-300 pb-1">
                    <span className="font-black text-slate-900 text-sm">{slotNum}.</span>
                    {card ? (
                      <span className="text-xs sm:text-sm font-black text-red-700 flex items-center gap-1">
                        <span>Card {card.id}: {card.text}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-300 italic">Empty line...</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Safe Choice Box */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-center gap-1.5 pb-2 border-b-2 border-slate-900 text-emerald-600">
              <ShieldCheck className="w-5 h-5 fill-emerald-500" />
              <h3 className="font-black text-lg text-slate-900 uppercase tracking-wide">
                Safe Choice
              </h3>
            </div>

            <div className="space-y-2">
              {[1, 2, 3, 4].map(slotNum => {
                const card = safeCards[slotNum - 1];
                return (
                  <div key={slotNum} className="flex items-center gap-2 border-b-2 border-slate-300 pb-1">
                    <span className="font-black text-slate-900 text-sm">{slotNum}.</span>
                    {card ? (
                      <span className="text-xs sm:text-sm font-black text-emerald-700 flex items-center gap-1">
                        <span>Card {card.id}: {card.text}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-300 italic">Empty line...</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Status & Reset */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-rose-600 font-bold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Cards
          </button>

          {unassignedCount === 0 && (
            <span className="text-xs sm:text-sm font-black text-emerald-700 flex items-center gap-1 bg-emerald-100 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Score: {correctCount} / 8 Safe Choices & Hazards Identified!
            </span>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
