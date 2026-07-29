import React from 'react';
import { Search, Compass, Cpu, LineChart, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function WorkProcess({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white border-b border-slate-200 overflow-hidden" id="work-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('process.badge')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t('process.title')}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('process.subTitle')}
          </p>
        </div>

        {/* Work Process Diagram Layout */}
        <div className="relative max-w-5xl mx-auto p-4 sm:p-8 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100/80 shadow-xs">
          
          {/* Top Stage */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => onNavigate && onNavigate('audit-findings')}
              className="w-full sm:w-80 p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all text-left cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <Search className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">{t('process.step1Title')}</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('process.step1Desc')}
              </p>
            </button>
          </div>

          {/* Central Process Node */}
          <div className="flex justify-center my-6">
            <div className="px-8 py-4 rounded-full bg-[#D4F4C7] border-2 border-[#48B83B] text-[#1E5631] font-black text-xl tracking-wider text-center shadow-md relative animate-pulse">
              <span className="text-slate-400 text-xs block font-bold font-mono tracking-normal mb-0.5">{t('process.flowTag')}</span>
              {t('process.nodeTitle')}
            </div>
          </div>

          {/* Middle Row (Left & Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <button
              onClick={() => onNavigate && onNavigate('roadmap')}
              className="p-5 rounded-2xl bg-[#E8F8F0] border-2 border-[#48B83B] shadow-sm hover-lift transition-all text-left cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
                <Compass className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">{t('process.step2Title')}</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('process.step2Desc')}
              </p>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('core-services')}
              className="p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all text-left cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <Cpu className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">{t('process.step3Title')}</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('process.step3Desc')}
              </p>
            </button>
          </div>

          {/* Bottom Row (Left & Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <button
              onClick={() => onNavigate && onNavigate('summary')}
              className="p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all text-left cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <LineChart className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">{t('process.step4Title')}</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('process.step4Desc')}
              </p>
            </button>

            <button
              onClick={() => onNavigate && onNavigate('portfolio')}
              className="p-5 rounded-2xl bg-[#E8F8F0] border-2 border-[#48B83B] shadow-sm hover-lift transition-all text-left cursor-pointer hover:scale-[1.02]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
                <TrendingUp className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">{t('process.step5Title')}</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('process.step5Desc')}
              </p>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
