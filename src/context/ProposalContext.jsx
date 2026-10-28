import React, { createContext, useContext, useState, useEffect } from 'react';
import { extractTextFromPdf, parseProposalFromText } from '../utils/pdfProposalParser';

const ProposalContext = createContext();

const DEFAULT_PROPOSAL = {
  id: 'default',
  createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  domain: 'perfumedubai.com',
  companyName: 'Perfume Dubai',
  targetMarket: 'Dubai, UAE',
  overallGrade: 'B',
  grades: {
    overall: 'B',
    onPage: 'A',
    geo: 'B',
    links: 'B',
    usability: 'C',
    performance: 'A',
    recommendations: 20
  },
  mobileSpeed: 21,
  desktopSpeed: 60,
  lcp: '1.4s',
  inp: '153ms',
  cls: '0.00',
  wordCount: 420,
  phone: '+971 4 882 4481',
  deviceShare: {
    mobile: 75.2,
    desktop: 24.8,
    tablet: 0
  },
  keywordPositions: {
    pos1: 8,
    pos2_3: 47,
    pos4_10: 100,
    pos11_20: 154,
    pos21_30: 176,
    pos31_100: 309,
    total: 794
  },
  backlinks: {
    domainStrength: 52,
    pageStrength: 9,
    referringDomains: '2.4K',
    totalLinks: 130,
    internal: 117,
    external: 13,
    follow: 12,
    nofollow: 1
  },
  topBacklinkSources: [
    { source: 'FilmDaily.co', dr: 89, niche: 'Lifestyle & Perfume Wedding Feature' },
    { source: 'StoreLeads.app', dr: 87, niche: 'E-Commerce Tech Registry (UAE)' },
    { source: 'Esquire Middle East', dr: 81, niche: 'Luxury Fragrance Editorial Feature' },
    { source: 'Tomba.io', dr: 81, niche: 'Verified Corporate Entity Directory' },
    { source: 'Yango Maps UAE', dr: 81, niche: 'Regional Navigation & Store Map' }
  ],
  pageWeight: {
    total: '3.51 MB',
    js: '2.36 MB',
    images: '0.58 MB',
    css: '0.16 MB',
    html: '0.08 MB',
    requests: 308,
    ttfb: '0.180s',
    compressionRate: '61%'
  },
  googleBusiness: {
    name: 'Perfume Dubai',
    rating: '4.8',
    reviews: '56',
    address: '77FX XJQ Deira Water Front - Shamma Plaza 3, Shop No: 12 Gold Souq Extension, Deira - Dubai - UAE',
    phone: '+971 4 882 4481'
  },
  techStack: [
    'Shopify',
    'Cloudflare CDN',
    'Cashew BNPL Payments',
    'Doofinder Smart Search',
    'Google Analytics 4',
    'Google Tag Manager',
    'Facebook Pixel'
  ],
  geoAudit: {
    readability: '15%',
    llmsTxt: 'Active (llms.txt)',
    aiCrawlers: 'Allowed by robots.txt',
    identitySchema: 'Organization Schema Identified',
    entityDefinition: 'Verified Dubai Luxury Perfume Retailer',
    contactDetails: 'Partially Missing (No address/phone in footer)',
    answerAlignment: 'Lacks Q&A / FAQ sections (Critical for AI Overviews)'
  },
  objectives: [
    'Dominating high-converting perfume and luxury fragrance search keywords in Dubai',
    'Fixing critical mobile page speed bottlenecks (21/100) limiting store conversions',
    'Deploying GEO (Generative Engine Optimization) & Product Schema for AI search citations',
    'Outranking key regional competitors and scaling organic search revenue'
  ],
  rankingKeywords: [
    { keyword: 'perfume in dubai', position: 2, traffic: 308, volume: 1900, kd: 28, cpc: '$0.65', url: 'https://perfumedubai.com/' },
    { keyword: 'dubai perfumery', position: 2, traffic: 259, volume: 1600, kd: 24, cpc: '$0.55', url: 'https://perfumedubai.com/' },
    { keyword: 'dubai perfumes', position: 3, traffic: 156, volume: 1600, kd: 32, cpc: '$0.80', url: 'https://perfumedubai.com/' },
    { keyword: 'luxury perfumes dubai', position: 2, traffic: 143, volume: 880, kd: 35, cpc: '$1.20', url: 'https://perfumedubai.com/' },
    { keyword: 'dubai perfume stores', position: 3, traffic: 97, volume: 1000, kd: 22, cpc: '$0.50', url: 'https://perfumedubai.com/' },
    { keyword: 'perfume shop dubai', position: 7, traffic: 92, volume: 3600, kd: 38, cpc: '$0.95', url: 'https://perfumedubai.com/' }
  ],
  auditItems: [
    {
      category: 'Site Speed',
      item: 'Google PageSpeed (Mobile)',
      status: 'FAIL',
      finding: 'Mobile PageSpeed score is 21/100. FCP is 3.9s, Speed Index is 7.1s.',
      action: 'Defer render-blocking JS/CSS, optimize image sizing, and eliminate unused CSS to reach 90+ score.'
    },
    {
      category: 'Site Speed',
      item: 'Google PageSpeed (Desktop)',
      status: 'WARNING',
      finding: 'Desktop PageSpeed score is 60/100. Requires asset delivery optimization.',
      action: 'Avoid redirects, compress images to WebP format, implement browser cache headers.'
    },
    {
      category: 'On-Page SEO',
      item: 'Heading Structure (H1)',
      status: 'FAIL',
      finding: 'Heading outline starts with H2 instead of H1. One skipped heading level detected.',
      action: 'Implement single optimized <h1> tag with target Dubai perfume keywords on homepage and category roots.'
    },
    {
      category: 'On-Page SEO',
      item: 'Title Tag Length',
      status: 'FAIL',
      finding: 'Title tag is 63 characters. Exceeds optimal 50-60 character limit.',
      action: 'Shorten and re-target title tag with primary high-converting transactional keywords.'
    },
    {
      category: 'On-Page SEO',
      item: 'Image ALT Attributes',
      status: 'FAIL',
      finding: '4 out of 76 product images are missing ALT text attributes.',
      action: 'Add descriptive, keyword-rich ALT tags to all catalog and banner images.'
    },
    {
      category: 'On-Page SEO',
      item: 'Text to HTML Ratio',
      status: 'FAIL',
      finding: 'Homepage contains only 420 words. Search engines flag this as thin content.',
      action: 'Expand homepage & collection descriptions to 1,000+ words with rich semantic fragrance terms.'
    },
    {
      category: 'Content Optimization',
      item: 'Generative Engine Optimization (GEO)',
      status: 'FAIL',
      finding: 'Missing FAQ / Q&A structured content. AI Search Engines cannot cite answers.',
      action: 'Add conversational FAQ sections with FAQPage Schema markup for direct AI Overview citations.'
    },
    {
      category: 'Content Optimization',
      item: 'Local Business Schema',
      status: 'FAIL',
      finding: 'Organization Schema found, but LocalBusiness & Product Catalog Schema are missing.',
      action: 'Deploy LocalBusiness schema with Gold Souq store coordinates and Product schema for inventory pricing.'
    },
    {
      category: 'Technical SEO',
      item: 'Robots.txt & XML Sitemap',
      status: 'PASS',
      finding: 'Robots.txt and sitemap.xml are actively accessible and crawlable.',
      action: 'Maintain configuration and keep product URLs automatically synchronized.'
    },
    {
      category: 'Technical SEO',
      item: 'SSL & HTTPS Security',
      status: 'PASS',
      finding: 'SSL certificate active and HTTP successfully redirects to HTTPS with Cloudflare.',
      action: 'Maintain security headers and HSTS implementation.'
    },
    {
      category: 'Technical SEO',
      item: 'Google Analytics & GTM',
      status: 'PASS',
      finding: 'Google Analytics 4, Tag Manager, and Conversion Tracking are properly integrated.',
      action: 'Audit e-commerce checkout funnel events and conversion values.'
    },
    {
      category: 'Social Media',
      item: 'Brand Profiles (X, LinkedIn, YouTube)',
      status: 'FAIL',
      finding: 'Facebook & Instagram are connected, but X, LinkedIn, and YouTube channels are missing.',
      action: 'Establish and link branded profiles across X, LinkedIn, and YouTube to maximize brand authority signals.'
    }
  ],
  pricing: {
    monthly: '$880',
    total: '$5,300 – $7,300',
    period: '6 Months',
    breakeven: '1.5 – 2 Months'
  }
};

export function ProposalProvider({ children }) {
  const [proposal, setProposal] = useState(() => {
    try {
      const saved = localStorage.getItem('webestone_active_proposal');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PROPOSAL,
          ...parsed,
          grades: parsed.grades || DEFAULT_PROPOSAL.grades,
          deviceShare: parsed.deviceShare || DEFAULT_PROPOSAL.deviceShare,
          keywordPositions: parsed.keywordPositions || DEFAULT_PROPOSAL.keywordPositions,
          backlinks: parsed.backlinks || DEFAULT_PROPOSAL.backlinks,
          pageWeight: parsed.pageWeight || DEFAULT_PROPOSAL.pageWeight,
          googleBusiness: parsed.googleBusiness !== undefined ? parsed.googleBusiness : DEFAULT_PROPOSAL.googleBusiness,
          geoAudit: parsed.geoAudit || DEFAULT_PROPOSAL.geoAudit
        };
      }
      return DEFAULT_PROPOSAL;
    } catch {
      return DEFAULT_PROPOSAL;
    }
  });

  const [isCustomProposal, setIsCustomProposal] = useState(() => {
    try {
      return !!localStorage.getItem('webestone_active_proposal');
    } catch {
      return false;
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ percent: 0, message: '' });
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Sync to localStorage
  const saveProposal = (newProposal) => {
    setProposal(newProposal);
    setIsCustomProposal(true);
    try {
      localStorage.setItem('webestone_active_proposal', JSON.stringify(newProposal));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const generateFromPdf = async (file) => {
    setIsGenerating(true);
    setProgress({ percent: 10, message: 'Uploading & initiating PDF parser...' });
    try {
      // 1. Extract text
      const pagesText = await extractTextFromPdf(file, (percent, message) => {
        setProgress({ percent, message });
      });

      // Small deliberate delay to allow human-readable progression
      await new Promise(r => setTimeout(r, 600));

      // 2. Parse into proposal structure
      const newProposal = parseProposalFromText(pagesText, (percent, message) => {
        setProgress({ percent, message });
      });

      await new Promise(r => setTimeout(r, 800));

      saveProposal(newProposal);
      setIsGenerating(false);
      setProgress({ percent: 100, message: 'Proposal Generated Successfully!' });
      return newProposal;
    } catch (err) {
      setIsGenerating(false);
      setProgress({ percent: 0, message: '' });
      throw err;
    }
  };

  const resetToDefault = () => {
    setProposal(DEFAULT_PROPOSAL);
    setIsCustomProposal(false);
    try {
      localStorage.removeItem('webestone_active_proposal');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ProposalContext.Provider
      value={{
        proposal,
        isCustomProposal,
        isGenerating,
        progress,
        isUploadModalOpen,
        setIsUploadModalOpen,
        generateFromPdf,
        resetToDefault,
        saveProposal
      }}
    >
      {children}
    </ProposalContext.Provider>
  );
}

export function useProposal() {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error('useProposal must be used within a ProposalProvider');
  }
  return context;
}
