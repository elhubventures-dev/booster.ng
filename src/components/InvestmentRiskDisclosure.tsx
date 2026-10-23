import React from 'react';
import { AlertTriangle, FileText, CheckCircle } from 'lucide-react';

export const InvestmentRiskDisclosure: React.FC = () => {
  return (
    <section id="disclosures" className="py-16 bg-[#032111] text-white border-t border-[#087A32]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#063D20]/60 border border-[#087A32]/50 p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                  Statutory & Compliance Notice
                </span>
                <span className="text-xs text-neutral-400">·</span>
                <span className="text-xs text-neutral-300">Phase 1 Preliminary Informational Release</span>
              </div>

              <h3 className="font-display font-black italic uppercase text-2xl sm:text-3xl text-white tracking-wide">
                INVESTMENT RISK DISCLOSURE & LEGAL SAFEGUARDS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <div className="space-y-3">
                  <p>
                    <strong className="text-white">Capital at Risk:</strong> All real estate investments and land banking allocations involve significant risks, including the potential loss of principal, illiquidity, and deferred realization horizons. Real property values are sensitive to macroeconomic fluctuations, urban planning decisions, interest rate changes, and local regulatory conditions in Nigeria.
                  </p>
                  <p>
                    <strong className="text-white">Promotional Figures & Terms:</strong> The advertised returns (ranging from 30% to 48% across Plans A through E) represent proposed promotional terms prepared by the sponsor for initial review and do not constitute guaranteed earnings, insurance, or statutory bank deposits.
                  </p>
                </div>

                <div className="space-y-3">
                  <p>
                    <strong className="text-white">Governance & Authority:</strong> Actual transactions, when operationalized in future phases, will be governed strictly by executed Deeds of Assignment, formal Joint Venture agreements, and verified title documentation supervised by Beyond Borders Real Estate Limited.
                  </p>
                  <p>
                    <strong className="text-white">Independent Advisory:</strong> Nothing on this website constitutes financial, taxation, or legal advice. Potential investors are strongly advised to seek independent counsel from certified legal and financial advisors before entering into binding agreements.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#24B84A]" />
                  <span>Verified Sponsor: Beyond Borders Real Estate Limited</span>
                </div>
                <div>Official Domain: https://booster.ng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
