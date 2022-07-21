const express = require('express');
const router = express.Router();
const PostModel = require('../models/post');
const morgan = require('morgan');

router.get('/', morgan('tiny'), (req, res) => {
  PostModel.find({})
    .populate('author')
    .exec((err, posts) => {
      res.json(posts);
    });
});

router.post('/', morgan('tiny'), async (req, res) => {
  const post = new PostModel(req.body);
  const posted = await post.save();
  res.json(posted);
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.findByIdAndDelete({ _id: id });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ error: 'ERROR Deleting' });
  }
});

module.exports = router;
