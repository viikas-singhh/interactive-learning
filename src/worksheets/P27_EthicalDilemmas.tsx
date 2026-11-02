import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const DILEMMAS = [
  {
    id: 1,
    title: '1. IMPORTANT OPPORTUNITY',
    situation: "Your school is selecting students for an important leadership opportunity. You know that one of your close friends is not the strongest candidate. Another student — whom you don't particularly like — is clearly more qualified. The teacher asks you privately, 'Who do you think we should select?'",
    options: [
      { id: 'A', text: 'Recommend your friend. Loyalty matters.' },
      { id: 'B', text: "Recommend the stronger candidate, even though you don't like them." },
      { id: 'C', text: "Refuse to give an opinion because you're personally involved." },
      { id: 'D', text: "Explain both candidates' strengths and let the teacher decide." }
    ]
  },
  {
    id: 2,
    title: '2. PART-TIME OPPORTUNITY',
    situation: "Your parent owns a business and offers you a part-time position. You know you got the opportunity partly because you're their child. At the same time, you genuinely work hard and perform well. Another teenager who applied for the same position needed the money more than you do.",
    options: [
      { id: 'A', text: 'Take the opportunity. Parents are allowed to help their children.' },
      { id: 'B', text: 'Take it, but insist on being evaluated by the same standards as everyone else.' },
      { id: 'C', text: "Refuse the position because it isn't completely merit-based." },
      { id: 'D', text: 'Ask your parent whether the other applicant can be considered for another role.' }
    ]
  }
];

export const P27_EthicalDilemmas: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const choices: Record<number, string> = data.choices || {};

  const handlePick = (dilemmaId: number, optionId: string) => {
    if (isCompleted) return;
    onUpdate('choices', {
      ...choices,
      [dilemmaId]: optionId
    });
  };

  const audioPrompt = "Simple Ethical Dilemmas! Read the situations and choose what you would do. There are no right or wrong answers, choose the most honest and responsible option!";

  return (
    <WorksheetFrame pageNumber={27} categoryTag="टिनेजर्स" audioPromptText={audioPrompt}>
      <div className="space-y-6 font-friendly text-slate-900">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">⚖️</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              SIMPLE ETHICAL DILEMMAS
            </h2>
            <span className="text-xl">⚖️</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-600 max-w-xl mx-auto">
            Read the situations and think about what you would do. Choose the option you feel is the most honest and responsible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DILEMMAS.map((dil) => {
            const userPick = choices[dil.id];
            return (
              <div
                key={dil.id}
                className="rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-5 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="pb-1 border-b-2 border-slate-900">
                    <h3 className="font-black text-base sm:text-lg text-slate-900">
                      {dil.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                    {dil.situation}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-black text-slate-800">What would you do?</div>
                  {dil.options.map((opt) => {
                    const isSelected = userPick === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handlePick(dil.id, opt.id)}
                        className={`w-full p-2.5 rounded-xl border-2 text-left text-xs sm:text-sm font-bold flex items-start gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-100 border-slate-900 shadow-xs ring-2 ring-amber-300'
                            : 'bg-slate-50 border-slate-300 hover:bg-amber-50'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                          isSelected ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {opt.id}
                        </span>
                        <span className="text-slate-900 leading-tight">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WorksheetFrame>
  );
};
