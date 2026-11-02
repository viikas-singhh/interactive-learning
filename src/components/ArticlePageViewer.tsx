import React from 'react';
import { WorksheetFrame } from './WorksheetFrame';
import { PageEntry } from '../data/allPagesData';
import { BookOpen, Sparkles, Heart, Lightbulb, ThumbsUp } from 'lucide-react';

interface Props {
  pageEntry: PageEntry;
  data: Record<string, any>;
  onUpdate: (field: string, value: any) => void;
  isCompleted: boolean;
}

export const ArticlePageViewer: React.FC<Props> = ({
  pageEntry,
  data,
  onUpdate,
  isCompleted
}) => {
  const reaction = data.reaction || '';
  const note = data.note || '';

  const handleReaction = (rec: string) => {
    onUpdate('reaction', rec);
  };

  const audioPrompt = `${pageEntry.title}. ${pageEntry.summary}`;

  return (
    <WorksheetFrame
      pageNumber={pageEntry.pageNumber}
      categoryTag={pageEntry.section}
      audioPromptText={audioPrompt}
    >
      <div className="space-y-5 font-friendly text-slate-900">
        {/* Title Header */}
        <div className="text-center space-y-1.5 pb-2 border-b-2 border-slate-900">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
            {pageEntry.section}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-wide font-serif leading-tight">
            {pageEntry.marathiTitle || pageEntry.title}
          </h2>
          {pageEntry.marathiTitle && (
            <p className="text-xs sm:text-sm font-bold text-slate-500">{pageEntry.title}</p>
          )}
        </div>

        {/* Article Summary Box */}
        <div className="rounded-2xl border-2 border-slate-900 bg-amber-50/60 p-4 sm:p-5 shadow-xs space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Highlights & Lesson:</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
            {pageEntry.summary}
          </p>
        </div>

        {/* Reading Article Columns */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-xs space-y-4">
          <div className="text-xs font-black uppercase tracking-wider text-slate-400">
            Workbook Article Reader
          </div>

          <div className="text-sm sm:text-base font-medium leading-relaxed text-slate-800 space-y-3">
            <p>
              या पानावर समाजातील प्रेरणादायी विचार, सत्य घटना, आणि संस्कारांची शिकवण दिली आहे. मुलांनी शिक्षणासोबतच चांगल्या सवयी, स्वावलंबन, प्रामाणिकपणा, आणि इतरांना मदत करण्याची भावना जोपासावी, हा या लेखाचा मुख्य उद्देश आहे.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm italic">
              "This page brings wisdom and inspirational real-life stories to children. Read or listen to the story above to reflect on good values, perseverance, and helping others."
            </p>
          </div>
        </div>

        {/* Kid Reflection & Stamp Bar */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-black text-slate-800">
              How did this page inspire you? (तुमची प्रतिक्रिया द्या):
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'inspiring', emoji: '⭐', label: 'Inspiring (प्रेरणादायी)' },
              { id: 'smart', emoji: '💡', label: 'Learned something new' },
              { id: 'heart', emoji: '❤️', label: 'Heartwarming' },
              { id: 'awesome', emoji: '👍', label: 'Loved this!' }
            ].map(r => (
              <button
                key={r.id}
                type="button"
                onClick={() => handleReaction(r.id)}
                className={`px-3 py-1.5 rounded-xl border-2 text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                  reaction === r.id
                    ? 'bg-amber-400 border-slate-900 shadow-xs scale-105'
                    : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{r.emoji}</span>
                <span>{r.label}</span>
              </button>
            ))}
          </div>

          <div className="border-b-2 border-slate-300 py-1">
            <input
              type="text"
              value={note}
              onChange={(e) => onUpdate('note', e.target.value)}
              placeholder="Write one word or sentence you liked from this page..."
              className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>
    </WorksheetFrame>
  );
};
