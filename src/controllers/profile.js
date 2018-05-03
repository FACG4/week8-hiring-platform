const userInfo = require('../database/queries/profile');
exports.profile = (req, res) => {
  const userId = req.params.id
  userInfo(userId,(err, result) => {
    if (err) throw new Error(err);
    res.render('profile',result[0]);
  })
}
