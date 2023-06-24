let exp = require('express')

let { pageRun } = require('./src/page')
let { portRun } = require('./src/port')

let app = exp();

// Call Mongo API
require('./src/API/mongo')

pageRun(app, __dirname)
portRun(app, 1980)