import React from 'react';
import { ShieldCheck, Globe, Printer, PlusCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useProposal } from '../context/ProposalContext.jsx';

export default function Header({ onScrollToSection, onOpenModal }) {
  const { lang, toggleLanguage, setLang, t } = useLanguage();
  const { proposal, setIsUploadModalOpen } = useProposal();

  const sections = [
    { id: 'cover', label: t('header.cover') },
    { id: 'audit-findings', label: t('header.audit') },
    // { id: 'roadmap', label: t('header.strategy') }, // Temporarily hidden
    { id: 'work-process', label: t('header.process') },
    { id: 'core-services', label: t('header.services') },
    { id: 'financial-policy', label: t('header.terms') },
    { id: 'portfolio', label: t('header.portfolio') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs print:hidden">

      {/* Top Header Main Row */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-1.5 sm:gap-4">

          {/* Official Webestone Logo & Proposal Sub-tag */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 cursor-pointer" onClick={() => onScrollToSection('cover')}>
            <img
              src="/webestone_logo.webp"
              alt="Webestone Digital Marketing Service"
              className="h-6 sm:h-8 w-auto object-contain"
            />

            <div className="hidden md:flex items-center space-x-2 border-l border-slate-200 pl-3">
              <span className="text-xs font-extrabold text-slate-900">{proposal.companyName || proposal.domain}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-[#48B83B] font-extrabold border border-emerald-300">
                {t('header.proposalTag')}
              </span>
            </div>
          </div>

          {/* Action CTAs & Language Dropdown */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">

            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition shadow-xs cursor-pointer"
              title="Generate New Proposal from PDF"
            >
              <PlusCircle className="w-3.5 h-3.5 text-white" />
              <span>Generate New Proposal</span>
            </button>

            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition border border-slate-300 cursor-pointer"
              title="Download/Print PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-700" />
              <span>Download PDF</span>
            </button>

            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-[#48B83B] hover:bg-emerald-100 font-extrabold text-xs transition border border-emerald-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#48B83B]" />
              <span>webestone.com</span>
            </a>

            <button
              onClick={onOpenModal}
              className="px-2 sm:px-4 py-1.5 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-[11px] sm:text-xs flex items-center gap-1 shadow-xs transition whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 shrink-0" />
              <span>{t('header.authorizeBtn')}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Sub-Header Dedicated Section Navigation Bar (No-Overflow) */}
      <div className="bg-slate-50/90 border-t border-slate-100 py-1.5 px-2 sm:px-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center space-x-1 text-xs font-bold whitespace-nowrap">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onScrollToSection(sec.id)}
              className="px-2.5 sm:px-3 py-1 rounded-md text-slate-700 hover:text-[#48B83B] hover:bg-white transition-all font-extrabold hover:shadow-2xs text-[11px] sm:text-xs"
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

    </header>
  );
}
