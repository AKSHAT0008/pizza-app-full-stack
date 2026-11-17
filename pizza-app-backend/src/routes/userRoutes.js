const express = require('express');
const createUser = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.post('/', createUser);
console.log("userRoute");

module.exports = userRoutes;