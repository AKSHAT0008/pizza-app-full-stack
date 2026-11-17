const { findCart } = require("../repositories/cartRepo");
const {createOrderDB, getOrderById, getOrderByUserId} = require("../repositories/orderRepo");
const { clearCart } = require("./cartServices");

async function createOrder(userId, address, paymentMethod) {
    const cart = await findCart({
        user : userId,
    })
    // console.log(cart);
    
    if(!cart || cart.items.length === 0){
        throw new Error("Add items to place an order.");      
    }
    let totalAmount = 0;
    const orderItems = cart.items.map(item =>{
        const product = item.product;
        const quantity = item.quantity;
        totalAmount += quantity*(product.price);
        return{
            product: product._id,
            quantity
        }
    })

    const orderData = {
        user: userId,
        items : orderItems,
        totalAmount, 
        paymentMethod,
        paymentStatus: (paymentMethod === 'COD' ? 'Pending' : 'Paid'),
        orderStatus: 'Placed',
    }

    const order = await createOrderDB(orderData);
    await clearCart(userId);
    return order;
}

async function getOrderByUserIdService(userID) {
    const order = await getOrderByUserId(userID);
    console.log(order);
    
    if(!order) throw new Error("No orders found");
    return order;
}
async function getOrderByIdService(orderId) {
    const order = await getOrderById(orderId);
    if(!order) throw new Error("No orders found");
    return order;
}
module.exports = {
    createOrder,
    getOrderByIdService,
    getOrderByUserIdService
};