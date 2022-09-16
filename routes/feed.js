const express = require('express');

const feedController = require('../controllers/feed');

const route = express.Router();

route.get('/posts', feedController.getPost);
route.post('/post', feedController.createPost);

module.exports = route;