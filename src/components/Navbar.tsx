import React, { useState, useEffect } from 'react';
import { DhanviLogo } from './DhanviLogo';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-lg'
          : 'bg-[#0A0A0A]/70 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary CTA) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem Lockup */}
          <a
            href="#"
            className="flex items-center shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] rounded"
            aria-label="DHANVI Enterprises Home"
          >
            <DhanviLogo variant="header" size="sm" />
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Services
            </a>
            <a
              href="#categories"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Categories
            </a>
            <a
              href="#process"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Process
            </a>
            <a
              href="#contact"
              className="hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919626368833"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 border border-white/10 hover:border-[#D4AF37]/40 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call DHANVI Enterprises"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tabular-nums">+91 9626368833</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wide text-black bg-gold-gradient rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-[#D4AF37] rounded-lg border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F12] border-b border-[#D4AF37]/20 px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              About DHANVI Enterprises
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              Advisory Services
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              Property Categories (Proposed)
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              Consultation Process
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              Stamp Duty Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-[#D4AF37] transition-colors py-1"
            >
              Contact & Location
            </a>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:+919626368833"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-slate-900 border border-[#D4AF37]/40 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call +91 9626368833</span>
              </a>
              <a
                href="https://wa.me/919626368833?text=Hello%20DHANVI%20Enterprises%2C%20I%20am%20inquiring%20about%20real%20estate%20consultancy%20in%20Bengaluru."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-sm font-bold text-black bg-gold-gradient rounded-lg shadow cursor-pointer mt-1"
              >
                Book Advisory Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
