/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/muzammirmirzaresume',
  assetPrefix: '/muzammirmirzaresume'
}

module.exports = nextConfig
