var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
  title: String,
  slug: { type: String, unique: true, required: true },
  avatar: String,
  desc: String,
  created: { type: Date, default: Date.now }
});

var Photo = mongoose.model('Photo', photoSchema);
module.exports.Photo = Photo;