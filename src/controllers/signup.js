const insert_user_into_db = require('../database/queries/signup.js');


function get(req,res){

 res.render("signup")

}



function post(req,res){
  const {username, firstname, lastname, useremail, userpassword, isEmployee , yesEmployee}  = req.body;

console.log(typeof (isEmployee));
 isEmployee.addEventListener('change' , (t)=>{




//if the user is employee, then insert into employee table
  if(isEmployee === "employee"){
      console.log("tttttttttttt/t checkeeeeeeeeeeeeeeeeeeeeed");
    var tasks = document.createElement('select');
    var option1 = document.createElement('option');
    option1.value = "Reading";
    tasks.appendChild(option1);
    yesEmployee.appendChild(tasks);
    res.render('signup' , {script:'signup'})
  }


  else {
    insert_user_into_db.postEmplyer(username , firstname, lastname, useremail, userpassword , (err,result)=>{
      if(err)return console.log(err);
      res.render('signup')
    });
   }
});
}

module.exports = {get, post};
