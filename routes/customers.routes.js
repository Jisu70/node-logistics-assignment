const express = require("express");

const router = express.Router();

// controller
const { saveData, loginUser } = require("../controllers/customer.controller");
// Signup Route
router.post("/signup", saveData);
//Login
router.post("/login", loginUser);
//Get all user
// router.get("/get-alluser", userController.getAllUser);

module.exports = router;
