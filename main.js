const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  return res.json({ message: "Now This is Changed" });
});

app.listen(PORT, () => {
  console.log("server running at port:", PORT);
});
