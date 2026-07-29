import React from 'react';

export default function AuditIssues({ onNavigate, onOpenModal }) {
  const auditTableData = [
    // Technical SEO
    { category: 'Technical SEO', item: 'Robots.txt Configuration', status: 'PASS', finding: 'Your website has active robots.txt file', action: 'Maintain configuration', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'Technical SEO', item: 'XML Sitemap', status: 'PASS', finding: 'Your website has XML Sitemap', action: 'Keep updated with content', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },
    { category: 'Technical SEO', item: 'HTM Sitemap', status: 'WARNING', finding: 'Your website has HTM Sitemap missing', action: 'Generate HTML sitemap page', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'Technical SEO', item: 'Canonical Tags', status: 'PASS', finding: 'Your website has Canonical Tags implemented', action: 'Maintain canonical tags', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },

    // On-Page SEO Checks
    { category: 'On-Page SEO', item: 'Meta Title Optimization', status: 'WARNING', finding: 'Lacks Dutch target keywords & needs optimization', action: 'Rewrite titles with target keywords', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', item: 'Meta Description Optimization', status: 'WARNING', finding: 'Meta descriptions need rewrite & missing keywords', action: 'Rewrite meta descriptions', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', item: 'Heading Structure (H2-H6)', status: 'WARNING', finding: 'Heading structure needs keyword integration', action: 'Restructure headers with target terms', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },
    { category: 'On-Page SEO', item: 'Primary H1 Tag', status: 'FAIL', finding: 'Your website has missing H1 heading page', action: 'Add <h1> tags on primary pages', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', item: 'Image ALT Text Attributes', status: 'FAIL', finding: '9 product images have missing ALT text', action: 'Add alt attributes to all 9 images', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', item: 'Text to HTML Ratio', status: 'FAIL', finding: '5.14% Text ratio (below 15% minimum threshold)', action: 'Expand page content to 300+ words', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
    { category: 'On-Page SEO', item: 'Google Analytics Setup', status: 'WARNING', finding: 'Google™ Analytics is not monitoring website', action: 'Setup GA4 tracking script', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },

    // Link Health
    { category: 'Link Health', item: 'Broken Link Audit', status: 'FAIL', finding: 'Your website has broken links detected', action: 'Fix or redirect broken link paths', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },

    // Content Optimization
    { category: 'Content Optimization', item: 'Schema.org Markup', status: 'WARNING', finding: 'Does not properly utilize Schema.org markup', action: 'Implement Schema markup', icon: '!', badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold', rowStyle: 'bg-amber-50/50 border-l-4 border-l-[#FFC107]' },

    // Loading Speed
    { category: 'Site Loading Speed', item: 'PageSpeed Desktop & Mobile', status: 'PASS', finding: 'Desktop: Score 98 | Mobile: Score 95 (Perfect)', action: 'Maintain current speed rating', icon: '✓', badgeStyle: 'bg-[#48B83B] text-white font-extrabold', rowStyle: 'bg-white' },

    // Social Media
    { category: 'Social Media', item: 'Social Media Integration', status: 'FAIL', finding: 'FB, IG, TikTok, YouTube not well organized', action: 'Integrate active social channels', icon: 'X', badgeStyle: 'bg-red-600 text-white font-black', rowStyle: 'bg-red-50/70 border-l-4 border-l-red-600' },
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="audit-findings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Header without clutter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-[#48B83B] uppercase tracking-wider block font-mono">
              SECTION 1.0 • SITE HEALTH DIAGNOSTIC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-2">
              Technical SEO Audit Checklist For (
              <a
                href="https://bargelloeindhoven.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#48B83B] hover:underline inline-block"
              >
                bargelloeindhoven.nl
              </a>
              )
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl pt-1">
              Comprehensive technical evaluation of <strong className="text-slate-900 font-bold">bargelloeindhoven.nl</strong> revealing key structural deficits: missing H1 tags, 5.14% thin text-to-HTML ratio, 9 product images missing ALT tags, and unoptimized Dutch metadata.
            </p>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('roadmap')}
            className="px-5 py-2.5 rounded-xl bg-[#48B83B] hover:bg-emerald-600 text-white text-xs font-extrabold shadow-2xs transition shrink-0 cursor-pointer flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View Fix Execution Plan</span>
            <span>→</span>
          </button>
        </div>

        {/* Audit Executive Summary Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">Passed Checks</span>
              <span className="text-lg font-black text-[#48B83B]">4 Checks</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-[#48B83B] text-white font-black text-xs flex items-center justify-center shadow-2xs">✓</span>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-900 uppercase block">Warnings</span>
              <span className="text-lg font-black text-amber-600">6 Items</span>
            </div>
            <span className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black text-xs flex items-center justify-center shadow-2xs">!</span>
          </div>

          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold text-red-900 uppercase block">Critical Fails</span>
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
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Audit Check Item</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4">Project Finding / Observation</th>
                <th className="py-3.5 px-4">Webestone Action Strategy</th>
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
