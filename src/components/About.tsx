import React from 'react';
import { DhanviLogo } from './DhanviLogo';
import { CheckCircle2, Compass, FileCheck2, Scale, Users2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0E0E11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Card & Philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <DhanviLogo variant="badge" size="md" />
            </div>

            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              About DHANVI Enterprises
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-5 text-balance">
              Independent Real Estate Advisory Centered on Your Prosperity.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Headquartered at Parappana Agrahara Main Road, Bengaluru,{' '}
              <strong className="text-white font-semibold">DHANVI Enterprises</strong> operates
              as an advisory firm dedicated to assisting property buyers, investors, and commercial
              tenants with transparent real estate transactions.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Navigating the Bengaluru property landscape requires more than just marketing brochures.
              It requires meticulous verification of title deeds, strict RERA adherence, realistic
              valuation benchmarks, and an understanding of municipal infrastructure trajectories.
              We stand beside our clients as fiduciaries from requirement analysis through deed
              registration.
            </p>

            {/* Direct Contact Snapshot */}
            <div className="p-4 rounded-lg bg-[#141418] border border-white/10 w-full">
              <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                Registered Office
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Plot No. 104, 1st Cross, Sai Baba Layout (Southern Winds),
                near Food Max Hypermarket, Parappana Agrahara Main Road, Bengaluru – 560100, Karnataka.
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <a
                  href="tel:+919626368833"
                  className="hover:text-[#D4AF37] transition-colors tabular-nums font-semibold"
                >
                  Ph: +91 9626368833
                </a>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <a
                  href="mailto:dhanvienterprises44@gmail.com"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  dhanvienterprises44@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Cornerstones of Consultation */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Uncompromising Due Diligence
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Prioritizing clean legal title verification, encumbrance certificates (EC), mother deed
                continuity, and RERA registration compliance for complete peace of mind.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 hover:border-[#10B981]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Hyper-Local Bengaluru Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Deep ground-level insights into Parappana Agrahara, Electronic City Phase 1 & 2,
                Kudlu Gate, HSR extensions, and upcoming metro line appreciation dynamics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 hover:border-[#10B981]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Transparent Advisory Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero hidden commissions or misleading square-footage claims. We evaluate carpet area,
                undivided share of land (UDS), and municipal approvals objectively.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#121215] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Personalized Representation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct engagement with principal consultants. We manage physical site inspections,
                price negotiations, and sub-registrar registration formalities end-to-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
