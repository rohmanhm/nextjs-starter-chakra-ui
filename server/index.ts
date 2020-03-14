import micro from 'micro'
import { get, router } from 'microrouter'
import next from 'next'
import { IS_PROD } from '../shared/env'
import { PORT } from './constants'

const nextApplication = next({
  dev: IS_PROD,
})

const httpServer = micro(
  router(
    // offline caching
    get('/service-worker.js', (req, res) =>
      nextApplication.serveStatic(
        req,
        res,
        `${process.cwd()}/.next/public/service-worker.js`
      )
    ),

    get('/ping', () => ({ status: 'pong' })),

    // SPA
    get('/*', nextApplication.getRequestHandler())
  )
)

nextApplication.prepare().then(() => {
  httpServer.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`)
    console.log('Press CTRL+C to stop.')
  })
})
