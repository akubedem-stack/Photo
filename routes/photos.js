var express = require('express');
var router = express.Router();
var Photo = require('../models/photo').Photo; // Подключаем модель

router.get("/:slug", async function(req, res, next) {
  // Ищем в базе фотосессию по её slug
  var photos = await Photo.find({slug: req.params.slug});
  
  if (!photos.length) {
    return next(new Error("Нет такой фотосессии"));
  }
  
  var photo = photos[0];
  
  // Передаем данные в шаблон views/photo.ejs
  res.render('photo', {
    title: photo.title,
    picture: photo.avatar,
    desc: photo.desc
  });
});

module.exports = router;