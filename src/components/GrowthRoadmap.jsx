import React from 'react';
import { Search, FileText, Image as ImageIcon, Target, CheckCircle2, Layers, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function GrowthRoadmap() {
  const { lang } = useLanguage();

  const data = {
    en: {
      sectionTitle: 'EXECUTION ROADMAP',
      title: '6-Month SEO, Content Marketing & Google Ads Execution Plan',
      subTitle: 'Clear month-by-month breakdown across SEO, Content Writing, Product Image Design, and Google Ads PPC.',
      scopeTitle: 'Total Project Scope Summary (6 Months)',
      scopeTag: 'Full Content & SEO Deliverables',
      seoScope: 'SEO Scope',
      seoItems: [
        'Comprehensive Full-Site Keyword Research',
        'Technical SEO Audit & Core Web Vitals',
        'On-Page Meta, Alt & Schema Markup',
        'High-Authority Dutch Backlinks & Outreach',
        'Monthly SEO & Audit Reports'
      ],
      contentScope: 'Content Scope',
      contentItems: [
        'Home Page + Policy & Contact Pages',
        'Product Pages Content',
        'Category Pages Content (Optional)',
        'SEO Blog Articles'
      ],
      imageScope: 'Product Images',
      ifNeeded: '(If Needed)',
      imageItems: [
        'Image Style & Branding Template Setup',
        'Custom Designed Product Images (If Needed)',
        'Web Optimization & Alt Tag SEO'
      ],
      adsScope: 'Google Ads (PPC)',
      adsItems: [
        'Keyword Research & Campaign Setup',
        'High-Converting Ad Copy Writing',
        'Conversion Tracking & A/B Testing',
        'Ongoing Budget & ROI Optimization'
      ],
      thMonth: 'Month',
      thSeo: 'SEO & Technical Tasks',
      thContent: 'Content Writing',
      thImages: 'Product Images',
      thAds: 'Google Ads / Off-Page',
      thDeliverables: 'Key Deliverables',
      startsM2: 'Starts Month 2',
      phase2Focus: 'Phase 2 Focus',
      months: [
        {
          month: 'Month 1',
          phase: 'Foundation Phase',
          title: 'SEO Audit & Website Foundation',
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
            'On-Page SEO Complete',
            'Foundational Pages & Initial Product Descriptions Published'
          ]
        },
        {
          month: 'Month 3',
          phase: 'Schema & E-Commerce CRO',
          title: 'Collection Schema & E-Commerce Optimization',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          seo: [
            'Technical Schema Markup Implementation',
            'Internal Link Structure Refinement'
          ],
          content: [
            'Product Pages Content',
            'SEO Blog Posts'
          ],
          images: [
            'Product Image Package'
          ],
          ads: '—',
          deliverables: [
            'All Main Category & Key Product Copy Delivered',
            'Product Image Package Complete'
          ]
        },
        {
          month: 'Month 4',
          phase: 'Backlink Authority Launch',
          title: 'Dutch Backlink & Authority Scaling',
          badgeBg: 'bg-amber-100 text-amber-900',
          seo: [
            'High-Authority Link Building Campaign Launch',
            'Dutch Niche Editorial Link Placement'
          ],
          content: [
            'SEO Blog Posts'
          ],
          images: 'Product Images Package',
          ads: [
            'Google Ads Search Campaign Setup',
            'Ad Copy & Keyword Selection for High-Intent Terms'
          ],
          deliverables: [
            'Product Descriptions Complete',
            'Google Ads Search Campaign Live'
          ]
        },
        {
          month: 'Month 5',
          phase: 'Conversion Rate Optimization',
          title: 'Conversion Rate Optimization (CRO)',
          badgeBg: 'bg-amber-100 text-amber-900',
          seo: [
            'Continued Link Acquisition & Domain Rating Building',
            'Keyword Ranking Velocity Monitoring'
          ],
          content: [
            'SEO Blog Posts'
          ],
          images: 'Product Images Package',
          ads: [
            'Google Ads Management & Negative Keyword Optimization',
            'Bid Management & Ad Copy A/B Testing'
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
          title: 'Market Leadership & Revenue Domination',
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
      ]
    },
    nl: {
      sectionTitle: 'UITVOERINGSSTRATEGIE',
      title: '6-Maanden SEO, Content Marketing & Google Ads Uitvoeringsplan',
      subTitle: 'Duidelijke maandelijkse opsplitsing in SEO, Content Schrijven, Productafbeeldingsontwerp en Google Ads PPC.',
      scopeTitle: 'Totale Projectomvang Samenvatting (6 Maanden)',
      scopeTag: 'Volledige Content & SEO Opleveringen',
      seoScope: 'SEO Omvang',
      seoItems: [
        'Uitgebreid Volledig Zoekwoordonderzoek',
        'Technische SEO Audit & Core Web Vitals',
        'On-Page Meta, Alt & Schema Markup',
        'Hoogwaardige Nederlandse Backlinks & Linkbuilding',
        'Maandelijkse SEO & Audit Rapporten'
      ],
      contentScope: 'Content Omvang',
      contentItems: [
        'Homepagina + Beleid & Contactpagina’s',
        'Productpagina’s Inhoud',
        'Categoriepagina’s Inhoud (Optioneel)',
        'SEO Blogartikelen'
      ],
      imageScope: 'Productafbeeldingen',
      ifNeeded: '(Indien Nodig)',
      imageItems: [
        'Afbeeldingsstijl & Branding Sjabloon Instelling',
        'Aangepaste Productafbeeldingen (Indien Nodig)',
        'Web-Optimalisatie & Alt-Tag SEO'
      ],
      adsScope: 'Google Ads (PPC)',
      adsItems: [
        'Zoekwoordonderzoek & Campagne Instelling',
        'Hoog-Converterende Advertentieteksten',
        'Conversietracking & A/B-Testen',
        'Doorlopende Budget & ROI Optimalisatie'
      ],
      thMonth: 'Maand',
      thSeo: 'SEO & Technische Taken',
      thContent: 'Content Schrijven',
      thImages: 'Productafbeeldingen',
      thAds: 'Google Ads / Off-Page',
      thDeliverables: 'Belangrijkste Opleveringen',
      startsM2: 'Start Maand 2',
      phase2Focus: 'Fase 2 Focus',
      months: [
        {
          month: 'Maand 1',
          phase: 'Technische & On-Page Basis',
          title: 'SEO Audit & Website Basis',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          seo: [
            'Website SEO Audit & Technische Audit',
            'Concurrentieanalyse & Zoekwoordstrategie',
            'Uitgebreid Zoekwoordonderzoek (Producten, Categorieën, Blogs)',
            'Google Search Console (GSC) & GA4 Instelling'
          ],
          content: '—',
          images: [
            'Productafbeelding Branding Instelling',
            'Master Ontwerpsjabloon voor Productafbeeldingen'
          ],
          ads: '—',
          deliverables: [
            'SEO Audit Rapport',
            'Uitgebreide Zoekwoordstrategie',
            'Technische Audit & Instelling Voltooid',
            'Productafbeelding Ontwerpsjabloon'
          ]
        },
        {
          month: 'Maand 2',
          phase: 'Content Schrijven & On-Page SEO Lancering',
          title: 'Content Schrijven & On-Page SEO Lancering',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          seo: [
            'Zoekwoordmapping voor Product- & Categoriepagina’s',
            'On-Page SEO (Meta Titels, Beschrijvingen & H1)',
            'Afbeelding Alt Tags & Schema Markup',
            'Interne Linkstructuur Instelling'
          ],
          content: [
            'Homepagina & Basispagina’s Inhoud',
            'Productpagina’s Inhoud',
            'Categoriepagina’s Inhoud (Heren, Dames, Exclusief)',
            'SEO Blogberichten'
          ],
          images: [
            'Aangepaste Productafbeeldingen Ontwerpen voor Producten'
          ],
          ads: '—',
          deliverables: [
            'On-Page SEO Voltooid',
            'Basispagina’s & Eerste Productbeschrijvingen Gepubliceerd'
          ]
        },
        {
          month: 'Maand 3',
          phase: 'Collectie Schema & E-Commerce Optimalisatie',
          title: 'Collectie Schema & E-Commerce Optimalisatie',
          badgeBg: 'bg-emerald-100 text-emerald-800',
          seo: [
            'Technische Schema Markup Implementatie',
            'Interne Linkstructuur Verfijning'
          ],
          content: [
            'Productpagina’s Inhoud',
            'SEO Blogberichten'
          ],
          images: [
            'Productafbeeldingen Pakket'
          ],
          ads: '—',
          deliverables: [
            'Alle Hoofdcategorieën & Belangrijke Productteksten Geleverd',
            'Productafbeeldingen Pakket Voltooid'
          ]
        },
        {
          month: 'Maand 4',
          phase: 'Nederlandse Backlinks & Autoriteit Schalen',
          title: 'Nederlandse Backlinks & Autoriteit Schalen',
          badgeBg: 'bg-amber-100 text-amber-900',
          seo: [
            'Hoogwaardige Linkbuilding Campagne Lancering',
            'Nederlandse Niche Redactionele Linkplaatsing'
          ],
          content: [
            'SEO Blogberichten'
          ],
          images: 'Productafbeeldingen Pakket',
          ads: [
            'Google Ads Zoekcampagne Instelling',
            'Advertentieteksten & Zoekwoordselectie voor Hoge Intentie'
          ],
          deliverables: [
            'Productbeschrijvingen Voltooid',
            'Google Ads Zoekcampagne Live'
          ]
        },
        {
          month: 'Maand 5',
          phase: 'Conversie-Optimalisatie (CRO)',
          title: 'Conversie-Optimalisatie (CRO)',
          badgeBg: 'bg-amber-100 text-amber-900',
          seo: [
            'Voortgezette Linkwerving & Opbouw van Domeinrating',
            'Zoekwoord Ranking Snelheidsbewaking'
          ],
          content: [
            'SEO Blogberichten'
          ],
          images: 'Productafbeeldingen Pakket',
          ads: [
            'Google Ads Beheer & Uitsluitingszoekwoorden Optimalisatie',
            'Biedingsbeheer & Advertentietekst A/B-Testen'
          ],
          deliverables: [
            'Backlink Wervingsrapport',
            'Google Ads Campagne Actief',
            'SEO Blogartikelen'
          ]
        },
        {
          month: 'Maand 6',
          phase: 'Marktleiderschap & Omzet Dominantie',
          title: 'Marktleiderschap & Omzet Dominantie',
          badgeBg: 'bg-amber-100 text-amber-900',
          seo: [
            'Hoogwaardige Linkbuilding & Outreach',
            'Backlink Monitoring & Autoriteitsgroei'
          ],
          content: [
            'SEO Blogberichten'
          ],
          images: 'Definitief Merk-Asset Pakket',
          ads: [
            'Google Ads Campagne Optimalisatie & A/B-Testen',
            'Budget-Optimalisatie & CRO-Verbeteringen',
            'Prestatie- & ROI-Rapportage'
          ],
          deliverables: [
            'Definitief SEO Groeirapport',
            'Google Ads Prestatierapport',
            'Definitieve SEO Blogberichten'
          ]
        }
      ]
    }
  };

  const curr = data[lang] || data.en;

  return (
    <section className="py-12 bg-slate-100 border-b border-slate-200" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded bg-[#48B83B] text-white text-xs font-black uppercase font-mono inline-block mb-2 shadow-xs">
            {curr.sectionTitle}
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {curr.title}
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium">
            {curr.subTitle}
          </p>
        </div>

        {/* Project Total Scope Summary Table */}
        <div className="mb-10 bg-white rounded-xl border-2 border-[#48B83B] shadow-sm overflow-hidden animate-fade-up hover-lift">
          <div className="bg-[#48B83B] text-white px-6 py-3 font-black text-xs uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-white animate-pulse" />
              {curr.scopeTitle}
            </span>
            <span className="text-slate-900 font-mono text-[11px] bg-[#FFC107] px-2.5 py-0.5 rounded font-black">{curr.scopeTag}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 p-4 text-xs">
            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <Search className="w-4 h-4 text-[#48B83B]" />
                {curr.seoScope}
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                {curr.seoItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <FileText className="w-4 h-4 text-blue-600" />
                {curr.contentScope}
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                {curr.contentItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <ImageIcon className="w-4 h-4 text-purple-600" />
                {curr.imageScope} <span className="text-[10px] text-slate-500 font-bold">{curr.ifNeeded}</span>
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                {curr.imageItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="p-3 space-y-1 hover:bg-slate-50 transition-colors duration-200 rounded-lg">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-xs">
                <Target className="w-4 h-4 text-amber-600" />
                {curr.adsScope}
              </div>
              <ul className="text-slate-600 space-y-1 font-medium text-[11px]">
                {curr.adsItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
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
                  <th className="py-4 px-4 border border-emerald-500 w-32 bg-[#48B83B]">{curr.thMonth}</th>
                  <th className="py-4 px-4 border border-emerald-500 w-52 bg-[#48B83B]">{curr.thSeo}</th>
                  <th className="py-4 px-4 border border-emerald-500 w-52 bg-[#48B83B]">{curr.thContent}</th>
                  <th className="py-4 px-4 border border-emerald-500 w-44 bg-[#48B83B]">
                    {curr.thImages} <span className="text-[10px] font-mono text-emerald-100 block tracking-normal normal-case font-extrabold">{curr.ifNeeded}</span>
                  </th>
                  <th className="py-4 px-4 border border-emerald-500 w-44 bg-[#48B83B]">{curr.thAds}</th>
                  <th className="py-4 px-4 border border-emerald-500 w-56 bg-[#3ea032]">{curr.thDeliverables}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 text-slate-800 font-medium">
                {curr.months.map((m, idx) => (
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
                          <span>{curr.startsM2}</span>
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
                          {curr.phase2Focus}
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
