import React from 'react';
import { Check, ShieldCheck, Zap, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function InvestmentPricing({ onOpenModal }) {
  const { t } = useLanguage();

  const deliverables = [
    'Complete Technical SEO Infrastructure Audit & Fixes',
    '35-40 Meta Titles & Descriptions UAE Optimization',
    'Schema Markup (Product, LocalBusiness, Organization)',
    '240+ Pages of High-Quality Vape & Terea Content',
    'Google Business Profile Optimization for Dubai',
    '100+ Premium UAE Backlinks (Blogs & Press Releases)',
    'Monthly Performance & Keyword Ranking Analytics Reports',
    'Dedicated SEO Specialist & Priority Direct Support'
  ];

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('financial.sectionTitle')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Commercial Investment & Scope Breakdown
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('financial.sectionSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Package Pricing Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#48B83B] shadow-sm relative animate-fade-up hover-lift animate-pulse-glow">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded bg-[#FFC107] text-slate-900 font-extrabold text-[10px] tracking-wide uppercase animate-pulse">
                Recommended Package
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-0.5">Full 6-Month SEO Package</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">UAE Market Dominance Strategy</p>

              <div className="flex items-baseline gap-2 border-b border-emerald-100 pb-4 mb-4">
                <span className="text-3xl font-black text-slate-900">$880</span>
                <span className="text-xs text-slate-500 font-bold">/ month (6 Months)</span>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-700 font-semibold">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Total Campaign Investment</span>
                  <span className="font-extrabold text-slate-900">$5,300 – $7,300</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Breakeven Horizon</span>
                  <span className="font-extrabold text-[#48B83B]">1.5 – 2 Months</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Target Month 6 Revenue</span>
                  <span className="font-extrabold text-[#2563EB]">$4,340 – $4,410 / mo</span>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full py-3 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs transition"
              >
                <ShieldCheck className="w-4 h-4 text-slate-900" />
                Authorize Commercial Terms
              </button>
            </div>
          </div>

          {/* Right: Scope Items */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#48B83B]" />
              Contractual Scope Deliverables:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-bold shadow-2xs">
                  <div className="p-0.5 rounded bg-emerald-100 text-[#48B83B] mt-0.5 border border-emerald-300 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-slate-700 flex items-center gap-3 shadow-2xs">
              <Award className="w-5 h-5 text-[#48B83B] shrink-0" />
              <p>
                <strong className="text-slate-900 font-extrabold">Webestone Risk-Free Execution Guarantee:</strong> If Month 3 target indexing milestone is not achieved, Webestone will double outreach and technical audits at zero extra fee.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
