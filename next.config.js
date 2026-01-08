/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // No assetPrefix or basePath needed for username.github.io sites
}

module.exports = nextConfig
