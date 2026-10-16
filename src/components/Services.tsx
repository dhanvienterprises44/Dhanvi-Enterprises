import React from 'react';
import {
  Building,
  Briefcase,
  Layers,
  FileCheck,
  TrendingUp,
  Globe2,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: (service?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const servicesList = [
    {
      number: '01',
      icon: <Building className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Residential Property Acquisition',
      description:
        'Strategic guidance for purchasing luxury apartments, penthouses, and gated community villas. We verify developer credentials, RERA delivery timelines, carpet-to-super-built-up ratios, and fair market price ranges.',
      deliverables: ['Carpet Area & UDS Audit', 'RERA Registration Verification', 'Builder Track-Record Review'],
    },
    {
      number: '02',
      icon: <Briefcase className="w-6 h-6 text-[#10B981]" />,
      title: 'Commercial Office & Retail Leasing',
      description:
        'Identifying prime corporate workspaces, Grade-A IT tech park floors, and retail storefronts across Bengaluru. Full assistance with letter of intent (LOI), lease covenants, lock-in clauses, and fit-out timelines.',
      deliverables: ['Micro-market Rental Benchmarks', 'Lease Deed Structuring', 'Occupancy Certificate (OC) Check'],
    },
    {
      number: '03',
      icon: <Layers className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Plotted Layouts & Land Advisory',
      description:
        'Specialized scouting for high-appreciation residential plots and commercial parcels. Rigorous inspection of layout sanctions from BDA, BMRDA, and DTCP, as well as revenue conversion status.',
      deliverables: ['DC Conversion Order Verification', '30-Year Encumbrance Audit', 'Physical Boundary Demarcation'],
    },
    {
      number: '04',
      icon: <FileCheck className="w-6 h-6 text-[#10B981]" />,
      title: 'Legal Due Diligence & Khata Advisory',
      description:
        'Thorough documentary verification before you sign agreements. We inspect mother deeds, flow of title, revenue entries, tax compliance, and assist with BBMP e-Khata registration.',
      deliverables: ['Title Flow Audit & Legal Opinion', 'e-Khata Transfer Assistance', 'Encumbrance Certificate (EC) Verification'],
    },
    {
      number: '05',
      icon: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Property Valuation & Price Analysis',
      description:
        'Objective valuation reports for buyers and sellers based on current registry transaction rates, guidance values, and local corridor absorption trends in South Bengaluru.',
      deliverables: ['Government Guidance Value Check', 'Comparative Market Analysis (CMA)', 'Rental Yield Projections'],
    },
    {
      number: '06',
      icon: <Globe2 className="w-6 h-6 text-[#10B981]" />,
      title: 'NRI & Outstation Client Representation',
      description:
        'Dedicated end-to-end representation for non-resident Indian (NRI) and outstation investors. We conduct live video site walkthroughs, oversee Power of Attorney (POA) registration, and facilitate banking repatriation advisory.',
      deliverables: ['Live HD Site Walkthroughs', 'POA Drafting & Execution Guidance', 'TDS & Capital Gains Planning Assistance'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0E0E11] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Our Advisory Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Comprehensive Real Estate Solutions Crafted for Discerning Clients.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            From initial site selection through final sub-registrar deed registration, our advisory
            combines rigorous legal verification with deep Bengaluru micro-market intelligence.
          </p>
        </div>

        {/* 6-Grid Services Layout with Editorial Numbering (frontend-design 1.B compliant) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-xl bg-[#141418] border border-white/10 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                    {service.icon}
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#D4AF37] opacity-60">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-white/10 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Advisory Elements
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(service.title)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#FDE68A] transition-colors pt-2 cursor-pointer"
              >
                <span>Consult on this service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
