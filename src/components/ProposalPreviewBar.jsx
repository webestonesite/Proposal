import React from 'react';
import { PlusCircle, Printer, RotateCcw, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';
import { useProposal } from '../context/ProposalContext';

export default function ProposalPreviewBar() {
  const { proposal, isCustomProposal, setIsUploadModalOpen, resetToDefault } = useProposal();

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 py-2.5 px-3 sm:px-6 sticky top-0 z-50 shadow-md print:hidden transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        
        {/* Left Side: Active Status & Client Tag */}
        <div className="flex items-center space-x-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#48B83B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#48B83B]"></span>
          </span>

          <div className="flex items-center space-x-2 truncate">
            <span className="font-extrabold text-slate-100 truncate">
              Proposal For: <span className="text-[#48B83B]">{proposal.domain}</span>
            </span>
            <span className="hidden md:inline-block text-slate-400">•</span>
            <span className="hidden md:inline-block text-slate-300 font-medium">
              Market: {proposal.targetMarket}
            </span>
            {isCustomProposal && (
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[#48B83B] font-extrabold text-[10px] border border-emerald-500/40">
                Custom Upload
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Actions (Upload New PDF, Download PDF, Reset) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-[#48B83B] hover:from-emerald-500 hover:to-[#48B83B] text-white font-extrabold flex items-center gap-1.5 shadow-xs transition text-xs cursor-pointer whitespace-nowrap"
            title="Upload another SEO Audit PDF"
          >
            <PlusCircle className="w-3.5 h-3.5 text-white" />
            <span>Generate New Proposal</span>
          </button>

          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-extrabold flex items-center gap-1.5 border border-slate-700 transition text-xs cursor-pointer whitespace-nowrap"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span>Download PDF</span>
          </button>

          {isCustomProposal && (
            <button
              onClick={resetToDefault}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer shrink-0"
              title="Reset to default template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
