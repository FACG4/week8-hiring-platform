const dbConnection = require('../db_connection');
const bcrypt = require('bcrypt');
const checkLogin =(email,strPassword,cb)=>{
const sql1={
  text:'SELECT * FROM employees WHERE email=$1  ',
  values:[email]
}
const sql2={
  text:'SELECT * FROM employers WHERE email=$1  ',
  values:[email]
}
dbConnection.query(sql1,(err,res)=>{
  if (err) return cb(err)
  if (res.rows.length>0) {
    let hashPassword=res.rows[0].password
    bcrypt.compare(strPassword, hashPassword, function(error, result) {
      if (error) {
        return cb(err);
      }
      else if(result==true){
        return cb(null,res.rows[0])
      }
      else {
        return cb(null,'invalied password or email');
      }
    });
  }
  else {
    dbConnection.query(sql2,(err2,res2)=>{
      if (err2) return cb(err2)
      if (res2.rows.length>0) {
        let hashPassword=res2.rows[0].password
        bcrypt.compare(strPassword, hashPassword, function(error2, result2) {
          if (error2) {
            return cb(err2);
          }
          else if(result2==true){
            return cb(null,res2.rows[0])
          }
          else {
            return cb(null,'invalied password or email');
          }
        });
      }
      else {
        return cb(null,'invalied password or email');

      }
    });
  }
});
}
module.exports=checkLogin
