const express = require('express');
const path = require('path');
const router = express.Router();
const signup= require('./signup');




// router.get("/", home);
router.get("/", signup.get);
router.post("/signup", signup.post);
// router.get('/fruits', fruits);
// router.get('/fruits/:singleFruit', singleFruit);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
