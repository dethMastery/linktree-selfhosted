let mongoose = require('mongoose')

require('../mongo')

const userSchema = new mongoose.Schema({
  userID: {
    required: true,
    type: Number
  },
  date: {
    required: true,
    type: String
  },
  username: {
      required: true,
      type: String
  },
  password: {
    required: true,
    type: String
  },
  isAdmin: {
    require: true,
    type: Boolean
  },
  profilePic: {
    require: true,
    type: String
  }
})

module.exports = mongoose.model('users', userSchema)