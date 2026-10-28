import React from 'react';
import { 
  FileText, 
  Languages, 
  Check,
  ShieldAlert,
  ArrowRight,
  Target
} from 'lucide-react';

export default function ExecutiveSummary() {

  const auditFindings = [
    {
      code: 'A',
      title: 'Technical SEO & Indexing Issues',
      severity: 'CRITICAL',
      badgeStyle: 'bg-red-600 text-white font-black',
      items: [
        { title: 'Limited Indexation', detail: 'Only 5 pages are currently indexed by search engines.' },
        { title: 'Missing Sitemap', detail: 'The website lacks an HTML Sitemap, making site navigation inefficient for both users and search crawlers.' },
        { title: 'No Organic Search Traffic or Keywords', detail: 'Organic traffic and keyword rankings are currently N/A (zero visibility) due to indexation and optimization gaps.' }
      ]
    },
    {
      code: 'B',
      title: 'Analytics & Performance Tracking',
      severity: 'ACTION REQUIRED',
      badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold',
      items: [
        { title: 'Google Analytics Missing', detail: 'Google™ Analytics is not monitoring your website. Without tracking you cannot measure visitor traffic, traffic sources, user behavior or conversions.' }
      ]
    },
    {
      code: 'C',
      title: 'On-Page & Content Structure',
      severity: 'WARNING',
      badgeStyle: 'bg-[#FFC107] text-slate-900 font-extrabold',
      items: [
        { title: 'Meta Title Issues', detail: 'Titles need optimization—several are too long, while others are too short. Furthermore, duplicate meta titles exist across the site.' },
        { title: 'Duplicate & Missing Meta Descriptions', detail: '18 pages contain duplicate meta descriptions and many miss primary target keywords.' },
        { title: 'Heading Structure (H1, H2, H3)', detail: 'Heading structure needs correction, and target keywords are missing from major headers.' },
        { title: 'Content Depth & Text/HTML Ratio', detail: 'The site suffers from low word count across key pages and an unbalanced Text/HTML ratio.' }
      ]
    },
    {
      code: 'D',
      title: 'Site Speed & Performance',
      severity: 'OPTIMIZATION NEEDED',
      badgeStyle: 'bg-[#48B83B] text-white font-extrabold',
      items: [
        { title: 'Mobile Speed', detail: '89/100 (PageSpeed Insights - Needs minor optimization).' },
        { title: 'Desktop Speed', detail: '74/100 (PageSpeed Insights - Needs structural performance tuning).' }
      ]
    },
    {
      code: 'E',
      title: 'Off-Page & Social Media Integration',
      severity: 'ATTENTION',
      badgeStyle: 'bg-slate-700 text-white font-bold',
      items: [
        { title: 'Backlink Profile', detail: 'Backlinks are completely missing from the site, limiting domain authority.' },
        { title: 'Social Media Connection', detail: 'No social media links or integrations were detected on the website.' },
        { title: 'Link Structure', detail: 'Total Internal Links: 45 (Follow: 45) | Total External Links: 2 (Follow: 2).' }
      ]
    }
  ];

  const solutions = [
    {
      num: '01',
      title: 'Technical & Indexing Overhaul',
      detail: 'We will generate and submit proper XML and HTML sitemaps to ensure all website pages are quickly indexed by Google.'
    },
    {
      num: '02',
      title: 'Metadata & On-Page Optimization',
      detail: 'We will rewrite and optimize all meta titles and descriptions to eliminate duplicates, optimize character length and incorporate high-value target keywords.'
    },
    {
      num: '03',
      title: 'Analytics & Tracking Setup',
      detail: 'We will integrate Google Analytics and Google Search Console to monitor traffic growth, user behavior and conversion tracking.'
    },
    {
      num: '04',
      title: 'Content & Heading Alignment',
      detail: 'We will restructure H1–H3 tags and expand thin content pages to improve word counts and correct the Text/HTML ratio.'
    },
    {
      num: '05',
      title: 'PageSpeed Optimization',
      detail: 'We will optimize scripts, images, and desktop rendering to push performance scores above 90+ across all devices.'
    },
    {
      num: '06',
      title: 'Off-Page & Social Connection',
      detail: 'We will build foundational high-quality backlinks and link your active social channels to build brand authority and trust.'
    }
  ];

  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200" id="executive-summary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#48B83B] uppercase tracking-wider block font-mono">
              EXECUTIVE BRIEFING & AUDIT SUMMARY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Strategic Audit & Execution Framework
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Official analysis for <strong className="text-slate-900">tereapoint.ae</strong> by Webestone Digital Agency
            </p>
          </div>
          
          <div className="px-3.5 py-1.5 rounded-lg bg-emerald-100 text-[#48B83B] text-xs font-extrabold border border-emerald-300 shrink-0 self-start md:self-auto">
            Status: Critical Action Required
          </div>
        </div>

        {/* Executive Summary English & Bangla Cards with Webestone Green Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          
          {/* English Summary Card */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#48B83B] shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#48B83B]" />
              <h3 className="text-base font-black text-slate-900">Executive Summary (English)</h3>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              A comprehensive audit of your website was conducted to evaluate its current search visibility, technical structure and overall search engine readiness. The audit reveals that while the website is live but there are significant technical and structural barriers which prevent Google from crawling, indexing and ranking your pages. As a result, the website currently has no organic traffic or keyword visibility.
            </p>
          </div>

          {/* Strategic Opportunity & Action Plan Card */}
          <div className="p-6 rounded-xl bg-emerald-50/70 border-2 border-[#48B83B] shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#48B83B]" />
              <h3 className="text-base font-black text-slate-900">Strategic Growth Opportunity & Market Roadmap</h3>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
              Webestone is an AI-driven digital solutions agency specializing in e-commerce development, custom and CMS-based website architecture, SEO, and full-funnel digital marketing. With a proven track record delivering digital growth across international and Middle East e-commerce brands, we understand that online dominance requires more than just an active storefront—it demands exceptional mobile performance, semantic entity mapping, and rigorous technical search alignment. Through targeted technical remediation, GEO integration, and high-authority link acquisition, our roadmap is engineered to unlock substantial organic traffic and measurable sales growth.
            </p>
          </div>

        </div>

        {/* Key Audit Findings & Identified Problems (Webestone Signature Card Style) */}
        <div className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              Key Audit Findings & Identified Problems
            </h3>
            <span className="text-xs font-mono font-bold text-[#48B83B] bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              5 Core Diagnostic Categories
            </span>
          </div>

          <div className="space-y-4">
            {auditFindings.map((finding) => (
              <div 
                key={finding.code}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xs"
              >
                {/* Header Bar */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded bg-[#48B83B] text-white font-black text-xs flex items-center justify-center">
                      {finding.code}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold tracking-wide">
                      {finding.title}
                    </h4>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] uppercase shadow-2xs ${finding.badgeStyle}`}>
                    {finding.severity}
                  </span>
                </div>

                {/* Content Details Grid */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white">
                  {finding.items.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                      <strong className="text-slate-900 font-extrabold block mb-1">
                        {item.title}
                      </strong>
                      <span className="text-slate-600 font-medium leading-relaxed block">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Can Help (Our Solutions) Grid with Solid Green Header */}
        <div className="overflow-hidden rounded-xl border-2 border-[#48B83B] bg-white shadow-2xs">
          <div className="bg-[#48B83B] text-white px-5 py-3 flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-black tracking-tight uppercase">
              How We Can Help (Our Solutions)
            </h3>
            <span className="text-xs font-mono font-bold bg-white/20 px-2 py-0.5 rounded">
              Webestone Action Plan
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((sol) => (
              <div 
                key={sol.num}
                className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 hover:bg-emerald-50/50 transition"
              >
                <div className="w-7 h-7 rounded-md bg-[#48B83B] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
                  {sol.num}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {sol.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
