const express = require("express");
const cors = require("cors");
process.env.PORT = process.env.PORT || 5555;

const app = express();
app.use(cors());

app.all("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log(`🚀 Super powerful api running on port: ${process.env.PORT}`);
});
