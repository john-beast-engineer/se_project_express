const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/wtwr_db")
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log("DB error", err));

const express = require("express");

const { PORT = 3001 } = process.env;

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "69a3fcee8a1863ff27fb4fd1",
  };
  next();
});
app.use("/", require("./routes"));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
