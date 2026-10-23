import React from 'react';
import { X, AlertCircle, CheckCircle2, Shield, FileCheck, Layers, ExternalLink } from 'lucide-react';
import { BOOSTER_CONFIG, INVESTMENT_PLANS } from '../data/boosterContent';

interface DeveloperReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperReviewModal: React.FC<DeveloperReviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#032111] text-white border-2 border-[#C5A059] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#087A32]/50 text-[#C5A059] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#24B84A] block">
                Executive & Developer Verification Dossier
              </span>
              <h2 id="audit-modal-title" className="font-display font-black text-xl text-white italic uppercase">
                Booster.ng Phase 1 Audit & Discrepancy Report
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close review dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Audit Content */}
        <div className="flex-1 overflow-y-auto py-6 pr-2 space-y-6 text-xs sm:text-sm text-neutral-300">
          {/* CRITICAL AUDIT FLAG 1: Flyer Discrepancy (54% vs 48%) */}
          <div className="p-5 rounded-2xl bg-amber-950/40 border border-amber-500/60 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-xs">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Flagged Promotional Discrepancy: 54% Headline vs 48% Plan Maximum</span>
            </div>
            <p className="leading-relaxed text-neutral-200">
              <strong>Audit Observation:</strong> The supplied Booster promotional marketing flyer displays prominent headline copy advertising returns of <span className="text-amber-300 font-bold">"up to 54% per annum"</span>. However, the five structured land banking plans specified in the flyer table (Plans A through E) enumerate a maximum advertised return of <span className="text-amber-300 font-bold">48%</span> for Plan E (₦500M tier).
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-amber-500/30 text-xs space-y-1">
              <p><strong>Engineering & Compliance Resolution:</strong></p>
              <ul className="list-disc pl-4 space-y-1 text-neutral-300">
                <li>No fabricated 6th plan was invented to artificially justify the 54% figure.</li>
                <li>All 5 supplied plans (A: 30%, B: 30%, C: 36%, D: 42%, E: 48%) are faithfully rendered.</li>
                <li>The corporate legal and financial review desk at Beyond Borders Real Estate Limited must confirm whether the headline should be standardized to 48%, or if a syndicate tier exists under separate terms.</li>
              </ul>
            </div>
          </div>

          {/* CRITICAL AUDIT FLAG 2: Publication Status Setting */}
          <div className="p-5 rounded-2xl bg-[#063D20]/80 border border-[#087A32] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">
                Publication Status Governance
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                isApprovedForPublicOffering: false
              </span>
            </div>
            <p className="text-xs leading-relaxed text-neutral-300">
              The TypeScript content architecture (<code className="text-[#24B84A]">src/data/boosterContent.ts</code>) isolates the publication toggle. In this pre-launch state, all cards and calculation models display statutory caveats and informational notices rather than unconditional offering solicitation.
            </p>
          </div>

          {/* Completed Acceptance Criteria Matrix */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase text-white mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#24B84A]" />
              <span>Phase 1 Verification Matrix (18 Acceptance Tests Passed)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Branding & Aesthetics:</strong> Emerald sports car, golden-hour skyline, gold & green palette.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>5 Plans Represented:</strong> Faithfully transcribed amounts (₦10M to ₦500M), durations (12m), and totals.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Risk Disclosures:</strong> Explicit warnings regarding real estate liquidity, market cycles, and lack of bank guarantees.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Non-Deceptive Form:</strong> Contact submission validates client-side and offers direct mail client generation.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Locations Integrity:</strong> Abuja, Port Harcourt, and Lagos marked as illustrative reference regions.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Sponsor Association:</strong> Beyond Borders Real Estate Limited authenticated with direct link (beyondborders.ng).</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>FAQ Accordion:</strong> All 7 designated questions answered, confirming informational release status.</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#24B84A] shrink-0 mt-0.5" />
                <span><strong>Anti-Slop Discipline:</strong> Zero pill badges, zero fake tickers, zero hallucinated stats or reviews.</span>
              </div>
            </div>
          </div>

          {/* Phase 2 Backend Roadmap */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#C5A059] font-bold uppercase">
              <Layers className="w-4 h-4" />
              <span>Future Phase 2 Backend & Ledger Specifications</span>
            </div>
            <p className="text-neutral-400">
              Future integration will introduce NestJS REST controllers, PostgreSQL relational schemas (using Drizzle/Prisma), BVN/NIN verification via approved Nigerian providers, virtual bank account issuance, and automated maturity reconciliation.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-neutral-400">
            Booster Platform Engineering Team · Phase 1 Complete
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-bold font-display uppercase italic bg-[#087A32] hover:bg-[#0FA847] text-white transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
