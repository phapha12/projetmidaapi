var Client = require('../../models/client');

var createClient = function(req , res){
  var client = new Client(req.body);

  client.save(function(err,client){
    if(err){res.send(500,err);}
    res.json(200,client);
  });
};
var getClients = function(req,res){
  Client.find(function(err,clients){
    if(err){res.send(500,err);}
    res.json(200,clients);
  });
};
var getClient = function(req,res){
  Client.findById(req.params.id, function(err,client){
    if(err){res.send(500,err);}
    res.json(200,client);
  });
};

var updateClient = function(req ,res){
  Client.findById(req.params.id, function(err,client){
    if(err){res.send(500,err);}

    if(req.body.title){client.title = req.body.title;}
      if(req.body.body){client.body = req.body.body;}client
        if(req.body.title){client.title = req.body.author;}

      client.save(function(err,client){
            if(err){res.send(500,err);}
            res.json(200,client);
          });
  });
};

var deleteClient = function(req, res){
  Client.findByIdAndRemove(req.params.id, function(err, client){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient
};
