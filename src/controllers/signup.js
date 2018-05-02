const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');








exports.signup = (req,res) => {
  res.render('signup');
}
