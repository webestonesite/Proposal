import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Award, CheckCircle2, Star, ArrowRight, ShieldCheck, Lock, X, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import CountUp from './CountUp';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function AgencyPortfolio() {
  const { t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState(null);

  const caseStudies = [
    {
      client: t('portfolio.case1Title'),
      category: 'Digital Marketing & E-Commerce',
      completionDate: 'Feb 9, 2026',
      trafficGrowth: '+420%',
      timeframe: 'Completed: Feb 9, 2026',
      liveUrl: 'https://vapstall.ae/',
      upworkUrl: 'https://www.upwork.com/agencies/2054887750647587729/modal-portfolio-project?pageTitle=E-Commerce%20SEO%20for%20Vape%20Stall%20Dubai&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22E-Commerce%20SEO%20for%20Vape%20Stall%20Dubai%22,%22modalId%22%3A%221785275586445%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D&nav_dir=pop',
      overview: t('portfolio.case1Desc'),
      highlights: [
        'E-Commerce SEO, Templates & Technical Audit',
        'Keyword Research & Regional Compliance Setup',
        'Product Catalog Setup & E-Commerce Optimization',
        'E-Commerce Marketing & Search Engine Configuration'
      ],
      skills: ['E-Commerce SEO', 'SEO Audit', 'Keyword Research', 'Product Catalog Setup', 'E-Commerce Marketing'],
      tag: 'Our Client Case Study #1',
      badgeBg: 'bg-emerald-100 text-emerald-800 border border-emerald-300'
    },
    {
      client: t('portfolio.case2Title'),
      category: 'Digital Marketing & B2B Software',
      completionDate: 'Mar 15, 2026',
      trafficGrowth: '+380%',
      timeframe: 'Completed: Mar 15, 2026',
      liveUrl: 'https://fastit.com.bd/',
      upworkUrl: 'https://www.upwork.com/agencies/2054887750647587729/modal-portfolio-project?nav_dir=pop&pageTitle=Search%20Engine%20Optimization%20for%20FastIT&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Search%20Engine%20Optimization%20for%20FastIT%22,%22modalId%22%3A%221785275817524%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D',
      overview: t('portfolio.case2Desc'),
      highlights: [
        'SEO Audit, Keyword Research & Competitor Analysis',
        'Technical SEO Setup & Structural Guidelines',
        'High-Converting SEO Content & Landing Copy',
        'On-Page SEO & Search Engine Configuration'
      ],
      skills: ['SEO Audit', 'Keyword Research', 'Competitor Analysis', 'SEO Content', 'On-Page SEO'],
      tag: 'Our Client Case Study #2',
      badgeBg: 'bg-blue-100 text-blue-900 border border-blue-300'
    },
    {
      client: t('portfolio.case3Title'),
      category: 'E-Commerce & Regional Dubai Vape Market',
      completionDate: 'Jan 2026',
      trafficGrowth: '+310%',
      timeframe: 'Completed: Jan 2026',
      liveUrl: 'https://vapshopdubai.ae/',
      isLocked: true,
      overview: t('portfolio.case3Desc'),
      highlights: [
        'Vape Pods & E-Liquid Catalog SEO Architecture',
        'Local Search Ranking in Dubai & UAE Regions',
        'Technical Schema & Product Meta Optimization'
      ],
      skills: ['Vape SEO', 'E-Commerce SEO', 'Local Dubai SEO', 'Keyword Research', 'Catalog Optimization'],
      tag: 'Our Client Case Study #3',
      badgeBg: 'bg-purple-100 text-purple-900 border border-purple-300'
    },
    {
      client: 'Vape Pods & E-Liquid E-Commerce SEO Engine',
      category: 'Middle East E-Commerce Scaling',
      completionDate: 'Dec 2025',
      trafficGrowth: '+450%',
      timeframe: 'Completed: Dec 2025',
      liveUrl: 'https://ostore.ae/',
      isLocked: true,
      overview: 'Full-stack e-commerce search architecture for premium vape pods, disposable devices, and liquid brands. Built custom product template SEO, internal link siloing, and speed optimization.',
      highlights: [
        'Category & Product Silo Optimization for Vape Pods',
        'Vape Pods High-Volume Transactional Keywords',
        'Speed & Core Web Vitals Technical Optimization'
      ],
      skills: ['Vape Pods SEO', 'E-Commerce Architecture', 'Product Schema', 'Conversion Optimization'],
      tag: 'Our Client Case Study #4',
      badgeBg: 'bg-amber-100 text-amber-900 border border-amber-300'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t('portfolio.title')}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('portfolio.subTitle')}
          </p>
        </div>

        {/* Agency Overall Impact Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-[#48B83B]">
              <span className="print:hidden"><CountUp end={85} suffix="+" /></span>
              <span className="hidden print:inline">85+</span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">{t('portfolio.stat1Title')}</div>
            <div className="text-[11px] text-slate-500 font-medium">{t('portfolio.stat1Sub')}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-slate-900">
              <span className="print:hidden"><CountUp prefix="+" end={350} suffix="%" /></span>
              <span className="hidden print:inline">+350%</span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">{t('portfolio.stat2Title')}</div>
            <div className="text-[11px] text-slate-500 font-medium">{t('portfolio.stat2Sub')}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-slate-900">
              <span className="print:hidden"><CountUp end={5000} suffix="+" /></span>
              <span className="hidden print:inline">5,000+</span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">{t('portfolio.stat3Title')}</div>
            <div className="text-[11px] text-slate-500 font-medium">{t('portfolio.stat3Sub')}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-[#48B83B]">
              <span className="print:hidden"><CountUp end={98} suffix="%" /></span>
              <span className="hidden print:inline">98%</span>
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">{t('portfolio.stat4Title')}</div>
            <div className="text-[11px] text-slate-500 font-medium">{t('portfolio.stat4Sub')}</div>
          </div>
        </div>

        {/* Portfolio Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="p-6 rounded-2xl border-2 border-slate-200 bg-white hover:border-[#48B83B] transition-all shadow-xs hover:shadow-md animate-fade-up hover-lift flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase font-mono ${cs.badgeBg}`}>
                    {cs.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {cs.timeframe}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-lg font-black text-slate-900">{cs.client}</h3>
                  <span className="text-2xl font-black text-[#48B83B]">{cs.trafficGrowth}</span>
                </div>

                <p className="text-xs font-bold text-slate-500 mb-3">{cs.category}</p>

                {cs.overview && (
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    {cs.overview}
                  </p>
                )}

                <ul className="space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-3 mb-4">
                  {cs.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                {cs.liveUrl && (
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 border-2 border-[#48B83B] text-slate-900 hover:bg-[#48B83B] hover:text-white text-xs font-black transition-all shadow-2xs hover:scale-[1.02]"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#48B83B] group-hover:text-white" />
                    <span>{t('portfolio.visitLive')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {cs.upworkUrl && (
                  <a
                    href={cs.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#14a800] hover:bg-[#108a00] text-white text-xs font-black shadow-2xs transition-all hover:scale-[1.02]"
                  >
                    <span>{t('portfolio.upworkProject')}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                )}

                {cs.isLocked && (
                  <button
                    onClick={() => setActiveModalProject(cs)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-50 border-2 border-[#FFC107] text-slate-900 hover:bg-[#FFC107] text-xs font-black transition-all shadow-2xs cursor-pointer hover:scale-[1.02]"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-700" />
                    <span>{t('portfolio.requestNda')}</span>
                  </button>
                )}
              </div>

              {cs.skills && (
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cs.skills.map((sk, skIdx) => (
                    <span key={skIdx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                      #{sk}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Agency Website Link Card — Styled to Match Webestone Proposal Theme */}
        <div className="bg-white text-slate-900 border-2 border-[#48B83B] rounded-2xl p-8 max-w-4xl mx-auto shadow-sm animate-fade-up hover-lift flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1.5">
            <span className="px-3 py-1 rounded bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block">
              {t('portfolio.agencyVaultBadge')}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{t('portfolio.agencyVaultTitle')}</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">{t('portfolio.agencyVaultSub')}</p>
          </div>

          <button
            onClick={() => setActiveModalProject({
              client: t('portfolio.agencyVaultTitle'),
              overview: t('portfolio.agencyVaultSub')
            })}
            className="px-6 py-3.5 rounded-xl bg-amber-50 border-2 border-[#FFC107] text-slate-900 hover:bg-[#FFC107] font-extrabold text-xs flex items-center gap-2 shrink-0 shadow-xs transition-transform hover:scale-105 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-amber-700" />
            <span>{t('portfolio.requestNda')}</span>
          </button>
        </div>

      </div>

      {/* Contact & NDA Access Popup Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in print:hidden">
          <div className="bg-white rounded-2xl border-2 border-[#48B83B] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative space-y-5 animate-fade-up">

            {/* Close Modal Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 font-black shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-[#48B83B] uppercase tracking-wider block">
                  PRIVATE CASE STUDY ACCESS
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  Request Full Portfolio Access
                </h3>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Selected Project</span>
              <p className="text-xs font-extrabold text-slate-900">{activeModalProject.client}</p>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              This case study contains confidential client ranking reports and proprietary keyword data under NDA. To inspect full technical audit metrics or request a customized vape/e-commerce growth strategy sample, please reach out to our Webestone team directly!
            </p>

            {/* Direct Contact Options */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <span className="text-xs font-black text-slate-900 uppercase font-mono block">
                CONTACT WEBESTONE TEAM DIRECTLY:
              </span>

              <a
                href="https://wa.me/8801815025322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-slate-900 text-xs font-bold transition"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#48B83B]" />
                  <span>Call / WhatsApp: +8801815025322</span>
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-[#48B83B] text-white">INSTANT</span>
              </a>

              <a
                href="https://webestone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-slate-900 text-xs font-bold transition"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Website: webestone.com</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              </a>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition"
              >
                Close Dialog
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
