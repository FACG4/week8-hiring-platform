const dbConnection = require('./db_connection');
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

const runBuild = (cb) => {
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res);
  });
};

// console.log('k');
// runBuild((err,res)=>{
//   console.log('i');
// })

module.exports = runBuild;
