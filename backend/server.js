const express = require("express");
const attendees = require("./attendees.json");
const cors = require("cors");
process.env.PORT = process.env.PORT || 80;

const app = express();
app.use(cors());

app.get("/attendees", (_, res) => res.json(attendees));
app.all("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(process.env.PORT, err => {
  if (err) throw err;
  console.log(`🚀 Super powerful api running on port: ${process.env.PORT}`);
});
