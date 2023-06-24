const mongoose = require('mongoose')

require('dotenv').config()
const env = process.env

const mongoURI = `mongodb://${env.MONGO_USER}:${env.MONGO_PASS}@${env.MONGO_URI}:${env.MONGO_PORT}/${MONGO_DB}?authSource=${MONGO_AUTH_SOURCE}`

mongoose.connect(mongoURI)
const db = mongoose.connection

db.on('error', (err) => {
  console.error(err);
})

db.once('connected', () => {
  console.log('db connected');
})