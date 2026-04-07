"use client";

import { useEffect } from "react";
import Image from "next/image";

type FolhaItem = {
  id: number;
  titulo: string;
  file: string;
};

type ViewerProps = {
  folhas: FolhaItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Viewer({
  folhas,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ViewerProps) {
  const folha = folhas[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Fechar visualização"
        onClick={onClose}
        className="absolute inset-0"
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center p-3 sm:p-6">
        <div className="relative flex h-full w-full max-w-[1500px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_120px_rgba(0,0,0,0.72)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
            <div>
              <p className="text-sm font-medium text-white sm:text-base">
                {folha.titulo}
              </p>
              <p className="mt-1 text-xs text-white/45">
                {currentIndex + 1} de {folhas.length}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                ← Anterior
              </button>

              <button
                type="button"
                onClick={onNext}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Próxima →
              </button>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Fechar
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-3 sm:p-6">
            <div className="mx-auto flex min-h-full w-full max-w-[950px] items-center justify-center">
              <div className="relative w-full overflow-hidden rounded-[22px] bg-white shadow-2xl">
                <Image
                  src={folha.file}
                  alt={folha.titulo}
                  width={1400}
                  height={1800}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onPrev}
            aria-label="Folha anterior"
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur-md transition hover:bg-black/60 md:block"
          >
            ←
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Próxima folha"
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur-md transition hover:bg-black/60 md:block"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}