const pool = require('./pool.js');
const messages = require('./data.js');

async function insertMessage(message) {
  const { message_text, username, added } = message;
  await pool.query(
    'INSERT INTO messages(message_text, username, added) values($1, $2, $3)',
    [message_text, username, added]
  );
}

async function main() {
  for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);

    await insertMessage(messages[i]);
  }
}

main();
