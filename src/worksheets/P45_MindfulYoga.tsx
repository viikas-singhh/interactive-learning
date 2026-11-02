import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const YOGA_POINTS = [
  { id: 'focus', title: 'IMPROVES FOCUS', desc: 'Helps kids concentrate better in studies and fun activities.', emoji: '🧠' },
  { id: 'stress', title: 'REDUCES STRESS', desc: 'Calms the mind and helps manage big feelings gracefully.', emoji: '😊' },
  { id: 'confidence', title: 'BUILDS CONFIDENCE', desc: 'Encourages self-esteem and a positive, joyful body image.', emoji: '🧘' },
  { id: 'emotional', title: 'ENHANCES EMOTIONAL BALANCE', desc: 'Teaches children to understand and express their true feelings.', emoji: '💖' },
  { id: 'flexibility', title: 'DEVELOPS FLEXIBILITY & STRENGTH', desc: 'Fun poses improve posture, coordination, and physical stamina.', emoji: '🤸' },
  { id: 'habits', title: 'ENCOURAGES MINDFUL HABITS', desc: 'Builds daily awareness, gratitude, and kindness towards others.', emoji: '🌱' },
  { id: 'sleep', title: 'SUPPORTS BETTER SLEEP', desc: 'Relaxation techniques help kids sleep deeper and wake up refreshed.', emoji: '🌙' }
];

export const P45_MindfulYoga: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const practiced: string[] = data.practiced || [];

  const handleToggle = (id: string) => {
    if (isCompleted) return;
    const next = practiced.includes(id)
      ? practiced.filter(p => p !== id)
      : [...practiced, id];
    onUpdate('practiced', next);
  };

  const audioPrompt = "Mindful Kids Yoga! Growing calm, confident, and happy kids. Tap the yoga superpowers to practice them!";

  return (
    <WorksheetFrame pageNumber={45} categoryTag="बालविकास" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🧘‍♀️</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-wide font-serif">
              MINDFUL KIDS YOGA
            </h2>
            <span className="text-2xl">🧘‍♂️</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            Growing Calm, Confident & Happy Kids
          </p>
        </div>

        {/* Central Girl Yoga Illustration */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-emerald-100 border-4 border-slate-900 flex items-center justify-center text-5xl shadow-md">
          🧘
        </div>

        {/* 7 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {YOGA_POINTS.map((yp) => {
            const isDone = practiced.includes(yp.id);
            return (
              <div
                key={yp.id}
                onClick={() => handleToggle(yp.id)}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between shadow-xs ${
                  isDone
                    ? 'border-slate-900 bg-emerald-50 ring-2 ring-emerald-300'
                    : 'border-slate-300 bg-white hover:border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-200">
                    <span className="text-2xl">{yp.emoji}</span>
                    {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <h3 className="font-black text-xs sm:text-sm text-slate-900">
                    {yp.title}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-600 mt-1 leading-snug">
                    {yp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner matching Page 45 */}
        <div className="rounded-2xl border-2 border-slate-900 bg-amber-50 p-4 text-center shadow-xs space-y-1">
          <div className="font-black text-sm sm:text-base text-slate-900 tracking-wider">
            YOGA TODAY, STRONGER TOMORROW!
          </div>
          <p className="text-xs font-bold text-slate-600">
            Mindful Kids Yoga nurtures healthy minds, happy hearts, and strong bodies for a brighter future.
          </p>
        </div>
      </div>
    </WorksheetFrame>
  );
};
