exports.get = (req, res) => {
    if (req.logged) {
      console.log(req.name);
      res.render('home',{name:req.name,id:req.id});
    }
    else{
      res.redirect('/login')
    }
}
