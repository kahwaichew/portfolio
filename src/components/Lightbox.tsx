import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut, RotateCcw, X, ChevronLeft, ChevronRight, Move } from 'lucide-react';
import type { CaseImage } from '../types';

interface LightboxProps {
  images: CaseImage[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
  title?: string;
}

export default function Lightbox({ images, index, onIndexChange, title }: LightboxProps) {
  const [zoomScale, setZoomScale] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null && images[index] !== undefined;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      setZoomScale(1);
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  // Keyboard navigation, focus on open, and no background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onIndexChange(null);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen, go, onIndexChange]);

  const current = isOpen ? images[index] : null;
  const hasMany = images.length > 1;

  return (
    <AnimatePresence>
      {current && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Top Toolbar */}
          <div className="flex items-center justify-between gap-4 w-full max-w-7xl mx-auto bg-slate-900/60 p-3 sm:px-6 sm:py-4 rounded-2xl border border-white/5">
            <div className="text-left min-w-0">
              <span className="block text-[10px] sm:text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                {title ?? 'Preview'} {hasMany && `· ${index + 1} / ${images.length}`}
              </span>
              <span className="block text-sm sm:text-base text-white font-extrabold truncate">
                {current.caption ?? current.alt}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 bg-slate-950/50 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setZoomScale((s) => Math.max(s - 0.5, 1))}
                disabled={zoomScale <= 1}
                className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="px-2 font-mono text-[10px] sm:text-xs font-semibold text-slate-300 select-none min-w-[50px] text-center">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                onClick={() => setZoomScale((s) => Math.min(s + 0.5, 4))}
                disabled={zoomScale >= 4}
                className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setZoomScale(1)}
                disabled={zoomScale === 1}
                className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <button
              ref={closeRef}
              onClick={() => onIndexChange(null)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all active:scale-95"
              aria-label="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Zoom and drag stage */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full my-4 select-none">
            {hasMany && (
              <button
                onClick={() => go(-1)}
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 text-slate-300 hover:bg-slate-900/90 hover:text-white border border-white/10 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoomScale }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              drag={zoomScale > 1}
              dragConstraints={{
                left: -250 * (zoomScale - 1),
                right: 250 * (zoomScale - 1),
                top: -150 * (zoomScale - 1),
                bottom: 150 * (zoomScale - 1),
              }}
              dragElastic={0.08}
              className={`max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl ${
                zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
            />

            {hasMany && (
              <button
                onClick={() => go(1)}
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 text-slate-300 hover:bg-slate-900/90 hover:text-white border border-white/10 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {zoomScale > 1 && (
              <div className="absolute top-2 px-3 py-1 bg-indigo-500/80 text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 pointer-events-none">
                <Move className="w-3 h-3" />
                <span>Drag to pan</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
