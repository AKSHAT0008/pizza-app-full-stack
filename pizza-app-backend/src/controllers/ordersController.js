const {createOrder, getOrderByIdService, getOrderByUserIdService} = require("../services/orderService");

async function createOrderController(req,res) {
    const userID = req.user._id; 
    const address = req.body.address;
    const paymentMethod = req.body.paymentMethod;
    console.log(userID, address , paymentMethod);
    
    try {
        const order = await createOrder(userID,address,paymentMethod);
        res.status(200).json({
            success: true,
            message: "Order placed successfully",
            data: order,
        });
    } catch (error) {
        console.error("Order Error: ", error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    } 
}

async function getOrderByIdController(req,res) {
    
    try {
        const orderID = req.params.orderID;
        const order = await getOrderByIdService(orderID);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
            data: order,
        });
    } catch (error) {
        console.error("Order Error: ", error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
async function getOrderByUserIdController(req,res) {
    
    try {
        const userID = req.user._id;
        const order = await getOrderByUserIdService(userID);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
            data: order,
        });
    } catch (error) {
        console.error("Order Error: ", error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    createOrderController,
    getOrderByIdController,
    getOrderByUserIdController
};