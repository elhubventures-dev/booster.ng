import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Shield, Building2, TrendingUp } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#032111]"
      aria-label="Booster Hero"
    >
      {/* Background Hero Image with Controlled Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/booster_hero_concept_1792702154755.jpg"
          alt="Booster emerald green aerodynamic performance car overlooking golden-hour skyline and prime real estate developments"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center lg:object-[center_35%] transition-opacity duration-700 ${
            imgLoaded ? 'opacity-90' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Fallback & Depth Overlay Gradients for Guaranteed Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#063D20] via-[#063D20]/80 to-[#032111]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-[at_20%_40%] from-transparent via-[#032111]/60 to-[#032111]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032111]/90 via-[#032111]/70 to-transparent lg:w-3/4" />

        {/* Subtle illuminated emerald accent horizon beam */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#24B84A] to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#C5A059] uppercase mb-4">
            <span>REAL ESTATE</span>
            <span aria-hidden="true" className="text-emerald-400">·</span>
            <span>INVESTMENT</span>
            <span aria-hidden="true" className="text-emerald-400">·</span>
            <span>OPPORTUNITY</span>
          </div>

          {/* Primary Headline - Upright, Prestigious Institutional Typography */}
          <h1 className="font-display font-extrabold uppercase text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05] drop-shadow-md">
            INVEST TODAY.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#C5A059]">
              TAKE FLIGHT.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="font-display font-bold uppercase text-lg sm:text-xl lg:text-2xl tracking-wide text-[#24B84A] mt-4 mb-5">
            TOWARDS A BIGGER TOMORROW.
          </p>

          {/* Body Prose */}
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal max-w-2xl mb-8">
            Discover Booster, a real estate investment brand proudly sponsored by{' '}
            <a
              href="https://beyondborders.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline decoration-[#C5A059] decoration-2 underline-offset-4 hover:text-[#C5A059] transition-colors"
            >
              Beyond Borders Real Estate Limited
            </a>
            .
          </p>

          {/* Call-To-Action Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
            {/* Primary CTA */}
            <a
              href="#plans"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase font-display text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] hover:brightness-110 active:scale-[0.98] rounded-xl shadow-xl shadow-black/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059]"
            >
              <span>EXPLORE INVESTMENT OPPORTUNITIES</span>
              <ArrowUpRight className="w-4 h-4 text-[#032111]" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold uppercase font-display tracking-wider text-neutral-100 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 active:scale-[0.98] rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>CONTACT OUR TEAM</span>
            </a>
          </div>
        </div>

        {/* Centralized Grounding Strip (Centered on screen) */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-center justify-center">
            {/* Item 1 */}
            <div className="flex items-center justify-center gap-3 text-center sm:text-left">
              <Building2 className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Sponsor Backing</div>
                <div className="text-xs text-neutral-300 mt-0.5">Beyond Borders Real Estate Limited</div>
              </div>
            </div>

            {/* Item 2 - Centered */}
            <div className="flex items-center justify-center gap-3 text-center sm:text-left">
              <TrendingUp className="w-5 h-5 text-[#24B84A] shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Core Asset Class</div>
                <div className="text-xs text-neutral-300 mt-0.5">Strategic Nigerian Land Banking</div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-center gap-3 text-center sm:text-left">
              <Shield className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-white">Phase 1 Release</div>
                <div className="text-xs text-neutral-300 mt-0.5">Informational Discovery & Brand Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 text-[11px] font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
        aria-label="Scroll down to welcome section"
      >
        <span>DISCOVER</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
      </a>
    </section>
  );
};
