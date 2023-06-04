let exp = require('express')

let { pageRun } = require('./src/page')
let { portRun } = require('./src/port')

let app = exp();

app.use(exp.static('static'))

pageRun(app, __dirname)
portRun(app, 1980)