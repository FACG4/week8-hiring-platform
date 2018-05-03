const {profile} = require('../database/queries');
exports.profile = (req, res) => {
  if (req.logged) {
    const userId = req.params.id
    profile(userId,(err, result) => {
      if (err) throw new Error(err);
      res.render('profile',result[0]);
    })

  }
  else{
    res.redirect('/signup')

  }
}
