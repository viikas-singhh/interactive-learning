import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { CheckCircle2, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const VALUES_GRID = [
  ['Kindness', 'Patience', 'Responsibility', 'Helping'],
  ['Honesty', 'Creativity', 'Respect', 'Fairness'],
  ['Courage', 'Friendship', 'Teamwork', 'Gratitude']
];

const PRESET_ACTIONS: Record<string, string[]> = {
  Kindness: ['Helped a crying friend 😊', 'Shared my crayons 🖍️', 'Fed a stray puppy 🐶'],
  Patience: ['Waited nicely in line ⏳', 'Listened to my teacher 👂', 'Shared the swing 🎠'],
  Responsibility: ['Cleaned up my toys 🧸', 'Packed my school bag 🎒', 'Watered the plants 🌱'],
  Helping: ['Helped Mommy set the table 🍽️', 'Carried groceries 🛍️', 'Helped friend tie shoe 👟'],
  Honesty: ['Told the truth when I broke a cup 🥛', 'Admitted my mistake 🙏', 'Returned lost pencil ✏️'],
  Creativity: ['Drew a colorful rainbow 🌈', 'Built a tall block tower 🏰', 'Made a paper boat ⛵'],
  Respect: ['Greeted grandparents nicely 🙏', 'Said please and thank you ✨', 'Listened when others spoke 👂'],
  Fairness: ['Took turns playing game 🎲', 'Shared snacks equally 🍪', 'Followed the playground rules 📜'],
  Courage: ['Tried riding bicycle alone 🚲', 'Raised hand to speak in class 🙋', 'Slept in my room without fear 🌙'],
  Friendship: ['Invited new boy to play ⚽', 'Gave friend a warm hug 🤗', 'Comforted sad classmate 💖'],
  Teamwork: ['Built puzzle with sister 🧩', 'Cleaned room together 🧹', 'Won team race 🏆'],
  Gratitude: ['Said thank you to parents 💌', 'Thanked bus driver 🚌', 'Thanked friends for playing 🌟']
};

const FEELING_STAMPS = [
  { emoji: '😊', text: 'Proud & Happy' },
  { emoji: '💖', text: 'Loved & Warm' },
  { emoji: '🌟', text: 'Calm & Peaceful' },
  { emoji: '🤗', text: 'Kind & Friendly' }
];

export const P39_ValuesPicker: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const selectedValues: string[] = data.selectedValues || [];
  const action1 = data.action1 || '';
  const action2 = data.action2 || '';
  const action3 = data.action3 || '';
  const feelResponse = data.feelResponse || '';

  const handleToggleValue = (val: string) => {
    if (selectedValues.includes(val)) {
      onUpdate('selectedValues', selectedValues.filter(v => v !== val));
    } else {
      if (selectedValues.length >= 3) {
        // Replace oldest or swap
        onUpdate('selectedValues', [...selectedValues.slice(1), val]);
      } else {
        onUpdate('selectedValues', [...selectedValues, val]);
      }
    }
  };

  const handleClear = () => {
    onUpdate('selectedValues', []);
    onUpdate('action1', '');
    onUpdate('action2', '');
    onUpdate('action3', '');
    onUpdate('feelResponse', '');
  };

  const isExactThree = selectedValues.length === 3;
  const audioPrompt = "Values are the things that are important to us. Tap any three values to circle them with your crayon. Then tell us how you used them and how they made you feel!";

  return (
    <WorksheetFrame pageNumber={39} categoryTag="उमलताना" audioPromptText={audioPrompt}>
      <div className="space-y-4 sm:space-y-6 font-friendly text-slate-900">
        {/* Top Instructions Rounded Box */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-5 text-center shadow-xs">
          <p className="text-sm sm:text-base md:text-lg font-bold leading-relaxed text-slate-800">
            Values are the things that are important to us and help guide how we behave. In this worksheet, you'll choose three values and think about how you've used them recently. Let's explore how they make you feel and why they matter to you!
          </p>
        </div>

        {/* Banner: "Circle 3 of Your Values" */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl font-black">彡</span>
            <div className="px-6 py-1.5 rounded-full border-2 border-slate-900 bg-slate-100 font-extrabold text-lg sm:text-2xl tracking-wide shadow-xs">
              Circle 3 of Your Values
            </div>
            <span className="text-xl font-black">ミ</span>
          </div>

          <div className="text-center">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              isExactThree ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}>
              {selectedValues.length === 3 ? '🎉 3 Values Circled!' : `Tap to circle 3 values (${selectedValues.length} / 3 selected)`}
            </span>
          </div>

          {/* 12 Values Grid - Exact Printed Appearance */}
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-2 text-center">
              {VALUES_GRID.flat().map(val => {
                const isSelected = selectedValues.includes(val);
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleToggleValue(val)}
                    className="relative py-2 px-1 focus:outline-none group flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-base sm:text-xl font-black tracking-wide text-slate-900 transition-colors group-hover:text-amber-600">
                      {val}
                    </span>

                    {/* Hand-Drawn Crayon Circle SVG Overlay */}
                    {isSelected && (
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none -rotate-2 scale-110"
                        viewBox="0 0 160 50"
                        preserveAspectRatio="none"
                      >
                        <ellipse
                          cx="80"
                          cy="25"
                          rx="72"
                          ry="20"
                          fill="rgba(239, 68, 68, 0.08)"
                          stroke="#ef4444"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeDasharray="180 5"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle Two Rounded Boxes: Values in Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {/* Left Box: Explanation */}
          <div className="md:col-span-5 rounded-2xl border-2 border-slate-900 bg-white p-4 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-center gap-1.5 pb-2 mb-2 border-b border-slate-200">
              <span className="text-base font-black">彡</span>
              <span className="font-extrabold text-base sm:text-lg">Values in Action</span>
              <span className="text-base font-black">ミ</span>
            </div>

            <div className="flex-1 flex items-center justify-center text-center p-3">
              <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-800">
                Write the three values you circled and describe a recent event where you showed each one.
              </p>
            </div>

            <div className="text-center text-xs text-amber-700 font-bold hidden md:block">
              ➔ Look to the right lines ➔
            </div>
          </div>

          {/* Right Box: 1, 2, 3 Ruled Lines */}
          <div className="md:col-span-7 rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-center gap-1.5 pb-2 border-b border-slate-200">
              <span className="text-base font-black">彡</span>
              <span className="font-extrabold text-base sm:text-lg">Values in Action</span>
              <span className="text-base font-black">ミ</span>
            </div>

            <div className="space-y-4">
              {[
                { num: 1, val: selectedValues[0], text: action1, field: 'action1' },
                { num: 2, val: selectedValues[1], text: action2, field: 'action2' },
                { num: 3, val: selectedValues[2], text: action3, field: 'action3' }
              ].map(item => (
                <div key={item.num} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-lg text-slate-900">{item.num}.</span>
                    <span className="font-black text-base text-amber-700">
                      {item.val || <span className="text-slate-400 font-normal italic">Value #{item.num}</span>}
                    </span>
                  </div>

                  {/* LKG/UKG Easy Tap Suggestions */}
                  {item.val && PRESET_ACTIONS[item.val] && (
                    <div className="flex flex-wrap gap-1 py-1">
                      {PRESET_ACTIONS[item.val].map((act, aIdx) => (
                        <button
                          key={aIdx}
                          type="button"
                          onClick={() => onUpdate(item.field, act)}
                          className="text-[11px] bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md border border-amber-300 transition-colors"
                        >
                          + {act}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Ruled Notebook Line Input */}
                  <div className="border-b-2 border-slate-400 focus-within:border-amber-500 py-1">
                    <input
                      type="text"
                      value={item.text}
                      onChange={(e) => onUpdate(item.field, e.target.value)}
                      placeholder={item.val ? `e.g. When showing ${item.val}, I...` : `Write an example or circle value #${item.num} above...`}
                      className="w-full bg-transparent text-sm sm:text-base font-bold text-slate-900 focus:outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Box: How did showing these values make you feel? */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 sm:p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-center gap-1.5 pb-2 border-b border-slate-200">
            <span className="text-base font-black">彡</span>
            <span className="font-extrabold text-base sm:text-lg">
              How did showing these values make you feel?
            </span>
            <span className="text-base font-black">ミ</span>
          </div>

          {/* Quick Feeling Stamps for Kids */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold text-slate-500">Tap a feeling:</span>
            {FEELING_STAMPS.map(stamp => (
              <button
                key={stamp.text}
                type="button"
                onClick={() => {
                  const current = feelResponse ? `${feelResponse} • ${stamp.emoji} ${stamp.text}` : `${stamp.emoji} ${stamp.text}`;
                  onUpdate('feelResponse', current);
                }}
                className="px-3 py-1 rounded-full border border-slate-300 hover:border-amber-400 bg-slate-50 hover:bg-amber-50 text-xs font-bold text-slate-800 transition-all flex items-center gap-1"
              >
                <span>{stamp.emoji}</span>
                <span>{stamp.text}</span>
              </button>
            ))}
          </div>

          {/* Ruled lines */}
          <div className="space-y-2 pt-1">
            <div className="border-b-2 border-slate-400 py-1">
              <input
                type="text"
                value={feelResponse}
                onChange={(e) => onUpdate('feelResponse', e.target.value)}
                placeholder="I felt very happy and proud inside because..."
                className="w-full bg-transparent text-sm sm:text-base font-bold text-slate-900 focus:outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="border-b-2 border-slate-300 h-6" />
          </div>
        </div>

        {/* Clean Controls Bar */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Erase Crayon Marks
          </button>

          {isExactThree && (
            <div className="flex items-center gap-1 text-emerald-700 font-black text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Great Job! Worksheet Ready</span>
            </div>
          )}
        </div>
      </div>
    </WorksheetFrame>
  );
};
