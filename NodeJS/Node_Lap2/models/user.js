const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 5, maxLength: 20 },
  lastName: { type: String, required: true, minLength: 5, maxLength: 20 },
  email: { type: String, unique: true, match: /.+@.+\..+/ },
  dob: Date,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'post' }],
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
