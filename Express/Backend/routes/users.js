var express = require('express');
var router = express.Router();
var users = require('./../controller/UserContoller');
/* GET users listing. */
/*router.get('/', function (req, res, next) {
  console.log("First")
  console.log(req.headers)
  // res.send('respond with a resource');
  next();
});
router.get('/', function (req, res, next) {
  console.log("Second")
  res.send('<h1>hello</h1>');
});

router.get('/ab?cd', function (req, res, next) {
  console.log("Second")
  res.send('<h1>ab?cd</h1>');
});

router.get('/ab+cd', function (req, res, next) {
  console.log("Second")
  res.send('<h1>ab+cd</h1>');
});*/
router.post('/', users.registerUser);
router.get('/:userId', users.getUserById);
router.post('/login', users.login);
module.exports = router;