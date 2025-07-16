/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   optimizeCss: true,
  // },
  eslint: {
    dirs: ['src'],
  },
  generateEtags: false,
  // Enable static optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
