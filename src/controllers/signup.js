const insert_user_into_db = require('../database/queries/signup.js');



function get(req,res){

 res.render("signup")

}



function post(req,res){
  const {firstname, lastname, useremail, userpassword}  = req.body;
  insert_user_into_db.postUser("nnn" , firstname, lastname, useremail, userpassword , (err,result)=>{
    if(err)return console.log(err);
    res.render('signup')
  });
 }

module.exports = {get, post};
