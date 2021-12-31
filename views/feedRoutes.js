const express = require('express');

const feedControl = require('../controllers/feedController')

const router = express.Router()

// GET blog/posts
router.get('/posts', feedControl.getAllPosts)

// GET blog/post/1
router.get('/post/:id', feedControl.getPost)

// POST blog/post
router.post('/post', feedControl.createPost)

// PUT blog/post/1
router.put('/post/:id', feedControl.updatePost)

// DELETE blog/post/1
router.delete('/post/:id', feedControl.deletePost)

module.exports = router;