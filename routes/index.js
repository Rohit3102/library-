var express = require('express');
var router = express.Router();
const books = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/show', function(req, res, next) {
  res.render('show', {books});
});
router.post('/register', function(req, res, next) {
  books.push(req.body)
  res.render('show',{books})
});

router.get('/details/:index', function(req, res, next) {
  res.render(`details`,{books})
});

router.get(`/delete/:index`, function(req, res){
  books.splice(req.params.index,1);
  res.redirect(`/show`)
});

router.get("/update/:index",function(req, res,next){
const dets = books[req.params.index];
res.render("update",{books:dets,index:req.params.index})
});

router.post('/update/:index', function(req, res, next) {
  books[req.params.index] = req.body;
  res.redirect(`/details/${req.params.index}`);
});

  module.exports = router;