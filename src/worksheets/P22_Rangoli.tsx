import React, { useState } from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { RotateCcw, CheckCircle2, Award } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const CHUNKY_CRAYONS = [
  { id: '#ef4444', name: 'Red', label: '🔴 Red' },
  { id: '#f97316', name: 'Orange', label: '🟠 Orange' },
  { id: '#eab308', name: 'Yellow', label: '🟡 Yellow' },
  { id: '#22c55e', name: 'Green', label: '🟢 Green' },
  { id: '#06b6d4', name: 'Cyan', label: '🔵 Sky Blue' },
  { id: '#8b5cf6', name: 'Purple', label: '🟣 Purple' },
  { id: '#ec4899', name: 'Pink', label: '🌸 Pink' },
  { id: '#ffffff', name: 'White', label: '⚪ White' }
];

export const P22_Rangoli: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const filledShapes: Record<string, string> = data.filledShapes || {};
  const [selectedColor, setSelectedColor] = useState<string>('#ef4444');

  const handleShapeClick = (shapeId: string) => {
    if (isCompleted) return;
    const next = { ...filledShapes, [shapeId]: selectedColor };
    onUpdate('filledShapes', next);
  };

  const clearAll = () => {
    if (isCompleted) return;
    onUpdate('filledShapes', {});
  };

  const uniqueColorsUsed = new Set(Object.values(filledShapes).filter(Boolean));
  const challengeMet = uniqueColorsUsed.size >= 5;

  const audioPrompt = "Make your own Rangoli! Tap a crayon color below, then tap inside any shape of the rangoli to color it. Use at least 5 different colors to win the challenge!";

  return (
    <WorksheetFrame pageNumber={22} categoryTag="दिवाळी विशेष" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Top Header matching Page 22 */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🪔</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              MAKE YOUR OWN RANGOLI!
            </h2>
            <span className="text-2xl">🪔</span>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-white p-3 sm:p-4 text-center shadow-xs">
            <p className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug">
              Don't colour this rangoli! Tear tiny pieces of old coloured paper, gift wrapping, newspapers or magazine pages and stick them inside the shapes to make a beautiful rangoli.
            </p>
          </div>
        </div>

        {/* Challenge Box */}
        <div className="rounded-2xl border-2 border-slate-900 bg-amber-100/70 p-3 sm:p-4 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <div>
              <span className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide block">
                CHALLENGE: Use at least 5 different colours!
              </span>
              <span className="text-xs font-bold text-amber-900">
                You used {uniqueColorsUsed.size} of 5 colours so far
              </span>
            </div>
          </div>

          {challengeMet ? (
            <span className="px-3 py-1.5 rounded-xl bg-emerald-500 text-white font-black text-xs flex items-center gap-1 shadow-sm animate-bounce">
              <CheckCircle2 className="w-4 h-4" /> 5 Colors Used!
            </span>
          ) : (
            <span className="text-xs font-black text-slate-600 bg-white px-3 py-1 rounded-lg border border-slate-400">
              {5 - uniqueColorsUsed.size} more colors to go
            </span>
          )}
        </div>

        {/* Rangoli Canvas & Palette */}
        <div className="flex flex-col items-center space-y-4">
          {/* Rangoli SVG Canvas */}
          <div className="w-full max-w-[420px] aspect-square bg-white rounded-3xl p-4 border-4 border-slate-800 shadow-lg flex items-center justify-center">
            <svg viewBox="0 0 500 500" className="w-full h-full select-none drop-shadow-sm">
              {/* Outer decorative ring */}
              <circle cx="250" cy="250" r="235" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeDasharray="6,6" />

              {/* 8 Outer accent circles */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 250 + 195 * Math.cos(rad);
                const cy = 250 + 195 * Math.sin(rad);
                const shapeId = `outer-circle-${i}`;
                const fill = filledShapes[shapeId] || '#ffffff';
                return (
                  <circle
                    key={shapeId}
                    cx={cx}
                    cy={cy}
                    r="24"
                    fill={fill}
                    stroke="#0f172a"
                    strokeWidth="3.5"
                    className="cursor-pointer hover:stroke-amber-500 transition-colors"
                    onClick={() => handleShapeClick(shapeId)}
                  />
                );
              })}

              {/* 4 Cardinal large petals (Top, Right, Bottom, Left) */}
              {[
                { id: 'cardinal-top', transform: 'rotate(0 250 250)' },
                { id: 'cardinal-right', transform: 'rotate(90 250 250)' },
                { id: 'cardinal-bottom', transform: 'rotate(180 250 250)' },
                { id: 'cardinal-left', transform: 'rotate(270 250 250)' }
              ].map(item => (
                <g key={item.id} transform={item.transform}>
                  <path
                    d="M 250,70 C 295,120 310,180 250,210 C 190,180 205,120 250,70 Z"
                    fill={filledShapes[item.id] || '#ffffff'}
                    stroke="#0f172a"
                    strokeWidth="4"
                    className="cursor-pointer hover:stroke-amber-500 transition-colors"
                    onClick={() => handleShapeClick(item.id)}
                  />
                </g>
              ))}

              {/* 4 Diagonal Paisleys */}
              {[
                { id: 'diag-tr', transform: 'rotate(45 250 250)' },
                { id: 'diag-br', transform: 'rotate(135 250 250)' },
                { id: 'diag-bl', transform: 'rotate(225 250 250)' },
                { id: 'diag-tl', transform: 'rotate(315 250 250)' }
              ].map(item => (
                <g key={item.id} transform={item.transform}>
                  <path
                    d="M 250,95 C 285,135 285,185 250,210 C 215,185 215,135 250,95 Z"
                    fill={filledShapes[item.id] || '#ffffff'}
                    stroke="#0f172a"
                    strokeWidth="3.5"
                    className="cursor-pointer hover:stroke-amber-500 transition-colors"
                    onClick={() => handleShapeClick(item.id)}
                  />
                </g>
              ))}

              {/* 8 Inner flower petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const shapeId = `inner-petal-${i}`;
                return (
                  <g key={shapeId} transform={`rotate(${angle} 250 250)`}>
                    <path
                      d="M 250,185 C 268,205 268,230 250,240 C 232,230 232,205 250,185 Z"
                      fill={filledShapes[shapeId] || '#ffffff'}
                      stroke="#0f172a"
                      strokeWidth="3"
                      className="cursor-pointer hover:stroke-amber-500 transition-colors"
                      onClick={() => handleShapeClick(shapeId)}
                    />
                  </g>
                );
              })}

              {/* Center Circle */}
              <circle
                cx="250"
                cy="250"
                r="30"
                fill={filledShapes['center-circle'] || '#ffffff'}
                stroke="#0f172a"
                strokeWidth="4"
                className="cursor-pointer hover:stroke-amber-500 transition-colors"
                onClick={() => handleShapeClick('center-circle')}
              />
            </svg>
          </div>

          {/* Chunky Crayon Selector Bar at the bottom */}
          <div className="bg-slate-100 p-3 sm:p-4 rounded-2xl border-2 border-slate-800 flex flex-wrap items-center justify-center gap-2 max-w-xl">
            <span className="text-xs font-black text-slate-700 mr-2">🖍️ Pick Color:</span>
            {CHUNKY_CRAYONS.map(c => {
              const isSelected = selectedColor === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedColor(c.id)}
                  className={`px-3 py-1.5 rounded-xl border-2 text-xs font-black flex items-center gap-1.5 transition-all shadow-xs ${
                    isSelected
                      ? 'border-slate-900 ring-4 ring-amber-300 scale-110 bg-white'
                      : 'border-slate-300 bg-white hover:scale-105'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-black/20"
                    style={{ backgroundColor: c.id }}
                  />
                  <span>{c.name}</span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-rose-600 hover:text-rose-700 font-bold ml-2 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
          </div>
        </div>
      </div>
    </WorksheetFrame>
  );
};
