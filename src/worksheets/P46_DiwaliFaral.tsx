import React from 'react';
import { UtensilsCrossed, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

interface SweetItem {
  id: string;
  name: string;
  marathi: string;
  emoji: string;
  colorHint: string;
  tasteHint: string;
  tasteSuggestions: string[];
}

const FARAL_ITEMS: SweetItem[] = [
  {
    id: 'chakli',
    name: 'Chakli',
    marathi: 'चकली',
    emoji: '🌀',
    colorHint: 'Golden Brown',
    tasteHint: 'Crispy, crunchy, and mildly spicy with cumin & sesame',
    tasteSuggestions: ['Crispy & Crunchy', 'Spicy & Savory', 'Sesame-flavored']
  },
  {
    id: 'ladoo',
    name: 'Ladoo',
    marathi: 'लाडू (रवा / बुंदी)',
    emoji: '🟡',
    colorHint: 'Golden Yellow / Orange',
    tasteHint: 'Sweet, melt-in-mouth, cardamom and ghee aroma',
    tasteSuggestions: ['Sweet & Ghee aroma', 'Melt-in-mouth', 'Cardamom-spiced']
  },
  {
    id: 'karanji',
    name: 'Karanji',
    marathi: 'करंजी',
    emoji: '🥟',
    colorHint: 'Golden Cream',
    tasteHint: 'Crisp flaky pastry with sweet dry coconut and cardamom stuffing',
    tasteSuggestions: ['Flaky & Crispy', 'Sweet Coconut Filling', 'Nutty Dry Fruits']
  },
  {
    id: 'shankarpali',
    name: 'Shankarpali',
    marathi: 'शंकरपाळी',
    emoji: '💎',
    colorHint: 'Light Golden / Cream',
    tasteHint: 'Sweet, buttery, tender and crispy diamond bites',
    tasteSuggestions: ['Mildly Sweet', 'Buttery & Tender', 'Crisp Diamond Bites']
  },
  {
    id: 'besan_ladoo',
    name: 'Besan Ladoo',
    marathi: 'बेसन लाडू',
    emoji: '🟠',
    colorHint: 'Rich Yellowish-Brown',
    tasteHint: 'Roasted gram flour with aromatic pure desi ghee and crunchy dry fruits',
    tasteSuggestions: ['Roasted Nutty Flavor', 'Rich Desi Ghee', 'Smooth & Sweet']
  },
  {
    id: 'anarsa',
    name: 'Anarsa',
    marathi: 'अनारसा',
    emoji: '🍪',
    colorHint: 'Deep Brown with White Poppy Seeds',
    tasteHint: 'Sweet, jaggery fermented rice pastry with crunchy poppy seeds (खसखस)',
    tasteSuggestions: ['Sweet Jaggery', 'Crunchy Poppy Seeds', 'Traditional Crispy']
  },
  {
    id: 'kaju_katli',
    name: 'Kaju Katli',
    marathi: 'काजू कतली',
    emoji: '✨',
    colorHint: 'Silvery White / Pale Cashew',
    tasteHint: 'Rich, smooth, decadent cashew fudge that dissolves on the tongue',
    tasteSuggestions: ['Rich Cashew', 'Velvety Smooth', 'Melt-in-Mouth Sweet']
  },
  {
    id: 'chivda',
    name: 'Chivda',
    marathi: 'चिवडा',
    emoji: '🥣',
    colorHint: 'Bright Yellow with Green Curry Leaves',
    tasteHint: 'Crunchy roasted poha, peanuts, fried curry leaves and tangy spices',
    tasteSuggestions: ['Crunchy & Tangy', 'Mildly Spiced Poha', 'Peanuts & Curry Leaves']
  },
  {
    id: 'dink_ladoo',
    name: 'Dink Ladoo',
    marathi: 'डिंक लाडू',
    emoji: '🟤',
    colorHint: 'Warm Brown / Dry Fruit Mix',
    tasteHint: 'Nutritious edible gum (dink) with almonds, dates, dry coconut and jaggery',
    tasteSuggestions: ['Nutritious & Chewy', 'Warm Jaggery & Dry Fruits', 'Healthy Energy']
  }
];

export const P46_DiwaliFaral: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const faralRecords: Record<string, { color: string; taste: string }> = data.faralRecords || {};

  const handleFieldChange = (sweetId: string, field: 'color' | 'taste', value: string) => {
    const cur = faralRecords[sweetId] || { color: '', taste: '' };
    onUpdate('faralRecords', {
      ...faralRecords,
      [sweetId]: {
        ...cur,
        [field]: value
      }
    });
  };

  const filledCount = FARAL_ITEMS.filter(item => {
    const r = faralRecords[item.id];
    return r?.color?.trim() && r?.taste?.trim();
  }).length;

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 46 • बालविकास (Diwali Faral)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-2">
            <UtensilsCrossed className="w-8 h-8 text-amber-200" />
            Diwali Faral (Traditional Sweets)
          </h2>
          <p className="mt-1 text-amber-100 text-sm sm:text-base max-w-2xl">
            "Little bites of happiness in every Diwali!" Look at the 9 authentic traditional delicacies below. Describe their vibrant colours and delicious taste profiles.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">🍩</div>
      </div>

      {/* Progress status */}
      <div className="bg-white rounded-2xl p-4 border-2 border-amber-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🪔</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Sweet Platter Progress</div>
            <div className="text-sm sm:text-base font-bold text-slate-800">
              {filledCount} of {FARAL_ITEMS.length} Delicacies Fully Described
            </div>
          </div>
        </div>
        <div className="w-32 bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
            style={{ width: `${(filledCount / FARAL_ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 9 Sweets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FARAL_ITEMS.map((sweet, idx) => {
          const record = faralRecords[sweet.id] || { color: '', taste: '' };
          const isDone = record.color.trim() && record.taste.trim();

          return (
            <div
              key={sweet.id}
              className={`p-5 rounded-2xl border-2 transition-all bg-white shadow-sm space-y-3 ${
                isDone ? 'border-amber-400 bg-amber-50/20' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{sweet.emoji}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">{sweet.name}</h3>
                    <p className="text-xs text-amber-700 font-semibold">{sweet.marathi}</p>
                  </div>
                </div>
                {isDone && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
              </div>

              {/* Color Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Colour (रंग):</label>
                  <button
                    type="button"
                    onClick={() => handleFieldChange(sweet.id, 'color', sweet.colorHint)}
                    className="text-[10px] text-amber-600 hover:underline cursor-pointer"
                  >
                    💡 {sweet.colorHint}
                  </button>
                </div>
                <input
                  type="text"
                  value={record.color}
                  onChange={(e) => handleFieldChange(sweet.id, 'color', e.target.value)}
                  placeholder="e.g. Golden brown, saffron yellow..."
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              {/* Taste Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Tastes like (चव):</label>
                  <button
                    type="button"
                    onClick={() => handleFieldChange(sweet.id, 'taste', sweet.tasteHint)}
                    className="text-[10px] text-amber-600 hover:underline cursor-pointer"
                  >
                    💡 Auto-fill
                  </button>
                </div>

                {/* Taste suggestion chips */}
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {sweet.tasteSuggestions.map((tSug, sIdx) => (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={() => {
                        const cur = record.taste ? `${record.taste}, ${tSug}` : tSug;
                        handleFieldChange(sweet.id, 'taste', cur);
                      }}
                      className="text-[9px] bg-slate-100 hover:bg-amber-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 transition-colors cursor-pointer"
                    >
                      + {tSug}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  value={record.taste}
                  onChange={(e) => handleFieldChange(sweet.id, 'taste', e.target.value)}
                  placeholder="e.g. Crispy and sweet with cardamom..."
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-amber-400 focus:outline-none"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
