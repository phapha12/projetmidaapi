var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');

/* GET home page. */
router.get('/posts', posts.getPosts);
router.get('/post/:id', posts.getPost);
router.post('/post/create', posts.createPost);
router.put('/post/:id', posts.updatePost);
router.delete('/post/:id', posts.deletePost);

module.exports = router;
