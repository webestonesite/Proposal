import React from 'react';
import { PieChart, TrendingUp, AlertTriangle } from 'lucide-react';

export default function KpiGrid() {
  const comparisonData = [
    {
      factor: 'Indexed Dutch Pages (Google.nl)',
      client: '0 – 2 pages (Deficit)',
      parfumado: '100+ pages',
      iciParis: '300+ pages',
      douglas: '500+ pages'
    },
    {
      factor: 'Monthly Organic Search Traffic',
      client: '10 – 50 visits',
      parfumado: '6,115 visits',
      iciParis: '379,804 visits',
      douglas: '540,928 visits'
    },
    {
      factor: 'Ranking Keywords (Google.nl)',
      client: '0 Keywords (Void)',
      parfumado: '24,002+ Keywords',
      iciParis: '258,634+ Keywords',
      douglas: '446,283+ Keywords'
    },
    {
      factor: 'Backlink Authority & Domain Links',
      client: '0 Backlinks (DA 1)',
      parfumado: '3,659+ (DA 34)',
      iciParis: '154,354+ (DA 47)',
      douglas: '113,099+ (DA 52)'
    },
    {
      factor: 'Homepage Content Length',
      client: '40 – 80 words (Thin)',
      parfumado: '300+ words',
      iciParis: '400+ words',
      douglas: '500+ words'
    },
    {
      factor: 'Category Page Content Length',
      client: '20 – 30 words (Thin)',
      parfumado: '150+ words',
      iciParis: '200+ words',
      douglas: '300+ words'
    },
    {
      factor: 'Single Product Description Length',
      client: '50 words (Minimal)',
      parfumado: '200+ words',
      iciParis: '250+ words',
      douglas: '300+ words'
    },
    {
      factor: 'Technical & On-Page SEO Health',
      client: 'Missing H1, 9 Images No Alt, 5.14% Text/HTML',
      parfumado: 'Clean Schema & Meta',
      iciParis: 'Full Technical Schema',
      douglas: 'Full Technical Schema'
    }
  ];

  // Traffic Pie Chart Slices Calculation
  // Total Traffic: 926,897 (Douglas 58.4%, ICI Paris 41.0%, Parfumado 0.6%, Bargello 0.01%)
  const pieSlices = [
    { name: 'Douglas (Leader)', val: '540,928 visits', percent: 58.4, color: '#48B83B', startAngle: 0, endAngle: 210.24 },
    { name: 'ICI Paris XL', val: '379,804 visits', percent: 41.0, color: '#3B82F6', startAngle: 210.24, endAngle: 357.84 },
    { name: 'Parfumado', val: '6,115 visits', percent: 0.6, color: '#FFC107', startAngle: 357.84, endAngle: 359.9 },
    { name: 'Bargello (Client Gap)', val: '10 - 50 visits', percent: 0.1, color: '#EF4444', startAngle: 359.9, endAngle: 360 }
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="comparison-benchmark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 1.0 • METRIC COMPARISON
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Client vs Competitors Metric Comparison & Traffic Share
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Side-by-side analysis of Bargello Eindhoven vs Parfumado, ICI Paris XL, and Douglas across indexed pages, traffic, keywords, and content depth.
          </p>
        </div>

        {/* 2-Column Grid: Table on Left + Pie Chart on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* 5-Column Comparison Table */}
          <div className="lg:col-span-8 overflow-x-auto border-2 border-[#48B83B] rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">SEO Metric / Factor</th>
                  <th className="py-3.5 px-4 bg-emerald-700">Bargello (Client)</th>
                  <th className="py-3.5 px-4">Parfumado (Niche)</th>
                  <th className="py-3.5 px-4">ICI Paris XL</th>
                  <th className="py-3.5 px-4">Douglas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="py-3 px-4 font-bold text-slate-900">{row.factor}</td>
                    <td className="py-3 px-4 font-extrabold text-red-700 bg-emerald-50/80 font-mono">
                      {row.client}
                    </td>
                    <td className="py-3 px-4 font-semibold text-slate-700">{row.parfumado}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">{row.iciParis}</td>
                    <td className="py-3 px-4 font-semibold text-slate-700">{row.douglas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Organic Traffic Market Share Pie Chart Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl border-2 border-slate-200 bg-slate-50/80 shadow-xs space-y-4 hover-lift">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#48B83B]" />
                <h3 className="font-extrabold text-sm text-slate-900">Traffic Share Breakdown</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B]">
                TOTAL: 926K+ VISITS
              </span>
            </div>

            {/* SVG Pie Chart Graphic */}
            <div className="flex justify-center py-2 relative">
              <svg viewBox="0 0 100 100" className="w-44 h-44 -rotate-90 transform drop-shadow-sm">
                {/* Douglas 58.4% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#48B83B"
                  strokeWidth="20"
                  strokeDasharray="146.7 251.3"
                  strokeDashoffset="0"
                />
                {/* ICI Paris XL 41.0% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#3B82F6"
                  strokeWidth="20"
                  strokeDasharray="103.0 251.3"
                  strokeDashoffset="-146.7"
                />
                {/* Parfumado 0.6% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#FFC107"
                  strokeWidth="20"
                  strokeDasharray="3.0 251.3"
                  strokeDashoffset="-249.7"
                />
                {/* Bargello Client Gap 0.1% */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#EF4444"
                  strokeWidth="22"
                  strokeDasharray="2.5 251.3"
                  strokeDashoffset="-252.7"
                />
              </svg>

              {/* Center Overlay Donut Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <span className="text-xs font-black text-slate-900">926K+</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase font-mono">Searches</span>
              </div>
            </div>

            {/* Pie Chart Legend Breakdown */}
            <div className="space-y-2 text-xs font-semibold pt-2 border-t border-slate-200">
              {pieSlices.map((slice, sIdx) => (
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

            {/* Alert Box highlight */}
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[11px] font-medium leading-tight flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>Critical Deficit:</strong> Bargello currently captures <strong>&lt;0.01%</strong> of market organic traffic. The 6-Month Campaign targets capturing 5,000+ monthly visits.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
