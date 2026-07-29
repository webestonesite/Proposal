import React, { useState } from 'react';
import { Search, Flame, Target, PieChart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function KeywordResearch() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const keywordsData = [
    { keyword: 'fragrantica', volume: 22200, difficulty: 36, priority: 'HIGH', intentKey: 'keywords.intentInformational' },
    { keyword: 'kayali parfum', volume: 12100, difficulty: 20, priority: 'MEDIUM', intentKey: 'keywords.intentCommercial' },
    { keyword: 'valentino parfum', volume: 12100, difficulty: 18, priority: 'EASY', intentKey: 'keywords.intentCommercial' },
    { keyword: 'jean paul gaultier parfum', volume: 9900, difficulty: 28, priority: 'HIGH', intentKey: 'keywords.intentCommercial' },
    { keyword: 'zadig en voltaire parfum', volume: 9900, difficulty: 16, priority: 'EASY', intentKey: 'keywords.intentCommercial' },
    { keyword: 'miss dior parfum', volume: 8100, difficulty: 24, priority: 'MEDIUM', intentKey: 'keywords.intentCommercial' },
    { keyword: 'prada parfum', volume: 8000, difficulty: 20, priority: 'MEDIUM', intentKey: 'keywords.intentCommercial' },
    { keyword: 'tom ford parfum', volume: 8100, difficulty: 20, priority: 'MEDIUM', intentKey: 'keywords.intentCommercial' },
    { keyword: 'parfum dames', volume: 6600, difficulty: 35, priority: 'HIGH', intentKey: 'keywords.intentCommercial' },
    { keyword: 'koxal parfum', volume: 2900, difficulty: 41, priority: 'HIGH', intentKey: 'keywords.intentTransactional' },
    { keyword: 'skins parfum', volume: 2900, difficulty: 30, priority: 'HIGH', intentKey: 'keywords.intentTransactional' },
    { keyword: 'eau de parfum', volume: 2400, difficulty: 38, priority: 'HIGH', intentKey: 'keywords.intentInformational' },
  ];

  const filteredKeywords = keywordsData.filter((item) => {
    const matchesSearch = item.keyword.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'ALL' || item.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  const intentPieSlices = [
    { name: t('keywords.intentCommercial'), val: '74,800 / mo', percent: 71.1, color: '#48B83B' },
    { name: t('keywords.intentInformational'), val: '24,600 / mo', percent: 23.4, color: '#FFC107' },
    { name: t('keywords.intentTransactional'), val: '5,800 / mo', percent: 5.5, color: '#3B82F6' },
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="keywords">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('keywords.badge')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t('keywords.title')}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('keywords.subTitle')}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('keywords.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#48B83B] font-medium"
            />
          </div>

          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="font-bold text-slate-600">{t('keywords.priorityLabel')}</span>
            {[
              { id: 'ALL', label: t('keywords.filterAll') },
              { id: 'HIGH', label: t('keywords.filterHigh') },
              { id: 'MEDIUM', label: t('keywords.filterMed') },
              { id: 'EASY', label: t('keywords.filterEasy') },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPriorityFilter(p.id)}
                className={`px-3 py-1.5 rounded font-extrabold transition cursor-pointer ${
                  priorityFilter === p.id
                    ? 'bg-[#48B83B] text-white shadow-2xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid: Table on Left + Pie Chart on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Keyword Table */}
          <div className="lg:col-span-8 overflow-x-auto border-2 border-[#48B83B] rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">{t('keywords.colKeyword')}</th>
                  <th className="py-3.5 px-4">{t('keywords.colVolume')}</th>
                  <th className="py-3.5 px-4">{t('keywords.colDifficulty')}</th>
                  <th className="py-3.5 px-4">{t('keywords.colPriority')}</th>
                  <th className="py-3.5 px-4">{t('keywords.colIntent')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {filteredKeywords.map((item, idx) => (
                  <tr key={idx} className={`transition hover:bg-emerald-50/60 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      <a
                        href={`https://www.google.nl/search?q=${encodeURIComponent(item.keyword)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#48B83B] hover:underline flex items-center gap-1.5"
                        title="Click to see live Google search results"
                      >
                        <span>{item.keyword}</span>
                        <span className="text-[10px] text-slate-400 font-mono">↗</span>
                      </a>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-extrabold text-[#48B83B]">
                      {item.volume.toLocaleString()} / mo
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">
                      <div className="flex items-center gap-2">
                        <span>{item.difficulty}%</span>
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              item.difficulty > 35 ? 'bg-amber-500' : 'bg-[#48B83B]'
                            }`}
                            style={{ width: `${item.difficulty}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold border ${
                          item.priority === 'HIGH'
                            ? 'bg-[#FFC107] text-slate-900 border-amber-300'
                            : item.priority === 'EASY'
                            ? 'bg-teal-100 text-teal-900 border-teal-300'
                            : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        }`}
                      >
                        {item.priority === 'HIGH' ? t('keywords.filterHigh') : item.priority === 'EASY' ? t('keywords.filterEasy') : t('keywords.filterMed')}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-600">{t(item.intentKey)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Keyword Search Intent Pie Chart Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl border-2 border-slate-200 bg-slate-50/80 shadow-xs space-y-4 hover-lift">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#48B83B]" />
                <h3 className="font-extrabold text-sm text-slate-900">{t('keywords.pieTitle')}</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B]">
                {t('keywords.pieTotal')}
              </span>
            </div>

            {/* SVG Pie Chart Graphic */}
            <div className="flex justify-center py-2 relative">
              <svg viewBox="0 0 100 100" className="w-44 h-44 -rotate-90 transform drop-shadow-sm">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#48B83B"
                  strokeWidth="20"
                  strokeDasharray="178.7 251.3"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#FFC107"
                  strokeWidth="20"
                  strokeDasharray="58.8 251.3"
                  strokeDashoffset="-178.7"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#3B82F6"
                  strokeWidth="20"
                  strokeDasharray="13.8 251.3"
                  strokeDashoffset="-237.5"
                />
              </svg>

              {/* Center Donut Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <span className="text-xs font-black text-slate-900">105.2K</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase font-mono">{t('keywords.donutLabel')}</span>
              </div>
            </div>

            {/* Intent Breakdown Legend */}
            <div className="space-y-2 text-xs font-semibold pt-2 border-t border-slate-200">
              {intentPieSlices.map((slice, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: slice.color }}></span>
                    <span className="text-slate-800 font-bold">{slice.name}</span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-slate-900 font-black">{slice.percent}%</span>
                    <span className="text-[10px] text-slate-500 block">{slice.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Keyword Intent Strategy Badge */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-medium leading-tight flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#48B83B] shrink-0 mt-0.5" />
              <span>
                <strong className="font-extrabold">{t('keywords.strategyBoxTitle')} </strong>
                {t('keywords.strategyBoxBody')}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
