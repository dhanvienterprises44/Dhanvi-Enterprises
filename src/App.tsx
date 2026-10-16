/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('General Property Consultation');

  const handleOpenConsultation = (category?: string) => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('General Property Consultation');
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100 flex flex-col font-sans pb-16 md:pb-0">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Us */}
        <About />

        {/* Proposed Categories & Portfolios */}
        <Categories onOpenConsultation={handleOpenConsultation} />

        {/* Advisory Services */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* 4-Step Consultation Process */}
        <Process onOpenConsultation={() => handleOpenConsultation('4-Stage Advisory Workflow')} />

        {/* Karnataka Stamp Duty & Cost Estimator */}
        <Calculator onOpenConsultation={handleOpenConsultation} />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Us, Working Form & Google Maps */}
        <Contact prefilledCategory={activeCategory} />
      </main>

      {/* Footer with Legal & Regulatory Disclaimers */}
      <Footer />

      {/* Modal Dialog for Consultations */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={activeCategory}
      />

      {/* Quick Floating Action Triggers */}
      <FloatingActions />
    </div>
  );
}
