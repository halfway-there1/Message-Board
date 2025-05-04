const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
