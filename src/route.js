const testPage = require('./pages/test')
//const userCRUD = require('./api/crud/users')

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
      return 'a'
    },
  })
}

module.exports = router
