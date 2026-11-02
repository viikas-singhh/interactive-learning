import React, { useState } from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface MistakeItem {
  id: number;
  title: string;
  description: string;
  x: number;
  y: number;
  radius: number;
  emoji: string;
}

const MISTAKES: MistakeItem[] = [
  { id: 1, title: 'Fish in the Tree!', description: 'A fish swimming in tree leaves instead of water! 🐟', x: 76, y: 22, radius: 35, emoji: '🐟' },
  { id: 2, title: 'Raining Cloud Under Sun', description: 'A tiny cloud raining right under a big smiling sun! 🌧️', x: 42, y: 22, radius: 35, emoji: '🌧️' },
  { id: 3, title: 'Puppy Snail!', description: 'A puppy dog head on a snail shell! 🐶🐌', x: 28, y: 48, radius: 40, emoji: '🐌' },
  { id: 4, title: 'Backwards Slide', description: 'The playground slide is facing backwards into the sandbox! 🛝', x: 64, y: 42, radius: 38, emoji: '🛝' },
  { id: 5, title: 'Giant Magnifying Glass', description: 'A magnifying glass as big as the picnic basket! 🔍', x: 74, y: 58, radius: 35, emoji: '🔍' },
  { id: 6, title: 'Melting Ice Cream on Lawn', description: 'Upside down melting ice cream cone beside a rain boot! 🍦', x: 75, y: 69, radius: 30, emoji: '🍦' }
];

export const P52_SpotMistakes: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const foundMistakes: number[] = data.foundMistakes || [];
  const [activeRevealed, setActiveRevealed] = useState<MistakeItem | null>(null);

  const handleSpotClick = (mistake: MistakeItem) => {
    if (isCompleted) return;
    if (!foundMistakes.includes(mistake.id)) {
      const next = [...foundMistakes, mistake.id];
      onUpdate('foundMistakes', next);
    }
    setActiveRevealed(mistake);
  };

  const handleClear = () => {
    if (isCompleted) return;
    onUpdate('foundMistakes', []);
    setActiveRevealed(null);
  };

  const audioPrompt = "Find what is wrong in this picture! Look closely at the trees, the sky, the playground, and the picnic blanket. Tap any mistake to circle it with your red crayon!";

  return (
    <WorksheetFrame pageNumber={52} categoryTag="किलबिल" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Header matching Page 52 */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
            Find what is wrong in this picture
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-500">
            Tap directly on the silly mistakes in the drawing!
          </p>
        </div>

        {/* Park Illustration Frame */}
        <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden border-4 border-slate-900 bg-gradient-to-b from-sky-200 via-emerald-100 to-amber-50 select-none shadow-md">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <rect x="0" y="0" width="800" height="300" fill="#bae6fd" />
            <path d="M 0,320 Q 200,200 450,290 T 800,260 L 800,600 L 0,600 Z" fill="#86efac" />
            <path d="M 0,360 Q 300,270 600,340 T 800,320 L 800,600 L 0,600 Z" fill="#4ade80" />

            {/* Rainbow */}
            <path d="M 120,240 A 180,180 0 0,1 420,240" fill="none" stroke="#f43f5e" strokeWidth="8" opacity="0.6" />
            <path d="M 125,240 A 175,175 0 0,1 415,240" fill="none" stroke="#f59e0b" strokeWidth="8" opacity="0.6" />
            <path d="M 130,240 A 170,170 0 0,1 410,240" fill="none" stroke="#3b82f6" strokeWidth="8" opacity="0.6" />

            {/* Sun */}
            <g transform="translate(440, 70)">
              <circle cx="30" cy="30" r="28" fill="#fbbf24" stroke="#f59e0b" strokeWidth="3" />
              <text x="20" y="38" fontSize="24">😊</text>
            </g>

            {/* Tree with Fish */}
            <g transform="translate(560, 100)">
              <rect x="70" y="140" width="60" height="260" fill="#92400e" rx="10" />
              <circle cx="100" cy="120" r="110" fill="#15803d" />
              <circle cx="40" cy="150" r="70" fill="#16a34a" />
              <circle cx="160" cy="160" r="80" fill="#16a34a" />
            </g>

            {/* Slide */}
            <g transform="translate(440, 210)">
              <rect x="0" y="80" width="160" height="60" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" rx="8" />
              <path d="M 20,120 L 70,20 L 100,20 L 40,120 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="3" />
            </g>

            {/* Picnic Blanket */}
            <g transform="translate(100, 340)">
              <polygon points="40,60 380,40 440,180 20,200" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
              <rect x="180" y="60" width="80" height="50" fill="#b45309" rx="8" stroke="#78350f" strokeWidth="3" />
              <rect x="140" y="80" width="30" height="40" fill="#ffffff" stroke="#2563eb" strokeWidth="2" />
              <text x="142" y="105" fontSize="10" fill="#2563eb" fontWeight="bold">MILK</text>
            </g>

            <text x="120" y="160" fontSize="36">🐦</text>
          </svg>

          {/* Hotspots for 6 mistakes */}
          {MISTAKES.map(m => {
            const isFound = foundMistakes.includes(m.id);
            return (
              <div
                key={m.id}
                onClick={() => handleSpotClick(m)}
                style={{
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  width: `${m.radius * 2}px`,
                  height: `${m.radius * 2}px`
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer flex items-center justify-center transition-all hover:scale-110"
              >
                {/* Red Crayon Hand-Drawn Ring When Found */}
                {isFound ? (
                  <svg className="w-full h-full pointer-events-none -rotate-6" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <div className="w-full h-full rounded-full border border-transparent hover:border-amber-400/50" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section: "Can you find the mistakes? 1 2 3 4 5 6" matching Page 52 */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
          <div className="text-center font-extrabold text-lg text-slate-800">
            Can you find the mistakes?
          </div>

          <div className="flex items-center justify-center gap-3">
            {[1, 2, 3, 4, 5, 6].map(num => {
              const isFound = foundMistakes.includes(num);
              return (
                <div
                  key={num}
                  className={`w-11 h-11 rounded-full border-2 flex items-center justify-center font-black text-base transition-all ${
                    isFound
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-110'
                      : 'bg-slate-200 text-slate-700 border-slate-400'
                  }`}
                >
                  {num}
                </div>
              );
            })}
          </div>

          {activeRevealed && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-center text-xs sm:text-sm font-bold text-amber-950 animate-fadeIn">
              {activeRevealed.emoji} <strong>Mistake #{activeRevealed.id}:</strong> {activeRevealed.description}
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-rose-600 font-bold flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Circles
          </button>

          {foundMistakes.length === 6 && (
            <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Super Detective! All 6 Mistakes Found!
            </span>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
