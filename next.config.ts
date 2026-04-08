/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Isso aqui avisa a Vercel que está tudo certo usar o motor novo
    turbopack: {},
  },
};

export default nextConfig;