import React from 'react';
import { ExternalLink, Building, ShieldCheck, Globe } from 'lucide-react';

export const SponsorSection: React.FC = () => {
  return (
    <section id="sponsor" className="py-20 lg:py-24 bg-gradient-to-b from-[#032111] via-[#063D20] to-[#032111] text-white relative border-y border-[#087A32]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black/30 border border-[#087A32]/50 p-8 sm:p-12 lg:p-16 backdrop-blur-xs relative overflow-hidden">
          {/* Subtle gold accent light in corner */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Sponsor Brand Presentation */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                <Globe className="w-3.5 h-3.5" />
                <span>Corporate Stewardship</span>
              </div>

              <h2 className="font-display font-extrabold uppercase text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                PROUDLY SPONSORED BY
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#C5A059]">
                  BEYOND BORDERS REAL ESTATE LIMITED
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal">
                Learn more about the company behind the Booster brand and its real estate focus.
                Beyond Borders Real Estate Limited drives strategic property development, commercial land acquisitions,
                and long-term value creation across Nigeria’s high-growth sectors.
              </p>

              {/* Sponsor Value Badges */}
              <div className="pt-4 flex flex-wrap gap-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#24B84A]" />
                  <span>Strategic Land Acquisition</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Transparent Corporate Governance</span>
                </div>
              </div>
            </div>

            {/* Right Action & External Link */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="p-6 rounded-2xl bg-[#063D20]/90 border border-[#087A32] text-center w-full max-w-sm shadow-xl">
                <div className="text-xs uppercase font-bold tracking-widest text-neutral-400 mb-2">
                  Corporate Sponsor Portal
                </div>
                <div className="font-display font-extrabold text-xl text-white tracking-tight mb-4">
                  BEYOND BORDERS
                </div>
                <a
                  href="https://beyondborders.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-display font-bold uppercase text-xs tracking-wider text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] hover:brightness-110 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                >
                  <span>Visit Sponsor Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <div className="mt-3 text-[11px] text-neutral-400">
                  Official URL: https://beyondborders.ng/
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
