 const db_connection = require('../db_connection');
const bcrypt=require('bcryptjs')

const postUser = (username , fname, lname, email  , password, cb) => {

  var salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password,salt);
 

  const sql = {
    text: `INSERT INTO employees(username,fname, lname, email  , password) VALUES ($1 , $2 , $3 ,$4, $5)`,
    values: [username, fname, lname, email, passwordHash]
  }

  // const sql = 'insert into employees (username , fname, lname, email  , password, skill_id,carrer)values'

  db_connection.query(sql, (error, res) => {
    if (error) return cb(error);
    cb(null, res);
  })

}




module.exports = {
  postUser
 }
