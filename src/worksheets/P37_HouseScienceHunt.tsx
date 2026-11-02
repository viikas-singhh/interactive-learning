import React from 'react';
import { FlaskConical, Magnet, Zap, CloudSun, Volume2, Sparkles, MoveRight, MoveLeft, Star } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

export const P37_HouseScienceHunt: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const huntData = data.hunt || {};

  const handleItemChange = (category: string, index: number, val: string) => {
    const catData = huntData[category] || {};
    const updated = {
      ...huntData,
      [category]: {
        ...catData,
        [index]: val
      }
    };
    onUpdate('hunt', updated);
  };

  const handleBonusChange = (val: string) => {
    onUpdate('bonus', val);
  };

  const categories = [
    {
      id: 'magnets',
      title: '3 Examples of Magnets',
      count: 3,
      icon: Magnet,
      color: 'from-red-500 to-rose-600',
      bgColor: 'border-red-200 bg-red-50/40',
      hints: ['Fridge magnets', 'Cupboard magnetic catch', 'Pencil box latch', 'Speaker inside radio']
    },
    {
      id: 'electricity',
      title: '3 Things That Use Electricity',
      count: 3,
      icon: Zap,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'border-amber-200 bg-amber-50/40',
      hints: ['Ceiling fan', 'Refrigerator', 'Electric kettle', 'Television', 'Microwave']
    },
    {
      id: 'evaporation',
      title: '2 Examples of Evaporation',
      count: 2,
      icon: CloudSun,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'border-sky-200 bg-sky-50/40',
      hints: ['Wet clothes drying in sun', 'Boiling water steam', 'Mopped floor drying', 'Hand sanitizer evaporating']
    },
    {
      id: 'sound',
      title: '2 Things That Produce Sound',
      count: 2,
      icon: Volume2,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'border-purple-200 bg-purple-50/40',
      hints: ['Doorbell chime', 'Mixer grinder', 'Wall clock ticking', 'Guitar strings']
    },
    {
      id: 'reflection',
      title: '2 Examples of Reflection',
      count: 2,
      icon: Sparkles,
      color: 'from-teal-500 to-emerald-600',
      bgColor: 'border-teal-200 bg-teal-50/40',
      hints: ['Bathroom mirror', 'Shiny stainless steel spoon', 'Calm water in a bowl', 'Car rear-view mirror']
    },
    {
      id: 'push',
      title: '1 Example of a Push',
      count: 1,
      icon: MoveRight,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'border-blue-200 bg-blue-50/40',
      hints: ['Pushing a heavy table', 'Pushing closed a door', 'Pressing keyboard keys', 'Riding a bicycle pedal']
    },
    {
      id: 'pull',
      title: '1 Example of a Pull',
      count: 1,
      icon: MoveLeft,
      color: 'from-violet-600 to-purple-600',
      bgColor: 'border-violet-200 bg-violet-50/40',
      hints: ['Opening a desk drawer', 'Pulling up socks', 'Pulling a window curtain', 'Zipping up a school bag']
    }
  ];

  // Calculate discoveries
  let filledCount = 0;
  categories.forEach(cat => {
    const catVals = huntData[cat.id] || {};
    for (let i = 1; i <= cat.count; i++) {
      if (catVals[i]?.trim()) filledCount++;
    }
  });
  if (data.bonus?.trim()) filledCount++;

  const totalRequired = 14 + 1; // 14 items + 1 bonus = 15

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 37 • घरातील विज्ञान शोध
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <FlaskConical className="w-8 h-8 text-cyan-200" />
            Science in My House Hunt
          </h2>
          <p className="mt-1 text-teal-100 text-sm sm:text-base max-w-2xl">
            Instead of doing a formal lab test, turn your own home into a science laboratory! Look around and document real-life physics and chemistry principles at work.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🔬</div>
      </div>

      {/* Discovery Counter Bar */}
      <div className="bg-white rounded-2xl p-4 border-2 border-teal-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500 text-white font-bold text-sm">
            🔭
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Lab Notebook Status</div>
            <div className="text-base font-bold text-slate-800">
              {filledCount} of {totalRequired} Scientific Discoveries Recorded
            </div>
          </div>
        </div>
        <div className="w-32 bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${(filledCount / totalRequired) * 100}%` }}
          />
        </div>
      </div>

      {/* Science Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const catVals = huntData[cat.id] || {};

          return (
            <div key={cat.id} className={`p-5 rounded-2xl border-2 ${cat.bgColor} shadow-2xs space-y-3`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-lg text-white bg-gradient-to-r ${cat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">{cat.title}</h3>
                </div>
              </div>

              {/* Quick hints */}
              <div className="flex flex-wrap gap-1">
                {cat.hints.slice(0, 3).map((hint, hIdx) => (
                  <button
                    key={hIdx}
                    type="button"
                    onClick={() => {
                      for (let i = 1; i <= cat.count; i++) {
                        if (!catVals[i]) {
                          handleItemChange(cat.id, i, hint);
                          break;
                        }
                      }
                    }}
                    className="text-[10px] bg-white/80 hover:bg-white text-slate-600 px-2 py-0.5 rounded-md border border-slate-200 transition-all cursor-pointer"
                  >
                    + {hint}
                  </button>
                ))}
              </div>

              {/* Numbered input fields */}
              <div className="space-y-2 pt-1">
                {Array.from({ length: cat.count }).map((_, i) => {
                  const num = i + 1;
                  return (
                    <div key={num} className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-400 w-4">{num}.</span>
                      <input
                        type="text"
                        value={catVals[num] || ''}
                        onChange={(e) => handleItemChange(cat.id, num, e.target.value)}
                        placeholder={`Name object / observation #${num}...`}
                        className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Bonus Challenge Card */}
        <div className="p-5 rounded-2xl border-2 border-amber-300 bg-amber-50/60 shadow-2xs space-y-3 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-amber-500 text-white font-bold">
              <Star className="w-5 h-5 fill-white" />
            </span>
            <div>
              <h3 className="font-bold text-amber-950 text-base">
                ⭐ Bonus Discovery: Uses More Than One Scientific Principle!
              </h3>
              <p className="text-xs text-amber-800">
                Can you find a machine or object at home that combines multiple principles? (e.g. Electric Kettle: uses Electricity + Evaporation + Sound)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Electric Kettle (Electricity + Evaporation + Sound)',
              'Refrigerator (Electricity + Magnets + Heat Transfer)',
              'Bicycle (Push + Pull + Wheels & Axles)',
              'Hair Dryer (Electricity + Heat + Sound)'
            ].map((sug, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => handleBonusChange(sug)}
                className="text-xs bg-white text-amber-900 border border-amber-300 px-3 py-1 rounded-xl hover:bg-amber-100 transition-all font-medium cursor-pointer"
              >
                + {sug}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={data.bonus || ''}
            onChange={(e) => handleBonusChange(e.target.value)}
            placeholder="Write your bonus discovery and what principles it combines..."
            className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-300 text-sm bg-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
      </div>
    </div>
  );
};
