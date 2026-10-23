import React from 'react';
import { PROJECT_LOCATIONS } from '../data/boosterContent';
import { MapPin, Info, ArrowUpRight } from 'lucide-react';

export const ProjectLocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-[#F9F8F6] text-[#17251C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#087A32] uppercase mb-3">
            <span>Strategic Hubs</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Nigerian Real Estate</span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#063D20] tracking-tight leading-tight">
            PROJECT LOCATIONS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            The Booster land banking initiative identifies three high-conviction growth territories across Nigeria.
            Review preliminary regional focus areas currently under site evaluation by Beyond Borders Real Estate Limited.
          </p>
        </div>

        {/* 3-Column Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECT_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="group rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Illustrative Image */}
                <div className="relative h-60 overflow-hidden bg-neutral-200">
                  <img
                    src={loc.image}
                    alt={loc.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Regional Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#063D20]/90 backdrop-blur-xs text-[#C5A059] text-[11px] font-bold uppercase tracking-wider rounded-md border border-[#087A32]/40">
                    {loc.regionTag}
                  </div>

                  {/* Illustrative Notice Over Image */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[10px] text-neutral-200 rounded">
                    Illustrative Cityscape
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#087A32] mb-1">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>{loc.state}</span>
                  </div>

                  <h3 className="font-display font-bold uppercase text-2xl text-[#063D20] tracking-tight mb-3">
                    {loc.city}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {loc.description}
                  </p>

                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-100 text-xs">
                    <span className="font-semibold text-[#063D20] block mb-0.5">Focus Sector:</span>
                    <span className="text-neutral-600">{loc.focusArea}</span>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="italic">{loc.status}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-semibold text-[#087A32] hover:text-[#063D20]"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Due Diligence Notice */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-neutral-200/80 flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-600 leading-relaxed">
            <strong className="text-neutral-900 font-semibold">Territory Notice:</strong> Locations cited reflect marketing
            materials provided for initial brand presentation. Specific parcel titles, coordinates, surveys, and site layouts
            will be formally presented in verified term sheets upon final inventory confirmation and statutory registration.
          </p>
        </div>
      </div>
    </section>
  );
};
