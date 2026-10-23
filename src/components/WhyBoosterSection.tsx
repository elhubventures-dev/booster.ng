import React from 'react';
import { WHY_BOOSTER_POINTS } from '../data/boosterContent';
import { Landmark, FileText, FolderCheck, Headphones } from 'lucide-react';

const icons = [Landmark, FileText, FolderCheck, Headphones];

export const WhyBoosterSection: React.FC = () => {
  return (
    <section id="why-booster" className="py-20 lg:py-28 bg-[#F9F8F6] text-[#17251C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#087A32] uppercase mb-3">
            <span>Core Principles</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Strategic Value</span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#063D20] tracking-tight leading-tight">
            WHY BOOSTER
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Designed to bridge private capital with strategic Nigerian land banking, Booster operates on four foundational pillars of transparency and disciplined execution.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_BOOSTER_POINTS.map((item, idx) => {
            const IconComponent = icons[idx] || Landmark;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#087A32] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-2xl text-[#C5A059] tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#063D20]/5 group-hover:bg-[#063D20] text-[#087A32] group-hover:text-[#C5A059] flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Accent */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#087A32] mb-1">
                    {item.accent}
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg text-[#063D20] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Quiet Bottom Accent Hairline */}
                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 group-hover:text-[#087A32] transition-colors">
                  <span className="font-medium">Booster Standard</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
