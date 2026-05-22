require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");

const { createUser, login } = require("./controllers/users");
const { getItems } = require("./controllers/clothingItems");
const auth = require("./middlewares/auth");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const errorHandler = require("./middlewares/error-handler");
const {
  validateUserInfoBody,
  validateAuthentication,
} = require("./middlewares/validation");

mongoose
  .connect("mongodb://127.0.0.1/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    throw err;
  });

const { PORT = 3001 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.post("/signup", validateUserInfoBody, createUser);
app.post("/signin", validateAuthentication, login);
app.get("/items", getItems);

app.use(auth);
app.use("/", require("./routes"));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
