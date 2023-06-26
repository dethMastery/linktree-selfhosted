const testPage = require('./pages/test')
const userCRUD = require('./api/crud/users')

async function router(server, root) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return testPage
    }
  })

  server.route({
    method: 'GET',
    path: '/registerCheck',
    handler: (req, h) => {
      return userCRUD.register('absolute', 'aaaaaa')
    }
  })
}

module.exports = router