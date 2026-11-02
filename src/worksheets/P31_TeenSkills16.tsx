import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const PILLARS = [
  {
    title: 'PILLAR 1: MENTAL SKILLS',
    emoji: '🧠',
    skills: [
      { num: 1, text: 'Learn Smarter, Not Longer' },
      { num: 2, text: 'Stay Calm Under Pressure' },
      { num: 3, text: 'Check Before You Believe' },
      { num: 4, text: 'Choose Long-Term Wins' }
    ]
  },
  {
    title: 'PILLAR 2: PHYSICAL SKILLS',
    emoji: '🏋️',
    skills: [
      { num: 5, text: 'Build Strength the Right Way' },
      { num: 6, text: 'Prepare Yourself to Feel Confident' },
      { num: 7, text: 'Build a Diet You Can Actually Follow' },
      { num: 8, text: 'Master Sleep and Recovery' }
    ]
  },
  {
    title: 'PILLAR 3: SOCIAL SKILLS',
    emoji: '💬',
    skills: [
      { num: 9, text: 'Speak With Confidence' },
      { num: 10, text: 'Learn to Find a Middle Way' },
      { num: 11, text: 'Understand People Before You React' },
      { num: 12, text: 'Build Strong Connections' }
    ]
  },
  {
    title: 'PILLAR 4: FINANCIAL & FUTURE SKILLS',
    emoji: '💰',
    skills: [
      { num: 13, text: 'Learn to Manage Your Money' },
      { num: 14, text: 'Think Before You Spend' },
      { num: 15, text: 'Build Future-Ready Skills' },
      { num: 16, text: 'Learn How Money Can Grow' }
    ]
  }
];

export const P31_TeenSkills16: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const mastered: number[] = data.mastered || [];

  const toggleSkill = (num: number) => {
    if (isCompleted) return;
    const next = mastered.includes(num)
      ? mastered.filter(n => n !== num)
      : [...mastered, num];
    onUpdate('mastered', next);
  };

  const audioPrompt = "16 Skills Every Child and Teenager Should Learn! Tap each skill to tick it off and track your progress across all four pillars!";

  return (
    <WorksheetFrame pageNumber={31} categoryTag="टिनेजर्स" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🌟</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              16 SKILLS EVERY TEENAGER SHOULD LEARN
            </h2>
            <span className="text-xl">🌟</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            4 pillars for real life, confidence and growth. Tap to tick off your superpowers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PILLARS.map((p, pIdx) => (
            <div
              key={pIdx}
              className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-2 pb-2 border-b-2 border-slate-900">
                <span className="text-2xl">{p.emoji}</span>
                <h3 className="font-black text-sm sm:text-base text-slate-900 tracking-wide">
                  {p.title}
                </h3>
              </div>

              <div className="space-y-2">
                {p.skills.map((sk) => {
                  const isChecked = mastered.includes(sk.num);
                  return (
                    <button
                      key={sk.num}
                      type="button"
                      onClick={() => toggleSkill(sk.num)}
                      className={`w-full p-2.5 rounded-xl border-2 text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-amber-100 border-slate-900 font-black shadow-xs'
                          : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] flex items-center justify-center font-bold">
                          {sk.num}
                        </span>
                        <span className="text-slate-900">{sk.text}</span>
                      </div>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote matching Page 31 */}
        <div className="rounded-2xl border-2 border-slate-900 bg-amber-50 p-4 text-center shadow-xs">
          <p className="text-xs sm:text-sm font-extrabold text-slate-800">
            "You do not need to master all 16 at once. Start with one, stay consistent, and keep improving." ⭐
          </p>
        </div>
      </div>
    </WorksheetFrame>
  );
};
