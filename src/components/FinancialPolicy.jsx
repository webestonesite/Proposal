import React from 'react';
import { DollarSign, ShieldCheck, Clock, Calendar, Globe } from 'lucide-react';

export default function FinancialPolicy({ onOpenModal }) {
  const terms = [
    {
      title: 'Initial Setup Deposit',
      desc: 'Commences our dedicated onboarding, strategic setup, and delivery processes, aligning all agency resources directly with the timeline of your expected project.',
      icon: DollarSign,
      color: 'bg-emerald-100 text-[#48B83B] border-emerald-300'
    },
    {
      title: '50% Operational Completion Transition',
      desc: 'Once exactly half of the project deliverables are met and approved, 50% of the total project fee must be paid.',
      icon: ShieldCheck,
      color: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      title: 'Structured Instalment Standard',
      desc: 'Following the 50% completion payment, the remaining balance will be split into scheduled installments due every 15 days.',
      icon: Calendar,
      color: 'bg-blue-100 text-blue-800 border-blue-300'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="financial-policy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card with dashed border matching Webestone Proposal design */}
        <div className="p-6 sm:p-10 rounded-3xl border-2 border-dashed border-[#48B83B] bg-slate-50/50 shadow-xs">
          
          <div className="text-center mb-8">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
              FINANCIAL TERMS & AGREEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              FINANCIAL ENGAGEMENT POLICY
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-medium max-w-2xl mx-auto leading-relaxed">
              We craft high-quality, SEO-friendly content that connects with your audience and strengthens your brand voice through transparent & structured financial milestones. Click any stage to authorize.
            </p>
          </div>

          {/* 3 Payment Stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {terms.map((t, idx) => {
              const Icon = t.icon;
              return (
                <button
                  key={idx}
                  onClick={onOpenModal}
                  className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#48B83B] hover:bg-emerald-50/40 transition-all shadow-xs hover-lift flex flex-col justify-between text-left cursor-pointer"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${t.color} border flex items-center justify-center font-bold mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.title}</h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {t.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#48B83B] font-mono">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#48B83B]" />
                      Stage 0{idx + 1} Terms
                    </span>
                    <span className="font-extrabold hover:underline">Authorize →</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Official Agency Web Link Footer Bar */}
          <div className="pt-4 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-slate-700">
            <span>Official Webestone Financial Policy</span>
            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48B83B] hover:underline flex items-center gap-1.5 font-extrabold"
            >
              <Globe className="w-4 h-4" />
              https://webestone.com/
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
