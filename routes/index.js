var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');
var clients = require('../controllers/client');
var comptes = require('../controllers/compte');
var employes = require('../controllers/employe');
var transactions = require('../controllers/transaction');

/* Pour les posts */
router.get('/posts', posts.getPosts);
router.get('/post/:id', posts.getPost);
router.post('/post/create', posts.createPost);
router.put('/post/:id', posts.updatePost);
router.delete('/post/:id', posts.deletePost);

/* Pour les clients */
router.get('/clients', posts.getClients);
router.get('/client/:id', posts.getClient);
router.post('/client/create', posts.createClient);
router.put('/client/:id', posts.updateClient);
router.delete('/client/:id', posts.deleteClient);

/* Pour les Comptes */
router.get('/comptes', posts.getComptes);
router.get('/compte/:id', posts.getCompte);
router.post('/compte/create', posts.createCompte);
router.put('/compte/:id', posts.updateCompte);
router.delete('/compte/:id', posts.deleteCompte);

/* Pour les employe */
router.get('/employes', posts.getEmployes);
router.get('/employe/:id', posts.getEmploye);
router.post('/employe/create', posts.createEmploye);
router.put('/employe/:id', posts.updateEmploye);
router.delete('/employe/:id', posts.deleteEmploye);

/* Pour les employe */
router.get('/Transactions', posts.getTransactions);
router.get('/Transaction/:id', posts.getTransaction);
router.post('/Transaction/create', posts.createTransaction);
router.put('/Transaction/:id', posts.updateTransaction);
router.delete('/Transaction/:id', posts.deleteTransaction);

module.exports = router;
