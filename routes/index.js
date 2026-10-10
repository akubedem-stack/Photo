var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Горного пейзажа */
router.get('/mountain', function(req, res, next) {
  res.send("<h1>Страница Горного пейзажа</h1>")
});

/* Страница Леса */
router.get('/forest', function(req, res, next) {
  res.send("<h1>Страница Леса</h1>")
});

/* Страница Океана */
router.get('/ocean', function(req, res, next) {
  res.send("<h1>Страница Океана</h1>")
});
module.exports = router;
