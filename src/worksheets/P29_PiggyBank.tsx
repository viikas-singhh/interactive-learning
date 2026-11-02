import React from 'react';
import { PiggyBank, Calculator, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

const GULLAK_TYPES = [
  { id: 'tin', label: 'जुना डबा', eng: 'Old Tin Can', emoji: '🥫' },
  { id: 'box', label: 'कार्डबोर्ड बॉक्स', eng: 'Cardboard Box', emoji: '📦' },
  { id: 'bottle', label: 'रिकामी बाटली', eng: 'Empty Bottle', emoji: '🧴' },
  { id: 'jar', label: 'काचेची बरणी', eng: 'Glass Jar', emoji: '🫙' },
  { id: 'safe', label: 'सुरक्षित डबी', eng: 'Safe Container', emoji: '🪙' }
];

export const P29_PiggyBank: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const gullakType = data.gullakType || 'jar';
  const gullakName = data.gullakName !== undefined ? data.gullakName : 'माझ्या शिक्षणाचा गल्ला';
  const dateCreated = data.dateCreated || new Date().toISOString().split('T')[0];
  const firstSavings = data.firstSavings || '';

  // Expense fields
  const schoolFee = parseFloat(data.schoolFee || '0') || 0;
  const booksFee = parseFloat(data.booksFee || '0') || 0;
  const transportFee = parseFloat(data.transportFee || '0') || 0;
  const otherFee = parseFloat(data.otherFee || '0') || 0;

  const totalMonthlyCost = schoolFee + booksFee + transportFee + otherFee;
  const targetGoal = data.targetGoal || (totalMonthlyCost > 0 ? totalMonthlyCost : '');

  const handleExpenseChange = (field: string, val: string) => {
    onUpdate(field, val);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Page 29 • आर्थिक साक्षरता (Financial Responsibility)
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            माझ्या एका महिन्याच्या शिक्षणाची जबाबदारी
          </h2>
          <p className="mt-1 text-emerald-100 text-sm sm:text-base max-w-2xl">
            "मी माझ्या शिक्षणाचा एक महिना स्वतः प्रायोजित करू शकतो/शकते का?"
            (Can I sponsor 1 month of my own education? Build your DIY Gullak and calculate real expenses!)
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none text-9xl">💰</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Step 1: Gullak Maker */}
        <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <span className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm">
              १
            </span>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">माझा गल्ला आजच तयार करा</h3>
              <p className="text-xs text-slate-500">Create your DIY Gullak from household containers</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 font-medium">
            नवीन गल्ला विकत घेण्याची गरज नाही. खालीलपैकी कोणता डबा तुम्ही निवडला?
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {GULLAK_TYPES.map(gt => {
              const selected = gullakType === gt.id;
              return (
                <button
                  key={gt.id}
                  type="button"
                  onClick={() => onUpdate('gullakType', gt.id)}
                  className={`p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                    selected
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm font-bold scale-102'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="text-3xl mb-1">{gt.emoji}</div>
                  <div className="text-xs font-bold">{gt.label}</div>
                  <div className="text-[10px] text-slate-500">{gt.eng}</div>
                </button>
              );
            })}
          </div>

          {/* 5 Rules Checklist */}
          <div className="bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 text-xs text-slate-700 space-y-1.5">
            <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> ५ सोप्या पायऱ्या (5 Easy Steps):
            </div>
            <div>१. तुमचा डबा स्वच्छ धुवा.</div>
            <div>२. त्याला सुंदर सजवा.</div>
            <div>३. त्याला एक छान नाव द्या.</div>
            <div>४. त्यावर "माझ्या शिक्षणाचा गल्ला" असे लिहा.</div>
            <div>५. आजच पहिली छोटी बचत त्यात टाका!</div>
          </div>

          {/* Gullak Details Inputs */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                माझ्या गल्ल्याचे नाव (Name of my Gullak):
              </label>
              <input
                type="text"
                value={gullakName}
                onChange={(e) => onUpdate('gullakName', e.target.value)}
                placeholder="उदा. माझी स्वप्न पेटी / शिक्षणाचा गल्ला"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  तारीख (Date Created):
                </label>
                <input
                  type="date"
                  value={dateCreated}
                  onChange={(e) => onUpdate('dateCreated', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  पहिली बचत (1st Deposit ₹):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-slate-400 text-sm">₹</span>
                  <input
                    type="number"
                    min="0"
                    value={firstSavings}
                    onChange={(e) => onUpdate('firstSavings', e.target.value)}
                    placeholder="10, 20, 50"
                    className="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-300 text-sm font-bold text-emerald-700 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Educational Cost Breakdown */}
        <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <span className="w-8 h-8 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-sm">
              २
            </span>
            <div>
              <h3 className="font-bold text-slate-800 text-lg">माझ्या एका महिन्याच्या शिक्षणाचा खर्च</h3>
              <p className="text-xs text-slate-500">How much does 1 month of schooling actually cost?</p>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            तुमच्या पालकांना किंवा शाळेला विचारा आणि एका महिन्यासाठी लागणारा खालील खर्च लिहा:
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">शाळा / कॉलेज फी</div>
                  <div className="text-[10px] text-slate-500">School / Tuition Fees</div>
                </div>
              </div>
              <div className="flex items-center gap-1 w-32">
                <span className="text-slate-400 text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={data.schoolFee || ''}
                  onChange={(e) => handleExpenseChange('schoolFee', e.target.value)}
                  placeholder="0"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-sm text-right focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📚</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">पुस्तके व स्टेशनरी</div>
                  <div className="text-[10px] text-slate-500">Books & Stationery</div>
                </div>
              </div>
              <div className="flex items-center gap-1 w-32">
                <span className="text-slate-400 text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={data.booksFee || ''}
                  onChange={(e) => handleExpenseChange('booksFee', e.target.value)}
                  placeholder="0"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-sm text-right focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🚌</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">वाहतूक</div>
                  <div className="text-[10px] text-slate-500">Bus / Auto / Transport</div>
                </div>
              </div>
              <div className="flex items-center gap-1 w-32">
                <span className="text-slate-400 text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={data.transportFee || ''}
                  onChange={(e) => handleExpenseChange('transportFee', e.target.value)}
                  placeholder="0"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-sm text-right focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">⚙️</span>
                <div>
                  <div className="text-xs font-bold text-slate-800">इतर आवश्यक शैक्षणिक खर्च</div>
                  <div className="text-[10px] text-slate-500">Other learning supplies</div>
                </div>
              </div>
              <div className="flex items-center gap-1 w-32">
                <span className="text-slate-400 text-sm">₹</span>
                <input
                  type="number"
                  min="0"
                  value={data.otherFee || ''}
                  onChange={(e) => handleExpenseChange('otherFee', e.target.value)}
                  placeholder="0"
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 font-bold text-sm text-right focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-between shadow-md">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-100">
                  माझ्या एका महिन्याचा एकूण खर्च (माझे लक्ष्य):
                </div>
                <div className="text-xs opacity-90">Total 1-Month Education Target</div>
              </div>
              <div className="text-2xl font-black">
                ₹ {totalMonthlyCost.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Step 3: Target Goal */}
          <div className="pt-3 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              ३. माझे फेब्रुवारीचे लक्ष्य (My Target for February):
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-400 font-bold">₹</span>
              <input
                type="number"
                min="0"
                value={targetGoal}
                onChange={(e) => onUpdate('targetGoal', e.target.value)}
                placeholder="उदा. 1500"
                className="w-full pl-8 pr-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-800 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: 4-Month Timeline */}
      <div className="bg-white rounded-2xl p-6 border-2 border-emerald-100 shadow-sm">
        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <span>📅</span> ४. माझा प्रवास — नोव्हेंबर ते फेब्रुवारी (My 4-Month Timeline)
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { month: 'नोव्हेंबर', duration: '१ महिना', icon: '🌱', tip: 'गल्ला सुरू करा & पहिली बचत' },
            { month: 'डिसेंबर', duration: '२ महिने', icon: '🌿', tip: 'नियमित दर आठवड्याला बचत' },
            { month: 'जानेवारी', duration: '३ महिने', icon: '🌳', tip: 'लक्ष्याच्या निम्मा टप्पा पार' },
            { month: 'फेब्रुवारी', duration: '४ महिने', icon: '🏆', tip: '१ महिन्याच्या शिक्षणाचे लक्ष्य पूर्ण!' }
          ].map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-center relative">
              <div className="text-2xl mb-1">{step.icon}</div>
              <div className="font-bold text-slate-800 text-sm">{step.month}</div>
              <div className="text-[11px] text-emerald-700 font-semibold mb-1">({step.duration})</div>
              <div className="text-[10px] text-slate-500 leading-tight">{step.tip}</div>
            </div>
          ))}
        </div>

        {/* Closing Quote from Page 29 */}
        <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-center text-amber-900 font-bold text-sm">
          "आजची छोटी बचत मला माझ्या शिक्षणाच्या स्वप्नाच्या अधिक जवळ घेऊन जाते." ✨
        </div>
      </div>
    </div>
  );
};
