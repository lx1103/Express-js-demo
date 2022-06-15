var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.post('/Jay',function(req,res,next){
  console.log(req.body);
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a+b;
  res.render('ans',{A:a,B:b,C:c});
});
router.get('/dashboard',function(req,res,next){
  res.render('dashboard', {title: 'Dashboard'});
});

module.exports = router;
