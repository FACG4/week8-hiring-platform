const dbConnection = require('../db_connection');
const profile =(userId,cb)=>{
const sql={
  text:'SELECT * FROM employees INNER JOIN skills ON employees.skill_id=skills.id WHERE employees.id=$1 ',
  values:[userId]
}
dbConnection.query(sql,(err,result)=>{
  if (err) return cb(err)
  cb(null,result.rows)
})
}
module.exports=profile
