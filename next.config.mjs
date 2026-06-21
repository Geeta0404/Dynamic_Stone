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

  // Once the custom domain is live, this sends anyone who still hits the
  // *.vercel.app preview URL (old links, bookmarks, cached search results)
  // to the canonical production domain instead of letting both compete.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        destination: 'https://www.dynamicstoneinc.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;