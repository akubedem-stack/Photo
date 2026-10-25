var Photo = require("../models/photo").Photo;

module.exports = async function(req, res, next) {
  res.locals.nav = [];
  var menu = await Photo.find({}, { _id: 0, title: 1, slug: 1 });
  if (menu.length != 0) {
    res.locals.nav = menu;
  }
  next();
}