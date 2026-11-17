const Cart = require("../schema/cartSchema");
const User = require("../schema/userSchema");
const Prod = require("../schema/productSchema")

async function findCart(parameters){
    try {
        const response = await Cart.findOne({...parameters}).populate('items.product');
        return response;
    } catch (error) {
        console.log(error.message);  
        throw error;      
    }
}
async function createCart(userId, productID=null){
    const cart = new Cart({
        user: userId,
        items: [{product: productID, quantity: 1}]
    });
    await cart.save();
    return cart;
}
module.exports = {findCart, createCart};