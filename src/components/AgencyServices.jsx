import React from 'react';
import { CheckSquare, Sparkles, Layers, BarChart3, Bot, Share2, MousePointerClick, ShoppingBag, FileText } from 'lucide-react';

export default function AgencyServices() {
  const coreStrengths = [
    {
      title: 'Full-Stack Architecture',
      desc: 'We eliminate disjointed marketing efforts. We build a closed-loop digital ecosystem where your website performance, social proof, and organic search presence directly reinforce one another to maximize conversions.'
    },
    {
      title: 'Advanced AI Integration',
      desc: 'Traditional digital methods are reactive. Our workflows utilize sophisticated LLM insights, search entity mapping, and automated asset optimization to predict market shifts and capture high-intent audience segments faster than standard agencies.'
    },
    {
      title: 'Data-Backed Execution',
      desc: 'Every campaign, content strategy, and creative asset we deploy is strictly guided by deep market data analytics, ensuring zero wasted ad spend and transparent performance accountability.'
    }
  ];

  const serviceFrameworks = [
    {
      title: 'AI SEO Services',
      icon: Bot,
      desc: 'Moving past basic keywords, we utilize advanced AI search insights, semantic SEO frameworks, and comprehensive entity mapping. We analyze real-time search intent to build structural site authority, improve ranking velocity, and secure long-term organic traffic.',
      items: [
        'SEO (On-Page, Off-Page, Technical SEO, Local SEO)',
        'Shopify SEO',
        'AIO ( AI Overview )',
        'AEO (Answer Engine Optimization)',
        'GEO (Generative Engine Optimization)'
      ]
    },
    {
      title: 'Social Media Marketing (SMM)',
      icon: Share2,
      desc: 'Our focus relies on community cultivation, active audience engagement, and high-impact creative distribution to turn casual viewers into loyal brand advocates.',
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
      title: 'PPC (Pay-Per-Click Advertising)',
      icon: MousePointerClick,
      desc: 'We run data-driven PPC campaigns to maximize ROI through precise targeting, optimized ads, and continuous performance monitoring.',
      items: [
        'Google Ads',
        'Meta Ads',
        'TikTok Ads',
        'LinkedIn Ads',
        'Twitter Ads',
        'Pinterest Ads'
      ]
    },
    {
      title: 'Shopify SEO',
      icon: ShoppingBag,
      desc: 'Purpose-built optimization for e-commerce environments. We refine Shopify site architectures, structurally enhance product and collection pages, fix technical crawl errors and optimize schema markup to maximize visibility directly in high-intent commercial search results.',
      items: [
        'Shopify Technical Crawl Audit',
        'Collection & Product Schema Markup',
        'E-Commerce Conversion Rate Optimization'
      ]
    },
    {
      title: 'Content Writing',
      icon: FileText,
      desc: 'Crafting authoritative, deeply researched content engineered for both human readers and search engines. From long-form informational articles to conversion-focused copy, we build brand voice while satisfying search alignment and topical depth.',
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
            SECTION 6.0 • AGENCY CAPABILITIES
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Core Strengths & Service Framework
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Full-stack digital marketing architecture engineered with AI-driven precision and data-backed execution.
          </p>
        </div>

        {/* 1. Core Strengths Banner with Green Dashed Border */}
        <div className="p-6 sm:p-8 rounded-3xl border-2 border-dashed border-[#48B83B] bg-emerald-50/40 mb-10 shadow-2xs">
          <div className="text-center mb-6">
            <span className="text-[#48B83B] text-xs font-black uppercase font-mono tracking-widest block">OUR CORE STRENGTHS</span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Full stack digital marketing</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreStrengths.map((cs, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs hover-lift transition-all">
                <h4 className="font-extrabold text-base text-[#48B83B] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#48B83B]" />
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
            Our Core Digital Marketing Service Framework
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
                    <span className="text-[11px] font-black uppercase text-[#48B83B] font-mono block mb-2">DELIVERABLE CHECKLIST</span>
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
