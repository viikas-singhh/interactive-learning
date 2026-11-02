import React, { useState } from 'react';
import { ALL_64_PAGES, PageEntry } from '../data/allPagesData';
import { Search, CheckCircle2, ArrowRight, BookOpen, Star, Filter } from 'lucide-react';

interface Props {
  isCompleted: (id: string) => boolean;
  onOpenPage: (pageNumber: number) => void;
}

export const WorksheetsCatalog: React.FC<Props> = ({ isCompleted, onOpenPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'worksheets' | 'all'>('all');
  const [selectedSection, setSelectedSection] = useState<string>('All');

  const sections = ['All', 'दिवाळी विशेष', 'उमलताना', 'बालविकास', 'किलबिल', 'टिनेजर्स', 'शिल्पकार', 'गार्डनर', 'आरोग्यम्', 'रियल हिरोज', 'अध्यात्म'];

  const filteredPages = ALL_64_PAGES.filter(p => {
    // Mode
    if (viewMode === 'worksheets' && !p.isMainWorksheet) return false;

    // Search
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      p.title.toLowerCase().includes(q) ||
      (p.marathiTitle && p.marathiTitle.includes(q)) ||
      String(p.pageNumber).includes(q) ||
      p.section.toLowerCase().includes(q);

    // Section
    const matchesSection = selectedSection === 'All' || p.section === selectedSection;

    return matchesSearch && matchesSection;
  });

  return (
    <div className="space-y-6 pb-12 font-friendly">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-4 border-slate-900 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-2xl">📚</span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-slate-900 font-black text-xs uppercase tracking-wider border border-slate-900">
              Complete 64-Page Workbook Index
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 m-0 font-serif">
            Browse All Workbook Pages
          </h1>
          <p className="text-xs sm:text-sm font-bold text-slate-600">
            Flip through all 64 pages or jump directly to the main interactive worksheets!
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border-2 border-slate-900">
          <button
            type="button"
            onClick={() => setViewMode('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
              viewMode === 'all'
                ? 'bg-amber-400 text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📖 All 64 Pages
          </button>
          <button
            type="button"
            onClick={() => setViewMode('worksheets')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
              viewMode === 'worksheets'
                ? 'bg-amber-400 text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⭐ Main Worksheets
          </button>
        </div>
      </div>

      {/* Search and Section Filters */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-slate-900 shadow-xs space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, page number, or section..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900"
          />
        </div>

        {/* Section Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-xs font-black text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Section:
          </span>
          {sections.map(sec => (
            <button
              key={sec}
              type="button"
              onClick={() => setSelectedSection(sec)}
              className={`px-3 py-1 rounded-xl text-xs font-black transition-all ${
                selectedSection === sec
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPages.map(page => {
          const key = page.worksheetId || `page-${page.pageNumber}`;
          const done = isCompleted(key);

          return (
            <div
              key={page.pageNumber}
              onClick={() => onOpenPage(page.pageNumber)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md ${
                page.isMainWorksheet
                  ? 'border-slate-900 bg-white hover:bg-amber-50/40'
                  : 'border-slate-300 bg-white hover:border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-xs font-black">
                    Page {page.pageNumber}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {page.isMainWorksheet && (
                      <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-300">
                        <Star className="w-3 h-3 fill-amber-500" />
                        <span>Interactive</span>
                      </span>
                    )}

                    {done && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Done
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] font-black uppercase tracking-wider text-amber-700 mb-0.5">
                  {page.section}
                </div>

                <h3 className="font-black text-slate-900 text-base group-hover:text-amber-600 transition-colors leading-snug">
                  {page.marathiTitle || page.title}
                </h3>
                {page.marathiTitle && (
                  <p className="text-xs font-bold text-slate-500 mt-0.5">{page.title}</p>
                )}

                <p className="text-xs text-slate-600 font-medium line-clamp-2 mt-2 leading-relaxed">
                  {page.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">
                  {page.isMainWorksheet ? 'Activity Worksheet' : 'Illustrated Story'}
                </span>
                <span className="text-xs font-black text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Open Page ➔
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
