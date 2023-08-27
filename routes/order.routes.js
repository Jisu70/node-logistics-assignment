const express = require("express");
const router = express.Router();
const { createOrder, getOrdr, orderById, updateOrder, deleteOrder} = require('../controllers/order.controller')
//Middleware 
// const getItemPrice = require('../middlewares/getItemDetails')
// Create a new order
router.post("/createorder", createOrder);

// Get all orders
router.get("/orders", getOrdr);

// Get a specific order by ID
router.get("/orders/:id", orderById);

// Update an order by ID
router.patch("/orders/:id", updateOrder);

// Delete an order by ID
router.delete("/orders/:id", deleteOrder);

module.exports = router ;