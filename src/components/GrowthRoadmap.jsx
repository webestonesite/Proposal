import React from 'react';
import { Search, FileText, Image as ImageIcon, Target, CheckCircle2, Layers, Clock } from 'lucide-react';

export default function GrowthRoadmap() {
  const months = [
    {
      month: 'Month 1',
      phase: 'Foundation Phase',
      title: 'SEO Audit & Website Foundation',
      color: 'border-l-4 border-l-emerald-500 bg-white',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      seo: [
        'Website SEO Audit & Technical Audit',
        'Competitor Analysis & Keyword Strategy',
        'Comprehensive Keyword Research (Products, Categories, Blogs)',
        'Google Search Console (GSC) & GA4 Setup'
      ],
      content: '—',
      images: [
        'Product Image Branding Setup',
        'Master Design Template for Product Images'
      ],
      ads: '—',
      deliverables: [
        'SEO Audit Report',
        'Comprehensive Keyword Research Strategy',
        'Technical Audit & Setup Complete',
        'Product Image Design Template'
      ]
    },
    {
      month: 'Month 2',
      phase: 'Content & On-Page Launch',
      title: 'Content Writing & On-Page SEO Launch',
      color: 'border-l-4 border-l-emerald-500 bg-white',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      seo: [
        'Keyword Mapping for Product & Category Pages',
        'On-Page SEO (Meta Titles, Descriptions & H1)',
        'Image Alt Tags & Schema Markup',
        'Internal Linking Architecture Setup'
      ],
      content: [
        'Home Page & Foundation Pages Content',
        'Product Pages Content',
        'Category Pages Content (Men, Ladies, Exclusive)',
        'SEO Blog Posts'
      ],
      images: [
        'Design Custom Product Images for Products'
      ],
      ads: '—',
      deliverables: [
        'Home & Foundation Content Live',
        'Product Pages Live (Keyword Optimized)',
        'Product Images Designed',
        'Category Content + SEO Blogs'
      ]
    },
    {
      month: 'Month 3',
      phase: 'Content Scaling',
      title: 'Remaining Product Content & Optimization',
      color: 'border-l-4 border-l-emerald-500 bg-white',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      seo: [
        'Keyword Research for Remaining Products',
        'Continued On-Page SEO & Content Tuning',
        'Technical Fixes & Internal Link Building'
      ],
      content: [
        'Remaining Product Pages Content',
        'SEO-Optimized Blog Articles'
      ],
      images: [
        'Design Custom Product Images for Remaining Products'
      ],
      ads: '—',
      deliverables: [
        'Product Pages Live (Keyword Optimized)',
        'Product Images Designed',
        'SEO Blog Posts Published'
      ]
    },
    {
      month: 'Month 4',
      phase: 'On-Page Mastery',
      title: 'Advanced On-Page SEO & Content Polish',
      color: 'border-l-4 border-l-emerald-500 bg-white',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      seo: [
        'Blog Keyword Research & Mapping',
        'Advanced Technical SEO & Core Web Vitals',
        'Advanced Internal Linking & CRO Optimization',
        'Final On-Page Keyword & Audit Review'
      ],
      content: [
        'SEO Blog Articles',
        'Review & Optimize All Site Content',
        'Final Content Proofreading'
      ],
      images: 'Complete Product Portfolio Verified',
      ads: '—',
      deliverables: [
        'Final On-Page SEO Report',
        'SEO Blog Posts Live',
        'Website Content Fully Optimized'
      ]
    },
    {
      month: 'Month 5',
      phase: 'Off-Page & Ads Launch',
      title: 'Off-Page SEO & Google Ads Launch',
      color: 'border-l-4 border-l-amber-500 bg-white',
      badgeBg: 'bg-amber-100 text-amber-900',
      seo: [
        'High-Quality Dutch Backlinks & Guest Posts',
        'Business Directory & Local Citation Building',
        'Competitor Backlink Analysis'
      ],
      content: [
        'SEO Blog Posts'
      ],
      images: 'Ongoing Asset Maintenance',
      ads: [
        'Google Ads Campaign Setup',
        'Keyword Targeting & Ad Copy Creation',
        'Conversion Tracking Setup & Campaign Launch'
      ],
      deliverables: [
        'Backlink Acquisition Report',
        'Google Ads Campaign Active',
        'SEO Blog Articles'
      ]
    },
    {
      month: 'Month 6',
      phase: 'Scaling & Growth',
      title: 'Off-Page Growth & Google Ads Optimization',
      color: 'border-l-4 border-l-amber-500 bg-white',
      badgeBg: 'bg-amber-100 text-amber-900',
      seo: [
        'High-Authority Link Building & Outreach',
        'Backlink Monitoring & Authority Growth'
      ],
      content: [
        'SEO Blog Posts'
      ],
      images: 'Final Brand Asset Package',
      ads: [
        'Google Ads Campaign Optimization & A/B Testing',
        'Budget Optimization & CRO Improvements',
        'Performance & ROI Reporting'
      ],
      deliverables: [
        'Final SEO Growth Report',
        'Google Ads Performance Report',
        'Final SEO Blog Posts'
      ]
    }
  ];

  return (
    <section className="py-12 bg-slate-100 border-b border-slate-200" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded bg-[#48B83B] text-white text-xs font-black uppercase font-mono inline-block mb-2 shadow-xs">
            EXECUTION ROADMAP
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            6-Month SEO, Content Marketing & Google Ads Execution Plan
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium">
            Clear month-by-month breakdown across SEO, Content Writing, Product Image Design, and Google Ads PPC.
          </p>
        </div>

        {/* Project Total Scope Summary Table */}
        <div className="mb-10 bg-white rounded-xl border-2 border-[#48B83B] shadow-sm overflow-hidden animate-fade-up hover-lift">
          <div className="bg-[#48B83B] text-white px-6 py-3 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-white animate-pulse" />
              Total Project Scope Summary (6 Months)
            </span>
            <span className="text-slate-900 font-mono text-[11px] bg-[#FFC107] px-2.5 py-0.5 rounded font-black">Full Content & SEO Deliverables</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-4 text-xs">
            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <Search className="w-4 h-4 text-[#48B83B]" />
                SEO Scope
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                <li>• <b>Comprehensive Full-Site Keyword Research</b></li>
                <li>• Technical SEO Audit & Core Web Vitals</li>
                <li>• On-Page Meta, Alt & Schema Markup</li>
                <li>• High-Authority Dutch Backlinks & Outreach</li>
                <li>• Monthly SEO & Audit Reports</li>
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <FileText className="w-4 h-4 text-blue-600" />
                Content Scope
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                <li>• Home Page + Policy & Contact Pages</li>
                <li>• Product Pages Content</li>
                <li>• Category Pages Content (Optional)</li>
                <li>• SEO Blog Articles</li>
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <ImageIcon className="w-4 h-4 text-purple-600" />
                Product Images <span className="text-[10px] text-slate-500 font-bold">(If Needed)</span>
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                <li>• Image Style & Branding Template Setup</li>
                <li>• Custom Designed Product Images (If Needed)</li>
                <li>• Web Optimization & Alt Tag SEO</li>
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <Target className="w-4 h-4 text-amber-600" />
                Google Ads (PPC)
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                <li>• Keyword Research & Campaign Setup</li>
                <li>• High-Converting Ad Copy Writing</li>
                <li>• Conversion Tracking & A/B Testing</li>
                <li>• Ongoing Budget & ROI Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clear Month-by-Month Table View with Full Cell Grid Borders */}
        <div className="bg-white rounded-xl border-2 border-[#48B83B] shadow-sm overflow-hidden animate-fade-up hover-lift">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse border border-emerald-300">
              <thead className="bg-[#48B83B] text-white uppercase text-[11px] font-black tracking-wider border-b-2 border-emerald-700">
                <tr>
                  <th className="py-4 px-4 border border-emerald-500 w-32 bg-[#48B83B]">Month</th>
                  <th className="py-4 px-4 border border-emerald-500 w-52 bg-[#48B83B]">SEO & Technical Tasks</th>
                  <th className="py-4 px-4 border border-emerald-500 w-52 bg-[#48B83B]">Content Writing</th>
                  <th className="py-4 px-4 border border-emerald-500 w-44 bg-[#48B83B]">
                    Product Images <span className="text-[10px] font-mono text-emerald-100 block tracking-normal normal-case font-extrabold">(If Needed)</span>
                  </th>
                  <th className="py-4 px-4 border border-emerald-500 w-44 bg-[#48B83B]">Google Ads / Off-Page</th>
                  <th className="py-4 px-4 border border-emerald-500 w-56 bg-[#3ea032]">Key Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 text-slate-800 font-medium">
                {months.map((m, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/80 hover:bg-slate-100/60'}>

                    {/* Month Title */}
                    <td className="py-4 px-4 border border-slate-300 align-top bg-slate-50/50">
                      <span className="font-mono font-black text-slate-900 text-sm block">
                        {m.month}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold inline-block mt-1 ${m.badgeBg}`}>
                        {m.phase}
                      </span>
                      <div className="text-[11px] font-bold text-slate-700 mt-2 leading-snug">
                        {m.title}
                      </div>
                    </td>

                    {/* SEO Tasks */}
                    <td className="py-4 px-4 border border-slate-300 align-top">
                      {Array.isArray(m.seo) ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-700">
                          {m.seo.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 pb-1 border-b border-slate-100 last:border-0 last:pb-0">
                              <span className="text-[#48B83B] font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-slate-400">{m.seo}</span>
                      )}
                    </td>

                    {/* Content Tasks */}
                    <td className="py-4 px-4 border border-slate-300 align-top">
                      {Array.isArray(m.content) ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-700">
                          {m.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 pb-1 border-b border-slate-100 last:border-0 last:pb-0">
                              <span className="text-blue-600 font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="py-3 px-2 rounded-lg bg-emerald-50/70 border border-dashed border-emerald-300 text-[#48B83B] text-center font-mono text-[10px] font-extrabold flex items-center justify-center gap-1.5 shadow-2xs">
                          <Clock className="w-3.5 h-3.5 text-[#48B83B] shrink-0" />
                          <span>Starts Month 2</span>
                        </div>
                      )}
                    </td>

                    {/* Image Tasks */}
                    <td className="py-4 px-4 border border-slate-300 align-top">
                      {Array.isArray(m.images) ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-700">
                          {m.images.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 pb-1 border-b border-slate-100 last:border-0 last:pb-0">
                              <span className="text-purple-600 font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-slate-600 font-semibold text-[11px]">{m.images}</span>
                      )}
                    </td>

                    {/* Google Ads / Off-Page */}
                    <td className="py-4 px-4 border border-slate-300 align-top">
                      {Array.isArray(m.ads) ? (
                        <ul className="space-y-1.5 text-[11px] text-slate-700">
                          {m.ads.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 pb-1 border-b border-slate-100 last:border-0 last:pb-0">
                              <span className="text-amber-600 font-bold shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="py-3 px-2 rounded bg-slate-100/70 border border-dashed border-slate-300 text-slate-400 text-center font-mono text-[10px] font-semibold">
                          Phase 2 Focus
                        </div>
                      )}
                    </td>

                    {/* Deliverables */}
                    <td className="py-4 px-4 border border-slate-300 align-top bg-emerald-50/20">
                      <ul className="space-y-2">
                        {m.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-1.5 bg-white p-1.5 rounded border border-emerald-200 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B] shrink-0" />
                            <span className="font-extrabold text-slate-900 text-[11px]">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
