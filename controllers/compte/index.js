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

    if(req.body.title){compte.title = req.body.title;}
      if(req.body.body){compte.body = req.body.body;}
        if(req.body.title){compte.title = req.body.author;}

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
