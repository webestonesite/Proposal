import React from 'react';
import { ShieldCheck, Globe, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Header({ onScrollToSection, onOpenModal }) {
  const { lang, toggleLanguage, t } = useLanguage();

  const sections = [
    { id: 'cover', label: t('header.cover') },
    { id: 'audit-findings', label: t('header.audit') },
    { id: 'summary', label: t('header.benchmark') },
    { id: 'keywords', label: t('header.keywords') },
    { id: 'roadmap', label: t('header.strategy') },
    { id: 'work-process', label: t('header.process') },
    { id: 'core-services', label: t('header.services') },
    { id: 'financial-policy', label: t('header.terms') },
    { id: 'portfolio', label: t('header.portfolio') },
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
                {t('header.proposalTag')}
              </span>
            </div>
          </div>

          {/* Action CTAs & Language Switcher */}
          <div className="flex items-center space-x-2 shrink-0">
            
            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
              <button
                onClick={() => toggleLanguage('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-extrabold transition-all ${
                  lang === 'en'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
              <button
                onClick={() => toggleLanguage('nl')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-extrabold transition-all ${
                  lang === 'nl'
                    ? 'bg-[#48B83B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Schakel over naar Nederlands"
              >
                <span>🇳🇱</span>
                <span>NL</span>
              </button>
            </div>

            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-[#48B83B] hover:bg-emerald-100 font-extrabold text-xs transition border border-emerald-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#48B83B]" />
              <span>webestone.com</span>
            </a>

            <button
              onClick={onOpenModal}
              className="px-3 sm:px-4 py-1.5 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs flex items-center gap-1.5 shadow-xs transition whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>{t('header.authorizeBtn')}</span>
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
