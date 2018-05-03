const db_connection = require('../db_connection');

const bcrypt = require('bcrypt');



const addEmployers=(userdata,callback) => {
  const passwordHash = bcrypt.hash(userdata.user_password,8,(err,result)=>{
    if (err) {
        return callback(err)
    }
    else {
      const sql = {
        text: "INSERT INTO employers (fname,lname,password,email) VALUES ($1,$2,$3,$4)",
        values: [`${userdata.first_name}`,`${userdata.last_name}`, `${passwordHash}`, `${userdata.user_email}`]}
        db_connection.query(sql, (err,result) => {
          if (err) {
            callback(err);
          } else {
            callback(null,result);
          }
        });
    }
  });
}




const addEmployee=(userdata,callback) => {
  const salt=bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(userdata.user_password,salt);
  const sql = {
  text: "INSERT INTO employees (fname,Lname,password,email,skill_id,career,mobile) VALUES ($1,$2,$3,$4,$5,$6,$7)",
  values: [`${userdata.first_name}`,`${userdata.last_name}`, `${passwordHash}`,
     `${userdata.user_email}` ,`${userdata.skill}` , `${userdata.user_career}`,`${userdata.user_phone}` ]}

  db_connection.query(sql, (errRegister) => {
    if (errRegister) {
      callback(errRegister,null);
    } else {
      callback(null,true);
    }
  });
}

module.exports = {
  addEmployers,
  addEmployee
};
