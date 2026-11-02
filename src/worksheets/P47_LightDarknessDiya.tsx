import React, { useState } from 'react';
import { Sun, Moon, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface Situation {
  id: string;
  text: string;
  expected: 'light' | 'darkness';
}

const SITUATIONS: Situation[] = [
  { id: 'sit1', text: 'Helping a friend', expected: 'light' },
  { id: 'sit2', text: 'Lying to your teacher or friends', expected: 'darkness' },
  { id: 'sit3', text: 'Fighting with others', expected: 'darkness' },
  { id: 'sit4', text: 'Being mean or unkind', expected: 'darkness' },
  { id: 'sit5', text: 'Refusing to help someone in need', expected: 'darkness' },
  { id: 'sit6', text: 'Lighting diyas to bring happiness', expected: 'light' },
  { id: 'sit7', text: 'Forgiving someone', expected: 'light' },
  { id: 'sit8', text: 'Telling the truth', expected: 'light' },
  { id: 'sit9', text: 'Sharing sweets with others', expected: 'light' },
  { id: 'sit10', text: "Taking something that isn't yours", expected: 'darkness' }
];

export const P47_LightDarknessDiya: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const diyaSelections: Record<string, 'light' | 'darkness'> = data.diyaSelections || {};
  const diyaDecorations = data.diyaDecorations || {
    baseColor: '#d97706',
    flameColor: '#f59e0b',
    pattern: 'dots'
  };

  const handleSelect = (sitId: string, val: 'light' | 'darkness') => {
    if (isCompleted) return;
    onUpdate('diyaSelections', {
      ...diyaSelections,
      [sitId]: val
    });
  };

  const handleDecoChange = (key: string, val: string) => {
    if (isCompleted) return;
    onUpdate('diyaDecorations', {
      ...diyaDecorations,
      [key]: val
    });
  };

  const correctCount = SITUATIONS.filter(s => diyaSelections[s.id] === s.expected).length;
  const isAllAnswered = Object.keys(diyaSelections).length === SITUATIONS.length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 47 • बालविकास (Values & Symbolism)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Sun className="w-8 h-8 text-yellow-300" />
            "Light vs. Darkness" Sorting & Diya Design
          </h2>
          <p className="mt-1 text-amber-100 text-sm sm:text-base max-w-2xl">
            Diwali celebrates victory of Light over Darkness. For each situation below: if it is a Light word, color the Diya glowing Orange. If it is a Darkness word, color the Diya Smoky Gray!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🪔</div>
      </div>

      {/* Status Bar */}
      <div className="bg-white rounded-2xl p-4 border-2 border-amber-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {Object.keys(diyaSelections).length} of 10 Diyas Colored
          </span>
        </div>
        {isAllAnswered && (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Score: {correctCount} / 10 Diyas Perfectly Lit!
          </span>
        )}
      </div>

      {/* 10 Situations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SITUATIONS.map((sit, idx) => {
          const current = diyaSelections[sit.id];
          const isLight = current === 'light';
          const isDarkness = current === 'darkness';

          return (
            <div
              key={sit.id}
              className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 ${
                isLight
                  ? 'bg-amber-50/80 border-amber-400 shadow-xs'
                  : isDarkness
                  ? 'bg-slate-100/90 border-slate-400 shadow-xs'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Diya SVG preview */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                    {/* Flame */}
                    <path
                      d="M 50,15 C 38,35 44,52 50,55 C 56,52 62,35 50,15 Z"
                      fill={isLight ? '#f59e0b' : isDarkness ? '#94a3b8' : '#e2e8f0'}
                      className={isLight ? 'animate-pulse' : ''}
                    />
                    {/* Diya base */}
                    <path
                      d="M 20,55 Q 50,90 80,55 Q 50,65 20,55 Z"
                      fill={isLight ? '#d97706' : isDarkness ? '#475569' : '#cbd5e1'}
                    />
                  </svg>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Situation {idx + 1}</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {sit.text}
                  </p>
                </div>
              </div>

              {/* Light vs Darkness choice buttons */}
              <div className="flex flex-col sm:flex-row gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelect(sit.id, 'light')}
                  className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    isLight
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm scale-105'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-amber-50'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light (Orange)</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect(sit.id, 'darkness')}
                  className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    isDarkness
                      ? 'bg-slate-700 text-white border-slate-800 shadow-sm scale-105'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Darkness (Gray)</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Part 2: Diwali Diya Design Challenge */}
      <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-slate-800 text-base">
            Diwali Diya Design Challenge (तुमचा स्वतःचा दिवा सजवा)
          </h3>
        </div>

        <p className="text-xs text-slate-500">
          Customize your ceremonial earthen lamp with vibrant traditional colors and festive patterns!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">Clay Diya Base Color:</label>
              <div className="flex gap-2">
                {['#d97706', '#b45309', '#dc2626', '#7c3aed', '#059669'].map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleDecoChange('baseColor', c)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      diyaDecorations.baseColor === c ? 'scale-125 border-slate-900' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">Sacred Flame Glow:</label>
              <div className="flex gap-2">
                {['#f59e0b', '#ef4444', '#f97316', '#eab308'].map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleDecoChange('flameColor', c)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      diyaDecorations.flameColor === c ? 'scale-125 border-slate-900' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-600 block mb-1.5">Diya Pattern:</label>
              <div className="flex gap-2">
                {[
                  { id: 'dots', label: 'Polka Dots 🟡' },
                  { id: 'lines', label: 'Festive Waves 〰️' },
                  { id: 'stars', label: 'Stars ✨' }
                ].map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleDecoChange('pattern', p.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all ${
                      diyaDecorations.pattern === p.id
                        ? 'bg-amber-100 border-amber-400 text-amber-900 font-extrabold'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Large Canvas Preview */}
          <div className="md:col-span-2 bg-gradient-to-b from-stone-900 via-neutral-900 to-slate-950 p-6 rounded-2xl flex items-center justify-center min-h-[260px] shadow-inner">
            <svg viewBox="0 0 300 240" className="w-56 h-56 drop-shadow-[0_15px_30px_rgba(245,158,11,0.4)]">
              {/* Outer Golden Aura */}
              <circle cx="150" cy="80" r="55" fill={diyaDecorations.flameColor} opacity="0.2" className="animate-pulse" />

              {/* Flame */}
              <path
                d="M 150,20 C 120,65 135,110 150,118 C 165,110 180,65 150,20 Z"
                fill={diyaDecorations.flameColor}
                stroke="#fff"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M 150,45 C 135,75 142,98 150,105 C 158,98 165,75 150,45 Z"
                fill="#ffffff"
                opacity="0.8"
              />

              {/* Diya Base */}
              <path
                d="M 50,115 Q 150,225 250,115 Q 150,140 50,115 Z"
                fill={diyaDecorations.baseColor}
                stroke="#ffffff"
                strokeWidth="4"
              />

              {/* Patterns on Base */}
              {diyaDecorations.pattern === 'dots' && (
                <>
                  <circle cx="100" cy="145" r="5" fill="#ffffff" />
                  <circle cx="130" cy="160" r="5" fill="#ffffff" />
                  <circle cx="150" cy="165" r="6" fill="#fde047" />
                  <circle cx="170" cy="160" r="5" fill="#ffffff" />
                  <circle cx="200" cy="145" r="5" fill="#ffffff" />
                </>
              )}
              {diyaDecorations.pattern === 'lines' && (
                <path
                  d="M 70,130 Q 150,185 230,130"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeDasharray="4,4"
                />
              )}
              {diyaDecorations.pattern === 'stars' && (
                <>
                  <text x="95" y="150" fontSize="14" fill="#ffffff">★</text>
                  <text x="145" y="170" fontSize="18" fill="#fde047">★</text>
                  <text x="195" y="150" fontSize="14" fill="#ffffff">★</text>
                </>
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
