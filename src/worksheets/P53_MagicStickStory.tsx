import React, { useState } from 'react';
import { Wand2, Sparkles, BookOpen, Volume2, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface StoryPanel {
  id: number;
  title: string;
  text: string;
  emoji: string;
  character: string;
}

const PANELS: StoryPanel[] = [
  {
    id: 1,
    title: 'The Discovery',
    text: 'Arun found a glowing magic stick under a big ancient tree.',
    emoji: '🪄',
    character: 'Arun'
  },
  {
    id: 2,
    title: 'The Fairy Appears',
    text: 'A radiant fairy appeared and said: "You may use it three times, but use it wisely."',
    emoji: '🧚‍♀️',
    character: 'Fairy'
  },
  {
    id: 3,
    title: 'First Wish: Heavy Buckets',
    text: "He used it to make the struggling farmer's heavy water buckets light as a feather.",
    emoji: '🪣',
    character: 'Farmer'
  },
  {
    id: 4,
    title: 'Second Wish: Village School',
    text: 'He used it again to repair the damaged village school roof and walls for all children.',
    emoji: '🏫',
    character: 'Students'
  },
  {
    id: 5,
    title: 'Final Wish: Plentiful Food',
    text: 'For his last wish, he wished that everyone in the village always have enough nourishing food.',
    emoji: '🌾',
    character: 'Community'
  },
  {
    id: 6,
    title: 'The Greatest Magic',
    text: 'The fairy smiled and declared: "Your selfless kindness is the greatest magic of all."',
    emoji: '⭐',
    character: 'Fairy & Arun'
  }
];

export const P53_MagicStickStory: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const [activePanelId, setActivePanelId] = useState<number>(1);
  const quizAnswers: Record<string, string> = data.quizAnswers || {};
  const personalWish = data.personalWish || '';

  const handleQuizAnswer = (qKey: string, val: string) => {
    if (isCompleted) return;
    onUpdate('quizAnswers', {
      ...quizAnswers,
      [qKey]: val
    });
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const activePanel = PANELS.find(p => p.id === activePanelId) || PANELS[0];

  const q1Correct = quizAnswers.q1 === '3';
  const q2Correct = quizAnswers.q2 === 'food';
  const allAnswered = q1Correct && q2Correct && personalWish.trim().length > 5;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 53 • किलबिल (Moral Story & Comic Sequence)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Wand2 className="w-8 h-8 text-yellow-300" />
            The Magic Stick
          </h2>
          <p className="mt-1 text-purple-100 text-sm sm:text-base max-w-2xl">
            "Kindness is the greatest magic." Read the heartwarming journey of Arun, explore the 6 illustrated story panels, and answer the moral reflection questions!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">✨</div>
      </div>

      {/* 6 Comic Panels Grid */}
      <div className="bg-white rounded-2xl p-6 border-2 border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <h3 className="font-bold text-slate-800 text-base flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Story Panels (Click to read & listen)
          </h3>
          <button
            type="button"
            onClick={() => handleSpeak(activePanel.text)}
            className="text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl hover:bg-purple-100 flex items-center gap-1.5"
          >
            <Volume2 className="w-4 h-4 text-purple-600" /> Listen to Panel
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PANELS.map(panel => {
            const isSelected = activePanelId === panel.id;
            return (
              <button
                key={panel.id}
                type="button"
                onClick={() => {
                  setActivePanelId(panel.id);
                  handleSpeak(panel.text);
                }}
                className={`p-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-between min-h-[140px] ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-300 shadow-md scale-105'
                    : 'border-slate-200 bg-slate-50 hover:bg-purple-50/50'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                  {panel.id}
                </span>
                <span className="text-3xl my-1">{panel.emoji}</span>
                <span className="text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                  {panel.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted active panel spotlight */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-5xl shrink-0 p-3 bg-white rounded-2xl shadow-sm border border-purple-200">
            {activePanel.emoji}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Panel {activePanel.id}: {activePanel.title}
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-800 mt-1 leading-relaxed">
              "{activePanel.text}"
            </p>
          </div>
        </div>
      </div>

      {/* Moral Quote Banner */}
      <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-1 text-center shadow-xs">
        <div className="font-extrabold text-lg flex items-center justify-center gap-2">
          <span>💖</span> Moral: Kindness is the greatest magic.
        </div>
        <p className="text-xs sm:text-sm text-amber-800 max-w-xl mx-auto">
          "When we help others, we make their lives easier and create a happier and kinder world."
        </p>
      </div>

      {/* Comprehension Quiz */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm space-y-5">
        <h3 className="font-bold text-slate-800 text-base flex items-center gap-2 pb-2 border-b border-slate-100">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Comprehension & Reflection Questions
        </h3>

        {/* Q1 */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-slate-800">
            1. How many wishes was Arun granted by the fairy?
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: '1', label: '1 wish only' },
              { id: '3', label: '3 wishes (use wisely)' },
              { id: 'unlimited', label: 'Unlimited wishes' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleQuizAnswer('q1', opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  quizAnswers.q1 === opt.id
                    ? opt.id === '3'
                      ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                      : 'bg-red-500 text-white border-red-600'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Q2 */}
        <div className="space-y-2">
          <label className="block text-xs sm:text-sm font-bold text-slate-800">
            2. What was Arun's third and final wish?
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'palace', label: 'A gold palace for himself' },
              { id: 'food', label: 'That everyone in the village always have enough food' },
              { id: 'powers', label: 'To keep the magic stick forever' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleQuizAnswer('q2', opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  quizAnswers.q2 === opt.id
                    ? opt.id === 'food'
                      ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                      : 'bg-red-500 text-white border-red-600'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Q3: Subjective Personal Wish */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <label className="block text-xs sm:text-sm font-bold text-slate-800">
            3. Personal Reflection: If you found a magic stick with 1 wish to help your school or neighborhood, what would you wish for?
          </label>
          <textarea
            rows={3}
            value={personalWish}
            onChange={(e) => onUpdate('personalWish', e.target.value)}
            placeholder="I would wish for a free community library and garden where every child can read books and play together safely..."
            className="w-full bg-slate-50 rounded-xl border border-slate-300 p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          />
        </div>
      </div>
    </div>
  );
};
