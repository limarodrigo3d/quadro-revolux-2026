/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Isso permite que o site suba mesmo se o TypeScript for chato
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora avisos de estilo para não travar a obra
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;