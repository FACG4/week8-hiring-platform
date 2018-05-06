const jwt = require('jsonwebtoken')
exports.get=(res,result)=>{
  jwt.sign(JSON.stringify(result) , process.env.SECRET, function(err, token) {
    if (err) {
      return  res.send('500 Error')
    }
    res.cookie('token',token)
          res.redirect('/')
  });
}
