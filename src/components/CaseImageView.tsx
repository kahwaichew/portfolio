import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import type { CaseImage } from '../types';

interface CaseImageViewProps {
  image: CaseImage;
  className?: string;
  eager?: boolean;
}

/** Image with a labelled placeholder, so a missing Figma export never shows as a broken image. */
export default function CaseImageView({ image, className = '', eager = false }: CaseImageViewProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400 text-xs font-medium p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6" />
        {image.alt}
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
