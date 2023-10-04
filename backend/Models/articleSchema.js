const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  doi: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  linkedDiscussion: {
    type: String,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
