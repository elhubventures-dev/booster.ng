import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BoosterLogo } from './BoosterLogo';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Investment Plans', href: '#plans' },
    { label: 'Project Locations', href: '#locations' },
    { label: 'Our Sponsor', href: '#sponsor' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#063D20]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#087A32]/30 py-3.5'
            : 'bg-gradient-to-b from-[#032111]/90 via-[#032111]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg py-1"
              aria-label="Booster Homepage"
            >
              <BoosterLogo variant="light" size="md" />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-neutral-200"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap hover:text-[#C5A059] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold tracking-wide uppercase font-display italic text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] hover:brightness-110 active:scale-[0.98] transition-all duration-150 rounded-lg shadow-md shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059]"
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-200 hover:text-white hover:bg-white/10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#063D20] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#087A32]/40 bg-[#032111]">
            <BoosterLogo variant="light" size="sm" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
            <div className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-neutral-100 hover:text-[#C5A059] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6">
              <a
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold uppercase font-display italic text-[#032111] bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] rounded-lg shadow-lg"
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Footer Area */}
          <div className="px-6 py-4 bg-[#032111] border-t border-[#087A32]/40 text-xs text-neutral-400 text-center">
            Sponsored by{' '}
            <a
              href="https://beyondborders.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Beyond Borders Real Estate Limited
            </a>
          </div>
        </div>
      )}
    </>
  );
};
