const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    author: {
        type: String,
    },
    description:{
        type: String,
    },
    title: {
        type: String,
    },
    journal: {
        type: String,
    },
    year: {
        type: String,
    },
    volume: {
        type: Number,
    },
    number: {
        type: Number,
    },
    pages: {
        type: String,
    },
    month: {
        type: String,
    },
    url: {
        type: String,
    },
    DOI:{
        type: String,
    },
    rating:{
        type: [Number]
    },
    semethod:{
        type: String
    }
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

