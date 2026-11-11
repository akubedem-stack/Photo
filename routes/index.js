var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.cookie('greeting', 'Hi from Photographer');
  req.session.greeting = "Hello from session";
  res.render('index', { title: 'Фотограф', counter: req.session.counter });
});
  router.get('/logreg', function(req, res, next) {
  res.render('logreg', { title: 'Вход', error: null });
});
module.exports = router;