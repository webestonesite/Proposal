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
import { ShieldCheck, Phone, Globe, MapPin, MessageCircle } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#FFC107] selection:text-slate-900 overflow-x-hidden flex flex-col justify-between">
      
      <div>
        {/* Navigation Header */}
        <Header
          onScrollToSection={scrollToSection}
          onOpenModal={() => setIsModalOpen(true)}
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
            <AuditIssues />
          </div>

          <div id="summary">
            <KpiGrid />
          </div>

          <div id="keywords">
            <KeywordResearch />
          </div>

          <div id="roadmap">
            <GrowthRoadmap />
          </div>

          <div id="work-process">
            <WorkProcess />
          </div>

          <div id="core-services">
            <AgencyServices />
          </div>

          <div id="financial-policy">
            <FinancialPolicy />
          </div>

          <div id="portfolio">
            <AgencyPortfolio />
          </div>

          <ThankYouSection onOpenModal={() => setIsModalOpen(true)} />
        </main>
      </div>

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-0 z-30 bg-slate-900 text-white py-3 px-4 shadow-xl print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#48B83B] animate-ping"></span>
            <span className="text-slate-200 font-bold">
              Webestone Agency Strategy for Bargello Eindhoven • 6-Month SEO Campaign (August 2026 – January 2027)
            </span>
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
            <a
              href="https://wa.me/8801815025322?text=Hello%20Webestone%20Agency,%20I%20want%20to%20discuss%20the%20SEO%20Proposal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold flex items-center gap-1.5 shadow-xs transition"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              WhatsApp Us
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-lg bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold flex items-center gap-1.5 shadow-xs transition"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              Authorize Proposal
            </button>
          </div>
        </div>
      </div>

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
              <span>Offices: Perth (Primary), Evora & London</span>
            </span>
          </div>

          <p className="text-emerald-50 text-[11px] font-semibold shrink-0">
            © 2026 Webestone Agency. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
