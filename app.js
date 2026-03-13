const mongoose = require("mongoose");
const { createUser, login } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");
const auth = require("./middlewares/auth");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1/wtwr_db")
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log("DB error", err));

const express = require("express");

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.post("/signup", createUser);
app.post("/signin", login);
app.get("/items", getItems);
app.use(auth);
app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
