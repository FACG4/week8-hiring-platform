const express = require('express');
const path = require('path');
const router = express.Router();
const signup= require('./signup')
const home= require('./home')
const login = require('./login');
const profile = require('./profile');
const search = require('./search');
const checkLogin = require('./check_login');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const checkCookies = require('./check_cookies');

router.use(cookieParser());
router.post('/check_login',checkLogin.get)
router.use((req,res,next)=>{
    checkCookies.get(req,res,(result)=>{
      req.logged=result
    })
next()
})
      router.get('/profile/:id',profile.profile)
      router.get('/',home.get)
      router.post('/search',search.post)
      router.get('/login',login.get)
      router.post('/signup',signup.post);
      router.get('/signup',signup.get)
      router.get('/check_login',checkLogin.get)

module.exports = router;
