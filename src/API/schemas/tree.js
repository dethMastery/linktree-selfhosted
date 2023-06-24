const mongoose = require('mongoose');

require('../mongo')

const treeSchemas = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  data: [{
    serviceName: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('trees', treeSchemas)