import React from 'react';

export default function AuditIssues() {
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
        <div className="mb-6">
          <span className="text-xs font-bold text-[#48B83B] uppercase tracking-wider block font-mono">
            SECTION 1.0
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Technical SEO Audit Checklist (bargelloeindhoven.nl)
          </h2>
          <p className="text-slate-600 text-xs mt-1">
            Official website audit findings and Webestone execution strategy.
          </p>
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
                <tr key={idx} className={`transition ${row.rowStyle}`}>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-500 text-[11px] uppercase">{row.category}</td>
                  <td className="py-3.5 px-4 font-extrabold text-slate-900">{row.item}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs shadow-2xs ${row.badgeStyle}`}>
                      {row.icon}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-800">{row.finding}</td>
                  <td className="py-3.5 px-4 font-bold text-[#48B83B]">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
