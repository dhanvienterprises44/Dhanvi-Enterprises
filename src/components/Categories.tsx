import React, { useState } from 'react';
import { Building2, Home, Landmark, Briefcase, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface CategoriesProps {
  onOpenConsultation: (category?: string) => void;
}

interface CategoryItem {
  id: string;
  type: 'residential' | 'commercial' | 'plots' | 'consultation';
  title: string;
  scopeBadge: string;
  description: string;
  image?: string;
  features: string[];
  locations: string[];
  ctaLabel: string;
}

export const Categories: React.FC<CategoriesProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'plots' | 'consultation'>('all');

  const categories: CategoryItem[] = [
    {
      id: 'residential',
      type: 'residential',
      title: 'Residential Properties & Luxury Residences',
      scopeBadge: 'Proposed Advisory Scope',
      description:
        'Comprehensive consultancy for 2, 3 & 4 BHK luxury apartments, sky villas, penthouses, and gated community villas in South & East Bengaluru.',
      image: '/src/assets/images/prop_residential_luxury_1792133785798.jpg',
      features: [
        'RERA-registered developer assessments',
        'Carpet area & UDS (Undivided Share) verification',
        'Floor plan efficiency & Vastu consultation',
        'End-to-end price negotiation and bank loan facilitation',
      ],
      locations: ['Parappana Agrahara', 'Electronic City Phase 1 & 2', 'Kudlu Gate', 'HSR Layout', 'Sarjapur Road'],
      ctaLabel: 'Inquire for Residential Advisory',
    },
    {
      id: 'commercial',
      type: 'commercial',
      title: 'Commercial Workspaces & Retail Hubs',
      scopeBadge: 'Proposed Advisory Scope',
      description:
        'Advisory for corporate tech offices, managed IT spaces, boutique commercial floors, and high-footfall retail showrooms suited for tech firms and institutional investors.',
      image: '/src/assets/images/prop_commercial_hub_1792133786514.jpg',
      features: [
        'Grade-A IT park space identification',
        'Commercial lease agreement structuring & escalation terms',
        'High-yielding pre-leased commercial evaluation',
        'Occupancy certificate (OC) & fire safety compliance verification',
      ],
      locations: ['Electronic City Tech Corridor', 'Outer Ring Road (ORR)', 'Hosur Road Hub', 'HSR Commercial Sector'],
      ctaLabel: 'Inquire for Commercial Advisory',
    },
    {
      id: 'plots',
      type: 'plots',
      title: 'Plotted Developments & Investment Land',
      scopeBadge: 'Proposed Advisory Scope',
      description:
        'Advisory for BDA, BMRDA, and DTCP approved plotted layouts, DC-converted residential parcels, and long-term land investments in high-growth peripheral belts.',
      image: '/src/assets/images/prop_plotted_land_1792133786240.jpg',
      features: [
        'Mother deed scrutiny and 30-year Encumbrance Certificate (EC)',
        'Physical site boundary demarcation & road-width verification',
        'Layout approval authentication (BDA / BMRDA / DTCP)',
        'Strategic road infrastructure & metro proximity analysis',
      ],
      locations: ['Sai Baba Layout & Environs', 'Anekal-Hosur Corridor', 'Sarjapur Extensions', 'Chandapura Growth Hub'],
      ctaLabel: 'Inquire for Land & Plot Advisory',
    },
    {
      id: 'consultation',
      type: 'consultation',
      title: 'Property Legal Due Diligence & Valuation Advisory',
      scopeBadge: 'Core Practice Offering',
      description:
        'Independent advisory for property title verification, legal documentation audit, market valuation benchmarking, and sub-registrar registration assistance.',
      features: [
        'A-Khata vs B-Khata status analysis & guidance',
        'Property tax receipt & betterment charge verification',
        'Karnataka stamp duty & registration calculation guidance',
        'Sub-registrar deed execution and Khata transfer coordination',
      ],
      locations: ['Applicable across all Bengaluru BBMP & BDA jurisdictions'],
      ctaLabel: 'Request Legal / Valuation Consultation',
    },
  ];

  const filteredCategories =
    activeTab === 'all' ? categories : categories.filter((c) => c.type === activeTab);

  return (
    <section id="categories" className="py-20 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Proposed Advisory Categories
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Specialized Portfolios Across Bengaluru’s Growth Corridors.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            In accordance with our fiduciary standards, we showcase verified property categories
            tailored to current buyer demand. We connect clients with verified, vetted options
            customized to exact budget and location criteria.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons per frontend-design 1.A) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#141418] border border-white/10 rounded-xl mb-10 max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'all'
                ? 'bg-gold-gradient text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Categories ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab('residential')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'residential'
                ? 'bg-gold-gradient text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setActiveTab('commercial')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'commercial'
                ? 'bg-gold-gradient text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Commercial Workspaces
          </button>
          <button
            onClick={() => setActiveTab('plots')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'plots'
                ? 'bg-gold-gradient text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Plots & Land
          </button>
          <button
            onClick={() => setActiveTab('consultation')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'consultation'
                ? 'bg-gold-gradient text-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Consultation & Valuation
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#121215] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all group"
            >
              {/* Image Banner if available */}
              {item.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold text-[#D4AF37] bg-black/80 backdrop-blur-sm border border-[#D4AF37]/30 px-3 py-1 rounded-md">
                      {item.scopeBadge}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {!item.image && (
                    <div className="mb-4">
                      <span className="text-[11px] font-semibold text-[#10B981] bg-black/80 border border-[#10B981]/30 px-3 py-1 rounded-md">
                        {item.scopeBadge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Advisory Scope Checklist */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                      Advisory & Verification Scope
                    </div>
                    <ul className="space-y-2">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corridors / Locations */}
                  <div className="mb-8 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Primary Growth Corridors</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      {item.locations.map((loc, lIdx) => (
                        <span key={lIdx}>
                          {loc}
                          {lIdx < item.locations.length - 1 && (
                            <span aria-hidden="true" className="ml-2 text-slate-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onOpenConsultation(item.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-black bg-gold-gradient rounded-lg hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Professional Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#141418] border border-white/10 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Advisory Notice:</strong> In adherence to strict fiduciary
            and Karnataka RERA transparency regulations, property listings and developers undergo individual
            documentary verification prior to presentation. Contact us with your exact budget and corridor
            preferences for customized, verified dossiers.
          </div>
        </div>
      </div>
    </section>
  );
};
