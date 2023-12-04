const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('allAuthors');
});

module.exports = router;
