import React from 'react';
import { ShieldCheck, MapPin, Eye, FileText, UserCheck, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <MapPin className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Hyper-Local Bengaluru Presence',
      description:
        'Operating directly from Parappana Agrahara Main Road (Sai Baba Layout), we possess real-time intelligence on neighborhood infrastructure, road widening, upcoming metro routes, and local price trends.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
      title: 'Stringent Legal Verification',
      description:
        'We never recommend a property without advising rigorous checks on 30-year Encumbrance Certificates (EC), conversion orders, mother deed continuity, and Karnataka RERA compliance.',
    },
    {
      icon: <Eye className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Uncompromised Transparency',
      description:
        'Clear breakdowns of carpet area vs super-built-up area, common area loadings, undivided share of land (UDS), and municipal taxes. No hidden costs or speculative claims.',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#10B981]" />,
      title: 'Registry & Khata Guidance',
      description:
        'Complete advisory through the sub-registrar office registration process, Karnataka stamp duty calculation, e-Khata bifurcation, and document drafting assistance.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Client-First Fiduciary Alignment',
      description:
        'We work for you, not the builders. Our consultations are driven solely by your lifestyle requirements, capital budget, and risk profile—free of high-pressure sales.',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#10B981]" />,
      title: 'Direct Accessibility',
      description:
        'Direct phone and WhatsApp access to our principal advisory team. You receive timely responses, organized site inspections, and clear answers at every step.',
    },
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Why DHANVI Enterprises
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            The Advantage of Independent, Principle-Driven Property Counsel.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Real estate is among the largest capital allocations of your life. We safeguard your
            interests with uncompromised due diligence, honest valuations, and personal accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#121215] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center mb-4 shrink-0">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
