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
  /* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
  console.log(req.body); // Выводим данные в консоль терминала
  res.send("Данные получены! Посмотрите в терминал VS Code.");
});
module.exports = router;