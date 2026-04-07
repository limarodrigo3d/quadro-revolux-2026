"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function Folha({ folha, onClick }: { folha: any; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 150 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 150 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick} // O CLIQUE AGORA ESTÁ ATIVO AQUI
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d",
        perspective: "1000px" 
      }}
      className="group relative h-[450px] w-full cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-full w-full overflow-hidden rounded-sm bg-[#0a0a0a] ring-1 ring-white/5 transition-all duration-500 group-hover:ring-white/20"
      >
        <Image
          src={folha.file}
          alt={folha.titulo}
          fill
          className="object-cover opacity-70 grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="mt-6 text-center">
        <h3 className="text-[10px] font-light uppercase tracking-[0.5em] text-white/40 transition-colors duration-500 group-hover:text-[#c5a059]">
          {folha.titulo}
        </h3>
      </div>
    </motion.div>
  );
}