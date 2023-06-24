let exp = require('express')

let { pageRun } = require('./src/page')
let { portRun } = require('./src/port');
const { middleware } = require('./src/middleware');

let app = exp();

// Call Mongo API
require('./src/API/mongo')

middleware(exp)
pageRun(app, __dirname)
portRun(app, 1980)