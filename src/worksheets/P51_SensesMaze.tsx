import React, { useState } from 'react';
import { Eye, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface SenseOrgan {
  id: string;
  name: string;
  emoji: string;
  color: string;
  lineColor: string;
}

interface SenseFunction {
  id: string;
  organId: string;
  action: string;
  description: string;
  emoji: string;
}

const ORGANS: SenseOrgan[] = [
  { id: 'eye', name: 'Eye', emoji: '👁️', color: 'from-blue-500 to-indigo-600', lineColor: '#3b82f6' },
  { id: 'nose', name: 'Nose', emoji: '👃', color: 'from-pink-500 to-rose-600', lineColor: '#ec4899' },
  { id: 'tongue', name: 'Tongue', emoji: '👅', color: 'from-amber-500 to-orange-600', lineColor: '#f59e0b' },
  { id: 'ear', name: 'Ear', emoji: '👂', color: 'from-purple-500 to-violet-600', lineColor: '#8b5cf6' },
  { id: 'hand', name: 'Hand', emoji: '🖐️', color: 'from-emerald-500 to-teal-600', lineColor: '#10b981' }
];

const FUNCTIONS: SenseFunction[] = [
  { id: 'f_see', organId: 'eye', action: 'to see', description: 'Boy gazing through a telescope 🔭', emoji: '🔭' },
  { id: 'f_smell', organId: 'nose', action: 'to smell', description: 'Girl smelling a sweet scented rose 🌸', emoji: '🌸' },
  { id: 'f_taste', organId: 'tongue', action: 'to taste', description: 'Boy enjoying delicious ice cream 🍦', emoji: '🍦' },
  { id: 'f_hear', organId: 'ear', action: 'to hear', description: 'Boy listening to music on headphones 🎧', emoji: '🎧' },
  { id: 'f_touch', organId: 'hand', action: 'to touch', description: 'Girl gently stroking a soft furry kitten 🐱', emoji: '🐱' }
];

export const P51_SensesMaze: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  // Map organId -> functionId
  const connections: Record<string, string> = data.connections || {};
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>('eye');

  const handleOrganClick = (organId: string) => {
    if (isCompleted) return;
    setSelectedOrgan(organId);
  };

  const handleFunctionClick = (func: SenseFunction) => {
    if (isCompleted || !selectedOrgan) return;
    const next = { ...connections, [selectedOrgan]: func.id };
    onUpdate('connections', next);
  };

  const clearConnection = (organId: string) => {
    if (isCompleted) return;
    const next = { ...connections };
    delete next[organId];
    onUpdate('connections', next);
  };

  // Check accuracy
  let correctCount = 0;
  ORGANS.forEach(org => {
    const connectedFuncId = connections[org.id];
    const targetFunc = FUNCTIONS.find(f => f.id === connectedFuncId);
    if (targetFunc?.organId === org.id) {
      correctCount++;
    }
  });

  const allConnected = Object.keys(connections).length === ORGANS.length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-500 via-emerald-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 51 • किलबिल (5 Senses Maze)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Eye className="w-8 h-8 text-teal-200" />
            Help Each Sense Find Its Function!
          </h2>
          <p className="mt-1 text-teal-100 text-sm sm:text-base max-w-2xl">
            Follow the winding sensory maze from the organs at the top (Eye, Nose, Tongue, Ear, Hand) to their matching actions at the bottom!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">👀</div>
      </div>

      {/* Status Bar */}
      <div className="bg-white rounded-2xl p-4 border-2 border-teal-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧠</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Sensory Map Status</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">
              {Object.keys(connections).length} of 5 Senses Connected
            </div>
          </div>
        </div>

        {allConnected && (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Score: {correctCount} / 5 Correctly Linked!</span>
          </span>
        )}
      </div>

      {/* Main Maze Board */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm space-y-6">
        {/* Top: 5 Sense Organs */}
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-center mb-3">
            Step 1: Pick an Organ at the Top
          </span>
          <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {ORGANS.map(org => {
              const isSelected = selectedOrgan === org.id;
              const hasConnection = Boolean(connections[org.id]);

              return (
                <button
                  key={org.id}
                  type="button"
                  onClick={() => handleOrganClick(org.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-300 scale-105 shadow-md'
                      : hasConnection
                      ? 'border-emerald-300 bg-emerald-50/50'
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl">{org.emoji}</span>
                  <span className="text-xs font-bold text-slate-800 mt-1">{org.name}</span>
                  {hasConnection && (
                    <span className="text-[10px] text-emerald-600 font-bold mt-0.5">Linked ✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Winding Maze Paths Graphic */}
        <div className="relative w-full max-w-2xl mx-auto h-32 sm:h-40 bg-gradient-to-b from-slate-50 to-teal-50/40 rounded-2xl border border-slate-200 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
            {/* 5 Winding Maze Curves */}
            {ORGANS.map((org, i) => {
              const xStart = 50 + i * 100;
              const isSelected = selectedOrgan === org.id;
              const connectedFuncId = connections[org.id];
              const funcIndex = FUNCTIONS.findIndex(f => f.id === connectedFuncId);
              const xEnd = funcIndex >= 0 ? 50 + funcIndex * 100 : xStart;

              // Winding bezier path
              const midY1 = 40;
              const midY2 = 80;
              const midX1 = xStart + (i % 2 === 0 ? 30 : -30);
              const midX2 = xEnd + (i % 2 === 0 ? -20 : 20);

              const d = `M ${xStart},5 C ${midX1},${midY1} ${midX2},${midY2} ${xEnd},115`;

              return (
                <path
                  key={org.id}
                  d={d}
                  fill="none"
                  stroke={isSelected || connectedFuncId ? org.lineColor : '#cbd5e1'}
                  strokeWidth={isSelected ? 5 : connectedFuncId ? 3.5 : 2}
                  strokeDasharray={connectedFuncId ? 'none' : '4,4'}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>
        </div>

        {/* Bottom: 5 Functions */}
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block text-center mb-3">
            Step 2: Connect to Matching Action Below
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
            {FUNCTIONS.map(fn => {
              // Find if any organ connects to this
              const connectedOrganId = Object.keys(connections).find(k => connections[k] === fn.id);
              const connectedOrgan = ORGANS.find(o => o.id === connectedOrganId);
              const isMatch = connectedOrgan?.id === fn.organId;

              return (
                <button
                  key={fn.id}
                  type="button"
                  onClick={() => handleFunctionClick(fn)}
                  className={`p-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-between min-h-[110px] cursor-pointer ${
                    connectedOrgan
                      ? isMatch
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 shadow-sm'
                        : 'border-amber-400 bg-amber-50 text-amber-950 shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:border-teal-300 hover:bg-teal-50/40 text-slate-700'
                  }`}
                >
                  <span className="text-2xl mb-1">{fn.emoji}</span>
                  <div>
                    <span className="text-xs font-bold block uppercase tracking-wide">{fn.action}</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">{fn.description.split(' ')[0]}</span>
                  </div>
                  {connectedOrgan && (
                    <span className="text-[10px] font-bold text-teal-700 mt-1">
                      {connectedOrgan.emoji} {connectedOrgan.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
