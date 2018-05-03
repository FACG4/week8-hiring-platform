const dbConnection = require('../db_connection');
const bcrypt = require('bcrypt');
const checkLogin =(email,strPassword,cb)=>{
const sql={
  text:'SELECT * FROM employees WHERE email=$1  ',
  values:[email]
}
dbConnection.query(sql,(err,res)=>{
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
    return cb(null, true)
  }

});
}
module.exports=checkLogin
