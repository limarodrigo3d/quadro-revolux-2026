"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Folha from "./Folha";
import Viewer from "./Viewer";

export default function Grid({ folhas }: { folhas: any[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {folhas.map((folha, index) => (
          <Folha 
            key={folha.id} 
            folha={folha} 
            onClick={() => setSelectedIndex(index)} // Ativa o clique aqui
          />
        ))}
      </motion.div>

      {/* O Visualizador de Luxo que tinha sumido */}
      {selectedIndex !== null && (
        <Viewer
          folhas={folhas}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => setSelectedIndex((selectedIndex - 1 + folhas.length) % folhas.length)}
          onNext={() => setSelectedIndex((selectedIndex + 1) % folhas.length)}
        />
      )}
    </>
  );
}