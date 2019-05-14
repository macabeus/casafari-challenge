const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0',
})

routes.forEach(routeSpec => server.route(routeSpec))

process.on('unhandledRejection', (err) => {
  console.log(err) // eslint-disable-line no-console
  process.exit(1)
})

const init = async () => {
  await server.initialize()
  return server
}

const start = async () => {
  await server.start()
  console.log(`Server running on ${server.info.uri}`) // eslint-disable-line no-console
  return server
}

module.exports = {
  init,
  start,
}
