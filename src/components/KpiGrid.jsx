import React from 'react';

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

  return (
    <section className="py-10 bg-white border-b border-slate-200" id="comparison-benchmark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 1.0 • METRIC COMPARISON
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Client vs Competitors Metric Comparison
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Side-by-side analysis of Bargello Eindhoven vs Parfumado, ICI Paris XL, and Douglas across indexed pages, traffic, keywords, and content depth.
          </p>
        </div>

        {/* Pure 5-Column Comparison Table */}
        <div className="overflow-x-auto border-2 border-[#48B83B] rounded-xl bg-white shadow-xs">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
              <tr>
                <th className="py-3.5 px-4">SEO Metric / Factor</th>
                <th className="py-3.5 px-4 bg-emerald-700">Bargello (Client)</th>
                <th className="py-3.5 px-4">Parfumado (Niche)</th>
                <th className="py-3.5 px-4">ICI Paris XL (National)</th>
                <th className="py-3.5 px-4">Douglas (Leader)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{row.factor}</td>
                  <td className="py-3.5 px-4 font-extrabold text-red-700 bg-emerald-50/80 font-mono">
                    {row.client}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">{row.parfumado}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">{row.iciParis}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">{row.douglas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
