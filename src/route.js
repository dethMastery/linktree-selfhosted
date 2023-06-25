const testPage = require('./pages/test')

async function router(server, root) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h ) => {
      return testPage
    }
  })
}

module.exports = router