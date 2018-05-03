const dbConnection = require('./db_connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

const runBuild = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) console.log(err);
    console.log('successfully built');
  });
};

module.exports = runBuild;
