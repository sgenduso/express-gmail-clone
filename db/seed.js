var db = require('monk')('localhost/gmail-clone');
var Messages = db.get('messages');

Messages.remove({})

.then(function() {
return Promise.all([
  Messages.insert({
    subject: "HEY",
    starred: false,
    read: false,
    filters:[]

  }),
Messages.insert({
    subject: "Do you see this",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "How are you?",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "Doesn't Mandy smell great?",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "FA LA LA LA LA",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "LA LA",
    starred: false,
    read: false,
    filters:[]
  }),
  Messages.insert({
    subject: "LA LAAAAA",
    starred: false,
    read: false,
    filters:[]
  })
]);

})

.then(function(){
  db.close();
});
