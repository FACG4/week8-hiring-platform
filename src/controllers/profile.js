const userInfo = require('../database/queries/profile');
exports.profile = (req, res) => {
  const userId = req.url.split('=')[1]
  userInfo(userId,(err, result) => {
    if (err) throw new Error(err);
    console.log(result);
    res.render('profile',result[0]);

  })
}
