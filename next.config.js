/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  experimental: {
    // optimizeCss: true, // Disabled due to build issues
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://faizanazhar.dev',
    SITE_NAME: process.env.SITE_NAME || 'Faizan Azhar Portfolio',
  },
}

module.exports = nextConfig
