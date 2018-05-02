const express = require('express');
const path = require('path');
const router = express.Router();
const signup= require('./signup')
const login = require('./login');
const profile = require('./profile');


router.get('/login',login.get)
router.get('/profile/id=*',profile.profile)

// router.get("/", home);
// router.get("/", signup);
// router.get('/fruits', fruits);
// router.get('/fruits/:singleFruit', singleFruit);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
