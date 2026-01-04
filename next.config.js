/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/personal-website-2',
  basePath: '/personal-website-2'
}

module.exports = nextConfig
