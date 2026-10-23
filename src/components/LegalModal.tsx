import React from 'react';
import { X, Shield, FileText, AlertTriangle } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

export type LegalModalType = 'privacy' | 'terms' | 'risk';

interface LegalModalProps {
  type: LegalModalType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles = {
    privacy: 'Privacy Policy (Draft)',
    terms: 'Terms of Use & Informational Notice',
    risk: 'Comprehensive Investment Risk Disclosure',
  };

  const icons = {
    privacy: Shield,
    terms: FileText,
    risk: AlertTriangle,
  };

  const IconComp = icons[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#063D20] text-white border border-[#087A32] shadow-2xl p-6 sm:p-8 my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#087A32]/40 text-[#C5A059] flex items-center justify-center">
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#24B84A] block">
                Booster Regulatory Framework
              </span>
              <h2 id="legal-modal-title" className="font-display font-black text-xl text-white italic uppercase">
                {titles[type]}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto py-6 pr-2 space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="text-amber-300/90 italic">
                Notice: This draft policy outlines the standard data governance principles intended for Booster under the sponsorship of Beyond Borders Real Estate Limited.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">1. Scope of Data Collection</h4>
              <p>
                In this Phase 1 informational release, Booster only collects personal details voluntarily submitted via our contact inquiry form (such as full name, email address, optional telephone number, and message). No cookies, tracking pixels, or third-party behavioral beacons are utilized for profiling.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">2. Use of Personal Information</h4>
              <p>
                Personal information submitted is used solely to respond to investor inquiries, provide requested land banking documentation, and communicate updates regarding Booster development milestones. We do not sell, rent, or trade your contact information to external marketing agencies.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">3. Data Security & Future KYC</h4>
              <p>
                When Phase 2 investor verification and dashboard capabilities are integrated, all statutory Know-Your-Customer (KYC) documents will be transmitted via encrypted SSL/TLS channels and stored in compliance with applicable Nigerian data protection regulations (NDPR).
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="text-amber-300/90 italic">
                Notice: These terms govern the use and navigation of the preliminary informational web portal at https://booster.ng.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">1. Informational Purpose Only</h4>
              <p>
                The Booster website is an informational and marketing preview platform sponsored by Beyond Borders Real Estate Limited. The site does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation of any security or investment product.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">2. Non-Operational Financial Release</h4>
              <p>
                No live financial transactions, bank deposits, debit card processing, or investor ledger accounts are executed on this website during Phase 1. Any participation requires formal execution of physical or verified electronic Deeds of Assignment and bilateral agreements.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">3. Intellectual Property</h4>
              <p>
                All brand marks, logos, visual assets, text, and architecture associated with Booster and Beyond Borders Real Estate Limited are the proprietary property of the sponsor and protected under Nigerian and international copyright statutes.
              </p>
            </>
          )}

          {type === 'risk' && (
            <>
              <p className="text-amber-300/90 italic">
                Statutory real estate risk notification for prospective land banking participants.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">1. Market & Liquidity Considerations</h4>
              <p>
                Land banking involves acquiring physical real property parcels for medium-to-long term appreciation. Unlike public equities or money market instruments, real estate assets are inherently illiquid and may require extended holding periods to realize optimal market valuations.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">2. Execution & Project Risks</h4>
              <p>
                Property appreciation depends on infrastructure development timelines, zoning approvals, economic vitality in target locations (Abuja, Port Harcourt, Lagos), and macroeconomic stability. Delays in road networks or municipal utilities may affect project realization dates.
              </p>
              <h4 className="font-bold text-white uppercase text-sm mt-4">3. Non-Guaranteed Returns</h4>
              <p>
                Advertised percentages (30% to 48%) are client-provided illustrative proposals based on projected historical land value dynamics and do not represent bank-guaranteed interest rates.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-neutral-400">
            Official Contact: {BOOSTER_CONFIG.contactEmail}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold font-display uppercase italic bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
