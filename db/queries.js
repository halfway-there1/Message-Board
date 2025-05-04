const pool = require('./pool.js');

async function getMessages() {
  const { rows } = await pool.query('Select * from messages');
  return rows;
}

async function insertMessage(message) {
  const { message_text, username } = message;
  await pool.query(
    'INSERT INTO messages (message_text, username) values($1, $2)',
    [message_text, username]
  );
}

module.exports = {
  getMessages,
  insertMessage,
};
