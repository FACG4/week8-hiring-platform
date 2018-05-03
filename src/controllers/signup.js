
const signup = require('../database/queries/signup');

exports.get = (req, res) => {
  res.render('signup',{ activePage: { signup: true } });

}

exports.post = (req, res) => {
  const userData=req.body;
  const isEmployee = req.body.isEmployee;
  // console.log(isEmployee);

if(isEmployee === undefined){
   signup.addEmployers(userData,(err,result)=>{
    if (err) {
      return res.status(409).send();
    }
    return res.send();
  })
  res.render('login')
}


else{

  console.log(req.body.skill);
   signup.addEmployee(userData,(err,result)=>{
    if (err) {
      return res.status(409).send();
    }
    return res.send();
  })
  res.redirect('login')
};
