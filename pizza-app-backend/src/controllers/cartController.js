const { getCart, addToCart, removeFromCart, clearCart } = require("../services/cartServices");

async function getCartByUser(req,res){
    try {
        const cart = await getCart(req.user._id)
        console.log(req.user);
        console.log(cart);
        
        return res.status(200).json({
            success: true,
            message: "cart found",
            data: {cart},
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: "cart not found:  " + error.message,
            data: {}
        })
        
    }
    // console.log("Cart created");
}

async function addToCartController(req,res) {
    try {
        const userId = req.user._id;
        const productId = req.params.productId;

        const updatedCart = await addToCart(userId, productId);

        return res.status(200).json({
            success: true,
            message: 'Item added to cart',
            data: updatedCart
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Failed to add item to cart',
            error: err.message
        });
    }
}
async function removeFromCartController(req,res) {
    try {
        const userId = req.user._id;
        const productId = req.params.productId;

        const updatedCart = await removeFromCart(userId, productId);

        return res.status(200).json({
            success: true,
            message: 'Item removed from cart',
            data: updatedCart
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Failed to remove item',
            error: err.message
        });
    }
}
async function clearCartController(req,res) {
    
    try {
        const userId = req.user._id;
        const updatedCart = clearCart(userId);
        return res.status(200).json({
            success: true,
            message: 'Item cleared from cart',
            data: updatedCart
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Failed to clear items',
            error: err.message
        });
    }

}

module.exports = {
    getCartByUser,
    addToCartController,
    removeFromCartController,
    clearCartController
}