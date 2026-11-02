import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const FACTS = [
  {
    num: 1,
    title: 'FLAMINGOS ARE BORN GREY!',
    text: 'They turn bright pink because of the special food they eat (shrimp and algae)!',
    emoji: '🦩',
    sub: 'Colour transformation'
  },
  {
    num: 2,
    title: 'SHARKS ARE OLDER THAN DINOSAURS!',
    text: 'Sharks have lived swimming in the Earth’s oceans for over 400 million years!',
    emoji: '🦈',
    sub: 'Ancient survivors'
  },
  {
    num: 3,
    title: 'KOALAS HAVE FINGERPRINTS!',
    text: 'They are so similar to human fingerprints that they can even confuse forensic scientists!',
    emoji: '🐨',
    sub: 'Unique nature'
  },
  {
    num: 4,
    title: 'THE TALLEST TREE IS TALLER THAN A FOOTBALL FIELD!',
    text: 'Some coastal redwood trees grow over 115 metres high into the clouds!',
    emoji: '🌲',
    sub: '115+ metres high'
  },
  {
    num: 5,
    title: 'PENGUINS CAN DRINK SEAWATER!',
    text: 'Their bodies have special glands that filter and remove all the extra salt safely!',
    emoji: '🐧',
    sub: 'Natural desalination'
  },
  {
    num: 6,
    title: 'LIGHTNING IS HOTTER THAN THE SUN’S SURFACE!',
    text: 'A lightning bolt can reach around 30,000°C — five times hotter than the sun!',
    emoji: '⚡',
    sub: '30,000°C power'
  }
];

export const P44_WeirdButTrue: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const readFacts: number[] = data.readFacts || [];

  const handleReadFact = (num: number, text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
    if (!readFacts.includes(num)) {
      onUpdate('readFacts', [...readFacts, num]);
    }
  };

  const audioPrompt = "Weird But True! Amazing science facts for kids. Tap on each fact to listen to it and discover nature's coolest secrets!";

  return (
    <WorksheetFrame pageNumber={44} categoryTag="बालविकास" audioPromptText={audioPrompt}>
      <div className="space-y-4 font-friendly text-slate-900">
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">⭐</span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-wide font-serif">
              WEIRD BUT TRUE!
            </h2>
            <span className="text-2xl">⭐</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-widest">
            AMAZING FACTS FOR KIDS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FACTS.map((f) => {
            const isRead = readFacts.includes(f.num);
            return (
              <div
                key={f.num}
                onClick={() => handleReadFact(f.num, `${f.title}. ${f.text}`)}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3 shadow-xs ${
                  isRead
                    ? 'border-slate-900 bg-amber-50 ring-2 ring-amber-300'
                    : 'border-slate-300 bg-white hover:border-slate-800'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl border-2 border-slate-900 bg-white flex items-center justify-center text-3xl shrink-0 shadow-xs">
                  {f.emoji}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs sm:text-sm text-slate-900">
                      {f.num}. {f.title}
                    </span>
                    <Volume2 className="w-4 h-4 text-slate-400 hover:text-amber-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-snug">
                    {f.text}
                  </p>
                  <span className="text-[10px] font-black text-amber-700 block">
                    {f.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border-2 border-slate-900 bg-white p-3 text-center font-black text-slate-800 text-xs sm:text-sm shadow-xs">
          🌟 STAY CURIOUS, KEEP LEARNING! 🌟
        </div>
      </div>
    </WorksheetFrame>
  );
};
