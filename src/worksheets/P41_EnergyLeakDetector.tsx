import React from 'react';
import { BatteryCharging, Droplet, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const COMMON_GIVERS = [
  'Deep 8-hour sleep 💤',
  'Playing outside with friends ⚽',
  'Healthy homemade fruit & food 🍎',
  'Listening to calm music 🎵',
  'Drawing or painting 🎨',
  'Hugging parents or pets 🐶'
];

const COMMON_LEAKS = [
  'Endless phone/screen scrolling 📱',
  'Worrying about what others think 💭',
  'Arguments or yelling 🗣️',
  'Staying up too late 🌙',
  'Procrastinating on homework ⏳',
  'Skipping meals or water 🥤'
];

export const P41_EnergyLeakDetector: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const insideBucket = data.insideBucket || '';
  const leaks: Record<string, string> = data.leaks || {
    leak1: '',
    leak2: '',
    leak3: '',
    leak4: '',
    leak5: ''
  };

  const handleLeakChange = (leakKey: string, val: string) => {
    onUpdate('leaks', {
      ...leaks,
      [leakKey]: val
    });
  };

  const addGiver = (g: string) => {
    const current = insideBucket.trim();
    const next = current ? `${current}\n• ${g}` : `• ${g}`;
    onUpdate('insideBucket', next);
  };

  const addLeak = (leakKey: string, text: string) => {
    handleLeakChange(leakKey, text);
  };

  const leaksCount = Object.values(leaks).filter((v: any) => v && v.trim()).length;
  const hasGivers = insideBucket.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 41 • भावनिक आरोग्य (Emotional Well-being)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <BatteryCharging className="w-8 h-8 text-cyan-200" />
            Energy Leak Detector
          </h2>
          <p className="mt-1 text-cyan-100 text-sm sm:text-base max-w-2xl">
            Identify what charges your inner battery, and spot the 5 sneaky leaks that quietly drain your physical and mental energy each day!
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🪣</div>
      </div>

      {/* Suggestion Chips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-2xs space-y-2">
          <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Energy Givers (Click to add inside bucket)</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {COMMON_GIVERS.map((cg, i) => (
              <button
                key={i}
                type="button"
                onClick={() => addGiver(cg)}
                className="text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-lg border border-emerald-200 transition-all cursor-pointer"
              >
                + {cg}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-rose-200 shadow-2xs space-y-2">
          <div className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>Common Energy Leaks (Quick fill empty leaks)</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {COMMON_LEAKS.map((cl, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  for (let k = 1; k <= 5; k++) {
                    const key = `leak${k}`;
                    if (!leaks[key]) {
                      addLeak(key, cl);
                      break;
                    }
                  }
                }}
                className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-900 px-2.5 py-1 rounded-lg border border-rose-200 transition-all cursor-pointer"
              >
                + {cl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Bucket Canvas */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-bold text-slate-800 text-lg">My Energy Bucket</h3>
          <p className="text-xs text-slate-500">
            Write what gives you strength inside the bucket. Identify the 5 leaks draining away your energy around it!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Leaks 1 & 2 */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-4 rounded-2xl border-2 border-rose-200 bg-rose-50/50 shadow-2xs space-y-1.5">
              <div className="text-xs font-bold text-rose-700 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 rotate-180 text-rose-500 fill-rose-500" />
                <span>LEAK 1</span>
              </div>
              <textarea
                rows={2}
                value={leaks.leak1 || ''}
                onChange={(e) => handleLeakChange('leak1', e.target.value)}
                placeholder="What's draining your energy here? (e.g. Too much screentime)"
                className="w-full bg-white rounded-xl border border-rose-200 p-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              />
            </div>

            <div className="p-4 rounded-2xl border-2 border-rose-200 bg-rose-50/50 shadow-2xs space-y-1.5">
              <div className="text-xs font-bold text-rose-700 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 rotate-180 text-rose-500 fill-rose-500" />
                <span>LEAK 2</span>
              </div>
              <textarea
                rows={2}
                value={leaks.leak2 || ''}
                onChange={(e) => handleLeakChange('leak2', e.target.value)}
                placeholder="What's draining your energy here? (e.g. Skipping breakfast)"
                className="w-full bg-white rounded-xl border border-rose-200 p-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              />
            </div>
          </div>

          {/* Central Illustrated Bucket */}
          <div className="lg:col-span-6 bg-gradient-to-b from-sky-50 via-slate-50 to-blue-50/50 rounded-3xl border-4 border-slate-300 p-6 shadow-inner relative flex flex-col justify-between min-h-[360px]">
            {/* Top Rim of Bucket */}
            <div className="w-full h-8 rounded-full border-2 border-slate-400 bg-slate-200 shadow-inner flex items-center justify-center font-bold text-xs text-slate-600 uppercase tracking-widest">
              ✨ INSIDE THE BUCKET ✨
            </div>

            <div className="my-4 space-y-2">
              <label className="block text-center font-bold text-slate-800 text-sm">
                What gives me energy? (मला कशाने ऊर्जा मिळते?)
              </label>
              <textarea
                rows={7}
                value={insideBucket}
                onChange={(e) => onUpdate('insideBucket', e.target.value)}
                placeholder="Write your positive habits, restful sleep, games with friends, healthy snacks, loving family talks..."
                className="w-full bg-white/90 rounded-2xl border-2 border-sky-300 p-3.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none shadow-sm placeholder:text-slate-400 leading-relaxed"
              />
            </div>

            {/* Bottom Base */}
            <div className="w-3/4 mx-auto h-4 rounded-b-xl border-t-2 border-slate-300 bg-slate-200/80" />
          </div>

          {/* Right Leaks 3, 4, 5 */}
          <div className="lg:col-span-3 space-y-3">
            <div className="p-3.5 rounded-2xl border-2 border-rose-200 bg-rose-50/50 shadow-2xs space-y-1">
              <div className="text-xs font-bold text-rose-700 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 rotate-180 text-rose-500 fill-rose-500" />
                <span>LEAK 3</span>
              </div>
              <textarea
                rows={2}
                value={leaks.leak3 || ''}
                onChange={(e) => handleLeakChange('leak3', e.target.value)}
                placeholder="e.g. Overthinking tests"
                className="w-full bg-white rounded-xl border border-rose-200 p-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl border-2 border-rose-200 bg-rose-50/50 shadow-2xs space-y-1">
              <div className="text-xs font-bold text-rose-700 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 rotate-180 text-rose-500 fill-rose-500" />
                <span>LEAK 4</span>
              </div>
              <textarea
                rows={2}
                value={leaks.leak4 || ''}
                onChange={(e) => handleLeakChange('leak4', e.target.value)}
                placeholder="e.g. Messy room clutter"
                className="w-full bg-white rounded-xl border border-rose-200 p-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              />
            </div>

            <div className="p-3.5 rounded-2xl border-2 border-rose-200 bg-rose-50/50 shadow-2xs space-y-1">
              <div className="text-xs font-bold text-rose-700 flex items-center gap-1">
                <Droplet className="w-3.5 h-3.5 rotate-180 text-rose-500 fill-rose-500" />
                <span>LEAK 5</span>
              </div>
              <textarea
                rows={2}
                value={leaks.leak5 || ''}
                onChange={(e) => handleLeakChange('leak5', e.target.value)}
                placeholder="e.g. Forgetting to drink water"
                className="w-full bg-white rounded-xl border border-rose-200 p-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Protection Tip */}
        <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center gap-3 text-cyan-900 text-xs font-medium">
          <ShieldCheck className="w-6 h-6 text-cyan-600 shrink-0" />
          <span>
            <strong>Mindful Awareness Rule:</strong> Whenever you notice a leak, don't judge yourself. Pause, take three slow deep breaths, and plug it with one of your energy-giving activities!
          </span>
        </div>
      </div>
    </div>
  );
};
