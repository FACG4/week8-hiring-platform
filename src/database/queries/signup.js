const db_connection = require('../db_connection');

const bcrypt = require('bcrypt');

const register=(userdata,callback) => {
  const salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(userdata.user_password,salt);
//
// const radios = document.getElementsByName('optradio');
//
// for (let i = 0, length = radios.length; i < length; i++)
// {
//  if (radios[i].checked)
//  {
//
//   const sql = {
//     text: "INSERT INTO employers (fname,lname,password,email,skill_id,carrer) VALUES ($1,$2,$3,$4,$5,$6)",
//     values: [`${userdata.first_name}`,`${userdata.last_name}`, `${passwordHash}`,
//       `${userdata.user_email}`,`${userdata.user_job}`]}
//
//
//
//   break;
//  }
// }

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

module.exports = {
  register
};
