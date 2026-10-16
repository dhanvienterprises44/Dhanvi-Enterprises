import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { DhanviLogo } from './DhanviLogo';

interface HeroProps {
  onOpenConsultation: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with High-Contrast Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bangalore_luxury_property_1792133784916.jpg"
          alt="Bengaluru luxury modern villa and architectural skyline at twilight"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Official Brand Identity Presentation */}
        <div className="mb-6 transform hover:scale-[1.01] transition-transform">
          <DhanviLogo variant="badge" size="lg" className="shadow-2xl" />
        </div>

        {/* Quiet Subtitle / Domain Identification without Pill Enclosure */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300 font-medium tracking-wide mb-5">
          <span className="text-[#D4AF37]">Bengaluru Real Estate Consultancy</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>Parappana Agrahara & Southern Corridors</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-[#10B981]">RERA & Due Diligence Advisory</span>
        </div>

        {/* Primary Headline with text-wrap: balance */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white tracking-tight max-w-4xl leading-[1.15] mb-6 text-balance">
          Guiding Your Most Significant Property Investments with{' '}
          <span className="text-gold-gradient">Integrity & Precision</span>.
        </h1>

        {/* Concrete Value Proposition */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          Personalized advisory for luxury residential homes, high-yield commercial
          spaces, and verified plotted developments across Bengaluru’s premier growth corridors.
        </p>

        {/* Prominent Action Callouts: Call Now, WhatsApp, and Consultation Form */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mb-12">
          {/* Prominent Call Now Button */}
          <a
            href="tel:+919626368833"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide text-black bg-gold-gradient rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-black text-black" />
            <span>Call Now: +91 9626368833</span>
          </a>

          {/* Prominent WhatsApp Button with Emerald Gradient Accent */}
          <a
            href="https://wa.me/919626368833?text=Hello%20DHANVI%20Enterprises%2C%20I%20would%20like%20to%20consult%20regarding%20property%20opportunities%20in%20Bengaluru."
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#059669] hover:bg-[#047857] border border-[#10B981]/30 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Quick Consultation Request */}
          <button
            onClick={() => onOpenConsultation()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Request Advisory Callback</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* Trust & Location Strip (Quiet unboxed indicators) */}
        <div className="w-full max-w-4xl pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Verified Due Diligence</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Title search, encumbrance check, and legal clarity before you commit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-black/60 border border-[#D4AF37]/30 text-[#10B981] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Parappana Agrahara Hub</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Sai Baba Layout, Parappana Agrahara Main Road, Bengaluru – 560100.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Direct Fiduciary Support</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Client-first representation with zero high-pressure sales tactics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
