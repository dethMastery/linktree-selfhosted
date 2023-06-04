let exp = require('express')

let { pageRun } = require('./src/page')
let { portRun } = require('./src/port')

let app = exp();

pageRun(app, __dirname)
portRun(app, 1980)