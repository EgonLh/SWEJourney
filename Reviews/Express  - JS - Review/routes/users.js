var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello, User');
});


router.get('/1', function(req, res, next) {
  res.send('Hello, User 1');
});
module.exports = router;
