var Employe = require('../../models/employe');

var createEmploye = function(req , res){
  var employe = new Employe(req.body);

  employe.save(function(err,employe){
    if(err){res.send(500,err);}
    res.json(200,employe);
  });
};
var getEmployes = function(req,res){
  Employe.find(function(err,employes){
    if(err){res.send(500,err);}
    res.json(200,employes);
  });
};
var getEmploye = function(req,res){
  Employe.findById(req.params.id, function(err,employe){
    if(err){res.send(500,err);}
    res.json(200,employe);
  });
};

var updateEmploye = function(req ,res){
  Employe.findById(req.params.id, function(err,employe){
    if(err){res.send(500,err);}

    if(req.body.title){employe.title = req.body.title;}
      if(req.body.body){employe.body = req.body.body;}
        if(req.body.title){employe.title = req.body.author;}

      employe.save(function(err,employe){
            if(err){res.send(500,err);}
            res.json(200,employe);
          });
  });
};

var deleteEmploye = function(req, res){
  Employe.findByIdAndRemove(req.params.id, function(err, employe){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createEmploye,
  getEmployes,
  getEmploye,
  updateEmploye,
  deleteEmploye
};
