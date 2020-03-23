
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('iam from todos page -iam from test branch'); 
});

module.exports = router;
