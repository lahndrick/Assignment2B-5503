const express = require('express');
const router = express.Router();
const Article = require('../Models/articleSchema');

// Route for creating a new article
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

module.exports = router;
