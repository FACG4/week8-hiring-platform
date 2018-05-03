
const signup = require('../database/queries/signup');

exports.get = (req, res) => {
  res.render('signup');

}

exports.post = (req, res) => {
  const userData=req.body;
  const isEmployee = req.body.isEmployee;
  if(!isEmployee){
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
