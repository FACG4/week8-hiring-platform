exports.get = (req, res) => {
    if (!req.logged) {
      res.render('login');

    }
    else{
      res.redirect('/')
    }
}
