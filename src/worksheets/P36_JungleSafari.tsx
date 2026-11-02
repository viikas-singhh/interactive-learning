import React from 'react';
import { Compass, BookOpen, Sparkles, Volume2, Type } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const WORD_BANK = [
  { word: 'binoculars', icon: '🔭' },
  { word: 'mighty elephant', icon: '🐘' },
  { word: 'chattering monkeys', icon: '🐒' },
  { word: 'hidden tiger', icon: '🐅' },
  { word: 'rushing crystal river', icon: '🌊' },
  { word: 'giant canopy trees', icon: '🌴' },
  { word: 'colorful parrots', icon: '🦜' },
  { word: 'wooden bridge', icon: '🪵' },
  { word: 'fluttering butterflies', icon: '🦋' },
  { word: 'footprints', icon: '🐾' }
];

export const P36_JungleSafari: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const storyTitle = data.storyTitle || '';
  const storyContent = data.storyContent || '';

  const words = storyContent.trim() ? storyContent.trim().split(/\s+/).length : 0;
  const chars = storyContent.length;

  const insertWord = (w: string) => {
    const spacer = storyContent.length > 0 && !storyContent.endsWith(' ') ? ' ' : '';
    onUpdate('storyContent', storyContent + spacer + w + ' ');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 36 • उमलताना (Creative Writing)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <Compass className="w-8 h-8 text-yellow-300" />
            Jungle Safari Adventure
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base max-w-2xl">
            Imagine you are on an exciting jungle safari adventure with your explorer friends! Write a creative story describing the animals you see, crossing the river, the tall trees, and all your adventures.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🦁</div>
      </div>

      {/* Explorer's Word Bank */}
      <div className="bg-white rounded-2xl p-5 border-2 border-emerald-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Explorer's Word Bank (Click to insert into your story)</span>
          </h3>
          <span className="text-xs text-slate-400">10 helpful terms</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {WORD_BANK.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => insertWord(item.word)}
              className="px-3 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-102 cursor-pointer"
            >
              <span>{item.icon}</span>
              <span>{item.word}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Writing Pad */}
      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-md space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            My Story Title:
          </label>
          <input
            type="text"
            value={storyTitle}
            onChange={(e) => onUpdate('storyTitle', e.target.value)}
            placeholder="e.g. The Secret of the Whispering Banyan Tree"
            className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-300 text-base font-bold text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        {/* Lined Notebook Pad */}
        <div className="relative rounded-2xl border-2 border-emerald-200 bg-amber-50/20 p-4 shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-2 border-b border-dashed border-slate-300">
            <span className="flex items-center gap-1 text-emerald-700 font-bold">
              <BookOpen className="w-4 h-4" /> Young Author Manuscript
            </span>
            <div className="flex items-center gap-3">
              <span>{words} Words</span>
              <span>•</span>
              <span>{chars} Characters</span>
            </div>
          </div>

          <textarea
            rows={10}
            value={storyContent}
            onChange={(e) => onUpdate('storyContent', e.target.value)}
            placeholder="Early one misty morning, my friends and I put on our safari hats and boarded our sturdy jeep. Deep inside the lush green forest, we heard a sudden rustle in the tall grass..."
            className="w-full bg-transparent p-2 text-slate-800 text-base leading-loose focus:outline-none resize-none notebook-lines placeholder:text-slate-400"
          />
        </div>

        {/* Story Prompts Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div>
            <strong className="block text-emerald-700 mb-0.5">🐾 1. The Animals:</strong>
            What did the playful monkeys or stealthy tigers do? How did they sound?
          </div>
          <div>
            <strong className="block text-emerald-700 mb-0.5">🌊 2. The River Crossing:</strong>
            Was the river water cold? How did your team cross safely together?
          </div>
          <div>
            <strong className="block text-emerald-700 mb-0.5">🌳 3. The Discovery:</strong>
            What surprise did you find beneath the giant ancient canopy trees?
          </div>
        </div>
      </div>
    </div>
  );
};
