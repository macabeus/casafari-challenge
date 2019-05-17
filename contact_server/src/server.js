const Hapi = require('@hapi/hapi')
const routes = require('./routes')
const startDatabase = require('./database')

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
      headers: ['Accept', 'Content-Type'],
      additionalHeaders: ['X-Requested-With'],
    },
  },
})

routes.forEach(routeSpec => server.route(routeSpec(server)))

process.on('unhandledRejection', (err) => {
  console.log(err) // eslint-disable-line no-console
  process.exit(1)
})

const init = async (fakeDb = null) => {
  await server.initialize()

  server.app.db = fakeDb

  return server
}

const start = async () => {
  await server.start()
  const db = await startDatabase()
  server.app.db = db

  console.log(`Server running on ${server.info.uri}`) // eslint-disable-line no-console
  return server
}

module.exports = {
  init,
  start,
}
