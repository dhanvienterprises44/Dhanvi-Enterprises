import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { DhanviLogo } from './DhanviLogo';

interface ContactProps {
  prefilledCategory?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledCategory = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: prefilledCategory || 'Residential Luxury Property',
    budget: '₹75 Lakhs - ₹1.5 Crore',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number (e.g., +91 9626368833).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello DHANVI Enterprises,
I would like to consult regarding real estate advisory in Bengaluru.
Name: ${formData.name || 'Interested Client'}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Property Category: ${formData.category}
Budget: ${formData.budget}
Requirement: ${formData.message || 'General Advisory Session'}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Connect With DHANVI Enterprises
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight mb-4 text-balance">
            Begin Your Strategic Property Consultation.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Reach out directly to schedule a private advisory meeting at our Parappana Agrahara office,
            request a corridor investment dossier, or consult via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Credentials & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121215] border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-5">
                <DhanviLogo variant="header" size="sm" />
              </div>

              {/* Verified Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Office Address
                  </div>
                  <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                    Plot No. 104, 1st Cross, Sai Baba Layout (Southern Winds),
                    near Food Max Hypermarket, Parappana Agrahara Main Road,
                    Bengaluru – 560100, Karnataka, India.
                  </p>
                </div>
              </div>

              {/* Clickable Phone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:+919626368833"
                    className="text-base font-bold text-gold-gradient hover:underline inline-block mt-0.5 tabular-nums"
                  >
                    +91 9626368833
                  </a>
                  <p className="text-[11px] text-slate-400">Available Mon – Sat, 9:30 AM to 7:30 PM IST</p>
                </div>
              </div>

              {/* Clickable Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-black/60 border border-[#D4AF37]/30 text-[#10B981] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Official Email
                  </div>
                  <a
                    href="mailto:dhanvienterprises44@gmail.com"
                    className="text-sm font-medium text-slate-200 hover:text-[#D4AF37] transition-colors inline-block mt-0.5 break-all"
                  >
                    dhanvienterprises44@gmail.com
                  </a>
                  <p className="text-[11px] text-slate-400">Written inquiries responded within 12 hours</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
                <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-slate-400 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Consultation Hours
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Monday – Saturday: 9:30 AM – 7:30 PM
                  </p>
                  <p className="text-xs text-slate-400">Sunday: 10:00 AM – 5:00 PM (Prior Appointment)</p>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919626368833?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] border border-[#10B981]/30 rounded-lg shadow transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="rounded-2xl bg-[#121215] border border-white/10 overflow-hidden">
              <div className="p-4 bg-[#141418] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Parappana Agrahara Location Map</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Food+Max+Hypermarket+Parappana+Agrahara+Main+Road+Bengaluru+560100"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-900">
                <iframe
                  title="DHANVI Enterprises Bengaluru Location Map"
                  src="https://maps.google.com/maps?q=Food+Max+Hypermarket+Parappana+Agrahara+Main+Road+Bengaluru+560100&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[88%]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/10">
              <h3 className="text-xl font-serif-luxury font-bold text-white mb-2">
                Consultation Request Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Submit your specific property requirements or question. We provide tailored market
                intelligence and verified options without obligation.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-black/80 border border-[#10B981]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] mx-auto flex items-center justify-center text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Consultation Request Received</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our principal
                    consultant at DHANVI Enterprises will review your requirements for{' '}
                    <span className="text-[#D4AF37]">{formData.category}</span> and contact you at{' '}
                    <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919626368833?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] rounded-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Directly to WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer py-2"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg bg-[#18181D] border text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contact Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 9626368833"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-[#18181D] border text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-[#18181D] border text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Property Category & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Property Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#18181D] border border-white/10 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                      >
                        <option value="Residential Luxury Apartments & Villas">
                          Residential Apartments & Villas
                        </option>
                        <option value="Commercial Workspace & Retail">
                          Commercial Workspaces & Retail
                        </option>
                        <option value="Investment Plots & Plotted Layouts">
                          Investment Plots & Land Parcels
                        </option>
                        <option value="Property Title & Legal Due Diligence">
                          Property Due Diligence / Valuation
                        </option>
                        <option value="General Property Consultation">
                          General Real Estate Advisory
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Estimated Budget Envelope
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#18181D] border border-white/10 text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                      >
                        <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                        <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore - ₹2.5 Crore">₹1 Crore – ₹2.5 Crore</option>
                        <option value="₹2.5 Crore - ₹5 Crore">₹2.5 Crore – ₹5 Crore</option>
                        <option value="Above ₹5 Crore (Ultra-Luxury / Commercial)">
                          Above ₹5 Crore (Ultra-Luxury / Commercial)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Specific Requirements or Target Corridors
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. Looking for a 3 BHK near Parappana Agrahara / Electronic City with ready-to-move status and A-Khata certification..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#18181D] border border-white/10 text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
                    />
                  </div>

                  {/* Anti-Slop Fiduciary Guarantee */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>
                      Your contact information remains strictly confidential. Zero spam policy.
                    </span>
                  </div>

                  {/* Form Submission */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-black bg-gold-gradient rounded-lg shadow hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
