const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./utils/dbConnection");

app.use(cors());
app.use(express.json());

const itemsRouter = require("./routes/Items.routes");
app.use("/items", itemsRouter);

dbConnection();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
