const express = require("express");
const router = express.Router();
const { findItem, createItem, updateItem, deleteItem } = require("../controllers/items.controller");
// Middleware
const checkLogin = require('../middlewares/checkLogin')

// To find the items
router.get("/", checkLogin, findItem);

// To create Item
router.post("/", checkLogin, createItem);

// To update the Item
router.patch('/update', checkLogin, updateItem);

// To delete item 
router.delete('/delete', checkLogin, deleteItem);
  
// Exporting Routes
module.exports = router;
