import React from 'react';
import { INVESTMENT_PLANS, BOOSTER_CONFIG } from '../data/boosterContent';
import { InvestmentPlanCard } from './InvestmentPlanCard';
import { ShieldCheck } from 'lucide-react';

interface InvestmentPlansSectionProps {
  onPlanSelectedForInquiry: (planCode: string) => void;
}

export const InvestmentPlansSection: React.FC<InvestmentPlansSectionProps> = ({
  onPlanSelectedForInquiry,
}) => {
  const handleSelectPlan = (code: string) => {
    onPlanSelectedForInquiry(code);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="py-20 lg:py-24 bg-[#032111] text-white relative">
      {/* Subtle backdrop grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#24B84A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-3">
            <span>Structured Land Banking</span>
            <span aria-hidden="true" className="text-[#24B84A]">·</span>
            <span>12-Month Tenures</span>
          </div>

          <h2 className="font-display font-bold uppercase text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            BOOSTER LAND BANKING PLANS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Explore the five land banking tiers currently being prepared for presentation by Booster.
            Review the applicable investment amounts, advertised yields, and maturity terms.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#C5A059] bg-[#063D20] px-3.5 py-1.5 rounded-full border border-[#087A32]/50">
            <ShieldCheck className="w-3.5 h-3.5 text-[#24B84A]" />
            <span>Preliminary Presentation Figures · Sponsored by Beyond Borders Real Estate Limited</span>
          </div>
        </div>

        {/* 5 Plan Cards Grid: Desktop version displays 3 cards above and 2 cards below */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 items-stretch">
          {INVESTMENT_PLANS.map((plan, index) => {
            // Desktop (lg:):
            // Row 1 (above): Plan A (col 1-2), Plan B (col 3-4), Plan C (col 5-6)
            // Row 2 (below): Plan D (col 2-3, centered), Plan E (col 4-5, centered)
            // Col 1 and Col 6 on Row 2 remain empty on desktop for a balanced, centered layout.
            const isPlanD = index === 3;
            const isPlanE = index === 4;

            return (
              <div
                key={plan.id}
                className={`w-full flex flex-col ${
                  isPlanD
                    ? 'md:col-span-1 lg:col-span-2 plan-card-d-desktop'
                    : isPlanE
                    ? 'md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:w-full lg:col-span-2 plan-card-e-desktop'
                    : 'md:col-span-1 lg:col-span-2'
                }`}
              >
                <InvestmentPlanCard
                  plan={plan}
                  onSelectPlan={handleSelectPlan}
                  isApprovedForPublicOffering={BOOSTER_CONFIG.isApprovedForPublicOffering}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
