const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 6000;
const app = express();
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.use(express.json());
app.use(['/users', '/user'], userRouter);
app.use('/post', postRouter);

mongoose.connect('mongodb://127.0.0.1:27017/blogs', (err) => {
  if (!err) return console.log('DB connected Successfully');
  console.log(err);
});

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server Starts at port ${PORT}`);
  console.log(err);
});
