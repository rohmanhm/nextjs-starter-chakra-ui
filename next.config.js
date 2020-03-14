const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const offline = [
  withOffline,
  {
    generateInDevMode: false,
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    workboxOpts: {
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'https-calls',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
]

const plugins = [bundleAnalyzer, offline]

module.exports = withPlugins(plugins, {})
