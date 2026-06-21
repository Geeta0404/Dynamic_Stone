/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dynamicstoneinc.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  // NOTE: do NOT re-add a *.vercel.app -> dynamicstoneinc.com redirect here
  // until the custom domain is actually attached to this Vercel project.
  // dynamicstoneinc.com currently points elsewhere (the client's existing
  // site), so redirecting to it breaks the only working preview URL.
};

export default nextConfig;