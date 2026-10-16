import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Actions (Bottom-Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919626368833?text=Hello%20DHANVI%20Enterprises%2C%20I%20am%20inquiring%20about%20real%20estate%20consultancy%20in%20Bengaluru."
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-[#10B981]/30"
          aria-label="Chat with DHANVI Enterprises on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-semibold pr-1">WhatsApp Advisory</span>
        </a>

        {/* Call Now Floating Button */}
        <a
          href="tel:+919626368833"
          className="pointer-events-auto group inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#0A0A0A] hover:bg-[#141418] text-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-[#D4AF37]/50"
          aria-label="Call DHANVI Enterprises at +91 9626368833"
        >
          <Phone className="w-4 h-4 fill-[#D4AF37]" />
          <span className="text-xs font-semibold tabular-nums">+91 9626368833</span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Strictly < 15% of viewport height: 52px height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#D4AF37]/25 px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919626368833"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gold-gradient text-black font-bold text-xs shadow cursor-pointer whitespace-nowrap shrink-0"
        >
          <Phone className="w-3.5 h-3.5 fill-black text-black" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919626368833?text=Hello%20DHANVI%20Enterprises%2C%20I%20am%20inquiring%20about%20real%20estate%20consultancy%20in%20Bengaluru."
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs shadow cursor-pointer whitespace-nowrap shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
