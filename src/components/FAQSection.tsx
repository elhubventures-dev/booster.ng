import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/boosterContent';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F9F8F6] text-[#17251C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#087A32] uppercase mb-3">
            <span>Essential Answers</span>
            <span aria-hidden="true" className="text-[#C5A059]">·</span>
            <span>Clarity & Governance</span>
          </div>

          <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-[#063D20] tracking-tight leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="mt-4 text-base text-neutral-600 leading-relaxed font-normal">
            Understand the Booster land banking initiative, preliminary investment terms, and operational milestones.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-white border border-neutral-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A32]"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#063D20] flex items-center gap-3">
                      <span className="text-xs text-[#C5A059] font-mono tabular-nums">0{index + 1}.</span>
                      <span>{item.question}</span>
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#087A32] text-white' : 'text-neutral-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Advisory Help Line */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#063D20]/5 border border-[#087A32]/20">
          <p className="text-sm text-neutral-700">
            Have a specific institutional or legal inquiry not covered here?
          </p>
          <div className="mt-2">
            <a
              href="#contact"
              className="text-sm font-bold text-[#087A32] hover:text-[#063D20] underline decoration-[#C5A059] decoration-2 underline-offset-4"
            >
              Reach out directly to the Booster Investment Desk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
