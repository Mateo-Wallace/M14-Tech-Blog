const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    // Post findAll

    // map through the data, serialize it

    // render appropriate view, sending it the data it needs (which would be the posts)
});

// get single post