const db_connection = require('../db_connection');

const signup = (skills, cb) => {
  if(skills){
  let sql = { text:
    'INSERT INTO employees (username, fname, lname, email, password, carrer) VALUES ($1, $2, $3 ,$4,$5,$6)',
  values: [username, fname,lname,email, password]};
}
else {
  let sql = { text:
    'INSERT INTO employees (username, fname, lname, email, password, carrer) VALUES ($1, $2, $3 ,$4,$5,$6)',
  values: [username, fname,lname,email, password]};
}
  db_connection.query(sql,(err, res) => {

      if (err) {
        return cb(err);
      } else {
        cb(null, res)
      }
    });

  };

module.exports={signup};
