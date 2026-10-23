import React, { useEffect, useId, useRef, useState } from 'react';
import { Phone, X } from 'lucide-react';
import { BOOSTER_CONFIG } from '../data/boosterContent';

const WhatsAppGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const WhatsAppFloat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open]);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="WhatsApp enquiry lines"
          className="w-[min(100vw-2rem,20.5rem)] rounded-2xl bg-[#032111] border border-[#24B84A]/40 shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="px-4 py-3 bg-[#075E54] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white shrink-0">
                <WhatsAppGlyph className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">Chat on WhatsApp</p>
                <p className="text-[11px] text-emerald-100/90 uppercase tracking-wide">
                  Both enquiry lines
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp contacts"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 space-y-2">
            <p className="px-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C5A059]">
              For more enquiries, call or message:
            </p>

            {BOOSTER_CONFIG.contactPhones.map((phone) => (
              <div
                key={phone.id}
                className="rounded-xl bg-black/35 border border-white/10 p-3 flex flex-col gap-2.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#087A32]/35 text-[#24B84A] shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-neutral-400">{phone.label}</p>
                    <p className="text-base font-bold text-white tracking-wide">{phone.display}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${phone.e164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] hover:brightness-110 px-2.5 py-2 text-[11px] font-bold uppercase tracking-wide text-[#032111] transition-all"
                  >
                    <WhatsAppGlyph className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:+${phone.e164}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 px-2.5 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Hide WhatsApp contacts' : 'Show WhatsApp contacts'}
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 hover:brightness-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-[#032111]"
      >
        {open ? <X className="w-6 h-6" /> : <WhatsAppGlyph className="w-7 h-7" />}
      </button>
    </div>
  );
};
