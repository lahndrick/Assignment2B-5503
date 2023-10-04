const express = require('express');
const router = express.Router();
const Article = require('../Models/articleSchema');

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
