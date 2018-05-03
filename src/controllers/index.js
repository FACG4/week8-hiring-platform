const express = require('express');
const path = require('path');
const router = express.Router();
const signup = require('./signup')
const login = require('./login');
const profile = require('./profile');
router.get('/',signup.get);
router.post('/signup',signup.post);
router.get('/login', login.get)
router.get('/profile/id=*', profile.profile)

module.exports = router;
