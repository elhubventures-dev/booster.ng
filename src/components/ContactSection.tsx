import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Globe, Shield } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

interface ContactSectionProps {
  selectedPlanCode?: string;
  onClearSelectedPlan?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlanCode,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BOOSTER_CONFIG.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const subject = selectedPlanCode
    ? `Inquiry regarding Booster Land Banking Plan ${selectedPlanCode}`
    : 'Inquiry regarding Booster Land Banking Opportunities';

  const mailtoUrl = `mailto:${BOOSTER_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#063D20] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#032111]/90 border border-[#087A32]/60 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle gold glow */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
              <span>Direct Advisory Desk</span>
              <span aria-hidden="true" className="text-[#24B84A]">·</span>
              <span>Official Channels</span>
            </div>

            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              CONNECT WITH OUR TEAM
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              For accredited land banking inquiries, term sheet requests, or consultations with our real estate advisory desk, please reach out directly via official email.
            </p>

            {/* Selected Plan Callout if clicked from a plan card */}
            {selectedPlanCode && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#087A32]/30 border border-[#24B84A]/40 text-xs font-semibold text-emerald-200">
                <span>Selected Tier:</span>
                <span className="text-[#C5A059] font-bold">Plan {selectedPlanCode}</span>
              </div>
            )}

            {/* Direct Email Showcase Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-display font-bold uppercase text-xs sm:text-sm tracking-wider text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] hover:brightness-110 active:scale-[0.98] transition-all shadow-lg"
              >
                <Mail className="w-5 h-5 text-[#032111]" />
                <span>Email {BOOSTER_CONFIG.contactEmail}</span>
                <ArrowUpRight className="w-4 h-4 text-[#032111]" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#24B84A]" />
                    <span className="text-[#24B84A]">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Sponsor Direct Link & Notice */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C5A059]" />
                <span>Sponsored by Beyond Borders Real Estate Limited</span>
              </div>

              <a
                href={BOOSTER_CONFIG.sponsorWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-neutral-300"
              >
                <Globe className="w-3.5 h-3.5 text-[#24B84A]" />
                <span>beyondborders.ng</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
