var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

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
router.post('/logreg', async function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  // Ищем пользователя в базе по имени
  var users = await User.find({username: username});
  
  if (!users.length) {
    // Если пользователя нет, создаем нового
    var user = new User({username: username, password: password});
    await user.save();
    req.session.user_id = user._id; // Запоминаем его в сессии
    res.redirect('/');
  } else {
    // Если пользователь есть, проверяем пароль
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id; // Запоминаем в сессии
      res.redirect('/');
    } else {
      // Пароль неверный — возвращаем на страницу с ошибкой
      res.render('logreg', {title: 'Вход', error: 'Пароль не верный'});
    }
  }
});
/* POST logout. */
router.post('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;