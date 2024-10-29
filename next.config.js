/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'gidata.gzgoodidea.com',
        port: '9101',
        pathname: '/portal/**',
      },
      {
        protocol: 'https',
        hostname: '5b0988e595225.cdn.sohucs.com',
        pathname: '/**',
      }
    ],
  }
}

module.exports = nextConfig

