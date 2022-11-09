const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    // Post findAll

    // map through the data, serialize it

    // render appropriate view, sending it the data it needs (which would be the posts)
});

// get single post
router.get('/post/:id', async (req, res) => {
    // find a post by Pk

    // Serialize the data

    // render appropriate view, sending it the data it needs (which would be the post)
});

router.get('/login', (req, res) => {
    // activity 18, home routes js
});

router.get('/signup', (req, res) => {
    // activity 18 home routes
});

module.exports = router;