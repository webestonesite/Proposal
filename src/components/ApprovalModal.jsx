import React, { useState } from 'react';
import { X, CheckCircle, Printer, ShieldCheck, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ApprovalModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Bargello Eindhoven Authorized Representative',
    title: 'Store Owner / Marketing Director',
    email: '',
    notes: '',
    agreedToTerms: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Webestone Agency,\n\nI am officially authorizing the 6-Month B2B SEO Proposal for Bargello Eindhoven.\n\n👤 Representative: ${formData.name}\n💼 Title: ${formData.title}\n📧 Email: ${formData.email}\n📝 Notes: ${formData.notes || 'None'}\n\nRef: WEB-2026-SEO-07`;
    
    const whatsappUrl = `https://wa.me/8801815025322?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white max-w-xl w-full rounded-2xl border border-slate-300 p-6 sm:p-8 relative space-y-5 shadow-2xl font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            <div className="border-b border-slate-200 pb-4">
              <span className="text-[11px] font-bold text-[#48B83B] uppercase tracking-wider font-mono">
                {t('approvalModal.badge')}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {t('approvalModal.title')}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {t('approvalModal.subTitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">{t('approvalModal.nameLabel')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">{t('approvalModal.titleLabel')}</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">{t('approvalModal.emailLabel')}</label>
                <input
                  type="email"
                  required
                  placeholder="contact@bargelloeindhoven.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">{t('approvalModal.notesLabel')}</label>
                <textarea
                  rows="2"
                  placeholder="Any specific target Eindhoven product lines or custom notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 resize-none font-medium"
                ></textarea>
              </div>

              <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-[11px] text-slate-700 space-y-1">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  Direct WhatsApp Authorization Active:
                </p>
                <p>• Direct WhatsApp connection (+8801815025322) to Webestone Agency.</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold flex items-center gap-1.5 border border-slate-300"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print PDF
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold flex items-center gap-2 shadow-md transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  {t('approvalModal.confirmBtn')}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">Proposal Contract Authorized</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong> ({formData.title}). Webestone Agency has logged your confirmation for Bargello Eindhoven's 6-Month SEO Campaign and redirected to WhatsApp (+8801815025322).
            </p>

            <div className="flex justify-center gap-3">
              <a
                href={`https://wa.me/8801815025322?text=${encodeURIComponent(`Hello Webestone Agency, following up on authorization for Bargello Eindhoven proposal.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Re-open WhatsApp Chat
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Return to Document
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
