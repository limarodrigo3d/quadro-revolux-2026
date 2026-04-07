"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Grid from "@/components/Grid";
import { folhas } from "@/data/folhas";

export default function Home() {
  // Captura do movimento do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Amortece o movimento para ficar "amanteigado" (Smooth)
  const springConfig = { damping: 50, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Define quanto o fundo vai deslocar (sutil: 20px)
  const bgX = useTransform(smoothX, [0, 1920], [-15, 15]);
  const bgY = useTransform(smoothY, [0, 1080], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <main 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white"
    >
      {/* Camada Parallax de Fundo (Textura/Grão) */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.05 }}
        className="bg-texture fixed inset-0 z-0 opacity-10"
      />

      <section className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 sm:px-12">
        <header className="mb-32 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 text-[10px] uppercase tracking-[0.8em] text-white/30"
          >
            Anúncios 2026 — Exclusivo Rio Novo
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-extralight tracking-[-0.04em] sm:text-8xl md:text-9xl italic"
          >
            Quadro <span className="font-serif opacity-40">Rio Novo</span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" 
          />
        </header>

        <Grid folhas={folhas} />
      </section>
    </main>
  );
}