import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What distinguishes DHANVI Enterprises from standard property listing agents?',
      answer:
        'Standard agents typically represent specific builders with high-commission quotas. At DHANVI Enterprises, we operate as independent real estate consultants. We represent the buyer/investor with fiduciary alignment, conducting thorough legal due diligence, title scrutiny, municipal clearance checks, and objective market price negotiations before recommending any property.',
    },
    {
      question: 'How do you verify whether a property in Bengaluru is RERA-compliant?',
      answer:
        'We cross-reference every ongoing residential and commercial project against the official Karnataka RERA (K-RERA) portal. We verify approved building plans, sanctioned floor counts, delivery milestone commitments, designated RERA escrow bank accounts, and quarterly compliance filings to prevent handover delays or deviations.',
    },
    {
      question: 'What is the significance of A-Khata vs B-Khata in Bengaluru real estate?',
      answer:
        'An A-Khata signifies that the property complies with BBMP municipal planning bylaws, has paid all betterment charges, and is eligible for construction approvals and nationalized bank home loans. A B-Khata is simply a property tax register record and indicates pending regularization or layout approval. We assist clients in verifying Khata classifications and navigating e-Khata authentication.',
    },
    {
      question: 'Why is the Parappana Agrahara and Electronic City corridor a key growth zone?',
      answer:
        'Parappana Agrahara Main Road and Southern Winds layout sit directly between Hosur Road, Hosa Road, and Electronic City Phase 1 & 2. With the operational Namma Metro Yellow Line, proximity to major IT tech parks (Infosys, Wipro, TCS), and expanding civic infrastructure, the corridor combines high rental yield with strong long-term capital appreciation.',
    },
    {
      question: 'What essential legal documents do you inspect before advising on land or plot purchases?',
      answer:
        'We examine the registered Mother Deed chain (dating back at least 30 years), Encumbrance Certificate (Form 15), DC Conversion Order for non-agricultural use, BDA/BMRDA/DTCP layout approval sanctions, Village Map and survey sketch, latest tax paid receipts, and verify that there are no pending litigation or land acquisition notices.',
    },
    {
      question: 'How do you assist NRI and outstation clients who cannot visit Bengaluru in person?',
      answer:
        'We provide complete remote advisory: scheduling high-definition live video walkthroughs, coordinating with legal counsel for title verification, assisting with drafting and apostille verification of Power of Attorney (POA), and handling banking paperwork for seamless funds remittance.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-[#0E0E11] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Real Estate Clarity & Advisory FAQs.
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Essential insights into property acquisition, legal protocols, and advisory representation
            in Bengaluru.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#141418] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
