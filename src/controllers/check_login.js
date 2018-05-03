const {checkLogin} = require('../database/queries');
const createToken = require('./create_token');
exports.get=(req,res)=>{
  const email=req.body.user_email
  const password=req.body.user_password
checkLogin(email,password,(err,result)=>{
  if (err) {
    throw new Error(err);
  }
    else if (result==='invalied password or email') {
      res.send('invalied password or email')
    }
    else {
      createToken.get(res,result)

    }
})
}
