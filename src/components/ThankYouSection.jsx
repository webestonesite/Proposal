import React from 'react';
import { Heart, Sparkles, ShieldCheck, MessageCircle, Globe, ArrowRight } from 'lucide-react';

export default function ThankYouSection({ onOpenModal }) {
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
            <span>PROPOSAL CONCLUSION & NEXT STEPS</span>
          </div>

          {/* Thank You Title */}
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Thank You for Considering <br />
            <span className="text-[#48B83B]">Webestone Digital Marketing Agency</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            We are thrilled about the opportunity to partner with <strong className="text-slate-900 font-extrabold underline decoration-[#FFC107] underline-offset-4">BARGELLO Eindhoven</strong> and turn your search presence into a dominant market leader across the Netherlands.
          </p>

          {/* Action Cards / CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 rounded-xl bg-[#FFC107] hover:bg-amber-400 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover-lift transition"
            >
              <ShieldCheck className="w-4 h-4 text-slate-900" />
              Authorize & Sign Proposal
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>

            <a
              href="https://wa.me/8801815025322?text=Hello%20Webestone%20Agency,%20thank%20you%20for%20the%20Bargello%20Eindhoven%20proposal!%20Let's%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover-lift transition"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp (+8801815025322)
            </a>

            <a
              href="https://webestone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm flex items-center gap-2 border-2 border-[#48B83B] transition shadow-2xs"
            >
              <Globe className="w-4 h-4 text-[#48B83B]" />
              webestone.com
            </a>
          </div>

          {/* Floating Heart / Partnership Tag */}
          <div className="pt-4 text-slate-500 text-xs font-semibold flex items-center justify-center gap-1.5 border-t border-emerald-200/60 max-w-md mx-auto">
            <span>Engineered with passion & precision by</span>
            <strong className="text-slate-900 font-bold">Webestone Agency</strong>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          </div>

        </div>

      </div>
    </section>
  );
}
