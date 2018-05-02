const { Pool } = require('pg');
require('env2')('./config.env');
const url = require('url');

let dbUrl = process.env.DB_URL;

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
}

const params = url.parse(dbUrl);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: this.host !== 'localhost',
};



module.exports = new Pool(options);
