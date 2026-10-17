var express = require('express');
var router = express.Router();


router.get("/:slug", function(req, res, next) {
  res.send(req.params.slug);
});

module.exports = router;