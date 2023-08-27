const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  deliveryVehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "deliveryVehicle",
    required: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
