var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || process.env.GMAIL_DB);
var emails = db.get('messages');

/* GET users listing. */
router.get('/', function(req, res, next) {
  emails.find({})
  .then(function (emails) {
    res.json(emails);
    res.render('index', {emails: emails});
  });
});

router.post('/starred', function(req, res, next) {

  emails.update({_id: req.body._id}, {$set: {starred: req.body.starred}})
  .then(function () {
    return emails.find({})
    .then(function (emails) {
      res.json(emails);
    });
  });
});

router.post('/read', function (req, res, next) {
  emails.update({_id: req.body._id}, {$set: {read: req.body.read}})
  .then(function () {
    return emails.find({})
    .then(function (emails) {
      res.json(emails);
    });
  });
});

router.post('/delete', function (req, res, next) {
  emails.remove({_id: req.body._id})
  .then(function () {
    return emails.find({})
    .then(function (emails) {
      res.json(emails);
    });
  });
});

router.post('/filters', function (req, res, next) {
  emails.update({_id: req.body._id}, {$set: {filters: req.body.filters}})
  .then(function () {
    return emails.find({})
    .then(function (emails) {
      res.json(emails);
    });
  });
});

router.post('/new', function (req, res, next) {
  var newEmail = {
    subject: req.body.subject,
    starred: false,
    read: false,
    filters:[]
  };
  emails.insert(newEmail)
  .then(function () {
    return emails.find({})
    .then(function (emails) {
      res.json(emails);
    });
  });
});

module.exports = router;
