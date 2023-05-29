require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiRouter = require("./routes/routes");

mongoose.connect(process.env.URL_DATABASE);
let db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", (err, data) => {
  if (err) return console.log(err);
  console.log(`Database Access`);
});

app.use("/", express.json(), apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
