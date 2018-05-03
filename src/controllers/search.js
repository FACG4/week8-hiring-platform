const {findSkillsQ} = require('../database/queries');
const error = require('./error');
exports.post=(req,res)=>{
    if (req.logged) {
      const skills=req.body.skills
      findSkillsQ(skills,(err, result) => {
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
