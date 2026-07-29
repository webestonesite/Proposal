import React, { useState } from 'react';
import { ExternalLink, TrendingUp, Award, CheckCircle2, Star, ArrowRight, ShieldCheck, Lock, X, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import CountUp from './CountUp';

export default function AgencyPortfolio() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const caseStudies = [
    {
      client: 'Shopify SEO for Vape Stall',
      category: 'Digital Marketing & E-Commerce',
      completionDate: 'Feb 9, 2026',
      trafficGrowth: '+420%',
      timeframe: 'Completed: Feb 9, 2026',
      liveUrl: 'https://vapstall.ae/',
      upworkUrl: 'https://www.upwork.com/agencies/2054887750647587729/modal-portfolio-project?pageTitle=Shopify%20SEO%20for%20Vape%20Stall%20Dubai&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Shopify%20SEO%20for%20Vape%20Stall%20Dubai%22,%22modalId%22%3A%221785275586445%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D&nav_dir=pop',
      overview: 'A comprehensive search engine optimization, technical architecture audit, and organic search growth strategy tailored for Vape Stall Dubai. The project focused on maximizing search visibility, navigating strict regional compliance regulations, and establishing a robust technical foundation for a premium e-commerce vaping platform.',
      highlights: [
        'Shopify SEO, Templates & Technical Audit',
        'Keyword Research & Regional Compliance Setup',
        'Product Catalog Setup & E-Commerce Optimization',
        'Shopify Marketing & Search Engine Configuration'
      ],
      skills: ['Shopify SEO', 'SEO Audit', 'Keyword Research', 'Product Catalog Setup', 'Shopify Marketing'],
      tag: 'Featured Case Study #1',
      badgeBg: 'bg-emerald-100 text-emerald-800 border border-emerald-300'
    },
    {
      client: 'Search Engine Optimization for FastIT',
      category: 'Digital Marketing & B2B Software',
      completionDate: 'Mar 15, 2026',
      trafficGrowth: '+380%',
      timeframe: 'Completed: Mar 15, 2026',
      liveUrl: 'https://fastit.com.bd/',
      upworkUrl: 'https://www.upwork.com/agencies/2054887750647587729/modal-portfolio-project?nav_dir=pop&pageTitle=Search%20Engine%20Optimization%20for%20FastIT&preventDismiss=false&_modalInfo=%5B%7B%22navType%22%3A%22modal%22,%22title%22%3A%22Search%20Engine%20Optimization%20for%20FastIT%22,%22modalId%22%3A%221785275817524%22,%22channelName%22%3A%22modal-portfolio-project%22,%22preventDismiss%22%3Afalse%7D%5D',
      overview: 'Search engine optimization, comprehensive site audit, and organic search growth strategy for Fast IT, focusing on visibility for their business automation systems. Targeted B2B platforms, small shop owners, and entrepreneurs looking online for reliable retail management software.',
      highlights: [
        'SEO Audit, Keyword Research & Competitor Analysis',
        'Technical SEO Setup & Structural Guidelines',
        'High-Converting SEO Content & Landing Copy',
        'On-Page SEO & Search Engine Configuration'
      ],
      skills: ['SEO Audit', 'Keyword Research', 'Competitor Analysis', 'SEO Content', 'On-Page SEO'],
      tag: 'Featured Case Study #2',
      badgeBg: 'bg-blue-100 text-blue-900 border border-blue-300'
    },
    {
      client: 'Vape Shop Dubai — Organic Ranking & Local Authority',
      category: 'E-Commerce & Regional Dubai Vape Market',
      completionDate: 'Jan 2026',
      trafficGrowth: '+310%',
      timeframe: 'Completed: Jan 2026',
      liveUrl: 'https://vapshopdubai.ae/',
      isLocked: true,
      overview: 'Strategic SEO optimization and local search authority building tailored for Dubai vape shop retail and online delivery. Focused on high-intent transactional keywords, vape pods catalog setup, and regional search compliance.',
      highlights: [
        'Vape Pods & E-Liquid Catalog SEO Architecture',
        'Local Search Ranking in Dubai & UAE Regions',
        'Technical Schema & Product Meta Optimization'
      ],
      skills: ['Vape SEO', 'Shopify E-Commerce', 'Local Dubai SEO', 'Keyword Research', 'Catalog Optimization'],
      tag: 'Vape Niche Case Study #3',
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
      tag: 'Vape Niche Case Study #4',
      badgeBg: 'bg-amber-100 text-amber-900 border border-amber-300'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 8.0 • AGENCY PORTFOLIO
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Proven Client Results & Case Studies
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            Real performance benchmarks achieved across e-commerce, local businesses, and full-stack digital marketing campaigns.
          </p>
        </div>

        {/* Agency Overall Impact Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-[#48B83B]">
              <CountUp end={100} suffix="+" />
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Successful Projects</div>
            <div className="text-[11px] text-slate-500 font-medium">Delivered worldwide</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-slate-900">
              <CountUp prefix="+" end={350} suffix="%" />
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Avg. Organic Traffic</div>
            <div className="text-[11px] text-slate-500 font-medium">Within 6 months</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-slate-900">
              <CountUp end={5000} suffix="+" />
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">High-Traffic Backlinks</div>
            <div className="text-[11px] text-slate-500 font-medium">High-Quality Niche Authority Links</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs text-center">
            <div className="text-2xl font-black text-[#48B83B]">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="text-xs font-bold text-slate-800 mt-0.5">Client Retention</div>
            <div className="text-[11px] text-slate-500 font-medium">Long-term growth partners</div>
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
                    <span>Visit Live Website</span>
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
                    <span>Upwork Verified Project</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                )}

                {cs.isLocked && (
                  <button
                    onClick={() => setActiveModalProject(cs)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-50 border-2 border-[#FFC107] text-slate-900 hover:bg-[#FFC107] text-xs font-black transition-all shadow-2xs cursor-pointer hover:scale-[1.02]"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Request Full Portfolio Access (NDA)</span>
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
              OFFICIAL AGENCY PORTFOLIO
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Want to see more Webestone Case Studies & Projects?</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">Explore full client testimonials, website designs, e-commerce case studies, and live SEO growth reports.</p>
          </div>

          <button
            onClick={() => setActiveModalProject({
              client: 'Full Webestone Agency Portfolio Vault & Case Studies',
              overview: 'Complete collection of 100+ SEO, E-Commerce, and Growth Marketing case studies across global markets.'
            })}
            className="px-6 py-3.5 rounded-xl bg-amber-50 border-2 border-[#FFC107] text-slate-900 hover:bg-[#FFC107] font-extrabold text-xs flex items-center gap-2 shrink-0 shadow-xs transition-transform hover:scale-105 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-amber-700" />
            <span>Request Full Portfolio Access (NDA)</span>
          </button>
        </div>

      </div>

      {/* Contact & NDA Access Popup Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in">
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
