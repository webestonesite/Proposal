import React from 'react';
import { ShieldAlert, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function CompetitorMatrix() {
  const { t } = useLanguage();
  const competitors = [
    {
      rank: '#1',
      name: 'Douglas',
      position: 'European Market Leader',
      pages: '1,000+',
      keywords: '8,500+',
      traffic: '5,200,000 / mo',
      da: '52',
      stores: '2,400+',
      isBargello: false,
      rankBadge: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      rank: '#2',
      name: 'ICI Paris XL',
      position: 'National Dutch Leader',
      pages: '500+',
      keywords: '484',
      traffic: '664,000 / mo',
      da: '47',
      stores: '100+',
      isBargello: false,
      rankBadge: 'bg-[#FFC107] text-slate-900 font-extrabold'
    },
    {
      rank: '#3',
      name: 'Parfumado',
      position: 'Niche Scent Specialist',
      pages: '100+',
      keywords: '38',
      traffic: '350,000 / mo',
      da: '34',
      stores: '0 (Online Only)',
      isBargello: false,
      rankBadge: 'bg-slate-200 text-slate-800'
    },
    {
      rank: '#4',
      name: 'Bargello Eindhoven',
      position: 'Local Niche Retailer (Current)',
      pages: '35 – 40',
      keywords: '0',
      traffic: '50 – 100 / mo',
      da: '1',
      stores: '1 (Eindhoven)',
      isBargello: true,
      rankBadge: 'bg-[#48B83B] text-white font-black'
    }
  ];

  const gaps = [
    {
      title: 'Gap 1: Content Volume Deficit',
      desc: 'Bargello has 35–40 pages vs Parfumado’s 100+ pages (60% volume deficit). Organic discovery requires expanding category guides & scent blogs.',
      severity: 'HIGH',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      title: 'Gap 2: Ranking Keywords Void',
      desc: 'Bargello currently ranks for 0 keywords vs Parfumado’s 38 niche terms and Douglas’s 8,500+. Immediate target: capture 35+ high-intent Dutch keywords.',
      severity: 'CRITICAL',
      badgeBg: 'bg-red-100 text-red-900 border-red-300'
    },
    {
      title: 'Gap 3: Domain Authority & Backlinks',
      desc: 'Bargello DA is 1 vs Parfumado (34) & ICI Paris XL (47). Building 100+ Dutch niche backlinks will bridge the authority gap within 6 months.',
      severity: 'HIGH',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      title: 'Gap 4: Local Eindhoven Monopoly',
      desc: 'Neither Parfumado nor Douglas optimize specifically for Eindhoven local intent. Bargello can capture 100% of regional Brabant local search volume.',
      severity: 'OPPORTUNITY',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    }
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 2.0 • COMPETITOR MATRIX
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Rank-Ordered Competitor Audit & Strategic Gaps
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Dutch market ranking hierarchy: Douglas (#1), ICI Paris XL (#2), Parfumado (#3), vs Bargello Eindhoven (#4).
          </p>
        </div>

        {/* Rank Ordered Competitor Table */}
        <div className="overflow-x-auto border-2 border-[#48B83B] rounded-xl bg-white shadow-xs mb-8">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#48B83B] text-white uppercase tracking-wider font-extrabold text-[11px]">
              <tr>
                <th className="py-3.5 px-4">Market Rank</th>
                <th className="py-3.5 px-4 sm:px-6">Competitor Name</th>
                <th className="py-3.5 px-4">Market Position</th>
                <th className="py-3.5 px-4">Indexed Pages</th>
                <th className="py-3.5 px-4">Ranking Keywords</th>
                <th className="py-3.5 px-4">Monthly Traffic</th>
                <th className="py-3.5 px-4">Domain Auth (DA)</th>
                <th className="py-3.5 px-4">Physical Stores</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {competitors.map((item, idx) => (
                <tr
                  key={idx}
                  className={`transition duration-150 ${
                    item.isBargello ? 'bg-emerald-50/80 font-bold text-slate-900 border-l-4 border-l-[#48B83B]' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded font-mono text-[11px] font-black ${item.rankBadge}`}>
                      {item.rank}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-extrabold text-slate-900 flex items-center gap-2">
                    {item.name}
                    {item.isBargello && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#48B83B] text-white font-extrabold uppercase">TARGET OPPORTUNITY</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-700">
                    {item.position}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">{item.pages}</td>
                  <td className="py-3.5 px-4 font-mono font-black text-[#48B83B]">{item.keywords}</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">{item.traffic}</td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">{item.da}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">{item.stores}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Clean Strategic Gap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gaps.map((gap, i) => (
            <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#48B83B]" />
                  {gap.title}
                </h3>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded border ${gap.badgeBg}`}>
                  {gap.severity}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{gap.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
