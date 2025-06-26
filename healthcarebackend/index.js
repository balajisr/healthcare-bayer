const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("First commit!");
});

const PORT = 3000;

app.listen(PORT, (err) => {
  console.log(err);
});
