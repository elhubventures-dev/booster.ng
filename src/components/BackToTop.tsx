import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const SHOW_AFTER_PX = 480;

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#063D20] text-white border border-[#C5A059]/50 shadow-xl shadow-black/30 hover:bg-[#087A32] hover:border-[#C5A059] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-[#F9F8F6] ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-6 h-6 text-[#C5A059]" strokeWidth={2.5} />
      </button>
    </div>
  );
};
