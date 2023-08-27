const Item = require("../models/item");

// Find item
const findItem = async (req, res) => {
  try {
    const items = await Item.find({ customerId: req.userId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Item
const createItem = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = new Item({
      name,
      price,
      customerId: req.userId,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Item
const updateItem = async (req, res) => {
  const userId = req.userId;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  try {
    const result = await Item.findById(userId);
    if (result) {
      result.name = updatedName;
      result.price = updatedPrice;
      await result.save();
      res.status(200).json({ message: "Expenses updated successfully." });
    } else {
      throw new Error("Cannot edit");
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
};

// To delete Item
const deleteItem = async (req, res) => {
  const id = req.body.id;
  try {
    const result = await Item.findById(id);
    if (!result) {
      return res.status(404).json({ error: "Expense not found." });
    }
    await result.deleteOne();
    console.log("Item DESTROYED");
    res.json({ message: "Item deleted successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred." });
  }
};

module.exports = {
  findItem,
  createItem,
  updateItem,
  deleteItem,
};
