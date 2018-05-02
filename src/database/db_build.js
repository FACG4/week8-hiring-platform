const dbConnection = require('./db_connection');
const fs = require('fs');
const path = require('path');


const sql = fs.readFile(path.join(__dirname, 'db_build.sql'), (err, file) => {
  if (err) return (err);
  return file.toString();
});

const runBuild = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res);
  });
};

module.exports = runBuild;
