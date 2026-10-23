import React from 'react';
import { BoosterLogo } from './BoosterLogo';
import { BOOSTER_CONFIG } from '../data/boosterContent';
import { LegalModalType } from './LegalModal';
import { Mail, Globe, ArrowUpRight, Phone } from 'lucide-react';

interface SiteFooterProps {
  onOpenLegalModal: (type: LegalModalType) => void;
  onOpenReviewModal?: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  onOpenLegalModal,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#032111] text-white border-t border-[#087A32]/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <BoosterLogo variant="light" size="md" />
            </a>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
              Booster is a premium Nigerian real estate investment brand proudly sponsored by{' '}
              <a
                href={BOOSTER_CONFIG.sponsorWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:underline font-medium"
              >
                Beyond Borders Real Estate Limited
              </a>
              . Focused on strategic land banking corridors across Abuja, Port Harcourt, and Lagos.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Platform Navigation
            </div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#home" className="hover:text-[#C5A059] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">
                  Welcome to Booster
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#C5A059] transition-colors">
                  Land Banking Plans (A–E)
                </a>
              </li>
              <li>
                <a href="#why-booster" className="hover:text-[#C5A059] transition-colors">
                  Why Booster
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-[#C5A059] transition-colors">
                  Project Locations
                </a>
              </li>
              <li>
                <a href="#sponsor" className="hover:text-[#C5A059] transition-colors">
                  Our Sponsor
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A059] transition-colors">
                  Contact Advisory Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Governance Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Contact & Sponsor
            </div>

            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#24B84A] shrink-0" />
                <a
                  href={`mailto:${BOOSTER_CONFIG.contactEmail}`}
                  className="hover:text-white transition-colors underline decoration-[#C5A059] underline-offset-4"
                >
                  {BOOSTER_CONFIG.contactEmail}
                </a>
              </div>

              {BOOSTER_CONFIG.contactPhones.map((phone) => (
                <div key={phone.id} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#24B84A] shrink-0" />
                  <a
                    href={`tel:+${phone.e164}`}
                    className="hover:text-white transition-colors"
                  >
                    {phone.display}
                  </a>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={BOOSTER_CONFIG.sponsorWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>beyondborders.ng</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Functional Legal Modals */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {currentYear} Booster. All rights reserved. Sponsored by Beyond Borders Real Estate Limited.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
            >
              Terms and Conditions
            </button>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal('risk')}
              className="hover:text-[#C5A059] transition-colors underline-offset-4 hover:underline"
            >
              Investment Risk Disclosure
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
