var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shopping', function(req, res, next) {
  res.render('shopping', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

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

module.exports = router;
