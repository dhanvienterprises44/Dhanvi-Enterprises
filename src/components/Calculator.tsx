import React, { useState } from 'react';
import { Calculator as CalcIcon, Info, RefreshCw, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: (details?: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenConsultation }) => {
  const [propertyValue, setPropertyValue] = useState<number>(8500000); // 85 Lakhs default
  const [propertyType, setPropertyType] = useState<'apartment' | 'plot' | 'commercial'>('apartment');
  const [isBBMP, setIsBBMP] = useState<boolean>(true); // BBMP limits vs Rural/BMRDA

  // Karnataka Stamp Duty & Registration Calculation Rules
  const calculateCosts = () => {
    const val = propertyValue || 0;

    // Base Stamp duty rate in Karnataka
    let stampDutyRate = 0.05; // 5% for > 45L
    if (val <= 2000000) {
      stampDutyRate = 0.02; // 2%
    } else if (val <= 4500000) {
      stampDutyRate = 0.03; // 3%
    } else {
      stampDutyRate = 0.05; // 5%
    }

    const baseStampDuty = val * stampDutyRate;
    // Cess on Stamp Duty: 10% in urban areas
    const cess = baseStampDuty * 0.10;
    // Surcharge: 2% in BBMP/corporation limits, 3% in rural
    const surcharge = baseStampDuty * (isBBMP ? 0.02 : 0.03);
    const totalStampDuty = Math.round(baseStampDuty + cess + surcharge);

    // Registration fee: typically 1% of property value (capped or standard in Karnataka)
    const registrationFee = Math.round(val * 0.01);

    // Incidental & Legal verification allowance estimate (e.g., ₹25,000 - ₹50,000)
    const estimatedIncidental = 35000;

    const totalAcquisitionCost = val + totalStampDuty + registrationFee + estimatedIncidental;

    return {
      baseStampDuty,
      cess,
      surcharge,
      totalStampDuty,
      registrationFee,
      estimatedIncidental,
      totalAcquisitionCost,
      effectiveStampRate: ((totalStampDuty / (val || 1)) * 100).toFixed(2),
    };
  };

  const results = calculateCosts();

  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Bengaluru Buyer Utility
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Karnataka Stamp Duty & Acquisition Estimator.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Estimate statutory registration costs, cess, and total acquisition capital for properties
            across Bengaluru jurisdictions based on current Karnataka revenue department guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/10">
            <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
              <CalcIcon className="w-5 h-5 text-[#D4AF37]" />
              <span>Property Parameters</span>
            </h3>

            {/* Property Value Slider & Direct Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Agreed Property Value / Consideration
                </label>
                <span className="font-mono text-sm font-bold text-gold-gradient tabular-nums">
                  {formatINR(propertyValue)}
                </span>
              </div>
              <input
                type="range"
                min="1500000"
                max="50000000"
                step="500000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                <span>₹15 Lakhs</span>
                <span>₹2.5 Crore</span>
                <span>₹5 Crore</span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Quick Value Presets
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPropertyValue(4500000)}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyValue === 4500000
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  ₹45 Lakhs (Mid)
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyValue(8500000)}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyValue === 8500000
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  ₹85 Lakhs (Prime)
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyValue(18000000)}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyValue === 18000000
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  ₹1.80 Cr (Luxury)
                </button>
              </div>
            </div>

            {/* Property Type Selection */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Asset Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPropertyType('apartment')}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyType === 'apartment'
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 font-medium'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Apartment / Villa
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('plot')}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyType === 'plot'
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 font-medium'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Plotted Land
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-2 px-3 text-xs rounded-lg border transition-colors cursor-pointer ${
                    propertyType === 'commercial'
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 font-medium'
                      : 'border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Commercial Space
                </button>
              </div>
            </div>

            {/* Jurisdiction Toggle */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-200">Jurisdiction Limit</span>
                <p className="text-[11px] text-slate-400">
                  {isBBMP ? 'BBMP / Corporation Urban Limit' : 'BMRDA / Gram Panchayat / Rural Area'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBBMP(!isBBMP)}
                className="text-xs font-medium text-[#D4AF37] underline hover:text-white cursor-pointer"
              >
                Switch to {isBBMP ? 'BMRDA / Rural' : 'BBMP Urban'}
              </button>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#141418] border border-[#D4AF37]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400">
                    Acquisition Summary
                  </span>
                  <h3 className="text-lg font-bold text-white">Estimated Cost Breakdown</h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400">Effective Stamp Duty</span>
                  <div className="text-sm font-bold text-[#D4AF37] font-mono">
                    ~{results.effectiveStampRate}%
                  </div>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3.5 mb-6 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Base Consideration Value:</span>
                  <span className="font-mono font-medium tabular-nums">{formatINR(propertyValue)}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span>Karnataka Stamp Duty + Cess:</span>
                    <span className="text-[11px] text-slate-500">(incl. 10% cess & surcharge)</span>
                  </span>
                  <span className="font-mono font-medium text-[#E5C378] tabular-nums">
                    {formatINR(results.totalStampDuty)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span>Sub-Registrar Registration Fee:</span>
                    <span className="text-[11px] text-slate-500">(1% standard)</span>
                  </span>
                  <span className="font-mono font-medium text-slate-200 tabular-nums">
                    {formatINR(results.registrationFee)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Incidental & Legal Verification Est.:</span>
                  <span className="font-mono font-medium text-slate-200 tabular-nums">
                    {formatINR(results.estimatedIncidental)}
                  </span>
                </div>
              </div>

              {/* Total Capital Requirement */}
              <div className="p-4 rounded-xl bg-black/70 border border-[#D4AF37]/40 mb-6">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400">
                      Total Estimated Acquisition Capital
                    </span>
                    <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-gold-gradient tabular-nums">
                      {formatINR(results.totalAcquisitionCost)}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  *Calculation is based on prevailing Karnataka Stamp Act schedules. Guidance value
                  discrepancies may affect actual stamp duty at sub-registrar filing.
                </p>
              </div>
            </div>

            {/* Calculator CTA */}
            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenConsultation(
                    `Stamp Duty Consultation: ${propertyType.toUpperCase()} of ${formatINR(
                      propertyValue
                    )} in ${isBBMP ? 'BBMP' : 'BMRDA'} Area`
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-black bg-gold-gradient rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Request Custom Cost Sheet & Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
