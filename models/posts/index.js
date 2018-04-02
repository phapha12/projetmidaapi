var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  author:String,
  meta: {
    likes: Number
  }
});

module.exports = mongoose.model('Post', PostSchema);
