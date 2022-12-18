/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowMiddlewareResponseBody: true,
    middlewarePrefetch: 'flexible'
  }
}

module.exports = nextConfig