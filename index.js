const express = require("express");
const { resolve } = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const port = 3010;

app.use(express.static("static"));

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB");
  });

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
