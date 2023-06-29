const mongoose = require('mongoose')

require('dotenv').config()
const env = process.env

mongoose.connect(env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (err) => {
  console.error(err)
})

db.once('connected', () => {
  console.log('db connected!')
})
