import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dccfk1x2g/image/upload/**',
      },
    ],
    domains: ['lh3.googleusercontent.com'],
  },
}

export default nextConfig
