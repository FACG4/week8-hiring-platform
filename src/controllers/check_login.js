const checkLoginQuery = require('../database/queries/check_login');
const createToken = require('./create_token');
exports.get=(req,res)=>{
  const email=req.body.user_email
  const password=req.body.user_password
checkLoginQuery(email,password,(err,result)=>{
  if (err) {
    return console.log(err)
  }
    else if (result==='invalied password or email') {
      res.send('invalied password or email')
    }
    else {
      createToken.get(res,result)

    }
})
}