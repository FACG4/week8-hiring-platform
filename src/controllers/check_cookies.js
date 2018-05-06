const jwt = require('jsonwebtoken')
exports.get=(req,res,next)=>{

const token=req.cookies.token
if (token) {
      jwt.verify(token,process.env.SECRET, (err, decoded) =>{
        if (err) {
          return cb('changed')
        }
        else {
            req.logged=true
            req.name=`${decoded.fname} ${decoded.lname}`
            req.id=decoded.id
        }
      })
}
else {
  req.logged=false

}
next()
  }
