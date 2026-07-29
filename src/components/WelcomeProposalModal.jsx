import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Lock, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function WelcomeProposalModal({ isOpen, onClose, onOpenAuthorizeModal, onNavigate }) {
  const { t } = useLanguage();

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
              {t('header.proposalTag')}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            {t('welcomeModal.title')}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {t('welcomeModal.subTitle')}
          </p>
        </div>

        {/* Exact Proposal Metadata Box */}
        <div className="bg-emerald-50/90 border-2 border-emerald-200 rounded-xl p-4 sm:p-5 text-xs space-y-2.5 shadow-2xs">
          <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
            <span className="text-slate-600 font-bold">{t('welcomeModal.preparedBy')}:</span>
            <div className="flex items-center gap-1.5">
              <img src="/webestone_logo.webp" alt="Webestone" className="h-5 w-auto object-contain" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold shrink-0">{t('welcomeModal.type')}:</span>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-[#48B83B] font-extrabold text-[11px] border border-emerald-300 text-right">
              {t('welcomeModal.typeVal')}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">{t('welcomeModal.preparedFor')}:</span>
            <strong className="text-slate-900 font-extrabold">{t('welcomeModal.preparedForVal')}</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">{t('welcomeModal.targetMarket')}:</span>
            <strong className="text-slate-900 font-bold">{t('welcomeModal.targetMarketVal')}</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">{t('welcomeModal.proposalDate')}:</span>
            <strong className="text-slate-900 font-bold">{t('welcomeModal.proposalDateVal')}</strong>
          </div>

          <div className="flex justify-between items-center border-b border-emerald-200/60 pb-2">
            <span className="text-slate-600 font-bold">{t('welcomeModal.website')}:</span>
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
            <span className="text-slate-600 font-bold">{t('welcomeModal.status')}:</span>
            <span className="text-[#48B83B] font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83B]" />
              <span>{t('welcomeModal.statusVal')}</span>
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
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">{t('welcomeModal.card1Title')}</div>
              <div className="text-[10px] text-slate-500 font-medium">{t('welcomeModal.card1Sub')}</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              02
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">{t('welcomeModal.card2Title')}</div>
              <div className="text-[10px] text-slate-500 font-medium">{t('welcomeModal.card2Sub')}</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              03
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">{t('welcomeModal.card3Title')}</div>
              <div className="text-[10px] text-slate-500 font-medium">{t('welcomeModal.card3Sub')}</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FFC107] text-slate-900 font-black flex items-center justify-center shrink-0 text-xs shadow-2xs">
              04
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs">{t('welcomeModal.card4Title')}</div>
              <div className="text-[10px] text-slate-500 font-medium">{t('welcomeModal.card4Sub')}</div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => {
              onClose();
              onNavigate('cover');
            }}
            className="w-full py-3.5 px-6 rounded-xl bg-[#48B83B] hover:bg-[#3da131] text-white text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
          >
            <span>Understood — See Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
