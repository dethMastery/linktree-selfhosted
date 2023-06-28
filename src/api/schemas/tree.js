let mongoose = require('mongoose')

require('../mongo')

const links = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  service: {
    require: true,
    type: String,
  },
  link: {
    require: true,
    type: String,
  },
})

const trees = new mongoose.Schema({
  id: {
    require: true,
    type: Number,
  },
  slug: {
    require: true,
    type: String,
  },
  title: {
    require: true,
    type: String,
  },
  author: {
    require: true,
    type: String,
  },
  timestamp: {
    require: true,
    type: String,
  },
  links: [links],
})

module.exports = mongoose.model('trees', trees)
