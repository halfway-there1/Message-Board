const db = require('../db/queries.js');

async function getHomePage(req, res, next) {
  const messages = await db.getMessages();
  res.render('index', { title: 'Mini Message Board', messages });
}

async function addNewMessage(req, res) {
  // console.log(req.body.messageAuthor, req.body.messageText);
  let { messageAuthor, messageText } = req.body;
  const dt = new Date();

  const message = {
    message_text: messageText,
    username: messageAuthor,
    added: dt.toISOString(),
  };
  await db.insertMessage(message);

  res.redirect('/');
}

module.exports = {
  getHomePage,
  addNewMessage,
};
