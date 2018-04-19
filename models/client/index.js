var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  
  code:Number,
  nom:String,
  prenom:String,
  password: String,
  username:String,
  account:Number
});

module.exports = mongoose.model('Client', ClientSchema);
