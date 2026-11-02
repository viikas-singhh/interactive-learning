import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { Brain, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const TRAPS = [
  {
    id: 'mind_reading',
    title: 'MIND READING',
    emoji: '📖',
    desc: 'Assuming you know what people are thinking negatively, without having evidence.',
    example: '"He thinks I\'m an idiot." "She never likes me."'
  },
  {
    id: 'jumping_conclusions',
    title: 'JUMPING TO CONCLUSIONS',
    emoji: '⏰',
    desc: 'Predicting the future that trouble is ahead without facts.',
    example: '"If I go, no one will talk to me." "I will get made fun of."'
  },
  {
    id: 'shoulds',
    title: 'SHOULDS',
    emoji: '📈',
    desc: 'Unspoken rules about how you and others should behave using "must" or "have to".',
    example: '"I should start exercising." "They shouldn\'t be so loud."'
  },
  {
    id: 'all_nothing',
    title: 'ALL OR NOTHING THINKING',
    emoji: '💡',
    desc: 'Seeing things from an all-or-nothing or black-and-white perspective.',
    example: '"They are rude and we are no longer friends." "It needs to be this way or not at all."'
  },
  {
    id: 'personalization',
    title: 'PERSONALIZATION',
    emoji: '🧠',
    desc: 'Believing what others say or do is a direct personal reaction to you.',
    example: '"They posted that picture because they know I will see it."'
  },
  {
    id: 'labeling',
    title: 'LABELING',
    emoji: '🏷️',
    desc: 'Assigning global negative judgments to yourself or others based on a single event.',
    example: '"I got it wrong, so such a loser." "My voice is so annoying."'
  },
  {
    id: 'unfair_comparisons',
    title: 'UNFAIR COMPARISONS',
    emoji: '🌿',
    desc: 'Placing unrealistic standards on yourself and comparing yourself to others.',
    example: '"Others my age are more successful than I am." "They are perfect."'
  }
];

export const P28_MindTraps: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const recognizedTraps: string[] = data.recognizedTraps || [];

  const handleToggle = (id: string) => {
    if (isCompleted) return;
    const next = recognizedTraps.includes(id)
      ? recognizedTraps.filter(t => t !== id)
      : [...recognizedTraps, id];
    onUpdate('recognizedTraps', next);
  };

  const audioPrompt = "Mind Traps! Learn how our brain can sometimes trick us. Tap any mind trap you have experienced to circle it and learn how to break free!";

  return (
    <WorksheetFrame pageNumber={28} categoryTag="टिनेजर्स" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🧠</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              MIND TRAPS
            </h2>
            <span className="text-xl">🧠</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            Tap the traps below to recognize unhelpful thought patterns and protect your peace of mind!
          </p>
        </div>

        <div className="space-y-2.5">
          {TRAPS.map((trap) => {
            const isSelected = recognizedTraps.includes(trap.id);
            return (
              <div
                key={trap.id}
                onClick={() => handleToggle(trap.id)}
                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 shadow-xs ${
                  isSelected
                    ? 'border-slate-900 bg-amber-50 ring-2 ring-amber-300'
                    : 'border-slate-300 bg-white hover:border-slate-800'
                }`}
              >
                <span className="text-3xl shrink-0 p-1.5 rounded-xl bg-slate-100 border border-slate-300">
                  {trap.emoji}
                </span>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-sm sm:text-base text-slate-900">
                      {trap.title}
                    </h3>
                    {isSelected && (
                      <span className="text-xs font-black text-amber-700 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                        Recognized ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    {trap.desc}
                  </p>
                  <p className="text-[11px] font-semibold text-slate-500 italic">
                    Example: {trap.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WorksheetFrame>
  );
};
