const hash = require('./hash.js');
const {signup} = require('../database/queries');

exports.get = (req, res) => {
    if (!req.logged) {
      res.render('signup');
    }
    else{
      res.redirect('/')
    }
}

exports.post = (req, res) => {
  if (!req.logged) {
    const userData=req.body;
    const role = req.body.role;
    if(role==='employer'){
    userData.hashedPassword = hash.hashed(userData.user_password);
    console.log(hash.hashed(userData.user_password));
      signup.addEmployers(userData,(err,result)=>{
        if (err) {
          return res.status(409).send();
        }
        return res.send();
      })
      res.render('login')
    } else {
      signup.addEmployee(userData,(err,result)=>{
        if (err) {
          throw new Error(err);
          return res.status(409).send();
        }
        return res.send();
      })
      res.redirect('login')
    };

  }
else{
  res.redirect('/')
}

}
