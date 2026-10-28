import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function RoiCalculator() {
  const { t } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState(6);

  const monthlyProjections = [
    { month: 'Month 1', keywords: 3, traffic: 100, revenue: 60, investment: 880, roi: -93 },
    { month: 'Month 2', keywords: 8, traffic: 300, revenue: 270, investment: 880, roi: -69 },
    { month: 'Month 3', keywords: 15, traffic: 650, revenue: 780, investment: 880, roi: -11 },
    { month: 'Month 4', keywords: 20, traffic: 1250, revenue: 1625, investment: 880, roi: 84 },
    { month: 'Month 5', keywords: 28, traffic: 1750, revenue: 2860, investment: 880, roi: 225 },
    { month: 'Month 6', keywords: 35, traffic: 2500, revenue: 4375, investment: 880, roi: 397 },
  ];

  const currentData = monthlyProjections[selectedMonth - 1];

  return (
    <section className="py-12 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-[#48B83B] inline-flex items-center gap-1.5 mb-2 font-mono uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-[#48B83B]" />
            SECTION 5.0 • ROI FORECASTER
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Interactive Traffic & <span className="text-[#48B83B]">Revenue Forecaster</span>
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Drag the slider to inspect expected traffic, organic revenue, and return on investment month-by-month.
          </p>
        </div>

        {/* Month Selection Slider */}
        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm mb-8 space-y-4 animate-fade-up hover-lift">
          <div className="flex items-center justify-between">
            <label className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#48B83B]" />
              Select Strategy Timeline: <span className="text-[#48B83B]">Month {selectedMonth}</span>
            </label>
            <span className="text-xs font-extrabold px-3 py-1 rounded bg-[#FFC107] text-slate-900">
              {selectedMonth <= 2 ? 'Foundation Phase' : selectedMonth <= 4 ? 'Growth Phase' : 'Dominance Phase'}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="6"
            step="1"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#48B83B]"
          />

          <div className="flex justify-between text-[11px] text-slate-500 font-mono font-bold">
            <span>M1 ($60/mo)</span>
            <span>M2 ($270/mo)</span>
            <span>M3 ($780/mo)</span>
            <span>M4 ($1,625/mo)</span>
            <span>M5 ($2,860/mo)</span>
            <span>M6 ($4,375/mo)</span>
          </div>
        </div>

        {/* Dynamic Metric Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-bold">Organic Traffic</span>
            <p className="text-xl font-black text-[#48B83B] mt-1">{currentData.traffic.toLocaleString()} visits/mo</p>
            <span className="text-[10px] text-slate-400">From Google.nl search</span>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-bold">Monthly Revenue</span>
            <p className="text-xl font-black text-slate-900 mt-1">${currentData.revenue.toLocaleString()} / mo</p>
            <span className="text-[10px] text-slate-400">Based on 2.5% conv rate</span>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <span className="text-xs text-slate-500 font-medium">Net Monthly ROI</span>
            <p className={`text-xl font-extrabold mt-1 ${currentData.roi > 0 ? 'text-emerald-700' : 'text-red-600'}`}>
              {currentData.roi > 0 ? `+${currentData.roi}%` : `${currentData.roi}%`}
            </p>
            <span className="text-[10px] text-slate-400">Breakeven at Month 3</span>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <span className="text-xs text-slate-500 font-medium">Ranking Keywords</span>
            <p className="text-xl font-extrabold text-sky-700 mt-1">{currentData.keywords} Target Keywords</p>
            <span className="text-[10px] text-slate-400">Top 10-20 position</span>
          </div>
        </div>

        {/* Chart */}
        <div className="glass-card p-6 rounded-2xl border border-slate-200 bg-white shadow-sm h-72">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            6-Month Organic Revenue vs Traffic Progression Chart
          </h3>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={monthlyProjections}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D97706" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip
                contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px', color: '#0f172a' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#D97706" fillOpacity={1} fill="url(#colorRev)" name="Revenue (€)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
}
