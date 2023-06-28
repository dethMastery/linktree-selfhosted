const testPage = require('./pages/test')
const { createTree } = require('./api/crud/tree')

async function router(server, root) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return testPage
    },
  })

  server.route({
    method: 'POST',
    path: '/addRoute',
    handler: (req, h) => {
      const payload = req.payload

      return createTree(payload)
    },
  })
}

module.exports = router
