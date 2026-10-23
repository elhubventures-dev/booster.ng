import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Globe, Shield, Phone } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

interface ContactSectionProps {
  selectedPlanCode?: string;
  onClearSelectedPlan?: () => void;
}

const WhatsAppGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              For accredited land banking inquiries, term sheet requests, or consultations with our real
              estate advisory desk, reach us by phone, WhatsApp, or official email.
            </p>

            {selectedPlanCode && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#087A32]/30 border border-[#24B84A]/40 text-xs font-semibold text-emerald-200">
                <span>Selected Tier:</span>
                <span className="text-[#C5A059] font-bold">Plan {selectedPlanCode}</span>
              </div>
            )}

            <div className="pt-2 rounded-2xl bg-[#063D20]/80 border border-[#24B84A]/25 px-5 py-5 sm:px-8 sm:py-6 text-left">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#063D20] shrink-0 shadow-md">
                  <Phone className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <div className="min-w-0 space-y-2">
                  <p className="text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase italic text-white/90">
                    For more enquiries, call:
                  </p>
                  <ul className="space-y-1.5">
                    {BOOSTER_CONFIG.contactPhones.map((phone) => (
                      <li key={phone.id}>
                        <a
                          href={`tel:+${phone.e164}`}
                          className="text-xl sm:text-2xl font-bold tracking-wide text-white hover:text-[#C5A059] transition-colors"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BOOSTER_CONFIG.contactPhones.map((phone) => (
                  <a
                    key={`wa-${phone.id}`}
                    href={`https://wa.me/${phone.e164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:brightness-110 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#032111] transition-all"
                  >
                    <WhatsAppGlyph className="w-4 h-4" />
                    <span>WhatsApp {phone.display}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
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
