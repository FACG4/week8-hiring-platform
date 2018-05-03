
const signup = require('../database/queries/signup');

exports.get = (req, res) => {
  res.render('signup',{ activePage: { signup: true } });

}

exports.post = (req, res) => {
  const userData=req.body;
  console.log('im in sign up . post');
  signup.register(userData,(err,result)=>{
    if (err) {
      return res.status(409).send();
    }
    return res.send();
  })
  res.redirect('login')
};
