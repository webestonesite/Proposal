import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Globe, FileText } from 'lucide-react';

export default function WelcomeProposalModal({ isOpen, onClose, onOpenAuthorizeModal, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white max-w-2xl w-full rounded-2xl border-2 border-[#48B83B] p-5 sm:p-8 relative space-y-5 shadow-2xl font-sans max-h-[92vh] overflow-y-auto my-auto">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer z-10"
          title="Close Proposal Overview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-emerald-100 pb-4 space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <img
              src="/webestone_logo.webp"
              alt="Webestone Digital Marketing Agency"
              className="h-8 w-auto object-contain"
            />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-100 text-[#48B83B] font-mono text-[10px] sm:text-xs font-black border border-emerald-300">
              OFFICIAL B2B DIGITAL MARKETING PROPOSAL
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Digital Marketing & Growth Proposal
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Strategic 6-Month Execution Framework prepared for <strong className="text-slate-900 font-extrabold underline decoration-[#FFC107] underline-offset-4">Bargello Eindhoven</strong>.
          </p>
        </div>

        {/* Exact Proposal Metadata Box (Matching User Image) */}
        <div className="bg-emerald-50/90 border-2 border-emerald-200 rounded-xl p-4 sm:p-5 text-xs space-y-2.5 shadow-2xs">
          <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
            <span className="text-slate-600 font-bold">Agency:</span>
            <div className="flex items-center gap-1.5">
              <img src="/webestone_logo.webp" alt="Webestone" className="h-5 w-auto object-contain" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold shrink-0">Proposal Type:</span>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-[#48B83B] font-extrabold text-[11px] border border-emerald-300 text-right">
              Digital Marketing
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">Prepared For:</span>
            <strong className="text-slate-900 font-extrabold">Bargello Eindhoven</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">Target Market:</span>
            <strong className="text-slate-900 font-bold">Netherlands (Eindhoven)</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">Proposal Date:</span>
            <strong className="text-slate-900 font-bold">July 29, 2026</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">Official Website:</span>
            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#48B83B] font-extrabold hover:underline flex items-center gap-1"
            >
              <span>webestone.com</span>
              <Globe className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center pt-0.5">
            <span className="text-slate-600 font-bold">Status:</span>
            <span className="text-[#48B83B] font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B]" />
              <span>Official Strategic Plan</span>
            </span>
          </div>
        </div>

        {/* 4 Strategy Highlights Grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              01
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">Technical SEO Audit</div>
              <div className="text-[10px] text-slate-500 font-medium">Core Web Vitals & Indexing</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              02
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">Content Engine</div>
              <div className="text-[10px] text-slate-500 font-medium">240+ High Intent Pages</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              03
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">Link Authority</div>
              <div className="text-[10px] text-slate-500 font-medium">5000+ Dutch Backlinks</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              04
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">Local Market Dominance</div>
              <div className="text-[10px] text-slate-500 font-medium">Eindhoven & Brabant SEO</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onNavigate('cover');
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#48B83B] hover:bg-[#3da131] text-white text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Understood — See Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenAuthorizeModal();
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#FFC107] hover:bg-[#e6ad00] text-slate-900 text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Lock className="w-4 h-4 text-slate-900" />
            <span>Authorize Proposal Agreement</span>
          </button>
        </div>

      </div>
    </div>
  );
}
