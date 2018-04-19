var Transaction = require('../../models/transaction');

var createTransaction = function(req , res){
  var transaction = new Transaction(req.body);

  transaction.save(function(err,transaction){
    if(err){res.send(500,err);}
    res.json(200,transaction);
  });
};
var getTransactions = function(req,res){
  Transaction.find(function(err,transactions){
    if(err){res.send(500,err);}
    res.json(200,transactions);
  });
};
var getTransaction = function(req,res){
  Transaction.findById(req.params.id, function(err,transaction){
    if(err){res.send(500,err);}
    res.json(200,transaction);
  });
};

var updateTransaction = function(req ,res){
  Transaction.findById(req.params.id, function(err,transaction){
    if(err){res.send(500,err);}

    if(req.body.code){transaction.code = req.body.code;}
      if(req.body.montant){transaction.montant = req.body.montant;}
        if(req.body.type){transaction.type = req.body.type;}
        if(req.body.date){transaction.date = req.body.date;}

      transaction.save(function(err,transaction){
            if(err){res.send(500,err);}
            res.json(200,transaction);
          });
  });
};

var deleteTransaction = function(req, res){
  Transaction.findByIdAndRemove(req.params.id, function(err, transaction){
      if(err){res.send(500,err);}
      res.json(200,{"deleted":true});
  });
};

module.exports ={
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction
};
