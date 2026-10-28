import React from 'react';
import { PieChart, TrendingUp, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function KpiGrid() {
  const { t } = useLanguage();

  const factors = t('kpi.factors') || [];

  const comparisonData = Array.isArray(factors) ? factors.map(f => ({
    factor: f.name,
    client: f.client,
    parfumado: f.p,
    iciParis: f.i,
    douglas: f.d
  })) : [];

  const pieSlices = [
    { name: t('kpi.douglasLegend'), val: '540,928 visits', percent: 58.4, color: '#48B83B' },
    { name: 'ICI Paris XL', val: '379,804 visits', percent: 41.0, color: '#3B82F6' },
    { name: 'Parfumado', val: '6,115 visits', percent: 0.6, color: '#FFC107' },
    { name: t('kpi.bargelloLegend'), val: '10 - 50 visits', percent: 0.1, color: '#EF4444' }
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="comparison-benchmark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('kpi.badge')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t('kpi.title')}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('kpi.subTitle')}
          </p>
        </div>

        {/* 2-Column Grid: Table on Left + Pie Chart on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* 5-Column Comparison Table */}
          <div className="lg:col-span-8 overflow-x-auto border-2 border-[#48B83B] rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">{t('kpi.colMetric')}</th>
                  <th className="py-3.5 px-4 bg-emerald-700">{t('kpi.colClient')}</th>
                  <th className="py-3.5 px-4">{t('kpi.colParfumado')}</th>
                  <th className="py-3.5 px-4">{t('kpi.colIciParis')}</th>
                  <th className="py-3.5 px-4">{t('kpi.colDouglas')}</th>
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
                <h3 className="font-extrabold text-sm text-slate-900">{t('kpi.trafficShareTitle')}</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B]">
                {t('kpi.trafficShareTotal')}
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
                {/* Tereapoint Client Gap 0.1% */}
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
                <span className="text-[9px] text-slate-500 font-bold uppercase font-mono">{t('kpi.searchesLabel')}</span>
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
                <strong className="font-extrabold">{t('kpi.alertBoxTitle')} </strong>
                {t('kpi.alertBoxBody')}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
