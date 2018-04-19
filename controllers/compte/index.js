var Compte = require('../../models/compte');

var createCompte = function(req , res){
  var compte = new Compte(req.body);

  compte.save(function(err,compte){
    if(err){res.send(500,err);}
    res.json(200,compte);
  });
};
var getComptes = function(req,res){
  Compte.find(function(err,comptes){
    if(err){res.send(500,err);}
    res.json(200,comptes);
  });
};
var getCompte = function(req,res){
  Compte.findById(req.params.id, function(err,compte){
    if(err){res.send(500,err);}
    res.json(200,compte);
  });
};

var updateCompte = function(req ,res){
  Compte.findById(req.params.id, function(err,compte){
    if(err){res.send(500,err);}

    if(req.body.account){compte.account = req.body.account;}
      if(req.body.type){compte.type = req.body.type;}
        if(req.body.solde){compte.solde = req.body.solde;}

      compte.save(function(err,compte){
            if(err){res.send(500,err);}
            res.json(200,compte);
          });
  });
};

var deleteCompte = function(req, res){
  Compte.findByIdAndRemove(req.params.id, function(err, compte){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createCompte,
  getComptes,
  getCompte,
  updateCompte,
  deleteCompte
};
