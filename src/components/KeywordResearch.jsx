import React, { useState } from 'react';
import { Search, Flame, Target } from 'lucide-react';

export default function KeywordResearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const keywordsData = [
    { keyword: 'luxe parfum', volume: 8900, difficulty: 65, priority: 'HIGH', intent: 'Transactional' },
    { keyword: 'geuren voor vrouwen', volume: 6800, difficulty: 72, priority: 'HIGH', intent: 'Commercial' },
    { keyword: 'beste parfums vrouwen', volume: 5400, difficulty: 70, priority: 'HIGH', intent: 'Commercial' },
    { keyword: 'geuren voor mannen', volume: 5200, difficulty: 70, priority: 'HIGH', intent: 'Commercial' },
    { keyword: 'beste parfums mannen', volume: 4200, difficulty: 68, priority: 'HIGH', intent: 'Commercial' },
    { keyword: 'parfum cadeau', volume: 3600, difficulty: 50, priority: 'MEDIUM', intent: 'Transactional' },
    { keyword: 'luxe geuren online', volume: 3200, difficulty: 55, priority: 'HIGH', intent: 'Transactional' },
    { keyword: 'niche geur', volume: 2100, difficulty: 45, priority: 'HIGH', intent: 'Informational' },
    { keyword: 'geïnspireerde parfums', volume: 1800, difficulty: 40, priority: 'MEDIUM', intent: 'High Intent' },
    { keyword: 'niche parfum nederland', volume: 1200, difficulty: 35, priority: 'MEDIUM', intent: 'Local Niche' },
    { keyword: 'parfum winkel eindhoven', volume: 850, difficulty: 25, priority: 'HIGH', intent: 'Local Intent' },
    { keyword: 'niche parfumerie brabant', volume: 620, difficulty: 20, priority: 'HIGH', intent: 'Local Intent' },
  ];

  const filteredKeywords = keywordsData.filter((item) => {
    const matchesSearch = item.keyword.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'ALL' || item.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  const totalVolume = keywordsData.reduce((acc, curr) => acc + curr.volume, 0);

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="keywords">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 3.0 • KEYWORD OPPORTUNITIES
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Top Netherlands Keyword Opportunities
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Top targeted keywords generating over <strong className="text-slate-900 font-black">51,220+ monthly searches</strong> in the Dutch market.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Dutch keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#48B83B] font-medium"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-600">Priority:</span>
            {['ALL', 'HIGH', 'MEDIUM'].map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`px-3 py-1.5 rounded font-extrabold transition ${
                  priorityFilter === p
                    ? 'bg-[#48B83B] text-white shadow-2xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Keyword Table Without CPC */}
        <div className="overflow-x-auto border-2 border-[#48B83B] rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
              <tr>
                <th className="py-3.5 px-4">Target Dutch Keyword</th>
                <th className="py-3.5 px-4">Monthly Search Volume</th>
                <th className="py-3.5 px-4">Difficulty (KD)</th>
                <th className="py-3.5 px-4">Priority Tag</th>
                <th className="py-3.5 px-4">Search Intent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredKeywords.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{item.keyword}</td>
                  <td className="py-3.5 px-4 font-mono font-extrabold text-[#48B83B]">
                    {item.volume.toLocaleString()} / mo
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <span>{item.difficulty}%</span>
                      <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.difficulty > 60 ? 'bg-amber-500' : 'bg-[#48B83B]'
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
                          : 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">{item.intent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
