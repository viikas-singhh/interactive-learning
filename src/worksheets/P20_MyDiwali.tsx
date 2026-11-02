import React from 'react';
import { WorksheetFrame } from '../components/WorksheetFrame';
import { Sparkles, Heart, Home, Gift, Star, Smile, RotateCcw } from 'lucide-react';

interface Props {
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

export const P20_MyDiwali: React.FC<Props> = ({ data, onUpdate, isCompleted }) => {
  const preparation = data.preparation || '';
  const familyFriends = data.familyFriends || '';
  const decoration = data.decoration || '';
  const favoriteMoment = data.favoriteMoment || '';
  const stickers = data.stickers || [];

  const toggleSticker = (stickerName: string) => {
    if (isCompleted) return;
    const current = stickers.includes(stickerName)
      ? stickers.filter((s: string) => s !== stickerName)
      : [...stickers, stickerName];
    onUpdate('stickers', current);
  };

  const sections = [
    {
      id: 'preparation',
      title: 'माझी दिवाळीची तयारी',
      engTitle: 'My Diwali Preparation',
      value: preparation,
      icon: Home,
      prompts: ['घर स्वच्छ केले 🧹', 'लाडू बनवले 🥟', 'नवीन कपडे 👗', 'रांगोळी काढली 🌸'],
      placeholder: 'Describe your preparation (उदा. घर स्वच्छ केले, नवीन कपडे घेतले)...'
    },
    {
      id: 'familyFriends',
      title: 'माझे कुटुंब आणि मित्र',
      engTitle: 'My Family and Friends',
      value: familyFriends,
      icon: Heart,
      prompts: ['आजी-आजोबांना भेटलो 👵', 'मित्रांसोबत खेळलो 🤝', 'फराळ वाटला 🥮', 'एकत्र हसलो 😊'],
      placeholder: 'Describe family and friends (उदा. आजी-आजोबा, मित्रमंडळी)...'
    },
    {
      id: 'decoration',
      title: 'माझी सजावट',
      engTitle: 'My Decoration',
      value: decoration,
      icon: Sparkles,
      prompts: ['पणत्या लावल्या 🪔', 'आकाशकंदील 🏮', 'सुंदर रांगोळी 🎨', 'झेंडूचे तोरण 🌼'],
      placeholder: 'Describe decorations (उदा. दारावर कंदील, पणत्या, रांगोळी)...'
    },
    {
      id: 'favoriteMoment',
      title: 'माझा आवडता क्षण',
      engTitle: 'My Favorite Moment',
      value: favoriteMoment,
      icon: Gift,
      prompts: ['पहिला लाडू खाल्ला 😋', 'दिवे पेटवले ✨', 'कंदील पाहिला 🏮', 'सर्व एकत्र जमलो 👨‍👩‍👧‍👦'],
      placeholder: 'Describe your favorite moment (उदा. सर्वांसोबत दिवे पेटवताना)...'
    }
  ];

  const availableStickers = [
    { id: 'diya', emoji: '🪔', label: 'पणती' },
    { id: 'kandil', emoji: '🏮', label: 'कंदील' },
    { id: 'sweet', emoji: '🥟', label: 'लाडू' },
    { id: 'flower', emoji: '🌸', label: 'फूल' },
    { id: 'family', emoji: '👨‍👩‍👧‍👦', label: 'कुटुंब' },
    { id: 'star', emoji: '⭐', label: 'आनंद' }
  ];

  const audioPrompt = "माझी दिवाळी! Tell us about your Diwali preparation, your loving family and friends, your sparkling decorations, and your most favorite moment!";

  return (
    <WorksheetFrame pageNumber={20} categoryTag="दिवाळी विशेष" audioPromptText={audioPrompt}>
      <div className="space-y-4 sm:space-y-6 font-friendly text-slate-900">
        {/* Title Banner */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🪔</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-wide font-serif">
              माझी दिवाळी
            </h2>
            <span className="text-2xl">🪔</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-500">
            Write or tap stickers inside the 4 boxes below to share your Diwali joy!
          </p>
        </div>

        {/* Sticker Tray */}
        <div className="bg-slate-50 rounded-2xl p-3 border-2 border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-black text-slate-700">🎨 Tap stickers to decorate:</span>
          <div className="flex flex-wrap gap-1.5">
            {availableStickers.map(st => {
              const isSelected = stickers.includes(st.id);
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => toggleSticker(st.id)}
                  className={`px-2.5 py-1 rounded-xl border-2 text-xs font-black flex items-center gap-1 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 border-slate-900 shadow-sm scale-105'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  <span className="text-base">{st.emoji}</span>
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Quadrants matching Page 20 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map(sec => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-2.5 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  {/* Quadrant Header Pill */}
                  <div className="flex items-center justify-between pb-2 border-b-2 border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black">彡</span>
                      <div>
                        <h3 className="font-black text-base sm:text-lg text-slate-900 leading-tight">
                          {sec.title}
                        </h3>
                        <span className="text-[10px] text-slate-400 font-bold block">{sec.engTitle}</span>
                      </div>
                      <span className="text-xl font-black">ミ</span>
                    </div>
                  </div>

                  {/* LKG/UKG Easy Tap suggestion chips */}
                  <div className="flex flex-wrap gap-1 py-1.5">
                    {sec.prompts.map((p, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => {
                          const cur = sec.value ? `${sec.value}, ${p}` : p;
                          onUpdate(sec.id, cur);
                        }}
                        className="text-[11px] bg-slate-100 hover:bg-amber-100 text-slate-800 font-bold px-2 py-0.5 rounded-lg border border-slate-300 transition-colors cursor-pointer"
                      >
                        + {p}
                      </button>
                    ))}
                  </div>

                  {/* Ruled lines input */}
                  <textarea
                    rows={4}
                    value={sec.value}
                    onChange={(e) => onUpdate(sec.id, e.target.value)}
                    placeholder={sec.placeholder}
                    className="w-full bg-slate-50/50 rounded-xl border border-slate-300 p-2.5 text-sm sm:text-base font-bold text-slate-900 focus:outline-none focus:border-slate-800 resize-none placeholder:text-slate-400"
                  />
                </div>

                <div className="text-[11px] font-bold text-slate-400 text-right">
                  {sec.value.trim() ? '✓ Saved' : 'Waiting for your words...'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </WorksheetFrame>
  );
};
