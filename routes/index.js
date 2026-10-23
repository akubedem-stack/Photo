var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.cookie('greeting', 'Hi from Photographer');
  
 
  res.render('index', { title: 'Фотограф' });
});

module.exports = router;