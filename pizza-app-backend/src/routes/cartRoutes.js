const express = require('express');
const { getCartByUser, addToCartController, removeFromCartController, clearCartController } = require('../controllers/cartController');
const { isLoggedIn } = require('../validation/authValidator');

const cartRouter = express.Router();

cartRouter.get('/get',isLoggedIn, getCartByUser);
cartRouter.get('/add-to-cart/:productId',isLoggedIn, addToCartController);
cartRouter.get('/remove-from-cart/:productId',isLoggedIn, removeFromCartController);
cartRouter.get('/clear',isLoggedIn, clearCartController);

module.exports = cartRouter;