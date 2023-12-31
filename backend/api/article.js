const express = require('express');
const router = express.Router();
const Article = require('../Models/articleSchema');

//route for creating a new article
router.post('/', async (req, res) => {
  try {
    const {
      title,
      authors,
      source,
      publicationYear,
      doi,
      summary,
      linkedDiscussion,
    } = req.body;

    // Check if an article with the same DOI already exists
    const existingArticle = await Article.findOne({ doi });

    if (existingArticle) {
      return res.status(400).json({ error: 'Article with this DOI already exists' });
    }

    const article = new Article({
      title,
      authors,
      source,
      publicationYear,
      doi,
      summary,
      linkedDiscussion,
    });

    await article.save();
    res.status(201).json({ message: 'Article created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for getting all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
