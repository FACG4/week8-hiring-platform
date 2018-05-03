exports.get = (req, res) => {
    if (req.logged) {
      res.render('home');
    }
    else{
      res.redirect('/login')
    }
}
