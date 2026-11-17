const express = require('express');
const {createProd, getProduct, delProduct, getAllProduct} = require('../controllers/prodController');
const uploader = require('../middlewares/multerMiddleware');
const { isAdmin, isLoggedIn } = require('../validation/authValidator');

const prodRoutes = express.Router();
prodRoutes.post('/createProd', isLoggedIn  ,uploader.single('productImage'), createProd);
prodRoutes.get('/product/:id', getProduct)
prodRoutes.get('/product', getAllProduct)
prodRoutes.get('/product/delete/:id', delProduct)
module.exports = prodRoutes;  