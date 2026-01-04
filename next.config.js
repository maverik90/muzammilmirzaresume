/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/muzammilmirzaresume',
  basePath: '/muzammilmirzaresume'
}

module.exports = nextConfig
