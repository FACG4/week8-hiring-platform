const jwt = require('jsonwebtoken')
exports.get=(req,res,cb)=>{

const token=req.cookies.token
if (token) {
      jwt.verify(token,process.env.SECRET, (err, decoded) =>{
        if (err) {
          return cb('changed')
        }
        else {
            cb('logged')
        }
      })
}
else {
  cb('notLogged')

}
  }
