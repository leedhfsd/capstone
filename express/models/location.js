const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  code: {
    type: Number
  },
  si: {
    type: String
  },
  gu: {
    type: String
  },
  dong: {
    type: String
  },
  nx: {
    type: Number
  },
  ny: {
    type: Number
  },
  longitude: {
    type: Number
  },
  latitude: {
    type: Number
  }
});

module.exports = mongoose.model('Location', locationSchema);