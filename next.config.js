/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const pwa = withBundleAnalyzer(
  withPWA({
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
    },
  })
)

const plugins = [pwa]

module.exports = withPlugins(plugins, {
  poweredByHeader: false,
})
