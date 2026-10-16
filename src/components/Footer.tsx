import React from 'react';
import { DhanviLogo } from './DhanviLogo';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <DhanviLogo variant="header" size="sm" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              DHANVI Enterprises is a premier real estate consultancy headquartered on Parappana
              Agrahara Main Road, Bengaluru. Providing fiduciary guidance for luxury residences,
              commercial properties, and investment land across Karnataka.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919626368833"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#059669]/20 border border-[#10B981]/30 text-[#10B981] hover:bg-[#059669]/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href="tel:+919626368833"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tabular-nums">+91 9626368833</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Advisory Services
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#D4AF37] transition-colors">
                  Property Categories
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#D4AF37] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">
                  Stamp Duty Calculator
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#D4AF37] transition-colors">
                  Client FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Key Corridors */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Bengaluru Corridors
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Parappana Agrahara</li>
              <li>Southern Winds Layout</li>
              <li>Electronic City Phase 1 & 2</li>
              <li>Hosa Road & Kudlu Gate</li>
              <li>Sarjapur Road Corridor</li>
              <li>Outer Ring Road (ORR)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Registered Office
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Plot No. 104, 1st Cross, Sai Baba Layout (Southern Winds),
                  near Food Max Hypermarket, Parappana Agrahara Main Road,
                  Bengaluru – 560100, Karnataka, India.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+919626368833" className="hover:text-[#D4AF37] tabular-nums">
                  +91 9626368833
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href="mailto:dhanvienterprises44@gmail.com"
                  className="hover:text-[#D4AF37] break-all"
                >
                  dhanvienterprises44@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & RERA Transparency */}
        <div className="pt-8 border-t border-white/10 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Fiduciary Transparency & Disclaimer:</strong> DHANVI
            Enterprises is an independent real estate consultancy firm based in Bengaluru, Karnataka.
            The property categories showcased herein represent proposed advisory scopes and
            illustrative investment segments until confirmed per individual client mandates. We do not
            market unverified properties or guarantee speculative returns. Prospective buyers and
            investors are advised to independently review all land title documents, encumbrance
            certificates, and Karnataka RERA registration details prior to signing any binding purchase
            agreements.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} DHANVI Enterprises. All rights reserved. Real Estate Consultant,
            Bengaluru, Karnataka, India.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
