import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Mantido o "alvará" para o site subir mesmo com avisos de tipos
    ignoreBuildErrors: true,
  },
  /* A chave 'eslint' foi removida daqui pois nas versões recentes 
     do Next.js ela não é mais reconhecida neste arquivo.
  */
};

export default nextConfig;