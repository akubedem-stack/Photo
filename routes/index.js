var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Горного пейзажа */
router.get('/mountain', function(req, res, next) {
  res.render('nature', {
    title: "Горный пейзаж",
    picture: "/images/mountain.jpg",
    desc: "Величественные горные вершины на рассвете:облака,тишина."
  });
});
/* Страница Леса */
router.get('/forest', function(req, res, next) {
  res.render('nature', {
    title: "Лес",
    picture: "/images/forest.jpg",
    desc: "Густой хвойный лес, утренний туман между деревьями."
  });
});

/* Страница Океана */
router.get('/ocean', function(req, res, next) {
  res.render('nature', {
    title: "Океан",
    picture: "/images/ocean.jpg",
    desc: "Бескрайняя гладь океана."
  });
});
module.exports = router;
