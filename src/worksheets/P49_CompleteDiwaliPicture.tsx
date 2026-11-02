import React, { useState } from 'react';
import { Sparkles, Palette, RotateCcw, CheckCircle2, Wand2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface SymmetryItem {
  id: string;
  title: string;
  instruction: string;
  tip: string;
  color: string;
}

const ITEMS: SymmetryItem[] = [
  {
    id: 'diya',
    title: '1. My Diya',
    instruction: 'Half diya ➔ Draw the other half',
    tip: 'Look at the curved oil lamp shape and the dancing flame.',
    color: '#d97706'
  },
  {
    id: 'kandil',
    title: '2. My Akash Kandil',
    instruction: 'Half kandil ➔ Draw the other half',
    tip: 'Look at the diamond geometric center and hanging streamers.',
    color: '#9333ea'
  },
  {
    id: 'rangoli',
    title: '3. My Rangoli',
    instruction: 'Half rangoli ➔ Complete the design',
    tip: 'Look at the radial flower petals and symmetry arcs.',
    color: '#e11d48'
  }
];

export const P49_CompleteDiwaliPicture: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const [activeItem, setActiveItem] = useState<string>('diya');
  const [activeColor, setActiveColor] = useState<string>('#f59e0b');

  // Map itemId -> completed: boolean, customColors: Record<string, string>
  const completionStates: Record<string, boolean> = data.completionStates || {
    diya: false,
    kandil: false,
    rangoli: false
  };

  const handleToggleComplete = (itemId: string) => {
    if (isCompleted) return;
    onUpdate('completionStates', {
      ...completionStates,
      [itemId]: !completionStates[itemId]
    });
  };

  const completedCount = Object.values(completionStates).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 49 • बालविकास (Symmetry & Creativity)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-200" />
            Complete the Diwali Picture!
          </h2>
          <p className="mt-1 text-amber-100 text-sm sm:text-base max-w-2xl">
            Use your creativity and complete the missing half of the Diya, Akash Kandil, and Rangoli! Let's make the festival of lights even brighter.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">✨</div>
      </div>

      {/* Progress & Item Selection */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {ITEMS.map(item => {
            const isDone = completionStates[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItem(item.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeItem === item.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.title}</span>
                {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </button>
            );
          })}
        </div>

        <div className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
          {completedCount} of 3 Symmetry Artworks Completed
        </div>
      </div>

      {/* Interactive Symmetry Stage */}
      <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm space-y-6">
        {/* Active item instructions */}
        {ITEMS.filter(it => it.id === activeItem).map(it => (
          <div key={it.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <div>
              <h3 className="font-bold text-slate-800 text-base">{it.title}</h3>
              <p className="text-xs text-amber-900 font-semibold">{it.instruction}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">💡 Tip: {it.tip}</p>
            </div>
            <button
              type="button"
              onClick={() => handleToggleComplete(it.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                completionStates[it.id]
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm'
              }`}
            >
              <Wand2 className="w-4 h-4" />
              <span>{completionStates[it.id] ? 'Half Completed! (Click to redo)' : 'Complete Mirror Half'}</span>
            </button>
          </div>
        ))}

        {/* Symmetry SVG Display */}
        <div className="bg-gradient-to-b from-stone-900 via-neutral-900 to-slate-900 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[340px] shadow-inner relative">
          {/* Center symmetry divider line */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-amber-400/60 pointer-events-none" />

          {/* Diya SVG */}
          {activeItem === 'diya' && (
            <svg viewBox="0 0 400 300" className="w-full max-w-[420px] aspect-[4/3] drop-shadow-xl">
              {/* Left half (Existing model) */}
              <g>
                {/* Left Flame */}
                <path d="M 200,40 C 160,80 170,120 200,135" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <path d="M 200,65 C 180,90 185,115 200,125" fill="none" stroke="#fde047" strokeWidth="2.5" />
                {/* Left Body */}
                <path d="M 200,135 Q 110,135 70,140 Q 60,200 200,240" fill="none" stroke="#d97706" strokeWidth="4" />
                {/* Left rim decorative beads */}
                <circle cx="100" cy="155" r="4" fill="#fbbf24" />
                <circle cx="130" cy="165" r="4" fill="#fbbf24" />
                <circle cx="160" cy="175" r="4" fill="#fbbf24" />
                <circle cx="185" cy="180" r="4" fill="#fbbf24" />
              </g>

              {/* Right half (Mirrored) */}
              <g
                className="cursor-pointer transition-opacity duration-500"
                onClick={() => handleToggleComplete('diya')}
              >
                {completionStates.diya ? (
                  <>
                    <path d="M 200,40 C 240,80 230,120 200,135" fill="none" stroke="#f59e0b" strokeWidth="4" />
                    <path d="M 200,65 C 220,90 215,115 200,125" fill="none" stroke="#fde047" strokeWidth="2.5" />
                    <path d="M 200,135 Q 290,135 330,140 Q 340,200 200,240" fill="none" stroke="#d97706" strokeWidth="4" />
                    <circle cx="300" cy="155" r="4" fill="#fbbf24" />
                    <circle cx="270" cy="165" r="4" fill="#fbbf24" />
                    <circle cx="240" cy="175" r="4" fill="#fbbf24" />
                    <circle cx="215" cy="180" r="4" fill="#fbbf24" />
                  </>
                ) : (
                  <>
                    {/* Dotted guide */}
                    <path d="M 200,40 C 240,80 230,120 200,135" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />
                    <path d="M 200,135 Q 290,135 330,140 Q 340,200 200,240" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />
                    <text x="230" y="190" fill="#94a3b8" fontSize="13" fontStyle="italic">Click to Complete ➔</text>
                  </>
                )}
              </g>
            </svg>
          )}

          {/* Akash Kandil SVG */}
          {activeItem === 'kandil' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[420px] aspect-[4/3] drop-shadow-xl">
              {/* Left half */}
              <g>
                <line x1="200" y1="20" x2="200" y2="50" stroke="#f59e0b" strokeWidth="2" />
                <path d="M 200,50 L 160,70 L 200,70" fill="none" stroke="#a855f7" strokeWidth="3" />
                {/* Left diamond body */}
                <path d="M 200,70 L 130,140 L 200,210" fill="none" stroke="#a855f7" strokeWidth="4" />
                <circle cx="170" cy="140" r="6" fill="#f43f5e" />
                {/* Left streamers */}
                <line x1="140" y1="210" x2="140" y2="290" stroke="#ec4899" strokeWidth="3" strokeDasharray="3,3" />
                <line x1="160" y1="210" x2="160" y2="300" stroke="#f59e0b" strokeWidth="3" />
                <line x1="180" y1="210" x2="180" y2="285" stroke="#ec4899" strokeWidth="3" strokeDasharray="3,3" />
              </g>

              {/* Right half */}
              <g
                className="cursor-pointer transition-opacity duration-500"
                onClick={() => handleToggleComplete('kandil')}
              >
                {completionStates.kandil ? (
                  <>
                    <path d="M 200,50 L 240,70 L 200,70" fill="none" stroke="#a855f7" strokeWidth="3" />
                    <path d="M 200,70 L 270,140 L 200,210" fill="none" stroke="#a855f7" strokeWidth="4" />
                    <circle cx="230" cy="140" r="6" fill="#f43f5e" />
                    <line x1="260" y1="210" x2="260" y2="290" stroke="#ec4899" strokeWidth="3" strokeDasharray="3,3" />
                    <line x1="240" y1="210" x2="240" y2="300" stroke="#f59e0b" strokeWidth="3" />
                    <line x1="220" y1="210" x2="220" y2="285" stroke="#ec4899" strokeWidth="3" strokeDasharray="3,3" />
                  </>
                ) : (
                  <>
                    <path d="M 200,70 L 270,140 L 200,210" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />
                    <text x="220" y="145" fill="#94a3b8" fontSize="13" fontStyle="italic">Click to Complete ➔</text>
                  </>
                )}
              </g>
            </svg>
          )}

          {/* Rangoli SVG */}
          {activeItem === 'rangoli' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[420px] aspect-[4/3] drop-shadow-xl">
              {/* Left half */}
              <g>
                <path d="M 200,60 C 130,70 120,130 150,160 C 100,180 120,240 200,260" fill="none" stroke="#f43f5e" strokeWidth="4" />
                <path d="M 200,100 C 160,110 160,150 180,160" fill="none" stroke="#f59e0b" strokeWidth="3" />
                <circle cx="170" cy="120" r="4" fill="#fbbf24" />
                <circle cx="140" cy="180" r="4" fill="#fbbf24" />
              </g>

              {/* Right half */}
              <g
                className="cursor-pointer transition-opacity duration-500"
                onClick={() => handleToggleComplete('rangoli')}
              >
                {completionStates.rangoli ? (
                  <>
                    <path d="M 200,60 C 270,70 280,130 250,160 C 300,180 280,240 200,260" fill="none" stroke="#f43f5e" strokeWidth="4" />
                    <path d="M 200,100 C 240,110 240,150 220,160" fill="none" stroke="#f59e0b" strokeWidth="3" />
                    <circle cx="230" cy="120" r="4" fill="#fbbf24" />
                    <circle cx="260" cy="180" r="4" fill="#fbbf24" />
                  </>
                ) : (
                  <>
                    <path d="M 200,60 C 270,70 280,130 250,160 C 300,180 280,240 200,260" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4,4" />
                    <text x="220" y="165" fill="#94a3b8" fontSize="13" fontStyle="italic">Click to Complete ➔</text>
                  </>
                )}
              </g>
            </svg>
          )}

          <div className="text-center text-xs text-amber-200/80 mt-3">
            {completionStates[activeItem] ? '🎉 Symmetrical perfection achieved!' : 'Click the right side to reflect the completed half!'}
          </div>
        </div>

        {/* Bottom Festive Quote */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-center text-amber-900 font-bold text-xs">
          "Complete, Colour, Celebrate! May your life be filled with happiness, light and new beginnings!" 🪔
        </div>
      </div>
    </div>
  );
};
