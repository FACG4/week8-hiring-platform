const bcrypt = require('bcrypt');
let hashString ='';
exports.hashed = (pass) => {
  const hash = bcrypt.hash(pass, 8, (err, res) => {
    if(err) return(err);
    return  hashString += res;
  })
return hashString
}
