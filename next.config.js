const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPWA = require('next-pwa')

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const pwa = withPWA({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
})

const plugins = [bundleAnalyzer, pwa]

/**
 * @type {import('next').NextConfig}
 */
module.exports = () => {
  return plugins.reduce((acc, next) => next(acc), {
    poweredByHeader: false,
  })
}
