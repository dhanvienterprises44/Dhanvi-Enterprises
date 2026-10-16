import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DhanviLogo } from './DhanviLogo';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'General Property Consultation',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (defaultCategory) setCategory(defaultCategory);
  }, [defaultCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required.';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hello DHANVI Enterprises,
I would like to book a real estate consultation in Bengaluru.
Name: ${name || 'Prospective Buyer'}
Phone: ${phone || 'N/A'}
Email: ${email || 'N/A'}
Category: ${category}
Requirement: ${message || 'Advisory session request'}`;
    return `https://wa.me/919626368833?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#121215] border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <DhanviLogo variant="header" size="sm" />
          <h3 id="modal-title" className="text-xl font-serif-luxury font-bold text-white mt-4">
            Schedule a Private Consultation
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            DHANVI Enterprises · Real Estate Consultant, Parappana Agrahara, Bengaluru
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] mx-auto flex items-center justify-center text-[#10B981]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Advisory Request Received</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. We will review your inquiry for{' '}
              <span className="text-[#D4AF37]">{category}</span> and connect with you at{' '}
              <strong className="text-white">{phone}</strong>.
            </p>
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Immediately on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Your Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Anand Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181D] border text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                  errors.name ? 'border-red-500' : 'border-white/10'
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Contact Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. +91 9626368833"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#18181D] border text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37] ${
                  errors.phone ? 'border-red-500' : 'border-white/10'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. anand@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181D] border border-white/10 text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              >
              </input>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Advisory Topic / Scope
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181D] border border-white/10 text-sm text-[#D4AF37] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Brief Requirement / Questions
              </label>
              <textarea
                rows={3}
                placeholder="Provide any specific location, budget, or legal verification queries..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#18181D] border border-white/10 text-sm text-white placeholder-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-black bg-gold-gradient rounded-lg shadow hover:shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Consultation Request</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-500">or connect instantly:</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919626368833"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-black/60 border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Directly</span>
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-xs font-semibold text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
