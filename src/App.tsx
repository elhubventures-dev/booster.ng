import React, { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { BrandIntroduction } from './components/BrandIntroduction';
import { InvestmentPlansSection } from './components/InvestmentPlansSection';
import { WhyBoosterSection } from './components/WhyBoosterSection';
import { ProjectLocationsSection } from './components/ProjectLocationsSection';
import { SponsorSection } from './components/SponsorSection';
import { ContactSection } from './components/ContactSection';
import { InvestmentRiskDisclosure } from './components/InvestmentRiskDisclosure';
import { SiteFooter } from './components/SiteFooter';
import { LegalModal, LegalModalType } from './components/LegalModal';

// Preserved components for upcoming Phase 2 (audit dossier, forms, login, workflows)
// import { DeveloperReviewModal } from './components/DeveloperReviewModal';
// import { ContactFormFuture } from './components/ContactFormFuture';
// import { HowItWorksSection } from './components/HowItWorksSection';
// import { FAQSection } from './components/FAQSection';
// import { LoginPlaceholderModal } from './components/LoginPlaceholderModal';

export default function App() {
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<LegalModalType | null>(null);

  const handlePlanSelected = (planCode: string) => {
    setSelectedPlanForInquiry(planCode);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#17251C] flex flex-col font-sans selection:bg-[#087A32] selection:text-white">
      {/* Fixed Sticky Header (Clean Navigation, No Login / Form Triggers) */}
      <SiteHeader />

      {/* Streamlined High-Impact Landing Page */}
      <main className="flex-1">
        {/* 1. Hero Section (Visual Centerpiece: Emerald Sports Car & Golden-Hour Skyline) */}
        <HeroSection />

        {/* 2. Welcome to Booster & Beyond Borders Sponsorship */}
        <BrandIntroduction />

        {/* 3. The 5 Booster Land Banking Plans (Plans A - E) */}
        <InvestmentPlansSection onPlanSelectedForInquiry={handlePlanSelected} />

        {/* 4. Why Booster (4 Foundation Pillars) */}
        <WhyBoosterSection />

        {/* 5. Project Locations (Abuja, Port Harcourt, Lagos) */}
        <ProjectLocationsSection />

        {/* 6. Corporate Sponsor (Beyond Borders Real Estate Limited) */}
        <SponsorSection />

        {/* 7. Direct Advisory Contact (Official Email Channel - Zero Input Forms) */}
        <ContactSection
          selectedPlanCode={selectedPlanForInquiry}
          onClearSelectedPlan={() => setSelectedPlanForInquiry(undefined)}
        />

        {/* 8. Statutory Investment Risk Disclosure */}
        <InvestmentRiskDisclosure />
      </main>

      {/* 9. Comprehensive Site Footer */}
      <SiteFooter
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Draft Legal Governance Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
