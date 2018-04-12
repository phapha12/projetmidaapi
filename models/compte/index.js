var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompteSchema = new Schema({
  id: Number,
  type: String,
  solde:Number  

});

module.exports = mongoose.model('Compte', CompteSchema);
