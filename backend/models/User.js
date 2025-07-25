const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar:   { type: String, default: '' }, // URL or base64 string
  profile:  { type: String, default: '' }  // Bio or other info
});
module.exports = mongoose.model('User', UserSchema);