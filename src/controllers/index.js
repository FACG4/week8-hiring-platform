const express = require('express');
const path = require('path');
const router = express.Router();
const signup= require('./signup')
const home= require('./home')
const login = require('./login');
const profile = require('./profile');
const checkLogin = require('./check_login');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const checkCookies = require('./check_cookies');

router.use(cookieParser());

router.post('/check_login',checkLogin.get)
router.use((req,res,next)=>{
  checkCookies.get(req,res,(result)=>{
    console.log(result,req.url);
    if (result=='logged') {
      router.get('/profile/id=*',profile.profile)
      router.get('/',home.get)
      router.get(['/login','/signup'],(req,res)=>{
        res.redirect('/')
      })

    }
    else if (result=='notLogged') {
      router.get('/login',login.get)
      router.get('/signup',signup.get)
      router.get(['/profile/id=*','/'],(req,res)=>{
        res.redirect('/signup')
      })
    }
    else{
      router.get((req,res)=>{
        res.send('<h1>Eat your cookies</h1>')
      })

    }

  })
  next()
})


module.exports = router;
