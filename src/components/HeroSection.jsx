import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import CountUp from './CountUp';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useProposal } from '../context/ProposalContext.jsx';

export default function HeroSection({ onOpenModal, onNavigate }) {
  const { t } = useLanguage();
  const { proposal } = useProposal();

  return (
    <section className="py-12 bg-white border-b border-slate-200 relative overflow-hidden">

      {/* Background Webestone Yellow Accent Circle */}
      <div className="absolute -top-12 -left-20 w-96 h-96 bg-[#FFC107] rounded-full pointer-events-none opacity-20 blur-2xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Webestone Clean Proposal Cover Card */}
        <div className="webestone-dashed-card p-8 sm:p-12 relative bg-white shadow-xs animate-fade-up hover-lift">

          <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-emerald-100 pb-8 mb-8 gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3">
                <img
                  src="/webestone_logo.webp"
                  alt="Webestone AI-Powered Digital Marketing Agency"
                  className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#48B83B] text-white font-mono text-[11px] sm:text-xs font-bold shadow-xs animate-pulse leading-snug">
                  {t('header.proposalTag')} • REF: WEB-2026-DM-07
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {t('hero.mainTitle')}
              </h1>

              <p className="text-slate-600 text-base font-medium leading-relaxed">
                {t('hero.subTitle')} Prepared specifically for <strong className="text-slate-900 font-bold">{proposal.domain || 'your digital store'}</strong>.
              </p>
            </div>

            {/* Proposal Metadata Box */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-5 text-xs space-y-2.5 shrink-0 min-w-[280px] hover-lift transition-all">
              <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.preparedBy')}:</span>
                <img src="/webestone_logo.webp" alt="Webestone" className="h-5 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-slate-600 font-semibold shrink-0">{t('welcomeModal.type')}:</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B] font-extrabold text-[11px] border border-emerald-300 text-right leading-snug">
                  {t('welcomeModal.typeVal')}
                </span>
              </div>
              <div className="flex justify-between border-t border-emerald-200 pt-2">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.preparedFor')}:</span>
                <a
                  href={`https://${proposal.domain || t('welcomeModal.preparedForVal')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 font-bold hover:text-[#48B83B] hover:underline"
                >
                  {proposal.domain || t('welcomeModal.preparedForVal')}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.targetMarket')}:</span>
                <strong className="text-slate-900 font-bold">{proposal.targetMarket || t('welcomeModal.targetMarketVal')}</strong>
              </div>
              <div className="flex justify-between border-t border-emerald-200 pt-2">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.proposalDate')}:</span>
                <strong className="text-slate-900 font-bold">{proposal.createdAt || t('welcomeModal.proposalDateVal')}</strong>
              </div>
              <div className="flex justify-between border-t border-emerald-200 pt-2">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.website')}:</span>
                <a
                  href="https://webestone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#48B83B] font-extrabold hover:underline"
                >
                  webestone.com
                </a>
              </div>
              <div className="flex justify-between border-t border-emerald-200 pt-2">
                <span className="text-slate-600 font-semibold">{t('welcomeModal.status')}:</span>
                <button
                  onClick={() => onNavigate('work-process')}
                  className="text-[#48B83B] font-extrabold hover:underline cursor-pointer"
                >
                  {t('welcomeModal.statusVal')}
                </button>
              </div>
            </div>
          </div>

          {/* Webestone 01-04 Core Strategy Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <button
              onClick={() => onNavigate('audit-findings')}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-left hover:border-[#48B83B] hover:bg-emerald-50/50 hover:shadow-xs transition cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC107] text-slate-900 font-black text-sm flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t('welcomeModal.card1Title')}</span>
                <span className="text-[11px] text-slate-500 font-medium">{t('welcomeModal.card1Sub')}</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('work-process')}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-left hover:border-[#48B83B] hover:bg-emerald-50/50 hover:shadow-xs transition cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC107] text-slate-900 font-black text-sm flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t('welcomeModal.card2Title')}</span>
                <span className="text-[11px] text-slate-500 font-medium">{t('welcomeModal.card2Sub')}</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('work-process')}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-left hover:border-[#48B83B] hover:bg-emerald-50/50 hover:shadow-xs transition cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC107] text-slate-900 font-black text-sm flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t('welcomeModal.card3Title')}</span>
                <span className="text-[11px] text-slate-500 font-medium">{t('welcomeModal.card3Sub')}</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('work-process')}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-left hover:border-[#48B83B] hover:bg-emerald-50/50 hover:shadow-xs transition cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#FFC107] text-slate-900 font-black text-sm flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t('welcomeModal.card4Title')}</span>
                <span className="text-[11px] text-slate-500 font-medium">{t('welcomeModal.card4Sub')}</span>
              </div>
            </button>
          </div>

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('work-process')}
              className="px-6 py-3 rounded-lg bg-[#48B83B] text-white hover:bg-emerald-600 font-bold text-xs flex items-center gap-2 shadow-xs transition cursor-pointer"
            >
              <span>{t('hero.explorePlan')}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onOpenModal}
              className="px-6 py-3 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs flex items-center gap-2 shadow-xs transition cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>{t('hero.authorizeAgreement')}</span>
            </button>
          </div>

        </div>

        {/* Executive Agency Overview Section */}
        <div className="mt-8 bg-white border-2 border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm animate-fade-up hover-lift relative overflow-hidden">

          {/* Top 4 Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-slate-200">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-[#48B83B]">
                <CountUp end={100} suffix="+" />
              </div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">{t('about.stat1Title')}</div>
              <div className="text-[11px] text-slate-500 font-medium">{t('about.stat1Sub')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-slate-900">
                <CountUp end={6} suffix="+ Years" />
              </div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">{t('about.stat2Title')}</div>
              <div className="text-[11px] text-slate-500 font-medium">{t('about.stat2Sub')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-slate-900">Monthly</div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">{t('about.stat3Title')}</div>
              <div className="text-[11px] text-slate-500 font-medium">{t('about.stat3Sub')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-[#48B83B]">
                <CountUp end={100} suffix="%" />
              </div>
              <div className="text-xs font-bold text-slate-800 mt-0.5">{t('about.stat4Title')}</div>
              <div className="text-[11px] text-slate-500 font-medium">{t('about.stat4Sub')}</div>
            </div>
          </div>

          {/* 2-Column Agency Story & Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Agency Story */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded bg-emerald-100 text-[#48B83B] text-xs font-black uppercase font-mono tracking-wider inline-block">
                {t('about.badge')}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                {t('about.title')}
              </h3>

              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {t('about.desc1')}
              </p>

              <p className="text-slate-600 text-xs font-medium leading-relaxed">
                {t('about.desc2')}
              </p>

              {/* Global Office Locations Grid */}
              <div className="pt-4 border-t border-slate-200 mt-4">
                <span className="text-xs font-bold text-slate-900 font-mono uppercase mb-2.5 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#48B83B]" />
                  {t('about.offices')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-300/80 hover-lift transition-all shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#48B83B] shrink-0" />
                      <strong className="text-xs font-extrabold text-slate-900">Perth, Australia</strong>
                    </div>
                    <span className="text-[10px] text-emerald-800 font-extrabold block mt-1">
                      {t('about.perthTag')}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover-lift transition-all shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <strong className="text-xs font-bold text-slate-900">Dhaka, Bangladesh</strong>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold block mt-1">
                      GMT+6
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover-lift transition-all shadow-2xs">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <strong className="text-xs font-bold text-slate-900">London, United Kingdom</strong>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold block mt-1">
                      GMT+1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Core Skills Grid */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider block font-mono">
                {t('about.skillsBadge')}
              </span>

              <div className="grid grid-cols-1 gap-2.5 text-xs font-bold text-slate-800">
                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">🔍</span>
                  <span>{t('about.skill1')}</span>
                </button>

                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">💻</span>
                  <span>{t('about.skill2')}</span>
                </button>

                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">📱</span>
                  <span>{t('about.skill3')}</span>
                </button>

                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">🎨</span>
                  <span>{t('about.skill4')}</span>
                </button>

                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">✍️</span>
                  <span>{t('about.skill5')}</span>
                </button>

                <button
                  onClick={() => onNavigate('core-services')}
                  className="w-full text-left p-3 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 hover:border-[#48B83B] hover:bg-emerald-50/50 transition-all shadow-2xs cursor-pointer"
                >
                  <span className="text-base">📈</span>
                  <span>{t('about.skill6')}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
