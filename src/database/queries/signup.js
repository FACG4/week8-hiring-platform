 const db_connection = require('../db_connection');
 const bcrypt = require('bcryptjs')

 const postEmployee = (username, fname, lname, email, password, cb) => {

   var salt = bcrypt.genSaltSync(10);
   const passwordHash = bcrypt.hashSync(password, salt);
   const sql = {
     text: `INSERT INTO employees(username,fname, lname, email  , password) VALUES ($1 , $2 , $3 ,$4, $5)`,
     values: [username, fname, lname, email, passwordHash]
   }
   db_connection.query(sql, (error, res) => {
     if (error) return cb(error);
     cb(null, res);
   })
 }


 const postEmplyer = (username, fname, lname, email, password, cb) => {
   var salt = bcrypt.genSaltSync(10);
   const passwordHash = bcrypt.hashSync(password, salt);
   const sql = {
     text: `INSERT INTO employers(username,fname, lname, email  , password) VALUES ($1 , $2 , $3 ,$4, $5)`,
     values: [username, fname, lname, email, passwordHash]
   }
   db_connection.query(sql, (error, res) => {
     if (error) return cb(error);
     cb(null, res);
   })
 }

 module.exports = {
   postEmployee,
   postEmplyer
 }
