const dbConnection = require('./../db_connection');
const findSkills=(skills,cb)=>{
  const sql={
    text :"SELECT employees.fname, employees.Lname, employees.career , skills.title FROM employees INNER JOIN skills ON skills.id=employees.skill_id WHERE skills.title ilike $1",
    values:[`%${skills}%`]
  }
  dbConnection.query(sql,(err,result)=>{
    if (err) {
      return cb(err)
    } else if(result.rows.length>0) {
      return cb(null,result.rows)
    }
    else {
    return cb(null,null)
    }
  })
}

module.exports = findSkills;
