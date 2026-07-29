import React from 'react';
import { Heart, Sparkles, ShieldCheck, MessageCircle, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ThankYouSection({ onOpenModal }) {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white border-b border-slate-200 relative overflow-hidden" id="thank-you">
      
      {/* Background Accent Yellow Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFC107] rounded-full pointer-events-none opacity-15 blur-3xl animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Webestone Signature Green Dashed Card Container */}
        <div className="webestone-dashed-card p-8 sm:p-12 relative bg-emerald-50/40 shadow-xs text-center space-y-6 animate-fade-up hover-lift">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#48B83B] text-xs font-mono font-black uppercase tracking-wider animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC107] animate-spin" />
            <span>{t('thankYou.badge')}</span>
          </div>

          {/* Thank You Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('thankYou.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            {t('thankYou.subTitle')}
          </p>

          {/* Action Cards / CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-xl bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover-lift transition"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              <span>{t('thankYou.authBtn')}</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>

            <a
              href="https://wa.me/8801815025322?text=Hello%20Webestone%20Agency,%20thank%20you%20for%20the%20Bargello%20Eindhoven%20proposal!%20Let's%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover-lift transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('thankYou.whatsappBtn')}</span>
            </a>

            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 border-2 border-[#48B83B] transition shadow-2xs"
            >
              <Globe className="w-4 h-4 text-[#48B83B]" />
              <span>{t('thankYou.websiteBtn')}</span>
            </a>
          </div>

          {/* Floating Heart / Partnership Tag */}
          <div className="pt-4 text-slate-500 text-xs font-semibold flex items-center justify-center gap-1.5 border-t border-emerald-200/60 max-w-md mx-auto">
            <span>{t('thankYou.footer')}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          </div>

        </div>

      </div>
    </section>
  );
}
