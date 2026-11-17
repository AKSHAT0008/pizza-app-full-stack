const { findCart, createCart } = require("../repositories/cartRepo");
const { getProd } = require("./prodService");

async function getCart(userID) {
    const cart = findCart({
            user: userID,
        })
    if(!cart) throw new Error("Cart not found!");
    return cart;
}

async function addToCart(userID, productID) {
    const product = await getProd(productID);
    let cart = await getCart(userID);
    if(!cart){
        cart = await createCart(userID,productID);
    }
    else{
        const itemIdx = cart.items.findIndex(item => {
    const itemProductId = item.product._id?.toString() || item.product.toString();
    return itemProductId === productID;
});
        if(itemIdx>-1){
            cart.items[itemIdx].quantity+=1;
        }
        else{
            cart.items.push({product : productID, quantity: 1});
        }
        await cart.save();
    }
    // console.log(product);
    
    // product.quantity-=1;
    // await product.save();
    return cart;

}
async function removeFromCart(userID, productID) {
    
    let cart = await getCart(userID);
    if(!cart){
        cart = await createCart(userID,productID);
    }
    else{
        const itemIdx = cart.items.findIndex(item => {
    const itemProductId = item.product._id?.toString() || item.product.toString();
    return itemProductId === productID;
});
        if(itemIdx>-1){
            if(cart.items[itemIdx].quantity>1)
                cart.items[itemIdx].quantity-=1;
            else
                cart.items.splice(itemIdx,1); //remove the item if just 1 qt is there
        }
        else{
            throw new Error("Item not found in cart");            
        }
        await cart.save();
    }
    // console.log(product);
    
    // product.quantity-=1;
    // await product.save();
    return cart;

}

async function clearCart(userID) {
    const cart = await getCart(userID);
    if(!cart){
        console.log("Can't fetch cart at the moment");
        throw new Error("Cart not found");
    }
    cart.items = [];
    return cart.save();
}
module.exports = {
    getCart,
    addToCart,
    clearCart,
    removeFromCart
}