var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/gmail-clone');
var emails = db.get('messages');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/api');
});

module.exports = router;
