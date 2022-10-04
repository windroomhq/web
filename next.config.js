/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/web/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
