const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  craetedAt: {
    type: Date,
    default: Date.now
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

module.export = mongoose.model('Article', articleSchema);

