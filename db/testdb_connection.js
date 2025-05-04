const pool = require('./pool.js');

async function testdb() {
  const { rows } = await pool.query(`Select 'Hello, World !'`);
  console.log(rows[0]['?column?']);
}

testdb();
