import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/boosterContent';
import { Search, BookOpen, ShieldCheck, CheckSquare, ArrowRight } from 'lucide-react';

const stepIcons = [Search, BookOpen, ShieldCheck, CheckSquare];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#063D20] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-3">
            <span>Structured Process</span>
            <span aria-hidden="true" className="text-[#24B84A]">·</span>
            <span>Intended Roadmap</span>
          </div>

          <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            HOW IT WORKS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            A transparent four-stage journey for prospective land banking investors. Review current exploratory steps and the intended operational stages planned for future platform releases.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || Search;
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-[#032111]/80 border border-[#087A32]/50 p-6 flex flex-col justify-between hover:border-[#C5A059]/70 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Operational Status */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-[#C5A059] tabular-nums">
                      {step.step}
                    </span>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        step.isCurrentPhase
                          ? 'bg-[#087A32]/40 text-[#24B84A] border-[#24B84A]/40'
                          : 'bg-white/5 text-neutral-400 border-white/10'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#087A32]/30 text-[#24B84A] flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-1">
                    {step.subtitle}
                  </div>
                  <h3 className="font-display font-black italic uppercase text-xl text-white tracking-wide mb-3">
                    STEP {step.step} — {step.name}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Notice */}
                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-neutral-400">
                  {step.isCurrentPhase ? (
                    <span className="text-[#24B84A] font-medium flex items-center gap-1">
                      <span>● Active In Phase 1</span>
                    </span>
                  ) : (
                    <span className="text-neutral-400 italic">Scheduled for Phase 2 Deployment</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Guidance Callout */}
        <div className="mt-12 p-5 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-300 max-w-2xl leading-relaxed">
            <strong className="text-white font-semibold">Important Workflow Clarification:</strong> Identity verification,
            electronic documentation signatures, and payment account rails will only be initiated once formal licensing and
            infrastructure prerequisites are complete.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-display uppercase italic text-[#032111] bg-gradient-to-r from-[#C5A059] to-[#DFBF7C] hover:brightness-110 shrink-0 shadow-sm"
          >
            <span>Inquire With Advisory Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
