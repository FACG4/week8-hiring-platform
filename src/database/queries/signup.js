const db_connection = require('../db_connection');

const bcrypt = require('bcrypt');

const addEmployers=(userdata,callback) => {
  const salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(userdata.user_password,salt);
  const sql = {
  text: "INSERT INTO employers (fname,lname,password,email) VALUES ($1,$2,$3,$4)",
  values: [`${userdata.first_name}`,`${userdata.last_name}`, `${passwordHash}`, `${userdata.user_email}`]}
  db_connection.query(sql, (errRegister) => {
    if (errRegister) {
      callback(errRegister,null);
    } else {
      callback(null,true);
    }
  });
}
const addEmployees=(userdata,callback) => {
  const salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(userdata.user_password,salt);
  const sql = {
  text: "INSERT INTO employees (fname,lname,password,email,skill_id, carrer) VALUES ($1,$2,$3,$4,$5)",
  values: [`${userdata.first_name}`,`${userdata.last_name}`, `${passwordHash}`, `${userdata.user_email}`]}
  db_connection.query(sql, (errRegister) => {
    if (errRegister) {
      callback(errRegister,null);
    } else {
      callback(null,true);
    }
  });
}

module.exports = {
  register
};
