import React from 'react';
import { ShieldCheck, Globe } from 'lucide-react';

export default function Header({ onScrollToSection, onOpenModal }) {
  const sections = [
    { id: 'cover', label: 'Cover' },
    { id: 'audit-findings', label: '1.0 Audit' },
    { id: 'summary', label: '2.0 Benchmark' },
    { id: 'keywords', label: '3.0 Keywords' },
    { id: 'roadmap', label: '4.0 Strategy' },
    { id: 'work-process', label: '5.0 Process' },
    { id: 'core-services', label: '6.0 Services' },
    { id: 'financial-policy', label: '7.0 Terms' },
    { id: 'portfolio', label: '8.0 Portfolio' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs print:hidden">
      
      {/* Top Header Main Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          
          {/* Official Webestone Logo & Proposal Sub-tag */}
          <div className="flex items-center space-x-3 shrink-0 cursor-pointer" onClick={() => onScrollToSection('cover')}>
            <img
              src="/webestone_logo.webp"
              alt="Webestone Digital Marketing Agency"
              className="h-8 w-auto object-contain"
            />

            <div className="hidden sm:flex items-center space-x-2 border-l border-slate-200 pl-3">
              <span className="text-xs font-extrabold text-slate-900">Bargello Eindhoven</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B] font-extrabold border border-emerald-300">
                SEO PROPOSAL
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-[#48B83B] hover:bg-emerald-100 font-extrabold text-xs transition border border-emerald-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#48B83B]" />
              <span className="hidden sm:inline">webestone.com</span>
            </a>

            <button
              onClick={onOpenModal}
              className="px-4 py-1.5 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              Authorize Proposal
            </button>
          </div>

        </div>
      </div>

      {/* Sub-Header Dedicated Section Navigation Bar (No-Overflow) */}
      <div className="bg-slate-50/90 border-t border-slate-100 py-1.5 px-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center space-x-1.5 text-xs font-bold whitespace-nowrap">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onScrollToSection(sec.id)}
              className="px-3 py-1 rounded-md text-slate-700 hover:text-[#48B83B] hover:bg-white transition-all font-extrabold hover:shadow-2xs"
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

    </header>
  );
}
