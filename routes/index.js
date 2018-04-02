var express = require('express');
var router = express.Router();

var base = process.env.PWD;
var posts = require(base + '/controllers/posts');

/* GET home page. */
router.get('/posts', posts.getPosts);
router.post('/post/create', posts.createPost);

module.exports = router;
