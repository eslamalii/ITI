const express = require('express');
const UserModel = require('../models/user');
const router = express.Router();
const morgan = require('morgan');

router.get('/', morgan('tiny'), async (req, res) => {
  try {
    const user = await UserModel.find({});
    res.json(user);
  } catch {
    res.json({ error: 'ERROR GET' });
  }
});

router.get('/:id', morgan('tiny'), async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById({ _id: id });
    res.json(user);
  } catch {
    res.json({ error: 'ERROR GET' });
  }
});

router.post('/', async (req, res) => {
  try {
    const userBody = req.body;
    const user = new UserModel(userBody);
    const saved = await user.save();
    res.json(saved);
  } catch {
    res.status(500).json({ error: 'ERROR POST' });
  }
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send('create new user');
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete({ _id: id });
    res.json({ message: 'Deleted' });
  } catch {
    res.status(500).json({ error: 'ERROR Deleting' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userBody = req.body;
    await UserModel.findByIdAndUpdate({ _id: id }, userBody);
    res.json({ message: 'Updated' });
  } catch {
    res.status(500).json({ error: 'ERROR Updating' });
  }
});

module.exports = router;
