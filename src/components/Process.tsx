import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  onOpenConsultation: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Requirement Mapping',
      timeframe: 'Stage 1',
      description:
        'We begin with an in-depth consultation to clarify your exact objectives: residential end-use, commercial space planning, or capital appreciation via plotted land. We define your budget envelope, preferred Bengaluru corridors, and financing parameters.',
      points: ['Budget and cash flow analysis', 'Micro-market corridor prioritization', 'Timeline and possession requirements'],
    },
    {
      step: '02',
      title: 'Curated Scouting & Legal Due Diligence',
      timeframe: 'Stage 2',
      description:
        'Instead of inundating you with hundreds of random listings, we curate a focused dossier of options matching your exact criteria. Each option undergoes preliminary verification of title clarity, RERA compliance, and municipal zoning sanctions.',
      points: ['Title and 30-year EC review', 'RERA project verification check', 'Layout sanction & DC conversion inspection'],
    },
    {
      step: '03',
      title: 'Accompanied Site Visits & Fair Negotiation',
      timeframe: 'Stage 3',
      description:
        'We coordinate and personally accompany you on physical site inspections. We audit actual carpet area, construction quality, access road widths, and water/electricity infrastructure, followed by objective price negotiation.',
      points: ['Physical boundary & carpet area check', 'Infrastructure & road accessibility check', 'Comparative market price negotiation'],
    },
    {
      step: '04',
      title: 'Documentation & Sub-Registrar Closing',
      timeframe: 'Stage 4',
      description:
        'We guide you through the execution of the Agreement of Sale, bank loan documentation, stamp duty calculation under Karnataka revenue rules, and sub-registrar deed execution, followed by e-Khata transfer assistance.',
      points: ['Sale agreement legal scrutiny', 'Stamp duty & registration facilitation', 'Sub-registrar closing & e-Khata guidance'],
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#0E0E11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Consultation Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Our 4-Stage Advisory Workflow.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A structured, risk-mitigated consultation journey designed to eliminate uncertainties and
            deliver a secure property transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#141418] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif-luxury font-bold text-gold-gradient">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-black/60 border border-white/10">
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2.5">{step.title}</h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {step.description}
                </p>

                <ul className="space-y-2 pt-3 border-t border-white/10">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#141418] via-[#1A1A22] to-[#141418] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-serif-luxury font-bold text-white mb-1">
              Ready to begin your property search in Bengaluru?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Schedule a preliminary discovery consultation with DHANVI Enterprises today.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-black bg-gold-gradient rounded-lg shadow hover:shadow-lg transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Start Advisory Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
