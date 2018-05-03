const checkLoginQuery = require('../database/queries/check_login');
const createToken = require('./create_token');
exports.get=(req,res)=>{
  const email=req.body.user_email
  const password=req.body.user_password
checkLoginQuery(email,password,(err,result)=>{
  // console.log(result);
  if (err) {
    return console.log(err)
  }
    else if (result==='invalied password or email') {
      res.send('invalied password or email')
    }
    else {
      //i need to make token and send it to front end
      createToken.get(res,result)

    }
})
}
