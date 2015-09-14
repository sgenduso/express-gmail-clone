var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/gmail-clone');
var emails = db.get('messages');

/* GET users listing. */
router.get('/', function(req, res, next) {
  emails.find({})
  .then(function (emails) {
    res.json(emails);
  });
});

module.exports = router;
