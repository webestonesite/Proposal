import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function AuditIssues({ onNavigate, onOpenModal }) {
  const { t } = useLanguage();

  const auditItems = t('audit.items') || [];

  const rawAuditData = [
    { category: 'Technical SEO', status: 'PASS', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'Technical SEO', status: 'PASS', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'Technical SEO', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'Technical SEO', status: 'PASS', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'On-Page SEO', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', status: 'FAIL', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', status: 'FAIL', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', status: 'FAIL', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'Link Health', status: 'FAIL', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'Content Optimization', status: 'WARNING', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'Site Loading Speed', status: 'PASS', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'Social Media', status: 'FAIL', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
  ];

  const auditTableData = rawAuditData.map((item, index) => {
    const tr = auditItems[index] || {};
    return {
      ...item,
      item: tr.item || '',
      finding: tr.finding || '',
      action: tr.action || ''
    };
  });

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="audit-findings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Header without clutter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-[#48B83B] uppercase tracking-wider block font-mono">
              {t('audit.sectionTitle')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2">
              {t('audit.checklistTitle')} (
              <a
                href="https://bargelloeindhoven.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#48B83B] hover:underline inline-block ml-1"
              >
                bargelloeindhoven.nl
              </a>
              )
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl pt-1">
              {t('audit.sectionSub')}
            </p>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('roadmap')}
            className="px-5 py-2.5 rounded-xl bg-[#48B83B] hover:bg-emerald-600 text-white text-xs font-extrabold shadow-2xs transition shrink-0 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>{t('hero.reviewRoadmap')}</span>
            <span>→</span>
          </button>
        </div>

        {/* Audit Executive Summary Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">{t('audit.passed')}</span>
              <span className="text-lg font-black text-[#48B83B]">4 Checks</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-[#48B83B] text-white font-black text-xs flex items-center justify-center shadow-2xs">✓</span>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-900 uppercase block">{t('audit.warning')}</span>
              <span className="text-lg font-black text-amber-600">6 Items</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black text-xs flex items-center justify-center shadow-2xs">!</span>
          </div>

          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-red-900 uppercase block">{t('audit.critical')}</span>
              <span className="text-lg font-black text-red-600">5 Issues</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-red-600 text-white font-black text-xs flex items-center justify-center shadow-2xs">✕</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Desktop Speed</span>
              <span className="text-lg font-black text-slate-900">Score 98/100</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white font-black text-[10px] flex items-center justify-center shadow-2xs">⚡</span>
          </div>
        </div>

        {/* Clean Minimalist Audit Table */}
        <div className="overflow-x-auto border-2 border-[#48B83B] rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
              <tr>
                <th className="py-3.5 px-4">{t('audit.colCategory')}</th>
                <th className="py-3.5 px-4">{t('audit.colItem')}</th>
                <th className="py-3.5 px-4 text-center">{t('audit.colStatus')}</th>
                <th className="py-3.5 px-4">{t('audit.colFinding')}</th>
                <th className="py-3.5 px-4">{t('audit.colAction')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {auditTableData.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => onNavigate && onNavigate('roadmap')}
                  className={`transition cursor-pointer hover:bg-emerald-50/70 ${row.rowStyle}`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-500 text-[11px] uppercase">{row.category}</td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900">{row.item}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs shadow-2xs ${row.badgeStyle}`}>
                      {row.icon}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{row.finding}</td>
                  <td className="py-3.5 px-4 font-bold text-[#48B83B] flex items-center justify-between gap-2">
                    <span>{row.action}</span>
                    <span className="text-[10px] text-slate-400 font-mono">→</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
