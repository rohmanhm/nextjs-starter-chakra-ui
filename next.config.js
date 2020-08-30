/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withPWA = require('next-pwa')

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const pwa = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
})

const plugins = [bundleAnalyzer, pwa]

module.exports = withPlugins(plugins, {
  poweredByHeader: false,
})
