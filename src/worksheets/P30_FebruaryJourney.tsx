import React from 'react';
import { TrendingUp, CheckSquare, Sparkles, Trophy } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const SAVING_SOURCES = [
  { id: 'pocket_money', text: 'मला मिळालेल्या खिशातील पैशांतून मी बचत केली. (Saved from pocket money)' },
  { id: 'gift_money', text: 'भेट म्हणून मिळालेल्या पैशांतून मी बचत केली. (Saved from festive/birthday gifts)' },
  { id: 'avoided_unnecessary', text: 'अनावश्यक वस्तू न घेता पैसे वाचवले. (Avoided unneeded snacks or toys)' },
  { id: 'small_task', text: 'एखादे छोटे काम करून पैसे कमावले. (Earned from small chores or tasks)' },
  { id: 'sold_items', text: 'माझ्याकडे असलेली जुनी वस्तू विकली. (Recycled or sold unused craft/books)' },
  { id: 'household_help', text: 'घरातील कामात मदत करून पैसे मिळवले. (Helped at home)' }
];

export const P30_FebruaryJourney: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const weeklyData = data.weeklyData || {};
  const selectedSources: string[] = data.selectedSources || [];
  const otherSource = data.otherSource || '';
  const milestone = data.milestone || '25%';

  const targetAmount = parseFloat(data.targetAmount || '1500') || 1500;

  // Reflection inputs
  const sacrificeText = data.sacrificeText || '';
  const realizationText = data.realizationText || '';
  const futureHabitText = data.futureHabitText || '';

  const months = [
    { key: 'nov', name: 'नोव्हेंबर (November)' },
    { key: 'dec', name: 'डिसेंबर (December)' },
    { key: 'jan', name: 'जानेवारी (January)' },
    { key: 'feb', name: 'फेब्रुवारी (February)' }
  ];

  const handleWeeklyChange = (monthKey: string, weekIndex: number, field: 'target' | 'saved', value: string) => {
    const monthRecord = weeklyData[monthKey] || {};
    const weekRecord = monthRecord[weekIndex] || {};
    const updated = {
      ...weeklyData,
      [monthKey]: {
        ...monthRecord,
        [weekIndex]: {
          ...weekRecord,
          [field]: value
        }
      }
    };
    onUpdate('weeklyData', updated);
  };

  const toggleSource = (sourceId: string) => {
    if (isCompleted) return;
    const next = selectedSources.includes(sourceId)
      ? selectedSources.filter(s => s !== sourceId)
      : [...selectedSources, sourceId];
    onUpdate('selectedSources', next);
  };

  // Calculate totals
  let totalSavedAllMonths = 0;
  months.forEach(m => {
    const mData = weeklyData[m.key] || {};
    for (let w = 1; w <= 4; w++) {
      const savedVal = parseFloat(mData[w]?.saved || '0') || 0;
      totalSavedAllMonths += savedVal;
    }
  });

  const remainingNeeded = Math.max(0, targetAmount - totalSavedAllMonths);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 30 • ४ महिने • १ ध्येय
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            माझी फेब्रुवारीकडे वाटचाल
          </h2>
          <p className="mt-1 text-indigo-100 text-sm sm:text-base max-w-2xl">
            ४ महिने • १ ध्येय • माझ्या शिक्षणाचा १ महिना (Track weekly savings, identify sources, and celebrate milestone progress!)
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">📈</div>
      </div>

      {/* Section 1: Weekly Savings Table */}
      <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm">
              १
            </span>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">माझी बचत नोंदवा (Weekly Savings Log)</h3>
              <p className="text-xs text-slate-500">Enter weekly target and saved amounts from November to February</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 block">Total Saved So Far</span>
            <span className="text-lg font-black text-indigo-600">₹ {totalSavedAllMonths}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {months.map(m => {
            const mData = weeklyData[m.key] || {};
            let monthTotal = 0;
            for (let w = 1; w <= 4; w++) {
              monthTotal += parseFloat(mData[w]?.saved || '0') || 0;
            }

            return (
              <div key={m.key} className="rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                <div className="bg-slate-100 px-3.5 py-2 flex items-center justify-between font-bold text-xs text-slate-700">
                  <span>{m.name}</span>
                  <span className="text-indigo-600">Month Total: ₹ {monthTotal}</span>
                </div>
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                    <tr>
                      <th className="p-2">आठवडा</th>
                      <th className="p-2">लक्ष्य (₹)</th>
                      <th className="p-2">वाचवले (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[1, 2, 3, 4].map(w => {
                      const row = mData[w] || {};
                      return (
                        <tr key={w}>
                          <td className="p-2 font-semibold text-slate-600">आठवडा {w}</td>
                          <td className="p-2">
                            <input
                              type="number"
                              min="0"
                              value={row.target || ''}
                              onChange={(e) => handleWeeklyChange(m.key, w, 'target', e.target.value)}
                              placeholder="₹"
                              className="w-16 px-1.5 py-1 rounded border border-slate-200 text-right focus:outline-none focus:ring-1 focus:ring-indigo-400"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              type="number"
                              min="0"
                              value={row.saved || ''}
                              onChange={(e) => handleWeeklyChange(m.key, w, 'saved', e.target.value)}
                              placeholder="₹"
                              className="w-16 px-1.5 py-1 rounded border border-indigo-200 font-bold text-indigo-700 text-right focus:outline-none focus:ring-1 focus:ring-indigo-400"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: Sources of Savings Checkboxes */}
      <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
            २
          </span>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">माझी बचत कुठून आली?</h3>
            <p className="text-xs text-slate-500">Where did my savings come from? (Select all that apply)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SAVING_SOURCES.map(source => {
            const checked = selectedSources.includes(source.id);
            return (
              <label
                key={source.id}
                onClick={() => toggleSource(source.id)}
                className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                  checked
                    ? 'border-purple-500 bg-purple-50/70 text-purple-950 font-medium'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {}}
                  className="mt-1 rounded text-purple-600 focus:ring-purple-400 w-4 h-4 cursor-pointer"
                />
                <span className="text-xs leading-relaxed">{source.text}</span>
              </label>
            );
          })}
        </div>

        {/* Other text input */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            इतर कोणताही मार्ग (Any other source):
          </label>
          <input
            type="text"
            value={otherSource}
            onChange={(e) => onUpdate('otherSource', e.target.value)}
            placeholder="उदा. नातेवाईकांनी दिलेले पैसे..."
            className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Section 3 & 5: Progress & Final Objective */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Section 3 */}
        <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">
              ३
            </span>
            <h3 className="font-bold text-slate-800 text-base">माझी प्रगती (My Progress)</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
              <span className="text-slate-600">शिक्षणाचा खर्च (माझे लक्ष्य):</span>
              <span className="font-bold text-slate-800">₹ {targetAmount}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-50 text-indigo-900 font-bold">
              <span>आतापर्यंत केलेली एकूण बचत:</span>
              <span className="text-sm">₹ {totalSavedAllMonths}</span>
            </div>

            <div>
              <span className="font-bold text-slate-700 block mb-2">
                मी माझ्या एका महिन्याच्या खर्चापैकी किती भाग पूर्ण केला?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['25%', '50%', '75%', '100%'].map(pct => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => onUpdate('milestone', pct)}
                    className={`py-2 px-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      milestone === pct
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-102'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {pct} {pct === '100%' && '🏆'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Final Target Balance */}
        <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">
              ५
            </span>
            <h3 className="font-bold text-slate-800 text-base">माझे फेब्रुवारीचे अंतिम उद्दिष्ट</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
              <span className="text-slate-600">मी एकूण केलेली बचत:</span>
              <span className="font-bold text-emerald-600">₹ {totalSavedAllMonths}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
              <span className="text-slate-600">माझे लक्ष्य होते:</span>
              <span className="font-bold text-slate-800">₹ {targetAmount}</span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold">
              <span>अजून आवश्यक रक्कम (Remaining):</span>
              <span className="text-sm font-black">₹ {remainingNeeded}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Reflections */}
      <div className="bg-white rounded-2xl p-6 border-2 border-indigo-100 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm">
            ४
          </span>
          <div>
            <h3 className="font-bold text-slate-800 text-lg">मला काय शिकायला मिळाले? (What Did I Learn?)</h3>
            <p className="text-xs text-slate-500">Reflect on your personal growth, sacrifices, and future habits</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              १. ही बचत करण्यासाठी मला कोणत्या गोष्टींचा त्याग करावा लागला? (What did I sacrifice to save?)
            </label>
            <input
              type="text"
              value={sacrificeText}
              onChange={(e) => onUpdate('sacrificeText', e.target.value)}
              placeholder="उदा. बाहेरचे जंक फूड खाणे टाळले, नको असलेली खेळणी घेतली नाही..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              २. शिक्षणाचा खर्च समजून घेतल्यावर मला काय जाणवले? (What did I realize after learning the true cost of education?)
            </label>
            <input
              type="text"
              value={realizationText}
              onChange={(e) => onUpdate('realizationText', e.target.value)}
              placeholder="उदा. पालकांच्या कष्टांची किंमत समजली, पुस्तकांची अधिक काळजी घेईन..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              ३. मी पुढेही बचतीची कोणती सवय सुरू ठेवणार आहे? (Which saving habit will I continue in the future?)
            </label>
            <input
              type="text"
              value={futureHabitText}
              onChange={(e) => onUpdate('futureHabitText', e.target.value)}
              placeholder="उदा. प्रत्येक महिन्याला ठरवून ठराविक रक्कम गल्ल्यात टाकेन..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
