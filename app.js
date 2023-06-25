'use strict'

const Hapi = require('@hapi/hapi')

const route = require('./src/route')

const init = async () => {
  const server = Hapi.server({
    port: 1980,
    host: 'localhost'
  })

  route(server, __dirname)

  await server.start()
  console.log(`Server Start @ ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1)
})

init()