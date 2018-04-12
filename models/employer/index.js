var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeSchema = new Schema({
  code: String,
  nom: String,
  prenom: String,
  groupe: String,
  status:String,

});

module.exports = mongoose.model('Employe', EmployeSchema);
