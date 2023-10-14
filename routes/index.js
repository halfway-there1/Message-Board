const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

messages[0].added.getDate();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

/* Handle the new message from the form */
router.post('/new', function (req, res) {
  console.log(req.body.messageAuthor, req.body.messageText);
  let { messageAuthor, messageText } = req.body;
  messages.push({ text: messageText, user: messageAuthor, added: new Date() });
  res.redirect('/');
});

module.exports = router;
