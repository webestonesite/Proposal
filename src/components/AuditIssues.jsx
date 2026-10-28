import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone, 
  Monitor, 
  Gauge, 
  Zap, 
  Layers, 
  Globe, 
  MapPin, 
  Star, 
  Bot, 
  FileCode, 
  Database,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useProposal } from '../context/ProposalContext.jsx';

export default function AuditIssues({ onNavigate, onOpenModal }) {
  const { t } = useLanguage();
  const { proposal } = useProposal();
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Dynamic proposal values with neutral fallbacks
  const domain = proposal?.domain || 'clientwebsite.com';
  const companyName = proposal?.companyName || 'Client Brand';
  const targetMarket = proposal?.targetMarket || 'Target Regional Market';

  const grades = proposal?.grades || {
    overall: 'B',
    onPage: 'A',
    geo: 'B',
    links: 'B',
    usability: 'C',
    performance: 'A',
    recommendations: 20
  };

  const deviceShare = proposal?.deviceShare || {
    mobile: 75.2,
    desktop: 24.8,
    tablet: 0
  };

  const keywordPositions = proposal?.keywordPositions || {
    pos1: 8,
    pos2_3: 47,
    pos4_10: 100,
    pos11_20: 154,
    pos21_30: 176,
    pos31_100: 309,
    total: 794
  };

  const backlinks = proposal?.backlinks || {
    domainStrength: 52,
    pageStrength: 9,
    referringDomains: '2.4K',
    totalLinks: 130,
    internal: 117,
    external: 13,
    follow: 12,
    nofollow: 1
  };

  const topBacklinkSources = proposal?.topBacklinkSources || [
    { source: 'FilmDaily.co', dr: 89, niche: 'Lifestyle & Perfume Wedding Feature' },
    { source: 'StoreLeads.app', dr: 87, niche: 'E-Commerce Tech Registry (UAE)' },
    { source: 'Esquire Middle East', dr: 81, niche: 'Luxury Fragrance Editorial Feature' },
    { source: 'Tomba.io', dr: 81, niche: 'Verified Corporate Entity Directory' },
    { source: 'Yango Maps UAE', dr: 81, niche: 'Regional Navigation & Store Map' }
  ];

  const pageWeight = proposal?.pageWeight || {
    total: '3.51 MB',
    js: '2.36 MB',
    images: '0.58 MB',
    css: '0.16 MB',
    html: '0.08 MB',
    requests: 308,
    ttfb: '0.180s',
    compressionRate: '61%'
  };

  const googleBusiness = proposal?.googleBusiness || {
    identified: false,
    name: companyName,
    rating: null,
    reviews: null,
    address: null,
    phone: null
  };

  const techStack = (proposal?.techStack && proposal.techStack.length > 0)
    ? proposal.techStack
    : ['Modern Web Architecture', 'SSL/TLS Protocol', 'Search Engine Crawlers'];

  const primaryPlatform = techStack.find(t => /shopify|wordpress|woocommerce|magento|bigcommerce|wix|squarespace|webflow/i.test(t)) || 'modern web architecture';
  const cdnPlatform = techStack.find(t => /cloudflare|fastly|cloudfront/i.test(t)) || '';

  const parseMb = (str) => {
    if (!str) return 0;
    const num = parseFloat(String(str).replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return 0;
    if (/kb/i.test(str)) return num / 1024;
    return num;
  };
  const totalMb = parseMb(pageWeight.total) || 1;
  const jsMb = parseMb(pageWeight.js);
  const imgMb = parseMb(pageWeight.images);
  const cssMb = parseMb(pageWeight.css);
  const htmlMb = parseMb(pageWeight.html);
  
  const jsPct = Math.min(100, Math.max(5, Math.round((jsMb / totalMb) * 100))) || 65;
  const imgPct = Math.min(100, Math.max(5, Math.round((imgMb / totalMb) * 100))) || 20;
  const cssPct = Math.min(100, Math.max(2, Math.round((cssMb / totalMb) * 100))) || 5;
  const htmlPct = Math.min(100, Math.max(2, Math.round((htmlMb / totalMb) * 100))) || 3;

  const geoAudit = proposal?.geoAudit || {
    readability: '15%',
    llmsTxt: 'Active (llms.txt)',
    aiCrawlers: 'Allowed by robots.txt',
    identitySchema: 'Organization Schema Identified',
    entityDefinition: `Verified ${companyName} (${targetMarket})`,
    contactDetails: googleBusiness.identified ? 'Verified Physical Location' : 'No Physical Store Linked',
    answerAlignment: 'Lacks Q&A / FAQ sections (Critical for AI Overviews)'
  };

  const fallbackRankingKeywords = [
    { keyword: `${companyName.toLowerCase()} online`, position: 1, traffic: 340, volume: 1900, kd: 24, cpc: '$0.70', url: `https://${domain}/` },
    { keyword: `best ${companyName.toLowerCase()}`, position: 2, traffic: 250, volume: 1500, kd: 27, cpc: '$0.80', url: `https://${domain}/` },
    { keyword: `buy ${companyName.toLowerCase()} online`, position: 3, traffic: 170, volume: 1200, kd: 29, cpc: '$0.85', url: `https://${domain}/` },
    { keyword: `${companyName.toLowerCase()} store near me`, position: 2, traffic: 130, volume: 800, kd: 22, cpc: '$0.55', url: `https://${domain}/` },
    { keyword: `${companyName.toLowerCase()} prices`, position: 4, traffic: 85, volume: 1100, kd: 21, cpc: '$0.45', url: `https://${domain}/` }
  ];

  const rankingKeywords = (proposal?.rankingKeywords && proposal.rankingKeywords.length > 0)
    ? proposal.rankingKeywords
    : fallbackRankingKeywords;

  const defaultAuditReport = [
    { category: 'Site Speed', item: 'Google PageSpeed (Mobile)', status: 'FAIL', finding: `Mobile PageSpeed score is ${proposal?.mobileSpeed || 21}/100. First Contentful Paint: 3.9s, Speed Index: 7.1s.`, proof: null, action: "Defer render-blocking JS/CSS, optimize image sizing, eliminate unused CSS to reach 90+ score." },
    { category: 'Site Speed', item: 'Google PageSpeed (Desktop)', status: 'WARNING', finding: `Desktop PageSpeed score is ${proposal?.desktopSpeed || 60}/100. Needs asset delivery tuning.`, proof: null, action: "Avoid redirects, compress images with WebP format, implement browser cache headers." },
    { category: 'On-Page SEO', item: 'Heading Structure (H1)', status: 'FAIL', finding: "Heading outline starts with H2 instead of H1. One skipped heading level detected.", proof: null, action: `Implement single optimized <h1> tag with target ${targetMarket} keywords on homepage and category roots.` },
    { category: 'On-Page SEO', item: 'Title Tag Length', status: 'FAIL', finding: "Title tag is 63 characters. Exceeds optimal 50-60 character limit.", proof: null, action: "Shorten and re-target title tag with primary high-converting transactional keywords." },
    { category: 'On-Page SEO', item: 'Image ALT Attributes', status: 'FAIL', finding: "4 out of 76 product images are missing ALT text attributes.", proof: null, action: "Add descriptive, keyword-rich ALT tags to all catalog and banner images." },
    { category: 'On-Page SEO', item: 'Text to HTML Ratio', status: 'FAIL', finding: `Homepage contains only ${proposal?.wordCount || 420} words. Search engines flag this as thin content.`, proof: null, action: "Expand homepage & collection descriptions to 1,000+ words with rich semantic fragrance terms." },
    { category: 'Content Optimization', item: 'Generative Engine Optimization (GEO)', status: 'FAIL', finding: "Missing FAQ / Q&A structured content. AI Search Engines (Perplexity, ChatGPT, AI Overviews) cannot cite answers.", proof: null, action: "Add 8+ conversational FAQ sections with FAQPage Schema markup for direct AI Overview citations." },
    { category: 'Content Optimization', item: 'Local Business Schema', status: 'FAIL', finding: "Organization Schema found, but LocalBusiness & Product Catalog Schema are missing.", proof: null, action: `Deploy LocalBusiness schema with ${googleBusiness.name} physical store coordinates and Product schema for inventory pricing.` },
    { category: 'Technical SEO', item: 'Robots.txt & XML Sitemap', status: 'PASS', finding: "Robots.txt and sitemap.xml are actively accessible and crawlable.", proof: null, action: "Maintain configuration and keep product URLs automatically synchronized." },
    { category: 'Technical SEO', item: 'SSL & HTTPS Security', status: 'PASS', finding: "SSL certificate active and HTTP successfully redirects to HTTPS with Cloudflare.", proof: null, action: "Maintain security headers and HSTS implementation." },
    { category: 'Technical SEO', item: 'Google Analytics & GTM', status: 'PASS', finding: "Google Analytics 4, Tag Manager, and Conversion Tracking are properly integrated.", proof: null, action: "Audit e-commerce checkout funnel events and conversion values." },
    { category: 'Link Issues', item: 'Internal & External Links', status: 'PASS', finding: `${backlinks.internal} internal links and ${backlinks.external} external links detected with descriptive anchor texts.`, proof: null, action: "Optimize deep-linking from blog articles directly to high-margin niche perfume collections." },
    { category: 'Social Media', item: 'Brand Profiles (X, LinkedIn, YouTube)', status: 'FAIL', finding: "Facebook & Instagram are connected, but X (Twitter), LinkedIn, and YouTube channels are missing.", proof: null, action: "Establish and link branded profiles across X, LinkedIn, and YouTube to maximize brand authority signals." },
    { category: 'Local SEO', item: 'Google Business Profile', status: 'PASS', finding: `Google Business Profile active: ${googleBusiness.rating}★ with ${googleBusiness.reviews} reviews in ${targetMarket}.`, proof: null, action: "Leverage review count with Google Map embed on contact page and local citation campaigns." },
  ];

  const fullAuditReport = (proposal?.auditItems && proposal.auditItems.length > 0)
    ? proposal.auditItems
    : defaultAuditReport;

  const categories = ['ALL', 'Technical SEO', 'On-Page SEO', 'Link Issues', 'Content Optimization', 'Site Speed', 'Social Media'];

  const filteredData = selectedCategory === 'ALL' 
    ? fullAuditReport 
    : fullAuditReport.filter(item => item.category === selectedCategory);

  const passCount = fullAuditReport.filter(i => i.status === 'PASS').length;
  const warningCount = fullAuditReport.filter(i => i.status === 'WARNING').length;
  const failCount = fullAuditReport.filter(i => i.status === 'FAIL').length;

  const hasValidPhysicalAddress = Boolean(
    googleBusiness?.identified && 
    googleBusiness?.address && 
    !/Shown\s*on\s*Website|can'?t\s*identify|components\s*on\s*the\s*page|Missing:|Phone\s*Shown|A\s*d\s*d\s*r\s*e\s*s\s*s/i.test(googleBusiness.address) &&
    googleBusiness.address.trim().length > 8
  );

  return (
    <section className="py-12 bg-white border-b border-slate-200" id="audit-findings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* 1. Header & Domain Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#1E5631] font-mono uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#48B83B]" />
              <span>SECTION 1.0 • COMPREHENSIVE SEO & TECHNICAL AUDIT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Audit Diagnostic & Action Plan For (
              <a
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#48B83B] hover:underline inline-block ml-1"
              >
                {domain}
              </a>
              )
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl">
              Target Market: <strong className="text-slate-900">{targetMarket}</strong> • Enterprise E-Commerce SEO Audit • 21-Page Diagnostic Telemetry
            </p>
          </div>

          {/* Temporarily hidden: Review 6-Month Roadmap button
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate && onNavigate('roadmap')}
              className="px-5 py-2.5 rounded-xl bg-[#48B83B] hover:bg-emerald-600 text-white text-xs font-black shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Review 6-Month Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          */}
        </div>

        {/* 2. 5 CORE AUDIT PILLARS & OVERALL SCORE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border-2 border-emerald-200 shadow-xs relative overflow-hidden space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200/80 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#1E5631] uppercase tracking-wider font-mono">
                OVERALL SITE AUDIT GRADE
              </span>
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">{grades.overall}</span>
                <div className="border-l-2 border-emerald-300 pl-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#FFC107] text-slate-900 font-mono text-xs font-black shadow-2xs">
                    Audit Score: 85/100
                  </span>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">
                    {grades.recommendations} Actionable Recommendations Identified
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-slate-600 font-bold">Domain Health:</span>
              <span className="px-3.5 py-1 rounded-full bg-white text-[#1E5631] border border-emerald-300 text-xs font-black font-mono shadow-2xs">
                Stable with Critical Speed Warnings
              </span>
            </div>
          </div>

          {/* 5 Strategic Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Pillar 1: On-Page SEO */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#48B83B] hover:shadow-md transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">On-Page SEO</span>
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1E5631] border border-emerald-300 font-black text-sm flex items-center justify-center shadow-2xs">
                  {grades.onPage}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Strong title tags, meta tags, and internal link structure. Needs H1 heading fix & content expansion.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-emerald-700 font-bold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B]" />
                <span>Passing Baseline</span>
              </div>
            </div>

            {/* Pillar 2: GEO (Generative Engine Optimization) */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">GEO (AI Search)</span>
                <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 font-black text-sm flex items-center justify-center shadow-2xs">
                  {grades.geo}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                llms.txt active & AI bots allowed. Missing conversational FAQ schema for ChatGPT & Perplexity citations.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-amber-800 font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Action Required</span>
              </div>
            </div>

            {/* Pillar 3: Backlinks Profile */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Backlinks Profile</span>
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1E5631] border border-emerald-300 font-black text-sm flex items-center justify-center shadow-2xs">
                  {grades.links}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                52 Domain Strength, 2.4K referring domains. High-authority editorial and verified directory links detected.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-emerald-700 font-bold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B]" />
                <span>Solid Authority Base</span>
              </div>
            </div>

            {/* Pillar 4: Usability & UX */}
            <div className="p-4 rounded-2xl bg-white border border-red-200 hover:border-red-400 hover:shadow-md transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Usability & Mobile</span>
                <span className="w-8 h-8 rounded-xl bg-red-100 text-red-700 border border-red-300 font-black text-sm flex items-center justify-center shadow-2xs">
                  {grades.usability}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Mobile speed bottleneck (21/100) causes high drop-offs. Touch targets & viewport elements require tuning.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-red-700 font-bold font-mono">
                <XCircle className="w-3.5 h-3.5 text-red-600" />
                <span>Critical Priority</span>
              </div>
            </div>

            {/* Pillar 5: Performance & Web Vitals */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#48B83B] hover:shadow-md transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Performance (CWV)</span>
                <span className="w-8 h-8 rounded-xl bg-emerald-100 text-[#1E5631] border border-emerald-300 font-black text-sm flex items-center justify-center shadow-2xs">
                  {grades.performance}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                Google Core Web Vitals Pass: LCP {proposal?.lcp || '1.4s'}, CLS {proposal?.cls || '0.00'}, INP {proposal?.inp || '153ms'}.
              </p>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] text-emerald-700 font-bold font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B]" />
                <span>Field Vitals Passed</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. DEVICE SHARE & THE CRITICAL MOBILE SPEED BOTTLENECK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Device Traffic Distribution (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#48B83B]" />
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Traffic Breakdown by Device
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-500">
                AUDIT TELEMETRY
              </span>
            </div>

            {/* Visual segmented bar */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded-full bg-slate-200 overflow-hidden flex">
                <div 
                  className="h-full bg-[#48B83B] transition-all duration-1000"
                  style={{ width: `${deviceShare.mobile}%` }}
                  title={`Mobile: ${deviceShare.mobile}%`}
                ></div>
                <div 
                  className="h-full bg-slate-700 transition-all duration-1000"
                  style={{ width: `${deviceShare.desktop}%` }}
                  title={`Desktop: ${deviceShare.desktop}%`}
                ></div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <div className="flex items-center gap-1.5 text-[#1E5631]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48B83B]"></span>
                  <span>Mobile: {deviceShare.mobile}%</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span>Desktop: {deviceShare.desktop}%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-2 text-slate-700">
              <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Why This Metric Dictates Revenue</span>
              </div>
              <p className="leading-relaxed">
                Over <strong className="text-slate-900">{deviceShare.mobile}%</strong> of all potential buyers search for luxury perfumes via mobile devices. Because mobile speed is currently rated <strong className="text-red-600">{proposal?.mobileSpeed || 21}/100</strong>, slow script execution directly increases bounce rates and reduces completed checkouts.
              </p>
            </div>
          </div>

          {/* Right: PageSpeed & Core Web Vitals Status (7 cols) */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-600" />
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Google PageSpeed & Core Web Vitals
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-700 border border-red-200 font-mono text-[10px] font-black uppercase">
                Critical Remediation Needed
              </span>
            </div>

            {/* Speeds Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mobile Gauge */}
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-red-900">
                    <Smartphone className="w-4 h-4 text-red-600" />
                    <span>Mobile PageSpeed</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-xs font-black">
                    CRITICAL FAIL
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-red-600">{proposal?.mobileSpeed || 21}</span>
                  <span className="text-xs font-mono text-slate-500">/ 100</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug">
                  First Contentful Paint (FCP) is <strong>3.9s</strong> and Speed Index is <strong>7.1s</strong>. Render-blocking JavaScript restricts mobile shoppers.
                </p>
              </div>

              {/* Desktop Gauge */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <Monitor className="w-4 h-4 text-amber-600" />
                    <span>Desktop PageSpeed</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-mono text-xs font-black">
                    WARNING
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-700">{proposal?.desktopSpeed || 60}</span>
                  <span className="text-xs font-mono text-slate-500">/ 100</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-snug">
                  Desktop score requires asset delivery tuning, browser caching headers, and modern WebP image compression.
                </p>
              </div>
            </div>

            {/* Core Web Vitals Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">LCP (Largest Paint)</span>
                <span className="text-sm font-black text-emerald-600">{proposal?.lcp || '1.4s'}</span>
                <span className="text-[9px] text-emerald-700 block font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">INP (Responsiveness)</span>
                <span className="text-sm font-black text-emerald-600">{proposal?.inp || '153ms'}</span>
                <span className="text-[9px] text-emerald-700 block font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">CLS (Layout Shift)</span>
                <span className="text-sm font-black text-emerald-600">{proposal?.cls || '0.00'}</span>
                <span className="text-[9px] text-emerald-700 block font-bold">Passed</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">TTFB (Server Speed)</span>
                <span className="text-sm font-black text-emerald-600">{pageWeight.ttfb || '0.180s'}</span>
                <span className="text-[9px] text-emerald-700 block font-bold">Fast Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. PAGE WEIGHT & SCRIPT BLOAT ANALYSIS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <FileCode className="w-5 h-5 text-amber-600" />
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                Page Weight & Script Bloat Analysis
              </h3>
            </div>
            <span className="text-[11px] font-mono font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
              TOTAL: {pageWeight.total}
            </span>
          </div>

          {/* Breakdown Progress Bars */}
          <div className="space-y-3 p-4 rounded-2xl bg-white border border-slate-200">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">JavaScript Execution</span>
                <span className="font-mono text-red-600 font-bold">{pageWeight.js} ({jsPct}%)</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{ width: `${jsPct}%` }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">Images & Media Assets</span>
                <span className="font-mono text-amber-600 font-bold">{pageWeight.images} ({imgPct}%)</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${imgPct}%` }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">CSS Styling & Stylesheets</span>
                <span className="font-mono text-emerald-600 font-bold">{pageWeight.css} ({cssPct}%)</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#48B83B] rounded-full transition-all duration-500" style={{ width: `${cssPct}%` }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">HTML Structure & Markup</span>
                <span className="font-mono text-slate-600 font-bold">{pageWeight.html} ({htmlPct}%)</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-slate-400 rounded-full transition-all duration-500" style={{ width: `${htmlPct}%` }}></div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Total Requests</span>
              <strong className="text-slate-900 font-mono text-sm">{pageWeight.requests} req</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Fast TTFB</span>
              <strong className="text-emerald-700 font-mono text-sm">{pageWeight.ttfb}</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-slate-200">
              <span className="text-[10px] text-slate-500 uppercase font-mono block">Compression</span>
              <strong className="text-slate-900 font-mono text-sm">{pageWeight.compressionRate}</strong>
            </div>
          </div>
        </div>

        {/* 6. LOCAL PRESENCE & DETECTED TECH STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Local Business & Google Reviews (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Google Business Profile & Local Trust
                </h3>
              </div>
              {hasValidPhysicalAddress && googleBusiness.rating ? (
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900 text-xs">{googleBusiness.rating}★</span>
                  <span className="text-slate-500 text-[11px]">({googleBusiness.reviews} reviews)</span>
                </div>
              ) : (
                <span className="text-[11px] font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  UNLINKED
                </span>
              )}
            </div>

            {hasValidPhysicalAddress ? (
              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                  <span className="text-[10px] font-bold text-amber-900 uppercase font-mono block">
                    PHYSICAL STORE LOCATION
                  </span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">
                    {googleBusiness.name}
                  </p>
                  <p className="text-slate-600 font-medium">
                    {googleBusiness.address}
                  </p>
                  {googleBusiness.phone && (
                    <p className="text-slate-800 font-mono pt-1">
                      Phone: <strong>{googleBusiness.phone}</strong>
                    </p>
                  )}
                </div>

                <p className="text-slate-600 leading-relaxed">
                  <strong>Action:</strong> Implement complete LocalBusiness JSON-LD Schema with geo-coordinates, embed responsive Google Maps on store locator pages, and run localized citation campaigns to dominate Google Local 3-Pack ("near me" searches) in {targetMarket}.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold font-mono text-[10px] uppercase">
                    Profile Not Detected / Unverified
                  </span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm">
                    {companyName} Local Authority Opportunity
                  </p>
                  <p className="text-slate-600 font-medium">
                    No verified physical Google Business Profile was detected during automated crawling.
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  <strong>Recommended Action:</strong> Create and optimize a verified Google Business Profile, synchronize NAP (Name, Address, Phone) consistency across local business directories, and deploy LocalBusiness JSON-LD schema to dominate local map searches in {targetMarket}.
                </p>
              </div>
            )}
          </div>

          {/* Detected E-Commerce Tech Stack (6 cols) */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#48B83B]" />
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
                  Detected Architecture
                </h3>
              </div>
              <span className="text-[11px] font-mono font-bold text-slate-500">
                INFRASTRUCTURE RECON
              </span>
            </div>

            <p className="text-xs text-slate-600">
              Third-party integrations and infrastructure identified during automated crawling:
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-[#1E5631] border border-slate-200 hover:border-emerald-300 font-medium text-xs transition-colors flex items-center gap-1.5"
                >
                  <Database className="w-3.5 h-3.5 text-[#48B83B]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-slate-700 space-y-1">
              <span className="font-bold text-[#1E5631] block">Seamless Implementation Workflow</span>
              <p>
                Because {companyName} utilizes {primaryPlatform}{cdnPlatform ? ` with ${cdnPlatform}` : ''}, Webestone can implement technical schema, canonical tag fixes, and asset optimizations safely without disrupting live business operations or customer transactions.
              </p>
            </div>
          </div>
        </div>

        {/* 7. GEO & GENERATIVE AI SEARCH READINESS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 border-2 border-emerald-300/80 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-200/80 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-white border border-emerald-200 text-[#1E5631] shadow-2xs">
                <Bot className="w-5 h-5 text-[#48B83B]" />
              </div>
              <div>
                <h3 className="font-black text-base sm:text-lg text-slate-900 tracking-tight">
                  Generative Engine Optimization (GEO) & AI Search Blueprint
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Pre-ranking your store for ChatGPT, Perplexity, and Google Gemini AI Overviews
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-[#FFC107] text-slate-900 border border-amber-300 text-xs font-mono font-black shadow-2xs self-start sm:self-auto">
              AI Readiness: Grade B
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all space-y-1.5">
              <span className="font-black text-[#1E5631] block font-mono text-xs uppercase">1. LLM CRAWLER ACCESS</span>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Status:</strong> {geoAudit.aiCrawlers}. GPTBot, ClaudeBot, and PerplexityBot are permitted to index public pages.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xs transition-all space-y-1.5">
              <span className="font-black text-amber-800 block font-mono text-xs uppercase">2. FAQ & Q/A STRUCTURE</span>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Deficiency:</strong> {geoAudit.answerAlignment}. LLMs cannot summarize answers for queries like "best {companyName} products in {targetMarket}".
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition-all space-y-1.5">
              <span className="font-black text-[#1E5631] block font-mono text-xs uppercase">3. ENTITY & LLMS.TXT</span>
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Status:</strong> {geoAudit.llmsTxt}. We will enrich the llms.txt protocol with complete brand hierarchy and pricing matrices.
              </p>
            </div>
          </div>
        </div>

        {/* 8. AUDIT STATUS COUNTERS & FILTERS */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <div>
              <h3 className="font-black text-lg text-slate-900 tracking-tight">
                Itemized Technical Audit Checklist & Verification Matrix
              </h3>
              <p className="text-xs text-slate-600">
                Filter by technical category to inspect specific findings and proposed engineering fixes
              </p>
            </div>

            {/* Metric Counters */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                {passCount} Passed
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-mono text-xs font-bold">
                {warningCount} Warnings
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-red-100 text-red-800 font-mono text-xs font-bold">
                {failCount} Critical
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2 no-print">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#48B83B] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Audit Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#48B83B] text-white text-[11px] uppercase tracking-wider font-extrabold">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Audit Item</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4">Audit Finding / Observation</th>
                  <th className="py-3 px-4">Webestone Engineering Action</th>
                  <th className="py-3 px-4 text-center">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredData.map((row, idx) => {
                  let badgeStyle = 'bg-emerald-100 text-emerald-700 border-emerald-300';
                  let icon = '✓';
                  if (row.status === 'WARNING') {
                    badgeStyle = 'bg-amber-100 text-amber-800 border-amber-300';
                    icon = '!';
                  } else if (row.status === 'FAIL') {
                    badgeStyle = 'bg-red-100 text-red-700 border-red-300';
                    icon = '✕';
                  }

                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-700">
                        {row.item}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black shadow-2xs border ${badgeStyle}`}>
                          {icon}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-800">
                        {row.finding}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#48B83B]">
                        {row.action}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        {row.proof ? (
                          <a
                            href={row.proof}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#48B83B] font-bold text-[11px] underline"
                          >
                            <span className="print:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-[#48B83B] border border-slate-200 transition font-normal no-underline">
                              <span>Screenshot</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                            <span className="hidden print:inline font-mono text-[9.5px]">
                              {row.proof}
                            </span>
                          </a>
                        ) : (
                          <span className="text-slate-400 text-[11px] font-mono">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
