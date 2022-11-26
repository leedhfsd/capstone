const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  craetedAt: {
    type: String,
  },
  recommended: {
    type: Number,
    default: 0
  },
  report: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Article', articleSchema);

