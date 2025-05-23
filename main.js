const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  return res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("server running at port:", PORT);
});

module.exports = app;
