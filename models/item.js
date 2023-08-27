const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
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
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
