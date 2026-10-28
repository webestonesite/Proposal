import React from 'react';
import { CheckSquare, Target, Layers, BarChart3, Bot, Share2, MousePointerClick, ShoppingBag, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function AgencyServices() {
  const { t } = useLanguage();

  const coreStrengths = [
    {
      title: t('services.core1Title'),
      desc: t('services.core1Desc')
    },
    {
      title: t('services.core2Title'),
      desc: t('services.core2Desc')
    },
    {
      title: t('services.core3Title'),
      desc: t('services.core3Desc')
    }
  ];

  const serviceFrameworks = [
    {
      title: t('services.s1Title'),
      icon: Bot,
      desc: t('services.s1Desc'),
      items: [
        'SEO (On-Page, Off-Page, Technical SEO, Local SEO)',
        'E-Commerce SEO',
        'AIO ( AI Overview )',
        'AEO (Answer Engine Optimization)',
        'GEO (Generative Engine Optimization)'
      ]
    },
    {
      title: t('services.s2Title'),
      icon: Share2,
      desc: t('services.s2Desc'),
      items: [
        'Brand Strategy & Engagement',
        'Paid Advertising Campaigns',
        'Audience Targeting',
        'Content Planning',
        'Social Media Post Design',
        'Conversion Optimization',
        'AI & Advanced Analytics',
        'Lead Generation'
      ]
    },
    {
      title: t('services.s3Title'),
      icon: MousePointerClick,
      desc: t('services.s3Desc'),
      items: [
        'Meta Ads',
        'TikTok Ads',
        'LinkedIn Ads',
        'Twitter Ads',
        'Pinterest Ads'
      ]
    },
    {
      title: t('services.s4Title'),
      icon: ShoppingBag,
      desc: t('services.s4Desc'),
      items: [
        'E-Commerce Technical Crawl Audit',
        'Collection & Product Schema Markup',
        'E-Commerce Conversion Rate Optimization'
      ]
    },
    {
      title: t('services.s5Title'),
      icon: FileText,
      desc: t('services.s5Desc'),
      items: [
        'Content Writing',
        'Content Marketing',
        'SEO-Friendly Content',
        'Content Planning'
      ]
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="core-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            {t('services.sectionTitle')}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {t('services.strengthsHeading')}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            {t('services.sectionSub')}
          </p>
        </div>

        {/* 1. Core Strengths Banner with Green Dashed Border */}
        <div className="p-6 sm:p-8 rounded-3xl border-2 border-dashed border-[#48B83B] bg-emerald-50/40 mb-10 shadow-2xs">
          <div className="text-center mb-6">
            <span className="text-[#48B83B] text-xs font-black uppercase font-mono tracking-widest block">{t('services.strengthsBadge')}</span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">{t('services.strengthsHeading')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreStrengths.map((cs, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs hover-lift transition-all">
                <h4 className="font-extrabold text-base text-[#48B83B] mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#48B83B]" />
                  {cs.title}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Service Framework Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 rounded-full border-2 border-dashed border-[#48B83B] bg-white text-slate-900 font-black text-lg shadow-xs">
            {t('services.frameworkHeading')}
          </div>
        </div>

        {/* Service Cards list with green dashed border wrappers */}
        <div className="space-y-6">
          {serviceFrameworks.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl border-2 border-dashed border-[#48B83B] bg-white hover:bg-slate-50/50 transition-all shadow-xs">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  {/* Left Info */}
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#48B83B] flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">{srv.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  {/* Right Checklist Items */}
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 shrink-0 min-w-[280px] sm:min-w-[320px]">
                    <span className="text-[11px] font-black uppercase text-[#48B83B] font-mono block mb-2">{t('services.checklistHeader')}</span>
                    <div className="space-y-1.5 text-xs font-semibold text-slate-800">
                      {srv.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-2">
                          <CheckSquare className="w-4 h-4 text-[#48B83B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
