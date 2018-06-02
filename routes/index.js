var express = require('express');
var router = express.Router();
var tshirtController = require('../controllers/tshirtController');

router.get('/', function(req, res, next) {
  tshirtController.getLimit(function(tshirts){
    res.render('index',{samples: tshirts});
  },8);
});

router.get('/shopping', function(req, res, next) {
  let query = {};
  if (req.query.type != undefined)
    query.type = req.query.type;
  if (req.query.color != undefined)
    query.color = req.query.color;
  if (req.query.key != undefined)
    query.key = req.query.key;
  if (req.query.sort != undefined)
    query.sort = req.query.sort;
  if (req.query.skip != undefined)
    query.skip = req.query.skip;
  
  query.limit = 12;

  tshirtController.getList(function(tshirts){
    res.render('shopping',{lists: tshirts, count: tshirts.length});
  },query);
});


router.get('/product/SP00:id', function(req, res, next) {
    let id = req.params.id;
    console.log(id);
    tshirtController.getByID(function(product){
    res.render('product',product);
  },id);
});

// current working

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});

router.get('/design', function(req, res, next) {
  res.render('design', { title: 'Express' });
});

router.get('/order-status', function(req, res, next) {
  res.render('order-status', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Express' });
});

router.get('/update-info', function(req, res, next) {
  res.render('update-info', { title: 'Express' });
});

router.get('/admin-home', function(req, res, next) {
  res.render('admin-home', { title: 'Express', layout: "admin-layout" });
});

router.get('/admin-login', function(req, res, next) {
  res.render('admin-login', { title: 'Express', layout: null});
});

router.get('/admin-order-detail', function(req, res, next) {
  res.render('admin-order-detail', { title: 'Express', layout: "admin-layout" });
});

router.get('/admin-order', function(req, res, next) {
  res.render('admin-order', { title: 'Express', layout: "admin-layout" });
});

router.get('/admin-product', function(req, res, next) {
  res.render('admin-product', { title: 'Express', layout: "admin-layout" });
});

router.get('/admin-store', function(req, res, next) {
  res.render('admin-store', { title: 'Express', layout: "admin-layout" });
});

router.get('/admin-user', function(req, res, next) {
  res.render('admin-user', { title: 'Express', layout: "admin-layout" });
});

module.exports = router;
