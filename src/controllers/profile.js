const {profile} = require('../database/queries');
exports.profile = (req, res) => {
  if (req.logged) {
    const userId = req.params.id
    profile(userId,(err, result) => {
      if (err) throw new Error(err);
      res.render('profile',{result:result[0],name:req.name});
    })

  }
  else{
    res.redirect('/signup')

  }
}
