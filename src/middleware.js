const session = require('express-session')
const bodyParser = require('body-parser')

function middleware(exp) {
  const app = exp();

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use(session({
    secret:'katzuTreeIsGonnaBeOkay',
    saveUninitialized: false,
  }))
}

module.exports = {
  middleware
}