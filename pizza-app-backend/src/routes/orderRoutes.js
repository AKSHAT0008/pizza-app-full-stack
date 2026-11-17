const express = require("express");
const {createOrderController, getOrderByUserIdController, getOrderByIdController} = require("../controllers/ordersController");
const { isLoggedIn } = require("../validation/authValidator");
const orderRouter = express.Router();

console.log("Hitting ordder route");

orderRouter.post("/create",isLoggedIn,createOrderController);
orderRouter.get("/get-by-user",isLoggedIn,getOrderByUserIdController);
orderRouter.get("/get-by-id/:orderID",isLoggedIn,getOrderByIdController);

module.exports = orderRouter;