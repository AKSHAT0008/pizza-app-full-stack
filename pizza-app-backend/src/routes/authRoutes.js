const express = require('express');
const {login,logout} = require('../controllers/authController');
const authRoute = express.Router()

authRoute.post('/login', login);
authRoute.post('/logout', logout);
module.exports = authRoute;
