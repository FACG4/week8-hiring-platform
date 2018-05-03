const findSkills = require('../database/queries/find_skillsQ');
const error = require('./error');
exports.post=(req,res)=>{
    if (req.logged) {
      const skills=req.body.skills
      findSkills(skills,(err, result) => {
        if (err) {
          throw new Error(err);
        }
        else if (result== null){
          res.render('home' ,{noResult:'no'})
        }
        else {

          res.render('home',{data:result});
        }
      })

    }
    else{
      res.redirect('/signup')
    }
}
