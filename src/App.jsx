import React, { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AuditIssues from './components/AuditIssues.jsx';
import KpiGrid from './components/KpiGrid.jsx';
import KeywordResearch from './components/KeywordResearch.jsx';
import GrowthRoadmap from './components/GrowthRoadmap.jsx';
import WorkProcess from './components/WorkProcess.jsx';
import AgencyServices from './components/AgencyServices.jsx';
import FinancialPolicy from './components/FinancialPolicy.jsx';
import AgencyPortfolio from './components/AgencyPortfolio.jsx';
import ThankYouSection from './components/ThankYouSection.jsx';
import ApprovalModal from './components/ApprovalModal.jsx';
import WelcomeProposalModal from './components/WelcomeProposalModal.jsx';
import { ShieldCheck, Phone, Globe, MapPin, MessageCircle, X } from 'lucide-react';

import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';

function AppContent() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isStickyClosed, setIsStickyClosed] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-[#48B83B] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      <div>
        {/* Navigation Header */}
        <Header
          onOpenModal={() => setIsModalOpen(true)}
          onScrollToSection={(id) => scrollToSection(id)}
        />

        {/* Continuous Single Page Document Scroll Layout */}
        <main className="space-y-0">
          <div id="cover">
            <HeroSection
              onOpenModal={() => setIsModalOpen(true)}
              onNavigate={(id) => scrollToSection(id)}
            />
          </div>

          <div id="audit-findings">
            <AuditIssues
              onNavigate={(id) => scrollToSection(id)}
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="summary">
            <KpiGrid
              onNavigate={(id) => scrollToSection(id)}
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="keywords">
            <KeywordResearch
              onNavigate={(id) => scrollToSection(id)}
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="roadmap">
            <GrowthRoadmap
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="work-process">
            <WorkProcess
              onNavigate={(id) => scrollToSection(id)}
            />
          </div>

          <div id="core-services">
            <AgencyServices
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="financial-policy">
            <FinancialPolicy
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <div id="portfolio">
            <AgencyPortfolio
              onOpenModal={() => setIsModalOpen(true)}
            />
          </div>

          <ThankYouSection onOpenModal={() => setIsModalOpen(true)} />
        </main>
      </div>

      {/* Floating Bottom Sticky Action Bar — Mobile Optimized */}
      {!isStickyClosed && (
        <div className="sticky bottom-0 z-30 bg-slate-900 text-white py-2.5 px-3 sm:px-4 shadow-2xl print:hidden border-t border-slate-800 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
            
            {/* Desktop Left Text (Hidden on Mobile to Prevent Screen Clutter) */}
            <div className="hidden md:flex items-center space-x-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#48B83B] animate-ping shrink-0"></span>
              <span className="text-slate-200 font-bold truncate">
                {t('footer.stickyText')}
              </span>
            </div>

            {/* Mobile & Desktop Action Buttons */}
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full md:w-auto">
              <a
                href="https://wa.me/8801815025322?text=Hello%20Webestone%20Agency,%20I%20want%20to%20discuss%20the%20Digital%20Marketing%20Proposal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold flex items-center justify-center gap-1.5 shadow-xs transition text-xs whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{t('footer.whatsappUs')}</span>
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center gap-1.5 shadow-xs transition text-xs cursor-pointer whitespace-nowrap"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                <span>{t('footer.authorizeProposal')}</span>
              </button>

              <button
                onClick={() => setIsStickyClosed(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition cursor-pointer shrink-0"
                title="Close action bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Auto Page-Load Welcome Digital Marketing Proposal Popup Modal */}
      <WelcomeProposalModal
        isOpen={isWelcomeModalOpen}
        onClose={() => setIsWelcomeModalOpen(false)}
        onOpenAuthorizeModal={() => setIsModalOpen(true)}
        onNavigate={(id) => scrollToSection(id)}
      />

      {/* Proposal Approval Modal */}
      <ApprovalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Official Webestone Agency Green Footer Bar */}
      <footer className="py-4 bg-[#48B83B] text-white text-xs font-bold border-t border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/8801815025322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>+8801815025322</span>
            </a>

            <span className="hidden sm:inline text-emerald-300">•</span>

            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Globe className="w-4 h-4 text-amber-300" />
              <span>webestone.com</span>
            </a>

            <span className="hidden sm:inline text-emerald-300">•</span>

            <span className="flex items-center gap-1.5 text-emerald-100">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>{t('footer.offices')}</span>
            </span>
          </div>

          <p className="text-emerald-50 text-[11px] font-semibold shrink-0">
            {t('footer.rights')}
          </p>
        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
