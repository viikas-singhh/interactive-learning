import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, Lightbulb, BookOpen } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

export const P40_ProblemSolution: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const p1Problem = data.p1Problem || '';
  const p1Solution = data.p1Solution || '';
  const p2Problem = data.p2Problem || '';
  const p2Solution = data.p2Solution || '';

  const [showHints, setShowHints] = useState(false);

  // Self-evaluation helpers
  const p1ProblemValid = p1Problem.toLowerCase().includes('deforest') || p1Problem.toLowerCase().includes('home') || p1Problem.toLowerCase().includes('tree') || p1Problem.length > 10;
  const p1SolutionValid = p1Solution.toLowerCase().includes('reserve') || p1Solution.toLowerCase().includes('plant') || p1Solution.toLowerCase().includes('protect') || p1Solution.length > 10;
  const p2ProblemValid = p2Problem.toLowerCase().includes('soil') || p2Problem.toLowerCase().includes('erosion') || p2Problem.toLowerCase().includes('rain') || p2Problem.length > 10;
  const p2SolutionValid = p2Solution.toLowerCase().includes('cover') || p2Solution.toLowerCase().includes('terrace') || p2Solution.toLowerCase().includes('crop') || p2Solution.length > 10;

  const allAnswered = p1Problem.trim() && p1Solution.trim() && p2Problem.trim() && p2Solution.trim();

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 40 • वाचन आकलन (Reading Comprehension)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-cyan-200" />
            Problem and Solution
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base max-w-2xl">
            Read the scientific passages below. Identify the environmental problem and the practical solution proposed for each situation!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🌿</div>
      </div>

      {/* Helper Toggle */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowHints(!showHints)}
          className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-xl hover:bg-teal-100 flex items-center gap-1.5 transition-all"
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          {showHints ? 'Hide Reading Clues' : 'Show Clue Keywords'}
        </button>
      </div>

      {/* Case 1: Deforestation */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <span>Case 1: Wildlife Habitat & Deforestation</span>
        </div>

        {/* Passage Box */}
        <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 text-slate-800 text-sm sm:text-base leading-relaxed">
          "For many animals their homes are disappearing due to <span className={showHints ? 'bg-red-200 px-1 rounded font-bold' : ''}>deforestation</span>. Trees, crucial for their food and shelter, are being cut down. One way is to <span className={showHints ? 'bg-emerald-200 px-1 rounded font-bold' : ''}>create wildlife reserves and protected areas</span> where animals can live safely. Another solution is for people to <span className={showHints ? 'bg-emerald-200 px-1 rounded font-bold' : ''}>plant more trees</span> and practice sustainable logging to ensure animals have the resources they need to thrive."
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border-2 border-red-200 bg-red-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-red-800 text-sm flex items-center gap-1.5">
                ⚠️ Problem (समस्या):
              </span>
              {p1ProblemValid && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            </div>
            <textarea
              rows={3}
              value={p1Problem}
              onChange={(e) => onUpdate('p1Problem', e.target.value)}
              placeholder="What is the problem faced by animals? (e.g. Deforestation is destroying their homes...)"
              className="w-full bg-white rounded-xl border border-red-200 p-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
            />
          </div>

          <div className="p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                💡 Solution (उपाय):
              </span>
              {p1SolutionValid && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            </div>
            <textarea
              rows={3}
              value={p1Solution}
              onChange={(e) => onUpdate('p1Solution', e.target.value)}
              placeholder="How can we solve this problem? (e.g. Create protected wildlife reserves and plant more trees...)"
              className="w-full bg-white rounded-xl border border-emerald-200 p-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Case 2: Soil Erosion */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-slate-800 font-bold text-base">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span>Case 2: Agricultural Soil Erosion</span>
        </div>

        {/* Passage Box */}
        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-slate-800 text-sm sm:text-base leading-relaxed">
          "<span className={showHints ? 'bg-red-200 px-1 rounded font-bold' : ''}>Soil erosion</span> is a big problem in some areas. The top layer of soil, vital for plant growth, is <span className={showHints ? 'bg-red-200 px-1 rounded font-bold' : ''}>washed away by heavy rainfall or human activities</span>. This poses a challenge for farmers who need fertile soil for crops. One way is <span className={showHints ? 'bg-emerald-200 px-1 rounded font-bold' : ''}>planting cover crops</span> or <span className={showHints ? 'bg-emerald-200 px-1 rounded font-bold' : ''}>building terraces</span> on hilly terrain. These measures help hold the soil in place and slow down water flow, preventing excessive erosion and protecting fertile soil for agriculture."
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border-2 border-red-200 bg-red-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-red-800 text-sm flex items-center gap-1.5">
                ⚠️ Problem (समस्या):
              </span>
              {p2ProblemValid && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            </div>
            <textarea
              rows={3}
              value={p2Problem}
              onChange={(e) => onUpdate('p2Problem', e.target.value)}
              placeholder="What is happening to the fertile soil? (e.g. Topsoil is washed away by heavy rain and erosion...)"
              className="w-full bg-white rounded-xl border border-red-200 p-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
            />
          </div>

          <div className="p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
                💡 Solution (उपाय):
              </span>
              {p2SolutionValid && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
            </div>
            <textarea
              rows={3}
              value={p2Solution}
              onChange={(e) => onUpdate('p2Solution', e.target.value)}
              placeholder="How do farmers protect the soil? (e.g. Planting cover crops and building terraces on hills...)"
              className="w-full bg-white rounded-xl border border-emerald-200 p-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
