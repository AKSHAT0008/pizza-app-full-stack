const orderSchema = require("../schema/orderSchema");

async function createOrderDB(orderDetails) {
    const order = await orderSchema.create(orderDetails);
    if(!order) throw new Error("Something went wrong in DB!");   
    return order;
}
async function getOrderByUserId(userID) {
    const order = await orderSchema.find({user: userID}).populate('items.product');
    if(!order) throw new Error("Something went wrong in DB!");   
    return order;
}
async function getOrderById(orderId) {
    const order = await orderSchema.findById(orderId).populate('items.product');
    if(!order) throw new Error("Something went wrong in DB!");   
    return order;
}

module.exports = {
    createOrderDB,
    getOrderById,
    getOrderByUserId
};