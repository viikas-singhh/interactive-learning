import React, { useState } from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { RotateCcw, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const CRAYONS = [
  { id: '#f59e0b', name: 'Golden Yellow' },
  { id: '#ef4444', name: 'Festive Red' },
  { id: '#ec4899', name: 'Pink' },
  { id: '#3b82f6', name: 'Sky Blue' },
  { id: '#10b981', name: 'Green' },
  { id: '#8b5cf6', name: 'Purple' },
  { id: '#f97316', name: 'Orange' },
  { id: '#451a03', name: 'Hair Brown' },
  { id: '#fed7aa', name: 'Skin Tone' }
];

export const P56_ColorDiwali: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const coloredParts: Record<string, string> = data.coloredParts || {};
  const [selectedColor, setSelectedColor] = useState<string>('#f59e0b');

  const handleColorPart = (partId: string) => {
    if (isCompleted) return;
    onUpdate('coloredParts', {
      ...coloredParts,
      [partId]: selectedColor
    });
  };

  const clearAll = () => {
    if (isCompleted) return;
    onUpdate('coloredParts', {});
  };

  const filledCount = Object.keys(coloredParts).length;
  const audioPrompt = "Color the picture beautifully and neatly! Pick a bright crayon from the palette, and tap the boy, the girl, and the diya to color them!";

  return (
    <WorksheetFrame pageNumber={56} categoryTag="किलबिल" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        {/* Header */}
        <div className="text-center space-y-1">
          <p className="text-xs sm:text-sm font-extrabold text-slate-600">
            Color the picture beautifully and neatly.
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-500 tracking-wider font-serif drop-shadow-sm">
            HAPPY DIWALI
          </h2>
        </div>

        {/* Big Coloring Canvas */}
        <div className="max-w-md mx-auto aspect-[4/5] bg-white rounded-3xl p-4 border-4 border-slate-900 shadow-md flex items-center justify-center">
          <svg viewBox="0 0 400 450" className="w-full h-full select-none">
            {/* Background Sparkles */}
            <text x="50" y="80" fontSize="20" fill="#f59e0b">✨</text>
            <text x="320" y="90" fontSize="20" fill="#f59e0b">✨</text>
            <text x="40" y="300" fontSize="18" fill="#ec4899">🌸</text>
            <text x="340" y="290" fontSize="18" fill="#ec4899">🌸</text>

            {/* Boy Character (Left) */}
            <g className="cursor-pointer" onClick={() => handleColorPart('boy_body')}>
              {/* Boy Kurta */}
              <path
                d="M 100,240 L 160,240 L 175,370 L 85,370 Z"
                fill={coloredParts['boy_body'] || '#ffffff'}
                stroke="#0f172a"
                strokeWidth="3.5"
              />
              <line x1="130" y1="240" x2="130" y2="370" stroke="#0f172a" strokeWidth="2.5" />
            </g>

            <g className="cursor-pointer" onClick={() => handleColorPart('boy_head')}>
              {/* Boy Head */}
              <circle cx="130" cy="190" r="38" fill={coloredParts['boy_head'] || '#ffedd5'} stroke="#0f172a" strokeWidth="3.5" />
              {/* Boy Hair */}
              <path d="M 95,185 C 95,145 165,145 165,185 C 150,165 110,165 95,185 Z" fill={coloredParts['boy_hair'] || '#1e293b'} stroke="#0f172a" strokeWidth="3" />
              {/* Tilak */}
              <line x1="130" y1="165" x2="130" y2="180" stroke="#dc2626" strokeWidth="3" />
              {/* Eyes & Smile */}
              <circle cx="120" cy="188" r="3" fill="#0f172a" />
              <circle cx="140" cy="188" r="3" fill="#0f172a" />
              <path d="M 122,205 Q 130,215 138,205" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Girl Character (Right) */}
            <g className="cursor-pointer" onClick={() => handleColorPart('girl_dress')}>
              {/* Girl Lehanga Dress */}
              <path
                d="M 230,250 L 290,250 L 320,380 L 200,380 Z"
                fill={coloredParts['girl_dress'] || '#ffffff'}
                stroke="#0f172a"
                strokeWidth="3.5"
              />
              {/* Flower patterns on dress */}
              <circle cx="240" cy="320" r="8" fill="#fbbf24" stroke="#0f172a" strokeWidth="2" />
              <circle cx="280" cy="340" r="8" fill="#fbbf24" stroke="#0f172a" strokeWidth="2" />
            </g>

            <g className="cursor-pointer" onClick={() => handleColorPart('girl_head')}>
              {/* Girl Head */}
              <circle cx="260" cy="190" r="38" fill={coloredParts['girl_head'] || '#ffedd5'} stroke="#0f172a" strokeWidth="3.5" />
              {/* Girl Hair & Braid */}
              <path d="M 225,185 C 225,145 295,145 295,185 C 280,165 240,165 225,185 Z" fill={coloredParts['girl_hair'] || '#1e293b'} stroke="#0f172a" strokeWidth="3" />
              <path d="M 290,195 Q 315,250 300,310" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
              {/* Bindi */}
              <circle cx="260" cy="175" r="2.5" fill="#dc2626" />
              {/* Eyes & Smile */}
              <circle cx="250" cy="188" r="3" fill="#0f172a" />
              <circle cx="270" cy="188" r="3" fill="#0f172a" />
              <path d="M 252,205 Q 260,215 268,205" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Glowing Diya in Center held by children */}
            <g className="cursor-pointer" onClick={() => handleColorPart('sacred_diya')}>
              <path d="M 180,260 Q 200,285 220,260 Q 200,265 180,260 Z" fill={coloredParts['sacred_diya'] || '#f59e0b'} stroke="#0f172a" strokeWidth="3" />
              {/* Flame */}
              <path d="M 200,235 C 190,248 193,258 200,260 C 207,258 210,248 200,235 Z" fill="#ef4444" className="animate-pulse" />
              <circle cx="200" cy="242" r="15" fill="#fde047" opacity="0.3" className="animate-ping" />
            </g>
          </svg>
        </div>

        {/* Palette Bar */}
        <div className="bg-slate-100 p-3 rounded-2xl border-2 border-slate-800 flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          <span className="text-xs font-black text-slate-700 mr-1">🖍️ Crayon:</span>
          {CRAYONS.map(c => {
            const isSelected = selectedColor === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedColor(c.id)}
                className={`w-7 h-7 rounded-full border-2 transition-transform shadow-xs ${
                  isSelected ? 'scale-125 border-slate-900 ring-2 ring-amber-400' : 'border-transparent'
                }`}
                style={{ backgroundColor: c.id }}
                title={c.name}
              />
            );
          })}

          <button
            type="button"
            onClick={clearAll}
            className="text-xs text-rose-600 hover:text-rose-700 font-bold ml-3 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Clear
          </button>
        </div>
      </div>
    </WorksheetFrame>
  );
};
