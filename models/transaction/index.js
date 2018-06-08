var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  code: String,
  montant: Number,
  type:String,
  date:String
  
});

module.exports = mongoose.model('Transaction', TransactionSchema);
