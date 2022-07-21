const mongoose = require('mongoose');

const postSchma = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

const PostModel = mongoose.model('post', postSchma);

module.exports = PostModel;

//62bf0d451d31f359c08af136
