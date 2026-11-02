import React from 'react';
import { Scale, ThumbsUp, ThumbsDown, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface ScenarioItem {
  id: string;
  text: string;
  correctDecision: 'yes' | 'no';
  consequencePlaceholder: string;
  consequenceHint: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: 's1',
    text: 'The teacher asks your class to be quiet, but you keep whispering to your friend anyway.',
    correctDecision: 'no',
    consequencePlaceholder: 'e.g. Class gets distracted, teacher feels disrespected, you might miss important instructions...',
    consequenceHint: 'Distracts classmates and disrupts learning.'
  },
  {
    id: 's2',
    text: 'There is a new student in your class. At lunchtime, you invite him to sit with you and your friends.',
    correctDecision: 'yes',
    consequencePlaceholder: 'e.g. He feels welcomed, makes friends quickly, avoids feeling lonely and anxious...',
    consequenceHint: 'Builds friendship and makes the new classmate feel safe.'
  },
  {
    id: 's3',
    text: 'You and your friend are supposed to be working on a project together. You let your friend do all the work.',
    correctDecision: 'no',
    consequencePlaceholder: 'e.g. Friend feels taken advantage of, friendship suffers, you do not learn the topic...',
    consequenceHint: 'Breaks trust and is unfair to your partner.'
  },
  {
    id: 's4',
    text: "You borrow your sister's sweater and get ink on it. You put it in the laundry basket and don't tell her about it.",
    correctDecision: 'no',
    consequencePlaceholder: 'e.g. Stain sets permanently without treatment, sister loses trust in you when she discovers it...',
    consequenceHint: 'Dishonesty harms relationships; prompt action can save clothes!'
  },
  {
    id: 's5',
    text: 'The person sitting next to you draws a really nice picture, and you compliment her on it.',
    correctDecision: 'yes',
    consequencePlaceholder: 'e.g. Boosts her confidence, spreads kindness and positivity, strengthens classmate bond...',
    consequenceHint: 'Encourages creativity and spreads cheer!'
  }
];

export const P42_DecisionScenarios: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const decisions: Record<string, 'yes' | 'no' | ''> = data.decisions || {};
  const consequences: Record<string, string> = data.consequences || {};

  const handleDecision = (id: string, val: 'yes' | 'no') => {
    if (isCompleted) return;
    onUpdate('decisions', {
      ...decisions,
      [id]: val
    });
  };

  const handleConsequence = (id: string, val: string) => {
    onUpdate('consequences', {
      ...consequences,
      [id]: val
    });
  };

  const allDecided = SCENARIOS.every(s => decisions[s.id]);
  const correctCount = SCENARIOS.filter(s => decisions[s.id] === s.correctDecision).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 42 • निर्णय आणि परिणाम (Ethics & Consequences)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Scale className="w-8 h-8 text-purple-200" />
            Is It a Good Decision or Not?
          </h2>
          <p className="mt-1 text-purple-100 text-sm sm:text-base max-w-2xl">
            Consider each scenario below. Think about what might happen next (the consequences), and judge whether each action is a good decision.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">⚖️</div>
      </div>

      {/* Progress Counter */}
      <div className="bg-white rounded-2xl p-4 border-2 border-purple-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500 text-white font-bold">
            🤝
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Moral Compass Status</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">
              {Object.keys(decisions).length} of {SCENARIOS.length} Scenarios Evaluated
            </div>
          </div>
        </div>

        {allDecided && (
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Score: {correctCount} / {SCENARIOS.length} Wise Decisions</span>
          </span>
        )}
      </div>

      {/* Scenarios Table / Cards */}
      <div className="space-y-4">
        {SCENARIOS.map((sc, idx) => {
          const currentDecision = decisions[sc.id];
          const currentConsequence = consequences[sc.id] || '';

          return (
            <div
              key={sc.id}
              className={`p-5 rounded-2xl border-2 transition-all bg-white shadow-sm space-y-3 ${
                currentDecision
                  ? currentDecision === sc.correctDecision
                    ? 'border-emerald-200'
                    : 'border-amber-200'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                    {sc.text}
                  </p>
                </div>

                {/* Decision Buttons */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => handleDecision(sc.id, 'yes')}
                    className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      currentDecision === 'yes'
                        ? 'bg-emerald-500 text-white border-emerald-600 shadow-sm scale-105'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Good Decision</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDecision(sc.id, 'no')}
                    className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      currentDecision === 'no'
                        ? 'bg-rose-500 text-white border-rose-600 shadow-sm scale-105'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
                    }`}
                  >
                    <ThumbsDown className="w-3.5 h-3.5" />
                    <span>Bad Decision</span>
                  </button>
                </div>
              </div>

              {/* Consequences Input */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-600">
                    Possible Consequences (परिणाम काय होऊ शकतात?):
                  </label>
                  <button
                    type="button"
                    onClick={() => handleConsequence(sc.id, sc.consequenceHint)}
                    className="text-[11px] text-purple-600 hover:underline cursor-pointer"
                  >
                    💡 Suggest Consequence
                  </button>
                </div>
                <textarea
                  rows={2}
                  value={currentConsequence}
                  onChange={(e) => handleConsequence(sc.id, e.target.value)}
                  placeholder={sc.consequencePlaceholder}
                  className="w-full bg-slate-50 rounded-xl border border-slate-200 p-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
