/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora avisos de ESLint al subir a Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de tipos al subir a Vercel
  },
};

export default nextConfig;
