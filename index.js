const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./utils/dbConnection");

app.use(cors());
app.use(express.json());

const itemsRoute = require("./routes/Items.routes");
const customerRoute = require("./routes/customers.routes");
app.use("/items", itemsRoute);
app.use("/customer", customerRoute);

dbConnection();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
