import React from 'react';
import { ArrowRight, Compass, ShieldAlert, Award } from 'lucide-react';
import landbankingIntroImage from '../assets/images/booster_landbanking_intro_1792702155380.jpg';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F9F8F6] text-[#17251C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: High-Res Master Planned Community Rendering */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/10 border border-neutral-200/80 bg-neutral-100">
              <img
                src={landbankingIntroImage}
                alt="Master-planned luxury real estate community with sustainable architecture and lush green parcels"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Discreet Editorial Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#063D20]/90 via-[#063D20]/60 to-transparent text-white">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-[#C5A059] font-bold uppercase tracking-wider">
                    Strategic Land Banking
                  </span>
                  <span className="text-neutral-300">Sustainable Infrastructure Growth</span>
                </div>
              </div>
            </div>

            {/* Verification & Transparency Callout */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-neutral-200/90 flex items-start gap-3 shadow-xs">
              <ShieldAlert className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <p className="text-xs text-neutral-600 leading-relaxed">
                <strong className="text-neutral-900 font-semibold">Regulatory Transparency Notice:</strong>{' '}
                Booster is an investment initiative sponsored by Beyond Borders Real Estate Limited. Applicable
                contractual documentation and statutory disclosures govern each land banking offering.
              </p>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#087A32] uppercase">
              <span>Brand Introduction</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C5A059]">Nigerian Real Estate</span>
            </div>

            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-[#063D20] tracking-tight leading-tight">
              WELCOME TO BOOSTER
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-[#087A32] font-display">
              A Forward-Looking Approach to Real Estate Investment.
            </p>

            <div className="space-y-4 text-base text-neutral-700 leading-relaxed">
              <p>
                Booster is a real estate investment brand proudly sponsored by{' '}
                <a
                  href="https://beyondborders.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#063D20] underline decoration-[#087A32] decoration-2 underline-offset-4 hover:text-[#087A32] transition-colors"
                >
                  Beyond Borders Real Estate Limited
                </a>
                . Our platform is being developed to provide a structured digital experience for discovering investment
                opportunities, understanding applicable terms, and accessing relevant information about the business.
              </p>
              <p className="text-neutral-600">
                In rapidly expanding emerging markets, disciplined land banking provides a grounded alternative to volatile
                liquid assets. By acquiring strategically positioned parcels ahead of demographic shifts and infrastructure
                arteries, Booster structures institutional-grade investment horizons designed to build sustainable wealth.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-neutral-200/80">
                <div className="flex items-center gap-2 text-[#087A32] font-semibold text-sm mb-1">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <span>Strategic Corridors</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Carefully vetted land locations in Abuja, Lagos, and Port Harcourt.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200/80">
                <div className="flex items-center gap-2 text-[#087A32] font-semibold text-sm mb-1">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                  <span>Sponsor Governance</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Supervised under the real estate stewardship of Beyond Borders Real Estate Limited.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase font-display text-white bg-[#063D20] hover:bg-[#087A32] rounded-xl shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A32]"
              >
                <span>EXPLORE LAND BANKING PLANS</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </a>

              <a
                href="https://beyondborders.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-[#063D20] hover:text-[#087A32] transition-colors"
              >
                <span>Visit Sponsor Portal</span>
                <span className="text-xs text-neutral-400">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
