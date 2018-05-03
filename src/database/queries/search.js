
const db_connection = require('../db_connection');

const geskillByTag = (skill, cb) => {
  const sql = {
    text: 'SELECT fname,lname,email,mobile from employees where skill_id like $1',
    values: [`%${skill_id}%`]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data.rows);
    }
  });
};
