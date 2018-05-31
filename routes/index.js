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
