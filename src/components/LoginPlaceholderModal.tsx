import React from 'react';
import { X, Lock, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

interface LoginPlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const LoginPlaceholderModal: React.FC<LoginPlaceholderModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-[#063D20] text-white border border-[#087A32] shadow-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#087A32]/40 text-[#C5A059] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#24B84A] block">
                Investor Access
              </span>
              <h2 id="login-modal-title" className="font-display font-black text-lg text-white italic uppercase">
                Investor Portal Preview
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#087A32]/20 border border-[#24B84A]/30 text-[#C5A059] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-black italic uppercase text-xl text-white">
              Phase 1 Informational Release
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Secure investor authentication, electronic KYC verification, document vaults, and live portfolio tracking
              will launch in <strong>Phase 2</strong> in coordination with our backend banking infrastructure.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-left text-xs text-neutral-300 space-y-1.5">
            <div className="font-semibold text-white flex items-center gap-1.5">
              <span>Upcoming Phase 2 Capabilities:</span>
            </div>
            <ul className="space-y-1 text-neutral-400 pl-4 list-disc">
              <li>Biometric & Government ID Verification</li>
              <li>Encrypted Digital Deed Repository</li>
              <li>Maturity Timelines & Bank Reconciliation</li>
            </ul>
          </div>
        </div>

        <div className="pt-2 space-y-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="w-full py-3.5 px-4 rounded-xl font-display font-bold uppercase italic text-xs tracking-wider text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <span>Contact Advisory Desk Instead</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            Return to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
};
